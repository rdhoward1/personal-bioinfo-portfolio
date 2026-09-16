const skillGroups = [
  {
    number: "01",
    category: "Languages",
    title: "R · Python · Bash",
    description:
      "Statistical analysis, bioinformatics workflows, visualization, automation, and reproducible reporting.",
  },
  {
    number: "02",
    category: "Omics",
    title: "RNA-seq · 16S · Multi-omics",
    description:
      "Sequence processing, normalization, differential analysis, functional annotation, and data integration.",
  },
  {
    number: "03",
    category: "Modeling",
    title: "DIABLO · ML · Networks",
    description:
      "Feature selection, cross-validation, multivariate classification, WGCNA, and interpretable network analysis.",
  },
  {
    number: "04",
    category: "Computing",
    title: "HPC · Git · Linux",
    description:
      "Scalable command-line workflows, version control, dependency-aware pipelines, and large biological datasets.",
  },
  {
    number: "05",
    category: "Visualization",
    title: "ggplot2 · Cytoscape",
    description:
      "Publication-quality figures, multi-omic networks, clustered heatmaps, and stakeholder-ready outputs.",
  },
  {
    number: "06",
    category: "Community ecology",
    title: "Microbial statistics",
    description:
      "PERMANOVA, indicator species analysis, differential abundance, compositional data, and experimental design.",
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading">
        <p className="eyebrow">Technical toolkit</p>

        <h2>
          From raw data to
          <span> clear decisions.</span>
        </h2>

        <p>
          I combine biological domain knowledge with computational methods to
          develop rigorous, reproducible, and interpretable analyses.
        </p>
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