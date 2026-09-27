function Publications() {
  return (
    <>
      <section className="publications-section" id="publications">
        <div className="publication-content">
          <p className="eyebrow">Featured publication</p>

          <h2>
            Shifts in the coral microbiome in response to{" "}
            <span>in situ experimental deoxygenation</span>
          </h2>

          <p className="publication-details">
            Applied and Environmental Microbiology · 2023 ·
            89(11):e00577-23
          </p>
        </div>

        <a
          className="publication-link"
          href="https://doi.org/10.1128/aem.00577-23"
          target="_blank"
          rel="noreferrer"
        >
          Read publication →
        </a>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-heading">
          <p className="eyebrow">Let&apos;s connect</p>

          <h2>
            Complex data.
            <span> Meaningful biology.</span>
          </h2>
        </div>

        <div className="footer-contact">
          <p>
            I am interested in computational biology and bioinformatics roles
            where I can integrate diverse molecular datasets, develop
            reproducible analytical workflows, and apply machine learning to
            transform high-dimensional data into meaningful biological
            insights.
          </p>

          <div className="footer-links">
            <a
              href="mailto:racheld.howard1@gmail.com"
              aria-label="Email Rachel Howard"
            >
              Email me →
            </a>

            <a
              href="https://www.linkedin.com/in/rachel-howard-b2a685230/"
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn →
            </a>

            <a
              href="https://github.com/rdhoward1"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub →
            </a>

            <a
              href={`${import.meta.env.BASE_URL}Rachel_Howard_CV.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              View my CV →
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Rachel Howard, Ph.D.</p>
          <p>Multi-Omics · Machine Learning · Host-Microbe Biology</p>
        </div>
      </footer>
    </>
  );
}

export default Publications;