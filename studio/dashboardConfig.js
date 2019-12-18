export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df97b4bb64dcb00d419500c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9zr66ae8',
                  apiId: 'd2c6379d-f0b5-4ac4-bebd-acb12659e61c'
                },
                {
                  buildHookId: '5df97b4bfb22ac20186017e5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1xf9ju1o',
                  apiId: '338ffe6e-9edc-41e6-8dd3-9b16c1348f5f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simondodson/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1xf9ju1o.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
