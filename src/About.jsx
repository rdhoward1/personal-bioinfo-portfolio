function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-heading">
        <p className="eyebrow">About me</p>

        <h2>
          Biology informs the questions.
          <span> Computation reveals the patterns.</span>
        </h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p className="about-introduction">
            I am a computational biologist specializing in multi-omics
            integration, machine learning, and the biology of host-microbe and
            host-symbiont interactions.
          </p>

          <p>
            My research brings together host transcriptomics, symbiont
            transcriptomics, microbiome profiles, and clinical/phenotypic
            measurements to understand biological responses to disease and
            physiological stress. I use supervised machine learning,
            multivariate modeling, feature selection, and functional
            interpretation to identify predictive biological signatures that
            may be missed when each dataset is analyzed separately.
          </p>

          <p>
            A defining strength of my work is analytical adaptability. I can
            quickly learn new data types and computational methods, understand
            their assumptions and limitations, develop reproducible workflows,
            and translate the results into meaningful biological insights.
          </p>
        </div>

        <div className="experience-list">
          <article className="experience-item">
            <p className="experience-date">2025–Present</p>

            <div>
              <h3>Postdoctoral Research Associate</h3>

              <p className="experience-organization">
                University of Texas at Arlington · Department of Biology
              </p>

              <p>
                Lead multi-omics integration and bioinformatics efforts,
                combining host and symbiont transcriptomics, microbiome
                profiles, and phenotypic data. Apply supervised machine learning,
                multiblock modeling, feature selection, and functional analysis
                to identify coordinated molecular signatures associated with
                disease.
              </p>
            </div>
          </article>

          <article className="experience-item">
            <p className="experience-date">2024-2025</p>

            <div>
              <h3>Postdoctoral Scholar</h3>

              <p className="experience-organization">
                Texas State University · Department of Biology
              </p>

              <p>
                Developed reproducible bioinformatics analyses for
                transcriptomic and microbial community data while supporting
                interdisciplinary research, computational training, and
                collaborative project development.
              </p>
            </div>
          </article>

          <article className="experience-item">
            <p className="experience-date">2019-2024</p>

            <div>
              <h3>Ph.D., Soil, Water, and Ecosystem Sciences</h3>

              <p className="experience-organization">
                University of Florida
              </p>

              <p>
                Investigated interactions among coral hosts and their associated
                microbial communities using field experiments, 16S sequencing,
                metatranscriptomics, statistical modeling, and
                high-performance computing.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;