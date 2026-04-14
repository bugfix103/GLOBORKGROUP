'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locales } from '@/i18n/request';
import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';
import { ChangeEvent, useTransition } from 'react';

export default function LocaleSwitcher() {
  const t = useTranslations('Index.nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    startTransition(() => {
      // Logic to replace the locale part of the pathname
      const segments = pathname.split('/');
      segments[1] = nextLocale;
      router.replace(segments.join('/'));
    });
  };

  const languageNames: Record<string, string> = {
    en: 'English',
    ar: 'العربية',
    hi: 'हिन्दी',
    ru: 'Русский',
    zh: '中文',
    ja: '日本語',
    ko: '한국어',
    es: 'Español',
    de: 'Deutsch',
    fr: 'Français'
  };

  return (
    <div className="relative flex items-center gap-2 group">
      <Globe className="w-5 h-5 text-gold-500 group-hover:rotate-12 transition-transform duration-300" />
      <select
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
        className={cn(
          "bg-transparent text-white/90 text-sm font-medium border-none focus:ring-0 cursor-pointer appearance-none pr-6",
          isPending && "opacity-50"
        )}
      >
        {locales.map((cur) => (
          <option key={cur} value={cur} className="bg-slate-900 text-white">
            {languageNames[cur]}
          </option>
        ))}
      </select>
      <div className="absolute right-0 pointer-events-none text-white/40 group-hover:text-gold-400 transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
