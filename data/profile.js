/**
 * SITE AND PROFILE CONFIGURATION
 */

const PROFILE_DATA = {
  name: "S\u039BIF",
  avatar: "assets/avatar.png",
  
  // Focus areas
  interests: `RE / C / Bioinformatics / OSINT / Real-Time Systems / x64 ASM`,

  // About / Background
  about: `hi, im just deeply curious about how things work, i'll keep things minimal as possible here related what i've done in both com and various forums/web3 communities, my biggest work/contribution has primarily revolved around project blackglass, exploring deterministic execution under resource contention, alongside resolving execution bottlenecks and latency issues within the system. if you would like to know more about my work feel free to reach me out.`,

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
