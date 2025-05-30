// i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'ar'] as const;
export type Locale = typeof locales[number];

export const localeNames = {
    en: 'English',
    ar: 'العربية'
} as const;

export const routing = defineRouting({
    locales,
    defaultLocale: 'en'
});