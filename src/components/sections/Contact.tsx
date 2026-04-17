'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const t = useTranslations('Index.contact');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/dubai.jpg" alt="" fill className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80" />
      </div>
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-8"
            >
              Let's Trade <br /> 
              <span className="text-gold-500">Together.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-xl mb-12 max-w-md"
            >
              Get in touch with our Dubai headquarters to discuss global commodity opportunities and partnerships.
            </motion.p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-slate-950 transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white/40 uppercase tracking-widest">{t('address')}</p>
                  <p className="text-xl font-medium">Dubai Multi Commodities Centre (DMCC)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-slate-950 transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white/40 uppercase tracking-widest">Email</p>
                  <p className="text-xl font-medium">sales@globork.group</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center text-slate-950 mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-3xl font-bold mb-4">{t('form.success')}</h4>
                <p className="text-white/60 text-lg">Our team will contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label className="block text-sm font-bold text-white/40 uppercase tracking-widest mb-3">{t('form.name')}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white/40 uppercase tracking-widest mb-3">{t('form.email')}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white/40 uppercase tracking-widest mb-3">{t('form.message')}</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Describe your inquiry..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-gold-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-400 text-slate-950 font-black py-5 rounded-2xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest"
                >
                  {t('form.send')}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col items-center gap-8">
          <div className="relative w-[100px] h-[100px]">
            <Image
              src="/globorkgroup1.png"
              alt="Globork Group Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-extrabold tracking-tighter text-white">
            GLOBORK <span className="text-gold-500">GROUP</span>
          </span>
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Globork Group. Registered in DMCC, Dubai. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
