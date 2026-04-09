export default function NextStepsSection() {
  return (
    <section id="next-steps" className="py-24 bg-white relative">
      <div className="w-full max-w-[1200px] mx-auto px-8 text-center">
        <h2 className="text-[32px] font-bold text-[#111] inline-block border-b-[3px] border-[#111] pb-1 mb-16">
          Next Steps
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10">
          <button className="w-full md:w-auto px-10 py-4 bg-[#041E42] text-white font-bold text-[14px] rounded-[6px] hover:bg-[#06285c] transition-colors">
            Start the Diagnostic
          </button>
          
          <button className="w-full md:w-auto px-10 py-4 bg-white text-[#041E42] font-bold text-[14px] rounded-[6px] border border-gray-300 hover:border-[#041E42] transition-colors">
            Book a Conversation
          </button>
          
          <a href="#" className="w-full md:w-auto text-[#041E42] font-bold text-[15px] underline hover:text-blue-700 transition-colors">
            Explore NXT Labs
          </a>
        </div>
      </div>
    </section>
  );
}
