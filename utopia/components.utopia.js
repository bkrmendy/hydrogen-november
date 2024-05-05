import * as Utopia from 'utopia-api'
import {
  Column,
  DuplicatedImageWithBackground,
  Grid,
  HalfAndHalf,
  Placeholder,
  QuoteWithRating,
  Row,
  Section,
  Spacer,
  ProductFeatureRow,
  Stars,
  TrippyButton,
  TwoFeatureCallout,
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
  moduleName: '/app/components/Components',
  variants: [],
}

const RowWithPlaceholdersVariant = {
  label: 'Row with Placeholders',
  imports:
    'import { Row, Placeholder } from "/app/components/Components"',
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
      'import { Section, Placeholder } from "/app/components/Components"',
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
      'import { Section, Row, Placeholder } from "/app/components/Components"',
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
      'import { Section, Placeholder, Column } from "/app/components/Components"',
    code: `<Section padded minHeight>
    <Placeholder />
</Section>`,
  },
]

const ColumnWithPlaceholdersVariant = {
  label: 'Column with Placeholders',
  imports:
    "import { Column, Placeholder } from '/app/components/Components'",
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

const TextVariants = [
  {
    label: 'Smaller Text',
    imports:
      'import { TypographyParagraph } from "/app/components/Components"',
    code: `<TypographyParagraph level='smaller'>Smaller Antd Paragraph</TypographyParagraph>`,
  },
  {
    label: 'Regular Text',
    imports:
      'import { TypographyParagraph } from "/app/components/Components"',
    code: `<TypographyParagraph level='regular'>Regular Antd Paragraph</TypographyParagraph>`,
  },
  {
    label: 'Embiggened Text',
    imports:
      'import { TypographyParagraph } from "/app/components/Components"',
    code: `<TypographyParagraph level='embiggened'>Embiggened Antd Paragraph</TypographyParagraph>`,
  },
  {
    label: 'Large Text',
    imports:
      'import { TypographyParagraph } from "/app/components/Components"',
    code: `<TypographyParagraph level='large'>Large Antd Paragraph</TypographyParagraph>`,
  },
]

const DefaultContent = [
  //title text column row image
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
    component: 'Antd Title',
    moduleName: '/app/components/Components',
    variants: AntdTitleVariants,
  },
  {
    component: 'Antd Paragraph',
    moduleName: '/app/components/Components',
    variants: AntdParagraphVariants,
  },
  {
    component: 'Antd Text',
    moduleName: '/app/components/Components',
    variants: AntdTextVariants,
  },
]

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
    WomanSeeking: {
      component: Illustration,
      properties: {},
      focus: 'never',
      icon: 'component',
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
        imports: `import { QuoteWithRating, Placeholder } from "/app/components/Components"`,
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
        imports: `import { TwoFeatureCallout, Placeholder } from "/app/components/Components"`,
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
        inverted: Utopia.checkboxControl(),
      },
      icon: 'row',
      focus: 'never',
      children: 'not-supported',
      variants: [
        {
          label: 'ProductFeatureRow',
          imports: `import { ProductFeatureRow, Placeholder } from "/app/components/Components"`,
          code: `<ProductFeatureRow
            style={{ gap: 10 }}
            inverted={false}
            left={<Placeholder />}
            right={<Placeholder />}
          />`,
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
        imports: `import { HalfAndHalf, Placeholder } from "/app/components/Components"`,
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
    Placeholder: {
      component: Placeholder,
      properties: {
        margin: Utopia.numberControl(),
        expand: Utopia.checkboxControl(),
        fixed: Utopia.checkboxControl(),
      },
      focus: 'never',
      children: 'not-supported',
      inspector: [],
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
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
            { label: 'XL', value: 'xl' },
          ],
        },
        horizontalPadding: {
          label: 'Horizontal Padding',
          control: 'radio',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
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
}

export default Components
