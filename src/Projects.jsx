import { useState } from "react";

const filters = [
  "All",
  "Multi-omics",
  "RNA-seq",
  "Microbiome",
  "Machine learning",
  "HPC",
  "R",
];

const projects = [
  {
    number: "01",
    title: "Multi-omics signatures of coral disease",
    category: "Integrative modeling",
    summary:
      "Integrated host and algal symbiont transcriptomes with 16S microbiome profiles to investigate coordinated holobiont responses to stony coral tissue loss disease.",
    contribution:
      "Built and tuned species-specific DIABLO models, evaluated classification performance, and translated selected features into interpretable biological networks.",
    skills: ["Multi-omics", "Machine learning", "R"],
    methods: [
      "mixOmics",
      "DIABLO",
      "DESeq2",
      "CLR transformation",
      "Cross-validation",
      "Cytoscape",
    ],
  },
  {
    number: "02",
    title: "Coral metatranscriptomics under hypoxia",
    category: "RNA-seq at scale",
    summary:
      "Analyzed coral-associated gene expression during diel hypoxia exposure and recovery to characterize functional responses to changing oxygen conditions.",
    contribution:
      "Developed an HPC workflow spanning read processing, de novo transcriptome assembly, ORF prediction, functional annotation, quantification, and differential expression.",
    skills: ["RNA-seq", "HPC", "R"],
    methods: [
      "Trinity",
      "TransDecoder",
      "Trinotate",
      "eggNOG",
      "Salmon",
      "Bash",
    ],
  },
  {
    number: "03",
    title: "Coral microbiomes across oxygen gradients",
    category: "Microbial community ecology",
    summary:
      "Examined coral-associated microbial community structure across experimental deoxygenation treatments and field sites in Bocas del Toro, Panama.",
    contribution:
      "Developed reproducible 16S workflows and multivariate analyses to evaluate differences associated with host species, site, depth, and oxygen conditions.",
    skills: ["Microbiome", "HPC", "R"],
    methods: [
      "DADA2",
      "phyloseq",
      "vegan",
      "PERMANOVA",
      "ANCOM-BC",
      "ggplot2",
    ],
  },
  {
    number: "04",
    title: "Coral immunity and microbial symbiosis",
    category: "Host–microbe interactions",
    summary:
      "Investigated microbial communities in symbiotic and aposymbiotic Astrangia poculata alongside measurements of host immune function.",
    contribution:
      "Connected microbial community profiles with enzyme activity measurements using multivariate statistics, network analysis, and interpretable visualization.",
    skills: ["Microbiome", "Machine learning", "R"],
    methods: [
      "16S rRNA",
      "WGCNA",
      "Indicator species",
      "Community statistics",
      "ComplexHeatmap",
    ],
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openProject, setOpenProject] = useState(null);

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.skills.includes(activeFilter),
        );

  function changeFilter(filter) {
    setActiveFilter(filter);
    setOpenProject(null);
  }

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <div>
            <p className="eyebrow">Selected work</p>

            <h2>
              Explore by
              <span> method.</span>
            </h2>
          </div>

          <p className="projects-introduction">
            Filter my work to see how I apply computational methods across
            different biological questions.
          </p>
        </div>

        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              className={activeFilter === filter ? "active-filter" : ""}
              key={filter}
              onClick={() => changeFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <p className="project-count">
          Showing {visibleProjects.length}{" "}
          {visibleProjects.length === 1 ? "project" : "projects"}
          {activeFilter !== "All" && ` using ${activeFilter}`}
        </p>

        <div className="project-list">
          {visibleProjects.map((project) => {
            const isOpen = openProject === project.title;

            return (
              <article className="project-card" key={project.title}>
                <p className="project-number">{project.number}</p>

                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>

                  <div className="project-tags">
                    {project.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>

                <button
                  className="details-button"
                  onClick={() =>
                    setOpenProject(isOpen ? null : project.title)
                  }
                  aria-expanded={isOpen}
                >
                  {isOpen ? "Close" : "Details"}
                </button>

                {isOpen && (
                  <div className="project-details">
                    <div>
                      <p className="detail-label">My contribution</p>
                      <p>{project.contribution}</p>
                    </div>

                    <div>
                      <p className="detail-label">Methods and tools</p>

                      <ul>
                        {project.methods.map((method) => (
                          <li key={method}>{method}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;