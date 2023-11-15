import React from 'react'
import Link from 'next/link'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

const AuthorCardWithLink = (props) => {
  return (
    <>
      <div className="author-card-with-link-author-card">
        <span className="author-card-with-link-text">Published by</span>
        <div className="special-delimiter"></div>
        <DataProvider
          fetchData={(params) =>
            fetch(
              `/api/author-card-with-link-resource-author-card-with-link?${new URLSearchParams(
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
                renderItem={(authorWithLink) => (
                  <>
                    <div className="author-card-with-link-container">
                      <Link href={`/author/${authorWithLink?.name}`}>
                        <a className="author-card-with-link-link">
                          <img
                            alt={authorWithLink?.avatar?.alt}
                            src={authorWithLink?.avatar?.url}
                            className="author-card-with-link-image"
                          />
                        </a>
                      </Link>
                      <span>{authorWithLink?.name}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          params={{
            name: props.name,
          }}
        />
      </div>
      <style jsx>
        {`
          .author-card-with-link-author-card {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius2);
            flex-direction: column;
            background-color: var(--dl-color-gray-white100);
          }
          .author-card-with-link-text {
            color: #666;
            font-size: 18px;
          }
          .author-card-with-link-container {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .author-card-with-link-link {
            display: contents;
          }
          .author-card-with-link-image {
            width: 90px;
            height: 90px;
            object-fit: cover;
            transition: 0.3s;
            border-radius: var(--dl-radius-radius-round);
            text-decoration: none;
          }
          .author-card-with-link-image:hover {
            border-color: rgba(100, 96, 96, 0.37);
            border-width: 2px;
          }
        `}
      </style>
    </>
  )
}

AuthorCardWithLink.defaultProps = {
  name: '',
  rootClassName: '',
}

AuthorCardWithLink.propTypes = {
  name: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AuthorCardWithLink
