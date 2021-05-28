/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`, 
      options: {
        fonts: [
          `Fascinate`,
          `open sans` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Tempo Turtle",
        short_name: "Tempo Turtle",
        start_url: "/",
        icon: `logo.svg`, // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: `logo.svg`
      }
    },
    `gatsby-plugin-smoothscroll`, `gatsby-plugin-styled-components`,`gatsby-plugin-react-helmet`
  ],
};
