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
import React from "react";

export default function EmpresaRECCMAQ2Page() {
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
            title: "Reconstrucción de Maquinaria Pesada",
            description: "Servicio especializado en reconstrucción completa de maquinaria pesada industrial. Recuperamos equipos con altos estándares de calidad garantizando su óptimo funcionamiento.",
            image: "/img143.jpg"
        },
        {
            title: "Mantenimiento Preventivo",
            description: "Programas de mantenimiento preventivo diseñados para maximizar la vida útil de tu maquinaria y evitar paros no programados en tus operaciones."
        },
        {
            title: "Reparación de Equipos",
            description: "Reparación especializada de maquinaria y equipo pesado. Contamos con personal técnico certificado y refacciones de calidad."
        },
        {
            title: "Servicio en Sitio",
            description: "Llevamos nuestro servicio directamente a tu ubicación. Cobertura nacional con técnicos especializados disponibles."
        }
    ];

    const clients = [
        {
            name: "AFLEX",
            location: "Fernando Montes de Oca, Altamira, Tamaulipas",
            period: "Febrero 2018 - Actualidad",
            description: "Servicio continuo de mantenimiento y reparación"
        },
        {
            name: "McDermott",
            location: "Boulevard Golfo de México N. 380, Altamira, Tamaulipas",
            period: "Octubre 2017 - Enero 2022",
            description: "Reconstrucción y mantenimiento de equipos"
        },
        {
            name: "ALPASA",
            location: "Parque Pequeña y Mediana Industria, Altamira, Tamaulipas",
            period: "Enero 2007 - Actualidad",
            description: "Más de 18 años de servicio continuo"
        },
        {
            name: "GS Autotransportes",
            location: "Boulevard de los Ríos 3800, Altamira, Tamaulipas",
            period: "Enero 2016 - Actualidad",
            description: "Mantenimiento de flota vehicular"
        },
        {
            name: "Anuar Renaud Torres García",
            location: "Boulevard de los Ríos 3800, Altamira, Tamaulipas",
            period: "Marzo 2012 - Actualidad",
            description: "Servicios especializados continuos"
        }
    ];

    const coverageLocations = [
        "Altamira", "Monterrey", "Ciudad de México", "Manzanillo",
        "Mérida", "Mexicali", "Oaxaca", "Hermosillo"
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
                    company="RECCMAQ2"
                    logoUrl="/reccmalogoxD.png"
                    tagline="Reconstruimos tu Maquinaria, Impulsamos tu Productividad"
                    description="Reconstructora de Maquinaria de la Torre. Especialistas en reconstrucción, mantenimiento y reparación de maquinaria pesada con presencia nacional en los sectores más exigentes de la industria."
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
                                    Nuestra Propuesta
                                </h2>
                                <p className="text-gray-500 text-lg font-light">
                                    Expertos en dar nueva vida a tu maquinaria industrial
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
                                                    Especialización
                                                </h3>
                                                <div className="h-0.5 w-12 rounded-full bg-[#EF4444]" />
                                            </div>
                                        </div>

                                        <p className="text-gray-700 leading-relaxed text-base font-light">
                                            Más de 18 años de experiencia en reconstrucción y mantenimiento de maquinaria pesada. Personal técnico altamente calificado y certificado para garantizar trabajos de la más alta calidad.
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
                                                    Compromiso
                                                </h3>
                                                <div className="h-0.5 w-12 rounded-full bg-[#EF4444]" />
                                            </div>
                                        </div>

                                        <p className="text-gray-700 leading-relaxed text-base font-light">
                                            Brindamos servicio en sitio con cobertura nacional, llevando soluciones directamente a tu ubicación. Minimizamos tiempos de paro y maximizamos la productividad de tu operación.
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
                                            Nuestros Valores
                                        </h3>
                                        <div className="h-0.5 w-16 mx-auto rounded-full bg-[#EF4444]" />
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                                        {["Calidad", "Confiabilidad", "Profesionalismo", "Servicio"].map((valor, index) => (
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
                                    Cobertura Nacional
                                </h2>
                                <p className="text-gray-500 text-lg font-light">
                                    Llevamos nuestros servicios a donde nos necesites
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-10 border border-red-100 shadow-sm">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {coverageLocations.map((location, idx) => (
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
                    title="Servicios Especializados"
                />

                <CompanyClientsSection
                    clients={clients}
                    primaryColor="#DC2626"
                    title="Clientes que Confían en Nosotros"
                />

                {/* Por qué elegirnos */}
                <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <div className="inline-block h-0.5 w-16 rounded-full mb-6 bg-[#EF4444]" />
                                <h2 className="text-5xl font-bold text-[#DC2626] mb-4">
                                    Por Qué Elegirnos
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "18+ Años",
                                        subtitle: "De Experiencia",
                                        desc: "Trayectoria comprobada en el sector industrial"
                                    },
                                    {
                                        title: "8 Ciudades",
                                        subtitle: "Cobertura Nacional",
                                        desc: "Servicio en sitio donde lo necesites"
                                    },
                                    {
                                        title: "20+ Clientes",
                                        subtitle: "Relaciones de Largo Plazo",
                                        desc: "Confianza construida año tras año"
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
                                Optimiza tu Operación con Nuestro Servicio
                            </h2>

                            <p className="text-xl text-red-50 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                                Reconstrucción y mantenimiento especializado para mantener tu maquinaria en óptimas condiciones
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#DC2626] font-bold text-lg hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                                >
                                    Solicitar Servicio
                                </Link>
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
                                >
                                    Más Información
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