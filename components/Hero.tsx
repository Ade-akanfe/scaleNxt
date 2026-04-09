import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[calc(100vh-103px)] min-h-[700px] w-full flex items-center justify-start overflow-hidden bg-[#0a1120]">
      {/* Background Image */}
      <Image
        src="/images/landing-page-image.jpg"
        alt="Scale NXT Background"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-70"
        priority
      />
      
      {/* Overlay to match the dark blueish tint of the design */}
      <div className="absolute inset-0 bg-[#041E42] mix-blend-overlay opacity-60 z-10" />
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-8 lg:px-12 text-white pt-16 md:pt-24 lg:pt-28">
        <div className="max-w-[1000px] space-y-6 animate-fade-in">
          <h1 className="text-[38px] md:text-[56px] lg:text-[68px] font-bold leading-[1.1] tracking-[-0.02em]">
            Most African Businesses will<br className="hidden sm:block" /> not outlive their founders
          </h1>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] text-white/95 max-w-[750px] font-medium leading-normal">
            Growth without systems created momentum, not institutions. Scale NXT exists to help
            <br className="hidden sm:block" /> African businesses survive scale, leadership transition and time
          </p>
          <div className="flex flex-row gap-3 md:gap-5 pt-6 w-full max-w-[100vw] overflow-x-auto sm:overflow-visible">
            <button className="px-4 py-3 md:px-9 md:py-4 bg-white text-[#041E42] font-bold text-[12px] md:text-[15px] rounded-[6px] border border-white hover:bg-transparent hover:text-white transition-all duration-300 shrink-0">
              Start the Diagnostic
            </button>
            <button className="px-4 py-3 md:px-9 md:py-4 bg-transparent text-white font-bold text-[12px] md:text-[15px] rounded-[6px] border border-white/60 hover:border-white hover:bg-white hover:text-[#041E42] transition-all duration-300 shrink-0">
              Book a Conversation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
