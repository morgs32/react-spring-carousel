import React from 'react';

const Row: React.FC = (props) => {
  return (

    <div className="row">
      <div className="col">
        <div className="border">
          <div className="p-x p-y">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="border">
          <div className="p-x p-y">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="border">
          <div className="p-x p-y">
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="border">
          <div className="p-x p-y">
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .row {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          margin: -1.5rem;
        }
        
        .col {
          width: 100%;
          flex-shrink: 0;
          padding: 1.5rem;
          -ms-touch-action: none;
          touch-action: none;
        }
        @media (min-width: 768px) {
          .col {
             width: 50%;
          }
        }
        
        .border {
          border: 1px solid black;
          border-radius: 4px;
          height: 100%;
        }
      `}
      </style>
    </div>
  );
}

export default Row
