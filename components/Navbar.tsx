import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Who We Are", href: "#who-we-are" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "How We Work", href: "#how-we-work" },
    { name: "Insights", href: "#insights" },
    { name: "Work With Us", href: "#work-with-us" },
  ];

  return (
    <nav className="w-full bg-white py-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] relative z-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 flex items-center justify-between">
        
        {/* Mobile Hamburger (Left) */}
        <div className="lg:hidden flex items-center w-1/3 justify-start">
          <button className="p-2 -ml-2 text-[#041E42] focus:outline-none">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" x2="15" y1="7" y2="7"/>
              <line x1="3" x2="21" y1="12" y2="12"/>
              <line x1="3" x2="13" y1="17" y2="17"/>
            </svg>
          </button>
        </div>

        {/* Logo (Center on Mobile, Left on Desktop) */}
        <Link href="/" className="relative flex items-center justify-center w-1/3 lg:w-auto">
           <Image 
            src="/images/logo.png" 
            alt="Scale NXT Logo" 
            width={120} 
            height={40} 
            className="object-contain md:w-[180px] md:h-[55px]"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#041E42] text-[16px] font-bold hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Search (Right) */}
        <div className="lg:hidden flex items-center justify-end w-1/3">
          <button className="p-2 -mr-2 text-[#041E42] focus:outline-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" x2="16.65" y1="21" y2="16.65"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
