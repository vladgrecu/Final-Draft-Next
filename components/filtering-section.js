import React, { useState } from 'react'

import PropTypes from 'prop-types'

import FilteredBlogPostList from './filtered-blog-post-list'

const FilteringSection = (props) => {
  const [activeFilter, setActiveFilter] = useState('Engineering')
  const [showFilterOptions, setShowFilterOptions] = useState(false)
  const [showAll, setShowAll] = useState(false)
  return (
    <>
      <div className={`filtering-section-container ${props.rootClassName} `}>
        <div className="filtering-section-filter">
          <div
            onClick={() => setShowFilterOptions(!showFilterOptions)}
            className="filtering-section-activefilter"
          >
            <svg
              viewBox="0 0 804.5714285714286 1024"
              className="filtering-section-icon"
            >
              <path d="M801.714 168.571c5.714 13.714 2.857 29.714-8 40l-281.714 281.714v424c0 14.857-9.143 28-22.286 33.714-4.571 1.714-9.714 2.857-14.286 2.857-9.714 0-18.857-3.429-25.714-10.857l-146.286-146.286c-6.857-6.857-10.857-16-10.857-25.714v-277.714l-281.714-281.714c-10.857-10.286-13.714-26.286-8-40 5.714-13.143 18.857-22.286 33.714-22.286h731.429c14.857 0 28 9.143 33.714 22.286z"></path>
            </svg>
            {!showAll && (
              <span className="filtering-section-text">{activeFilter}</span>
            )}
            {showAll && (
              <span className="filtering-section-text1">Show all</span>
            )}
            {showFilterOptions && (
              <div className="filtering-section-options-container">
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className="filtering-section-button btn-pagination"
                >
                  Show All
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveFilter('Engineering')
                    setShowAll(false)
                  }}
                  className="filtering-section-button1 btn-pagination"
                >
                  Enginnering
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveFilter('News')
                    setShowAll(false)
                  }}
                  className="filtering-section-button2 btn-pagination"
                >
                  <span>News</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveFilter('Product')
                    setShowAll(false)
                  }}
                  className="filtering-section-button3 btn-pagination"
                >
                  Product
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveFilter('Inspiration')
                    setShowAll(false)
                  }}
                  className="btn-pagination"
                >
                  Inspiration
                </button>
              </div>
            )}
          </div>
        </div>
        {!showAll && (
          <div className="filtering-section-filtered-by-tag">
            <FilteredBlogPostList
              activeFilter={activeFilter}
              rootClassName="filtered-blog-post-list-root-class-name"
            ></FilteredBlogPostList>
          </div>
        )}
        {showAll && <div className="filtering-section-all"></div>}
      </div>
      <style jsx>
        {`
          .filtering-section-container {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .filtering-section-filter {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white100);
          }
          .filtering-section-activefilter {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-new-stone-white110);
            border-width: 0px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-new-purple);
            border-bottom-width: 1px;
          }
          .filtering-section-icon {
            fill: var(--dl-color-gray-white);
            width: 20px;
            height: 20px;
          }
          .filtering-section-text {
            color: var(--dl-color-gray-white100);
            font-size: 14px;
          }
          .filtering-section-text1 {
            color: var(--dl-color-gray-white100);
            font-size: 14px;
          }
          .filtering-section-options-container {
            top: 40px;
            left: 0px;
            width: 100%;
            display: flex;
            z-index: 100;
            position: absolute;
            align-items: stretch;
            flex-direction: column;
          }
          .filtering-section-button {
            border-color: var(--dl-color-new-stone-white110);
            border-width: 0px;
            border-bottom-width: 1px;
          }
          .filtering-section-button1 {
            border-color: var(--dl-color-new-stone-white110);
            border-width: 0px;
            border-bottom-width: 1px;
          }
          .filtering-section-button2 {
            border-color: var(--dl-color-new-stone-white110);
            border-width: 0px;
            border-bottom-width: 1px;
          }
          .filtering-section-button3 {
            border-color: var(--dl-color-new-stone-white110);
            border-width: 0px;
            border-bottom-width: 1px;
          }
          .filtering-section-filtered-by-tag {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .filtering-section-all {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            flex-direction: row;
          }
        `}
      </style>
    </>
  )
}

FilteringSection.defaultProps = {
  rootClassName: '',
  datetime: '2023-11-07T17:10:12.130Z',
}

FilteringSection.propTypes = {
  rootClassName: PropTypes.string,
  datetime: PropTypes.string,
}

export default FilteringSection
