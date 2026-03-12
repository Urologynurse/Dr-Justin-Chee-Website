import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.enquiryType) {
      toast({ title: "Please select an enquiry type", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-enquiry", { body: form });
      if (error) throw error;
      toast({ title: "Enquiry Sent", description: "We'll get back to you as soon as possible." });
      setForm({ firstName: "", lastName: "", email: "", phone: "", enquiryType: "", message: "" });
    } catch (err) {
      console.error("Submit error:", err);
      toast({ title: "Submission Failed", description: "Please try again or email reception@drjustinchee.com directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    reception@drjustinchee.com or our urology nurse at nurse@drjustinchee.com         
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

            {/* Small Map */}
            <div className="rounded-2xl overflow-hidden shadow-card border border-border h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.6!2d144.9825!3d-37.8125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b8c5ef5b1d%3A0x0!2s140+Clarendon+St%2C+East+Melbourne+VIC+3002!5e0!3m2!1sen!2sau!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr Justin Chee Location - East Melbourne"
              />
            </div>
          </div>

          {/* Right - Contact Card */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-3xl shadow-elevated p-8 md:p-10">
              <h3 className="text-2xl font-serif text-foreground mb-6">Send an Enquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name <span className="text-destructive">*</span>
                    </label>
                    <input type="text" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name <span className="text-destructive">*</span>
                    </label>
                    <input type="text" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone (optional)
                  </label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    I would like to <span className="text-destructive">*</span>
                  </label>
                  <select required value={form.enquiryType} onChange={(e) => setForm({ ...form, enquiryType: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-all">
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
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-all resize-none" />
                </div>

                <Button type="submit" variant="hero" size="xl" className="w-full group" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...</>
                  ) : (
                    <>Send Enquiry <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" /></>
                  )}
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
