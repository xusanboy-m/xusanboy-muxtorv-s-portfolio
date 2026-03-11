import { motion } from "framer-motion";
import { Mail, Linkedin, Facebook } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:xusanboymuxtorov99@gmail.com", text: "xusanboymuxtorov99@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/xusanboy-muxtorov-724401363/", text: "Xusanboy Muxtorov" },
  { icon: Facebook, label: "Facebook", href: "https://www.linkedin.com/in/xusanboy-muxtorov-724401363/", text: "Xusanboy Muxtorov" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">{"// Contact"}</p>
          <h2 className="section-heading">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 mb-12 max-w-md mx-auto">
            I'm always open to new opportunities and interesting projects. Feel free to reach out!
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="card-hover flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 w-full sm:w-auto"
            >
              <link.icon className="text-primary shrink-0" size={20} />
              <div className="text-left">
                <p className="text-xs font-mono text-muted-foreground">{link.label}</p>
                <p className="text-sm font-display">{link.text}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
