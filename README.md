# SΛIF

Ultra-minimal brutalist portfolio.

# How It Works

* Profile image: assets/avatar.png
* Profile data: data/profile.js
* Blog posts: data/blogs.js

# Adding Blog Posts

Edit data/blogs.js and add your post object:

```javascript
{
  title: "Your Post Title",
  date: "2026-10-20",
  slug: "your-post-slug",
  content: `Your markdown writing here...`
}
```

# Run Locally

```powershell
python -m http.server 8080
```
Visit http://localhost:8080
