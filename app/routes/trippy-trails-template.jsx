import { useLoaderData } from '@remix-run/react'
import { defer, json } from '@shopify/remix-oxygen'
import { Column, PageTitle } from '../components/Components'

export function processReviews(reviews) {
  return reviews.nodes.map((review) => ({
    id: review.id,
    rating: JSON.parse(review.rating.value).value,
    summary: review.summary.value,
    reviewerName: review.reviewerName.value,
    countryEmoji: review.countryEmoji.value,
    title: review.title.value,
  }))
}

export async function loader({ params, context }) {
  const { reviews } = await context.storefront.query(
    LANDING_PAGE_QUERY,
    {
      variables: {},
    },
  )

  const recommendedProducts = context.storefront.query(
    RECOMMENDED_PRODUCTS_QUERY,
  )

  return defer({
    reviews: processReviews(reviews),
    recommendedProducts,
  })
}

export default function LandingPage() {
  const { reviews, recommendedProducts } = useLoaderData()
  return (
    <Column>
      <PageTitle>Hi!</PageTitle>
    </Column>
  )
}

export const LANDING_PAGE_QUERY = `#graphql
  query LandingPage(
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    reviews: metaobjects(type: "product_ratings", first: 10) {
    nodes {
      id
      type
      rating: field(key: "rating") {
        value
      }
      summary: field(key: "review_summary") {
        value
      }
      reviewerName: field(key: "reviewer_name") {
        value
      }
      countryEmoji: field(key: "country_emoji") {
        value
      }
      title: field(key: "review_title") {
        value
      }
    }
  }
  }
`

export const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 6, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`
