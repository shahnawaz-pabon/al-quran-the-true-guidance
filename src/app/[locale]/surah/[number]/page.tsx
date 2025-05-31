import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { readFileSync } from 'fs';
import path from 'path';

interface SurahDetailPageProps {
    params: {
        number: string;
        locale: string;
    };
}

export default async function SurahDetailPage({ params }: SurahDetailPageProps) {
    const t = await getTranslations('surah.detail');
    const surahNumber = parseInt(params.number);

    try {
        // Load the surah data from JSON file
        const surahData = JSON.parse(
            readFileSync(
                path.join(process.cwd(), 'src/data/surahs', `${surahNumber}.json`),
                'utf-8'
            )
        );

        return (
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold mb-2">
                        {t('title', { name: surahData.name.english })}
                    </h1>
                    <p className="text-muted-foreground">
                        {t('transliteration', { text: surahData.name.transliteration })}
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                        <div className="bg-accent px-3 py-1 rounded-full text-sm">
                            {t('revelationType')}:{' '}
                            <span className="font-medium">
                                {t(surahData.details.revelationType.toLowerCase())}
                            </span>
                        </div>
                        <div className="bg-accent px-3 py-1 rounded-full text-sm">
                            {t('versesCount')}:{' '}
                            <span className="font-medium">
                                {surahData.details.numberOfAyahs}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    {surahData.ayahs.map((ayah: any) => (
                        <div key={ayah.number} className="p-4 rounded-lg bg-card">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground">
                                        {ayah.number}
                                    </div>
                                    <h3 className="text-sm font-medium">
                                        {t('verseNumber', { number: ayah.number })}
                                    </h3>
                                </div>

                                <div className="text-right">
                                    <p className="text-2xl font-arabic mb-2 leading-loose" lang='ar'>
                                        {ayah.arabic}
                                    </p>
                                    <div className="mt-4">
                                        <h4 className="font-medium mb-1">{t('translation')}:</h4>
                                        {ayah.translations.map((translation: any) => (
                                            <div key={translation.language} className="mb-2 last:mb-0">
                                                <span className="text-sm font-medium capitalize">
                                                    {translation.language}:
                                                </span>{' '}
                                                <span className="text-muted-foreground">
                                                    {translation.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        notFound();
    }
}