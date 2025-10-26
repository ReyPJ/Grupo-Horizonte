"use client";

import CompanyHeroSection from "@/app/components/empresas/CompanyHeroSection";
import CompanyMVVSection from "@/app/components/empresas/CompanyMVVSection";
import CompanyServicesSection from "@/app/components/empresas/CompanyServicesSection";
import HeaderNav from "@/app/components/HeaderNav";
import Footer from "@/app/components/footer";
import ProjectsMegaMenu from "@/app/components/ProjectsMegaMenu";
import EnfoqueMegaMenu from "@/app/components/EnfoqueMegaMenu";
import Link from "next/link";
import { MdWindPower, MdSolarPower, MdBattery80, MdPrecisionManufacturing } from "react-icons/md";
import { useTranslations } from 'next-intl';
import React from "react";

export default function EmpresaNucleoPage() {
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
        mision: t('CompanyData.nucleoEnergy.mision'),
        vision: t('CompanyData.nucleoEnergy.vision'),
        valores: t.raw('CompanyData.nucleoEnergy.valores')
    };

    const services = [
        {
            title: t('CompanyData.nucleoEnergy.services.wind'),
            description: t('CompanyData.nucleoEnergy.services.windDesc'),
            image: "/eolico2.jpg"
        },
        {
            title: t('CompanyData.nucleoEnergy.services.photovoltaic'),
            description: t('CompanyData.nucleoEnergy.services.photovoltaicDesc'),
            image: "/fotovoltaic.jpg"
        },
        {
            title: t('CompanyData.nucleoEnergy.services.storage'),
            description: t('CompanyData.nucleoEnergy.services.storageDesc'),
            image: "/paneles.jpg"
        },
        {
            title: t('CompanyData.nucleoEnergy.services.manufacturing'),
            description: t('CompanyData.nucleoEnergy.services.manufacturingDesc'),
            image: "/turbinas_4c_nucleologo.jpg"
        },
        {
            title: t('CompanyData.nucleoEnergy.services.infrastructure'),
            description: t('CompanyData.nucleoEnergy.services.infrastructureDesc'),
            image: "/LineasDeTransmisionElectrica.jpg"
        },
        {
            title: t('CompanyData.nucleoEnergy.services.maintenance'),
            description: t('CompanyData.nucleoEnergy.services.maintenanceDesc')
        }
    ];

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

                {/* Mega Menu de Proyectos */}
                <div
                    className={`hidden md:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-2xl transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] origin-top z-[60] ${projectsOpen ? 'animate-megaSlideDown opacity-100 translate-y-0 visible pointer-events-auto' : (isClosingProjects ? 'animate-megaSlideUp visible pointer-events-none' : 'opacity-0 -translate-y-4 invisible pointer-events-none')}`}
                    onMouseEnter={() => setProjectsOpenWithAnimation(true)}
                >
                    <ProjectsMegaMenu/>
                </div>

                {/* Mega Menu de Enfoque */}
                <div
                    className={`hidden md:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-2xl transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] origin-top z-[60] ${enfoqueOpen ? 'animate-megaSlideDown opacity-100 translate-y-0 visible pointer-events-auto' : (isClosingEnfoque ? 'animate-megaSlideUp visible pointer-events-none' : 'opacity-0 -translate-y-4 invisible pointer-events-none')}`}
                    onMouseEnter={() => setEnfoqueOpenWithAnimation(true)}
                >
                    <EnfoqueMegaMenu/>
                </div>
            </div>

            <main>
                <CompanyHeroSection
                    company={t('CompanyData.nucleoEnergy.name')}
                    logoUrl="/LogoHorizontal@4x.png"
                    tagline={t('CompanyData.nucleoEnergy.tagline')}
                    description={t('CompanyData.nucleoEnergy.heroDescription')}
                    backgroundImage="/fotovoltaic.jpg"
                    primaryColor="#10B981"
                />

                <CompanyMVVSection
                    mvv={mvvData}
                    primaryColor="#10B981"
                    secondaryColor="#34D399"
                />

                {/* Tecnologías Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16">
                                <div className="inline-block h-0.5 w-16 rounded-full mb-6 bg-[#34D399]" />
                                <h2 className="text-5xl md:text-6xl font-bold text-[#10B981] mb-4">
                                    {t('CompanyData.nucleoEnergy.sections.advancedTechnologies')}
                                </h2>
                                <p className="text-gray-500 text-lg font-light">
                                    {t('CompanyData.nucleoEnergy.sections.sustainableFuture')}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    {
                                        icon: MdWindPower,
                                        title: t('CompanyData.nucleoEnergy.sections.windEnergy'),
                                        items: t.raw('CompanyData.nucleoEnergy.sections.windItems')
                                    },
                                    {
                                        icon: MdSolarPower,
                                        title: t('CompanyData.nucleoEnergy.sections.solarEnergy'),
                                        items: t.raw('CompanyData.nucleoEnergy.sections.solarItems')
                                    },
                                    {
                                        icon: MdBattery80,
                                        title: t('CompanyData.nucleoEnergy.sections.storage'),
                                        items: t.raw('CompanyData.nucleoEnergy.sections.storageItems')
                                    },
                                    {
                                        icon: MdPrecisionManufacturing,
                                        title: t('CompanyData.nucleoEnergy.sections.oem'),
                                        items: t.raw('CompanyData.nucleoEnergy.sections.oemItems')
                                    }
                                ].map((tech, idx) => (
                                    <div
                                        key={idx}
                                        className="group bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-green-100 hover:-translate-y-2"
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <tech.icon size={28} className="text-[#10B981]" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#10B981] mb-4">
                                            {tech.title}
                                        </h3>
                                        <ul className="space-y-2">
                                            {tech.items.map((item: string, i: number) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#34D399] mt-1.5 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <CompanyServicesSection
                    services={services}
                    primaryColor="#10B981"
                    title={t('CompanyData.nucleoEnergy.sections.servicesTitle')}
                />

                {/* Impact Section */}
                <section className="py-24 bg-gradient-to-br from-green-50 via-white to-green-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <div className="inline-block h-0.5 w-16 rounded-full mb-6 bg-[#34D399]" />
                                <h2 className="text-5xl font-bold text-[#10B981] mb-4">
                                    {t('CompanyData.nucleoEnergy.sections.environmentalImpact')}
                                </h2>
                                <p className="text-gray-500 text-lg font-light">
                                    {t('CompanyData.nucleoEnergy.sections.sustainableFutureDesc')}
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-8">
                                {[
                                    { value: "500+", label: t('CompanyData.nucleoEnergy.sections.capacityInstalled'), desc: t('CompanyData.nucleoEnergy.sections.capacityLabel') },
                                    { value: "100K+", label: t('CompanyData.nucleoEnergy.sections.co2Reduced'), desc: t('CompanyData.nucleoEnergy.sections.co2Label') },
                                    { value: "50+", label: t('CompanyData.nucleoEnergy.sections.projectsCompleted'), desc: t('CompanyData.nucleoEnergy.sections.projectsLabel') }
                                ].map((stat, idx) => (
                                    <div
                                        key={idx}
                                        className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-green-100"
                                    >
                                        <div className="text-5xl font-bold text-[#10B981] mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm font-semibold text-[#34D399] mb-2">
                                            {stat.label}
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
                        style={{ backgroundImage: "url('/eolico2.jpg')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/95 via-[#059669]/90 to-[#047857]/95" />

                    <div className="relative container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="h-0.5 w-16 mx-auto rounded-full mb-8 bg-[#34D399]" />

                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                {t('CompanyData.nucleoEnergy.sections.ctaTitle')}
                            </h2>

                            <p className="text-xl text-green-50 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                                {t('CompanyData.nucleoEnergy.sections.ctaSubtitle')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#10B981] font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                                >
                                    {t('CompanyData.nucleoEnergy.sections.contactUs')}
                                </Link>
                                <Link
                                    href="/proyectos"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
                                >
                                    {t('CompanyData.nucleoEnergy.sections.viewProjects')}
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