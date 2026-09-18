import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, MessageCircle, Sun, Moon, Share2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { SocialShareModal } from './SocialShareModal';

interface NavbarProps {
  onOpenQuote: (defaultRoom?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollableHeight > 0) {
        const currentProgress = (window.scrollY / totalScrollableHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Featured Suites', href: '#featured-slider' },
    { name: 'Collections', href: '#collections' },
    { name: 'Bespoke Atelier', href: '#bespoke' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Heaven', href: '#why-us' },
    { name: 'Milestones', href: '#story' },
    { name: 'Showroom', href: '#showroom' },
  ];

  return (
    <>
      {/* Thin Gold Scroll Progress Bar fixed at top of screen */}
      <div
        id="scroll-progress-container"
        className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] pointer-events-none bg-stone-300/20 dark:bg-stone-800/30 overflow-hidden"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll depth progression"
      >
        <div
          id="scroll-progress-bar"
          className="h-full bg-gradient-to-r from-[#8C6239] via-[#C5A880] to-[#EBD5A9] shadow-[0_0_10px_rgba(197,168,128,0.7)] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/95 dark:bg-[#0B1617]/95 backdrop-blur-md shadow-sm border-b border-[#C5A880]/20 py-3.5'
            : 'bg-[#FAF8F5]/80 dark:bg-[#0B1617]/80 backdrop-blur-sm py-4.5 border-b border-stone-200/50 dark:border-stone-800/60'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="group flex flex-col items-start focus:outline-none">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#132629] dark:text-[#FAF8F5] group-hover:text-[#8C6239] dark:group-hover:text-[#C5A880] transition-colors leading-none">
              HEAVEN
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#8C6239] dark:text-[#C5A880] font-medium mt-1">
              Furniture Mart · Chattogram
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-[13px] font-medium text-[#2C221E]/80 dark:text-[#FAF8F5]/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#132629] dark:hover:text-white transition-colors relative py-1 link-luxury"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            
            {/* Single Unified Dark Mode Toggle Switch */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to daylight atmosphere' : 'Switch to evening atelier atmosphere'}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="relative p-2 rounded-full border border-stone-300 dark:border-stone-700 bg-white/60 dark:bg-[#162528] text-stone-700 dark:text-[#C5A880] hover:text-[#132629] dark:hover:text-white transition-all shadow-sm focus:outline-none focus:ring-1 focus:ring-[#C5A880]"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#C5A880] animate-spin-once" />
              ) : (
                <Moon className="w-4 h-4 text-[#132629]" />
              )}
            </button>

            {/* Direct Phone Line */}
            <a
              href="tel:+8801960481983"
              className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#132629] dark:text-[#FAF8F5] hover:text-[#8C6239] dark:hover:text-[#C5A880] transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-[#132629]/5 dark:bg-[#FAF8F5]/10 flex items-center justify-center text-[#132629] dark:text-[#FAF8F5]">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <span className="hidden xl:inline">+880 1960-481983</span>
            </a>

            {/* Social Share Button */}
            <button
              id="nav-share-btn"
              onClick={() => setIsShareModalOpen(true)}
              className="hidden sm:block p-2 text-stone-700 dark:text-[#FAF8F5]/80 hover:text-[#8C6239] dark:hover:text-[#C5A880] transition-colors"
              title="Share Studio & Preview Social Card"
              aria-label="Share Studio"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Request Quote Button with Luxury Animation */}
            <button
              id="nav-consultation-btn"
              onClick={() => onOpenQuote()}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#132629] dark:bg-[#C5A880] hover:bg-[#1B3236] dark:hover:bg-[#D4B78F] text-[#FAF8F5] dark:text-[#132629] text-xs font-semibold uppercase tracking-wider rounded-none shadow-sm btn-luxury"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] dark:text-[#132629]" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#132629] dark:text-[#FAF8F5] hover:text-[#8C6239] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] dark:bg-[#0E1A1C] border-b border-[#C5A880]/30 px-6 py-6 shadow-xl transition-all">
          <nav className="flex flex-col space-y-4 text-base font-medium text-[#2C221E] dark:text-[#FAF8F5]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-stone-200/50 dark:border-stone-800 text-[#132629] dark:text-[#FAF8F5] hover:text-[#8C6239] dark:hover:text-[#C5A880] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider">
              <span>Agrabad Showroom · Chattogram</span>
              <span className="text-[11px] font-medium text-[#8C6239] dark:text-[#C5A880]">
                Bespoke Atelier
              </span>
            </div>

            <a
              href="tel:+8801960481983"
              className="flex items-center gap-2.5 text-sm font-semibold text-[#132629] dark:text-[#FAF8F5]"
            >
              <Phone className="w-4 h-4 text-[#8C6239] dark:text-[#C5A880]" />
              <span>+880 1960-481983</span>
            </a>

            <a
              href="https://wa.me/8801960481983"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm font-semibold text-emerald-700 dark:text-emerald-400"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              id="mobile-nav-share-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsShareModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold uppercase tracking-wider border border-stone-300 dark:border-stone-700"
            >
              <Share2 className="w-4 h-4 text-[#8C6239] dark:text-[#C5A880]" />
              <span>Share Studio & Social Card</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full mt-2 py-3 bg-[#132629] dark:bg-[#C5A880] text-[#FAF8F5] dark:text-[#132629] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 btn-luxury"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] dark:text-[#132629]" />
            </button>
          </div>
        </div>
      )}

      {/* Studio Social Share / Open Graph Modal */}
      <SocialShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        title="Heaven Furniture Mart — Luxury & Bespoke Furniture Studio"
        category="Bespoke Interior Studio · Chattogram"
        woodType="Seasoned Chittagong Teak & Hardwoods"
        imageUrl="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
        description="Luxury & bespoke furniture studio in Agrabad, Chattogram. Handcrafted living, bedroom, dining, and custom furniture tailored to your space."
      />
    </header>
    </>
  );
};
