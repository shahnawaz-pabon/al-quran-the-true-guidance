// components/LanguageSwitcher.tsx
'use client';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { locales, localeNames } from '@/i18n/routing';
import { useState } from 'react';

export default function LanguageSwitcher({ locale }: { locale: string }) {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const switchLocale = (newLocale: string) => {
        setOpen(false);
        router.replace(`/${newLocale}`);
    };

    return (
        <div className="relative">
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="gap-1"
                    onClick={() => setOpen(!open)}
                >
                    {locale.toUpperCase()}
                    <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
            </DropdownMenuTrigger>
            {open && (
                <DropdownMenuContent
                    align="end"
                    onClose={() => setOpen(false)}
                >
                    {locales.map((loc) => (
                        <DropdownMenuItem
                            key={loc}
                            onClick={() => switchLocale(loc)}
                            className={loc === locale ? 'opacity-50 cursor-not-allowed' : ''}
                        >
                            <span>
                                {localeNames[loc]} ({loc.toUpperCase()})
                            </span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            )}
        </div>
    );
}