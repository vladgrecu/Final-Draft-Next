import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Navbar from '../../components/navbar'
import BlogPostCardLandscape from '../../components/blog-post-card-landscape'
import Footer from '../../components/footer'
import postsPageInitialProps37bcfResource from '../../resources/posts-page-initial-props-37bcf'

const Posts1 = (props) => {
  const router = useRouter()
  return (
    <>
      <div className="posts1-container">
        <Head>
          <title>Posts1 - Final Draft</title>
          <meta property="og:title" content="Posts1 - Final Draft" />
        </Head>
        <Navbar></Navbar>
        <main className="posts1-main main-container">
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
                <div className="posts1-cms-pagination-node">
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
                      <a className="posts1-link1">
                        <div className="posts1-previous btn-pagination">
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
                      <a className="posts1-link2">
                        <div className="posts1-next btn-pagination">
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
          .posts1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .posts1-main {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .posts1-cms-pagination-node {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
          }
          .posts1-link1 {
            display: contents;
          }
          .posts1-previous {
            display: flex;
          }
          .posts1-link2 {
            display: contents;
          }
          .posts1-next {
            display: flex;
          }
        `}
      </style>
    </>
  )
}

Posts1.defaultProps = {
  postsEntities: [],
}

Posts1.propTypes = {
  postsEntities: PropTypes.array,
}

export default Posts1

export async function getStaticProps(context) {
  try {
    const response = await postsPageInitialProps37bcfResource({
      ...context?.params,
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
