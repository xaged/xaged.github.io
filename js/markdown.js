/**
 * MINIMAL MARKDOWN PARSER
 * Converts simple Markdown to clean HTML for article reading.
 */

const MarkdownParser = {
  render: function(md) {
    if (!md) return "";
    let html = md.trim().replace(/\r\n/g, "\n");

    // Code blocks
    html = html.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, function(match, lang, code) {
      return `<pre><code>${MarkdownParser.escapeHtml(code.trim())}</code></pre>`;
    });

    // Inline code
    html = html.replace(/`([^`\n]+)`/g, function(match, code) {
      return `<code>${MarkdownParser.escapeHtml(code)}</code>`;
    });

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Blockquotes
    html = html.replace(/^\> (.*$)/gim, '<blockquote><p>$1</p></blockquote>');

    // Bold & Italics
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

    // Lists
    html = html.replace(/^[-*+] (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>(?:(?!<li).)*?<\/li>\n?)+/gim, '<ul>$&</ul>');

    html = html.replace(/^\d+\. (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>(?:(?!<li).)*?<\/li>\n?)+/gim, '<ol>$&</ol>');

    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener">$1</a>');

    // Paragraphs
    const blocks = html.split(/\n\s*\n/);
    html = blocks.map(b => {
      b = b.trim();
      if (!b) return '';
      if (/^(<h[1-6]|<pre|<blockquote|<ul|<ol)/i.test(b)) return b;
      return `<p>${b.replace(/\n/g, '<br />')}</p>`;
    }).join('\n');

    return html;
  },

  escapeHtml: function(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = MarkdownParser;
}
