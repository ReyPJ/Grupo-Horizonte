'use client';
import { FaRocket, FaEye, FaHeart, FaLeaf, FaStar, FaUsers } from "react-icons/fa";
import { useTranslations } from 'next-intl';

export default function EnfoqueMVV() {
    const t = useTranslations('Enfoque');
    const values = t.raw('mvv.values');

    return (
        <>
            <style jsx>{`
                .mvv-card {
                    position: relative;
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    background: linear-gradient(135deg, rgba(0, 12, 71, 0.03), rgba(206, 211, 0, 0.03));
                }

                .mvv-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 6px;
                    background: linear-gradient(90deg, #CED300, #0A8700);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .mvv-card:hover::before {
                    transform: scaleX(1);
                }

                .mvv-card:hover {
                    transform: translateY(-12px);
                    box-shadow: 0 24px 48px rgba(0, 12, 71, 0.2);
                }

                .value-card {
                    transition: all 0.5s ease;
                }

                .value-card:hover {
                    transform: scale(1.05);
                }
            `}</style>

            <div className="bg-bgMain py-20">
                <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                    {/* Header */}
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 id={"ADN"} className="text-h1 text-primaryBlue mb-6">
                            {t('mvv.title')}
                        </h2>
                        <p className="text-p text-gray-700 leading-relaxed">
                            {t('mvv.subtitle')}
                        </p>
                        <div className="w-24 h-1 bg-secundaryYellow mx-auto mt-6 rounded-full"></div>
                    </div>

                    {/* Misión y Visión */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {/* Misión */}
                        <div className="mvv-card bg-white rounded-3xl p-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-primaryBlue to-thirdGreen rounded-2xl flex items-center justify-center">
                                    <FaRocket className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-primaryBlue">{t('mvv.mission.label')}</h3>
                            </div>
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                {t('mvv.mission.content')}
                            </p>
                        </div>

                        {/* Visión */}
                        <div className="mvv-card bg-white rounded-3xl p-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-thirdGreen to-secundaryYellow rounded-2xl flex items-center justify-center">
                                    <FaEye className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-primaryBlue">{t('mvv.vision.label')}</h3>
                            </div>
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                {t('mvv.vision.content')}
                            </p>
                        </div>
                    </div>

                    {/* Valores */}
                    <div className="bg-white rounded-3xl p-10 lg:p-16">
                        <div className="text-center mb-12">
                            <h3 className="text-h2 text-primaryBlue mb-4">{t('mvv.valuesTitle')}</h3>
                            <p className="text-gray-700">
                                {t('mvv.valuesDescription')}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: FaLeaf,
                                    color: "from-primaryBlue to-thirdGreen"
                                },
                                {
                                    icon: FaStar,
                                    color: "from-thirdGreen to-secundaryYellow"
                                },
                                {
                                    icon: FaHeart,
                                    color: "from-secundaryYellow to-primaryBlue"
                                },
                                {
                                    icon: FaUsers,
                                    color: "from-primaryBlue to-secundaryYellow"
                                }
                            ].map((valueIcon, index) => {
                                const value = values[index];
                                return (
                                    <div key={index} className="value-card text-center">
                                        <div className={`w-20 h-20 bg-gradient-to-br ${valueIcon.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                                            <valueIcon.icon className="w-10 h-10 text-white" />
                                        </div>
                                        <h4 className="text-xl font-bold text-primaryBlue mb-3">
                                            {value.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}