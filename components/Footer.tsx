import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { 
      name: "Facebook", 
      href: "#", 
      color: "#1877F2", 
      icon: <svg fill="currentColor" width="22" height="22" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> 
    },
    { 
      name: "X", 
      href: "#", 
      color: "#000000", 
      icon: <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> 
    },
    { 
      name: "Youtube", 
      href: "#", 
      color: "#FF0000", 
      icon: <svg fill="currentColor" width="22" height="22" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> 
    },
    { 
      name: "LinkedIn", 
      href: "#", 
      color: "#0A66C2", 
      icon: <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> 
    },
  ];

  return (
    <footer id="footer" className="w-full">
      {/* Dark Section */}
      <div className="bg-[#0A1729] py-10 pb-12 md:py-24 md:pb-28 relative overflow-hidden">
        {/* Faded Background Logo Watermark */}
        <div className="absolute inset-0 z-0 pointer-events-none flex flex-col justify-start items-center overflow-hidden opacity-[0.04]">
          <div className="flex flex-col text-[#ACC3EA] tracking-widest font-black uppercase text-center w-full transform -translate-y-[10%]">
            <h1 className="text-[200px] md:text-[350px] lg:text-[450px] leading-[0.8] mb-4 overflow-hidden">SCALE</h1>
            <h1 className="text-[200px] md:text-[400px] lg:text-[500px] leading-[0.8] mb-4 overflow-hidden">NXT</h1>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full grid grid-cols-[1.5fr_1fr_1fr_1fr] md:grid-cols-4 gap-2 sm:gap-4 md:gap-8 items-start">
          
          {/* Col 1 */}
          <div className="flex flex-col items-start w-full">
            <Link href="/" className="inline-block mb-4 md:mb-10 mt-[-5px]">
              <Image 
                src="/images/logo.png" 
                alt="Scale NXT Logo" 
                width={160} 
                height={50} 
                className="brightness-0 invert object-contain w-[70px] sm:w-[100px] md:w-[160px]"
              />
            </Link>
            <div className="flex gap-1 md:gap-3">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.href}
                  style={{ color: social.color }}
                  className="w-4 h-4 sm:w-6 sm:h-6 md:w-10 md:h-10 bg-white rounded-[2px] md:rounded-[4px] flex items-center justify-center transition-transform hover:scale-105 shadow-sm"
                >
                  <div className="scale-[0.4] sm:scale-[0.5] md:scale-100 flex items-center justify-center">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3 sm:space-y-5 md:space-y-8 flex flex-col pl-1 sm:pl-2 lg:pl-10">
            <Link href="/who-we-are" className="text-[9px] sm:text-[11px] md:text-[15px] font-bold text-white hover:text-gray-300 transition-colors whitespace-nowrap">Who Are We</Link>
            <Link href="#what-we-do" className="text-[9px] sm:text-[11px] md:text-[15px] font-bold text-white hover:text-gray-300 transition-colors whitespace-nowrap">What we do</Link>
            <Link href="#how-we-work" className="text-[9px] sm:text-[11px] md:text-[15px] font-bold text-white hover:text-gray-300 transition-colors whitespace-nowrap">How We Work</Link>
          </div>

          {/* Col 3 */}
          <div className="space-y-3 sm:space-y-5 md:space-y-8 flex flex-col pl-1 sm:pl-2 lg:pl-4">
            <Link href="#" className="text-[9px] sm:text-[11px] md:text-[15px] font-bold text-white hover:text-gray-300 transition-colors whitespace-nowrap">Insights</Link>
            <Link href="#" className="text-[9px] sm:text-[11px] md:text-[15px] font-bold text-white hover:text-gray-300 transition-colors whitespace-nowrap">NXT Labs</Link>
            <Link href="#" className="text-[9px] sm:text-[11px] md:text-[15px] font-bold text-white hover:text-gray-300 transition-colors whitespace-nowrap">Work with us</Link>
          </div>

          {/* Col 4 */}
          <div className="space-y-3 sm:space-y-5 md:space-y-8 flex flex-col pl-1 sm:pl-2">
            <Link href="#" className="text-[9px] sm:text-[11px] md:text-[15px] font-bold text-white hover:text-gray-300 transition-colors whitespace-nowrap">Contact Us</Link>
            <Link href="#" className="text-[9px] sm:text-[11px] md:text-[15px] font-bold text-white hover:text-gray-300 transition-colors whitespace-nowrap">Privacy Statement</Link>
            <Link href="#" className="text-[9px] sm:text-[11px] md:text-[15px] font-bold text-white hover:text-gray-300 transition-colors whitespace-nowrap">Terms & Condition</Link>
          </div>

        </div>
      </div>

      {/* Bottom White Bar */}
      <div className="bg-white py-6 flex justify-center items-center">
        <p className="text-[#041E42] text-[13px] font-bold tracking-wide">
          2026 Scale NXT. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
