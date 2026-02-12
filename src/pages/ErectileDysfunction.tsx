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
            Back to Services
          </Link>

          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8">
            Erectile Dysfunction
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              Erectile Dysfunction (ED) is a very common condition that affects millions of men worldwide. It can occur at any age and at different stages of a man's life.
            </p>

            <p>
              There are several treatment options available to help manage ED and improve both quality of life and sexual function.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <div className="p-8 bg-card rounded-2xl shadow-elevated">
              <h2 className="text-2xl font-serif text-foreground mb-4">Penile Rehabilitation</h2>
              <p className="text-muted-foreground">
                Designed for men who have undergone surgery, this approach aims to restore erectile function. Treatment may include a combination of oral medications, vacuum erection devices (penile pumps), and injection therapy (intracavernosal injections, ICI).
              </p>
            </div>

            <div className="p-8 bg-card rounded-2xl shadow-elevated">
              <h2 className="text-2xl font-serif text-foreground mb-4">Inflatable Penile Prosthesis (IPP)</h2>
              <p className="text-muted-foreground">
                This is a surgical option for men who require more advanced treatment for erectile dysfunction. An IPP is a penile implant designed to closely replicate the appearance and function of a natural erection.
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
