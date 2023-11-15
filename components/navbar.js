import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <div
        id="fixed-header"
        className={`header-fixed-container ${props.rootClassName} `}
      >
        <div className="navbar-navbar1">
          <div className="navbar-max-width max-content-width">
            <div className="navbar-left-side">
              <Link href="/">
                <a className="navbar-link">
                  <img
                    alt="teleporthq"
                    src="/external/teleport-logo-dark-text.svg"
                    className="navbar-logo"
                  />
                </a>
              </Link>
            </div>
            <div className="navbar-right-side">
              <div className="navbar-super-menu">
                <div className="super-menu-item">
                  <span className="navbar-label">Product</span>
                  <svg viewBox="0 0 1024 1024" className="navbar-icon">
                    <path d="M298 426h428l-214 214z"></path>
                  </svg>
                  <div className="super-menu-item-dropdown-light">
                    <div className="navbar-dropdown-item super-menu-item-dropdown-item-row-light">
                      <img
                        alt="image"
                        src="/external/bxs-widget11.svg"
                        className="navbar-image"
                      />
                      <span className="navbar-link-black">
                        Profesional website builder
                      </span>
                    </div>
                    <div className="navbar-dropdown-item01 super-menu-item-dropdown-item-row-light">
                      <img
                        alt="image"
                        src="/external/bxs-layout111.svg"
                        className="navbar-image01"
                      />
                      <span className="navbar-link-black">
                        Static website templates
                      </span>
                    </div>
                    <div className="navbar-dropdown-item02 super-menu-item-dropdown-item-row-light">
                      <img
                        alt="image"
                        src="/external/bxs-devices.svg"
                        className="navbar-image02"
                      />
                      <span className="navbar-link-black">
                        Low-code development
                      </span>
                    </div>
                    <div className="navbar-dropdown-item03 super-menu-item-dropdown-item-row-light">
                      <img
                        alt="image"
                        src="/external/bxs-detail21.svg"
                        className="navbar-image03"
                      />
                      <span className="navbar-link-black">
                        AI website builder
                      </span>
                    </div>
                    <div className="navbar-dropdown-item04 super-menu-item-dropdown-item-row-light">
                      <img
                        alt="image"
                        src="/external/bxs-terminal1.svg"
                        className="navbar-image04"
                      />
                      <span className="navbar-link-black">
                        Code collaboration
                      </span>
                    </div>
                    <div className="navbar-dropdown-item05 super-menu-item-dropdown-item-row-light">
                      <img
                        alt="image"
                        src="/external/bxl-react.svg"
                        className="navbar-image05"
                      />
                      <span className="navbar-link-black">Code generators</span>
                    </div>
                    <div className="navbar-dropdown-item06 super-menu-item-dropdown-item-row-light">
                      <img
                        alt="image"
                        src="/external/bxl-figma1.svg"
                        className="navbar-image06"
                      />
                      <span className="navbar-link-black">Figma plugin</span>
                    </div>
                  </div>
                </div>
                <div className="super-menu-item">
                  <span className="navbar-label1">Resources</span>
                  <svg viewBox="0 0 1024 1024" className="navbar-icon2">
                    <path d="M298 426h428l-214 214z"></path>
                  </svg>
                  <div className="super-menu-item-dropdown-light">
                    <div className="navbar-grid-container">
                      <div className="navbar-dropdown-item07 super-menu-item-dropdown-item-column-light">
                        <div className="navbar-top">
                          <img
                            alt="image"
                            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f3ae7118-0d4e-4cc7-90f5-15f43eb3b4c6/a789bc24-d558-4e2f-aae6-d6c6c9bc6ff4?org_if_sml=1416"
                            className="navbar-image07"
                          />
                          <span className="navbar-link-black">
                            Website Showcase
                          </span>
                        </div>
                        <span className="navbar-text08">
                          Discover what others have built with TeleportHQ
                        </span>
                      </div>
                      <div className="navbar-dropdown-item08 super-menu-item-dropdown-item-column-light">
                        <div className="navbar-top1">
                          <img
                            alt="image"
                            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f3ae7118-0d4e-4cc7-90f5-15f43eb3b4c6/402bfb70-2821-4c27-9475-48edddac0a4b?org_if_sml=1435"
                            className="navbar-image08"
                          />
                          <span className="navbar-link-black">
                            Customer Stories
                          </span>
                        </div>
                        <span className="navbar-text10">
                          Read what others are saying about TeleportHQ
                        </span>
                      </div>
                      <div className="navbar-dropdown-item09 super-menu-item-dropdown-item-column-light">
                        <div className="navbar-top2">
                          <img
                            alt="image"
                            src="/external/bxs-layout111.svg"
                            className="navbar-image09"
                          />
                          <span className="navbar-link-black">Templates</span>
                        </div>
                        <span className="navbar-text12">
                          Discover and start from our ready-made template
                          gallery.
                        </span>
                      </div>
                      <Link href="/posts">
                        <a>
                          <div className="navbar-dropdown-item10 super-menu-item-dropdown-item-column-light">
                            <div className="navbar-top3">
                              <img
                                alt="image"
                                src="/external/bxs-receipt11.svg"
                                className="navbar-image10"
                              />
                              <span className="navbar-link-black">Blog</span>
                            </div>
                            <span className="navbar-text14">
                              Read our latest articles on low-code development
                              and more.
                            </span>
                          </div>
                        </a>
                      </Link>
                      <div className="navbar-dropdown-item11 super-menu-item-dropdown-item-column-light">
                        <div className="navbar-top4">
                          <img
                            alt="image"
                            src="/external/bxs-buoy11.svg"
                            className="navbar-image11"
                          />
                          <span className="navbar-link-black">Help Center</span>
                        </div>
                        <span className="navbar-text16">
                          Find answers to the most common questions in our help
                          section.
                        </span>
                      </div>
                      <div className="navbar-dropdown-item12 super-menu-item-dropdown-item-column-light">
                        <div className="navbar-top5">
                          <img
                            alt="image"
                            src="/external/bxs-detail1.svg"
                            className="navbar-image12"
                          />
                          <span className="navbar-link-black">
                            Documentation
                          </span>
                        </div>
                        <span className="navbar-text18">
                          Read trough our docummentation and technical knowledge
                          base.
                        </span>
                      </div>
                      <div className="navbar-dropdown-item13 super-menu-item-dropdown-item-column-light">
                        <div className="navbar-top6">
                          <img
                            alt="image"
                            src="/external/bxs-caret-right-circle11.svg"
                            className="navbar-image13"
                          />
                          <span className="navbar-link-black">Tutorials</span>
                        </div>
                        <span className="navbar-text20">
                          Learn how to use TeleportHQ in under 10 minutes.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navbar-pricing super-menu-item">
                  <span className="navbar-label2">Pricing</span>
                  <svg viewBox="0 0 1024 1024" className="navbar-icon4">
                    <path d="M298 426h428l-214 214z"></path>
                  </svg>
                </div>
              </div>
              <div className="navbar-btn-container">
                <button
                  id="ta-top-menu-main-get-started"
                  className="navbar-cta-login"
                >
                  Login
                </button>
                <button className="navbar-cta-signup">Start for free</button>
              </div>
              <div className="burger-menu">
                <svg viewBox="0 0 1024 1024" className="burger-menu-image">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navbar-navbar1 {
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 1000;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white100);
          }
          .navbar-max-width {
            height: 80px;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-left-side {
            display: flex;
            font-size: 16px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
          }
          .navbar-link {
            display: contents;
          }
          .navbar-logo {
            height: 37px;
            align-self: center;
            object-fit: fill;
            text-decoration: none;
          }
          .navbar-right-side {
            display: flex;
            font-size: 16px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-super-menu {
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-label {
            color: var(--dl-color-new-blackmagic100);
            font-size: 14px;
            align-self: center;
            font-family: Space Grotesk;
            font-weight: 500;
            margin-right: 4px;
            text-transform: none;
          }
          .navbar-icon {
            fill: var(--dl-color-new-blackmagic100);
            width: 16px;
            height: 16px;
          }
          .navbar-dropdown-item {
            text-decoration: none;
          }
          .navbar-image {
            width: 20px;
            object-fit: cover;
            margin-right: 16px;
          }
          .navbar-dropdown-item01 {
            text-decoration: none;
          }
          .navbar-image01 {
            width: 20px;
            object-fit: cover;
            margin-right: 16px;
          }
          .navbar-dropdown-item02 {
            text-decoration: none;
          }
          .navbar-image02 {
            width: 20px;
            object-fit: cover;
            margin-right: 16px;
          }
          .navbar-dropdown-item03 {
            text-decoration: none;
          }
          .navbar-image03 {
            width: 20px;
            object-fit: cover;
            margin-right: 16px;
          }
          .navbar-dropdown-item04 {
            text-decoration: none;
          }
          .navbar-image04 {
            width: 20px;
            object-fit: cover;
            margin-right: 16px;
          }
          .navbar-dropdown-item05 {
            text-decoration: none;
          }
          .navbar-image05 {
            width: 20px;
            object-fit: cover;
            margin-right: 16px;
          }
          .navbar-dropdown-item06 {
            text-decoration: none;
          }
          .navbar-image06 {
            width: 20px;
            object-fit: cover;
            margin-right: 16px;
          }
          .navbar-label1 {
            color: var(--dl-color-new-blackmagic100);
            font-size: 14px;
            align-self: center;
            font-family: Space Grotesk;
            font-weight: 500;
            margin-right: 4px;
            text-transform: none;
          }
          .navbar-icon2 {
            fill: var(--dl-color-new-blackmagic100);
            width: 16px;
            height: 16px;
          }
          .navbar-grid-container {
            display: grid;
            grid-template-columns: 1fr;
          }
          .navbar-dropdown-item07 {
            text-decoration: none;
          }
          .navbar-top {
            display: flex;
            margin-bottom: 4px;
          }
          .navbar-image07 {
            width: 20px;
            object-fit: cover;
            margin-right: 16px;
          }
          .navbar-text08 {
            color: var(--dl-color-new-blackmagic80);
            font-size: 14px;
            font-family: Space Grotesk;
            line-height: 21px;
            padding-left: 36px;
          }
          .navbar-dropdown-item08 {
            text-decoration: none;
          }
          .navbar-top1 {
            display: flex;
            margin-bottom: 4px;
          }
          .navbar-image08 {
            width: 20px;
            object-fit: cover;
            margin-right: 16px;
          }
          .navbar-text10 {
            color: var(--dl-color-new-blackmagic80);
            font-size: 14px;
            font-family: Space Grotesk;
            line-height: 21px;
            padding-left: 36px;
          }
          .navbar-dropdown-item09 {
            text-decoration: none;
          }
          .navbar-top2 {
            display: flex;
            margin-bottom: 4px;
          }
          .navbar-image09 {
            width: 20px;
            object-fit: cover;
            margin-right: 16px;
          }
          .navbar-text12 {
            color: var(--dl-color-new-blackmagic80);
            font-size: 14px;
            font-family: Space Grotesk;
            line-height: 21px;
            padding-left: 36px;
          }
          .navbar-dropdown-item10 {
            text-decoration: none;
          }
          .navbar-top3 {
            display: flex;
            margin-bottom: 4px;
          }
          .navbar-image10 {
            width: 20px;
            object-fit: cover;
            margin-right: 16px;
          }
          .navbar-text14 {
            color: var(--dl-color-new-blackmagic80);
            font-size: 14px;
            font-family: Space Grotesk;
            line-height: 21px;
            padding-left: 36px;
          }
          .navbar-dropdown-item11 {
            text-decoration: none;
          }
          .navbar-top4 {
            display: flex;
            margin-bottom: 4px;
          }
          .navbar-image11 {
            width: 20px;
            object-fit: cover;
            margin-right: 16px;
          }
          .navbar-text16 {
            color: var(--dl-color-new-blackmagic80);
            font-size: 14px;
            font-family: Space Grotesk;
            line-height: 21px;
            padding-left: 36px;
          }
          .navbar-dropdown-item12 {
            text-decoration: none;
          }
          .navbar-top5 {
            display: flex;
            margin-bottom: 4px;
          }
          .navbar-image12 {
            width: 20px;
            object-fit: cover;
            margin-right: 16px;
          }
          .navbar-text18 {
            color: var(--dl-color-new-blackmagic80);
            font-size: 14px;
            font-family: Space Grotesk;
            line-height: 21px;
            padding-left: 36px;
          }
          .navbar-dropdown-item13 {
            text-decoration: none;
          }
          .navbar-top6 {
            display: flex;
            margin-bottom: 4px;
          }
          .navbar-image13 {
            width: 20px;
            object-fit: cover;
            margin-right: 16px;
          }
          .navbar-text20 {
            color: var(--dl-color-new-blackmagic80);
            font-size: 14px;
            font-family: Space Grotesk;
            line-height: 21px;
            padding-left: 36px;
          }
          .navbar-pricing {
            text-decoration: none;
          }
          .navbar-label2 {
            color: var(--dl-color-new-blackmagic100);
            font-size: 14px;
            align-self: center;
            font-family: Space Grotesk;
            font-weight: 500;
            margin-right: 4px;
            text-transform: none;
          }
          .navbar-icon4 {
            fill: var(--dl-color-gray-white100);
            width: 16px;
            height: 16px;
            display: none;
          }
          .navbar-btn-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-cta-login {
            color: var(--dl-color-new-blackmagic100);
            font-size: 14px;
            transition: 0.3s;
            font-family: Space Grotesk;
            font-weight: 500;
            padding-top: 8px;
            margin-right: 16px;
            padding-left: 16px;
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: 16px;
            padding-bottom: 8px;
            text-transform: none;
            text-decoration: none;
            background-color: var(--dl-color-new-stone-white110);
          }
          .navbar-cta-login:hover {
            background-color: rgba(228, 228, 228, 0.4);
          }
          .navbar-cta-signup {
            color: var(--dl-color-gray-white100);
            font-size: 14px;
            transition: 0.3s;
            font-family: Space Grotesk;
            font-weight: 500;
            padding-top: 8px;
            white-space: nowrap;
            padding-left: 16px;
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: 16px;
            padding-bottom: 8px;
            text-transform: none;
            text-decoration: none;
            background-color: var(--dl-color-new-purple);
          }
          .navbar-cta-signup:hover {
            background-color: #6f32e3;
          }
          @media (max-width: 767px) {
            .navbar-super-menu {
              display: none;
            }
            .navbar-cta-login {
              display: none;
            }
            .navbar-cta-signup {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .navbar-logo {
              margin-right: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  rootClassName: '',
}

Navbar.propTypes = {
  rootClassName: PropTypes.string,
}

export default Navbar
