'use client';

import {useRouter} from '@/i18n/navigation';
import {useLocale} from 'next-intl';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLanguage = (nextLocale: 'en' | 'fr') => {
    const newPath = `/${nextLocale}${pathname}`.replace('/fr/', '/');
    router.replace(newPath);
  };

  return (
    <div className="flex gap-2 text-sm">
      <button
        onClick={() => changeLanguage('fr')}
        className={locale === 'fr' ? 'text-white font-semibold' : 'text-white/70 hover:text-white'}
      >
        FR
      </button>
      <span className="text-white/50">|</span>
      <button
        onClick={() => changeLanguage('en')}
        className={locale === 'en' ? 'text-white font-semibold' : 'text-white/70 hover:text-white'}
      >
        EN
      </button>
    </div>
  );
}
