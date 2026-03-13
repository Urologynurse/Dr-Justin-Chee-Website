import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, FileText, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PostOpCare = () => {
  const [ippOpen, setIppOpen] = useState(false);
  const [urethroOpen, setUrethroOpen] = useState(false);
  const [semenOpen, setSemenOpen] = useState(false);
  const [ausOpen, setAusOpen] = useState(false);

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
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Need to Contact Us?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      If you require urgent care please attend your closest emergency department. During office hours please call clinic, after hours urgent matters can be contacted via the pager service{" "}
                      <a
                        href="tel:0386796579"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        <Phone className="w-4 h-4" />
                        03 8679 6579
                      </a>
                      . All non-urgent matters can you please contact the rooms, leave a message or send an email to{" "}
                      <a
                        href="mailto:reception@drjustinchee.com"
                        className="text-primary hover:underline"
                      >
                        reception@drjustinchee.com
                      </a>{" "}
                      and we will get back to you during business hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nursing Handouts */}
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Nursing Handouts
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 mb-8">
              <button
                onClick={() => setIppOpen(!ippOpen)}
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent/10 transition-colors group text-left"
              >
                <FileText className="w-8 h-8 text-primary shrink-0 group-hover:text-teal transition-colors" />
                <div className="flex-1">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    IPP (Inflatable Penile Prosthesis)
                  </span>
                  <p className="text-sm text-muted-foreground">View Document</p>
                </div>
                {ippOpen ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              <button
                onClick={() => setUrethroOpen(!urethroOpen)}
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent/10 transition-colors group text-left"
              >
                <FileText className="w-8 h-8 text-primary shrink-0 group-hover:text-teal transition-colors" />
                <div className="flex-1">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Urethroplasty
                  </span>
                  <p className="text-sm text-muted-foreground">View Document</p>
                </div>
                {urethroOpen ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              <button
                onClick={() => setSemenOpen(!semenOpen)}
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent/10 transition-colors group text-left"
              >
                <FileText className="w-8 h-8 text-primary shrink-0 group-hover:text-teal transition-colors" />
                <div className="flex-1">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Semen Analysis
                  </span>
                  <p className="text-sm text-muted-foreground">View Document</p>
                </div>
                {semenOpen ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              <button
                onClick={() => setAusOpen(!ausOpen)}
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent/10 transition-colors group text-left"
              >
                <FileText className="w-8 h-8 text-primary shrink-0 group-hover:text-teal transition-colors" />
                <div className="flex-1">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Artificial Urinary Sphincter (AUS)
                  </span>
                  <p className="text-sm text-muted-foreground">View Document</p>
                </div>
                {ausOpen ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
            </div>

            {/* IPP Inline Document */}
            {ippOpen && (
              <Card className="mb-8 animate-fade-in-up">
                <CardContent className="p-6 md:p-8 space-y-8">
                  <h2 className="text-2xl font-bold text-foreground">
                    Inflatable Penile Prosthesis (IPP) – What to Expect
                  </h2>

                  {/* What to Expect */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">What to Expect</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                      <li><strong className="text-foreground">Length of stay:</strong> 3-Day, 2-Night</li>
                      <li>Dr Chee will visit you daily in hospital</li>
                      <li>Catheter (IDC) stays in bladder after surgery; will be removed before discharge home</li>
                      <li>Get out of bed / walk around / shower after Dr Chee's review Day 1 post surgery</li>
                      <li>The device will be partially inflated after surgery and will be deflated completely at the post-op review in rooms, 1 week post discharge</li>
                      <li>Cycling will commence at 3 weeks post op</li>
                      <li>The device can be used only 6 weeks post op</li>
                    </ul>
                  </div>

                  {/* Recovery Time */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Recovery Time</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                      <li>Different for everyone</li>
                      <li>Majority of patients will be uncomfortable / have a degree of pain / swelling for 2 weeks, then gradually improve</li>
                      <li>Small regular walks, healthy eating, regular water consumption to avoid constipation</li>
                      <li>No heavy lifting (no more than 10 kg)</li>
                      <li>No strenuous activity for 6 weeks</li>
                      <li><strong className="text-foreground">Driving:</strong> No driving until earliest AFTER the initial post-op review in rooms (can be longer)</li>
                    </ul>
                  </div>

                  {/* Medications */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Medications</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                      <li>Regular pain relief will be given in hospital; you can ask for more if needed</li>
                      <li>Adequate pain relief will be given for discharge</li>
                      <li>Antibiotics for 5 days</li>
                      <li>Constipation is common with some types of analgesia</li>
                      <li>Important to take laxatives (Coloxyl / Lactulose – available over the counter), prunes or pears to keep stool soft</li>
                    </ul>
                  </div>

                  {/* Do's and Don'ts */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-teal">Do's</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                        <li>Small regular walks</li>
                        <li>Healthy eating</li>
                        <li>Regular water consumption / laxative if needed to avoid constipation</li>
                        <li>Call Dr Chee if signs of infection: persistent pain, fever &gt; 38°C, increase in redness, severe swelling</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-destructive">Don'ts</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                        <li>No lifting more than 10 kg</li>
                        <li>No strenuous activity for 6 weeks after surgery</li>
                        <li>No intercourse for at least 6 weeks post op</li>
                        <li>No driving until agreed by Dr Chee</li>
                      </ul>
                    </div>
                  </div>

                  {/* Follow Up Plan */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Follow Up Plan</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                      <li>Remove dressings in shower the day prior to first review in rooms</li>
                      <li><strong className="text-foreground">1 week post discharge:</strong> Assess wound / pain management / deflate the device</li>
                      <li><strong className="text-foreground">1–3 weeks:</strong> Locate the device, feel for the "inflation pump" and "deflate button"</li>
                      <li>Once happy with progress and healing, we will teach you how to inflate/deflate the device and commence the "Cycling programme"</li>
                      <li>Urology nurse is available on Tuesdays and Fridays to support you in your healing</li>
                    </ul>
                  </div>

                  {/* Contacting Us */}
                  <div className="space-y-4 border-t border-border pt-6">
                    <h3 className="text-xl font-semibold text-foreground">Contacting Us</h3>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">Nurses Contact</p>
                        <a href="mailto:nurse@drjustinchee.com" className="text-primary hover:underline text-sm">
                          nurse@drjustinchee.com
                        </a>
                        <p className="text-sm text-muted-foreground">Available Tue &amp; Fri</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">Reception</p>
                        <a href="mailto:reception@drjustinchee.com" className="text-primary hover:underline text-sm">
                          reception@drjustinchee.com
                        </a>
                        <p className="text-sm text-muted-foreground">
                          <a href="tel:90885138" className="text-primary hover:underline">9088 5138</a>
                          {" "}· Tue–Fri 9:00–16:30
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">Pager Service</p>
                        <a href="tel:0386796579" className="text-primary hover:underline text-sm">
                          03 8679 6579
                        </a>
                        <p className="text-sm text-muted-foreground">URGENT matters only, non-business hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Urethroplasty Inline Document */}
            {urethroOpen && (
              <Card className="mb-8 animate-fade-in-up">
                <CardContent className="p-6 md:p-8 space-y-8">
                  <h2 className="text-2xl font-bold text-foreground">
                    Urethroplasty – What Do I Need to Know?
                  </h2>

                  {/* What to Expect */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">What to Expect</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                      <li><strong className="text-foreground">Length of stay:</strong> 3-Day, 2-Night</li>
                      <li>Dr Chee will visit you daily</li>
                      <li>Catheter (IDC) stays in bladder until 4 weeks after surgery</li>
                      <li>Day 1 – outer supportive dressing will be removed</li>
                      <li>Get out of bed / walk around / shower after Dr Chee has reviewed</li>
                      <li>You will be educated to use a leg bag</li>
                    </ul>
                  </div>

                  {/* Mouth Wound Care */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Mouth Wound Care</h3>
                    <p className="text-sm text-muted-foreground italic">If your operation required a Buccal Mucosa Graft (BMG)</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                      <li>Avoid hard-to-chew food (e.g. steak, hamburgers)</li>
                      <li>Stitches are dissolvable – avoid touching or pulling</li>
                      <li>If stitches come apart or break, don't be alarmed; try to limit degree of mouth opening</li>
                      <li>May gargle with warm salt water twice a day</li>
                    </ul>
                  </div>

                  {/* Perineal Wound Care */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Perineal Wound Care</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                      <li>Dressing is waterproof</li>
                      <li>Pat dry with clean towel after shower to avoid rubbing off</li>
                      <li>Please remove dressing in the shower 1 day prior to your post-op appointment (7–10 days after)</li>
                    </ul>
                  </div>

                  {/* Catheter Care */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Catheter (IDC) Care</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                      <li>IDC always taped onto abdomen with Mefix</li>
                      <li>Reapply every day after shower</li>
                      <li><strong className="text-foreground">Leg bag:</strong> Attach to thigh, empty regularly, change weekly</li>
                      <li><strong className="text-foreground">Night bag:</strong> Put on floor when sleeping</li>
                      <li>Your nurse will show you how to care for the IDC before discharge</li>
                    </ul>
                  </div>

                  {/* Medications */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Medications</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                      <li>Regular pain relief will be given in hospital; you can ask for more if needed</li>
                      <li>Adequate pain relief will be given for discharge</li>
                      <li>Common side effect: constipation</li>
                      <li>Antibiotics for 5 days</li>
                      <li>Important to take laxatives (Coloxyl / Lactulose – available over the counter), prunes or pears to keep stool soft</li>
                    </ul>
                  </div>

                  {/* Do's and Don'ts */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-teal">Do's</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                        <li>Walk as much as you want / feel comfortable with</li>
                        <li>Take laxatives if needed</li>
                        <li>Salt water gargle if there is a mouth wound</li>
                        <li>Sit leaning backwards instead of upright to avoid pressure on wound</li>
                        <li>Can sit on a doughnut cushion if needed</li>
                        <li>Let Dr Chee know if you have increased pain, fever, chills, feeling unwell, or increased bleeding</li>
                        <li>Ignore erections if they occur – can be painful with IDC in place; take a cool shower or walk around to reduce sensation</li>
                        <li>Let Dr Chee know if you develop bladder spasm or urine leaking around IDC – medication can be organised</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-destructive">Don'ts</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                        <li>No lifting more than 10 kg</li>
                        <li>No strenuous activity for 4–6 weeks after surgery</li>
                        <li>No driving until IDC removed and pain relief discontinued</li>
                        <li>No intercourse for 6 weeks</li>
                        <li>No bike riding for minimum 6 months – no direct pressure to wound</li>
                      </ul>
                    </div>
                  </div>

                  {/* Follow Up Plan */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Follow Up Plan</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                      <li>Appointment booked in rooms around 1 week post discharge for wound review</li>
                      <li>4 weeks after surgery for IDC removal</li>
                      <li>4–6 weeks after removal of IDC for flow test and review</li>
                    </ul>
                  </div>

                  {/* Material to Take Home */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Material to Take Home</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                      <li>4 × leg bags</li>
                      <li>4 × night bags</li>
                      <li>4–6 leggy fix</li>
                      <li>Multiple combines (to wear in underwear when dressing is removed at 1 week)</li>
                      <li>Multiple strips of Mefix, cut to length for easy application</li>
                    </ul>
                  </div>

                  {/* Contacting Us */}
                  <div className="space-y-4 border-t border-border pt-6">
                    <h3 className="text-xl font-semibold text-foreground">Contacting Us</h3>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">Nurses Contact</p>
                        <a href="mailto:nurse@drjustinchee.com" className="text-primary hover:underline text-sm">
                          nurse@drjustinchee.com
                        </a>
                        <p className="text-sm text-muted-foreground">Available Tue &amp; Fri</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">Reception</p>
                        <a href="mailto:reception@drjustinchee.com" className="text-primary hover:underline text-sm">
                          reception@drjustinchee.com
                        </a>
                        <p className="text-sm text-muted-foreground">
                          <a href="tel:90885138" className="text-primary hover:underline">9088 5138</a>
                          {" "}· Tue–Fri 9:00–16:30
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">Pager Service</p>
                        <a href="tel:0386796579" className="text-primary hover:underline text-sm">
                          03 8679 6579
                        </a>
                        <p className="text-sm text-muted-foreground">URGENT matters only, non-business hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* AUS Inline Document */}
            {ausOpen && (
              <Card className="mb-8 animate-fade-in-up">
                <CardContent className="p-6 md:p-8 space-y-8">
                  <h2 className="text-2xl font-bold text-foreground">
                    Artificial Urinary Sphincter (AUS)
                  </h2>

                  {/* What is an AUS */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">What is an Artificial Sphincter?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      An Artificial Sphincter is a device that is designed to act like your own urethral sphincter. It controls the exit of urine from your bladder to your urethra.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The Artificial Sphincter has three parts consisting of a reservoir that sits up in the abdomen, a cuff that's around the urethra, and a control pump located in the scrotum.
                    </p>
                  </div>

                  {/* How does it work */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">How Does It Work?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A cuff that sits around the urethra aids in improving leakage and incontinence, by keeping the urine inside the bladder like a gate. When your bladder is full and you get the urge to urinate, you can go to the toilet and squeeze the pump located in your scrotum. This forces the cuff to open and allow the urine to flow out (opens the gate). Over the next 2–3 minutes the cuff slowly closes.
                    </p>
                  </div>

                  {/* The Procedure */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">The Procedure</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The insertion of the artificial urinary sphincter is approximately a 2-hour operation in which the reservoir is implanted into the lower abdomen under the muscle layer and filled with a sterile saline solution. The reservoir holds the fluid that is used to fill the balloon that surrounds the urethra. The tubing and cuff are then inserted.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Prior to this procedure you will be instructed to fast for 6 hours. Fasting means nothing to eat or drink. You may also be required to have a blood test and a urine test. Do not shave the pubic area as this can result in the surgery being cancelled due to higher risk of infection.
                    </p>
                  </div>

                  {/* Hospital Stay */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">How Long Will I Be in Hospital?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The procedure is generally followed by a 2-night, 3-day stay in hospital.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Over the course of the three days you will be visited every day by the doctor. Each day you will be assessed on your progress and any medication or care will be adjusted to ensure that any needs you have are met.
                    </p>
                  </div>

                  {/* Contacting Us */}
                  <div className="space-y-4 border-t border-border pt-6">
                    <h3 className="text-xl font-semibold text-foreground">Contacting Us</h3>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">Nurses Contact</p>
                        <a href="mailto:nurse@drjustinchee.com" className="text-primary hover:underline text-sm">
                          nurse@drjustinchee.com
                        </a>
                        <p className="text-sm text-muted-foreground">Available Tue &amp; Fri</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">Reception</p>
                        <a href="mailto:reception@drjustinchee.com" className="text-primary hover:underline text-sm">
                          reception@drjustinchee.com
                        </a>
                        <p className="text-sm text-muted-foreground">
                          <a href="tel:90885138" className="text-primary hover:underline">9088 5138</a>
                          {" "}· Tue–Fri 9:00–16:30
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">Pager Service</p>
                        <a href="tel:0386796579" className="text-primary hover:underline text-sm">
                          03 8679 6579
                        </a>
                        <p className="text-sm text-muted-foreground">URGENT matters only, non-business hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Semen Analysis Inline Document */}
            {semenOpen && (
              <Card className="mb-8 animate-fade-in-up">
                <CardContent className="p-6 md:p-8 space-y-8">
                  <h2 className="text-2xl font-bold text-foreground">
                    Semen &amp; Sperm Antibodies Analysis – Patient Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These instructions are for sperm antibodies and semen analysis for post vasectomy or fertility investigation. Follow these instructions carefully to ensure your test results are accurate and reliable.
                  </p>

                  {/* Before the Test */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">1. Before the Test</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ensure you have your pathology referral from your doctor. We cannot accept a specimen without a pathology referral.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                      <li>Obtain a sterile container from your doctor or local Melbourne Pathology collection centre.</li>
                      <li>For post vasectomy investigation, the specimen should be collected 12 weeks after your operation, after at least 20 ejaculations.</li>
                      <li>All semen specimens should be collected following an abstinence from all sexual activity of no less than 48 hours and no more than 7 days.</li>
                    </ul>
                  </div>

                  {/* Collecting the Specimen */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">2. Collecting the Specimen</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The specimen is obtained through masturbation directly into the sterile container provided. Do not use other containers, lubricants or a condom. They may contain chemicals which can affect the test result.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Collect the complete ejaculate. If the specimen is incomplete, write a note on the container or request form (e.g. partial specimen only).
                    </p>
                    <p className="text-muted-foreground leading-relaxed font-medium text-foreground">
                      Label the collection container with:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                      <li>Your given name and surname</li>
                      <li>Your date of birth</li>
                      <li>Date and time of specimen collection</li>
                    </ul>
                  </div>

                  {/* Delivering the Specimen */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">3. Delivering the Specimen</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your specimen must be produced within 45 minutes before delivery to the Collingwood laboratory. Specimens will only be accepted at these sites and only between the hours listed:
                    </p>
                    <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                      <p className="font-medium text-foreground">Melbourne Pathology – Main Laboratory</p>
                      <p className="text-muted-foreground text-sm">103 Victoria Parade, Collingwood</p>
                      <p className="text-muted-foreground text-sm">Monday to Friday only, 8am – 1pm</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Keep the specimen at body temperature (e.g. put it in your pocket, close to your body). Deliver the specimen, the request form from your doctor and the completed questionnaire.
                    </p>
                    <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                      <p className="font-medium text-foreground">Collection Room (if more than 45 min away)</p>
                      <p className="text-muted-foreground text-sm">Melbourne Pathology – 124 Grey St, East Melbourne</p>
                      <p className="text-muted-foreground text-sm">Monday to Friday, morning only</p>
                      <p className="text-muted-foreground text-sm">
                        Ph <a href="tel:94194310" className="text-primary hover:underline">9419 4310</a>
                      </p>
                    </div>
                  </div>

                  {/* Fee */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Fee</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      There is a fee for all semen testing. You can claim part of this back from Medicare.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="bg-muted/50 rounded-lg p-3 flex justify-between items-center">
                        <span className="text-muted-foreground text-sm">Fertility investigation</span>
                        <span className="font-medium text-foreground">$85</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3 flex justify-between items-center">
                        <span className="text-muted-foreground text-sm">Post vasectomy</span>
                        <span className="font-medium text-foreground">$45</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3 flex justify-between items-center">
                        <span className="text-muted-foreground text-sm">Post vasectomy reversal</span>
                        <span className="font-medium text-foreground">$85</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3 flex justify-between items-center">
                        <span className="text-muted-foreground text-sm">Sperm antibodies</span>
                        <span className="font-medium text-foreground">$85</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="space-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
                    <p>Semen analysis patient information for Cabrini Hospital Malvern and Bendigo region available at <a href="https://www.mps.com.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.mps.com.au</a></p>
                    <p>Melbourne Pathology ABN 63 074 699 139 · Details correct December 2021</p>
                    <p>103 Victoria Parade Collingwood, 3066 · Phone <a href="tel:92877700" className="text-primary hover:underline">9287 7700</a></p>
                  </div>
                </CardContent>
              </Card>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PostOpCare;
