import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PostSurgicalIncontinence = () => {
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
            Post-Surgical Incontinence
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              Persistent incontinence can become frustrating. It doesn't need to be a problem that impacts everyday life.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <div className="p-8 bg-card rounded-2xl shadow-elevated">
              <h2 className="text-2xl font-serif text-foreground mb-4">Male Pelvic Sling</h2>
              <p className="text-muted-foreground">
                Designed to stop leakage by supporting the sphincter muscle, the male pelvic sling restores bladder control and provides continence.
              </p>
            </div>

            <div className="p-8 bg-card rounded-2xl shadow-elevated">
              <h2 className="text-2xl font-serif text-foreground mb-4">Artificial Urinary Sphincter (AUS)</h2>
              <p className="text-muted-foreground">
                Insertion of a surgical device that allows you to keep the bladder neck closed until the urge to urinate. Once ready to urinate, you press a valve in your scrotum and it allows the urine flow to stream.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostSurgicalIncontinence;
