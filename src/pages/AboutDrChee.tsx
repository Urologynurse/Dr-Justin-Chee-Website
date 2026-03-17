import Header from "@/components/Header";
import drJustinChee from "@/assets/dr-justin-chee.jpg";
import drJustinCheeSurgery from "@/assets/dr-justin-chee-surgery.jpeg";


const AboutDrChee = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

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
                  Dr Justin Chee is a highly respected urological surgeon specialising in reconstructive urology. Dr Chee's expertise include dealing with complex urethral stricture repair, performing Urethroplasties since 2011, and specialises in dealing with complex cases. He is known for his innovative, collaborative, and multidisciplinary approach, focusing on achieving the best possible outcomes for his patients across Victoria.
                </p>

                <p>
                  After completing his medical degree at the University of Melbourne in 1997, Dr Chee undertook specialist urology training and was awarded Fellowship of the Royal Australasian College of Surgeons (FRACS) in 2011. He has since pursued advanced training internationally, learning from world leaders in reconstructive urology and participating in live surgical workshops across Europe, Asia, the Middle East, Australia, and the United States.
                </p>

                <p>
                  Dr Chee has been an invited speaker and presenter at numerous national and international conferences, including the AUA and SIU, and has performed in live surgical workshops around the world. He has also served as Visiting Professor at the Detroit Medical Centre (USA) and the University of Belgrade (Serbia).
                </p>

                <p>
                  He is a founding faculty member of the International Society of Reconstructive Urology (ISORU) and the immediate past leader of the Special Advisory Group for Reconstruction and Paediatric Urology with the Urological Society of Australia and New Zealand (USANZ). He was also a past board of directors member for the Society of Genitourinary Reconstructive Surgeons (GURS).
                </p>

                <p>
                  Dr Chee consults at leading Victorian institutions, including Alfred Health and Western Health, and practices privately at Epworth Private Hospital. He also sees private patients at his urology rooms in East Melbourne. Committed to advancing urological care, Dr Chee continues to contribute through education, innovation, and charitable surgical outreach initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Patient Reviews */}
          <div className="mt-16 bg-card rounded-3xl shadow-card p-8 md:p-12">
            <p className="text-teal text-sm tracking-[0.3em] uppercase mb-6 font-medium">
              Patient Reviews
            </p>
            <div className="space-y-8">
              <blockquote className="border-l-4 border-teal pl-6">
                <p className="font-serif text-lg md:text-xl text-foreground/90 italic leading-relaxed">
                  "Justin Chee is a very professional, approachable, and a knowledgeable surgeon."
                </p>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
              </blockquote>

              <blockquote className="border-l-4 border-teal pl-6">
                <p className="font-serif text-lg md:text-xl text-foreground/90 italic leading-relaxed">
                  "I highly recommend Dr. Chee and his team to anyone seeking expert medical care."
                </p>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
              </blockquote>

              <blockquote className="border-l-4 border-teal pl-6">
                <p className="font-serif text-lg md:text-xl text-foreground/90 italic leading-relaxed">
                  "His office staff were very helpful and caring."
                </p>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
              </blockquote>
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://www.google.com/search?q=Dr+Justin+Chee+Reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal hover:text-teal-dark font-medium transition-colors tracking-wide text-sm"
              >
                View all Google Reviews →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutDrChee;
