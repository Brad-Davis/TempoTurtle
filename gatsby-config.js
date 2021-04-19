/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/TempoTurtle",
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
    `gatsby-plugin-smoothscroll`, `gatsby-plugin-styled-components`
  ],
};
