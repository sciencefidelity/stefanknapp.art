// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const clientConfig = require('./client-config')

module.exports = function (api) {
  api.loadSource(store => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    store.addMetadata('sanityOptions', clientConfig.sanity)
  })

  api.createSchema(({ addSchemaTypes }) => {
    addSchemaTypes(`
      type SanityDocument implements Node @infer {
        id: ID!
      }
    `)
  })

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allSanityPeriod(sortBy: "yearFrom", order: ASC) {
        edges {
          node {
            id
            title {
              en
              pl
            }
            slug {
              current
            }
            yearFrom
            yearTo
          }
        }
      }
    }`)
    const period = data.allSanityPeriod.edges
    period.forEach(({ node }, index) => {
      createPage({
        path: `/${node.slug.current}/`,
        component: './src/templates/SanityPeriod.vue',
        context: {
          id: node.id,
          yearFrom: node.yearFrom,
          yearTo: node.yearTo,
          prev: index === 0 ? null : period[index - 1].node,
          next: index === period.length - 1 ? null : period[index + 1].node,
        }
      })
    })
  })
}
