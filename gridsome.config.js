// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Themenkataloge des Bundes',
  siteUrl: 'https://opendatabund.github.io',
  pathPrefix: '/themenkataloge',
  templates: {
    Themenkatalog: '/:title',
    Tag: '/tag/:id'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Themenkatalog',
        path: 'content/catalogue/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Docs',
        path: 'content/documentation/*.md',
      }
    },
  ],
  transformers: {
    remark: {}
  }
};
