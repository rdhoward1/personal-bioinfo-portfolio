import "./App.css";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <main>
      {/* Navigation */}
      <header className="site-header">
        <a className="brand" href="#home">
          <span className="initials">RH</span>
          <span>Rachel Howard</span>
        </a>

        <nav>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#publications">Publications</a>
        </nav>
      </header>

      {/* Opening section */}
      <section className="hero" id="home">
        <p className="eyebrow">
          Computational Biologist · Big Data Enthusiast
        </p>

        <h1>
          Finding signal in
          <span> complex biology.</span>
        </h1>

        <p className="introduction">
          I develop reproducible, interpretable workflows for high-dimensional biological data, 
          integrating transcriptomic, microbial, and multi-omic datasets to uncover biological 
          responses to disease. 
          Using machine learning and AI-driven approaches, I identify cross-omic patterns and candidate 
          biomarkers that advance our understanding of complex disease processes.
        </p>

        <div className="buttons">
          <a className="primary-button" href="#projects">
            Explore my work
          </a>

          <a className="secondary-button" href="#skills">
            View my skills
          </a>
        </div>
      </section>

      {/* Expertise section */}
      <section className="expertise-section" id="expertise">
        <div className="section-heading">
          <p className="eyebrow">What I bring</p>

          <h2>
            Research depth.
            <span> Industry-ready analysis.</span>
          </h2>
        </div>

        <div className="expertise-grid">
          <article className="expertise-card">
            <p className="card-number">01</p>
            <h3>Integrative omics</h3>
            <p>
              I connect transcriptomic, microbial, and phenotypic data to
              identify coordinated biological signatures.
            </p>
          </article>

          <article className="expertise-card">
            <p className="card-number">02</p>
            <h3>Statistical learning</h3>
            <p>
              I apply multivariate statistics and machine-learning methods to
              complex, high-dimensional biological datasets.
            </p>
          </article>

          <article className="expertise-card">
            <p className="card-number">03</p>
            <h3>Reproducible workflows</h3>
            <p>
              I develop scalable workflows that move sequencing data from raw
              reads to interpretable results on high-performance systems.
            </p>
          </article>

          <article className="expertise-card">
            <p className="card-number">04</p>
            <h3>Biological interpretation</h3>
            <p>
              I translate complex analytical results into clear biological
              conclusions, visualizations, and research decisions.
            </p>
          </article>
        </div>
      </section>
      
      <Projects />
      <Skills />
    </main>
  );
}

export default App;