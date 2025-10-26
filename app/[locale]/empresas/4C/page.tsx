"use client";

import CompanyHeroSection from "@/app/components/empresas/CompanyHeroSection";
import CompanyMVVSection from "@/app/components/empresas/CompanyMVVSection";
import CompanyServicesSection from "@/app/components/empresas/CompanyServicesSection";
import CompanyClientsSection from "@/app/components/empresas/CompanyClientsSection";
import HeaderNav from "@/app/components/HeaderNav";
import Footer from "@/app/components/footer";
import ProjectsMegaMenu from "@/app/components/ProjectsMegaMenu";
import EnfoqueMegaMenu from "@/app/components/EnfoqueMegaMenu";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import React from "react";

export default function Empresa4CPage() {
    const t = useTranslations();
    const [projectsOpen, setProjectsOpen] = React.useState(false);
    const [enfoqueOpen, setEnfoqueOpen] = React.useState(false);
    const [isClosingProjects, setIsClosingProjects] = React.useState(false);
    const [isClosingEnfoque, setIsClosingEnfoque] = React.useState(false);

    const closeTimerProjects = React.useRef<NodeJS.Timeout | null>(null);
    const closeTimerEnfoque = React.useRef<NodeJS.Timeout | null>(null);

    const setProjectsOpenWithAnimation = React.useCallback((open: boolean) => {
        if (closeTimerProjects.current) {
            clearTimeout(closeTimerProjects.current);
            closeTimerProjects.current = null;
        }
        if (!open && projectsOpen) {
            setIsClosingProjects(true);
            closeTimerProjects.current = setTimeout(() => {
                setIsClosingProjects(false);
                closeTimerProjects.current = null;
            }, 420);
        }
        setProjectsOpen(open);
    }, [projectsOpen]);

    const setEnfoqueOpenWithAnimation = React.useCallback((open: boolean) => {
        if (closeTimerEnfoque.current) {
            clearTimeout(closeTimerEnfoque.current);
            closeTimerEnfoque.current = null;
        }
        if (!open && enfoqueOpen) {
            setIsClosingEnfoque(true);
            closeTimerEnfoque.current = setTimeout(() => {
                setIsClosingEnfoque(false);
                closeTimerEnfoque.current = null;
            }, 420);
        }
        setEnfoqueOpen(open);
    }, [enfoqueOpen]);

    React.useEffect(() => {
        return () => {
            if (closeTimerProjects.current) clearTimeout(closeTimerProjects.current);
            if (closeTimerEnfoque.current) clearTimeout(closeTimerEnfoque.current);
        };
    }, []);

    const mvvData = {
        mision: t('CompanyData.fourC.mision'),
        vision: t('CompanyData.fourC.vision'),
        valores: t.raw('CompanyData.fourC.valores')
    };

    const services = [
        {
            title: t('CompanyData.fourC.services.civilWorks'),
            description: t('CompanyData.fourC.services.civilWorksDesc'),
            image: "/Grua1.jpg"
        },
        {
            title: t('CompanyData.fourC.services.electricalWorks'),
            description: t('CompanyData.fourC.services.electricalWorksDesc'),
            image: "/LineasDeTransmisionElectrica.jpg"
        },
        {
            title: t('CompanyData.fourC.services.photovoltaic'),
            description: t('CompanyData.fourC.services.photovoltaicDesc'),
            image: "/paneles.jpg"
        },
        {
            title: t('CompanyData.fourC.services.specializedServices'),
            description: t('CompanyData.fourC.services.specializedDesc'),
            image: "/turbinas_4c_nucleologo.jpg"
        }
    ];

    const clients = t.raw('CompanyData.fourC.clients');

    return (
        <div className="w-full min-h-dvh bg-bgMain">
            {/* Navbar + Megamenus */}
            <div className="relative z-50" onMouseLeave={() => {
                setProjectsOpenWithAnimation(false);
                setEnfoqueOpenWithAnimation(false);
            }}>
                <HeaderNav
                    setProjectsOpen={setProjectsOpenWithAnimation}
                    projectsOpen={projectsOpen}
                    setEnfoqueOpen={setEnfoqueOpenWithAnimation}
                    enfoqueOpen={enfoqueOpen}
                />

                <div
                    className={`hidden md:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-2xl transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] origin-top z-[60] ${projectsOpen ? 'animate-megaSlideDown opacity-100 translate-y-0 visible pointer-events-auto' : (isClosingProjects ? 'animate-megaSlideUp visible pointer-events-none' : 'opacity-0 -translate-y-4 invisible pointer-events-none')}`}
                    onMouseEnter={() => setProjectsOpenWithAnimation(true)}
                >
                    <ProjectsMegaMenu/>
                </div>

                <div
                    className={`hidden md:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-2xl transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] origin-top z-[60] ${enfoqueOpen ? 'animate-megaSlideDown opacity-100 translate-y-0 visible pointer-events-auto' : (isClosingEnfoque ? 'animate-megaSlideUp visible pointer-events-none' : 'opacity-0 -translate-y-4 invisible pointer-events-none')}`}
                    onMouseEnter={() => setEnfoqueOpenWithAnimation(true)}
                >
                    <EnfoqueMegaMenu/>
                </div>
            </div>

            <main>
                <CompanyHeroSection
                    company={t('CompanyData.fourC.name')}
                    logoUrl="/4cSInfondoLogo.png"
                    tagline={t('CompanyData.fourC.tagline')}
                    description={t('CompanyData.fourC.heroDescription')}
                    backgroundImage="/Grua1.jpg"
                    primaryColor="#000C47"
                />

                <CompanyMVVSection
                    mvv={mvvData}
                    primaryColor="#000C47"
                    secondaryColor="#FFC107"
                />

                {/* Compromiso ambiental */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="h-0.5 w-16 rounded-full mb-6 bg-green-600" />
                                    <h2 className="text-4xl md:text-5xl font-bold text-[#000C47] mb-6 leading-tight">
                                        {t('CompanyData.fourC.sections.environmentalCommitment')}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-6 text-lg font-light">
                                        {t('CompanyData.fourC.sections.sustainablePractices')}
                                    </p>
                                    <div className="space-y-4">
                                        {[
                                            t('CompanyData.fourC.sections.renewableEnergy'),
                                            t('CompanyData.fourC.sections.resourceOptimization'),
                                            t('CompanyData.fourC.sections.wasteManagement')
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-green-600" />
                                                </div>
                                                <span className="text-gray-700 font-light">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: "url('/paneles.jpg')" }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="relative bg-no-repeat bg-cover bg-center min-h-dvh"
                         style={{backgroundImage: "url(/panelesfondo2.jpg)"}}>
                    <div className="hero-gradient absolute inset-0 z-0"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-24 w-full min-h-dvh gap-8 lg:gap-16 py-20 lg:py-0">

                        {/* Texto principal */}
                        <div className="flex flex-col items-center justify-center w-full space-y-6 lg:space-y-8">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-white text-shadow-strong animate-fade-in-up font-bold leading-tight max-w-4xl">
                                {t('CompanyData.fourC.sections.heroTitle')}
                            </h1>
                        </div>

                        {/*/!* Carousel - SOLO en desktop *!/*/}
                        {/*<div className="hidden lg:flex w-full lg:w-1/2 justify-center animate-fade-in-up"*/}
                        {/*     style={{animationDelay: '0.4s'}}>*/}
                        {/*    <div className="w-full max-w-2xl">*/}
                        {/*        <BlogCarousel />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                    {/* Scroll indicator - solo desktop */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block animate-bounce-slow">
                        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex items-start justify-center p-2">
                            <div className="w-1 h-3 bg-white rounded-full"></div>
                        </div>
                    </div>
                </section>

                <CompanyServicesSection
                    services={services}
                    primaryColor="#000C47"
                    title={t('CompanyData.fourC.sections.servicesTitle')}
                />

                <CompanyClientsSection
                    clients={clients}
                    primaryColor="#000C47"
                    title={t('CompanyData.fourC.sections.clientsTitle')}
                />

                {/* CTA Section */}
                <section className="relative py-32 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/Grua1.jpg')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#000C47]/95 via-[#000C47]/90 to-[#001a7a]/95" />

                    <div className="relative container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="h-0.5 w-16 mx-auto rounded-full mb-8 bg-[#FFC107]" />

                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                {t('CompanyData.fourC.sections.ctaTitle')}
                            </h2>

                            <p className="text-xl text-gray-200 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                                {t('CompanyData.fourC.sections.ctaSubtitle')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#FFC107] text-[#000C47] font-bold text-lg hover:bg-[#FFD54F] transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                                >
                                    {t('CompanyData.fourC.sections.contactUs')}
                                </Link>
                                <Link
                                    href="/proyectos"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
                                >
                                    {t('CompanyData.fourC.sections.viewProjects')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    );
}