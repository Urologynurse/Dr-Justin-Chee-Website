import { Award, GraduationCap, Heart, Shield } from "lucide-react";
const About = () => {
  const credentials = [{
    icon: GraduationCap,
    title: "Fellowship Trained",
    description: "Advanced training in reconstructive urology"
  }, {
    icon: Award,
    title: "Board Certified",
    description: "Specialist urological surgeon"
  }, {
    icon: Shield,
    title: "Evidence Based",
    description: "Latest techniques and research"
  }, {
    icon: Heart,
    title: "Patient Focused",
    description: "Compassionate, personalized care"
  }];
  return <section id="about" className="py-24 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              About Dr Chee
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
              Dedicated to Restoring
              <span className="text-gradient block">Quality of Life</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dr Justin Chee is a specialist reconstructive urologist based in East Melbourne, 
                Victoria. With over two decades of experience, he is committed to providing 
                expert care for complex urological conditions.
              </p>
              <p>
                His practice focuses on treating conditions that significantly impact patients' 
                quality of life, including urethral strictures, erectile dysfunction, and 
                post-prostatectomy complications.
              </p>
              <p>
                Dr Chee takes a compassionate, patient-centered approach, understanding that 
                many urological conditions can be difficult to discuss. He creates a comfortable 
                environment where patients feel heard and supported throughout their treatment journey.
              </p>
            </div>
          </div>

          {/* Right - Credentials Grid */}
          <div className="grid grid-cols-2 gap-6">
            {credentials.map((item, index) => <div key={item.title} className="group bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                  <item.icon className="w-7 h-7 text-teal" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>)}
          </div>
        </div>

        {/* Location Info */}
        <div className="mt-20 bg-card rounded-3xl shadow-card p-8 md:p-12 animate-fade-in-up">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <p className="text-sm text-teal uppercase tracking-wider mb-2">Location</p>
              <p className="text-foreground font-medium">Suite 2, 140 Clarendon St</p>
              <p className="text-muted-foreground">East Melbourne, VIC 3002</p>
            </div>
            <div>
              <p className="text-sm text-teal uppercase tracking-wider mb-2">Contact</p>
              <p className="text-foreground font-medium">P: +61 3 9088 5138</p>
              <p className="text-muted-foreground">F: +61 3 9088 3579</p>
            </div>
            <div>
              <p className="text-sm text-teal uppercase tracking-wider mb-2">Email</p>
              <a href="mailto:reception@drjustinchee.com" className="text-foreground font-medium hover:text-teal transition-colors">
                reception@drjustinchee.com


              </a>
              <p className="text-muted-foreground">www.drjustinchee.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;