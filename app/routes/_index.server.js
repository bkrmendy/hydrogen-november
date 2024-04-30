import shopify from '~/shopify.server'

export const action = async ({ request }) => {
  console.log('action!')
  const { admin } = await shopify.authenticate.admin(
    request,
  )

  const response = await admin.graphql(
    `#graphql
    mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
      metaobjectUpdate(id: $id, metaobject: $metaobject) {
        metaobject {
          handle
          rating: field(key: "rating") {
            value
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    {
      variables: {
        id: 'gid://shopify/Metaobject/8960933910',
        metaobject: {
          fields: [
            {
              key: 'rating',
              value: '3.0',
            },
          ],
        },
      },
    },
  )

  const data = await response.json()
  console.log(data)
  return data
}
