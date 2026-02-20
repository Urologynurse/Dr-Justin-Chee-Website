import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, FileText, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const PostOpCare = () => {
  const [pdfOpen, setPdfOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Post Op Care and Instructions
          </h1>

          {/* Nursing and Follow Up Care */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Nursing and Follow Up Care
            </h2>

            {/* Urgent Pager */}
            <Card className="border-destructive/30 bg-destructive/5 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-destructive shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                      Urgent After Pager Service
                      <a
                        href="tel:0386796579"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        <Phone className="w-4 h-4" />
                        03 8679 6579
                      </a>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Please only use this pager service to contact Dr Chee if of an urgent nature
                      and you are currently a patient of Dr Justin Chee who has undergone recent
                      surgery. All non-urgent matters please contact the rooms during office hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nursing Handouts */}
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Nursing Handouts
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <button
                onClick={() => setPdfOpen(true)}
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent/10 transition-colors group text-left"
              >
                <FileText className="w-8 h-8 text-primary shrink-0 group-hover:text-teal transition-colors" />
                <div>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    IPP (Inflatable Penile Prosthesis)
                  </span>
                  <p className="text-sm text-muted-foreground">PDF Document</p>
                </div>
              </button>
              <a
                href="/Urethroplasty.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent/10 transition-colors group"
              >
                <FileText className="w-8 h-8 text-primary shrink-0 group-hover:text-teal transition-colors" />
                <div>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Urethroplasty
                  </span>
                  <p className="text-sm text-muted-foreground">PDF Document</p>
                </div>
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* IPP PDF Viewer Dialog */}
      <Dialog open={pdfOpen} onOpenChange={setPdfOpen}>
        <DialogContent className="max-w-4xl w-[95vw] h-[85vh] flex flex-col p-0">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle>IPP (Inflatable Penile Prosthesis)</DialogTitle>
          </DialogHeader>
          <div className="flex-1 px-6 pb-6">
            <iframe
              src="/IPP.pdf"
              className="w-full h-full rounded-md border border-border"
              title="IPP PDF Document"
            />
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default PostOpCare;
