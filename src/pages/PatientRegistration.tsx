import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const PatientRegistration = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    title: "",
    givenName: "",
    surname: "",
    dob: "",
    address: "",
    suburb: "",
    postcode: "",
    email: "",
    homePhone: "",
    workPhone: "",
    mobile: "",
    nokName: "",
    nokRelationship: "",
    nokContact: "",
    gpName: "",
    gpClinic: "",
    medicareNumber: "",
    medicareRef: "",
    medicareExp: "",
    privateHealthInsurance: "",
    fundName: "",
    membershipNumber: "",
    veteransCard: "",
    veteransNumber: "",
    painKillers: "",
    painKillersDetails: "",
    diabetic: "",
    diabeticType: "",
    drugAllergies: "",
    drugAllergiesDetails: "",
    bloodThinners: "",
    bloodThinnersDetails: "",
    pacemakerStent: "",
    cardiologist: "",
    otherMedications: "",
    consentClinical: false,
    consentCommercial: false,
    consentAcademic: false,
    consentName: "",
  });

  const update = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-registration-form", {
        body: form,
      });
      if (error) throw error;
      toast({
        title: "Registration Submitted",
        description: "Your patient registration form has been sent to the clinic.",
      });
      setForm({
        title: "", givenName: "", surname: "", dob: "", address: "", suburb: "",
        postcode: "", email: "", homePhone: "", workPhone: "", mobile: "",
        nokName: "", nokRelationship: "", nokContact: "", gpName: "", gpClinic: "",
        medicareNumber: "", medicareRef: "", medicareExp: "", privateHealthInsurance: "",
        fundName: "", membershipNumber: "", veteransCard: "", veteransNumber: "",
        painKillers: "", painKillersDetails: "", diabetic: "", diabeticType: "",
        drugAllergies: "", drugAllergiesDetails: "", bloodThinners: "", bloodThinnersDetails: "",
        pacemakerStent: "", cardiologist: "", otherMedications: "",
        consentClinical: false, consentCommercial: false, consentAcademic: false, consentName: "",
      });
    } catch (err) {
      console.error("Submit error:", err);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again or email reception@drjustinchee.com directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2 mt-8 mb-4 first:mt-0">
      {children}
    </h3>
  );

  const RadioYesNo = ({ field, label }: { field: string; label: string }) => (
    <div className="space-y-3">
      <Label>{label} <span className="text-destructive">*</span></Label>
      <RadioGroup
        value={(form as Record<string, string | boolean>)[field] as string}
        onValueChange={(v) => update(field, v)}
        className="flex gap-6"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem value="yes" id={`${field}-yes`} />
          <Label htmlFor={`${field}-yes`} className="font-normal cursor-pointer">Yes</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="no" id={`${field}-no`} />
          <Label htmlFor={`${field}-no`} className="font-normal cursor-pointer">No</Label>
        </div>
      </RadioGroup>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Patient Registration Form
          </h1>
          <p className="text-muted-foreground mb-10 text-lg">
            Please complete all sections below. Fields marked with <span className="text-destructive">*</span> are required.
            Any issues please email{" "}
            <a href="mailto:reception@drjustinchee.com" className="text-primary underline hover:text-primary/80">
              reception@drjustinchee.com
            </a>.
          </p>

          <Card className="border border-border shadow-card">
            <CardContent className="p-6 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Contact Details */}
                <SectionTitle>Contact Details</SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title <span className="text-destructive">*</span></Label>
                    <Select value={form.title} onValueChange={(v) => update("title", v)}>
                      <SelectTrigger id="title"><SelectValue placeholder="Select title" /></SelectTrigger>
                      <SelectContent>
                        {["Mr", "Mrs", "Ms", "Miss", "Dr", "Other"].map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth <span className="text-destructive">*</span></Label>
                    <Input id="dob" type="date" required value={form.dob} onChange={(e) => update("dob", e.target.value)} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="givenName">Given Name <span className="text-destructive">*</span></Label>
                    <Input id="givenName" required maxLength={100} value={form.givenName} onChange={(e) => update("givenName", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="surname">Surname <span className="text-destructive">*</span></Label>
                    <Input id="surname" required maxLength={100} value={form.surname} onChange={(e) => update("surname", e.target.value)} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address <span className="text-destructive">*</span></Label>
                  <Input id="address" required maxLength={200} value={form.address} onChange={(e) => update("address", e.target.value)} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="suburb">Suburb <span className="text-destructive">*</span></Label>
                    <Input id="suburb" required maxLength={100} value={form.suburb} onChange={(e) => update("suburb", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postcode">Postcode <span className="text-destructive">*</span></Label>
                    <Input id="postcode" required maxLength={10} value={form.postcode} onChange={(e) => update("postcode", e.target.value)} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                  <Input id="email" type="email" required maxLength={255} value={form.email} onChange={(e) => update("email", e.target.value)} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="homePhone">Home Phone</Label>
                    <Input id="homePhone" maxLength={20} value={form.homePhone} onChange={(e) => update("homePhone", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workPhone">Work Phone</Label>
                    <Input id="workPhone" maxLength={20} value={form.workPhone} onChange={(e) => update("workPhone", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile <span className="text-destructive">*</span></Label>
                    <Input id="mobile" required maxLength={20} value={form.mobile} onChange={(e) => update("mobile", e.target.value)} />
                  </div>
                </div>

                {/* Next of Kin */}
                <SectionTitle>Next of Kin Details</SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nokName">Name <span className="text-destructive">*</span></Label>
                    <Input id="nokName" required maxLength={100} value={form.nokName} onChange={(e) => update("nokName", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nokRelationship">Relationship to You <span className="text-destructive">*</span></Label>
                    <Input id="nokRelationship" required maxLength={100} value={form.nokRelationship} onChange={(e) => update("nokRelationship", e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nokContact">Contact Number <span className="text-destructive">*</span></Label>
                  <Input id="nokContact" required maxLength={20} value={form.nokContact} onChange={(e) => update("nokContact", e.target.value)} />
                </div>

                {/* GP */}
                <SectionTitle>Usual GP</SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gpName">GP Name</Label>
                    <Input id="gpName" maxLength={100} value={form.gpName} onChange={(e) => update("gpName", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gpClinic">Clinic Name</Label>
                    <Input id="gpClinic" maxLength={100} value={form.gpClinic} onChange={(e) => update("gpClinic", e.target.value)} />
                  </div>
                </div>

                {/* Claim Details */}
                <SectionTitle>Claim Details</SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="medicareNumber">Medicare Number</Label>
                    <Input id="medicareNumber" maxLength={20} value={form.medicareNumber} onChange={(e) => update("medicareNumber", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="medicareRef">Ref. No.</Label>
                    <Input id="medicareRef" maxLength={10} value={form.medicareRef} onChange={(e) => update("medicareRef", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="medicareExp">Exp. Date</Label>
                    <Input id="medicareExp" type="date" value={form.medicareExp} onChange={(e) => update("medicareExp", e.target.value)} />
                  </div>
                </div>

                <RadioYesNo field="privateHealthInsurance" label="Private Health Insurance" />
                {form.privateHealthInsurance === "yes" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fundName">Fund Name</Label>
                      <Input id="fundName" maxLength={100} value={form.fundName} onChange={(e) => update("fundName", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="membershipNumber">Membership Number</Label>
                      <Input id="membershipNumber" maxLength={50} value={form.membershipNumber} onChange={(e) => update("membershipNumber", e.target.value)} />
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <Label>Veterans Affairs Card</Label>
                  <RadioGroup value={form.veteransCard} onValueChange={(v) => update("veteransCard", v)} className="flex gap-6">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="gold" id="vet-gold" />
                      <Label htmlFor="vet-gold" className="font-normal cursor-pointer">Gold</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="white" id="vet-white" />
                      <Label htmlFor="vet-white" className="font-normal cursor-pointer">White</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="none" id="vet-none" />
                      <Label htmlFor="vet-none" className="font-normal cursor-pointer">N/A</Label>
                    </div>
                  </RadioGroup>
                </div>
                {(form.veteransCard === "gold" || form.veteransCard === "white") && (
                  <div className="space-y-2">
                    <Label htmlFor="veteransNumber">Veterans Card Number</Label>
                    <Input id="veteransNumber" maxLength={20} value={form.veteransNumber} onChange={(e) => update("veteransNumber", e.target.value)} />
                  </div>
                )}

                {/* Current Medications */}
                <SectionTitle>Current Medications</SectionTitle>

                <RadioYesNo field="painKillers" label="Pain Killers" />
                {form.painKillers === "yes" && (
                  <div className="space-y-2">
                    <Label htmlFor="painKillersDetails">Details</Label>
                    <Input id="painKillersDetails" maxLength={500} value={form.painKillersDetails} onChange={(e) => update("painKillersDetails", e.target.value)} />
                  </div>
                )}

                <RadioYesNo field="diabetic" label="Are you Diabetic?" />
                {form.diabetic === "yes" && (
                  <div className="space-y-3">
                    <Label>Type</Label>
                    <RadioGroup value={form.diabeticType} onValueChange={(v) => update("diabeticType", v)} className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="type1" id="diab-t1" />
                        <Label htmlFor="diab-t1" className="font-normal cursor-pointer">Type 1</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="type2" id="diab-t2" />
                        <Label htmlFor="diab-t2" className="font-normal cursor-pointer">Type 2</Label>
                      </div>
                    </RadioGroup>
                  </div>
                )}

                <RadioYesNo field="drugAllergies" label="Do you have drug allergies?" />
                {form.drugAllergies === "yes" && (
                  <div className="space-y-2">
                    <Label htmlFor="drugAllergiesDetails">Details</Label>
                    <Input id="drugAllergiesDetails" maxLength={500} value={form.drugAllergiesDetails} onChange={(e) => update("drugAllergiesDetails", e.target.value)} />
                  </div>
                )}

                <RadioYesNo field="bloodThinners" label="Do you take Plavix/Warfarin, blood-thinners?" />
                {form.bloodThinners === "yes" && (
                  <div className="space-y-2">
                    <Label htmlFor="bloodThinnersDetails">Details</Label>
                    <Input id="bloodThinnersDetails" maxLength={500} value={form.bloodThinnersDetails} onChange={(e) => update("bloodThinnersDetails", e.target.value)} />
                  </div>
                )}

                <RadioYesNo field="pacemakerStent" label="Do you have a pacemaker/stent?" />
                {form.pacemakerStent === "yes" && (
                  <div className="space-y-2">
                    <Label htmlFor="cardiologist">Cardiologist</Label>
                    <Input id="cardiologist" maxLength={100} value={form.cardiologist} onChange={(e) => update("cardiologist", e.target.value)} />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="otherMedications">Other Medications</Label>
                  <Textarea
                    id="otherMedications"
                    maxLength={2000}
                    value={form.otherMedications}
                    onChange={(e) => update("otherMedications", e.target.value)}
                    placeholder="List any other current medications"
                    className="min-h-[100px]"
                  />
                </div>

                {/* Privacy & Photo Consent */}
                <SectionTitle>Privacy & Photo Consent</SectionTitle>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  This Medical practice collects information from you for the primary purpose of providing quality healthcare.
                  We require you to provide us with your personal details and a full medical history so that we may properly
                  assess, diagnose, treat and be proactive in your health-care needs. By submitting this form you consent to
                  the handling of your information by this practice for these purposes.
                </p>

                <p className="text-sm font-medium text-foreground mt-4">
                  I consent for clinical photographs to be used for the following purposes (select all that apply):
                </p>

                <div className="space-y-3 mt-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="consentClinical" checked={form.consentClinical} onCheckedChange={(v) => update("consentClinical", !!v)} />
                    <Label htmlFor="consentClinical" className="font-normal cursor-pointer">Clinical Use — For Our Own Records</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="consentCommercial" checked={form.consentCommercial} onCheckedChange={(v) => update("consentCommercial", !!v)} />
                    <Label htmlFor="consentCommercial" className="font-normal cursor-pointer">Commercial / Marketing Material</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="consentAcademic" checked={form.consentAcademic} onCheckedChange={(v) => update("consentAcademic", !!v)} />
                    <Label htmlFor="consentAcademic" className="font-normal cursor-pointer">Academic Presentations / Research</Label>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <Label htmlFor="consentName">Full Name (as signature) <span className="text-destructive">*</span></Label>
                  <Input id="consentName" required maxLength={100} value={form.consentName} onChange={(e) => update("consentName", e.target.value)} placeholder="Type your full name as signature" />
                </div>

                <Button type="submit" size="lg" className="w-full mt-6" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...</>
                  ) : (
                    <>Submit Registration <ArrowRight className="w-4 h-4 ml-2" /></>
                  )}
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

export default PatientRegistration;
