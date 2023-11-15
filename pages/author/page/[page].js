import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Navbar from '../../../components/navbar'
import AuthorCardWithLink from '../../../components/author-card-with-link'
import Footer from '../../../components/footer'
import authorPageInitialPathsA4c28Resource from '../../../resources/author-page-initial-paths-a4c28'
import authorPageInitialPropsBb434Resource from '../../../resources/author-page-initial-props-bb434'

const Author11 = (props) => {
  return (
    <>
      <div className="author11-container">
        <Head>
          <title>Author1 - Final Draft</title>
          <meta property="og:title" content="Author1 - Final Draft" />
        </Head>
        <Navbar></Navbar>
        <main className="author11-main main-container">
          <DataProvider
            renderSuccess={(params) => (
              <>
                <Repeater
                  items={params}
                  renderItem={(AuthorEntities) => (
                    <>
                      <div className="author11-container1">
                        <Link href={`/author/${AuthorEntities?.name}`}>
                          <a>
                            <AuthorCardWithLink
                              name={AuthorEntities?.name}
                              imageAlt={AuthorEntities?.avatar?.alt}
                              imageUrl={AuthorEntities?.avatar?.url}
                              rootClassName="author-card-with-link-root-class-name1"
                              className="author11-component1"
                            ></AuthorCardWithLink>
                          </a>
                        </Link>
                      </div>
                    </>
                  )}
                />
              </>
            )}
            initialData={props.authorEntities}
            persistDataDuringLoading={true}
            key={props?.pagination?.page}
          />
        </main>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .author11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .author11-main {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .author11-container1 {
            width: 100%;
            max-width: var(--dl-size-size-maxwidth);
          }
          .author11-component1 {
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

Author11.defaultProps = {
  authorEntities: [],
}

Author11.propTypes = {
  authorEntities: PropTypes.array,
}

export default Author11

export async function getStaticPaths() {
  try {
    const response = await authorPageInitialPathsA4c28Resource({
      content_type: 'author',
    })
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export async function getStaticProps(context) {
  try {
    const response = await authorPageInitialPropsBb434Resource({
      ...context?.params,
      skip: (context.params.page - 1) * 10,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        authorEntities: response,
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
