import * as Utopia from 'utopia-api'
import {
  Column,
  DuplicatedImageWithBackground,
  Grid,
  HalfAndHalf,
  QuoteWithRating,
  Row,
  Section,
  Spacer,
  ProductFeatureRow,
  Stars,
  TrippyButton,
  TwoFeatureCallout,
  DecorativeClouds,
} from '../app/components/Components'
import { Illustration } from '../app/routes/_index'
import { Footer } from '../app/components/Footer'
import { Header } from '../app/components/Header'
import {
  BlogComponent,
  CartAside,
  Layout,
  MobileMenuAside,
  RecommendedProductsGrid,
  SearchAside,
} from '../app/components/Layout'
import { RecommendedProducts } from '../app/components/RecommendedProducts'
import {
  AntdTextVariants,
  AntdTitleVariants,
  AntdParagraphVariants,
} from '../utopia/antd.utopia'

import { TestimonialCard } from '../app/routes/_index'

const PlaceholderContent = {
  component: 'Placeholder',
  moduleName: 'utopia-api',
  variants: [],
}

const RowWithPlaceholdersVariant = {
  label: 'Row with Placeholders',
  imports:
    `import { Row } from "/app/components/Components"
     import { Placeholder } from "utopia-api"`,
  code: `<Row style={{ gap: 10 }} padded >
<Placeholder />
<Placeholder />
</Row>`,
}

const RowVariants = [
  RowWithPlaceholdersVariant,
  {
    label: 'Row - empty',
    imports:
      'import { Row } from "/app/components/Components"',
    code: `<Row />`,
  },
]

const SectionVariants = [
  {
    label: 'Section with Placeholder',
    imports:
      `import { Section } from "/app/components/Components"
      import { Placeholder } from "utopia-api"`,
    code: `<Section padded minHeight>
    <Placeholder />
</Section>`,
  },
  {
    label: 'Section - empty',
    imports:
      'import { Section } from "/app/components/Components"',
    code: `<Section />`,
  },
  {
    label: 'Section with Row',
    imports:
      `import { Section, Row } from "/app/components/Components"
      import { Placeholder } from "utopia-api"`,
    code: `<Section padded minHeight>
    <Row>
      <Placeholder />
      <Placeholder />
    </Row>
</Section>`,
  },
  {
    label: 'Section with Column',
    imports:
      `import { Section, Column } from "/app/components/Components"
      import { Placeholder } from "utopia-api"`,
    code: `<Section padded minHeight>
    <Placeholder />
</Section>`,
  },
  {
    label: 'Hero Section',
    imports: `
      import { Money } from "@shopify/hydrogen"
      import { Section, DecorativeClouds, ColorOptionsColumn, Column, Row, HalfAndHalf, TypographyTitle, TrippyButton, Spacer } from "/app/components/Components"
      import { Placeholder } from "utopia-api"
      import { Illustration } from "/app/routes/_index"
      `,
    code: `<Section
    horizontalPadding='medium'
    style={{ height: 800 }}
  >
    <HalfAndHalf
      left={
        <Column style={{ gap: 24 }}>
          <TypographyTitle level={1}>
            We produce high quality bags for lifestyle
          </TypographyTitle>
          <TrippyButton
            price={
              <Money
                data={{
                  amount: '59.00',
                  currencyCode: 'USD',
                }}
              />
            }
          >
            Add to Cart
          </TrippyButton>
          <Spacer />
          <Illustration />
        </Column>
      }
      right={
        <Row gap={42}>
          <Column centerV>
            <ColorOptionsColumn />
          </Column>
          <Column centerV centerH grow>
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '40%',
                bottom: '15%',
                borderRadius: 30,
                backgroundColor: 'var(--yellow)',
                zIndex: -1,
              }}
            >
              <DecorativeClouds />
            </div>
            <img
              alt='Hero Image'
              srcSet='merchandise/bag-hero@2x.png 2x'
            />
          </Column>
          <Column centerV gap={10}>
            <img
              alt='Badge 1'
              srcSet='badge_01@2x.png 2x'
            />
            <img
              alt='Badge 2'
              srcSet='badge_02@2x.png 2x'
            />
            <img
              alt='Badge 3'
              srcSet='badge_03@2x.png 2x'
            />
            <img
              alt='Badge 4'
              srcSet='badge_04@2x.png 2x'
            />
          </Column>
        </Row>
      }
    />
  </Section>`,
  },
  {
    label: 'Testimonial Section',
    imports: `
    import { Section, DecorativeClouds, ColorOptionsColumn, Column, Row, HalfAndHalf, TypographyTitle, TrippyButton, Spacer, TypographyParagraph } from "/app/components/Components"
    import { Placeholder } from "utopia-api"
    import { TestimonialCard } from "/app/routes/_index"
    `,
    code: `<Section
    style={{ background: 'white', paddingTop: 100 }}
  >
    <Column centerH>
      <Column
        centerH
        centerV
        style={{
          paddingLeft: '21em',
          paddingRight: '21em',
          marginBottom: 50,
        }}
      >
        <TypographyTitle level={5}>
          They love us ❤️
        </TypographyTitle>
        <TypographyTitle
          level={2}
          style={{ marginTop: 8, position: 'relative' }}
        >
          <img
            style={{
              position: 'absolute',
              top: -55,
              left: -55,
              transform: 'scale(.5)',
              zIndex: -1,
            }}
            src='decorative/swirl_black_02@2x.png'
            alt='decorative swirl'
          />
          <img
            style={{
              position: 'absolute',
              top: 0,
              right: -80,
              transform: 'scale(.5)',
              zIndex: -1,
            }}
            src='decorative/underline_01@2x.png'
            alt='decorative swirl'
          />
        </TypographyTitle>
        <TypographyTitle level={2}>
          some of our happy faces
        </TypographyTitle>
        <TypographyParagraph
          level='large'
          style={{
            marginTop: 16,
            marginBottom: 16,
            textAlign: 'center',
          }}
        >
          Our backpacks are worn and loved by millions.
          But don't take it from us - here is what some
          of our faceless customers are saying about our
          products and service.
        </TypographyParagraph>
      </Column>
      <Row
        gap={27}
        scrollable
        style={{ marginBottom: 36 }}
      >
        {testimonials.map((testimonial) => {
          return (
            <TestimonialCard
              key={testimonial.id}
              rating={testimonial.rating}
              title={testimonial.title}
              text={testimonial.summary}
              country={testimonial.countryEmoji}
              name={testimonial.reviewerName}
            />
          )
        })}
      </Row>
    </Column>
  </Section>`,
  },
  {
    label: 'Featured Products Section',
    imports: `
    import { Section, Column } from "/app/components/Components"
    import { RecommendedProducts } from "/app/components/RecommendedProducts"
    `,
    code: `
    <Section>
    <Column centerH>
      <RecommendedProducts />
    </Column>
  </Section>
  `,
  },
  {
    label: 'Featured Collections Section',
    imports: `
    import { Image } from '@shopify/hydrogen'
    import { ProductFeatureRow, QuoteWithRating, TwoFeatureCallout, Section, DecorativeClouds, ColorOptionsColumn, Column, Row, HalfAndHalf, TypographyTitle, TrippyButton, Spacer } from "/app/components/Components"
    import { Placeholder } from "utopia-api"
    `,
    code: `
    <Section style={{ padding: '5em 9em' }}>
    <Column>
      <DecorativeClouds />

      {featuredCollections.map(
        (collection, index) => {
          const shouldFlip = index % 2

          return (
            <ProductFeatureRow
              key={collection.id}
              inverted={shouldFlip}
              background={collection.color}
              image={
                <div
                  style={{
                    contain: 'layout',
                  }}
                >
                  <Image
                    style={{ height: 'auto' }}
                    data={collection.featuredImage}
                    aspectRatio='1 / 1'
                  />
                  <QuoteWithRating
                    quote={
                      collection.featuredTestimonial
                        .title
                    }
                    rating={
                      collection.featuredTestimonial
                        .rating
                    }
                    backgroundColor='var(--dark-blue)'
                    style={{
                      position: 'relative',
                      left: 100,
                    }}
                  />
                </div>
              }
              content={
                <Column
                  style={{ padding: '2em 2em' }}
                >
                  <h2
                    style={{
                      color: 'var(--color-light)',
                      fontSize: 40,
                      paddingTop: '1em',
                      lineHeight: '1.2em',
                    }}
                  >
                    {collection.featureTitle}
                  </h2>
                  <a
                    style={{
                      marginTop: '1em',
                      color: 'white',
                    }}
                    href='/'
                  >
                    View {collection.title} Collection
                  </a>
                  <TwoFeatureCallout
                    style={{ marginTop: '1.4em' }}
                    left={
                      <Column padded>
                        <Image
                          style={{
                            width: 55,
                            height: 55,
                          }}
                          data={
                            collection
                              .relevantProductFeatures[0]
                              .image
                          }
                        />
                        <h4>
                          {
                            collection
                              .relevantProductFeatures[0]
                              .title
                          }
                        </h4>
                        <p>
                          {
                            collection
                              .relevantProductFeatures[0]
                              .description
                          }
                        </p>
                      </Column>
                    }
                    right={
                      <Column padded>
                        <Image
                          style={{
                            width: 55,
                            height: 55,
                          }}
                          data={
                            collection
                              .relevantProductFeatures[1]
                              .image
                          }
                        />
                        <h4>
                          {
                            collection
                              .relevantProductFeatures[1]
                              .title
                          }
                        </h4>
                        <p>
                          {
                            collection
                              .relevantProductFeatures[1]
                              .description
                          }
                        </p>
                      </Column>
                    }
                  />
                </Column>
              }
            />
          )
        },
      )}
    </Column>
  </Section>
  `,
  },
]

const ColumnWithPlaceholdersVariant = {
  label: 'Column with Placeholders',
  imports:
    `import { Column } from '/app/components/Components'
     import { Placeholder } from 'utopia-api'`,
  code: `<Column style={{ gap: 10 }} padded >
<Placeholder />
<Placeholder />
</Column>`,
}

const ColumnVariants = [
  ColumnWithPlaceholdersVariant,
  {
    label: 'Column - empty',
    imports:
      "import { Column } from '/app/components/Components'",
    code: `<Column />`,
  },
]

const DefaultContent = [
  {
    component: 'Row',
    moduleName: '/app/components/Components',
    variants: RowWithPlaceholdersVariant,
  },
  {
    component: 'Column',
    moduleName: '/app/components/Components',
    variants: ColumnWithPlaceholdersVariant,
  },
  {
    component: 'Title',
    moduleName: '/app/components/Components',
    variants: AntdTitleVariants,
  },
  {
    component: 'Paragraph',
    moduleName: '/app/components/Components',
    variants: AntdParagraphVariants,
  },
  {
    component: 'Text',
    moduleName: '/app/components/Components',
    variants: AntdTextVariants,
  },
  {
    component: 'Section',
    moduleName: '/app/components/Components',
    variants: SectionVariants,
  },
]

/**
 * @type {{[modulePath: string]: {[componentName:string]: import("utopia-api").ComponentToRegister}}}
 */
const Components = {
  '/app/routes/_index': {
    TestimonialCard: {
      component: TestimonialCard,
      properties: {
        rating: Utopia.sliderControl(0, 5, 1, 'stars'),
        title: Utopia.stringControl(),
        text: Utopia.stringControl(),
        country: Utopia.stringControl(),
        name: Utopia.stringControl(),
      },
      focus: 'never',
      inspector: [],
      variants: {
        label: 'TestimonialCard',
        imports: `import { TestimonialCard } from '/app/routes/_index';`,
        code: `<TestimonialCard
          rating={4}
          title='A good backpack is like a true friend'
          text='A friend should always underestimate your virtues and an enemy overestimate your faults.'
          country='🇮🇹'
          name='M Puzo'
        />`,
      },
    },
    Illustration: {
      component: Illustration,
      properties: {},
      focus: 'never',
      icon: 'image',
      emphasis: 'emphasized',
    },
  },
  '/app/components/RecommendedProducts': {
    RecommendedProducts: {
      component: RecommendedProducts,
      properties: {},
      focus: 'always',
      inspector: [],
    },
  },
  '/app/components/Header': {
    Header: {
      component: Header,
      properties: {},
      variants: [],
      emphasis: 'emphasized',
    },
  },
  '/app/components/Footer': {
    Footer: {
      component: Footer,
      properties: {},
      variants: [],
      emphasis: 'emphasized',
    },
  },
  '/app/components/Layout': {
    Layout: {
      component: Layout,
      inspector: [],
      properties: {},
      variants: [],
      focus: 'never',
      emphasis: 'subdued',
    },
    CartAside: {
      component: CartAside,
      properties: {},
      variants: [],
      emphasis: 'subdued',
    },
    SearchAside: {
      component: SearchAside,
      properties: {},
      variants: [],
      emphasis: 'subdued',
    },
    MobileMenuAside: {
      component: MobileMenuAside,
      properties: {},
      variants: [],
      emphasis: 'subdued',
    },
    RecommendedProductsGrid: {
      component: RecommendedProductsGrid,
      properties: {},
      variants: [],
      focus: 'never',
    },
    BlogComponent: {
      component: BlogComponent,
      children: {
        preferredContents: {
          component: 'div',
          variants: { name: 'div' },
        },
      },
      properties: {
        title: {
          control: 'jsx',
          preferredContents: [
            {
              component: 'h1',
              variants: [
                { label: 'Title', code: '<h1>Title</h1>' },
              ],
            },
          ],
        },
        children: Utopia.arrayControl(Utopia.jsxControl()),
      },
      variants: [
        {
          label: '  Post',
          imports: `import { BlogComponent } from '/app/components/Layout';`,
          code: '<BlogComponent title={<h1>Title</h1>}><div>Blog Post</div></BlogComponent>',
        },
        {
          label: 'Empty Blog Post',
          imports: `import { BlogComponent } from '/app/components/Layout';`,
          code: '<BlogComponent title={<h1>Title</h1>} />',
        },
      ],
    },
  },
  '/app/components/Components': {
    DecorativeClouds: {
      component: DecorativeClouds,
      properties: {},
      focus: 'never',
      icon: 'image',
      emphasis: 'emphasized',
    },
    DuplicatedImageWithBackground: {
      component: DuplicatedImageWithBackground,
      properties: {
        image: Utopia.stringControl(),
        backgroundColor: Utopia.colorControl(),
      },
      focus: 'never',
      inspector: [],
      children: 'not-supported',
      variants: {
        label: 'DuplicatedImageWithBackground',
        imports: `import { DuplicatedImageWithBackground } from '/app/components/Components';`,
        code: `<DuplicatedImageWithBackground
          backgroundColor={'var(--lihgt-purple)'}
          image={'merchandise/bag-black@2x.png'}
        />`,
      },
    },
    QuoteWithRating: {
      component: QuoteWithRating,
      properties: {
        quote: Utopia.jsxControl(),
        rating: Utopia.sliderControl(0, 5, 1, 'stars'),
      },
      focus: 'never',
      children: 'not-supported',
      variants: {
        label: 'QuoteWithRating',
        imports: `import { QuoteWithRating } from "/app/components/Components"`,
        code: `<QuoteWithRating
            quote={'I love this!'}
            rating={5}
          />`,
      },
    },
    TwoFeatureCallout: {
      component: TwoFeatureCallout,
      properties: {
        left: {
          control: 'jsx',
          preferredContents: [
            PlaceholderContent,
            ...DefaultContent,
          ],
        },
        right: {
          control: 'jsx',
          preferredContents: [
            PlaceholderContent,
            ...DefaultContent,
          ],
        },
      },
      focus: 'never',
      children: 'not-supported',
      variants: {
        label: 'TwoFeatureCallout',
        imports: `
          import { TwoFeatureCallout } from "/app/components/Components"
          import { Placeholder } from "utopia-api"`,
        code: `<TwoFeatureCallout
            style={{ gap: 10 }}
            left={<Placeholder />}
            right={<Placeholder />}
          />`,
      },
    },
    ProductFeatureRow: {
      component: ProductFeatureRow,
      properties: {
        image: {
          control: 'jsx',
          preferredContents: [
            PlaceholderContent,
            ...DefaultContent,
          ],
        },
        content: {
          control: 'jsx',
          preferredContents: [
            PlaceholderContent,
            ...DefaultContent,
          ],
        },
        inverted: Utopia.checkboxControl(),
      },
      icon: 'component',
      emphasis: 'emphasized',
      focus: 'never',
      children: 'not-supported',
      variants: [
        {
          label: 'ProductFeatureRow (Empty)',
          imports: `
          import { ProductFeatureRow } from "/app/components/Components"
          import { Placeholder } from "utopia-api"
          `,
          code: `<ProductFeatureRow
            style={{ gap: 10 }}
            inverted={false}
            image={<Placeholder />}
            content={<Placeholder />}
          />`,
        },
        {
          label: 'ProductFeatureRow',
          imports: `
          import { ProductFeatureRow, Column, TwoFeatureCallout, Image, QuoteWithRating } from "/app/components/Components"
          import { Placeholder } from "utopia-api"
          `,
          code: `
          <ProductFeatureRow
            image={
              <div style={{ contain: 'layout' }}>
                <Placeholder style={{}} />
                <QuoteWithRating
                  quote='Testimonial Quote'
                  rating={5}
                  backgroundColor='var(--dark-blue)'
                  style={{
                    position: 'relative',
                    left: 100,
                  }}
                />
              </div>
            }
            content={
              <Column
                style={{ padding: '2em 2em' }}
              >
                <h2
                  style={{
                    color: 'var(--color-light)',
                    fontSize: 40,
                    paddingTop: '1em',
                    lineHeight: '1.2em',
                  }}
                >
                  Collection Tagline
                </h2>
                <a
                  style={{
                    marginTop: '1em',
                    color: 'white',
                  }}
                  href='/'
                >
                  Collection Name
                </a>
                <TwoFeatureCallout
                  style={{ marginTop: '1.4em' }}
                  left={
                    <Column padded>
                      <Image
                        style={{
                          width: 55,
                          height: 55,
                        }}
                        data={{
                          url: 'https://cdn.shopify.com/s/files/1/0598/5959/9382/files/battery_ab4fb1b1-24e6-457e-8f0f-6443b0318ffe.png',
                        }}
                      />
                      <h4>Callout Name</h4>
                      <p>Callout Description</p>
                    </Column>
                  }
                  right={
                    <Column padded>
                      <Image
                        style={{
                          width: 55,
                          height: 55,
                        }}
                        data={{
                          url: 'https://cdn.shopify.com/s/files/1/0598/5959/9382/files/battery_ab4fb1b1-24e6-457e-8f0f-6443b0318ffe.png',
                        }}
                      />
                      <h4>Callout Name</h4>
                      <p>Callout Description</p>
                    </Column>
                  }
                />
              </Column>
            }
          />
        `,
        },
      ],
    },
    HalfAndHalf: {
      component: HalfAndHalf,
      properties: {
        left: {
          control: 'jsx',
          preferredContents: [
            PlaceholderContent,
            ...DefaultContent,
          ],
        },
        right: {
          control: 'jsx',
          preferredContents: [
            PlaceholderContent,
            ...DefaultContent,
          ],
        },
        padded: Utopia.checkboxControl(),
        gap: Utopia.numberControl(),
      },
      focus: 'never',
      children: 'not-supported',
      variants: {
        label: 'HalfAndHalf',
        imports: `
          import { HalfAndHalf } from "/app/components/Components"
          import { Placeholder } from "utopia-api"`,
        code: `<HalfAndHalf
            style={{ gap: 10 }}
            left={<Placeholder />}
            right={<Placeholder />}
          />`,
      },
    },
    TrippyButton: {
      component: TrippyButton,
      properties: {
        price: {
          control: 'jsx',
          preferredContents: [
            {
              component: 'Money',
              moduleName: '@shopify/hydrogen',
              variants: [
                {
                  label: 'Money',
                  imports:
                    'import { Money } from "@shopify/hydrogen"',
                  code: `<Money data={{
                    amount: '59',
                    currencyCode: 'HUF',
                  }} />`,
                },
              ],
            },
          ],
        },
      },
      children: {
        preferredContents: 'text',
      },
      focus: 'never',
      inspector: ['typography'],
      variants: [
        {
          label: 'TrippyButton',
          imports: `import { TrippyButton } from "/app/components/Components"
            import { Money } from "@shopify/hydrogen"`,
          code: `<TrippyButton
            price={
              <Money
                data={{ amount: '59', currencyCode: 'HUF' }}
              />
            }
          >Buy now</TrippyButton>`,
        },
      ],
    },
    Grid: {
      component: Grid,
      properties: {
        left: {
          control: 'jsx',
          preferredContents: [
            PlaceholderContent,
            ...DefaultContent,
          ],
        },
        right: {
          control: 'jsx',
          preferredContents: [
            PlaceholderContent,
            ...DefaultContent,
          ],
        },
      },
      variants: [],
    },
    Section: {
      component: Section,
      properties: {
        verticalPadding: {
          label: 'Vertical Padding',
          control: 'radio',
          options: [
            // it would be nice to be able to pass in data here somehow, and have it be used in the component
            { label: '-', value: 'none' },
            { label: 'S', value: 'small' },
            { label: 'M', value: 'medium' },
            { label: 'L', value: 'large' },
            { label: 'XL', value: 'xl' },
          ],
        },
        horizontalPadding: {
          label: 'Horizontal Padding',
          control: 'radio',
          options: [
            { label: 'None', value: 'none' },
            { label: 'S', value: 'small' },
            { label: 'M', value: 'medium' },
            { label: 'L', value: 'large' },
            { label: 'XL', value: 'xl' },
          ],
        },
        minHeight: {
          label: 'Minimum Height',
          control: 'checkbox',
        },
        orientation: Utopia.radioControl([
          { label: 'Vertical', value: 'column' },
          { label: 'Horizontal', value: 'row' },
        ]),
        backgroundColor: Utopia.colorControl(),
      },
      focus: 'never',
      children: {
        preferredContents: [
          PlaceholderContent,
          ...DefaultContent,
        ],
      },
      variants: SectionVariants,
    },
    Row: {
      component: Row,
      inspector: ['visual', 'typography'],
      properties: {
        padded: Utopia.checkboxControl(),
        centerH: Utopia.checkboxControl(),
        centerV: Utopia.checkboxControl(),
        grow: Utopia.checkboxControl(),
        scrollable: Utopia.checkboxControl(),
        wrap: Utopia.checkboxControl(),
        gap: Utopia.numberControl(),
      },
      focus: 'never',
      children: {
        preferredContents: [
          PlaceholderContent,
          ...DefaultContent,
        ],
      },
      variants: RowVariants,
      icon: 'row',
    },
    Column: {
      component: Column,
      properties: {
        padded: Utopia.checkboxControl(),
        centerH: Utopia.checkboxControl(),
        centerV: Utopia.checkboxControl(),
        grow: Utopia.checkboxControl(),
        scrollable: Utopia.checkboxControl(),
        wrap: Utopia.checkboxControl(),
        gap: Utopia.numberControl(),
      },
      focus: 'never',
      children: {
        preferredContents: [
          PlaceholderContent,
          ...DefaultContent,
        ],
      },
      icon: 'column',
      variants: ColumnVariants,
    },
    Spacer: {
      component: Spacer,
      properties: {
        height: Utopia.stringControl(),
      },
      focus: 'never',
      inspector: [],
      children: 'not-supported',
      variants: {
        label: 'Spacer',
        imports:
          'import { Spacer } from "/app/components/Components"',
        code: `<Spacer height={50} />`,
      },
      icon: 'dashedframe',
    },
    Stars: {
      component: Stars,
      properties: {
        rating: Utopia.sliderControl(0, 5, 1, 'stars'),
      },
      focus: 'never',
      children: 'not-supported',
      variants: {
        label: 'Stars',
        imports: `import { Stars } from '/app/components/Components'`,
        code: `<Stars rating={5} />`,
      },
    },
  },
  // test
  'utopia-api': {
    Placeholder: {
      component: Utopia.Placeholder,
      icon: 'dashedframe',
      properties: {
        margin: Utopia.numberControl(),
        expand: Utopia.checkboxControl(),
        fixed: Utopia.checkboxControl(),
      },
      focus: 'never',
      children: 'not-supported',
      inspector: [],
    },
  }
}

export default Components
