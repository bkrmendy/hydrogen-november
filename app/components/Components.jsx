// Typographic Components
// .page-title       { font-size: 60px; line-height: 120% }
// .section-title    { font-size: 48px; line-height: 140% }
// .subsection-title { font-size: 40px; line-height: 120% }
// .section-subtitle { font-size: 20px; line-height: 140%; font-weight: bold }

// Text styles
// .large     { font-size: 20px; line-height: 140% }
// .regular             { font-size: 16px; line-height: 140%; }
// .smaller     { font-size: 15px; line-height: 140%; }

import { StarIcon } from '@heroicons/react/24/solid'
import { Link } from '@remix-run/react'
import { Image, Money } from '@shopify/hydrogen'

export const Placeholder = ({
  style,
  margin,
  fill,
  fixed = true,
}) => (
  <div
    style={{
      backgroundColor: 'rgb(225 225 225 / 25%)',
      border: '1px dashed rgb(61 154 255)',
      borderRadius: 10,
      minWidth: fixed ? 100 : null,
      minHeight: fixed ? 100 : null,
      flexGrow: fill ? 1 : null,
      alignSelf: fill ? 'stretch' : null,
      margin: margin ? '10px' : null,
      ...style,
    }}
  />
)

export const PageTitle = ({ style, children }) => (
  <h1
    style={{
      fontFamily: 'Amiko',
      fontSize: 60,
      lineHeight: '120%',
      fontWeight: 700,
      padding: 0,
      margin: '2rem 0',
      ...style,
    }}
  >
    {children}
  </h1>
)
export const SectionTitle = ({ style, children }) => (
  <h2
    style={{
      fontFamily: 'Amiko',
      fontSize: '48px',
      lineHeight: '120%',
      padding: 0,
      margin: 0,
      textAlign: 'center',
      fontWeight: 700,
      ...style,
    }}
  >
    {children}
  </h2>
)
export const SubsectionTitle = ({ style, children }) => (
  <h3
    style={{
      fontFamily: 'Amiko',
      fontSize: '40px',
      lineHeight: '120%',
      padding: 0,
      margin: 0,
      textAlign: 'center',
      ...style,
    }}
  >
    {children}
  </h3>
)

export const SectionSubtitle = ({ style, children }) => (
  <h5
    style={{
      fontFamily: 'Amiko',
      fontSize: '20px',
      lineHeight: '140%',
      padding: 0,
      margin: 0,
      textAlign: 'center',
      ...style,
    }}
  >
    {children}
  </h5>
)

export const Text = ({
  level,
  deemphasized,
  emboldened,
  children,
  style,
}) => {
  const defaultText = {
    lineHeight: '140%',
    fontFamily: 'Amiko',
  }
  const large = { fontSize: '20px' }
  const embiggened = { fontSize: '17px' }
  const regular = { fontSize: '16px' }
  const smaller = { fontSize: '15px' }

  const resultingStyle =
    level === 'large'
      ? large
      : level === 'embiggened'
      ? embiggened
      : level === 'regular'
      ? regular
      : smaller

  return (
    <div
      style={{
        ...defaultText,
        ...resultingStyle,
        opacity: deemphasized ? 0.7 : 1,
        fontWeight: emboldened ? 'bold' : 'regular',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export const Grid = ({ left, right, padded, gap }) => (
  <div
    style={{
      display: 'flex',
      flexGrow: 1,
      padding: padded ? '20px' : 0,
      gap: gap ? '40px' : 0,
    }}
  >
    {left}
    {right}
  </div>
)

export const SpecialRow = ({
  imageContent,
  detailContent,
  inverted,
  style,
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: inverted
        ? '1.2fr 1fr'
        : '1fr 1.2fr',
      gap: '2em',
      ...style,
    }}
  >
    {inverted ? (
      <>
        {detailContent}
        {imageContent}
      </>
    ) : (
      <>
        {imageContent}
        {detailContent}
      </>
    )}
  </div>
)

export const Button = ({ children }) => <h1>{children}</h1>

export const Card = ({
  content,
  padded,
  gap,
  title,
  bottom,
}) => (
  <div
    style={{
      boxShadow:
        '0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075),       0 4px 4px hsl(0deg 0% 0% / 0.075),  0 8px 8px hsl(0deg 0% 0% / 0.075),      0 16px 16px hsl(0deg 0% 0% / 0.075)',
      padding: padded ? '10px' : 0,
      gap: gap ? '10px' : 0,
      width: '100%',
      borderRadius: 30,
      overflow: 'hidden',
    }}
  >
    <Column
      content={title}
      moreContent={content}
      evenMoreContent={bottom}
    />
  </div>
)

export const Section = ({
  padded,
  style,
  children,
  minHeight,
}) => (
  <section
    style={{
      padding: padded ? '1em 10em' : null,
      minHeight: minHeight ? '85vh' : null,
      display: 'flex',
      flexDirection: 'column',
      contain: 'layout',
      ...style,
    }}
  >
    {children}
  </section>
)

export const Row = ({
  padded,
  centerH,
  centerV,
  scrollable,
  wrap,
  gap,
  grow,
  style,
  children,
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      padding: padded ? '1em' : null,
      flexGrow: grow ? 1 : null,
      gap: gap ?? null,
      alignItems: centerV ? 'center' : null,
      justifyContent: centerH ? 'center' : null,
      flexWrap: wrap ? 'wrap' : null,
      contain: 'layout',
      maxWidth: scrollable ? '100%' : null,
      overflow: scrollable ? 'scroll' : null,
      scrollSnapType: 'x mandatory',
      scrollPadding: '20px',
      ...style,
    }}
  >
    {children}
  </div>
)

export const Column = ({
  padded,
  centerH,
  centerV,
  scrollable,
  wrap,
  gap,
  grow,
  style,
  children,
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      padding: padded ? '1em' : null,
      flexGrow: grow ? 1 : null,
      gap: gap ?? null,
      alignItems: centerH ? 'center' : null,
      justifyContent: centerV ? 'center' : null,
      flexWrap: wrap ? 'wrap' : null,
      contain: 'layout',
      maxHeight: scrollable ? '100%' : null,
      overflow: scrollable ? 'scroll' : null,
      scrollSnapType: 'y mandatory',
      scrollPadding: '20px',
      ...style,
    }}
  >
    {children}
  </div>
)
export const Page = ({ content, padded, gap }) => (
  <div
    style={{
      display: 'flex',
      direction: 'column',
      padding: padded ? '10px' : 0,
      gap: gap ? '10px' : 0,
      background: 'yellow',
    }}
  >
    {content}
  </div>
)

export const MenuBar = () => (
  <div
    style={{
      display: 'flex',
      height: 48,
      alignItems: 'center',
      gap: 20,
      flexGrow: 1,
      width: '100%',
    }}
  >
    <div>Home</div>
    <div>Collections</div>
    <div>Featured</div>
    <div>Just In</div>
  </div>
)

export const HalfAndHalf = ({
  left,
  right,
  padded,
  gap,
  style,
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      padding: padded ? '20px' : 0,
      gap: gap ? '40px' : 0,
      ...style,
    }}
  >
    {left}
    {right}
  </div>
)

export const TwoFeatureCallout = ({
  left,
  right,
  style,
}) => (
  <HalfAndHalf
    style={{
      width: 530,
      height: 158,
      border: '1px solid var(--stroke-light)',
      borderRadius: 16,
      color: 'var(--color-light)',
      ...style,
    }}
    left={left}
    right={right}
  />
)

export const TrippyButton = ({
  children,
  price,
  style,
}) => (
  <button
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '10px 32px',
      borderRadius: 10,
      background: 'var(--yellow)',
      color: 'var(--color-dark)',
      border: 'none',
      width: 330,
      height: 70,
      boxShadow:
        '-5px 5px 0px 0px #000, 0px 5px 0px 0px #000, inset 0px 0px 0px 1px #000',
      fontFamily: 'Amiko',
      fontSize: 18,
      fontWeight: 'bold',
      ...style,
      cursor: 'pointer',
    }}
  >
    <span style={{ flexGrow: 1, textAlign: 'left' }}>
      {children}
    </span>
    {price && (
      <Row gap={5}>
        {typeof price === 'string' ? '$' + price : price}
        <img
          src='shoppingbag_black_small@2x.png'
          width={24}
          height={24}
          alt=''
        />
      </Row>
    )}
  </button>
)

export const Spacer = ({ height }) => (
  <div style={{ height: height ?? 36 }} />
)

export const Stars = ({ rating, style }) => (
  <Row style={{ justifyContent: 'flex-start', ...style }}>
    {Array.from({ length: rating ?? 1 }).map((_, i) => {
      // return <div>hi</div>
      return (
        <StarIcon
          key={'star' + i}
          style={{ width: 20, color: 'orange' }}
        />
      )
    })}
  </Row>
)

export const QuoteWithRating = ({
  quote,
  rating,
  backgroundColor,
  style,
}) => (
  <div
    style={{
      boxSizing: 'border-box',
      contain: 'layout',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      ...style,
    }}
  >
    <div
      style={{
        position: 'relative',
        top: 10,
        backgroundColor: 'var(--color-light)',
        borderRadius: 12,
        padding: '3px 8px',
      }}
    >
      <Stars rating={rating} />
    </div>
    <div
      style={{
        boxSizing: 'border-box',
        width: 250,
        backgroundColor: backgroundColor ?? null,
        color: 'var(--color-light)',
        padding: '1em',
        borderRadius: 12,
        fontFamily: 'Amiko',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '14px',
      }}
    >
      {quote}
    </div>
  </div>
)

export const DuplicatedImageWithBackground = ({
  image,
  backgroundColor,
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
    }}
  >
    <div
      style={{
        position: 'relative',
        top: 70,
        width: 350,
        height: 325,
        backgroundColor: backgroundColor ?? null,
        borderRadius: 20,
      }}
    />
    <img
      style={{
        position: 'absolute',
        top: 10,
        left: 242,
        scale: '0.8',
      }}
      srcSet={image + ' 2x'}
      alt=''
    />
    <img
      style={{ position: 'absolute', top: 10, left: 100 }}
      srcSet={image + ' 2x'}
      alt=''
    />
  </div>
)

const cardBackgroundColors = [
  'var(--yellow)',
  'var(--purple)',
  'var(--orange)',
  'var(--green)',
]

export const ProductCard = ({
  id,
  handle,
  image,
  title,
  price,
  backgroundColorIndex,
}) => {
  return (
    <Link
      key={id}
      className='recommended-product'
      to={`/products/${handle}`}
      style={{
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Column centerH style={{ contain: 'layout' }}>
        <div
          style={{
            position: 'absolute',
            zIndex: -1,
            width: '100%',
            height: '50%',
            bottom: 0,
            borderRadius: '10px 10px 0px 0px',
            backgroundColor:
              cardBackgroundColors?.[
                backgroundColorIndex %
                  cardBackgroundColors.length
              ] ?? null,
          }}
        />
        <Image
          data={image}
          width={250}
          style={{ marginBottom: 10 }}
        />
        <div
          style={{
            backgroundImage:
              'radial-gradient(#00000040 0%, #E1E1E100 67%)',
            height: 20,
            width: '100%',
            border: '0px rgb(229, 231, 235, 1)',
            marginBottom: 10,
          }}
          data-label='shadow'
        />
      </Column>
      <Column
        gap='1.5em'
        padded
        centerH
        style={{
          borderRadius: '0 0 12px 12px',
          border: '1px solid var(--stroke-light)',
          borderTop: 'none',
        }}
      >
        <Column style={{ alignSelf: 'flex-start' }}>
          <SectionSubtitle>{title}</SectionSubtitle>
          <Stars
            rating={5}
            style={{
              zoom: '0.6',
              gap: 3,
              marginTop: '0.5em',
            }}
          />
          <Column gap='0.5em' style={{ marginTop: '1em' }}>
            <Text>Colors available</Text>
            <ColorOptions />
          </Column>
        </Column>
        <Row
          style={{
            alignSelf: 'stretch',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text>Add quantity</Text>
          <QuantitySelector />
        </Row>
        <TrippyButton
          style={{ zoom: 0.8 }}
          price={<Money data={price} />}
        >
          Add to cart
        </TrippyButton>
        <Text style={{ fontWeight: 700 }}>
          View Details ❯
        </Text>
      </Column>
    </Link>
  )
}

export const ColorOption = ({ color }) => (
  <div
    style={{
      width: 36,
      height: 36,
      borderRadius: '50%',
      backgroundColor: color,
      boxShadow:
        '-3px 1px 0px 0px #000, inset 0px 0px 0px 1px #000',
    }}
  />
)

export const ColorOptions = () => (
  <Row gap={10}>
    <ColorOption color='var(--yellow)' />
    <ColorOption color='var(--orange)' />
    <ColorOption color='var(--green)' />
    <ColorOption color='var(--purple)' />
  </Row>
)

export const ColorOptionsColumn = () => (
  <Column gap={10}>
    <ColorOption color='var(--yellow)' />
    <ColorOption color='var(--orange)' />
    <ColorOption color='var(--green)' />
    <ColorOption color='var(--purple)' />
  </Column>
)

export const BadgesColumn = () => (
  <Column gap={10}>
    <img alt='' srcSet='badge_01@2x.png 2x' />
    <img alt='' srcSet='badge_02@2x.png 2x' />
    <img alt='' srcSet='badge_03@2x.png 2x' />
    <img alt='' srcSet='badge_04@2x.png 2x' />
  </Column>
)

export const CircleButton = ({ children }) => (
  <Row
    centerH
    style={{
      width: 25,
      height: 25,
      borderRadius: '50%',
      backgroundColor: 'var(--orange)',
      alignItems: 'center',
      paddingBottom: 2,
      color: 'var(--color-light)',
    }}
  >
    {children}
  </Row>
)

export const QuantitySelector = () => (
  <Row
    centerV
    gap={15}
    style={{
      border: '1px solid var(--color-dark)',
      borderRadius: 999,
      padding: 6,
      boxShadow: '-2px 3px 0px 0px #000',
    }}
  >
    <CircleButton>-</CircleButton>
    <Text style={{ paddingTop: 3 }}>1</Text>
    <CircleButton>+</CircleButton>
  </Row>
)

export const DecorativeClouds = () => (
  <>
    <img
      data-label='decorative cloud'
      srcSet='decorative/cloud_topright@2x.png 2x'
      alt=''
      style={{ position: 'absolute', top: -12, right: -12 }}
    />
    <img
      data-label='decorative cloud'
      srcSet='decorative/cloud_topright@2x.png 2x'
      alt=''
      style={{
        position: 'absolute',
        rotate: '180deg',
        bottom: -20,
        left: -20,
      }}
    />
    <img
      data-label='decorative cloud'
      srcSet='decorative/cloud_topright@2x.png 2x'
      alt=''
      style={{
        position: 'absolute',
        rotate: '90deg',
        bottom: -20,
        right: -20,
      }}
    />
  </>
)
