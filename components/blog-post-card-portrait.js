import React from 'react'
import Link from 'next/link'

import {
  DateTimePrimitive,
  DataProvider,
  Repeater,
} from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const BlogPostCardPortrait = (props) => {
  return (
    <>
      <article
        className={`blog-post-card-portrait-blog-post-card ${props.rootClassName} `}
      >
        <img
          alt={props.thumbnailAlt}
          src={props.thumbnailSrc}
          data-animate="true"
          data-animation="fadeIn"
          className="blog-post-card-portrait-image lazyloaded"
        />
        <div className="blog-post-card-portrait-content">
          <div className="blog-post-card-portrait-tag-container">
            <div className="blog-post-card-portrait-dot"></div>
            <span className="blog-post-card-portrait-tag">{props.tag}</span>
          </div>
          {props.children}
          <div className="blog-post-card-portrait-read-time">
            <span className="blog-post-card-portrait-text">Public  -  </span>
            <span>{props.readTime}</span>
            <span>min read</span>
          </div>
          <span className="blog-post-card-portrait-preview">
            {props.preview}
          </span>
          <div className="blog-post-card-portrait-container">
            <span className="blog-post-card-portrait-date-time">
              <DateTimePrimitive
                format="DD/MM/YYYY"
                date={props.publishedDate}
              ></DateTimePrimitive>
            </span>
            <DataProvider
              fetchData={(params) =>
                fetch(
                  `/api/blog-post-card-portrait-resource-blog-post-card-portrait?${new URLSearchParams(
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
                    renderItem={(author) => (
                      <>
                        <Link href={`/author/${author?.name}`}>
                          <a>
                            <img
                              alt={author?.avatar?.alt}
                              src={author?.avatar?.url}
                              className="blog-post-card-portrait-image1"
                            />
                          </a>
                        </Link>
                      </>
                    )}
                  />
                </>
              )}
              params={{
                authorName: props.authorName,
              }}
            />
          </div>
        </div>
        <div className="blog-post-card-portrait-container1">
          <div className="blog-post-card-portrait-container2">
            <Script
              html={`<script>
  (function () {
    // Get the script element
    const scriptElement = document.currentScript;

    // Traverse up the DOM hierarchy to find the <article> tag
    let currentElement = scriptElement;
    while (currentElement && currentElement.tagName !== "ARTICLE") {
      currentElement = currentElement.parentNode;
    }

    if (!currentElement) {
      console.error("Parent <article> tag not found");
      return;
    }

    // Find the element to animate within the <article> tag
    const elementToAnimate = currentElement.querySelector(
      '[data-animate="true"]'
    );

    if (!elementToAnimate) {
      console.error("Element to animate not found within the <article> tag");
      return;
    }

    const options = {
      threshold: 0.3, // Trigger animation when 30% of the element is in the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        const animationClass = entry.target.getAttribute("data-animation");
        if (entry.isIntersecting) {
          if (animationClass) {
            entry.target.classList.add(animationClass);
          }
        } else {
          if (animationClass) {
            entry.target.classList.remove(animationClass);
          }
        }
      });
    }, options);

    observer.observe(elementToAnimate); // Observe the element within the <article> tag
  })();
</script>
`}
            ></Script>
          </div>
        </div>
      </article>
      <style jsx>
        {`
          .blog-post-card-portrait-blog-post-card {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            position: relative;
            max-width: 415px;
            box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.02);
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius2);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .blog-post-card-portrait-image {
            width: 100%;
            object-fit: cover;
          }
          .blog-post-card-portrait-content {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-post-card-portrait-tag-container {
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
          .blog-post-card-portrait-dot {
            flex: 0 0 auto;
            width: 8px;
            height: 8px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: #ffb32c;
          }
          .blog-post-card-portrait-tag {
            color: #666;
            font-size: 14px;
          }
          .blog-post-card-portrait-read-time {
            gap: 4px;
            color: #4d4d4d;
            display: flex;
            font-size: 0.85rem;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-post-card-portrait-text {
            color: green;
          }
          .blog-post-card-portrait-preview {
            color: #666666;
            line-height: 1.6;
          }
          .blog-post-card-portrait-container {
            width: 100%;
            display: flex;
            margin-top: auto;
            align-items: center;
            justify-content: space-between;
          }
          .blog-post-card-portrait-date-time {
            color: #4d4d4d;
            font-size: 14px;
            text-transform: uppercase;
          }
          .blog-post-card-portrait-image1 {
            width: 30px;
            height: 30px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            text-decoration: none;
          }
          .blog-post-card-portrait-container1 {
            display: none;
          }
          .blog-post-card-portrait-container2 {
            display: contents;
          }

          @media (max-width: 767px) {
            .blog-post-card-portrait-blog-post-card {
              max-width: 450px;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCardPortrait.defaultProps = {
  thumbnailSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  preview: 'Some preview text here...',
  rootClassName: '',
  tag: 'SomeTag',
  thumbnailAlt: 'image',
  publishedDate:
    'Wed Nov 01 2023 15:05:38 GMT+0200 (Eastern European Standard Time)',
  readTime: '10',
  authorName: '',
}

BlogPostCardPortrait.propTypes = {
  thumbnailSrc: PropTypes.string,
  preview: PropTypes.string,
  rootClassName: PropTypes.string,
  tag: PropTypes.string,
  thumbnailAlt: PropTypes.string,
  publishedDate: PropTypes.string,
  readTime: PropTypes.string,
  authorName: PropTypes.string,
}

export default BlogPostCardPortrait
