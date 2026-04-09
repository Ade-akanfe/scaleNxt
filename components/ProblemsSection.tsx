"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProblemsSection() {
  const problems = [
    {
      title: "Founder Dependency\n& Fatigue",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      title: "Informal Structures",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      title: "Growth Without\nReadiness",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      title: "Advisory Fatigue",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
  ];

  return (
    <section id="how-we-work" className="pt-20 pb-0 relative overflow-hidden bg-[#0A1729]">
      {/* Background Image Layer */}
      <Image
        src="/images/background-core-problem.png"
        alt="Core Problems Background"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-80"
        priority
      />

      <div className="max-w-[1400px] mx-auto px-0 md:px-8 relative z-10 w-full">
        <div className="text-center w-full mb-12 md:mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-[28px] md:text-[32px] font-bold text-white inline-block border-b-2 border-white pb-1">Core Problems we Solve</h2>
        </div>

        {/* Mobile & Tablet View (2 Column Masonry-style Flex) */}
        <div className="flex lg:hidden gap-2 sm:gap-3 md:gap-6 px-2 sm:px-3 md:px-6 pb-[100px] md:pb-[140px] w-full">
          {/* Left Column (0, 2) */}
          <div className="flex flex-col gap-28 sm:gap-32 md:gap-36 flex-1 max-h-[250px] md:max-h-[400px]">
            {[0, 2].map((idx) => {
              const problem = problems[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white p-4 sm:p-5 md:p-8 border border-gray-100 flex flex-col rounded-sm shadow-sm md:shadow-none h-full"
                >
                  <h3 className="text-[12px] sm:text-[14px] md:text-[19px] font-bold text-[#111] leading-[1.3] mb-3 md:mb-6 whitespace-pre-line">
                    {problem.title}
                  </h3>
                  <p className="text-[#444] text-[9.5px] sm:text-[11px] md:text-[14px] font-medium leading-[1.45] md:leading-[1.6] whitespace-pre-line">
                    {problem.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column (1, 3) - Shifted Down */}
          <div className="flex flex-col gap-28 sm:gap-32 md:gap-36 flex-1 mt-[120px] sm:mt-[150px] md:mt-[180px]">
            {[1, 3].map((idx) => {
              const problem = problems[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white p-4 sm:p-5 md:p-8 border border-gray-100 flex flex-col rounded-sm shadow-sm md:shadow-none h-full"
                >
                  <h3 className="text-[12px] sm:text-[14px] md:text-[19px] font-bold text-[#111] leading-[1.3] mb-3 md:mb-6 whitespace-pre-line">
                    {problem.title}
                  </h3>
                  <p className="text-[#444] text-[9.5px] sm:text-[11px] md:text-[14px] font-medium leading-[1.45] md:leading-[1.6] whitespace-pre-line">
                    {problem.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop View (Grid) */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-8 items-stretch pb-[260px] w-full px-0">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`h-full transition-transform duration-300
                 ${idx === 1 ? 'lg:translate-y-[180px]' : ''}
                 ${idx === 2 ? 'lg:translate-y-[180px]' : ''}
               `}
            >
              <div className="bg-white p-6 lg:p-8 border border-gray-100 flex flex-col h-full rounded-sm">
                <h3 className="text-[17px] lg:text-[19px] font-bold text-[#111] leading-[1.3] mb-4 lg:mb-6 whitespace-pre-line">
                  {problem.title}
                </h3>
                <p className="text-[#444] text-[13px] lg:text-[14px] font-medium leading-[1.6] whitespace-pre-line flex-1">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
