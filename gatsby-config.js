module.exports = {
  siteMetadata: {
    title: `Estefanía Scala`,
    description: `Soy Estefanía Scala, Licenciada en Marketing y Comunicación por el 
    Tecnológico de Monterrey. Cuento con un Máster de Comunicación y Relaciones Públicas por parte del ESIC, un Máster en Imagen Personal y Estilismo y Máster en Imagen Corporativa, ambos por ASTIDI en Barcelona.`,
    author: `@oswaldo_zc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-estefania.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-breakpoints`,
      options: {
        queries: {
          sm: "(min-width: 576px)",
          md: "(min-width: 768px)",
          lg: "(min-width: 992px)",
          xl: "(min-width: 1140px)",
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
