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
            I am a computational biologist and microbial ecologist with
            experience analyzing complex genomic and ecological datasets.
          </p>

          <p>
            My research examines how microbial communities, animal hosts, and
            their symbiotic partners respond to environmental change and
            disease. I combine biological domain knowledge with RNA-seq,
            microbial community analysis, multi-omics integration, statistical
            learning, and reproducible bioinformatics.
          </p>

          <p>
            I am especially interested in applying these skills to
            collaborative research and industry problems where complex
            biological data can inform meaningful decisions.
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

              <p className="experience-advisor">
              </p>

              <p>
                Lead multi-omics integration and bioinformatics efforts, 
                analyzing bulk RNA-seq data and integrating host, symbiont, 
                microbiome, and clinical datasets using mixOmics, DIABLO, 
                and supervised machine learning. Develop reproducible computational 
                workflows, functional analyses, publication-quality visualizations, 
                and bioinformatics training resources.
              </p>
            </div>
          </article>

          <article className="experience-item">
            <p className="experience-date">2024–2025</p>

            <div>
              <h3>Postdoctoral Scholar</h3>

              <p className="experience-organization">
                Texas State University · Department of Biology
              </p>

              <p>
                Conducted global-change bioinformatics research involving
                RNA-seq, microbial community analysis, multi-omics, research
                training, and interdisciplinary collaboration.
              </p>
            </div>
          </article>

          <article className="experience-item">
            <p className="experience-date">2019–2024</p>

            <div>
              <h3>Ph.D., Soil, Water, and Ecosystem Sciences</h3>

              <p className="experience-organization">
                University of Florida
              </p>

              <p>
                Investigated coral-associated microbial and functional
                responses to marine deoxygenation using field experiments, 16S
                sequencing, metatranscriptomics, and high-performance
                computing.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;