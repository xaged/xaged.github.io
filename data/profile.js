/**
 * SITE AND PROFILE CONFIGURATION
 */

const PROFILE_DATA = {
  name: "S\u039BIF",
  avatar: "assets/avatar.png",
  
  // Focus areas
  interests: `Chaos Theory / Bioinformatics / Real-Time Systems / ×64 ASM / RE / C / C#`,

  // Articles I liked reading
  readings: [
    { title: "terrytao.wordpress.com/career-advice/work-hard/", url: "https://terrytao.wordpress.com/career-advice/work-hard/" },
    { title: "paulgraham.com/greatwork.html", url: "https://www.paulgraham.com/greatwork.html" },
    { title: "a16z.com/the-techno-optimist-manifesto/", url: "https://a16z.com/the-techno-optimist-manifesto/" }
  ],

  // Contact email
  email: "cried@outlook.in",

  // Quote displayed only on the main page
  quote: "— Practice like you have never won, perform like you have never lost"
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PROFILE_DATA;
}
