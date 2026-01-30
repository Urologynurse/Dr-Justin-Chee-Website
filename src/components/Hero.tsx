import { Button } from "@/components/ui/button";
import { ChevronDown, Calendar, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Subtle Overlay for text readability */}
      <div className="absolute inset-0 bg-navy-dark/30" />

      {/* Animated Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-teal/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-navy/20 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle */}
          <p className="text-teal-light text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-in-up font-medium">
            Specialist Surgeon
          </p>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Reconstructive
            <span className="block mt-2 text-teal-light">Urology</span>
          </h1>

          {/* Description */}
          <p className="text-primary-foreground/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: "0.2s" }}>
            Expert care in reconstructive urology with a commitment to 
            improving quality of life through advanced surgical techniques
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="group">
              <Calendar className="w-5 h-5 mr-2" />
              Book an Appointment
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/70 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-serif text-teal-light">20+</span>
              <span className="text-sm tracking-wide">Years Experience</span>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20 hidden sm:block" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-serif text-teal-light">5000+</span>
              <span className="text-sm tracking-wide">Surgeries Performed</span>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20 hidden sm:block" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-serif text-teal-light">Melbourne</span>
              <span className="text-sm tracking-wide">Victoria, Australia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
