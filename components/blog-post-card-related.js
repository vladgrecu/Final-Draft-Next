import React from 'react'

import {
  DateTimePrimitive,
  DataProvider,
  Repeater,
} from '@teleporthq/react-components'
import PropTypes from 'prop-types'

const BlogPostCardRelated = (props) => {
  return (
    <>
      <article
        className={`blog-post-card-related-blog-post-card-related ${props.rootClassName} `}
      >
        <div className="blog-post-card-related-tag-container">
          <div className="blog-post-card-related-dot"></div>
          <span className="blog-post-card-related-tag">{props.tag}</span>
        </div>
        <img
          alt="image"
          src={props.thumbnailSrc}
          className="blog-post-card-related-image"
        />
        <div className="blog-post-card-related-container">
          {props.children}
          <div className="blog-post-card-related-read-time">
            <span className="blog-post-card-related-text">Public  -  </span>
            <span>{props.readTime}</span>
            <span>min read</span>
          </div>
          <span className="blog-post-card-related-preview">
            {props.preview}
          </span>
          <div className="blog-post-card-related-container1">
            <span className="blog-post-card-related-date-time">
              <DateTimePrimitive
                format="DD/MM/YYYY"
                date={props.publishDate}
              ></DateTimePrimitive>
            </span>
            <DataProvider
              fetchData={(params) =>
                fetch(
                  `/api/blog-post-card-related-resource-blog-post-card-related?${new URLSearchParams(
                    params
                  )}`,
                  {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  }
                )
                  .then((res) => res.json())
                  .then((data) => data?.data?.[0])
              }
              renderSuccess={(PostById) => (
                <>
                  <img
                    src={PostById?.author?.avatar?.url}
                    className="blog-post-card-related-author-image"
                  />
                </>
              )}
              params={{
                'sys.id': props['postId'],
              }}
            />
          </div>
        </div>
      </article>
      <style jsx>
        {`
          .blog-post-card-related-blog-post-card-related {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            max-width: 370px;
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius2);
            flex-direction: column;
            background-color: var(--dl-color-gray-white100);
          }
          .blog-post-card-related-tag-container {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            padding-top: 6px;
            border-color: rgb(102, 102, 102);
            border-width: 1px;
            padding-left: 12px;
            border-radius: 29px;
            padding-right: 12px;
            padding-bottom: 6px;
            justify-content: center;
          }
          .blog-post-card-related-dot {
            flex: 0 0 auto;
            width: 8px;
            height: 8px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: #ffb32c;
          }
          .blog-post-card-related-tag {
            color: #666;
            font-size: 14px;
          }
          .blog-post-card-related-image {
            width: 100%;
            object-fit: cover;
          }
          .blog-post-card-related-container {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-post-card-related-read-time {
            gap: 4px;
            color: #4d4d4d;
            display: flex;
            font-size: 0.85rem;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-post-card-related-text {
            color: green;
          }
          .blog-post-card-related-preview {
            color: #666666;
            line-height: 1.6;
          }
          .blog-post-card-related-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: auto;
            align-items: center;
            justify-content: space-between;
          }
          .blog-post-card-related-date-time {
            color: #4d4d4d;
            font-size: 14px;
            text-transform: uppercase;
          }
          .blog-post-card-related-author-image {
            width: 30px;
            height: 30px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }

          @media (max-width: 767px) {
            .blog-post-card-related-blog-post-card-related {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCardRelated.defaultProps = {
  thumbnailSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  publishDate: '2023-11-07T17:10:12.130Z',
  readTime: '10',
  rootClassName: '',
  preview: 'Some short preview text of the blog post',
  postId: '',
  tag: 'News',
}

BlogPostCardRelated.propTypes = {
  thumbnailSrc: PropTypes.string,
  publishDate: PropTypes.string,
  readTime: PropTypes.string,
  rootClassName: PropTypes.string,
  preview: PropTypes.string,
  postId: PropTypes.string,
  tag: PropTypes.string,
}

export default BlogPostCardRelated
