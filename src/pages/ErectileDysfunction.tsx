import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ErectileDysfunction = () => {
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
            Advanced Surgical Treatments for Erectile Dysfunction (ED)
          </h1>

          <div className="mt-12 space-y-6">
            <div className="p-8 bg-card rounded-2xl shadow-elevated">
              <h2 className="text-2xl font-serif text-foreground mb-4">Inflatable Penile Prosthesis (IPP)</h2>
              <p className="text-muted-foreground">
                This is a surgical treatment option for men requiring advanced management of erectile dysfunction. An inflatable penile prosthesis (IPP) is a penile implant designed to closely replicate the appearance and function of a natural erection.
              </p>
            </div>

            <div className="p-8 bg-card rounded-2xl shadow-elevated">
              <h2 className="text-2xl font-serif text-foreground mb-4">Intracavernosal Injections (ICI)</h2>
              <p className="text-muted-foreground">
                Intracavernosal injections (ICI) may be a suitable treatment option for men with severe erectile dysfunction. This treatment involves injecting medication directly into the penis to achieve an erection.
              </p>
            </div>

            <div className="p-8 bg-card rounded-2xl shadow-elevated">
              <h2 className="text-2xl font-serif text-foreground mb-4">Penile Rehabilitation Following Radical Prostatectomy</h2>
              <p className="text-muted-foreground">
                Designed for men who have undergone radical prostatectomy, penile rehabilitation aims to restore erectile function. Treatment may include a combination of oral medications and vacuum erection devices (penile pumps), tailored to the individual's recovery and needs.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErectileDysfunction;
