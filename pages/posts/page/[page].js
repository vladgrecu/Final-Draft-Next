import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Navbar from '../../../components/navbar'
import BlogPostCardLandscape from '../../../components/blog-post-card-landscape'
import Footer from '../../../components/footer'
import postsPageInitialPathsE9866Resource from '../../../resources/posts-page-initial-paths-e9866'
import postsPageInitialProps66ecdResource from '../../../resources/posts-page-initial-props-66ecd'

const Posts11 = (props) => {
  const router = useRouter()
  return (
    <>
      <div className="posts11-container">
        <Head>
          <title>Posts1 - Final Draft</title>
          <meta property="og:title" content="Posts1 - Final Draft" />
        </Head>
        <Navbar></Navbar>
        <main className="posts11-main main-container">
          <DataProvider
            renderSuccess={(params) => (
              <>
                <Repeater
                  items={params}
                  renderItem={(PostsEntities) => (
                    <>
                      <BlogPostCardLandscape
                        tag={PostsEntities?.tag}
                        preview={PostsEntities?.preview}
                        readTime={PostsEntities?.readTime}
                        authorAlt={PostsEntities?.author?.avatar?.alt}
                        authorName={PostsEntities?.author?.name}
                        authorImage={PostsEntities?.author?.avatar?.url}
                        thumbnailAlt={PostsEntities?.thumbnail?.alt}
                        thumbnailSrc={PostsEntities?.thumbnail?.url}
                        publishedDate={PostsEntities?.publishedDate}
                        rootClassName="blog-post-card-landscape-root-class-name7"
                      >
                        <Link href={`/posts/${PostsEntities?.slug}`}>
                          <a>
                            <h1 className="blog-post-card-title">
                              {PostsEntities?.title}
                            </h1>
                          </a>
                        </Link>
                      </BlogPostCardLandscape>
                    </>
                  )}
                />
                <div className="posts11-cms-pagination-node">
                  {props?.pagination.hasPrevPage && (
                    <Link
                      href={`/posts/page/${
                        props?.pagination?.page
                          ? parseInt(props?.pagination?.page) - 1
                          : 1
                      }?${new URLSearchParams({
                        ...(router?.query || {}),
                      })}`}
                    >
                      <a className="posts11-link1">
                        <div className="posts11-previous btn-pagination">
                          <span>Previous</span>
                        </div>
                      </a>
                    </Link>
                  )}
                  <span>{props?.pagination?.page}</span>
                  {props?.pagination.hasNextPage && (
                    <Link
                      href={`/posts/page/${
                        props?.pagination?.page
                          ? parseInt(props?.pagination?.page) + 1
                          : 2
                      }?${new URLSearchParams({
                        ...(router?.query || {}),
                      })}`}
                    >
                      <a className="posts11-link2">
                        <div className="posts11-next btn-pagination">
                          <span>Next</span>
                        </div>
                      </a>
                    </Link>
                  )}
                </div>
              </>
            )}
            initialData={props.postsEntities}
            persistDataDuringLoading={true}
            key={props?.pagination?.page}
          />
        </main>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .posts11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .posts11-main {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .posts11-cms-pagination-node {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
          }
          .posts11-link1 {
            display: contents;
          }
          .posts11-previous {
            display: flex;
          }
          .posts11-link2 {
            display: contents;
          }
          .posts11-next {
            display: flex;
          }
        `}
      </style>
    </>
  )
}

Posts11.defaultProps = {
  postsEntities: [],
}

Posts11.propTypes = {
  postsEntities: PropTypes.array,
}

export default Posts11

export async function getStaticPaths() {
  try {
    const response = await postsPageInitialPathsE9866Resource({
      content_type: 'posts',
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
    const response = await postsPageInitialProps66ecdResource({
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
        postsEntities: response,
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
