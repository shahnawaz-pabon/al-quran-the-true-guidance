// components/Navbar.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Moon, Sun, Menu } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/hooks/use-sidebar';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useEffect, useState } from 'react';

export default function Navbar({ locale }: { locale: string }) {
    const t = useTranslations('navbar');
    const { setTheme, resolvedTheme } = useTheme();
    const { toggle } = useSidebar();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between py-4">
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={toggle}
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">{t('toggleSidebar')}</span>
                    </Button>
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Quran Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                            priority
                        />
                        <h1 className="text-lg font-semibold">{t('title')}</h1>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <LanguageSwitcher locale={locale} />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                    >
                        {mounted ? (
                            <>
                                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            </>
                        ) : (
                            <div className="h-5 w-5" />
                        )}
                        <span className="sr-only">{t('toggleTheme')}</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}