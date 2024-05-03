import { Await } from '@remix-run/react'
import { Suspense } from 'react'
import { Aside } from '~/components/Aside'
import { Footer } from '~/components/Footer'
import { Header, HeaderMenu } from '~/components/Header'
import { CartMain } from '~/components/Cart'
import {
  PredictiveSearchForm,
  PredictiveSearchResults,
} from '~/components/Search'
import { Row } from './Components'

export function BlogComponent({ title, children }) {
  return (
    <div className='blog'>
      {title}
      {children}
    </div>
  )
}

export function RecommendedProductsGrid({ children }) {
  return (
    <Row centerH gap='3em' style={{ overflowX: 'scroll' }}>
      {children}
    </Row>
  )
}

/**
 * @param {LayoutProps}
 */
export function Layout({
  cart,
  children = null,
  footer,
  header,
  isLoggedIn,
}) {
  return (
    <>
      <CartAside cart={cart} />
      <SearchAside />
      <MobileMenuAside
        menu={header.menu}
        shop={header.shop}
      />
      <Header
        header={header}
        cart={cart}
        isLoggedIn={isLoggedIn}
      />
      <main>{children}</main>
    </>
  )
}

/**
 * @param {{cart: LayoutProps['cart']}}
 */
export function CartAside({ cart }) {
  return (
    <Aside id='cart-aside' heading='CART'>
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await resolve={cart}>
          {(cart) => {
            return <CartMain cart={cart} layout='aside' />
          }}
        </Await>
      </Suspense>
    </Aside>
  )
}

export function SearchAside() {
  return (
    <Aside id='search-aside' heading='SEARCH'>
      <div className='predictive-search'>
        <br />
        <PredictiveSearchForm>
          {({ fetchResults, inputRef }) => (
            <div>
              <input
                name='q'
                onChange={fetchResults}
                onFocus={fetchResults}
                placeholder='Search'
                ref={inputRef}
                type='search'
              />
              &nbsp;
              <button type='submit'>Search</button>
            </div>
          )}
        </PredictiveSearchForm>
        <PredictiveSearchResults />
      </div>
    </Aside>
  )
}

/**
 * @param {{
 *   menu: HeaderQuery['menu'];
 *   shop: HeaderQuery['shop'];
 * }}
 */
export function MobileMenuAside({ menu, shop }) {
  return (
    <Aside id='mobile-menu-aside' heading='MENU'>
      <HeaderMenu
        menu={menu}
        viewport='mobile'
        primaryDomainUrl={shop.primaryDomain.url}
      />
    </Aside>
  )
}

/**
 * @typedef {{
 *   cart: Promise<CartApiQueryFragment | null>;
 *   children?: React.ReactNode;
 *   footer: Promise<FooterQuery>;
 *   header: HeaderQuery;
 *   isLoggedIn: boolean;
 * }} LayoutProps
 */

/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
