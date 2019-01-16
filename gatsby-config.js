module.exports = {
  siteMetadata: {
    title: `ramenjuniti`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "ramenjuniti",
        short_name: "ramenjuniti",
        start_url: "/",
        background_color: "#BEC8C8",
        theme_color: "#FAAD13",
        display: "minimal-ui",
        icon: "src/assets/img/myicon.png"
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#FAAD13"
        }
      }
    },
    `gatsby-transformer-remark`,
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
