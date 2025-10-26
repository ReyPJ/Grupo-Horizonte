import {FaSolarPanel, FaBolt, FaBuilding, FaCogs, FaGlobeAmericas, FaAward, FaIndustry} from "react-icons/fa";
import { useTranslations } from 'next-intl';

interface Capability {
    title: string;
    stat: string;
    description: string;
    services: string[];
}

interface Region {
    country: string;
    projects: string;
    description: string;
}

const getIconForCapability = (title: string) => {
    if (title.includes("Fotovoltaica")) return FaSolarPanel;
    if (title.includes("Transmisión")) return FaBolt;
    if (title.includes("Civil")) return FaBuilding;
    if (title.includes("Especializados")) return FaCogs;
    if (title.includes("Fabricación")) return FaIndustry;
    return FaSolarPanel;
};

export default function ProjectsCapabilities() {
    const t = useTranslations('ProjectsCapabilities');
    const capabilities = t.raw('capabilities') as Capability[];
    const regions = t.raw('regions') as Region[];

    return (
        <>
            <style jsx>{`
                .capability-card {
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                }

                .capability-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #CED300, #0A8700);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .capability-card:hover::before {
                    transform: scaleX(1);
                }

                .capability-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0, 12, 71, 0.15);
                }
            `}</style>

            <div className="bg-bgMain py-20">
                <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                    {/* Capabilities Section */}
                    <div className="mb-20">
                        <div className="text-center max-w-4xl mx-auto mb-16">
                            <div className="inline-block px-4 py-2 bg-secundaryYellow/20 rounded-full mb-6">
                                <span className="text-primaryBlue font-bold text-sm uppercase tracking-wider">
                                    {t('sectionBadge')}
                                </span>
                            </div>
                            <h2 className="text-h1 text-primaryBlue mb-6">
                                {t('sectionTitle')}
                            </h2>
                            <p className="text-p text-gray-700 leading-relaxed">
                                {t('sectionDescription')}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {capabilities.map((capability, index) => {
                                const Icon = getIconForCapability(capability.title);
                                return (
                                    <div key={index} className="capability-card bg-white rounded-2xl p-8">
                                        <div className="flex items-start gap-6 mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-primaryBlue to-thirdGreen rounded-2xl flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-2xl font-bold text-primaryBlue">
                                                        {capability.title}
                                                    </h3>
                                                    <span className="text-secundaryYellow font-bold text-xl">
                                                        {capability.stat}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {capability.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            {capability.services.map((service, idx) => (
                                                <div key={idx} className="flex items-center gap-3 text-gray-700">
                                                    <div className="w-2 h-2 rounded-full bg-secundaryYellow flex-shrink-0"></div>
                                                    <span className="text-sm">{service}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Geographic Presence */}
                    <div className="bg-white rounded-3xl p-8 lg:p-12">
                        <div className="text-center mb-12">
                            <h3 className="text-h2 text-primaryBlue mb-4">
                                {t('internationalTitle')}
                            </h3>
                            <p className="text-gray-700">
                                {t('internationalDescription')}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {regions.map((region, index) => (
                                <div
                                    key={index}
                                    className="text-center p-6 rounded-2xl bg-bgMain hover:bg-white transition-all duration-300 hover:shadow-lg"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-thirdGreen to-secundaryYellow rounded-full flex items-center justify-center mx-auto mb-4">
                                        <FaGlobeAmericas className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-primaryBlue mb-2">
                                        {region.country}
                                    </h4>
                                    <div className="text-secundaryYellow font-bold mb-3">
                                        {region.projects}
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {region.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications & Awards */}
                    <div className="mt-16 grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300">
                            <FaAward className="w-12 h-12 text-secundaryYellow mx-auto mb-4" />
                            <h4 className="text-lg font-bold text-primaryBlue mb-2">
                                {t('certificationTitle1')}
                            </h4>
                            <p className="text-sm text-gray-600">
                                {t('certificationDesc1')}
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300">
                            <FaAward className="w-12 h-12 text-secundaryYellow mx-auto mb-4" />
                            <h4 className="text-lg font-bold text-primaryBlue mb-2">
                                {t('certificationTitle2')}
                            </h4>
                            <p className="text-sm text-gray-600">
                                {t('certificationDesc2')}
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300">
                            <FaAward className="w-12 h-12 text-secundaryYellow mx-auto mb-4" />
                            <h4 className="text-lg font-bold text-primaryBlue mb-2">
                                {t('certificationTitle3')}
                            </h4>
                            <p className="text-sm text-gray-600">
                                {t('certificationDesc3')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
