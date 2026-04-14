'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ShoppingCart, Wheat, Droplets, Leaf, Globe2, MoveRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Commodities() {
  const t = useTranslations('Index.commodities');
  const mt = useTranslations('Index.markets');

  const commodities = [
    { title: t('sugar'), icon: ShoppingCart, color: "bg-blue-500" },
    { title: t('flour'), icon: Wheat, color: "bg-amber-500" },
    { title: t('soy'), icon: Leaf, color: "bg-emerald-500" },
    { title: t('fuel'), icon: Droplets, color: "bg-slate-700" },
    { title: t('grains'), icon: Globe2, color: "bg-orange-500" },
  ];

  return (
    <section id="commodities" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-950 mb-4"
          >
            {t('title')}
          </motion.h2>
          <div className="w-24 h-1.5 bg-gold-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-24">
          {commodities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300", item.color)}>
                <item.icon className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-slate-950">{item.title}</h4>
            </motion.div>
          ))}
        </div>

        <div id="markets" className="relative group">
          <div className="absolute inset-0 bg-gold-500 rounded-[3rem] transform rotate-1 group-hover:rotate-0 transition-transform duration-500" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-slate-950 text-white rounded-[3rem] p-12 lg:p-20 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                  {mt('title')}
                </span>
                <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                  Global Reach. <br />
                  <span className="text-white/40">Local Expertise.</span>
                </h3>
                <p className="text-white/60 text-lg mb-8 max-w-lg">
                  Connecting producers from Latin America and India to the heart of Central Asia and Europe.
                </p>
                <div className="flex flex-wrap gap-4">
                  {mt('regions').split(',').map((region) => (
                    <span key={region} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium">
                      {region.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center text-slate-950">
                    <Globe2 className="w-6 h-6" />
                  </div>
                  <h5 className="text-xl font-bold">{mt('routeTitle')}</h5>
                </div>
                <p className="text-white/70 mb-8 leading-relaxed">
                  {mt('routeContent')}
                </p>
                <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5">
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Origin</p>
                    <p className="font-bold">INDIA</p>
                  </div>
                  <MoveRight className="text-gold-500 w-8 h-8 animate-pulse" />
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Destination</p>
                    <p className="font-bold">AFGHANISTAN</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Map Graphic Placeholder */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.05] pointer-events-none scale-150">
              <Globe2 className="w-[800px] h-[800px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
