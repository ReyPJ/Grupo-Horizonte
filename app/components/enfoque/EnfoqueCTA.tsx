'use client';
import BigButton from "@/app/components/bigButton";
import { useTranslations } from 'next-intl';

export default function EnfoqueCTA() {
    const t = useTranslations('Enfoque');
    const stats = t.raw('cta.stats');

    return (
        <div className="relative min-h-[70vh] flex items-center justify-center bg-no-repeat bg-cover"
             style={{backgroundImage: "url(/paneles.jpg)"}}>
            <div className="absolute inset-0 bg-gradient-to-r from-primaryBlue/95 via-primaryBlue/85 to-thirdGreen/80 z-0"></div>

            <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
                <div className="inline-block px-4 py-2 bg-secundaryYellow rounded-full mb-8">
                    <span className="text-primaryBlue font-bold text-sm uppercase tracking-wider">
                        {t('cta.badge')}
                    </span>
                </div>

                <h2 className="text-h1 md:text-[4rem] text-white font-bold mb-8 leading-tight">
                    {t('cta.title1')}<br className="hidden sm:block" />
                    {t('cta.title2')}
                </h2>

                <p className="text-h3 md:text-[1.5rem] text-white/95 mb-12 leading-relaxed">
                    {t('cta.description')}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                    <a href={"/proyectos"}>
                        <BigButton
                            textBefore={t('cta.cta1')}
                            textAfter={t('cta.cta1')}
                            textColor="white"
                            minWidth="260px"
                            maxWidth="300px"
                        />
                    </a>
                    <a href={"/contacto"}>
                        <BigButton
                            textBefore={t('cta.cta2')}
                            textAfter={t('cta.cta2')}
                            textColor="white"
                            minWidth="260px"
                            maxWidth="300px"
                        />
                    </a>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {stats.map((stat: { label: string; value: string }, index: number) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                        >
                            <div className="text-3xl font-bold text-secundaryYellow mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-white/90 uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}