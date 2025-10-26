"use client";
import * as React from "react";
import { FaSolarPanel, FaBolt, FaHospital, FaIndustry } from "react-icons/fa";
import { useTranslations } from 'next-intl';

interface TimelineProject {
    name: string;
    location: string;
    capacity: string;
}

interface TimePeriod {
    year: string;
    category: string;
    projects: TimelineProject[];
}

const getIconForCategory = (category: string) => {
    if (category.includes("Fotovoltaico") || category.includes("Fotovoltaica")) return FaSolarPanel;
    if (category.includes("Transmisión") || category.includes("Construcción")) return FaBolt;
    if (category.includes("Salud") || category.includes("Hospital")) return FaHospital;
    if (category.includes("Edificaciones")) return FaIndustry;
    return FaSolarPanel;
};

export default function ProjectsTimeline() {
    const t = useTranslations('ProjectsTimeline');
    const periods = t.raw('periods') as TimePeriod[];
    return (
        <>
            <style jsx>{`
                .timeline-line {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    background: linear-gradient(to bottom, #CED300, #0A8700);
                    transform: translateX(-50%);
                }

                @media (max-width: 1024px) {
                    .timeline-line {
                        left: 2rem;
                    }
                }

                .timeline-dot {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 20px;
                    height: 20px;
                    background: white;
                    border: 4px solid #CED300;
                    border-radius: 50%;
                    z-index: 10;
                }

                @media (max-width: 1024px) {
                    .timeline-dot {
                        left: 2rem;
                    }
                }

                .timeline-card {
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .timeline-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0, 12, 71, 0.15);
                }
            `}</style>

            <div className="bg-white py-20">
                <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                    {/* Header */}
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <h2 className="text-h1 text-primaryBlue mb-6">
                            {t('pageTitle')}
                        </h2>
                        <p className="text-p text-gray-700 leading-relaxed">
                            {t('pageDescription')}
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-6xl mx-auto">
                        <div className="timeline-line hidden lg:block"></div>

                        {periods.map((period, periodIndex) => (
                            <div key={periodIndex} className="relative mb-20 last:mb-0">
                                <div className="timeline-dot top-8"></div>

                                <div className={`grid lg:grid-cols-2 gap-8 ${
                                    periodIndex % 2 === 0 ? '' : 'lg:grid-flow-dense'
                                }`}>
                                    {/* Year Badge */}
                                    <div className={`lg:text-right ${
                                        periodIndex % 2 === 0 ? '' : 'lg:col-start-2'
                                    }`}>
                                        <div className="inline-block lg:block">
                                            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primaryBlue to-thirdGreen text-white px-6 py-3 rounded-full">
                                                <span className="text-2xl font-bold">{period.year}</span>
                                            </div>
                                            <div className="mt-4">
                                                <span className="text-secundaryYellow font-bold uppercase tracking-wider text-sm">
                                                    {period.category}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Projects */}
                                    <div className={`space-y-6 lg:pl-12 ${
                                        periodIndex % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1 lg:pl-0 lg:pr-12'
                                    }`}>
                                        {period.projects.map((project, projectIndex) => (
                                            <div
                                                key={projectIndex}
                                                className="timeline-card bg-bgMain p-6 rounded-2xl border-2 border-transparent hover:border-secundaryYellow"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-primaryBlue to-thirdGreen rounded-full flex items-center justify-center flex-shrink-0">
                                                        {React.createElement(getIconForCategory(period.category), { className: "w-6 h-6 text-white" })}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-lg font-bold text-primaryBlue mb-2">
                                                            {project.name}
                                                        </h4>
                                                        <p className="text-sm text-gray-600 mb-2">
                                                            {project.location}
                                                        </p>
                                                        <div className="inline-block px-3 py-1 bg-secundaryYellow/20 rounded-full">
                                                            <span className="text-xs font-bold text-primaryBlue">
                                                                {project.capacity}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}