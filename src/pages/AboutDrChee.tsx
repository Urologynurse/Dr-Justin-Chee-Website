import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import drJustinChee from "@/assets/dr-justin-chee.jpg";

const AboutDrChee = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 glass shadow-soft py-3">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link to="/" className="flex flex-col group">
            <span className="text-xl md:text-2xl tracking-[0.2em] font-light text-foreground">
              DR JUSTIN<span className="font-bold text-navy">CHEE</span>
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-muted-foreground">
              Reconstructive Urologist
            </span>
          </Link>
          <Button variant="outline" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
            <div className="md:w-1/3 flex-shrink-0">
              <img
                src={drJustinChee}
                alt="Dr Justin Chee"
                className="w-full rounded-2xl shadow-card object-cover aspect-[3/4]"
              />
            </div>
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-light text-foreground mb-2">
                Dr Justin <span className="font-bold text-navy">Chee</span>
              </h1>
              <p className="text-muted-foreground tracking-wider text-sm mb-8">
                MBBS FRACS (UROL)
              </p>

              <div className="space-y-6 text-foreground/90 leading-relaxed">
                <p>
                  Dr Justin Chee is a urological surgeon dedicated to excellence in reconstructive
                  surgery of the genitourinary system. Dr Chee's special interests include the surgical
                  management of urethral stricture disease and prosthetic urology including male
                  urinary incontinence and erectile dysfunction. Renowned for his innovation and
                  collaboration, Justin takes a multidisciplinary and holistic approach to ensure his
                  patients achieve the best possible outcome.
                </p>

                <p>
                  Dr Chee travelled widely to maximise his technical and clinical skills trained with the
                  leaders in the field and attended live surgery workshops in India, Italy, Serbia, UK,
                  Germany, Qatar and the USA. Dr Chee has had the privilege of being both a presenter
                  and invited speaker at many national and international meetings including both the
                  AUA and SIU. Dr Chee has performed at live surgery workshops in Australia, India,
                  Indonesia, Mexico, Kuwait, Turkey and the Solomon Islands.
                </p>

                <p>
                  Dr Chee is founding faculty of International Society of Reconstructive Urology
                  (ISORU) and is the current Leader, Special Advisory Group, Reconstruction &amp;
                  Paediatric Urology, Urological Society of Australia and New Zealand (USANZ).
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutDrChee;
