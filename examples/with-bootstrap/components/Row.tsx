import React from 'react';

const Row: React.FC = (props) => {
  return (

    <div className="row flex-nowrap">
      <div className="col-12 col-md-6 no-touch-action">
        <div className="border">
          <div className="p-4">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 no-touch-action">
        <div className="border">
          <div className="p-4">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 no-touch-action">
        <div className="border">
          <div className="p-4">
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 no-touch-action">
        <div className="border">
          <div className="p-4">
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row
