import React from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

const PostHeader = (props) => {
  return (
    <>
      <div className={`post-header-post-header ${props.rootClassName} `}>
        <div className="post-header-tag-container">
          <div className="post-header-dot"></div>
          <span className="post-header-tag">{props.tag}</span>
        </div>
        <h1 className="post-header-title">{props.heading}</h1>
        <div className="post-header-date-and-read-time">
          <span className="post-header-date-time">
            <DateTimePrimitive
              format="MMM D, YYYY"
              date={props.publishDate}
            ></DateTimePrimitive>
          </span>
          <div className="post-header-read-time">
            <span className="post-header-text"> -  </span>
            <span>{props.readTime}</span>
            <span>min read</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .post-header-post-header {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .post-header-tag-container {
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
          .post-header-dot {
            flex: 0 0 auto;
            width: 8px;
            height: 8px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: #ffb32c;
          }
          .post-header-tag {
            color: #666;
            font-size: 14px;
          }
          .post-header-title {
            font-size: 36px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            line-height: 1.3;
            margin-bottom: var(--dl-space-space-unit);
          }
          .post-header-date-and-read-time {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .post-header-date-time {
            color: #4d4d4d;
            font-size: 14px;
            text-transform: uppercase;
          }
          .post-header-read-time {
            gap: 4px;
            color: #4d4d4d;
            display: flex;
            font-size: 0.85rem;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .post-header-text {
            color: green;
          }
        `}
      </style>
    </>
  )
}

PostHeader.defaultProps = {
  heading: 'The title of the blog post',
  readTime: '20',
  rootClassName: '',
  publishDate: '2023-11-07T08:43:44.077Z',
  tag: 'Engineering',
}

PostHeader.propTypes = {
  heading: PropTypes.string,
  readTime: PropTypes.string,
  rootClassName: PropTypes.string,
  publishDate: PropTypes.string,
  tag: PropTypes.string,
}

export default PostHeader
