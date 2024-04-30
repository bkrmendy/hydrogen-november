import shopify from '~/shopify.server'

export default async function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
) {
  shopify.addDocumentResponseHeaders(
    request,
    responseHeaders,
  )
}
