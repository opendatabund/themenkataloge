// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`



module.exports = {
  siteName: 'Themenkataloge des Bundes',
  siteUrl: 'https://thilakm-git.github.io',
  pathPrefix: '/themenkataloge.bund',
  templates: {
    themenkatalog: '/:title',
    Tag: '/tag/:id'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'themenkatalog',
        path: 'content/catalogue/*.md',
        component: 'src/templates/themenkatalog.vue',
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
