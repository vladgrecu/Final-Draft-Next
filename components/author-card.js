import React from 'react'

import PropTypes from 'prop-types'

const AuthorCard = (props) => {
  return (
    <>
      <div className={`author-card-author-card ${props.rootClassName} `}>
        <span className="author-card-text">Published by</span>
        <div className="special-delimiter"></div>
        <div className="author-card-container">
          <img
            alt={props.imageAlt}
            src={props.imageUrl}
            className="author-card-image"
          />
          <span>{props.name}</span>
        </div>
      </div>
      <style jsx>
        {`
          .author-card-author-card {
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
          .author-card-text {
            color: #666;
            font-size: 18px;
          }
          .author-card-container {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .author-card-image {
            width: 90px;
            height: 90px;
            object-fit: cover;
            transition: 0.3s;
            border-radius: var(--dl-radius-radius-round);
          }
          .author-card-image:hover {
            border-color: rgba(100, 96, 96, 0.37);
            border-width: 2px;
          }

          .author-card-root-class-name2 {
            align-self: stretch;
          }
        `}
      </style>
    </>
  )
}

AuthorCard.defaultProps = {
  rootClassName: '',
  name: 'Author Name',
  imageAlt: 'image',
  imageUrl: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

AuthorCard.propTypes = {
  rootClassName: PropTypes.string,
  name: PropTypes.string,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default AuthorCard
