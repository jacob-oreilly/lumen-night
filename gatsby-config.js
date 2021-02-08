module.exports = {
  siteMetadata: {
    title: "lumen-night",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `gallery`,
        path: `${__dirname}/content/gallery/`,
        fonts: [
          {
            family: 'Playfair Display',
            variants: ['400', '500', '600', '700', '800', '900']
          },
        ],
      },

      __key: "images",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
