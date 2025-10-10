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
import React from "react";

export default function Empresa4CPage() {
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
        mision: "Ser líderes en la industria implementando soluciones sustentables e innovadoras en infraestructura y energía.",
        vision: "Ser el referente líder en infraestructuras, energías renovables y servicios especializados a nivel nacional e internacional.",
        valores: ["Innovación", "Sostenibilidad", "Calidad", "Responsabilidad Social"]
    };

    const services = [
        {
            title: "Obras Civiles",
            description: "Diseñamos, construimos y gestionamos proyectos de infraestructura civil, incluyendo edificaciones, hospitales, proyectos residenciales, comerciales e industriales, renovaciones y obras de desarrollo urbano.",
            image: "/Grua1.jpg"
        },
        {
            title: "Obras Eléctricas",
            description: "Diseño, construcción y mantenimiento de redes eléctricas en alta, media y baja tensión. Instalación y supervisión de líneas de transmisión, subestaciones eléctricas y sistemas de distribución.",
            image: "/LineasDeTransmisionElectrica.jpg"
        },
        {
            title: "Proyectos Fotovoltaicos",
            description: "Instalación de paneles solares, seguidores, montaje y conexionado. Puesta en marcha con pruebas OMICRON. Soluciones completas para generación de energía limpia.",
            image: "/paneles.jpg"
        },
        {
            title: "Servicios Especializados",
            description: "Evaluación y ejecución de proyectos, análisis técnico, elaboración de catálogos de obra. Instalación y supervisión de subestaciones eléctricas y montaje de torres.",
            image: "/turbinas_4c_nucleologo.jpg"
        }
    ];

    const clients = [
        {
            name: "Secretaría de la Marina",
            location: "Puerto Vallarta, Jalisco",
            period: "2020-2021",
            description: "Construcción y equipamiento del Hospital Naval"
        },
        {
            name: "ASELEC S.A. de C.V.",
            location: "Mexicali, B.C.",
            period: "2019-2020",
            description: "Cimentaciones plataforma 400 KV en SE Cucapah"
        },
        {
            name: "Enel Green Power",
            location: "Jujuy, Argentina",
            period: "2018-2019",
            description: "Parque Solar Cauchari - 300 MW"
        },
        {
            name: "CFE",
            location: "Múltiples estados",
            period: "2010-Actualidad",
            description: "Diversos proyectos de infraestructura eléctrica"
        },
        {
            name: "Luz del Sur",
            location: "Lima y Cusco, Perú",
            period: "2017-2018",
            description: "Modernización de subestaciones eléctricas"
        },
        {
            name: "ENERRAY",
            location: "Guanajuato, México",
            period: "2020-2021",
            description: "Proyecto Solar 296 MW DC"
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
                    company="Constructora 4C"
                    logoUrl="/4cSInfondoLogo.png"
                    tagline="Construyendo el Futuro con Excelencia"
                    description="Más de 20 años de experiencia en construcción civil, mecánica, eléctrica y fotovoltaica. Desarrollamos infraestructura y energía de alta calidad con compromiso hacia la eficiencia, innovación y seguridad."
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
                                        Compromiso con el Medio Ambiente
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-6 text-lg font-light">
                                        En 4C integramos prácticas sostenibles en cada proyecto, minimizando nuestro impacto ambiental y maximizando la eficiencia energética.
                                    </p>
                                    <div className="space-y-4">
                                        {[
                                            "Implementación de sistemas de energía renovable",
                                            "Optimización de recursos para minimizar el impacto ambiental",
                                            "Gestión adecuada de residuos en todas nuestras operaciones"
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
                                Impulsando el futuro.{' '}
                                <span className="block mt-2 lg:mt-1">
                                Para lograr lo imposible.
                            </span>
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
                    title="Nuestros Servicios"
                />

                <CompanyClientsSection
                    clients={clients}
                    primaryColor="#000C47"
                    title="Clientes que Confían en Nosotros"
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
                                ¿Listo para tu Próximo Proyecto?
                            </h2>

                            <p className="text-xl text-gray-200 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                                Transformemos juntos tu visión en realidad con la experiencia y calidad que caracteriza a 4C
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#FFC107] text-[#000C47] font-bold text-lg hover:bg-[#FFD54F] transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
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