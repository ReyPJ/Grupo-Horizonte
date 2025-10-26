import * as React from "react";
import BigButton from "@/app/components/bigButton";
import Image from "next/image";
import { FaRocket, FaEye, FaLeaf, FaStar, FaHeart, FaUsers, FaChartLine, FaHandshake } from "react-icons/fa";
import { useTranslations } from 'next-intl';

const iconMap: Record<string, any> = {
    innovacion: FaLeaf,
    sostenibilidad: FaStar,
    calidad: FaHeart,
    responsabilidad: FaUsers,
    equipo: FaUsers,
    proceso: FaChartLine,
    alianzas: FaHandshake
};

export default function EnfoqueMegaMenu() {
    const t = useTranslations('EnfoqueMegaMenu');
    const [activeTab, setActiveTab] = React.useState<'cultura' | 'proceso'>('cultura');

    const valores = (t.raw('valores') as Array<{
        key: string;
        title: string;
    }>).map(v => ({
        ...v,
        icon: iconMap[v.key] || FaLeaf
    }));

    const capacidades = (t.raw('capacidades') as Array<{
        key: string;
        title: string;
    }>).map(c => ({
        ...c,
        icon: iconMap[c.key] || FaUsers
    }));

    return (
        <div className="w-full py-6 px-6 md:px-12 lg:px-20 bg-white">
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left column: intro + highlights */}
                <div className="w-full lg:w-1/3 lg:pr-10 lg:border-r lg:border-gray-200">
                    <div className="flex flex-col gap-6 lg:gap-10">
                        <h3 className="text-h3 text-primaryBlue">{t('title')}</h3>
                        <p className="text-p text-gray-700 leading-relaxed">
                            {t('description')}
                        </p>
                        <a href={"/enfoque"}>
                            <BigButton
                                textBefore={t('ctaButton')}
                                textAfter={t('ctaButton')}
                                minWidth="200px"
                                maxWidth="240px"
                            />
                        </a>
                    </div>

                    {/* Mission & Vision Cards */}
                    <div className="flex flex-col gap-4 mt-8">
                        <div className="bg-gradient-to-br from-primaryBlue/5 to-thirdGreen/5 p-6 rounded-2xl border-l-4 border-primaryBlue hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <FaRocket className="w-6 h-6 text-primaryBlue" />
                                <h4 className="font-bold text-primaryBlue">{t('missionTitle')}</h4>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                {t('missionText')}
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-thirdGreen/5 to-secundaryYellow/5 p-6 rounded-2xl border-l-4 border-thirdGreen hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <FaEye className="w-6 h-6 text-thirdGreen" />
                                <h4 className="font-bold text-thirdGreen">{t('visionTitle')}</h4>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                {t('visionText')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right column: tabs */}
                <div className="w-full lg:w-2/3 lg:pl-10">
                    <div className="flex items-center gap-8 border-b border-gray-200">
                        <button
                            className={`${activeTab === 'cultura' ? 'text-primaryBlue border-primaryBlue' : 'text-gray-500 border-transparent'} uppercase tracking-widest text-[13px] py-4 border-b-2 transition-colors duration-300`}
                            onClick={() => setActiveTab('cultura')}
                        >
                            {t('tabCultura')}
                        </button>
                        <button
                            className={`${activeTab === 'proceso' ? 'text-primaryBlue border-primaryBlue' : 'text-gray-500 border-transparent'} uppercase tracking-widest text-[13px] py-4 border-b-2 transition-colors duration-300`}
                            onClick={() => setActiveTab('proceso')}
                        >
                            {t('tabCapacidades')}
                        </button>
                    </div>

                    <div className="pt-6">
                        {activeTab === 'cultura' && (
                            <div>
                                <h4 className="text-xl font-bold text-primaryBlue mb-6">{t('valoresTitle')}</h4>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                    {valores.map((valor) => (
                                        <div key={valor.key} className="group cursor-pointer flex flex-col items-center text-center">
                                            <div className="w-20 h-20 bg-gradient-to-br from-primaryBlue to-thirdGreen rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                                <valor.icon className="w-10 h-10 text-white" />
                                            </div>
                                            <p className="text-sm font-semibold text-gray-900 group-hover:text-primaryBlue transition-colors">
                                                {valor.title}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'proceso' && (
                            <div>
                                <h4 className="text-xl font-bold text-primaryBlue mb-6">{t('capacidadesTitle')}</h4>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {capacidades.map((capacidad) => (
                                        <div key={capacidad.key} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-primaryBlue hover:shadow-xl transition-all duration-300 cursor-pointer">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-14 h-14 bg-gradient-to-br from-primaryBlue to-thirdGreen rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                    <capacidad.icon className="w-7 h-7 text-white" />
                                                </div>
                                                <h5 className="font-bold text-gray-900 group-hover:text-primaryBlue transition-colors">
                                                    {capacidad.title}
                                                </h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
