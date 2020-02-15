module.exports = {
  siteMetadata: {
    title: `Coffee Chats`,
    description: `Drinks coffee and chats with remarkable people.`,
    author: `Matt Collins`,
    twitter: `http://twitter.com/@chatscoffee`,
    instagram: `https://www.instagram.com/mattcollins_coffeechats/`,
    facebook: `http://facebook.com/CoffeeChatswithMattCollins/`,
    youtube: ``,
    apple: `https://podcasts.apple.com/podcast/id1271187091?ct=podlink&mt=2`,
    stitcher: `https://www.stitcher.com/s?fid=159258`,
    google: `https://podcasts.google.com/?feed=aHR0cDovL2NvZmZlZWNoYXRzLmxpYnN5bi5jb20vcnNz`,
    pocket: `https://pca.st/itunes/1271187091`,
    spotify: `https://open.spotify.com/show/3ZEyZ3x0MzaDavwV7vkEjj`,
    overcast: `https://overcast.fm/itunes1271187091`,
    castbox: `https://castbox.fm/vic/1271187091`,
    castro: `https://castro.fm/itunes/1271187091`,
    podbean: ``,
    beaker: `https://www.breaker.audio/shows?feed_url=http%3A%2F%2Fcoffeechats.libsyn.com%2Frss`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
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
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `http://coffeechats.libsyn.com/rss`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
