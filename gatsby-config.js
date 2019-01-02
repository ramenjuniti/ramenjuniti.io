module.exports = {
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
        icons: [
          {
            src: `./src/assets/img/me.png`,
            sizes: `180x180`,
            type: `image/png`
          },
          {
            src: `./src/assets/img/me.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `./src/assets/img/me.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
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
          "primary-color": "#FAAD13",
          "layout-body-background": "#BEC8C8"
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
