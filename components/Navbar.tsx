"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const progress = Math.min(window.scrollY / 1500, 1);
        navRef.current.style.setProperty('--scroll-p', progress.toString());
      }
    };
    
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={navRef} className="nav">
      <div className="container inner">
        {/* Brand Logo Link */}
        <Link href="/#home" className="logo-link" aria-label="Asam Express Cargo Movers">
          <Logo />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navlinks">
          <Link href="/" className="navlink-item">
            Home
          </Link>
          <Link href="/services" className="navlink-item">
            Services
          </Link>
          <Link href="/about" className="navlink-item">
            About
          </Link>
          <Link href="/how-it-works" className="navlink-item">
            How It Works
          </Link>
          <button
            className="navcta"
            onClick={() => window.dispatchEvent(new Event("openQuoteModal"))}
          >
            Get Assam ⇄ Pune Quote ↗
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/how-it-works"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <button
              className="navcta"
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new Event("openQuoteModal"));
              }}
              style={{ textAlign: "center", marginTop: "8px" }}
            >
              Get Assam ⇄ Pune Quote ↗
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
