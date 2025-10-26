import * as React from "react";
import BigButton from "@/app/components/bigButton";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function ProjectsMegaMenu() {
    const t = useTranslations('ProjectsMegaMenu');
    const [activeTab, setActiveTab] = React.useState<'mercado' | 'region'>('mercado');

    const mercados = (t.raw('mercados') as Array<{
        key: string;
        title: string;
        empresa: string;
        badge?: string;
    }>).map(m => ({
        ...m,
        img: m.key === 'eolica' ? '/eolico2.jpg' :
             m.key === 'fotovoltaica' ? '/paneles.jpg' :
             m.key === 'construccion' ? '/Grua1.jpg' :
             m.key === 'subestaciones' ? '/LineasDeTransmisionElectrica.jpg' :
             m.key === 'transmision' ? '/LineasDeTransmisionElectrica.jpg' :
             m.key === 'fabricacion' ? '/obras1.jpg' :
             m.key === 'mantenimiento' ? '/RehabilatacionSubestacionesPeru.jpg' :
             '/turbinas_4c_nucleologo.jpg'
    }));

    const regiones = (t.raw('regiones') as Array<{
        key: string;
        title: string;
        proyectos: string;
    }>).map(r => ({
        ...r,
        img: r.key === 'mx' ? '/Secretaria.jpg' :
             r.key === 'pe' ? '/RehabilatacionSubestacionesPeru.jpg' :
             '/obras1.jpg'
    }));

    return (
        <div className={"w-full py-6 px-6 md:px-12 lg:px-20 bg-white"}>
            <style jsx>{`
                .empresa-badge {
                    font-size: 9px;
                    background: linear-gradient(135deg, #000C47, #0A8700);
                    color: white;
                    padding: 2px 8px;
                    border-radius: 9999px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .imbar-badge {
                    background: linear-gradient(135deg, #FF6B35, #FFA500);
                }

                .capacity-badge {
                    font-size: 10px;
                    background: linear-gradient(135deg, #CED300, #0A8700);
                    color: #000C47;
                    padding: 3px 10px;
                    border-radius: 9999px;
                    font-weight: 800;
                }
            `}</style>

            <div className={"flex flex-col lg:flex-row gap-10"}>
                {/* Left column: intro + blog */}
                <div className={"w-full lg:w-1/3 lg:pr-10 lg:border-r lg:border-gray-200"}>
                    <div className={"flex flex-col gap-6 lg:gap-10"}>
                        <div>
                            <h3 className={"text-h3 text-primaryBlue mb-4"}>
                                {t('title')}
                            </h3>
                            <p className={"text-p text-gray-600 mb-6"}>
                                {t('subtitle')}
                            </p>
                            <a href={"/proyectos"}>
                                <BigButton
                                    textBefore={t('title')}
                                    textAfter={t('title')}
                                    minWidth={"180px"}
                                    maxWidth={"220px"}
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right column: mercados / regiones */}
                <div className={"w-full lg:w-2/3 lg:pl-10"}>
                    <div className={"flex items-center gap-8 border-b border-gray-200 mb-6"}>
                        <button
                            className={`${activeTab === 'mercado' ? 'text-primaryBlue border-primaryBlue' : 'text-gray-500 border-transparent'} uppercase tracking-widest text-[13px] py-4 border-b-2 transition-colors duration-300`}
                            onClick={() => setActiveTab('mercado')}
                        >
                            {t('tabMercados')}
                        </button>
                        <button
                            className={`${activeTab === 'region' ? 'text-primaryBlue border-primaryBlue' : 'text-gray-500 border-transparent'} uppercase tracking-widest text-[13px] py-4 border-b-2 transition-colors duration-300`}
                            onClick={() => setActiveTab('region')}
                        >
                            {t('tabRegiones')}
                        </button>
                    </div>

                    {activeTab === 'mercado' && (
                        <div className={"grid grid-cols-2 md:grid-cols-4 gap-4"}>
                            {mercados.map((mercado) => (
                                <div
                                    key={mercado.key}
                                    className={"group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"}
                                >
                                    <div className={"relative h-40"}>
                                        <Image
                                            src={mercado.img}
                                            alt={mercado.title}
                                            fill
                                            className={"object-cover group-hover:scale-110 transition-transform duration-500"}
                                        />
                                        <div className={"absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"}></div>
                                        {mercado.badge && (
                                            <div className={"absolute top-3 right-3 capacity-badge"}>
                                                {mercado.badge}
                                            </div>
                                        )}
                                    </div>
                                    <div className={"absolute bottom-0 left-0 right-0 p-3"}>
                                        <h4 className={"text-white font-bold text-xs mb-1"}>
                                            {mercado.title}
                                        </h4>
                                        <span className={"empresa-badge"}>
                                            {mercado.empresa}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'region' && (
                        <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
                            {regiones.map((region) => (
                                <div
                                    key={region.key}
                                    className={"group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"}
                                >
                                    <div className={"relative h-52"}>
                                        <Image
                                            src={region.img}
                                            alt={region.title}
                                            fill
                                            className={"object-cover group-hover:scale-110 transition-transform duration-500"}
                                        />
                                        <div className={"absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"}></div>
                                    </div>
                                    <div className={"absolute bottom-0 left-0 right-0 p-4"}>
                                        <h4 className={"text-white font-bold text-lg mb-2"}>
                                            {region.title}
                                        </h4>
                                        <p className={"text-secundaryYellow text-sm font-semibold"}>
                                            {region.proyectos}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
