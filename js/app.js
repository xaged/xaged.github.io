/**
 * MINIMAL PORTFOLIO APP
 * Matches SΛIF brutalist aesthetic with clean modular data.
 */

const App = {
  init: function() {
    window.addEventListener('hashchange', () => this.route());
    this.route();
  },

  route: function() {
    const hash = window.location.hash.slice(1);
    if (hash.startsWith('post/')) {
      const slug = hash.replace('post/', '');
      this.renderPost(slug);
    } else {
      this.renderHome();
    }
  },

  renderHome: function() {
    const root = document.getElementById('main-article');
    const profile = typeof PROFILE_DATA !== 'undefined' ? PROFILE_DATA : {};
    const blogs = typeof BLOGS_DATA !== 'undefined' ? BLOGS_DATA : [];

    let html = `
      <div class="profile-header">
        <img src="${profile.avatar || 'assets/avatar.png'}" alt="Avatar" class="profile-avatar" />
        <h1>${profile.name || 'S\u039BIF'}</h1>
      </div>

      ${profile.bio ? `<p>${profile.bio}</p>` : ''}
      ${profile.interests ? `<p>${profile.interests}</p>` : ''}

      <h2>BLOG</h2>
    `;

    // Blog links from data/blogs.js
    if (blogs.length === 0) {
      html += `<p style="color:var(--text-muted)">No posts published yet.</p>`;
    } else {
      blogs.forEach(post => {
        const link = post.url ? post.url : `#post/${post.slug || post.id}`;
        const target = post.url ? 'target="_blank" rel="noopener"' : '';
        html += `
          <p>
            <a href="${link}" ${target}>${post.title}</a>
            ${post.date ? `<span class="post-date">(${post.date})</span>` : ''}
          </p>
        `;
      });
    }

    // Articles I liked reading
    if (profile.readings && profile.readings.length > 0) {
      html += `<h2>ARTICLES I LIKED READING</h2>`;
      profile.readings.forEach(item => {
        html += `<p><a href="${item.url}" target="_blank" rel="noopener">${item.title}</a></p>`;
      });
    }

    // Contact
    const email = profile.email || (profile.contacts && profile.contacts[0] ? profile.contacts[0].label : '');
    if (email) {
      html += `<p style="margin-top: 2.5rem;">Contact: <a href="mailto:${email}">${email}</a></p>`;
    }

    // Quote ONLY on the first page
    if (profile.quote) {
      html += `
        <div class="footer-line">
          <span>${profile.quote}</span>
        </div>
      `;
    }

    root.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'instant' });
  },

  renderPost: function(slug) {
    const root = document.getElementById('main-article');
    const blogs = typeof BLOGS_DATA !== 'undefined' ? BLOGS_DATA : [];
    const profile = typeof PROFILE_DATA !== 'undefined' ? PROFILE_DATA : {};
    const post = blogs.find(p => (p.slug === slug || p.id === slug));

    if (!post) {
      root.innerHTML = `
        <p><a href="#" class="back-link">← BACK</a></p>
        <h1>404 NOT FOUND</h1>
        <p>This essay does not exist.</p>
        <div class="footer-line"><a href="#">← BACK</a> <span>${profile.name || 'S\u039BIF'}</span></div>
      `;
      return;
    }

    const contentHtml = window.MarkdownParser ? window.MarkdownParser.render(post.content) : post.content;

    // Inside post reading view: NO quote, only back button and author name
    root.innerHTML = `
      <p><a href="#" class="back-link">← BACK</a></p>
      <h1>${post.title}</h1>
      ${post.date ? `<p class="post-date" style="margin: 0.5rem 0 1.5rem 0;">Published on ${post.date}</p>` : ''}
      
      <div class="article-body">
        ${contentHtml}
      </div>

      <div class="footer-line">
        <a href="#">← BACK</a>
        <span>${profile.name || 'S\u039BIF'}</span>
      </div>
    `;

    window.scrollTo({ top: 0, behavior: 'instant' });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
