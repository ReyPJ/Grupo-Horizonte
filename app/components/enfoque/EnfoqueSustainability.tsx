'use client';
import Image from "next/image";
import {FaSolarPanel, FaRecycle, FaTint, FaLeaf, FaChartLine, FaHandHoldingHeart} from "react-icons/fa";
import { useTranslations } from 'next-intl';

export default function EnfoqueSustainability() {
    const t = useTranslations('Enfoque');
    const pillars = t.raw('sustainability.pillars');
    const commitments = t.raw('sustainability.commitments');

    return (
        <div className="bg-bgMain py-20 overflow-hidden">
            <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section with Image */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                        <div>
                            <div
                                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-thirdGreen/20 to-thirdGreen/10 rounded-full mb-6 backdrop-blur-sm">
                                <span className="text-thirdGreen font-bold text-sm uppercase tracking-wider">
                                    {t('sustainability.badge')}
                                </span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primaryBlue mb-6 leading-tight">
                                {t('sustainability.title')}
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                {t('sustainability.intro')}
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {t('sustainability.international')}
                            </p>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/turbinas4.jpg"
                                    alt="Sostenibilidad"
                                    width={1200}
                                    height={800}
                                    className="w-full h-[450px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Gradient Overlay on Hover */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-thirdGreen/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Corner Accent */}
                                <div
                                    className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-thirdGreen rounded-tr-3xl opacity-60"></div>
                            </div>

                            {/* Decorative Background - Contained */}
                            <div
                                className="absolute -bottom-4 -right-4 w-3/4 h-3/4 bg-gradient-to-br from-thirdGreen/15 via-secundaryYellow/10 to-transparent rounded-3xl -z-10 blur-3xl"></div>
                        </div>
                    </div>

                    {/* Sustainability Pillars */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                        {[
                            {
                                icon: FaSolarPanel,
                                gradient: "from-thirdGreen to-thirdGreen/80"
                            },
                            {
                                icon: FaRecycle,
                                gradient: "from-secundaryYellow to-secundaryYellow/80"
                            },
                            {
                                icon: FaTint,
                                gradient: "from-primaryBlue to-primaryBlue/80"
                            }
                        ].map((pillarIcon, index) => {
                            const pillar = pillars[index];
                            return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Top accent line */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-thirdGreen to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>

                                <div
                                    className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${pillarIcon.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                                    <pillarIcon.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-primaryBlue mb-3">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-4 text-sm lg:text-base">
                                    {pillar.description}
                                </p>
                                <div className="flex items-center gap-2">
                                    <div
                                        className="h-1 w-12 bg-gradient-to-r from-secundaryYellow to-transparent rounded-full"></div>
                                    <div className="text-secundaryYellow font-bold text-sm">
                                        {pillar.number}
                                    </div>
                                </div>
                            </div>
                            );
                        })}
                    </div>

                    {/* Additional Commitments */}
                    <div className="relative bg-white rounded-3xl p-8 lg:p-16 shadow-xl">
                        {/* Decorative corner elements */}
                        <div
                            className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-thirdGreen/20 rounded-tl-3xl"></div>
                        <div
                            className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-secundaryYellow/20 rounded-br-3xl"></div>

                        <div className="text-center mb-12">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primaryBlue mb-4">
                                {t('sustainability.commitmentsTitle')}
                            </h3>
                            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                                {t('sustainability.commitmentsSubtitle')}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                            {[
                                {
                                    icon: FaLeaf,
                                    color: "text-thirdGreen"
                                },
                                {
                                    icon: FaChartLine,
                                    color: "text-primaryBlue"
                                },
                                {
                                    icon: FaHandHoldingHeart,
                                    color: "text-secundaryYellow"
                                }
                            ].map((commitmentIcon, index) => {
                                const commitment = commitments[index];
                                return (
                                    <div key={index} className="text-center group">
                                        <div
                                            className="relative inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-bgMain to-gray-50 rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                                            <commitmentIcon.icon
                                                className={`w-9 h-9 lg:w-10 lg:h-10 ${commitmentIcon.color} transition-transform duration-300 group-hover:scale-110`} />
                                            {/* Pulse effect on hover */}
                                            <div
                                                className="absolute inset-0 rounded-full bg-gradient-to-br from-thirdGreen/20 to-transparent opacity-0 group-hover:opacity-100 animate-pulse"></div>
                                        </div>
                                        <h4 className="text-lg lg:text-xl font-bold text-primaryBlue mb-3 group-hover:text-thirdGreen transition-colors duration-300">
                                            {commitment.title}
                                        </h4>
                                        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                                            {commitment.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}