const config = require("./data/config");

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    description: config.siteDescription,
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TQGNQ3",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: "/",
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icon: "static/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: {frontmatter: { draft: { ne: true } }}
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Gatsby RSS Feed",
          },
        ],
      },
    },
  ],
};

// gatsby-plugin-sitemap - Gera um sitemap automático no build;
// gatsby-plugin-offline - Dá suporte para o site funcionar offline;
// gatsby-plugin-manifest - Cria um manifest sem complicações;
// gatsby-plugin-google-analytics - Dá suporte para o analytics no seu site;
// gatsby-plugin-google-feed - Cria um feed RSS para o seu site.
// gatsby-transformer-remark: é responsável por transformar os posts do blog escritos em markdown para HTML;
// gatsby-plugin-react-helmet: O helmet é um componente que permite você controlar o head do seu site. Vai ser muito útil para trocar o title e description das páginas;
// gatsby-source-filesystem: usado para "pegar" dados dos arquivos do sistema, de modo que possamos usá-los no Gatsby.
