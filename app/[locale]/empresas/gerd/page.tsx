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

export default function EmpresaGERDPage() {
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
        mision: t('CompanyData.gerd.mision'),
        vision: t('CompanyData.gerd.vision'),
        valores: t.raw('CompanyData.gerd.valores')
    };

    const services = [
        {
            title: t('CompanyData.gerd.services.industrial'),
            description: t('CompanyData.gerd.services.industrialDesc'),
            image: "/img143.jpg"
        },
        {
            title: t('CompanyData.gerd.services.construction'),
            description: t('CompanyData.gerd.services.constructionDesc'),
            image: "/Secretaria.jpg"
        },
        {
            title: t('CompanyData.gerd.services.infrastructure'),
            description: t('CompanyData.gerd.services.infrastructureDesc'),
            image: "/LineasDeTransmisionElectrica.jpg"
        },
        {
            title: t('CompanyData.gerd.services.telecommunications'),
            description: t('CompanyData.gerd.services.telecommunicationsDesc'),
            image: "/eolico2.jpg"
        },
        {
            title: t('CompanyData.gerd.services.mining'),
            description: t('CompanyData.gerd.services.miningDesc'),
            image: "/paneles.jpg"
        }
    ];

    const clients = t.raw('CompanyData.gerd.clients');

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

            {/* Hero Section */}
            <CompanyHeroSection
                company={t('CompanyData.gerd.name')}
                logoUrl="/gerdlogo.png"
                tagline={t('CompanyData.gerd.tagline')}
                description={t('CompanyData.gerd.heroDescription')}
                backgroundImage="/img143.jpg"
                primaryColor="#1F2937"
            />

            {/* MVV Section */}
            <CompanyMVVSection
                mvv={mvvData}
                primaryColor="#1F2937"
                secondaryColor="#6366F1"
            />

            {/* Services Section */}
            <CompanyServicesSection
                services={services}
                primaryColor="#1F2937"
                title={t('CompanyData.gerd.sections.servicesTitle')}
            />

            {/* Clients Section */}
            <CompanyClientsSection
                clients={clients}
                primaryColor="#1F2937"
                title={t('CompanyData.gerd.sections.clientsTitle')}
            />

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 lg:py-32">
                <div className="container mx-auto px-6 lg:px-16 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        {t('CompanyData.gerd.sections.ctaTitle')}
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        {t('CompanyData.gerd.sections.ctaSubtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contacto">
                            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105">
                                {t('CompanyData.gerd.sections.contactUs')}
                            </button>
                        </Link>
                        <Link href="/proyectos">
                            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all duration-300">
                                {t('CompanyData.gerd.sections.viewProjects')}
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
