import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Navbar from '../../components/navbar'
import AuthorCard from '../../components/author-card'
import BlogPostCardPortrait from '../../components/blog-post-card-portrait'
import Footer from '../../components/footer'
import authorPageInitialPaths33ac9Resource from '../../resources/author-page-initial-paths-33ac9'
import authorPageInitialPropsE9b78Resource from '../../resources/author-page-initial-props-e9b78'

const Author = (props) => {
  return (
    <>
      <div className="author-container">
        <Head>
          <title>Author - Final Draft</title>
          <meta property="og:title" content="Author - Final Draft" />
        </Head>
        <Navbar></Navbar>
        <main className="author-main main-container">
          <DataProvider
            renderSuccess={(AuthorEntity) => (
              <>
                <div className="author-published-by">
                  <AuthorCard
                    name={AuthorEntity?.name}
                    imageAlt={AuthorEntity?.avatar?.alt}
                    imageUrl={AuthorEntity?.avatar?.url}
                    rootClassName="author-card-root-class-name2"
                  ></AuthorCard>
                </div>
                <div className="author-blog-post-list">
                  <Repeater
                    items={AuthorEntity?.blogPosts || []}
                    renderItem={(authorBlogPosts) => (
                      <>
                        <BlogPostCardPortrait
                          tag={authorBlogPosts?.tag}
                          preview={authorBlogPosts?.preview}
                          readTime={authorBlogPosts?.readTime}
                          authorAlt={authorBlogPosts?.avatar?.alt}
                          authorName={authorBlogPosts?.author?.name}
                          authorImage={authorBlogPosts?.author?.avatar?.url}
                          thumbnailAlt={authorBlogPosts?.thumbnail?.alt}
                          thumbnailSrc={authorBlogPosts?.thumbnail?.url}
                          publishedDate={authorBlogPosts?.publishedDate}
                          rootClassName="blog-post-card-portrait-root-class-name1"
                        >
                          <Link href={`/posts/${authorBlogPosts?.slug}`}>
                            <a>
                              <h1 className="blog-post-card-title">
                                {authorBlogPosts?.title}
                              </h1>
                            </a>
                          </Link>
                        </BlogPostCardPortrait>
                      </>
                    )}
                  />
                </div>
                <div className="author-other-authors">
                  <span>Posts from other authors</span>
                  <div className="special-delimiter"></div>
                  <div className="author-container1">
                    <DataProvider
                      fetchData={(params) =>
                        fetch(
                          `/api/author-resource-author?${new URLSearchParams(
                            params
                          )}`,
                          {
                            headers: {
                              'Content-Type': 'application/json',
                            },
                          }
                        )
                          .then((res) => res.json())
                          .then((data) => data)
                      }
                      renderSuccess={(params) => (
                        <>
                          <Repeater
                            items={params}
                            renderItem={(OtherAuthors) => (
                              <>
                                <Link href={`/author/${OtherAuthors?.name}`}>
                                  <a>
                                    <div className="author-author-card-portrait">
                                      <img
                                        alt="image"
                                        src={OtherAuthors?.avatar?.url}
                                        className="author-image"
                                      />
                                      <div className="author-container2">
                                        <span>{OtherAuthors?.name}</span>
                                      </div>
                                    </div>
                                  </a>
                                </Link>
                              </>
                            )}
                          />
                        </>
                      )}
                      params={{
                        'AuthorEntity?.name': AuthorEntity?.name,
                      }}
                    />
                  </div>
                </div>
              </>
            )}
            initialData={props.authorEntity}
            persistDataDuringLoading={true}
            key={props?.authorEntity?.name}
          />
        </main>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .author-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .author-main {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .author-published-by {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .author-blog-post-list {
            gap: var(--dl-space-space-twounits);
            width: fit-content;
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .author-other-authors {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .author-container1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .author-author-card-portrait {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            box-shadow: 2px 2px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 24px;
            flex-direction: column;
            text-decoration: none;
            background-color: var(--dl-color-gray-white100);
          }
          .author-image {
            width: 100px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .author-container2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Author.defaultProps = {
  authorEntity: [],
}

Author.propTypes = {
  authorEntity: PropTypes.array,
}

export default Author

export async function getStaticPaths() {
  try {
    const response = await authorPageInitialPaths33ac9Resource({
      content_type: 'author',
      select: 'fields.name',
    })
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            name: (item?.fields?.name).toString(),
          },
        }
      }),
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
    const response = await authorPageInitialPropsE9b78Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        authorEntity: response?.data?.[0],
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
