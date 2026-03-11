const Footer = () => (
  <footer className="py-8 px-4 border-t border-border">
    <div className="container mx-auto text-center">
      <p className="font-mono text-sm text-muted-foreground">
        © {new Date().getFullYear()} Xusanboy Muxtorov. Built with{" "}
        <span className="text-primary">React</span> &{" "}
        <span className="text-primary">Tailwind CSS</span>.
      </p>
    </div>
  </footer>
);

export default Footer;
