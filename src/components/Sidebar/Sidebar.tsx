// components/Sidebar/Sidebar.tsx
'use client';

import { useTranslations } from 'next-intl';
import { useSidebar } from '@/hooks/use-sidebar';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { BookOpen, Bookmark, Search, Layers, Menu } from 'lucide-react';
import SidebarItem from './SidebarItem';

type SidebarProps = {
    locale: string;
};

export default function Sidebar({ locale }: SidebarProps) {
    const t = useTranslations('Sidebar');
    const { isOpen, toggle } = useSidebar();

    return (
        <>
            {/* Mobile toggle button */}
            <button
                onClick={toggle}
                className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-background border"
            >
                <Menu className="h-5 w-5" />
            </button>

            {/* Sidebar */}
            <motion.aside
                initial={{ width: 80 }}
                animate={{
                    width: isOpen ? 280 : 80,
                    left: 0 // Ensure proper positioning
                }}
                className={cn(
                    'fixed top-0 left-0 flex flex-col h-full border-r bg-background transition-[width] duration-300 ease-in-out overflow-hidden z-40',
                    isOpen ? 'w-[280px]' : 'w-20'
                )}
            >
                <div className="flex flex-col h-full p-2">
                    {/* Toggle button inside sidebar */}
                    <button
                        onClick={toggle}
                        className="p-2 mb-2 rounded-md hover:bg-accent self-end"
                    >
                        <Menu className="h-5 w-5" />
                    </button>

                    <div className="p-2 pb-0">
                        {isOpen ? (
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <input
                                    placeholder={t('search')}
                                    className="w-full bg-background pl-8 p-2 rounded-md border"
                                />
                            </div>
                        ) : (
                            <div className="flex justify-center p-2">
                                <Search className="h-5 w-5" />
                            </div>
                        )}
                    </div>

                    <nav className="flex-1 mt-4 space-y-1">
                        <SidebarItem
                            icon={<BookOpen className="h-5 w-5" />}
                            label={t('surahs')}
                            isOpen={isOpen}
                            items={Array.from({ length: 114 }, (_, i) => ({
                                id: i + 1,
                                label: `Surah ${i + 1}`,
                                href: `/${locale}/surah/${i + 1}`,
                            }))}
                        />

                        <SidebarItem
                            icon={<Layers className="h-5 w-5" />}
                            label={t('juz')}
                            isOpen={isOpen}
                            items={Array.from({ length: 30 }, (_, i) => ({
                                id: i + 1,
                                label: `Juz ${i + 1}`,
                                href: `/${locale}/juz/${i + 1}`,
                            }))}
                        />

                        <SidebarItem
                            icon={<Bookmark className="h-5 w-5" />}
                            label={t('hizb')}
                            isOpen={isOpen}
                            items={Array.from({ length: 60 }, (_, i) => ({
                                id: i + 1,
                                label: `Hizb ${i + 1}`,
                                href: `/${locale}/hizb/${i + 1}`,
                            }))}
                        />
                    </nav>
                </div>
            </motion.aside>
        </>
    );
}