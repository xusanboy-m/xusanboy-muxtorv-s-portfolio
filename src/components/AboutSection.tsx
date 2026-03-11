import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable code" },
  { icon: Palette, title: "UI/UX Focus", desc: "Pixel-perfect, accessible interfaces" },
  { icon: Zap, title: "Performance", desc: "Optimized for speed and efficiency" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">{"// About Me"}</p>
          <h2 className="section-heading">
            Passionate about crafting{" "}
            <span className="text-gradient">digital experiences</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground text-lg mt-6 mb-12 leading-relaxed"
        >
          I'm a front-end developer who loves turning ideas into reality through code. 
          I specialize in building responsive, user-friendly web applications using 
          modern frameworks and tools. With a keen eye for design and attention to detail, 
          I strive to create seamless experiences that users love.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="card-hover bg-card border border-border rounded-xl p-6"
            >
              <item.icon className="text-primary mb-4" size={28} />
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
