module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#FAAD13",
          "layout-body-background": "#BEC8C8"
        }
      }
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        isArray: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`]
      }
    }
  ]
};
