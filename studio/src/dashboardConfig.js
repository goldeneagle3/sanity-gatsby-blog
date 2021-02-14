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
                  buildHookId: '6028fb70f6499107213a13a5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-brm2x3e1',
                  apiId: '17a630b9-4e8f-42b3-8ce1-b6a1d5feabd4'
                },
                {
                  buildHookId: '6028fb71e65943e6ae0174fd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6qxcmrbq',
                  apiId: 'dfd13d0f-b1d7-4ff8-973b-2425d66bf720'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/goldeneagle3/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6qxcmrbq.netlify.app', category: 'apps' }
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
