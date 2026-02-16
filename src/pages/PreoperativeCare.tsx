import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PreoperativeCare = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    allergies: "",
    bloodThinners: "",
    bloodThinnersList: "",
    diabetic: "",
    ozempic: "",
    allMedications: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Your preoperative medication details have been submitted.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preoperative Care
          </h1>
          <p className="text-muted-foreground mb-10 text-lg">
            Please complete the following patient medication form once scheduled for your surgery or as directed by Dr Justin's Chee team. Any issues please email{" "}
            <a href="mailto:nurse@drjustinchee.com" className="text-primary underline hover:text-primary/80">nurse@drjustinchee.com</a>.
          </p>

          <Card className="border border-border shadow-card">
            <CardContent className="p-6 md:p-10">
              <h2 className="text-2xl font-semibold text-foreground mb-8">
                Patient Medication
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Email address"
                  />
                </div>

                {/* Allergies */}
                <div className="space-y-3">
                  <Label>
                    Allergies <span className="text-destructive">*</span>
                  </Label>
                  <RadioGroup
                    value={form.allergies}
                    onValueChange={(v) => setForm({ ...form, allergies: v })}
                    className="flex gap-6"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="yes" id="allergies-yes" />
                      <Label htmlFor="allergies-yes" className="font-normal cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="allergies-no" />
                      <Label htmlFor="allergies-no" className="font-normal cursor-pointer">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Blood Thinners */}
                <div className="space-y-3">
                  <Label>
                    Blood Thinners <span className="text-destructive">*</span>
                  </Label>
                  <RadioGroup
                    value={form.bloodThinners}
                    onValueChange={(v) => setForm({ ...form, bloodThinners: v })}
                    className="flex gap-6"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="yes" id="bt-yes" />
                      <Label htmlFor="bt-yes" className="font-normal cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="bt-no" />
                      <Label htmlFor="bt-no" className="font-normal cursor-pointer">No</Label>
                    </div>
                  </RadioGroup>
                  {form.bloodThinners === "yes" && (
                    <div className="space-y-2 pt-2">
                      <Label htmlFor="bt-list">Please list blood thinners</Label>
                      <Input
                        id="bt-list"
                        maxLength={500}
                        value={form.bloodThinnersList}
                        onChange={(e) => setForm({ ...form, bloodThinnersList: e.target.value })}
                        placeholder="e.g. Warfarin, Aspirin, Rivaroxaban"
                      />
                    </div>
                  )}
                </div>

                {/* Diabetic */}
                <div className="space-y-3">
                  <Label>
                    Diabetic <span className="text-destructive">*</span>
                  </Label>
                  <RadioGroup
                    value={form.diabetic}
                    onValueChange={(v) => setForm({ ...form, diabetic: v })}
                    className="flex gap-6"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="yes" id="diabetic-yes" />
                      <Label htmlFor="diabetic-yes" className="font-normal cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="diabetic-no" />
                      <Label htmlFor="diabetic-no" className="font-normal cursor-pointer">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Ozempic */}
                <div className="space-y-3">
                  <Label>
                    Are you on Ozempic (semaglutide)? <span className="text-destructive">*</span>
                  </Label>
                  <RadioGroup
                    value={form.ozempic}
                    onValueChange={(v) => setForm({ ...form, ozempic: v })}
                    className="flex gap-6"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="yes" id="ozempic-yes" />
                      <Label htmlFor="ozempic-yes" className="font-normal cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="ozempic-no" />
                      <Label htmlFor="ozempic-no" className="font-normal cursor-pointer">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* All Medications */}
                <div className="space-y-2">
                  <Label htmlFor="all-meds">
                    Please list all medication <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="all-meds"
                    required
                    maxLength={2000}
                    value={form.allMedications}
                    onChange={(e) => setForm({ ...form, allMedications: e.target.value })}
                    placeholder="List all current medications"
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full mt-4">
                  Submit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PreoperativeCare;
