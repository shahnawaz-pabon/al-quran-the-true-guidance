// src/app/[locale]/page.tsx


import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import surahList from '@/data/surahs.json';

export default async function Home({
  params, // Destructure locale directly from params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('surah.list');

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {t('title')}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {surahList.map((surah) => (
          <Link
            key={surah.number}
            href={`/${locale}/surah/${surah.number}`}
            className="p-4 border rounded-lg hover:bg-accent transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground">
                {surah.number}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-medium truncate">
                  {surah.englishName} ({surah.number})
                </h2>
                <p className="text-sm text-muted-foreground truncate">
                  {surah.englishNameTranslation}
                </p>
                <div className="mt-1 flex items-center gap-2 text-xs">
                  <span className="bg-secondary px-2 py-1 rounded">
                    {t('revelationType')}:{' '}
                    {t(surah.revelationType.toLowerCase())}
                  </span>
                  <span className="bg-secondary px-2 py-1 rounded">
                    {t('versesCount', { count: surah.numberOfAyahs })}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-2 text-right text-xl font-arabic" lang='ar'>
              {surah.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}