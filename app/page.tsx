import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromiseSection from "@/components/PromiseSection";
import ProblemsSection from "@/components/ProblemsSection";
import ArticlesSection from "@/components/ArticlesSection";
import CareersSection from "@/components/CareersSection";
import NextStepsSection from "@/components/NextStepsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <PromiseSection />
        <ProblemsSection />
        <ArticlesSection />
        <CareersSection />
        <NextStepsSection />
      </main>
      <Footer />
    </>
  );
}
