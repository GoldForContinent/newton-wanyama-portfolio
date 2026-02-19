const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground">
        © 2026 Newton Wanyama · Kabarak University Graduate · Economics & Finance
      </p>
      <div className="flex items-center gap-6">
        <a href="#research" className="text-xs text-muted-foreground hover:text-primary transition-colors">Research</a>
        <a href="/Newton_Wanyama_CV.docx" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">CV</a>
        <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;
