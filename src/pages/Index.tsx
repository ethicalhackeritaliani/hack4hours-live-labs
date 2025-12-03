import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Formula from "@/components/Formula";
import Benefits from "@/components/Benefits";
import FirstLab from "@/components/FirstLab";
import PracticalInfo from "@/components/PracticalInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Problem />
      <Formula />
      <Benefits />
      <FirstLab />
      <PracticalInfo />
      <Footer />
    </main>
  );
};

export default Index;
