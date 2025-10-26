'use client';
import { useTranslations } from 'next-intl';

export default function EnfoqueHero() {
    const t = useTranslations('Enfoque');

    return (
        <div className="relative min-h-[75vh] flex items-center justify-center bg-no-repeat bg-cover"
             style={{backgroundImage: "url(/fondopaneles1.jpg)"}}>
            <div className="absolute inset-0 bg-gradient-to-r from-primaryBlue/90 via-primaryBlue/70 to-transparent z-0"></div>
            <div className="relative z-20 text-left px-6 max-w-7xl mx-auto w-full">
                <div className="max-w-3xl">
                    <div className="inline-block px-4 py-2 bg-secundaryYellow/90 backdrop-blur-sm rounded-full mb-6">
                        <span className="text-primaryBlue font-bold text-sm uppercase tracking-wider">
                            {t('hero.badge')}
                        </span>
                    </div>
                    <h1 className="text-h1 md:text-[4.5rem] lg:text-[5.5rem] text-white font-bold mb-6 leading-tight">
                        {t('hero.title1')}<br />
                        {t('hero.title2')}
                    </h1>
                    <p className="text-h3 md:text-[1.75rem] text-white/95 leading-relaxed mb-8">
                        {t('hero.description')}
                    </p>
                    <div className="flex items-center gap-8 text-white">
                        <div className="border-l-4 border-secundaryYellow pl-6">
                            <div className="text-3xl font-bold mb-1">{t('hero.stat1Value')}</div>
                            <div className="text-sm opacity-90">{t('hero.stat1Label')}</div>
                        </div>
                        <div className="border-l-4 border-secundaryYellow pl-6">
                            <div className="text-3xl font-bold mb-1">{t('hero.stat2Value')}</div>
                            <div className="text-sm opacity-90">{t('hero.stat2Label')}</div>
                        </div>
                        <div className="border-l-4 border-secundaryYellow pl-6">
                            <div className="text-3xl font-bold mb-1">{t('hero.stat3Value')}</div>
                            <div className="text-sm opacity-90">{t('hero.stat3Label')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}