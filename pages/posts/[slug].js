import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import RichText from '@madebyconnor/rich-text-to-jsx'
import PropTypes from 'prop-types'

import Navbar from '../../components/navbar'
import PostHeader from '../../components/post-header'
import SocialShareLinks from '../../components/social-share-links'
import AuthorCardWithLink from '../../components/author-card-with-link'
import BlogPostCardRelated from '../../components/blog-post-card-related'
import Footer from '../../components/footer'
import postsPageInitialPaths7a2ebResource from '../../resources/posts-page-initial-paths-7a2eb'
import postsPageInitialProps84ac7Resource from '../../resources/posts-page-initial-props-84ac7'

const Posts = (props) => {
  return (
    <>
      <div className="posts-container">
        <Head>
          <title>Posts - Final Draft</title>
          <meta property="og:title" content="Posts - Final Draft" />
        </Head>
        <Navbar></Navbar>
        <main className="posts-main main-container">
          <DataProvider
            renderSuccess={(PostsEntity) => (
              <>
                <div className="posts-content">
                  <PostHeader
                    tag={PostsEntity?.tag}
                    heading={PostsEntity?.title}
                    readTime={PostsEntity?.readTime}
                    publishDate={PostsEntity?.publishedDate}
                    rootClassName="post-header-root-class-name4"
                  ></PostHeader>
                  <img
                    alt="image"
                    src={PostsEntity?.thumbnail?.url}
                    className="posts-image blog-post-details-image"
                  />
                  <SocialShareLinks
                    twitter={PostsEntity?.shareLinkTwitter}
                    facebook={PostsEntity?.shareLinkFacebook}
                    linkedin={PostsEntity?.shareLinkLinkedin}
                    rootClassName="social-share-links-root-class-name4"
                  ></SocialShareLinks>
                  <div className="blog-post-content">
                    <RichText richText={PostsEntity?.content}></RichText>
                  </div>
                  <AuthorCardWithLink
                    name={PostsEntity?.author?.name}
                    imageAlt={PostsEntity?.author?.avatar?.alt}
                    imageUrl={PostsEntity?.author?.avatar?.url}
                    rootClassName="author-card-with-link-root-class-name"
                  ></AuthorCardWithLink>
                </div>
                <div className="posts-related-blog-posts">
                  <span className="posts-text">You might also like</span>
                  <div className="posts-posts">
                    <Repeater
                      items={PostsEntity?.relatedBlogPosts || []}
                      renderItem={(relatedBlogPosts) => (
                        <>
                          <BlogPostCardRelated
                            tag={relatedBlogPosts?.tag}
                            postId={relatedBlogPosts?.id}
                            preview={relatedBlogPosts?.preview}
                            readTime={relatedBlogPosts?.readTime}
                            publishDate={relatedBlogPosts?.publishedDate}
                            thumbnailSrc={relatedBlogPosts?.thumbnail?.url}
                            rootClassName="blog-post-card-related-root-class-name9"
                          >
                            <Link href={`/posts/${relatedBlogPosts?.slug}`}>
                              <a>
                                <h2 className="blog-post-card-title">
                                  {relatedBlogPosts?.title}
                                </h2>
                              </a>
                            </Link>
                          </BlogPostCardRelated>
                        </>
                      )}
                    />
                  </div>
                </div>
              </>
            )}
            initialData={props.postsEntity}
            persistDataDuringLoading={true}
            key={props?.postsEntity?.slug}
          />
        </main>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .posts-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .posts-main {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .posts-content {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontentwidth);
            align-items: center;
            flex-direction: column;
          }
          .posts-image {
            object-fit: cover;
          }
          .posts-related-blog-posts {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: center;
          }
          .posts-text {
            color: #666;
            font-size: 18px;
          }
          .posts-posts {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
          }
          @media (max-width: 767px) {
            .posts-related-blog-posts {
              width: 100%;
            }
            .posts-posts {
              width: 100%;
              align-items: center;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Posts.defaultProps = {
  postsEntity: [],
}

Posts.propTypes = {
  postsEntity: PropTypes.array,
}

export default Posts

export async function getStaticPaths() {
  try {
    const response = await postsPageInitialPaths7a2ebResource({
      content_type: 'posts',
      select: 'fields.slug',
    })
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            slug: (item?.fields?.slug).toString(),
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
    const response = await postsPageInitialProps84ac7Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        postsEntity: response?.data?.[0],
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
