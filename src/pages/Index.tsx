import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Formula from "@/components/Formula";
import Benefits from "@/components/Benefits";
import FirstLab from "@/components/FirstLab";
import WhatYouGet from "@/components/WhatYouGet";
import VPNSetup from "@/components/VPNSetup";
import FidelityProgram from "@/components/FidelityProgram";
import PracticalInfo from "@/components/PracticalInfo";
import RegistrationNote from "@/components/RegistrationNote";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Problem />
      <Formula />
      <Benefits />
      <FirstLab />
      <WhatYouGet />
      <VPNSetup />
      <FidelityProgram />
      <PracticalInfo />
      <RegistrationNote />
      <Footer />
    </main>
  );
};

export default Index;
