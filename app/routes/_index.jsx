import React from 'react'
import { useLoaderData } from '@remix-run/react'
import {
  ColorOptionsColumn,
  Column,
  DecorativeClouds,
  HalfAndHalf,
  QuoteWithRating,
  Row,
  Section,
  Spacer,
  ProductFeatureRow,
  Stars,
  TrippyButton,
  TwoFeatureCallout,
  TypographyParagraph,
  TypographyTitle,
} from '../components/Components'
import { RecommendedProducts } from '../components/RecommendedProducts'
import { loader as loaderTemplate } from './trippy-trails-template'
import { connectToMetaObjects as connectToMetaObjectsTemplate } from '../helpers/connect-metaobject'
import { Image, Money } from '@shopify/hydrogen'

export const loader = loaderTemplate

export const connectToMetaObjects =
  connectToMetaObjectsTemplate

export const TestimonialCard = ({
  children,
  style,
  rating,
  title,
  text,
  country,
  name,
}) => (
  <div
    style={{
      width: 372,
      height: 232,
      flexShrink: 0,
      borderRadius: 17,
      border: '1px solid #c5c5c5',
      overflow: 'hidden',
      padding: '27px 24px',
      ...style,
    }}
  >
    <Stars rating={rating} />
    <TypographyParagraph
      level='embiggened'
      style={{
        marginTop: 14,
        marginBottom: 8,
        fontWeight: 'bold',
        opacity: 0.7,
      }}
    >
      {title}
    </TypographyParagraph>
    <TypographyParagraph level='smaller' deemphasized>
      {text}
    </TypographyParagraph>
    <TypographyParagraph
      level='smaller'
      style={{ marginTop: 8 }}
    >
      {country}&nbsp; {name}
    </TypographyParagraph>
  </div>
)

export default function LandingPage() {
  const { testimonials } = useLoaderData()
  const { featuredCollections } = useLoaderData()

  return (
    <div>
      <Column>
        <Spacer height='4em' />
        <Section
          horizontalPadding='medium'
          style={{ height: 800 }}
        >
          <HalfAndHalf
            left={
              <Column style={{ gap: 24 }}>
                <TypographyTitle level={1}>
                  We produce123 high quality bags for lifestyle
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
        </Section>
        <Section horizontalPadding='medium'>
          <Column centerH>
            <TypographyTitle level={5}>
              And in comfort binds them
            </TypographyTitle>
            <TypographyTitle
              level={3}
              style={{ contain: 'layout' }}
            >
              <img
                style={{
                  zIndex: -1,
                  position: 'absolute',
                  top: 0,
                  transform: 'scale(.75)',
                }}
                src='decorative/underline_01@2x.png'
                alt='Decorative Swirl'
              />
              <span>one bag to fit them all</span>
            </TypographyTitle>
          </Column>
        </Section>
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
        <Section
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
                style={{
                  marginTop: 8,
                  position: 'relative',
                }}
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
                Our backpacks are worn and loved by
                millions. But don't take it from us - here
                is what some of our faceless customers are
                saying about our products and service.
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
        </Section>
        <Section>
          <Column
            centerH
            style={{ width: 1440, height: 805.5 }}
          >
            <RecommendedProducts
              style={{
                width: 441,
                height: 806,
                position: 'absolute',
                left: 488,
                top: 0,
              }}
            />
          </Column>
        </Section>
      </Column>
    </div>
  )
}

export const Illustration = () => (
  <div style={{ contain: 'layout' }}>
    <div
      style={{
        position: 'absolute',
        zIndex: -1,
        width: 260,
        height: 260,
        bottom: 4,
        backgroundColor: 'var(--orange)',
        borderRadius: '10px 10px 0px 0px',
      }}
    />
    <img
      alt='woman seeking'
      srcSet='illustration/seeking@2x.png 2x'
    />
  </div>
)
