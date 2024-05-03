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
  SectionSubtitle,
  SectionTitle,
  Spacer,
  SpecialRow,
  Stars,
  Text,
  TrippyButton,
  TwoFeatureCallout,
  PageTitle,
  SubsectionTitle,
} from '../app/components/Components'
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
      'import { Text } from "/app/components/Components"',
    code: `<Text level='smaller'>Smaller Text</Text>`,
  },
  {
    label: 'Regular Text',
    imports:
      'import { Text } from "/app/components/Components"',
    code: `<Text level='regular'>Regular Text</Text>`,
  },
  {
    label: 'Embiggened Text',
    imports:
      'import { Text } from "/app/components/Components"',
    code: `<Text level='embiggened'>Embiggened Text</Text>`,
  },
  {
    label: 'Large Text',
    imports:
      'import { Text } from "/app/components/Components"',
    code: `<Text level='large'>Large Text</Text>`,
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
    component: 'Text',
    moduleName: '/app/components/Components',
    variants: TextVariants,
  },
  {
    component: 'Section Title',
    moduleName: '/app/components/Components',
    variants: {
      label: 'Section Title',
      imports: `import { SectionTitle } from "/app/components/Components"`,
      code: `<SectionTitle>Section Title</SectionTitle>`,
    },
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
    SpecialRow: {
      component: SpecialRow,
      properties: {
        imageContent: {
          control: 'jsx',
          preferredContents: [
            PlaceholderContent,
            ...DefaultContent,
          ],
        },
        detailContent: {
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
          label: 'SpecialRow',
          imports: `import { SpecialRow, Placeholder } from "/app/components/Components"`,
          code: `<SpecialRow
            style={{ gap: 10 }}
            inverted={false}
            imageContent={<Placeholder />}
            detailContent={<Placeholder />}
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
        fill: Utopia.colorControl(),
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
        padded: Utopia.checkboxControl(),
        minHeight: Utopia.checkboxControl(),
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
    },
    Text: {
      component: Text,
      properties: {
        level: Utopia.popupListControl([
          {
            label: 'large',
            value: 'large',
          },
          {
            label: 'embiggened',
            value: 'embiggened',
          },
          {
            label: 'regular',
            value: 'regular',
          },
          {
            label: 'smaller',
            value: 'smaller',
          },
        ]),
        deemphasized: Utopia.checkboxControl(),
        emboldened: Utopia.checkboxControl(),
        style: Utopia.styleControl(),
      },
      children: { preferredContents: 'text' },
      focus: 'never',
      inspector: ['typography'],
      variants: TextVariants,
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
    SectionSubtitle: {
      component: SectionSubtitle,
      properties: { style: Utopia.styleControl() },
      children: { preferredContents: 'text' },
      focus: 'never',
      inspector: ['typography'],
      variants: {
        label: 'Section Subtitle',
        imports: `import { SectionSubtitle } from "/app/components/Components"`,
        code: `<SectionSubtitle>Section Subtitle</SectionSubtitle>`,
      },
    },
    SectionTitle: {
      component: SectionTitle,
      properties: {
        style: Utopia.styleControl(),
      },
      children: { preferredContents: 'text' },
      focus: 'never',
      inspector: ['typography'],
      variants: {
        label: 'Section Title',
        imports: `import { SectionTitle } from "/app/components/Components"`,
        code: `<SectionTitle>Section Title</SectionTitle>`,
      },
    },
    SubsectionTitle: {
      component: SubsectionTitle,
      properties: {
        style: Utopia.styleControl(),
      },
      children: { preferredContents: 'text' },
      focus: 'never',
      inspector: ['typography'],
      variants: {
        label: 'Subsection Title',
        imports: `import { SubsectionTitle } from "/app/components/Components"`,
        code: `<SubsectionTitle>Subsection Title</SubsectionTitle>`,
      },
    },
    PageTitle: {
      component: PageTitle,
      properties: {
        style: Utopia.styleControl(),
      },
      focus: 'never',
      children: { preferredContents: 'text' },
      inspector: ['typography'],
      variants: {
        label: 'Page Title',
        imports: `import { PageTitle } from "/app/components/Components"`,
        code: `<PageTitle>Page Title</PageTitle>`,
      },
    },
  },
}

export default Components
