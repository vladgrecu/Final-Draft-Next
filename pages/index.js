import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Final Draft</title>
          <meta property="og:title" content="Final Draft" />
        </Head>
        <Navbar></Navbar>
        <div className="home-container1">
          <Link href="/posts">
            <a className="home-link">
              <h1 className="home-text">Link To BlogPosts</h1>
            </a>
          </Link>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-link {
            display: contents;
          }
          .home-text {
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Home
