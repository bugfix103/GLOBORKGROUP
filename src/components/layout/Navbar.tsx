'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import LocaleSwitcher from './LocaleSwitcher';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const t = useTranslations('Index.nav');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('about'), href: '#about' },
    { name: t('vision'), href: '#vision' },
    { name: t('commodities'), href: '#commodities' },
    { name: t('markets'), href: '#markets' },
    { name: t('legacy'), href: '#legacy' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled 
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-[72px] h-[72px] overflow-hidden transition-transform duration-500 group-hover:scale-110">
            <Image
              src="/globorkgroup1.png"
              alt="Globork Group Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-tighter text-white">
              GLOBORK <span className="text-gold-500">GROUP</span>
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-medium">
              30 Years of Excellence
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <div className="h-6 w-px bg-white/10" />
          <LocaleSwitcher />
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900 absolute top-full left-0 right-0 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-sm text-white/50">{t('selectLanguage')}</span>
                <LocaleSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
