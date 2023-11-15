import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Navbar from '../../components/navbar'
import AuthorCardWithLink from '../../components/author-card-with-link'
import Footer from '../../components/footer'
import authorPageInitialProps82d92Resource from '../../resources/author-page-initial-props-82d92'

const Author1 = (props) => {
  return (
    <>
      <div className="author1-container">
        <Head>
          <title>Author1 - Final Draft</title>
          <meta property="og:title" content="Author1 - Final Draft" />
        </Head>
        <Navbar></Navbar>
        <main className="author1-main main-container">
          <DataProvider
            renderSuccess={(params) => (
              <>
                <Repeater
                  items={params}
                  renderItem={(AuthorEntities) => (
                    <>
                      <div className="author1-container1">
                        <Link href={`/author/${AuthorEntities?.name}`}>
                          <a>
                            <AuthorCardWithLink
                              name={AuthorEntities?.name}
                              imageAlt={AuthorEntities?.avatar?.alt}
                              imageUrl={AuthorEntities?.avatar?.url}
                              rootClassName="author-card-with-link-root-class-name1"
                              className="author1-component1"
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
          .author1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .author1-main {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .author1-container1 {
            width: 100%;
            max-width: var(--dl-size-size-maxwidth);
          }
          .author1-component1 {
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

Author1.defaultProps = {
  authorEntities: [],
}

Author1.propTypes = {
  authorEntities: PropTypes.array,
}

export default Author1

export async function getStaticProps(context) {
  try {
    const response = await authorPageInitialProps82d92Resource({
      ...context?.params,
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
