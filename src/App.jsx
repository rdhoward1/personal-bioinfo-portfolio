import "./App.css";
import Navigation from "./Navigation";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Publications from "./Publications";

function App() {
  return (
    <main>
      <Navigation />

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">
              Computational Biologist · Big Data Enthusiast
            </p>

            <h1>
              Finding signal in
              <span> complex biology.</span>
            </h1>

            <p className="introduction">
              I integrate transcriptomic, microbiome, phenotypic, and clinical
              data to investigate host-microbe interactions, symbiosis, and
              disease. I build reproducible analytical workflows and apply
              machine learning, multivariate statistics, and feature-selection
              methods to uncover coordinated biological signatures and
              candidate biomarkers across complex datasets.
            </p>

            <div className="buttons">
              <a className="primary-button" href="#projects">
                Explore my work
              </a>

              <a className="secondary-button" href="#skills">
                View my skills
              </a>
            </div>
          </div>

          <div className="hero-image-container">
            <img
              className="hero-image"
              src={`${import.meta.env.BASE_URL}RHow.jpg`}
              alt="Rachel Howard, computational biologist"
            />
          </div>
        </div>
      </section>

      <About />

      {/* Expertise section */}
      <section className="expertise-section" id="expertise">
        <div className="section-heading expertise-heading">
         <div className="expertise-heading-text">
          <p className="eyebrow">What I bring</p>

          <h2>
            Research depth.
          <span> Industry-ready analysis.</span>
        </h2>
      </div>

      <div className="expertise-heading-image">
        <img
          src={`${import.meta.env.BASE_URL}Network.png`}
          alt="Multi-omics correlation network visualization"
          loading="lazy"
        />
      </div>
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

            <h3>Machine learning</h3>

            <p>
              I develop, tune, and evaluate supervised models for
              high-dimensional biological data using feature selection,
              cross-validation, balanced error rates, confusion matrices, and
              ROC–AUC.
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
      <Publications />
    </main>
  );
}

export default App;