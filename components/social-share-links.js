import React, { useState } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const SocialShareLinks = (props) => {
  const [showToast, setShowToast] = useState(false)
  return (
    <>
      <div
        className={`social-share-links-social-share-links ${props.rootClassName} `}
      >
        <a
          href={props.twitter}
          target="_blank"
          rel="noreferrer noopener"
          className="social-share-links-link button btn-social-media"
        >
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className="social-share-links-icon"
          >
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
        </a>
        <a
          href={props.facebook}
          target="_blank"
          rel="noreferrer noopener"
          className="social-share-links-link1 button btn-social-media"
        >
          <svg
            viewBox="0 0 602.2582857142856 1024"
            className="social-share-links-icon02"
          >
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </a>
        <a
          href={props.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="social-share-links-link2 button btn-social-media"
        >
          <svg viewBox="0 0 1024 1024" className="social-share-links-icon04">
            <path d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z"></path>
            <path d="M64 384h192v576h-192v-576z"></path>
            <path d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
          </svg>
        </a>
        <button type="button" className="button btn-social-media">
          <svg viewBox="0 0 1024 1024" className="social-share-links-icon08">
            <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
          </svg>
        </button>
        <button
          type="button"
          data-link
          onClick={() => setShowToast(true)}
          onMouseLeave={() => setShowToast(false)}
          className="button btn-social-media"
        >
          <svg viewBox="0 0 1024 1024" className="social-share-links-icon10">
            <path d="M469.333 341.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v384c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h384c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-384c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM469.333 426.667h384c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v384c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-384c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-384c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM213.333 597.333h-42.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-384c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h384c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v42.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-42.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-384c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v384c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h42.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667z"></path>
          </svg>
        </button>
        {showToast && (
          <div className="social-share-links-toast">
            <span className="social-share-links-text">
              Copied post link to clipboard successfully
            </span>
          </div>
        )}
        <div>
          <div className="social-share-links-container1">
            <Script
              html={`<script>
document.querySelectorAll('[data-link]').forEach(element => {
    console.log('Element found:', element)
    element.addEventListener('click', () => {
        navigator.clipboard.writeText(document.location.href);
    });
});
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .social-share-links-social-share-links {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            position: relative;
            margin-bottom: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          }
          .social-share-links-link {
            text-decoration: none;
          }
          .social-share-links-icon {
            width: 20px;
            height: 20px;
          }
          .social-share-links-link1 {
            text-decoration: none;
          }
          .social-share-links-icon02 {
            width: 20px;
            height: 20px;
          }
          .social-share-links-link2 {
            text-decoration: none;
          }
          .social-share-links-icon04 {
            width: 20px;
            height: 20px;
          }
          .social-share-links-icon08 {
            width: 20px;
            height: 20px;
          }
          .social-share-links-icon10 {
            width: 20px;
            height: 20px;
          }
          .social-share-links-toast {
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            z-index: 1000;
            position: fixed;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            animation-name: fadeIn;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-success-500);
            animation-duration: 0.3s;
            animation-fill-mode: both;
          }
          .social-share-links-text {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .social-share-links-container1 {
            display: contents;
          }

          @media (max-width: 767px) {
            .social-share-links-social-share-links {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

SocialShareLinks.defaultProps = {
  twitter: '',
  rootClassName: '',
  linkedin: '',
  facebook: '',
}

SocialShareLinks.propTypes = {
  twitter: PropTypes.string,
  rootClassName: PropTypes.string,
  linkedin: PropTypes.string,
  facebook: PropTypes.string,
}

export default SocialShareLinks
