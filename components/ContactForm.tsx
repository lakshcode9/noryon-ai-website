'use client';

import {useTranslations} from 'next-intl';
import {StarBorder} from '@/components/ui/star-border';

export default function ContactForm() {
  const t = useTranslations();

  return (
    <form
      className="rounded-xl bg-secondary ring-1 ring-white/10 p-6 space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        const payload = {
          name: String(formData.get('name') || ''),
          email: String(formData.get('email') || ''),
          message: String(formData.get('message') || '')
        };
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          form.reset();
          alert(t('contact.form.submit') + ' ✓');
        } else {
          const data = await res.json().catch(() => ({}));
          alert(data?.error || 'Submission failed');
        }
      }}
    >
      <div>
        <label className="block text-sm text-white/80 mb-1">{t('contact.form.name')}</label>
        <input className="w-full rounded-md bg-secondary ring-1 ring-white/10 px-3 py-2 text-sm placeholder:text-white/60 focus:outline-none" placeholder={t('contact.form.namePlaceholder')} name="name" required suppressHydrationWarning />
      </div>
      <div>
        <label className="block text-sm text-white/80 mb-1">{t('contact.form.email')}</label>
        <input type="email" className="w-full rounded-md bg-secondary ring-1 ring-white/10 px-3 py-2 text-sm placeholder:text-white/60 focus:outline-none" placeholder={t('contact.form.emailPlaceholder')} name="email" required suppressHydrationWarning />
      </div>
      <div>
        <label className="block text-sm text-white/80 mb-1">{t('contact.form.message')}</label>
        <textarea className="w-full min-h-28 rounded-md bg-secondary ring-1 ring-white/10 px-3 py-2 text-sm placeholder:text-white/60 focus:outline-none" placeholder={t('contact.form.messagePlaceholder')} name="message" suppressHydrationWarning />
      </div>
      <StarBorder as="button" type="submit" color="#00888a" className="w-full text-center" suppressHydrationWarning>
        {t('contact.form.submit')}
      </StarBorder>
    </form>
  );
}
