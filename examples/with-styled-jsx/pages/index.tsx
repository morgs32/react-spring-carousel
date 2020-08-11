import Head from 'next/head'
import React, { useRef } from 'react';
import Row from '../components/Row';
import Carousel from 'react-spring-universal-carousel';

const Home: React.FC = () => {

  const ref = useRef<HTMLDivElement>();

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>

      <main className="main">


        <div className="p-x">
          <h1>
            React Spring
            <br />
            Universal Carousel
          </h1>

          <h2>
            Step 1
          </h2>
          <p>
            Make sure your row scrolls effectively first.
            For example, here is a row of cards <strong>before
            using the carousel</strong>. It only has
          </p>
          <pre>
            <code>overflow-x: scroll</code>
          </pre>
        </div>

        <div style={{ overflowX: 'scroll' }}>
          <div className="p-y p-x">
            <Row />
          </div>
        </div>

        <div className="p-x">
          <p>
            If you have trouble, check out the code for this example. You may be forgetting
            a meta tag like this:
          </p>

          <pre className="p-y" style={{ overflow: 'scroll' }}>
            <code>
              &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1, shrink-to-fit=no&quot; /&gt;
            </code>
          </pre>
          <h2>
            Step 2
          </h2>

          <p>
            Once it looks good without the Carousel, just wrap your row component
            in Carousel
          </p>
        </div>


        <Carousel ref={ref}>
          <div className="p-y p-x">
            <Row />
          </div>
        </Carousel>
      </main>

      <style jsx>{`
        .container {
          background: papayawhip;
        }
        .main {
          max-width: 540px;
          margin: auto;
          padding: 4rem 0;
          background: white;
        }
      `}
      </style>

      <style jsx global>{`
      
        *, *::before, *::after {
         box-sizing: border-box;
        }
        
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        
        .p-x {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        .p-y {
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
        }

      `}</style>
    </div>
  )
}

export default Home
