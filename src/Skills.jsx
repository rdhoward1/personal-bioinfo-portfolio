const skillGroups = [
  {
    number: "01",
    category: "Programming",
    title: "R · Python · Bash",
    description:
      "Statistical analysis, workflow automation, data visualization, command-line scripting, and reproducible reporting with R Markdown.",
  },
  {
    number: "02",
    category: "Omics analysis",
    title: "RNA-seq · 16S rRNA · Multi-omics",
    description:
      "Sequence processing, normalization, differential expression, functional annotation, pathway enrichment, and integration across molecular data types.",
  },
  {
    number: "03",
    category: "Machine learning",
    title: "Predictive modeling · DIABLO",
    description:
      "Supervised classification, feature selection, model tuning, cross-validation, and performance evaluation using balanced error rates, confusion matrices, and ROC–AUC.",
  },
  {
    number: "04",
    category: "Computing and workflows",
    title: "HPC · Git/GitHub · Linux",
    description:
      "Scalable command-line workflows, version control, reproducible pipeline development, and analysis of large biological datasets on high-performance systems.",
  },
  {
    number: "05",
    category: "Data visualization",
    title: "ggplot2 · ComplexHeatmap · Cytoscape",
    description:
      "Publication-quality figures, clustered heatmaps, multivariate visualizations, and interpretable multi-omic correlation networks.",
  },
  {
    number: "06",
    category: "Microbiome bioinformatics",
    title: "DADA2 · phyloseq · vegan",
    description:
      "Compositional data analysis, PERMANOVA, differential abundance, indicator species analysis, WGCNA, and host-associated microbiome analysis.",
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading">
        <p className="eyebrow">Technical toolkit</p>

        <h2>
          Across data types.
          <span> Into biological insight.</span>
        </h2>

        <p>
          I work across diverse molecular datasets and select analytical
          methods based on the biological question, experimental design, and
          structure of the data. My experience spans individual omics
          workflows, integrated multi-omics modeling, and supervised machine
          learning for classification, feature selection, and candidate
          biomarker discovery.
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