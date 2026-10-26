const skillGroups = [
  {
    number: "01",
    category: "Multi-omics integration",
    title: "Molecular profiles · Phenotypes · Biological signatures",
    description:
      "Integrate transcriptomic, microbiome, and phenotypic data to identify coordinated biological responses and candidate biomarkers that single modalities may not reveal.",
  },
  {
    number: "02",
    category: "Machine learning & statistics",
    title: "Classification · Feature selection · Model evaluation",
    description:
      "Develop supervised models using DIABLO and Random Forest, with hyperparameter tuning, cross-validation, and performance evaluation to assess discriminative features and classification accuracy.",
  },
  {
    number: "03",
    category: "Transcriptomics & functional analysis",
    title: "RNA-seq · Metatranscriptomics · De novo assembly",
    description:
      "Analyze sequencing data from read processing through assembly, quantification, differential expression, functional annotation, and pathway enrichment, including workflows tailored to non-model organisms.",
  },
  {
    number: "04",
    category: "Microbiome bioinformatics",
    title: "Community profiling · Differential abundance · Networks",
    description:
      "Characterize host-associated microbiomes using DADA2, phyloseq, and vegan, with compositional analysis, multivariate statistics, differential abundance testing, and network analysis.",
  },
  {
    number: "05",
    category: "Programming & reproducible workflows",
    title: "R · Python · Bash · HPC · Git",
    description:
      "Build reproducible analysis workflows using Linux, high-performance computing, version control, and command-line automation. Adapt tools and troubleshoot pipelines for complex biological datasets.",
  },
  {
    number: "06",
    category: "Visualization & biological interpretation",
    title: "ggplot2 · ComplexHeatmap · Cytoscape",
    description:
      "Translate complex results into clear figures, integrated networks, and biological interpretations that communicate findings to collaborators across experimental and computational disciplines.",
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading">
        <p className="eyebrow">Technical toolkit</p>

        <h2>
          Multi-omics integration.
          <span> Biological insight.</span>
        </h2>

        <p className="skills-introduction">
          I combine computational expertise, hands-on laboratory experience,
          and deep biological understanding to build analyses grounded in
          experimental design. My toolkit spans sequencing workflows,
          machine learning, and multi-omics integration, with methods
          selected to fit the biological question and the assumptions
          and limitations of each dataset.
        </p>

<div className="skills-image-container">
  <img
    className="skills-image"
    src={`${import.meta.env.BASE_URL}Toolkit.png`}
    alt="Scientific research related to Rachel Howard's work"
    loading="lazy"
  />
</div>
      </div>

      <div className="skills-grid">
        {skillGroups.map((skill) => (
          <article className="skill-card" key={skill.number}>
            <p className="skill-label">
              {skill.number} / {skill.category}
            </p>

            <h3>{skill.title}</h3>

            <p>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;