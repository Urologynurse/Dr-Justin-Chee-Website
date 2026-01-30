import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - CTA */}
          <div className="animate-fade-in-up">
            <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
              Book Your
              <span className="text-gradient block">Consultation Today</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Take the next step towards better health. Dr Chee and his team are here 
              to provide expert care and support throughout your treatment journey.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">Suite 2, 140 Clarendon St, East Melbourne VIC 3002</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Phone</h4>
                  <a href="tel:+61390885138" className="text-muted-foreground hover:text-teal transition-colors">
                    +61 3 9088 5138
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Email</h4>
                  <a href="mailto:reception@drjustinchee.com" className="text-muted-foreground hover:text-teal transition-colors">
                    reception@drjustinchee.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Card */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-3xl shadow-elevated p-8 md:p-10">
              <h3 className="text-2xl font-serif text-foreground mb-6">Send an Enquiry</h3>
              
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    I would like to <span className="text-destructive">*</span>
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-all">
                    <option value="">Please select</option>
                    <option value="info">Get more information about a treatment</option>
                    <option value="appointment">Book an appointment</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message (optional)
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-all resize-none"
                  />
                </div>

                <Button variant="hero" size="xl" className="w-full group">
                  Send Enquiry
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
