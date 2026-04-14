'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Eye, Target, Award } from 'lucide-react';

export default function About() {
  const at = useTranslations('Index.about');
  const vt = useTranslations('Index.vision');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4"
            >
              {at('title')}
            </motion.h2>
            <motion.h3 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-black text-slate-950 leading-tight mb-8"
            >
              Building the Future of Global <br />
              <span className="text-gold-500">Commodity Trading.</span>
            </motion.h3>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <motion.p variants={itemVariants}>{at('p1')}</motion.p>
              <motion.p variants={itemVariants}>{at('p2')}</motion.p>
              <motion.p variants={itemVariants}>{at('p3')}</motion.p>
            </div>

            <motion.div 
              variants={itemVariants}
              className="mt-12 p-8 bg-slate-50 border border-slate-100 rounded-3xl flex items-center gap-6"
            >
              <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center text-slate-950 shrink-0">
                < Award className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-slate-950 text-xl">30+ Years Experience</h4>
                <p className="text-slate-500">Unrivaled expertise in international logistics and production.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Cards Section */}
          <div id="vision" className="grid gap-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group p-10 bg-slate-950 rounded-[2.5rem] text-white relative overflow-hidden"
            >
              <Eye className="w-12 h-12 text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h4 className="text-3xl font-bold mb-4">{vt('visionTitle')}</h4>
              <p className="text-white/60 text-lg leading-relaxed relative z-10">
                {vt('visionContent')}
              </p>
              <div className="absolute top-0 right-0 p-8 transform translate-x-1/2 -translate-y-1/2 bg-white/5 w-64 h-64 rounded-full blur-3xl group-hover:bg-gold-500/10 transition-colors" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-10 bg-gold-500 rounded-[2.5rem] text-slate-950 relative overflow-hidden"
            >
              <Target className="w-12 h-12 text-slate-950/80 mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h4 className="text-3xl font-bold mb-4">{vt('missionTitle')}</h4>
              <p className="text-slate-900/80 text-lg leading-relaxed relative z-10">
                {vt('missionContent')}
              </p>
              <div className="absolute top-0 right-0 p-8 transform translate-x-1/2 -translate-y-1/2 bg-black/5 w-64 h-64 rounded-full blur-3xl group-hover:bg-black/10 transition-colors" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
