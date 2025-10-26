"use client"
import { FaClipboardList, FaHammer, FaCheckCircle, FaHandshake, FaCogs, FaChartLine, FaBolt, FaIndustry } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { useTranslations } from 'next-intl';

const iconsCivil = [FaClipboardList, FaHammer, MdEngineering, FaCogs, FaHandshake];
const iconsElectro = [FaClipboardList, FaHammer, FaChartLine, FaCheckCircle];
const iconsImbar = [FaClipboardList, FaIndustry, FaCheckCircle, FaHammer, FaBolt, FaChartLine, FaCogs];

export default function EnfoqueProcess() {
    const t = useTranslations('Enfoque');

    const civilProcess = (t.raw('process.civilProcess') as Array<{title: string, subtitle: string}>).map((item, i) => ({
        ...item,
        icon: iconsCivil[i]
    }));

    const electroProcess = (t.raw('process.electroProcess') as Array<{title: string, subtitle: string}>).map((item, i) => ({
        ...item,
        icon: iconsElectro[i]
    }));

    const imbarProcess = (t.raw('process.imbarProcess') as Array<{title: string, subtitle: string}>).map((item, i) => ({
        ...item,
        icon: iconsImbar[i]
    }));

    return (
        <>
            <style jsx>{`
                .process-card {
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .process-card:hover {
                    transform: translateY(-8px);
                }

                .process-number {
                    background: linear-gradient(135deg, #000C47, #0A8700);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .imbar-badge {
                    background: linear-gradient(135deg, #FF6B35, #FFA500);
                    animation: pulse 2s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.8; }
                }
            `}</style>

            <div className="bg-white py-20">
                <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h2 className="text-h1 text-primaryBlue mb-6">
                                {t('process.title')}
                            </h2>
                            <p className="text-p text-gray-700 leading-relaxed max-w-3xl mx-auto">
                                {t('process.description')}
                            </p>
                        </div>

                        {/* Obras Civiles - 4C */}
                        <div className="mb-20">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-primaryBlue to-thirdGreen rounded-2xl flex items-center justify-center">
                                    <MdEngineering className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-h2 text-primaryBlue font-bold">
                                        {t('process.civilWorks.title')}
                                    </h3>
                                    <p className="text-gray-600">
                                        {t('process.civilWorks.subtitle')}
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-5 gap-6">
                                {civilProcess.map((step, index) => (
                                    <div key={index} className="process-card relative">
                                        <div className="bg-bgMain rounded-2xl p-6 h-full border-2 border-transparent hover:border-secundaryYellow">
                                            <div className="text-5xl font-bold process-number mb-4">
                                                {index + 1}
                                            </div>
                                            <div className="w-12 h-12 bg-gradient-to-br from-secundaryYellow to-thirdGreen rounded-xl flex items-center justify-center mb-4">
                                                <step.icon className="w-6 h-6 text-primaryBlue" />
                                            </div>
                                            <h4 className="font-bold text-primaryBlue mb-2 text-sm">
                                                {step.title}
                                            </h4>
                                            <p className="text-xs text-gray-600">
                                                {step.subtitle}
                                            </p>
                                        </div>
                                        {index < civilProcess.length - 1 && (
                                            <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-secundaryYellow"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Proyectos Electromecánicos - 4C */}
                        <div className="mb-20">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-thirdGreen to-secundaryYellow rounded-2xl flex items-center justify-center">
                                    <FaCogs className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-h2 text-primaryBlue font-bold">
                                        {t('process.mechanicalElectrical.title')}
                                    </h3>
                                    <p className="text-gray-600">
                                        {t('process.mechanicalElectrical.description')}
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-4 gap-6">
                                {electroProcess.map((step, index) => (
                                    <div key={index} className="process-card relative">
                                        <div className="bg-bgMain rounded-2xl p-6 h-full border-2 border-transparent hover:border-thirdGreen">
                                            <div className="text-5xl font-bold process-number mb-4">
                                                {index + 1}
                                            </div>
                                            <div className="w-12 h-12 bg-gradient-to-br from-thirdGreen to-secundaryYellow rounded-xl flex items-center justify-center mb-4">
                                                <step.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <h4 className="font-bold text-primaryBlue mb-2 text-sm">
                                                {step.title}
                                            </h4>
                                            <p className="text-xs text-gray-600">
                                                {step.subtitle}
                                            </p>
                                        </div>
                                        {index < electroProcess.length - 1 && (
                                            <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-thirdGreen"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ⚡ NUEVO - Infraestructura Eléctrica - IMBAR */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                                    <FaBolt className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-h2 text-primaryBlue font-bold">
                                            {t('process.highVoltageInfra.title')}
                                        </h3>
                                        <span className="imbar-badge text-white text-xs font-bold px-3 py-1 rounded-full">
                                            {t('process.highVoltageInfra.badge')}
                                        </span>
                                    </div>
                                    <p className="text-gray-600">
                                        {t('process.highVoltageInfra.description')}
                                    </p>
                                </div>
                            </div>

                            {/* Stats rápidos de IMBAR */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                                {(t.raw('process.highVoltageInfra.stats') as string[]).map((stat: string, index: number) => (
                                    <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-4 text-center border border-orange-200">
                                        <p className="text-3xl font-bold text-orange-600 mb-1">{index === 0 ? '20+' : index === 1 ? '160+' : index === 2 ? '700' : '7,000'}</p>
                                        <p className="text-xs text-gray-600">{stat}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid md:grid-cols-7 gap-4">
                                {imbarProcess.map((step, index) => (
                                    <div key={index} className="process-card relative">
                                        <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-5 h-full border-2 border-transparent hover:border-orange-400 shadow-sm">
                                            <div className="text-4xl font-bold mb-3" style={{
                                                background: 'linear-gradient(135deg, #FF6B35, #FFA500)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text'
                                            }}>
                                                {index + 1}
                                            </div>
                                            <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-3 shadow-md">
                                                <step.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="font-bold text-primaryBlue mb-2 text-xs leading-tight">
                                                {step.title}
                                            </h4>
                                            <p className="text-[10px] text-gray-600 leading-tight">
                                                {step.subtitle}
                                            </p>
                                        </div>
                                        {index < imbarProcess.length - 1 && (
                                            <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400"></div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Info adicional de IMBAR */}
                            <div className="mt-8 bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-50 rounded-2xl p-6 border border-orange-200">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FaIndustry className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primaryBlue mb-2 text-lg">
                                            {t('process.manufacturing.title')}
                                        </h4>
                                        <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                            {t('process.manufacturing.description')}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {(t.raw('process.services') as string[]).map((service: string, index: number) => (
                                                <span key={index} className="text-xs bg-white px-3 py-1 rounded-full text-gray-700 border border-orange-200">
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}