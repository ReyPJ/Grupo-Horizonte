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
import React from "react";

export default function EmpresaNucleoPage() {
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
        mision: "Impulsar la transición energética mediante el desarrollo de proyectos innovadores de energía renovable que generen impacto positivo en el medio ambiente y la sociedad.",
        vision: "Ser líderes en América Latina en soluciones integrales de energía renovable, almacenamiento y manufactura especializada para el sector energético.",
        valores: ["Sostenibilidad", "Innovación", "Eficiencia Energética", "Compromiso Ambiental"]
    };

    const services = [
        {
            title: "Energía Eólica",
            description: "Conceptualización, ingeniería, desarrollo y ejecución de proyectos de generación de energía eléctrica a partir de fuentes eólicas. Instalación, operación y mantenimiento de parques eólicos.",
            image: "/eolico2.jpg"
        },
        {
            title: "Energía Fotovoltaica",
            description: "Desarrollo de plantas solares y sistemas de autoconsumo para uso industrial, comercial y residencial. Compra, venta e instalación de paneles solares, inversores y componentes.",
            image: "/fotovoltaic.jpg"
        },
        {
            title: "Sistemas de Almacenamiento (SAE)",
            description: "Investigación, desarrollo, diseño e implementación de sistemas de almacenamiento de energía con baterías de ion-litio y tecnologías emergentes para aplicaciones conectadas a red o aisladas.",
            image: "/paneles.jpg"
        },
        {
            title: "Manufactura y Suministro (OEM)",
            description: "Fabricación, ensamblaje, integración y comercialización de equipos originales y componentes para el sector energético. Servicios de ingeniería y consultoría técnica.",
            image: "/turbinas_4c_nucleologo.jpg"
        },
        {
            title: "Infraestructura de Transmisión",
            description: "Diseño, ingeniería, procura y construcción de subestaciones eléctricas, líneas de transmisión y redes de distribución de media y alta tensión.",
            image: "/LineasDeTransmisionElectrica.jpg"
        },
        {
            title: "Mantenimiento Especializado",
            description: "Servicios de mantenimiento preventivo y correctivo, así como operación de subestaciones, parques eólicos y plantas solares."
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
                    company="Núcleo Energy"
                    logoUrl="/LogoHorizontal@4x.png"
                    tagline="Energías Renovables para el Futuro"
                    description="Empresa joven y dinámica dedicada al desarrollo de proyectos de energía renovable. Especializados en energía eólica, fotovoltaica, sistemas de almacenamiento y manufactura OEM para impulsar la transición energética."
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
                                    Tecnologías de Vanguardia
                                </h2>
                                <p className="text-gray-500 text-lg font-light">
                                    Soluciones innovadoras para un futuro sostenible
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    {
                                        icon: MdWindPower,
                                        title: "Energía Eólica",
                                        items: ["Parques eólicos de gran escala", "Turbinas de última generación", "Sistemas de monitoreo inteligente"]
                                    },
                                    {
                                        icon: MdSolarPower,
                                        title: "Energía Solar",
                                        items: ["Plantas solares industriales", "Autoconsumo comercial", "Sistemas residenciales"]
                                    },
                                    {
                                        icon: MdBattery80,
                                        title: "Almacenamiento",
                                        items: ["Baterías ion-litio avanzadas", "Sistemas conectados a red", "Soluciones aisladas"]
                                    },
                                    {
                                        icon: MdPrecisionManufacturing,
                                        title: "Manufactura OEM",
                                        items: ["Equipos originales certificados", "Componentes especializados", "Consultoría técnica integral"]
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
                                            {tech.items.map((item, i) => (
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
                    title="Soluciones Integrales"
                />

                {/* Impact Section */}
                <section className="py-24 bg-gradient-to-br from-green-50 via-white to-green-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <div className="inline-block h-0.5 w-16 rounded-full mb-6 bg-[#34D399]" />
                                <h2 className="text-5xl font-bold text-[#10B981] mb-4">
                                    Impacto Ambiental Positivo
                                </h2>
                                <p className="text-gray-500 text-lg font-light">
                                    Cada proyecto contribuye a un futuro más sostenible
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-8">
                                {[
                                    { value: "500+", label: "MW", desc: "Capacidad instalada" },
                                    { value: "100K+", label: "Ton CO₂", desc: "Reducidas anualmente" },
                                    { value: "50+", label: "Proyectos", desc: "Completados exitosamente" }
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
                                Impulsemos Juntos la Transición Energética
                            </h2>

                            <p className="text-xl text-green-50 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                                Desarrolla tu proyecto de energía renovable con la experiencia y tecnología de Núcleo Energy
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#10B981] font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                                >
                                    Contáctanos
                                </Link>
                                <Link
                                    href="/proyectos"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
                                >
                                    Ver Proyectos
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