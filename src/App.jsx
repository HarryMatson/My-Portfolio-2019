import { useState } from 'react';
import './index.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <nav>
        <button onClick={() => setShowIntro(!showIntro)}>
          {showIntro ? 'View Work' : 'Intro'}
        </button>
      </nav>
      {showIntro ? (
        <section className="intro">
          <h1>Hi, I'm Your Name</h1>
          <p>Welcome to my portfolio. Click the button to view my projects.</p>
        </section>
      ) : (
        <section className="projects">
          <h2>Projects</h2>
          {[1, 2, 3].map((item) => (
            <div className="portfolio-item" key={item}>
              <h3>Project {item}</h3>
              <p>Project {item} description goes here.</p>
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export default App;
