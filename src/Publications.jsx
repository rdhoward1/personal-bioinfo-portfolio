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

      <footer className="site-footer">
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
            where rigorous analysis and biological insight can help solve
            complex, real-world problems.
          </p>

          <div className="footer-links">
            <a
              href="https://github.com/rdhoward1"
              target="_blank"
              rel="noreferrer"
            >
              View my GitHub →
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
          <p>Computational Biology · Bioinformatics · Microbial Ecology</p>
        </div>
      </footer>
    </>
  );
}

export default Publications;