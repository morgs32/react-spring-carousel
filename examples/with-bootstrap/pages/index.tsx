import Head from 'next/head'
import React, { useRef } from 'react';
import Row from '../components/Row';
import Carousel from 'react-spring-universal-carousel';

export default function Home() {

  const ref = useRef();

  return (
    <div className="bg-dark">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href={'/favicon.ico'} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>

      <main className="container bg-light px-4" style={{ minHeight: '100vh', paddingTop: 100 }}>

        <h1>
          React Spring
          <br />
          Universal Carousel
          <br />
          <small className="badge badge-primary">
            with bootstrap
          </small>
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

        <div className="pb-4 mb-2" style={{ overflowX: 'scroll' }}>
          <Row />
        </div>

        <p>
          If you have trouble, check out the code for this example. You may be forgetting
          a meta tag like this:
        </p>

        <pre style={{ overflow: 'scroll' }}>
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

        <div className="mx-n4">
          <Carousel ref={ref}>
            <div className="p-4">
              <Row />
            </div>
          </Carousel>
        </div>
      </main>

    </div>
  )
}
