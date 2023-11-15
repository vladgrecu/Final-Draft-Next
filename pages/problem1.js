import React from 'react'
import Head from 'next/head'

const Problem1 = (props) => {
  return (
    <>
      <div className="problem1-container">
        <Head>
          <title>Problem1 - Final Draft</title>
          <meta property="og:title" content="Problem1 - Final Draft" />
        </Head>
      </div>
      <style jsx>
        {`
          .problem1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Problem1
