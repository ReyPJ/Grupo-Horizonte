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
import { MdPower, MdFactory, MdVerifiedUser } from "react-icons/md";
import React from "react";

export default function EmpresaIMBARPage() {
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
        mision: "Desarrollar e implementar tecnología de obras de infraestructura eléctrica implementando nuevos métodos en los procesos de obras para la CFE y la industria privada. Cumplir con las necesidades del cliente y anticiparnos a sus exigencias.",
        vision: "Ser una empresa mexicana líder en el manejo integral de obras de infraestructura eléctrica. Alcanzar un nivel óptimo en recursos humanos y materiales bajo un esquema de calidad, satisfaciendo siempre a nuestros clientes en obras civiles, electromecánicas, pruebas preoperativas, estructuras para subestaciones y líneas de transmisión.",
        valores: ["Calidad", "Innovación Tecnológica", "Compromiso", "Seguridad"]
    };

    const services = [
        {
            title: "Ingeniería Eléctrica",
            description: "Diseño y desarrollo de proyectos de infraestructura eléctrica con los más altos estándares técnicos y normativos para CFE e industria privada.",
            image: "/LineasDeTransmisionElectrica.jpg"
        },
        {
            title: "Obra Civil",
            description: "Construcción de cimentaciones, plataformas y estructuras civiles para subestaciones y líneas de transmisión. Obras mayores y menores con certificación LAPEM.",
            image: "/obras1.jpg"
        },
        {
            title: "Obra Electromecánica",
            description: "Montaje de equipos, interconexión de sistemas, instalación de tableros y puesta en operación de subestaciones eléctricas completas.",
            image: "/RehabilatacionSubestacionesPeru.jpg"
        },
        {
            title: "Fabricación de Estructuras",
            description: "Producción de hasta 700 toneladas mensuales de estructuras metálicas galvanizadas para torres y subestaciones hasta 400 KV con liberación LAPEM.",
            image: "/obras1.jpg"
        },
        {
            title: "Pruebas Preoperativas",
            description: "Realización de pruebas técnicas y certificaciones previas a la puesta en servicio de instalaciones eléctricas."
        },
        {
            title: "Puesta en Servicio",
            description: "Proceso completo de energización y arranque de sistemas eléctricos con supervisión técnica especializada."
        }
    ];

    const clients = [
        {
            name: "CFE - Comisión Federal de Electricidad",
            location: "Nacional",
            period: "2004-Actualidad",
            description: "Múltiples proyectos de subestaciones y líneas de transmisión"
        },
        {
            name: "CFE - S.E. Villa de García",
            location: "Nuevo León",
            period: "2018-2019",
            description: "Obra civil y electromecánica completa"
        },
        {
            name: "CFE - S.E. Codefront",
            location: "Coahuila",
            period: "2017-2018",
            description: "Obra civil y electromecánica"
        },
        {
            name: "CFE - S.E. Jasso",
            location: "Hidalgo",
            period: "2019-2020",
            description: "Obra civil y electromecánica"
        },
        {
            name: "CFE - LT Querétaro 400 KV",
            location: "Querétaro",
            period: "2016-2017",
            description: "Línea de transmisión de alta tensión"
        },
        {
            name: "CFE - S.E. Ticul 400 KV",
            location: "Yucatán",
            period: "2015-2016",
            description: "Subestación eléctrica de potencia"
        },
        {
            name: "CFE - LT y SE Cuetzalan",
            location: "Puebla",
            period: "2020-2021",
            description: "LT 115KV doble circuito - 20.3 km"
        },
        {
            name: "ABB México S.A. de C.V.",
            location: "Reynosa, Tamaulipas",
            period: "2018-2019",
            description: "S.E. Guerreño - Obra civil 600 toneladas"
        },
        {
            name: "ABB México - Ford",
            location: "Irapuato, Guanajuato",
            period: "2019-2020",
            description: "Suministro, fabricación y montaje de estructuras"
        },
        {
            name: "ABB México - S.E. Agroindustrial",
            location: "Irapuato, Guanajuato",
            period: "2017-2018",
            description: "Obra civil y electromecánica"
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
                    company="IMBAR"
                    logoUrl="/imbarlogo.jpeg"
                    tagline="Líderes en Infraestructura Eléctrica"
                    description="20 años de experiencia especializada en obras de infraestructura eléctrica para CFE e industria privada. Expertos en subestaciones, líneas de transmisión hasta 400 KV y fabricación de estructuras metálicas."
                    backgroundImage="/LineasDeTransmisionElectrica.jpg"
                    primaryColor="#1E40AF"
                />

                <CompanyMVVSection
                    mvv={mvvData}
                    primaryColor="#1E40AF"
                    secondaryColor="#3B82F6"
                />

                {/* Capacidades Técnicas */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16">
                                <div className="inline-block h-0.5 w-16 rounded-full mb-6 bg-[#3B82F6]" />
                                <h2 className="text-5xl font-bold text-[#1E40AF] mb-4">
                                    Capacidades Técnicas
                                </h2>
                                <p className="text-gray-500 text-lg font-light">
                                    Infraestructura de clase mundial
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: MdPower,
                                        value: "400 KV",
                                        label: "Capacidad Máxima",
                                        desc: "Líneas de transmisión de alta tensión"
                                    },
                                    {
                                        icon: MdFactory,
                                        value: "700 Ton",
                                        label: "Producción Mensual",
                                        desc: "Estructuras metálicas galvanizadas"
                                    },
                                    {
                                        icon: MdVerifiedUser,
                                        value: "LAPEM",
                                        label: "Certificación",
                                        desc: "Liberación oficial CFE"
                                    }
                                ].map((cap, idx) => (
                                    <div
                                        key={idx}
                                        className="group bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-blue-100 text-center hover:-translate-y-2"
                                    >
                                        <div className="w-16 h-16 mx-auto rounded-xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <cap.icon size={32} className="text-[#1E40AF]" />
                                        </div>
                                        <div className="text-5xl font-bold text-[#1E40AF] mb-3">
                                            {cap.value}
                                        </div>
                                        <div className="text-lg font-semibold text-[#3B82F6] mb-2">
                                            {cap.label}
                                        </div>
                                        <p className="text-gray-600 text-sm font-light">
                                            {cap.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Timeline */}
                            <div className="mt-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-2xl p-10 border border-blue-100">
                                <div className="text-center mb-10">
                                    <h3 className="text-3xl font-bold text-[#1E40AF] mb-2">
                                        20 Años de Experiencia
                                    </h3>
                                    <p className="text-gray-600 font-light">
                                        Trayectoria comprobada en proyectos de infraestructura eléctrica
                                    </p>
                                </div>
                                <div className="grid sm:grid-cols-4 gap-6 text-center">
                                    {[
                                        { year: "2004", label: "Fundación" },
                                        { year: "100+", label: "Proyectos CFE" },
                                        { year: "400 KV", label: "Especialización" },
                                        { year: "2024", label: "Presente" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="relative">
                                            <div className="text-3xl font-bold text-[#1E40AF] mb-2">
                                                {item.year}
                                            </div>
                                            <div className="text-sm text-gray-600 font-light">
                                                {item.label}
                                            </div>
                                            {idx < 3 && (
                                                <div className="hidden sm:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-[#3B82F6] to-transparent" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <CompanyServicesSection
                    services={services}
                    primaryColor="#1E40AF"
                    title="Servicios Especializados"
                />

                <CompanyClientsSection
                    clients={clients}
                    primaryColor="#1E40AF"
                    title="Proyectos Destacados"
                />

                {/* CTA Section */}
                <section className="relative py-32 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/LineasDeTransmisionElectrica.jpg')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/95 via-[#1E3A8A]/90 to-[#1E293B]/95" />

                    <div className="relative container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="h-0.5 w-16 mx-auto rounded-full mb-8 bg-[#3B82F6]" />

                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Infraestructura Eléctrica de Calidad
                            </h2>

                            <p className="text-xl text-blue-50 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                                Llevamos 20 años desarrollando proyectos de infraestructura eléctrica con los más altos estándares de calidad
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#3B82F6] text-white font-bold text-lg hover:bg-[#60A5FA] transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                                >
                                    Solicitar Cotización
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