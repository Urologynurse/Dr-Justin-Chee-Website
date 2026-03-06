import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import drJustinChee from "@/assets/dr-justin-chee.jpg";
import drJustinCheeSurgery from "@/assets/dr-justin-chee-surgery.jpeg";
import justinCheeLogo from "@/assets/justin-chee-logo.png";

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
              <img
                src={drJustinCheeSurgery}
                alt="Dr Justin Chee performing surgery"
                className="w-full rounded-2xl shadow-card object-cover aspect-[4/3] mt-6"
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
                  Dr Justin Chee is a highly respected urological surgeon specialising in reconstructive urology. Dr Chee's expertise include dealing with complex urethral stricture repair, performing Urethroplasties since 2010, and specialises in dealing with complex cases. He is known for his innovative, collaborative, and multidisciplinary approach, focusing on achieving the best possible outcomes for his patients across Victoria.
                </p>

                <p>
                  After completing his medical degree at the University of Melbourne in 1997, Dr Chee undertook specialist urology training and was awarded Fellowship of the Royal Australasian College of Surgeons (FRACS) in 2011. He has since pursued advanced training internationally, learning from world leaders in reconstructive urology and participating in live surgical workshops across Europe, Asia, the Middle East, Australia, and the United States.
                </p>

                <p>
                  Dr Chee has been an invited speaker and presenter at numerous national and international conferences, including the AUA and SIU, and has performed in live surgical workshops around the world. He has also served as Visiting Professor at the Detroit Medical Centre (USA) and the University of Belgrade (Serbia).
                </p>

                <p>
                  He is a founding faculty member of the International Society of Reconstructive Urology (ISORU) and the immediate past leader of the Special Advisory Group for Reconstruction and Paediatric Urology with the Urological Society of Australia and New Zealand (USANZ).
                </p>

                <p>
                  Dr Chee consults at leading Victorian institutions, including Alfred Health and Western Health, and practices privately at Epworth Private Hospital. He also sees private patients at his urology rooms in East Melbourne. Committed to advancing urological care, Dr Chee continues to contribute through education, innovation, and charitable surgical outreach initiatives.
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
