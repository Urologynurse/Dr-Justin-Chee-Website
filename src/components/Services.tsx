import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const symptoms = [
    "Urethral Strictures",
    "Spraying or dribbling urine stream",
    "Difficulty emptying the bladder",
    "Frequent UTIs",
    "Blood in urine",
    "Straining when urinating",
    "Erectile dysfunction",
  ];

  const specialties = [
    {
      title: "Urethral Strictures",
      treatments: ["Urethroplasty", "Optilume"],
      description: "Advanced surgical repair of urethral narrowing",
    },
    {
      title: "Erectile Dysfunction",
      treatments: ["Inflatable Penile Prosthesis", "Penile Rehabilitation post radical prostatectomy surgery", "ICI therapy"],
      description: "Comprehensive ED treatment options",
    },
    {
      title: "Post-Surgical Incontinence",
      treatments: ["Surgical correction", "Rehabilitation programs"],
      description: "Treatment for urinary incontinence after prostate surgery",
    },
  ];

  const otherServices = [
    "Penile Conditions - Including Penile Cancer",
    "Vasectomy",
    "Circumcisions",
    "Peyronie's Disease",
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-navy-dark">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Specialties */}
        <div id="specialties" className="mb-20">
          <h3 className="text-xl font-serif text-teal-light mb-8 text-center">Main Specialty Areas</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <div
                key={specialty.title}
                className="group bg-card rounded-2xl p-8 shadow-elevated hover:shadow-card transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-1 w-16 bg-gradient-to-r from-teal to-navy mb-6 group-hover:w-24 transition-all duration-300" />
                <h4 className="text-xl font-serif text-foreground mb-3">
                  {specialty.title === "Urethral Strictures" ? (
                    <Link to="/urethral-strictures" className="hover:text-teal transition-colors underline underline-offset-4 decoration-teal/40 hover:decoration-teal">
                      {specialty.title}
                    </Link>
                  ) : specialty.title === "Erectile Dysfunction" ? (
                    <Link to="/erectile-dysfunction" className="hover:text-teal transition-colors underline underline-offset-4 decoration-teal/40 hover:decoration-teal">
                      {specialty.title}
                    </Link>
                  ) : specialty.title === "Post-Surgical Incontinence" ? (
                    <Link to="/post-surgical-incontinence" className="hover:text-teal transition-colors underline underline-offset-4 decoration-teal/40 hover:decoration-teal">
                      {specialty.title}
                    </Link>
                  ) : (
                    specialty.title
                  )}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">{specialty.description}</p>
                <ul className="space-y-2">
                  {specialty.treatments.map((treatment) => (
                    <li key={treatment} className="flex items-center text-sm text-foreground">
                      <ArrowRight className="w-4 h-4 text-teal mr-2 flex-shrink-0" />
                      {treatment}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Other Services */}
        <div className="text-center animate-fade-in-up">
          <h3 className="text-xl font-serif text-teal-light mb-8">Other Areas of Interest</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherServices.map((service) => (
              <span
                key={service}
                className="px-6 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full text-primary-foreground text-sm hover:bg-teal/20 hover:border-teal/40 transition-all duration-300 cursor-default"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
