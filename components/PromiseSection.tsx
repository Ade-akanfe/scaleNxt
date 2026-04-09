import Link from "next/link";

export default function PromiseSection() {
  const cards = [
    {
      title: "Reduce Founder Dependency",
      description: "Build effective leadership teams can scale beyond the founder",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v4"/><circle cx="12" cy="5" r="2"/><path d="M8 11h8"/><path d="M8 11v4"/><circle cx="8" cy="17" r="2"/><path d="M16 11v4"/><circle cx="16" cy="17" r="2"/></svg>
      ),
    },
    {
      title: "Execute Consistently",
      description: "Install business operating systems that drive disciplined execution at scale",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      ),
    },
    {
      title: "Build for Continuity",
      description: "Develop strategies and systems that sustain institutional success over time",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
      ),
    },
  ];

  return (
    <section id="what-we-do" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-full mx-auto mb-12 md:mb-16 space-y-4 px-2">
          <h2 className="text-[24px] sm:text-[26px] md:text-[32px] font-bold text-[#111] inline-block border-b-[2px] border-[#111] pb-1 whitespace-nowrap">Scale NXT Promise</h2>
          <p className="text-[14px] sm:text-[15px] md:text-[17px] text-[#222] font-semibold mt-4 whitespace-nowrap">Not a consultant. An enterprise partner</p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 mx-auto w-full">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="group p-2 sm:p-4 md:p-8 pt-4 sm:pt-6 md:pt-10 border border-[#ccc] rounded-[4px] md:rounded-[8px] bg-white flex flex-col h-full w-full"
            >
              <div className="mb-2 md:mb-6 flex justify-center md:justify-start">
                <div className="scale-[0.6] md:scale-100 origin-center md:origin-left">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-[10px] sm:text-[12px] md:text-[20px] font-bold text-[#111] mb-1 md:mb-3 pr-0 md:pr-2 leading-tight">
                {card.title}
              </h3>
              <p className="text-[#555] text-[9px] sm:text-[10px] md:text-[15px] font-medium leading-[1.4] md:leading-[1.6] mb-4 md:mb-10 flex-grow pr-0 md:pr-2">
                {card.description}
              </p>
              <div className="mt-auto">
                <Link href="#" className="inline-flex items-center text-[9px] sm:text-[10px] md:text-[13px] font-semibold text-[#555] hover:text-black transition-colors group">
                  Read More 
                  <span className="ml-1 md:ml-3 text-gray-400 group-hover:text-black transition-colors">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
