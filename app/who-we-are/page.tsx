import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are | Scale NXT",
  description: "Scale NXT exists to address a persistent problem across African markets: business grow, but institution fail to form.",
};

export default function WhoWeAre() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header Section */}
        <section className="bg-white pt-20 pb-20 md:pt-32 md:pb-32 px-6 md:px-8 max-w-[1400px] mx-auto">
          <div className="max-w-[1000px]">
            <h1 className="text-[40px] md:text-[60px] lg:text-[75px] font-bold text-[#111] leading-[1.1] tracking-[-0.02em] mb-8 md:mb-12">
              We build institutions, not<br className="hidden md:block" /> personalities
            </h1>
            <div className="space-y-6 text-[#111] font-medium text-[15px] md:text-[18px] lg:text-[20px] max-w-[800px]">
              <p>
                Scale NXT exists to address a persistent problem across African markets: business grow, but institution fail to form
              </p>
              <p>
                We work with leaders who understand that longevity is engineered - not hoped for.
              </p>
            </div>
          </div>
        </section>

        {/* Our Origin Section */}
        <section className="bg-black text-white pt-20 pb-24 md:pt-28 md:pb-32 px-6 md:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[28px] md:text-[36px] font-bold inline-block border-b-2 border-white pb-1 mb-4">
                Our Origin
              </h2>
              <p className="text-[15px] md:text-[17px] text-white/90">
                Why Scale NXT exists
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-[1000px] mx-auto">
              <div className="border border-white/20 py-10 px-6 text-center hover:bg-white/5 transition-colors">
                <h3 className="text-[16px] md:text-[18px] font-bold">Strong Founders</h3>
              </div>
              <div className="border border-white/20 py-10 px-6 text-center hover:bg-white/5 transition-colors">
                <h3 className="text-[16px] md:text-[18px] font-bold">Growing Revenues</h3>
              </div>
              <div className="border border-white/20 py-10 px-6 text-center hover:bg-white/5 transition-colors">
                <h3 className="text-[16px] md:text-[18px] font-bold">Build for Continuity</h3>
              </div>
            </div>

            <div className="max-w-[1000px] mx-auto space-y-6 text-[14px] md:text-[16px] lg:text-[18px] text-white/90 font-medium">
              <p>
                Businesses did not fail due to lack of ambition. They failed because scale arrived before structure
              </p>
              <p>
                Scale NXT exists to correct this imbalance - by designing and installing the systems that allow businesses to survive growth, transition and time
              </p>
            </div>
          </div>
        </section>

        {/* Our Point of View Section */}
        <section className="bg-white pt-20 pb-20 md:pt-28 md:pb-28 px-6 md:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[28px] md:text-[36px] font-bold text-[#111] inline-block border-b-[3px] border-[#111] pb-1 mb-8">
                Our Point of View
              </h2>
              <p className="text-[15px] md:text-[18px] text-[#111] font-medium max-w-[1000px] mx-auto">
                We believe most African businesses do not suffer from a talent or vision problem. They suffer from an institutional design problem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
              {/* Mission */}
              <div className="bg-[#E5E5E5] p-8 md:p-10 flex flex-col items-start min-h-[250px]">
                <h3 className="text-[20px] md:text-[22px] font-bold text-[#111] mb-6">Mission</h3>
                <p className="text-[#333] font-medium text-[14px] md:text-[15px] leading-relaxed">
                  To design and install the systems structures, and leadership capacity that enable African businesses to endure beyond their founders
                </p>
              </div>

              {/* Vision */}
              <div className="bg-[#E5E5E5] p-8 md:p-10 flex flex-col items-start min-h-[250px]">
                <h3 className="text-[20px] md:text-[22px] font-bold text-[#111] mb-6">Vision</h3>
                <p className="text-[#333] font-medium text-[14px] md:text-[15px] leading-relaxed">
                  An African business landscape defined by institution - not persona
                </p>
              </div>

              {/* Values */}
              <div className="bg-[#E5E5E5] p-8 md:p-10 flex flex-col items-start min-h-[250px]">
                <h3 className="text-[20px] md:text-[22px] font-bold text-[#111] mb-6">Values</h3>
                <div className="space-y-4 text-[#333] font-medium text-[14px] md:text-[15px]">
                  <p className="flex items-center gap-2"><span className="text-[#666]">▸</span> Clarity Over Complexity</p>
                  <p className="flex items-center gap-2"><span className="text-[#666]">▸</span> Execution Over ideas</p>
                  <p className="flex items-center gap-2"><span className="text-[#666]">▸</span> Institutional Loyalty</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operating Principles Section */}
        <section className="bg-white pb-20 md:pb-28 px-6 md:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[28px] md:text-[36px] font-bold text-[#111] inline-block border-b-[3px] border-[#111] pb-1">
                Operating Principles
              </h2>
            </div>

            <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 text-center text-[#333] font-bold text-[14px] md:text-[15px]">
              <div>Systems before scale</div>
              <div>Structure before speed</div>
              <div>Clarity Over Complexity</div>
              
              <div>Diagnosis before design</div>
              <div>Institution before individual</div>
              <div>Execution Over Ideas</div>
              
              <div>Structure before individual</div>
              <div>Institutional Loyalty</div>
              <div>Institutional Loyalty</div>
            </div>
          </div>
        </section>

        {/* Built for Continuity Section */}
        <section className="relative py-24 md:py-32 px-6 md:px-8 overflow-hidden">
          {/* Checkerboard pattern background */}
          <div 
            className="absolute inset-0 z-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%, #f0f0f0), linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%, #f0f0f0)`,
              backgroundSize: '100px 100px',
              backgroundPosition: '0 0, 50px 50px'
            }}
          />
          
          <div className="relative z-10 max-w-[1400px] mx-auto text-center flex flex-col items-center">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#111] inline-block border-b-[3px] border-[#111] pb-1 mb-10 bg-white/60 px-4">
              Built for Continuity
            </h2>
            
            <div className="space-y-6 text-[#111] font-bold text-[16px] md:text-[18px] lg:text-[20px] mb-12 bg-white/60 px-8 py-6 rounded-xl inline-block">
              <p>Institutions do not emerge by accident</p>
              <p>They are designed, installed and protected over time</p>
              <p>Scale NXT exists for leaders who understand this</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="#diagnostic" 
                className="px-8 py-4 bg-[#333] text-white font-bold text-[14px] md:text-[15px] rounded-[6px] hover:bg-black transition-colors min-w-[200px]"
              >
                Start the Diagnostic
              </Link>
              <Link 
                href="#conversation" 
                className="px-8 py-4 bg-transparent text-[#333] font-bold text-[14px] md:text-[15px] rounded-[6px] border-[1.5px] border-[#333] hover:bg-[#333] hover:text-white transition-colors min-w-[200px]"
              >
                Book a Conversation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
