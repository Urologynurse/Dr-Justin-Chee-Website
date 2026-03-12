import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, FileText, ChevronDown, User, ClipboardList, Mail, Stethoscope, Home } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    href: "#contact",
    label: "Contact/Location"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass shadow-soft py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col group">
            <span className={`text-xl md:text-2xl tracking-[0.2em] font-light transition-all duration-300 ${isScrolled ? 'text-foreground' : 'text-primary-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'}`}>
              DR JUSTIN<span className={`font-bold transition-colors duration-300 ${isScrolled ? 'text-navy' : 'text-teal-light'}`}>CHEE</span>
            </span>
            <span className={`text-[10px] md:text-xs tracking-[0.25em] uppercase transition-all duration-300 ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'}`}>
              Reconstructive Urologist
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-teal relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal after:transition-all after:duration-300 hover:after:w-full ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
                {link.label}
              </a>)}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={isScrolled ? "outline" : "heroOutline"} size="default" className="ml-2">
                  <Menu className="w-4 h-4 mr-2" />
                  Menu
                  <ChevronDown className="w-3 h-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-popover z-50">
                <DropdownMenuItem asChild>
                  <a
                    href="/"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Home className="w-4 h-4" />
                    Home
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a
                    href="/about-dr-chee"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <User className="w-4 h-4" />
                    About Me - Dr Justin Chee
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a
                    href="/patient-registration"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    Patient Registration Form
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a
                    href="/preoperative-care"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Stethoscope className="w-4 h-4" />
                    Preoperative Care
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a
                    href="/post-op-care"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <ClipboardList className="w-4 h-4" />
                    Post Op Care and Instructions
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a
                    href="#contact"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    Contact/Location
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#contact">
              <Button variant={isScrolled ? "default" : "heroOutline"} size="lg" className="ml-4">
                <Phone className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <nav className="lg:hidden absolute top-full left-0 right-0 glass shadow-card animate-fade-in-up">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <a href="/" className="text-foreground font-medium py-2 hover:text-teal transition-colors flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Home className="w-4 h-4" />
                Home
              </a>
              <a href="/about-dr-chee" className="text-foreground font-medium py-2 hover:text-teal transition-colors flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <User className="w-4 h-4" />
                About Me - Dr Justin Chee
              </a>
              <a href="/patient-registration" className="text-foreground font-medium py-2 hover:text-teal transition-colors flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <FileText className="w-4 h-4" />
                Patient Registration Form
              </a>
              <a href="/preoperative-care" className="text-foreground font-medium py-2 hover:text-teal transition-colors flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Stethoscope className="w-4 h-4" />
                Preoperative Care
              </a>
              <a href="/post-op-care" className="text-foreground font-medium py-2 hover:text-teal transition-colors flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <ClipboardList className="w-4 h-4" />
                Post Op Care and Instructions
              </a>
              <a href="#contact" className="text-foreground font-medium py-2 hover:text-teal transition-colors flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Mail className="w-4 h-4" />
                Contact/Location
              </a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="default" size="lg" className="mt-4 w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              </a>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;