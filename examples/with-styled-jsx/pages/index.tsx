import Head from 'next/head'
import React, { useRef } from 'react';
import Carousel from 'react-spring-carousel';

const Home: React.FC = () => {

  const ref = useRef<HTMLDivElement>();

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>

      <main>
        <div
          style={{ overflow: 'hidden', padding: 16, height: '100vh', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
        >
          <Carousel
            ref={ref}
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              margin: -16,
            }}
          >
            <div className="col" style={{ flexShrink: 0, padding: 16 }}>
              <div style={{ border: '1px solid black', borderRadius: 4, height: '100%', }}>
                <div style={{ padding: 16 }}>
                  <h3>Documentation &rarr;</h3>
                  <p>Find in-depth information about Next.js features and API.</p>
                </div>
              </div>
            </div>

            <div className="col" style={{ flexShrink: 0, padding: 16 }}>
              <div style={{ border: '1px solid black', borderRadius: 4, height: '100%', }}>
                <div style={{ padding: 16 }}>
                  <h3>Learn &rarr;</h3>
                  <p>Learn about Next.js in an interactive course with quizzes!</p>
                </div>
              </div>
            </div>

            <div className="col" style={{ flexShrink: 0, padding: 16 }}>
              <div style={{ border: '1px solid black', borderRadius: 4, height: '100%', }}>
                <div style={{ padding: 16 }}>
                  <h3>Examples &rarr;</h3>
                  <p>Discover and deploy boilerplate example Next.js projects.</p>
                </div>
              </div>
            </div>

            <div className="col" style={{ flexShrink: 0, padding: 16 }}>
              <div style={{ border: '1px solid black', borderRadius: 4, height: '100%', }}>
                <div style={{ padding: 16 }}>
                  <h3>Deploy &rarr;</h3>
                  <p>
                    Instantly deploy your Next.js site to a public URL with Vercel.
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </main>
      
      <style jsx>{`
        .col {
          width: 100%;
        }
        @media (min-width: 768px) {
          .col {
             width: 50%;
          }
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

      `}</style>
    </div>
  )
}

export default Home
