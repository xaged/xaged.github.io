/**
 * BLOG ENTRIES
 * 
 * To add a new post, add an object to the array:
 * {
 *   title: "Your Post Title",
 *   slug: "your-post-slug",
 *   content: `Your markdown writing here...`
 * }
 */

const BLOGS_DATA = [
  {
    title: "optimising pharmacology",
    slug: "optimising-pharmacology",
    content: `coming soon`
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = BLOGS_DATA;
}
