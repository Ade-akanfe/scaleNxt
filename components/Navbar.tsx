"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { name: "Who We Are", href: "/who-we-are" },
  { name: "What We Do", href: "#what-we-do" },
  { name: "How We Work", href: "#how-we-work" },
  { name: "Insights", href: "#insights" },
  { name: "Work With Us", href: "#work-with-us" },
];

const popularSearches = [
  "How can i contact Scale NXT Team?",
  "What are the process of starting a new business methodology?",
  "Example of business model?",
  "What are the promises of Scale NXT?",
  "Core problems Scale NXT Solve?",
  "What are the promises of Scale NXT?",
  "What are the promises of Scale NXT?",
];

const footerCols = [
  ["Who Are We", "What we do", "How We Work"],
  ["Insights", "NXT Labs", "Work with us"],
  ["Contact Us", "Privacy Statement", "Terms & Condition"],
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    bg: "bg-[#1877F2]",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    bg: "bg-black",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    bg: "bg-[#FF0000]",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    bg: "bg-[#0A66C2]",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

/* ─── Shared modal footer ─────────────────────────────────────── */
function ModalFooter({ onLinkClick }: { onLinkClick: () => void }) {
  return (
    <div className="bg-[#041E42]/80 backdrop-blur-sm px-5 pt-5 pb-3 shrink-0">
      <div className="flex items-start gap-4">
        {/* Logo + socials */}
        <div className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Scale NXT"
            width={70}
            height={24}
            className="object-contain brightness-0 invert"
          />
          <div className="flex gap-[6px] mt-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className={`w-6 h-6 rounded-full ${s.bg} flex items-center justify-center text-white`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        <div className="flex-1 grid grid-cols-3 gap-x-2 gap-y-1">
          {footerCols.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-[7px]">
              {col.map((label) => (
                <a
                  key={label}
                  href="#"
                  onClick={onLinkClick}
                  className="text-white/75 text-[10px] hover:text-white transition-colors leading-tight"
                >
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p className="text-white/40 text-[10px] text-center mt-4 pt-3 border-t border-white/10">
        © {new Date().getFullYear()} Scale NXT. All Rights Reserved
      </p>
    </div>
  );
}

/* ─── Background used by both modals ─────────────────────────── */
function ModalBg() {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src="/images/landing-page-image.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-[#041E42]/78" />
    </div>
  );
}

/* ─── Close / Hamburger / Search icons ───────────────────────── */
const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const HamburgerIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" x2="15" y1="7" y2="7" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="13" y1="17" y2="17" />
  </svg>
);
const SearchIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" x2="16.65" y1="21" y2="16.65" />
  </svg>
);

/* ─── Main component ──────────────────────────────────────────── */
export default function Navbar() {
  const pathname = usePathname();
  const isWhoWeAre = pathname === "/who-we-are";

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  /* Lock scroll */
  useEffect(() => {
    document.body.style.overflow = drawerOpen || searchOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen, searchOpen]);

  /* Auto-focus search input */
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 300);
    }
  }, [searchOpen]);

  const openSearch = () => { setDrawerOpen(false); setSearchOpen(true); };
  const openDrawer = () => { setSearchOpen(false); setDrawerOpen(true); };
  const closeAll   = () => { setDrawerOpen(false); setSearchOpen(false); setSearchQuery(""); };

  return (
    <>
      {/* ── Top Navbar ── */}
      <nav className={`w-full py-5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] relative z-50 transition-colors ${isWhoWeAre ? "bg-black" : "bg-white"}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 flex items-center justify-between">

          {/* Mobile: Hamburger */}
          <div className="lg:hidden flex items-center w-1/3">
            <button id="mobile-menu-open" aria-label="Open menu" onClick={openDrawer} className={`p-2 -ml-2 transition-colors ${isWhoWeAre ? "text-white hover:text-white/80" : "text-[#041E42] hover:text-[#041E42]/80"}`}>
              <HamburgerIcon />
            </button>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center justify-center w-1/3 lg:w-auto">
            <Image src="/images/logo.png" alt="Scale NXT Logo" width={120} height={40} className={`object-contain w-[110px] h-[36px] md:w-[160px] md:h-[50px] transition-all ${isWhoWeAre ? "brightness-0 invert" : ""}`} priority />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              let linkClass = "";
              if (isWhoWeAre) {
                linkClass = isActive ? "text-white" : "text-white/60 hover:text-white";
              } else {
                linkClass = isActive ? "text-blue-600" : "text-[#041E42] hover:text-blue-600";
              }

              return (
                <Link key={link.name} href={link.href} className={`${linkClass} text-[16px] font-bold transition-colors`}>
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile: Search icon */}
          <div className="lg:hidden flex items-center justify-end w-1/3">
            <button id="mobile-search-open" aria-label="Open search" onClick={openSearch} className={`p-2 -mr-2 transition-colors ${isWhoWeAre ? "text-white hover:text-white/80" : "text-[#041E42] hover:text-[#041E42]/80"}`}>
              <SearchIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════
          Navigation Drawer (full-screen)
      ══════════════════════════════════ */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className={`fixed inset-0 z-[100] flex flex-col transition-opacity duration-300 ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <ModalBg />

        {/* White top bar */}
        <div className="flex items-center justify-between px-6 py-5 bg-white shrink-0">
          <button id="nav-drawer-close" aria-label="Close menu" onClick={closeAll} className="text-[#041E42]">
            <CloseIcon />
          </button>
          <Link href="/" onClick={closeAll}>
            <Image src="/images/logo.png" alt="Scale NXT" width={110} height={36} className="object-contain w-[110px] h-[36px]" />
          </Link>
          <button aria-label="Search" onClick={openSearch} className="text-[#041E42]">
            <SearchIcon />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col flex-1 overflow-y-auto justify-center py-4">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeAll}
              style={{ transitionDelay: drawerOpen ? `${50 + idx * 55}ms` : "0ms" }}
              className={`flex items-center justify-between px-6 py-5 text-white text-[17px] font-bold border-b border-white/10 hover:bg-white/8 transition-all duration-200 ${drawerOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"}`}
            >
              {link.name}
              <span className="text-white/50 text-[22px] font-light leading-none">›</span>
            </Link>
          ))}
        </nav>

        <ModalFooter onLinkClick={closeAll} />
      </div>

      {/* ══════════════════════════════════
          Search Modal (full-screen)
      ══════════════════════════════════ */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className={`fixed inset-0 z-[100] flex flex-col transition-opacity duration-300 ${searchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <ModalBg />

        {/* White top bar */}
        <div className="flex items-center justify-between px-6 py-5 bg-white shrink-0">
          <button aria-label="Open menu" onClick={openDrawer} className="text-[#041E42]">
            <HamburgerIcon />
          </button>
          <Link href="/" onClick={closeAll}>
            <Image src="/images/logo.png" alt="Scale NXT" width={110} height={36} className="object-contain w-[110px] h-[36px]" />
          </Link>
          <button id="search-modal-close" aria-label="Close search" onClick={closeAll} className="text-[#041E42]">
            <CloseIcon />
          </button>
        </div>

        {/* Search body — input at top, popular searches centred below */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Search input — pinned at top */}
          <div className="px-5 pt-6 pb-0 shrink-0">
            <div className="flex items-center gap-3 bg-[#0B2449] border border-white/20 rounded-lg px-4 py-3">
              <SearchIcon size={18} />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="What is your question?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder:text-white/50 text-[14px] focus:outline-none"
                style={{ color: "white" }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-white/50 hover:text-white transition-colors ml-1">
                  <CloseIcon />
                </button>
              )}
            </div>
          </div>

          {/* Popular searches — centred in the remaining space */}
          <div className="flex-1 overflow-y-auto flex flex-col justify-center px-5 py-6">
            <div
              className={`bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-5 border border-white/15 transition-all duration-300 ${searchOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
              style={{ transitionDelay: searchOpen ? "150ms" : "0ms" }}
            >
              <h3 className="text-white text-[15px] font-bold underline underline-offset-4 decoration-white/50 mb-4">
                Popular Searches
              </h3>
              <ul className="flex flex-col gap-[14px]">
                {popularSearches.map((q, i) => (
                  <li key={i}>
                    <button
                      onClick={() => setSearchQuery(q)}
                      className="text-white/80 text-[13px] text-left leading-snug hover:text-white transition-colors w-full"
                    >
                      {q}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <ModalFooter onLinkClick={closeAll} />
      </div>
    </>
  );
}
