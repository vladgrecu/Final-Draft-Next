import React from 'react'
import Link from 'next/link'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import BlogPostCardRelated from './blog-post-card-related'

const FilteredBlogPostList = (props) => {
  return (
    <>
      <div
        className={`filtered-blog-post-list-container ${props.rootClassName} `}
      >
        <DataProvider
          fetchData={(params) =>
            fetch(
              `/api/filtered-blog-post-list-resource-filtered-blog-post-list?${new URLSearchParams(
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
                renderItem={(context_r9c5pm) => (
                  <>
                    <Link href={`/posts/${context_r9c5pm?.slug}`}>
                      <a>
                        <BlogPostCardRelated
                          tag={context_r9c5pm?.tag}
                          postId={context_r9c5pm?.id}
                          heading={context_r9c5pm?.title}
                          preview={context_r9c5pm?.preview}
                          readTime={context_r9c5pm?.readTime}
                          publishDate={context_r9c5pm?.publishedDate}
                          thumbnailSrc={context_r9c5pm?.thumbnail?.url}
                          rootClassName="blog-post-card-related-root-class-name6"
                          className="filtered-blog-post-list-component"
                        >
                          <h2 className="blog-post-card-title">
                            {context_r9c5pm?.title}
                          </h2>
                        </BlogPostCardRelated>
                      </a>
                    </Link>
                  </>
                )}
              />
            </>
          )}
          renderLoading={() => (
            <>
              <div className="filtered-blog-post-list-container1">
                <h1>Loading...</h1>
              </div>
            </>
          )}
          params={{
            activeFilter: props.activeFilter,
          }}
        />
      </div>
      <style jsx>
        {`
          .filtered-blog-post-list-container {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            flex-wrap: wrap;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-start;
          }
          .filtered-blog-post-list-component {
            text-decoration: none;
          }
          .filtered-blog-post-list-container1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-sixunits);
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

FilteredBlogPostList.defaultProps = {
  rootClassName: '',
  activeFilter: 'Engineering',
}

FilteredBlogPostList.propTypes = {
  rootClassName: PropTypes.string,
  activeFilter: PropTypes.string,
}

export default FilteredBlogPostList
