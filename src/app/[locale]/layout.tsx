import { Inter, Noto_Sans_Arabic } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import '../../styles/globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';
import { SidebarProvider } from '@/hooks/use-sidebar';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const notoSansArabic = Noto_Sans_Arabic({
    subsets: ['arabic'],
    variable: '--font-arabic',
});

export const metadata: Metadata = {
    title: 'The Holy Quran',
    description: 'Read the Holy Quran with translations and tafsir',
};

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const messages = await getMessages();
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                // forcedTheme="light"
                enableSystem
                // disableTransitionOnChange
            >
                <SidebarProvider>
                    <div className="flex h-screen overflow-hidden">
                        <Sidebar locale={locale} />
                        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                            <Navbar locale={locale} />
                            <main className="p-4 md:p-6">{children}</main>
                        </div>
                    </div>
                </SidebarProvider>
            </ThemeProvider>
        </NextIntlClientProvider>
    );
}