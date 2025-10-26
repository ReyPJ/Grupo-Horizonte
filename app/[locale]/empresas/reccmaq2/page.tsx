"use client";

import CompanyHeroSection from "@/app/components/empresas/CompanyHeroSection";
import CompanyServicesSection from "@/app/components/empresas/CompanyServicesSection";
import CompanyClientsSection from "@/app/components/empresas/CompanyClientsSection";
import HeaderNav from "@/app/components/HeaderNav";
import Footer from "@/app/components/footer";
import ProjectsMegaMenu from "@/app/components/ProjectsMegaMenu";
import EnfoqueMegaMenu from "@/app/components/EnfoqueMegaMenu";
import Link from "next/link";
import { MdLocationOn, MdVerifiedUser, MdSupport } from "react-icons/md";
import { useTranslations } from 'next-intl';
import React from "react";

export default function EmpresaRECCMAQ2Page() {
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

    const services = [
        {
            title: t('CompanyData.reccmaq2.services.reconstruction'),
            description: t('CompanyData.reccmaq2.services.reconstructionDesc'),
            image: "/img143.jpg"
        },
        {
            title: t('CompanyData.reccmaq2.services.maintenance'),
            description: t('CompanyData.reccmaq2.services.maintenanceDesc')
        },
        {
            title: t('CompanyData.reccmaq2.services.repair'),
            description: t('CompanyData.reccmaq2.services.repairDesc')
        },
        {
            title: t('CompanyData.reccmaq2.services.siteService'),
            description: t('CompanyData.reccmaq2.services.siteServiceDesc')
        }
    ];

    const clients = t.raw('CompanyData.reccmaq2.clients');
    const coverageLocations = t.raw('CompanyData.reccmaq2.coverage');

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
                    company={t('CompanyData.reccmaq2.name')}
                    logoUrl="/reccmalogoxD.png"
                    tagline={t('CompanyData.reccmaq2.tagline')}
                    description={t('CompanyData.reccmaq2.heroDescription')}
                    backgroundImage="/maquinaria-reccmaq.jpg"
                    primaryColor="#DC2626"
                />

                {/* Propuesta */}
                <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-20">
                                <div className="inline-block h-0.5 w-16 rounded-full mb-6 bg-[#EF4444]" />
                                <h2 className="text-5xl md:text-6xl font-bold text-[#DC2626] mb-4">
                                    {t('CompanyData.reccmaq2.sections.ourProposal')}
                                </h2>
                                <p className="text-gray-500 text-lg font-light">
                                    {t('CompanyData.reccmaq2.sections.expertsMachinery')}
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8 mb-16">
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
                                    <div className="relative bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 h-full">
                                        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-[#DC2626]" />

                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm bg-red-50">
                                                <MdVerifiedUser size={28} className="text-[#DC2626]" />
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold text-[#DC2626] mb-2">
                                                    {t('CompanyData.reccmaq2.sections.specialization')}
                                                </h3>
                                                <div className="h-0.5 w-12 rounded-full bg-[#EF4444]" />
                                            </div>
                                        </div>

                                        <p className="text-gray-700 leading-relaxed text-base font-light">
                                            {t('CompanyData.reccmaq2.sections.specializationDesc')}
                                        </p>
                                    </div>
                                </div>

                                <div className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
                                    <div className="relative bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 h-full">
                                        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-[#DC2626]" />

                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm bg-red-50">
                                                <MdSupport size={28} className="text-[#DC2626]" />
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold text-[#DC2626] mb-2">
                                                    {t('CompanyData.reccmaq2.sections.commitment')}
                                                </h3>
                                                <div className="h-0.5 w-12 rounded-full bg-[#EF4444]" />
                                            </div>
                                        </div>

                                        <p className="text-gray-700 leading-relaxed text-base font-light">
                                            {t('CompanyData.reccmaq2.sections.commitmentDesc')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Valores */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent rounded-3xl" />
                                <div className="relative bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
                                    <div className="text-center mb-8">
                                        <h3 className="text-3xl font-bold text-[#DC2626] mb-3">
                                            {t('CompanyData.reccmaq2.sections.ourValues')}
                                        </h3>
                                        <div className="h-0.5 w-16 mx-auto rounded-full bg-[#EF4444]" />
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                                        {t.raw('CompanyData.reccmaq2.sections.values').map((valor: string, index: number) => (
                                            <div
                                                key={index}
                                                className="group relative text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300"
                                            >
                                                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-[#EF4444]" />
                                                <div className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center bg-red-50">
                                                    <div className="w-2 h-2 rounded-full bg-[#DC2626]" />
                                                </div>
                                                <p className="font-semibold text-base text-[#DC2626]">
                                                    {valor}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cobertura Nacional */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16">
                                <div className="inline-block h-0.5 w-16 rounded-full mb-6 bg-[#EF4444]" />
                                <h2 className="text-5xl font-bold text-[#DC2626] mb-4">
                                    {t('CompanyData.reccmaq2.sections.nationalCoverage')}
                                </h2>
                                <p className="text-gray-500 text-lg font-light">
                                    {t('CompanyData.reccmaq2.sections.bringingServices')}
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-10 border border-red-100 shadow-sm">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {coverageLocations.map((location: string, idx: number) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <MdLocationOn size={20} className="text-[#DC2626]" />
                                            </div>
                                            <span className="font-semibold text-gray-700">
                                                {location}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <CompanyServicesSection
                    services={services}
                    primaryColor="#DC2626"
                    title={t('CompanyData.reccmaq2.sections.servicesTitle')}
                />

                <CompanyClientsSection
                    clients={clients}
                    primaryColor="#DC2626"
                    title={t('CompanyData.reccmaq2.sections.clientsTitle')}
                />

                {/* Por qué elegirnos */}
                <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <div className="inline-block h-0.5 w-16 rounded-full mb-6 bg-[#EF4444]" />
                                <h2 className="text-5xl font-bold text-[#DC2626] mb-4">
                                    {t('CompanyData.reccmaq2.sections.whyChooseUs')}
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: t('CompanyData.reccmaq2.sections.yearsExperience'),
                                        subtitle: t('CompanyData.reccmaq2.sections.yearsSubtitle'),
                                        desc: t('CompanyData.reccmaq2.sections.yearsDesc')
                                    },
                                    {
                                        title: t('CompanyData.reccmaq2.sections.coverage8Cities'),
                                        subtitle: t('CompanyData.reccmaq2.sections.coverageSubtitle'),
                                        desc: t('CompanyData.reccmaq2.sections.coverageDesc')
                                    },
                                    {
                                        title: t('CompanyData.reccmaq2.sections.clientRelationships'),
                                        subtitle: t('CompanyData.reccmaq2.sections.relationshipsSubtitle'),
                                        desc: t('CompanyData.reccmaq2.sections.relationshipsDesc')
                                    }
                                ].map((stat, idx) => (
                                    <div
                                        key={idx}
                                        className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-red-100"
                                    >
                                        <div className="text-5xl font-bold text-[#DC2626] mb-2">
                                            {stat.title}
                                        </div>
                                        <div className="text-sm font-semibold text-[#EF4444] mb-3">
                                            {stat.subtitle}
                                        </div>
                                        <p className="text-gray-600 text-sm font-light">
                                            {stat.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-32 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/maquinaria-reccmaq.jpg')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#DC2626]/95 via-[#B91C1C]/90 to-[#7F1D1D]/95" />

                    <div className="relative container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="h-0.5 w-16 mx-auto rounded-full mb-8 bg-[#EF4444]" />

                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                {t('CompanyData.reccmaq2.sections.ctaTitle')}
                            </h2>

                            <p className="text-xl text-red-50 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                                {t('CompanyData.reccmaq2.sections.ctaSubtitle')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#DC2626] font-bold text-lg hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                                >
                                    {t('CompanyData.reccmaq2.sections.requestService')}
                                </Link>
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
                                >
                                    {t('CompanyData.reccmaq2.sections.moreInfo')}
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