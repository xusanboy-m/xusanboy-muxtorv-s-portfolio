import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "streeamline",
    description: "A modern admin dashboard with real-time analytics, order management, and responsive charts built with React and Tailwind CSS.",
    tags: ["TypeScript", "Tailwind CSS",],
    sourceCode: "https://github.com/xusanboy-m/streamline",
    link: "https://streamline-ashy.vercel.app/"
  },
  {
    title: "simple-calculator",
    description: "A beautiful weather application with location search, 7-day forecasts, and animated weather icons using external API integration.",
    tags: ["JavaScript", "CSS3", "Responsive"],
    sourceCode: "https://github.com/xusanboy-m/simple-calculator",
    link: "https://react-calc-zen.vercel.app/"
  },
  {
    title: "beauty-salon",
    description: "A drag-and-drop task manager with project boards, team collaboration features, and real-time updates.",
    tags: ["HTML", "CSS", "JavaScript"],
    sourceCode: "https://github.com/xusanboy-m/beauty-salon",
    link: "https://beauty-solon-hfp8.vercel.app/"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">{"// Projects"}</p>
          <h2 className="section-heading">
            Featured <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 mt-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="card-hover bg-card border border-border rounded-xl p-6 md:p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-semibold text-xl">{project.title}</h3>
                <div className="flex gap-3 text-muted-foreground">
                  <a href={product.sourceCodehttps://github.com/xusanboy-m/streamline} className="hover:text-primary transition-colors" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                  <a href={product.sourceCodehttps://github.com/xusanboy-m/beauty-salon} className="hover:text-primary transition-colors" aria-label="Live demo">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
