module.exports = {
    siteMetadata: {
        title: "Welcome to Avon",
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
                bucketName: 'test-avon-bucket'
            },
        },
    ],
}