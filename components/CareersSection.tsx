export default function CareersSection() {
  return (
    <section id="careers" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      {/* Decorative Dots Top Right */}
      <div className="absolute top-10 right-10 flex flex-col gap-2 opacity-50">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-2">
            {[...Array(4)].map((_, j) => (
              <div key={j} className="w-2 h-2 rounded-full bg-gray-300"></div>
            ))}
          </div>
        ))}
      </div>

      {/* Decorative Dots Bottom Left */}
      <div className="absolute bottom-10 left-10 flex flex-col gap-2 opacity-50">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-2">
            {[...Array(4)].map((_, j) => (
              <div key={j} className="w-2 h-2 rounded-full bg-gray-300"></div>
            ))}
          </div>
        ))}
      </div>

      <div className="w-full max-w-[800px] mx-auto px-8 relative z-10 text-center">
        <h2 className="text-[32px] font-bold text-[#111] inline-block border-b-[3px] border-[#111] pb-1 mb-8">
          Careers
        </h2>
        
        <h3 className="text-[20px] font-bold text-[#111] mb-6">
          Build the future of Africa with us
        </h3>
        
        <p className="text-[16px] text-[#444] font-medium leading-[1.6] mb-10 max-w-[600px] mx-auto">
          We are driven by one mission: Make Africa prosperous. If that moves you, you'll
          find a home at Scale NXT.
        </p>

        <button className="px-12 py-3 bg-[#041E42] text-white font-bold text-[14px] rounded-[6px] hover:bg-[#06285c] transition-colors">
          Join us
        </button>
      </div>
    </section>
  );
}
