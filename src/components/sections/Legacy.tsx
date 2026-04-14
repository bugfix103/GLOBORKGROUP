'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, Building2, Layers, ShieldCheck, Briefcase, Shovel } from 'lucide-react';

export default function Legacy() {
  const t = useTranslations('Index.legacy');

  const companies = [
    { name: t('companies.globork'), icon: Users },
    { name: t('companies.rhcc'), icon: Shovel },
    { name: t('companies.unity'), icon: Layers },
    { name: t('companies.tiger'), icon: ShieldCheck },
    { name: t('companies.biss'), icon: Briefcase },
    { name: t('companies.kbm'), icon: Building2 },
  ];

  return (
    <section id="legacy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-950 mb-6"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 max-w-3xl"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, idx) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 border border-slate-100 rounded-[2rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:border-gold-500/20 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gold-500 mb-6 shadow-sm group-hover:bg-gold-500 group-hover:text-white transition-all duration-500">
                <company.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-950 group-hover:text-gold-600 transition-colors">
                {company.name.split(' — ')[0]}
              </h4>
              <p className="text-slate-500 mt-2">
                {company.name.split(' — ')[1] || 'Holding Company'}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <p className="text-slate-500 text-sm max-w-2xl italic">
            "{t('footer')}"
          </p>
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                 <div className="bg-gold-500/20 w-full h-full animate-pulse" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-white bg-gold-500 flex items-center justify-center text-[10px] font-black">
              30+
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
