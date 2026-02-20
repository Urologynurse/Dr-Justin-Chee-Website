import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutDrChee from "./pages/AboutDrChee";
import UrethralStrictures from "./pages/UrethralStrictures";
import ErectileDysfunction from "./pages/ErectileDysfunction";
import PostOpCare from "./pages/PostOpCare";
import PreoperativeCare from "./pages/PreoperativeCare";
import NotFound from "./pages/NotFound";
import PatientRegistration from "./pages/PatientRegistration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-dr-chee" element={<AboutDrChee />} />
          <Route path="/urethral-strictures" element={<UrethralStrictures />} />
          <Route path="/erectile-dysfunction" element={<ErectileDysfunction />} />
          <Route path="/post-op-care" element={<PostOpCare />} />
          <Route path="/preoperative-care" element={<PreoperativeCare />} />
          <Route path="/patient-registration" element={<PatientRegistration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
