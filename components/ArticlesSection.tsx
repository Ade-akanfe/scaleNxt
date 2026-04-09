import Image from "next/image";

export default function ArticlesSection() {
  const articles = [
    {
      name: "Mr Thompson",
      role: "CEO Thaug Groups",
      image: "/images/img1.jpg",
      description: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor incididunt ut\nlabore et dolore magna aliqua. Ut\nenim ad minim veniam",
    },
    {
      name: "Mr Thompson",
      role: "CEO Thaug Groups",
      image: "/images/img2.jpg",
      description: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor incididunt ut\nlabore et dolore magna aliqua. Ut\nenim ad minim veniam",
    },
    {
      name: "Mr Thompson",
      role: "CEO Thaug Groups",
      image: "/images/img3.jpg",
      description: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor incididunt ut\nlabore et dolore magna aliqua. Ut\nenim ad minim veniam",
    },
    {
      name: "Mr Thompson",
      role: "CEO Thaug Groups",
      image: "/images/img4.jpg",
      description: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor incididunt ut\nlabore et dolore magna aliqua. Ut\nenim ad minim veniam",
    },
    {
      name: "Mr Thompson",
      role: "CEO Thaug Groups",
      image: "/images/img5.jpg",
      description: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor incididunt ut\nlabore et dolore magna aliqua. Ut\nenim ad minim veniam",
    },
  ];

  return (
    <section id="articles" className="py-10 md:py-24 bg-[#FAFBFD] relative overflow-hidden">
      {/* Background Watermark layer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] z-0 pointer-events-none flex flex-col justify-start overflow-hidden pt-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col opacity-[0.03] select-none text-black tracking-widest font-black uppercase text-center w-full">
            <h1 className="text-[200px] md:text-[300px] lg:text-[450px] leading-[0.8] mb-4 overflow-hidden">SCALE</h1>
            <h1 className="text-[200px] md:text-[350px] lg:text-[500px] leading-[0.8] mb-4 overflow-hidden">NXT</h1>
          </div>
        ))}
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-8 relative z-10">
        <div className="text-center mb-10 md:mb-24 relative">
          {/* Subtle line dropping from the title to serve as center axis. This matches the visual design concept. */}
          <h2 className="text-[32px] font-bold text-[#111] inline-block border-b-[3px] border-[#111] pb-1 relative bg-[#FAFBFD] z-10 px-4">
            Articles & Reports
          </h2>
        </div>

        <div className="flex flex-col w-full relative pt-2 md:pt-12">
          {/* Faint center line for visual reference if needed (purely structural mentally, not rendered) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 pointer-events-none hidden lg:block" />

          {articles.map((article, idx) => {
            const isLeftHalf = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-2 w-full lg:min-h-[250px] mb-8 md:mb-12 lg:mb-0"
              >
                {/* Left Half Component */}
                <div className={`w-full flex justify-center lg:justify-end lg:pr-8 xl:pr-12 ${!isLeftHalf ? 'hidden lg:flex lg:opacity-0 lg:pointer-events-none' : ''}`}>
                  {isLeftHalf && (
                    <div className="flex flex-row items-center lg:items-start xl:items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10 w-full max-w-[600px] px-4 md:px-0">
                      {/* Image on Outside (Left) */}
                      <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] xl:w-[240px] xl:h-[240px] relative rounded-full overflow-hidden shrink-0 shadow-sm">
                        <Image
                          src={article.image}
                          alt={article.name}
                          fill
                          sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, (max-width: 1280px) 200px, 240px"
                          className="object-cover object-top"
                        />
                      </div>

                      {/* Text Anchored to Center (Right of Image) */}
                      <div className="flex-1 text-left pt-0 md:pt-4 lg:pt-0">
                        <h3 className="text-[14px] sm:text-[16px] md:text-[20px] xl:text-[22px] font-bold text-[#111] mb-1">{article.name}</h3>
                        <p className="text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] text-[#444] font-medium mb-2 md:mb-4">{article.role}</p>
                        <p className="text-[10px] sm:text-[11px] md:text-[14px] xl:text-[15px] leading-[1.4] xl:leading-[1.6] text-[#444] mb-3 md:mb-5 whitespace-pre-line">
                          {article.description}
                        </p>
                        <a href="#" className="text-[10px] sm:text-[11px] md:text-[13px] xl:text-[14px] font-bold text-[#111] border-b-[1.5px] border-[#111] pb-[1px] md:pb-[2px] hover:text-gray-600 transition-colors inline-block">
                          Read More
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Half Component */}
                <div className={`w-full flex justify-center lg:justify-start lg:pl-8 xl:pl-12 ${isLeftHalf ? 'hidden lg:flex lg:opacity-0 lg:pointer-events-none' : ''}`}>
                  {!isLeftHalf && (
                    <div className="flex flex-row items-center lg:items-start xl:items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10 w-full max-w-[600px] px-4 md:px-0">
                      {/* Text Anchored to Center (Left of Image) */}
                      <div className="flex-1 text-left pt-0 md:pt-4 lg:pt-0">
                        <h3 className="text-[14px] sm:text-[16px] md:text-[20px] xl:text-[22px] font-bold text-[#111] mb-1">{article.name}</h3>
                        <p className="text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] text-[#444] font-medium mb-2 md:mb-4">{article.role}</p>
                        <p className="text-[10px] sm:text-[11px] md:text-[14px] xl:text-[15px] leading-[1.4] xl:leading-[1.6] text-[#444] mb-3 md:mb-5 whitespace-pre-line">
                          {article.description}
                        </p>
                        <a href="#" className="text-[10px] sm:text-[11px] md:text-[13px] xl:text-[14px] font-bold text-[#111] border-b-[1.5px] border-[#111] pb-[1px] md:pb-[2px] hover:text-gray-600 transition-colors inline-block">
                          Read More
                        </a>
                      </div>

                      {/* Image on Outside (Right) */}
                      <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] xl:w-[240px] xl:h-[240px] relative rounded-full overflow-hidden shrink-0 shadow-sm">
                        <Image
                          src={article.image}
                          alt={article.name}
                          fill
                          sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, (max-width: 1280px) 200px, 240px"
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
