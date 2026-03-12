import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UrethralStrictures = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-teal hover:text-teal-light transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Main Specialty Areas
          </Link>

          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8">
            Urethral Strictures
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              Urethral stricture is a condition in which the urethra—the tube that carries urine from the bladder, through the penis, and out of the body—becomes narrowed or partially blocked. This narrowing interferes with the normal flow of urine and may cause symptoms such as a weak or reduced urine stream, trouble starting urination, frequent urination, or a sensation that the bladder has not fully emptied.
            </p>
            <p>
              If not treated, a urethral stricture can result in complications including urinary retention, repeated urinary tract infections, bladder damage, or kidney issues. Prompt diagnosis and proper treatment are important to restore normal urine flow and reduce the risk of long-term problems.
            </p>
            <p>
              Uroflowmetry is offered in-house in order to determine the urine flow and whether this is impacted.
            </p>
          </div>

          <div className="mt-12 p-8 bg-card rounded-2xl shadow-elevated">
            <p className="text-teal text-sm tracking-[0.3em] uppercase mb-6 font-medium">
              Treatment Options
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-teal mt-2.5 flex-shrink-0" />
                <span><strong className="text-foreground">Urethroplasty</strong> — Advanced surgical repair of urethral narrowing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-teal mt-2.5 flex-shrink-0" />
                <span><strong className="text-foreground">Optilume</strong> — Minimally invasive balloon treatment</span>
              </li>
            </ul>
          </div>

          <div className="mt-12 p-8 bg-card rounded-2xl shadow-elevated">
            <div className="space-y-8">
              <blockquote className="border-l-4 border-teal pl-6">
                <p className="font-serif text-lg md:text-xl text-foreground/90 italic leading-relaxed">
                  "Urethroplasty surgery — over 1,000's of cases performed."
                </p>
              </blockquote>
              <blockquote className="border-l-4 border-teal pl-6">
                <p className="font-serif text-lg md:text-xl text-foreground/90 italic leading-relaxed">
                  "Highest volume Optilume implanter in Australia."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UrethralStrictures;
