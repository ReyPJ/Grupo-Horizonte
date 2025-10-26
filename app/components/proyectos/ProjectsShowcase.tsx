"use client";
import * as React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaBolt, FaIndustry, FaBuilding } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { useTranslations } from 'next-intl';

interface FeaturedProject {
    id: string;
    title: string;
    subtitle: string;
    location: string;
    client?: string;
    category: string;
    scope?: string;
    image: string;
    description: string;
    highlights: string[];
}

const getIconForCategory = (category: string) => {
    if (category.includes("Fotovoltaica")) return FaBolt;
    if (category.includes("Transmisión") || category.includes("Eléctrica")) return FaBolt;
    if (category.includes("Civil")) return FaBuilding;
    return FaIndustry;
};

export default function ProjectsShowcase() {
    const t = useTranslations('ProjectsShowcase');
    const featuredProjects = t.raw('featured') as FeaturedProject[];

    return (
        <>
            <style jsx>{`
                .showcase-card {
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .showcase-card:hover {
                    transform: translateY(-8px);
                }

                .project-badge {
                    background: linear-gradient(135deg, rgba(206, 211, 0, 0.9), rgba(10, 135, 0, 0.9));
                    backdrop-filter: blur(10px);
                }
            `}</style>

            <div className="bg-bgMain py-20">
                {/* Section Header */}
                <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 mb-16">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 id={"DESTACADOS"} className="text-h1 text-primaryBlue mb-6">
                            {t('sectionTitle')}
                        </h2>
                        <p className="text-p text-gray-700 leading-relaxed">
                            {t('sectionDescription1')}
                            {' '}
                            {t('sectionDescription2')}
                        </p>
                        <div className="w-24 h-1 bg-secundaryYellow mx-auto mt-8 rounded-full"></div>
                    </div>
                </div>

                {/* Featured Projects Grid */}
                <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                    <div className="grid gap-12">
                        {featuredProjects.map((project, index) => {
                            const Icon = getIconForCategory(project.category);
                            return (
                                <div
                                    key={project.id}
                                    className={`showcase-card grid lg:grid-cols-2 gap-8 items-center ${
                                        index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                                    }`}
                                >
                                    {/* Image */}
                                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                width={1200}
                                                height={800}
                                                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-primaryBlue/90 via-primaryBlue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            {/* Floating badge */}
                                            <div className="absolute top-6 right-6 project-badge text-white px-4 py-2 rounded-full text-sm font-bold">
                                                {project.category}
                                            </div>

                                            {/* Icon overlay */}
                                            <div className="absolute bottom-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 text-secundaryYellow">
                                                <Icon className="w-6 h-6" />
                                                <span className="font-bold uppercase text-sm tracking-wider">
                                                    {project.category}
                                                </span>
                                            </div>

                                            <h3 className="text-3xl lg:text-4xl font-bold text-primaryBlue leading-tight">
                                                {project.title}
                                            </h3>

                                            <p className="text-xl text-gray-600 font-medium">
                                                {project.subtitle}
                                            </p>

                                            <div className="flex flex-wrap gap-4 py-4">
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <FaMapMarkerAlt className="w-4 h-4 text-thirdGreen" />
                                                    <span className="text-sm font-medium">{project.location}</span>
                                                </div>
                                                {project.client && (
                                                    <div className="px-3 py-1 bg-primaryBlue/10 rounded-full">
                                                        <span className="text-sm font-semibold text-primaryBlue">
                                                            {project.client}
                                                        </span>
                                                    </div>
                                                )}
                                                {project.scope && (
                                                    <div className="px-3 py-1 bg-secundaryYellow/20 rounded-full">
                                                        <span className="text-sm font-bold text-primaryBlue">
                                                            {project.scope}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            <p className="text-gray-700 leading-relaxed">
                                                {project.description}
                                            </p>

                                            <div className="pt-4 space-y-2">
                                                {project.highlights.map((highlight, idx) => (
                                                    <div key={idx} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-secundaryYellow mt-2 flex-shrink-0"></div>
                                                        <p className="text-gray-600 text-sm">{highlight}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
