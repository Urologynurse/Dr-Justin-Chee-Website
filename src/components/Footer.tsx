const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl tracking-[0.2em] font-light text-primary-foreground">
              DR JUSTIN<span className="font-semibold text-teal-light">CHEE</span>
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-primary-foreground/60">
              Reconstructive Urologist
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="text-primary-foreground/70 hover:text-teal-light transition-colors">
              About
            </a>
            <a href="#services" className="text-primary-foreground/70 hover:text-teal-light transition-colors">
              Services
            </a>
            <a href="#specialties" className="text-primary-foreground/70 hover:text-teal-light transition-colors">
              Specialties
            </a>
            <a href="#contact" className="text-primary-foreground/70 hover:text-teal-light transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-primary-foreground/50 text-sm text-center md:text-right">
            © {currentYear} Dr Justin Chee. All rights reserved.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/40 text-xs">
            Suite 2, 140 Clarendon St, East Melbourne VIC 3002 | Phone: +61 3 9088 5138
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
