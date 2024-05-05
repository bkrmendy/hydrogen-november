import { Suspense } from 'react'
import { ProductCard, TypographyTitle } from './Components'
import { Await } from '@remix-run/react'
import { RecommendedProductsGrid } from './Layout'

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery>;
 * }}
 */
export function RecommendedProducts({ products }) {
  return (
    <div className='recommended-products'>
      <TypographyTitle level={2}>
        Featured Products
      </TypographyTitle>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({ products }) => {
            return (
              <RecommendedProductsGrid>
                {products.nodes.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    handle={product.handle}
                    image={product.images.nodes[0]}
                    title={product.title}
                    price={
                      product.priceRange.minVariantPrice
                    }
                    backgroundColorIndex={i}
                  />
                ))}
              </RecommendedProductsGrid>
            )
          }}
        </Await>
      </Suspense>
      <br />
    </div>
  )
}
