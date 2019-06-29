module.exports = {
  siteMetadata: {
    title: `My First Blog`,
    author: `Mr Q`,
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark'
  ]
}