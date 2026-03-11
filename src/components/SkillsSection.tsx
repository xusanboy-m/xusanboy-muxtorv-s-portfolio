import { motion } from "framer-motion";

const skills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js",
  "Tailwind CSS", "Sass", "Git", "Figma", "REST APIs", "Responsive Design",
  "Next.js", "Vite", "Node.js", "MongoDB",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">{"// Skills"}</p>
          <h2 className="section-heading">
            Technologies I{" "}
            <span className="text-gradient">work with</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3 mt-10">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.03 * i }}
              className="skill-tag"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
