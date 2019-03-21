module.exports = {
    siteMetadata: {
        title: "Avon page",
        description: "This is a Avon page.",
      },
      plugins: [
        `gatsby-plugin-sass`,
        'react-router-dom',
        {
            resolve:  `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/components/images`,
            },
        },
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: 'my-website-bucket'
            },
        },
    ],
}