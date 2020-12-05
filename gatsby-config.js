/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "A Torch on the Web",
    siteUrl: "https://a-torch-on-the-web.netlify.app",
    description:
      'A Torch on the Web is a companion app for Michael Elliott\'s "A Torch in the Dark," a solo dungeon crawling tabletop RPG that uses the Forged in the Dark rules system.',
    author: "business-phil",
  },
  plugins: ["gatsby-plugin-react-helmet"],
};
