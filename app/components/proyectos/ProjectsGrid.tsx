"use client";
import * as React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslations } from 'next-intl';

interface Project {
    id: string;
    title: string;
    location: string;
    category: string;
    description: string;
    image: string;
    capacity?: string;
}

export default function ProjectsGrid() {
    const t = useTranslations('ProjectsData');
    const projects = t.raw('projects') as Project[];
    const categories = t.raw('categories') as string[];
    const [selectedCategory, setSelectedCategory] = React.useState("Todos");

    const filteredProjects = selectedCategory === "Todos"
        ? projects
        : projects.filter((p: Project) => p.category === selectedCategory);

    return (
        <>
            <style jsx global>{`
                .project-card {
                    position: relative;
                    overflow: hidden;
                    border-radius: 1.5rem;
                    background: white;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .project-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0, 12, 71, 0.15);
                }

                .project-card::before {
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

                .project-card:hover::before {
                    transform: scaleX(1);
                }

                .filter-button {
                    padding: 0.875rem 2rem;
                    border-radius: 3rem;
                    font-weight: 600;
                    font-size: 1rem;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 2px solid transparent;
                }

                .filter-button.active {
                    background: linear-gradient(135deg, #000C47, #001a8a);
                    color: white;
                    border-color: #CED300;
                }

                .filter-button:not(.active) {
                    background: white;
                    color: #000C47;
                    border-color: #e5e7eb;
                }

                .filter-button:not(.active):hover {
                    border-color: #CED300;
                    transform: translateY(-2px);
                }
            `}</style>

            <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 py-20 bg-bgMain">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-h1 text-primaryBlue mb-6">{t('pageTitle')}</h2>
                    <p className="text-p text-gray-700 leading-relaxed">
                        {t('pageDescription')}
                    </p>
                    <div className="w-1/3 mx-auto bg-secundaryYellow h-1 rounded-full mt-6"></div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-semibold text-secundaryYellow uppercase">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold text-primaryBlue mt-2 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-thirdGreen text-sm">
                                        <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                                        {project.location}
                                    </div>
                                    <GoArrowUpRight className="w-5 h-5 text-primaryBlue" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}