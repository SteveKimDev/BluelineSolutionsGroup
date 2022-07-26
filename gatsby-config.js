module.exports = {
  siteMetadata: {
    title: `Blueline Solutions Group`,
    description: `Serving logistical services to domestic and international markets.`,
    author: `@stevekimdev`,
    siteUrl: `https://bluelinesolutionsgroup.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Blueline Solutions Group`,
        short_name: `Blueline`,
        start_url: `/`,
        background_color: `#0d1117`,
        theme_color: `#0d1117`,
        display: `standalone`,
        cache_busting_mode: `none`,
        icon: 'src/images/logo.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
          omitKeys: [
            'xmlnsDc',
            'xmlnsCc',
            'xmlnsRdf',
            'xmlnsSvg',
            'xmlnsSodipodi',
            'xmlnsInkscape',
            'xmlnsSerif',
            'serifId',
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-1N8SWLN1T2', // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
};
