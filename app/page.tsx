"use client";
import BlogCarousel from "@/app/components/BlogCarousel";
import BigButton from "@/app/components/bigButton";
import CompanySlider from "@/app/components/CompanySlider";
import ProjectSlide from "@/app/components/ProyectsSlider";
import HeaderNav from "@/app/components/HeaderNav";
import Footer from "@/app/components/footer";
import Image from "next/image";
import EnfoqueMegaMenu from "@/app/components/EnfoqueMegaMenu";
import ProjectsMegaMenu from "@/app/components/ProjectsMegaMenu";
import PartnerLogosSection from "@/app/components/PartnerLogoSection";
import * as React from "react";

export default function Home() {

    const [projectsOpen, setProjectsOpen] = React.useState(false);
    const [enfoqueOpen, setEnfoqueOpen] = React.useState(false);
    const [isClosingProjects, setIsClosingProjects] = React.useState(false);
    const [isClosingEnfoque, setIsClosingEnfoque] = React.useState(false);
    const closeTimerProjects = React.useRef<ReturnType<typeof setTimeout> | null>(null);
    const closeTimerEnfoque = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    const setProjectsOpenWithAnimation = React.useCallback((open: boolean) => {
        if (open) {
            if (closeTimerProjects.current) {
                clearTimeout(closeTimerProjects.current);
                closeTimerProjects.current = null;
            }
            setIsClosingProjects(false);
            setProjectsOpen(true);
            if (enfoqueOpen) setEnfoqueOpenWithAnimation(false);
        } else {
            if (projectsOpen) {
                setIsClosingProjects(true);
                if (closeTimerProjects.current) clearTimeout(closeTimerProjects.current);
                closeTimerProjects.current = setTimeout(() => {
                    setIsClosingProjects(false);
                    closeTimerProjects.current = null;
                }, 420);
            }
            setProjectsOpen(false);
        }
    }, [projectsOpen, enfoqueOpen]);

    const setEnfoqueOpenWithAnimation = React.useCallback((open: boolean) => {
        if (open) {
            if (closeTimerEnfoque.current) {
                clearTimeout(closeTimerEnfoque.current);
                closeTimerEnfoque.current = null;
            }
            setIsClosingEnfoque(false);
            setEnfoqueOpen(true);
            if (projectsOpen) setProjectsOpenWithAnimation(false);
        } else {
            if (enfoqueOpen) {
                setIsClosingEnfoque(true);
                if (closeTimerEnfoque.current) clearTimeout(closeTimerEnfoque.current);
                closeTimerEnfoque.current = setTimeout(() => {
                    setIsClosingEnfoque(false);
                    closeTimerEnfoque.current = null;
                }, 420);
            }
            setEnfoqueOpen(false);
        }
    }, [enfoqueOpen, projectsOpen]);

    React.useEffect(() => {
        return () => {
            if (closeTimerProjects.current) clearTimeout(closeTimerProjects.current);
            if (closeTimerEnfoque.current) clearTimeout(closeTimerEnfoque.current);
        };
    }, []);

    const companies = [
        {
            company: "IMBAR",
            logoUrl: "/imbarlogo.jpeg",
            smallHistoryText: "40 años construyendo infraestructura eléctrica para CFE e industria privada.",
            smallHistoryText2: "Especialistas en subestaciones, líneas de transmisión y fabricación de estructuras metálicas hasta 400 KV.",
            buttonText: "Conoce a IMBAR",
            keyServices: ["Subestaciones Eléctricas", "Líneas de Transmisión", "Obra Civil Eléctrica", "Fabricación de Estructuras"],
            image: "/LineasDeTransmisionElectrica.jpg",
            buttonMinWidth: "180px",
            buttonMaxWidth: "220px",
            bigButtonLinkTo: "/empresas/imbar"
        },
        {
            company: "Constructora 4C",
            logoUrl: "/4cSInfondoLogo.png",
            smallHistoryText: "Una empresa con más de 40 años guiando a nuestros clientes hacia el futuro.",
            smallHistoryText2: "Con experiencia en obras civiles, obras eléctricas, servicios especializados y proyectos fotovoltaicos.",
            buttonText: "Conoce a 4C",
            keyServices: ["Obras Civiles", "Obras Eléctricas", "Servicios Especializados", "Proyectos Fotovoltaicos"],
            image: "/Grua1.jpg",
            buttonMinWidth: "150px",
            buttonMaxWidth: "180px",
            bigButtonLinkTo: "/empresas/4C"
        },
        {
            company: "Nucleo Energy",
            logoUrl: "/LogoHorizontal@4x.png",
            smallHistoryText: "Núcleo Energy es una empresa joven dedicada a energias renovables.",
            smallHistoryText2: "Impulsando proyectos eólicos, solares y de almacenamiento, fabrica y suministra equipos para el sector y desarrolla infraestructura eléctrica",
            buttonText: "Conoce a Nucleo",
            keyServices: ["Energía Eólica y Fotovoltaica", 'Sistemas de Almacenamiento De Energía', "Manufactura y Suministro", "Infraestructura de Transmisión y Distribución"],
            image: "/2.jpg",
            buttonMinWidth: "180px",
            buttonMaxWidth: "220px",
            bigButtonLinkTo: "/empresas/nucleo-energy"
        },
        {
            company: "RECCMAQ2",
            logoUrl: "/reccmalogoxD.png",
            smallHistoryText: "Reconstructora de maquinaria con presencia nacional en el sector industrial.",
            smallHistoryText2: "Servicio especializado de reconstrucción, mantenimiento y reparación de maquinaria pesada para industrias clave.",
            buttonText: "Conoce a RECCMAQ2",
            keyServices: ["Reconstrucción de Maquinaria", "Mantenimiento Industrial", "Reparación de Equipos", "Servicio a Nivel Nacional"],
            image: "/img143.jpg",
            buttonMinWidth: "200px",
            buttonMaxWidth: "240px",
            bigButtonLinkTo: "/empresas/reccmaq2"
        }
    ]

    const projects = [
        {
            title: "Secreteria de la Marina",
            country: "Mexico",
            backgroundImageUrl: "/Secretaria.jpg",
            description: "Proyecto: Construcción y equipamiento del Hospital Naval en PTO. Vallarta, Jalisco."
        },
        {
            title: "Pedido 8833 ABEN3T",
            country: "Mexico",
            backgroundImageUrl: "/pedido8833Aben3t.jpg",
            description: "LT 230 KV A3T-SE: Limpieza de vía E aisladores. Revisión FO y herrajes. Anti aves. Termografía en empalmes.\n" +
                "OS: Martpat-31000-LT-CFV-GSC-41"
        },
        {
            title: "Lineas de transmision electrica",
            country: "Mexico",
            backgroundImageUrl: "/LineasDeTransmisionElectrica.jpg",
            description: "Montaje: estructura metálica galvanizada para torres auto soportadas (400 KV) en LT Puerto Peñasco - Golfo de Santa Clara. "
        },
        {
            title: "Rehabilitación de subestación electrica",
            country: "Peru",
            backgroundImageUrl: "/RehabilatacionSubestacionesPeru.jpg",
            description: "Modernización SE Lima y Cusco: Diseño y obras electro-mecánicas/civiles para luz del sur (subcontrato electro Sur Este). "
        },
    ]

    return (
        <div className="w-full min-h-dvh bg-white">
            <style jsx>{`
                .hero-gradient {
                    background: linear-gradient(
                            135deg,
                            rgba(0, 12, 71, 0.75) 0%,
                            rgba(0, 12, 71, 0.55) 50%,
                            rgba(0, 12, 71, 0.75) 100%
                    );
                }

                .section-overlay {
                    background: linear-gradient(
                            to bottom,
                            rgba(0, 0, 0, 0.6) 0%,
                            rgba(0, 0, 0, 0.4) 50%,
                            rgba(0, 0, 0, 0.6) 100%
                    );
                }

                .imbar-gradient {
                    background: linear-gradient(
                            135deg,
                            rgba(10, 20, 80, 0.85) 0%,
                            rgba(10, 135, 0, 0.65) 50%,
                            rgba(10, 20, 80, 0.85) 100%
                    );
                }

                .four-c-gradient {
                    background: linear-gradient(
                            135deg,
                            rgba(206, 211, 0, 0.75) 0%,
                            rgba(0, 12, 71, 0.65) 50%,
                            rgba(206, 211, 0, 0.75) 100%
                    );
                }

                .decorative-line {
                    background: linear-gradient(
                            90deg,
                            transparent 0%,
                            #CED300 20%,
                            #CED300 80%,
                            transparent 100%
                    );
                    box-shadow: 0 2px 12px rgba(206, 211, 0, 0.3);
                }

                .section-title {
                    position: relative;
                    display: inline-block;
                }

                .section-title::after {
                    content: '';
                    position: absolute;
                    bottom: -12px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 4px;
                    background: linear-gradient(90deg, #CED300 0%, #0A8700 100%);
                    border-radius: 2px;
                }

                .content-card {
                    backdrop-filter: blur(8px);
                    background: rgba(255, 255, 255, 0.97);
                    box-shadow: 0 8px 32px rgba(0, 12, 71, 0.1),
                    0 2px 8px rgba(0, 0, 0, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }

                .text-shadow-strong {
                    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.6),
                    0 4px 40px rgba(0, 0, 0, 0.4),
                    0 1px 3px rgba(0, 0, 0, 0.8);
                }

                .text-shadow-soft {
                    text-shadow: 0 2px 15px rgba(0, 0, 0, 0.3),
                    0 1px 3px rgba(0, 0, 0, 0.5);
                }

                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(10px);
                    }
                }

                .animate-bounce-slow {
                    animation: bounce 2s ease-in-out infinite;
                }

                @keyframes shimmer {
                    0% {
                        background-position: -200% center;
                    }
                    100% {
                        background-position: 200% center;
                    }
                }

                .stat-card {
                    position: relative;
                    overflow: hidden;
                }

                .stat-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(
                            90deg,
                            transparent,
                            #CED300,
                            transparent
                    );
                    background-size: 200% 100%;
                    animation: shimmer 3s infinite;
                }

                .watermark-logo {
                    position: absolute;
                    opacity: 0.08;
                    pointer-events: none;
                    user-select: none;
                    z-index: 1;
                    mix-blend-mode: overlay;
                    filter: brightness(1.5);
                }

                .watermark-center {
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 40vw;
                    max-width: 600px;
                    height: auto;
                }

                .watermark-corner-tl {
                    top: 10%;
                    left: 5%;
                    width: 20vw;
                    max-width: 280px;
                    height: auto;
                }

                .watermark-corner-br {
                    bottom: 10%;
                    right: 5%;
                    width: 20vw;
                    max-width: 280px;
                    height: auto;
                }

                @media (max-width: 768px) {
                    .watermark-center {
                        width: 60vw;
                        max-width: 400px;
                    }

                    .watermark-corner-tl,
                    .watermark-corner-br {
                        width: 30vw;
                        max-width: 180px;
                    }
                }
            `}</style>

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
                    <ProjectsMegaMenu />
                </div>

                <div
                    className={`hidden md:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-2xl transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] origin-top z-[60] ${enfoqueOpen ? 'animate-megaSlideDown opacity-100 translate-y-0 visible pointer-events-auto' : (isClosingEnfoque ? 'animate-megaSlideUp visible pointer-events-none' : 'opacity-0 -translate-y-4 invisible pointer-events-none')}`}
                    onMouseEnter={() => setEnfoqueOpenWithAnimation(true)}
                >
                    <EnfoqueMegaMenu />
                </div>
            </div>

            {/* Hero Section - Principal */}
            <section className="relative bg-no-repeat bg-cover bg-center min-h-dvh"
                     style={{backgroundImage: "url(/panelesfondo2.jpg)"}}>
                <div className="hero-gradient absolute inset-0 z-0"></div>

                {/* MARCA DE AGUA - CENTRO */}
                <Image
                    src="/LogoCompletoPositivo@4x.png"
                    width={600}
                    height={600}
                    alt=""
                    className="watermark-logo watermark-center"
                    aria-hidden="true"
                />

                <div
                    className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-24 w-full min-h-dvh gap-8 lg:gap-16 py-20 lg:py-0">
                    <div className="flex flex-col items-center justify-center w-full space-y-6 lg:space-y-8">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-white text-shadow-strong animate-fade-in-up font-bold leading-tight max-w-4xl">
                            Impulsando el futuro.{' '}
                            <span className="block mt-2 lg:mt-1">
                                Para lo que viene en el horizonte.
                            </span>
                        </h1>

                        <h3 className="text-lg sm:text-xl lg:text-2xl text-white text-center text-shadow-soft max-w-2xl animate-fade-in-up leading-relaxed px-2"
                            style={{animationDelay: '0.2s'}}>
                            Nuestro compromiso es abrir camino hacia un futuro mejor, para que estemos listos para el
                            futuro que cada vez está más cerca.
                        </h3>
                    </div>
                </div>

                <div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block animate-bounce-slow">
                    <div className="w-6 h-10 border-2 border-white/80 rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
            </section>

            <PartnerLogosSection />

            {/* Hero IMBAR - Infraestructura Eléctrica de Alto Voltaje */}
            <section className="relative bg-no-repeat bg-cover bg-center min-h-dvh"
                     style={{backgroundImage: "url(/LineasDeTransmisionElectrica.jpg)"}}>
                <div className="imbar-gradient absolute inset-0 z-0"></div>

                {/* MARCA DE AGUA - ESQUINA SUPERIOR IZQUIERDA */}
                <Image
                    src="/LogoCompletoPositivo@4x.png"
                    width={280}
                    height={280}
                    alt=""
                    className="watermark-logo watermark-corner-tl"
                    aria-hidden="true"
                />

                <div
                    className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-24 w-full min-h-dvh py-20">

                    <div className="max-w-6xl w-full space-y-12">
                        <div className="text-center space-y-6">
                            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white text-shadow-strong font-bold leading-tight">
                                Infraestructura Eléctrica
                                <span className="block mt-2">de Alto Voltaje</span>
                            </h2>
                            <div className="decorative-line w-1/3 h-1 mx-auto rounded-full"></div>
                            <p className="text-xl sm:text-2xl text-white text-shadow-soft max-w-3xl mx-auto leading-relaxed">
                                40 años de experiencia construyendo la red eléctrica que impulsa a México
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                            <div
                                className="stat-card content-card rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105">
                                <div className="text-5xl font-bold text-primaryBlue mb-3">400 KV</div>
                                <div className="text-gray-700 text-lg font-medium">Líneas de Transmisión</div>
                                <div className="text-gray-600 text-sm mt-2">Capacidad máxima certificada</div>
                            </div>

                            <div
                                className="stat-card content-card rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105">
                                <div className="text-5xl font-bold text-thirdGreen mb-3">CFE</div>
                                <div className="text-gray-700 text-lg font-medium">Proveedor Certificado</div>
                                <div className="text-gray-600 text-sm mt-2">Comisión Federal de Electricidad</div>
                            </div>

                            <div
                                className="stat-card content-card rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105">
                                <div className="text-5xl font-bold text-primaryBlue mb-3">40+</div>
                                <div className="text-gray-700 text-lg font-medium">Años de Experiencia</div>
                                <div className="text-gray-600 text-sm mt-2">Liderando el sector eléctrico</div>
                            </div>
                        </div>

                        <div className="content-card rounded-3xl p-8 lg:p-12 mt-12">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-primaryBlue mb-4">Subestaciones
                                                                                             Eléctricas</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Diseño, construcción y modernización de subestaciones de alta tensión.
                                        Soluciones integrales desde la ingeniería hasta la puesta en marcha.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-thirdGreen mb-4">Fabricación
                                                                                            Especializada</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Estructuras metálicas galvanizadas para torres autosoportadas.
                                        Manufactura de alta precisión con certificaciones internacionales.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <a href="/empresas/imbar">
                                <BigButton
                                    textAfter="Descubre IMBAR"
                                    textBefore="Descubre IMBAR"
                                    textColor="white"
                                    minWidth="200px"
                                    maxWidth="240px"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero 4C - Construcción Civil e Industrial */}
            <section className="relative bg-no-repeat bg-cover bg-center min-h-dvh"
                     style={{backgroundImage: "url(/Grua1.jpg)"}}>
                <div className="four-c-gradient absolute inset-0 z-0"></div>

                {/* MARCA DE AGUA - ESQUINA INFERIOR DERECHA */}
                <Image
                    src="/LogoCompletoPositivo@4x.png"
                    width={280}
                    height={280}
                    alt=""
                    className="watermark-logo watermark-corner-br"
                    aria-hidden="true"
                />

                <div
                    className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-24 w-full min-h-dvh py-20">

                    <div className="max-w-6xl w-full space-y-12">
                        <div className="text-center space-y-6">
                            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white text-shadow-strong font-bold leading-tight">
                                Construcción Civil
                                <span className="block mt-2">e Industrial</span>
                            </h2>
                            <div className="decorative-line w-1/3 h-1 mx-auto rounded-full"></div>
                            <p className="text-xl sm:text-2xl text-white text-shadow-soft max-w-3xl mx-auto leading-relaxed">
                                Más de 40 años construyendo el futuro con obras de ingeniería de excelencia
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                            <div
                                className="stat-card content-card rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105">
                                <div className="text-5xl font-bold text-primaryBlue mb-3">40+</div>
                                <div className="text-gray-700 text-lg font-medium">Años de Trayectoria</div>
                                <div className="text-gray-600 text-sm mt-2">Construyendo infraestructura</div>
                            </div>

                            <div
                                className="stat-card content-card rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105">
                                <div className="text-5xl font-bold text-secondYellow mb-3">100+</div>
                                <div className="text-gray-700 text-lg font-medium">Proyectos Realizados</div>
                                <div className="text-gray-600 text-sm mt-2">Obras civiles y eléctricas</div>
                            </div>

                            <div
                                className="stat-card content-card rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105">
                                <div className="text-5xl font-bold text-thirdGreen mb-3">Solar</div>
                                <div className="text-gray-700 text-lg font-medium">Energía Fotovoltaica</div>
                                <div className="text-gray-600 text-sm mt-2">Proyectos sustentables</div>
                            </div>
                        </div>

                        <div className="content-card rounded-3xl p-8 lg:p-12 mt-12">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-primaryBlue mb-4">Obras Civiles</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Construcción de edificaciones residenciales, comerciales e industriales.
                                        Infraestructura urbana con los más altos estándares de calidad y seguridad.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-secondYellow mb-4">Obras Eléctricas</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Instalaciones eléctricas de baja y media tensión.
                                        Integración de sistemas fotovoltaicos para autoconsumo industrial y comercial.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <a href="/empresas/4C">
                                <BigButton
                                    textAfter="Descubre 4C"
                                    textBefore="Descubre 4C"
                                    textColor="white"
                                    minWidth="180px"
                                    maxWidth="220px"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Equipos extraordinarios */}
            <section className="bg-gradient-to-b from-white via-gray-50 to-white">
                <div
                    className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 py-16 lg:py-24 gap-10 lg:gap-20 justify-center items-center">
                    <div className="flex flex-col w-full lg:w-1/2 gap-6">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-primaryBlue font-bold">
                            <span className="block">Equipos extraordinarios</span>
                            <span className="block">Construyendo proyectos</span>
                            <span className="block">Que impulsan hacia el futuro</span>
                        </h3>

                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            Ofrecemos proyectos únicos que mejoran la calidad de vida, fomentamos la innovación
                            y el desarrollo con soluciones integrales. Con empresas especializadas que suman más
                            de 40 años de experiencia combinada: desde infraestructura eléctrica de alta tensión
                            con IMBAR, construcción civil e industrial con 4C, hasta energías renovables con Núcleo
                            Energy.
                        </p>

                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            Desarrollamos subestaciones eléctricas, líneas de transmisión de 400 KV, obras civiles,
                            ingeniería mecánica y fotovoltaica, proyectos eólicos, plantas solares y sistemas de
                            autoconsumo para uso industrial, comercial y residencial.
                        </p>

                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            Desarrollamos infraestructura y energía de alta calidad, con gran compromiso con la
                            eficiencia, innovación y seguridad.
                        </p>

                        <div className="mt-4">
                            <a href={"/enfoque#ADN"}>
                                <BigButton
                                    textAfter="Misión, Visión y Valores"
                                    textBefore="Misión, Visión y Valores"
                                    textColor="black"
                                    minWidth="200px"
                                    maxWidth="280px"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col w-full lg:w-1/2 items-center">
                        <div className="relative group w-full max-w-[540px]">
                            <Image
                                src="/Heroafter.jpeg"
                                width={1200}
                                height={1200}
                                alt="Turbina eolica con logos de 4c y Nucleo Energy"
                                className="w-full h-[350px] sm:h-[460px] lg:h-[700px] object-cover rounded-3xl shadow-2xl ring-1 ring-black/5 transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Calidad del equipo */}
            <section className="relative bg-no-repeat bg-cover bg-center min-h-dvh"
                     style={{backgroundImage: "url(/obras1.jpg)"}}>
                <div className="section-overlay absolute inset-0 z-0"></div>

                {/* MARCA DE AGUA - CENTRO */}
                <Image
                    src="/LogoCompletoPositivo@4x.png"
                    width={600}
                    height={600}
                    alt=""
                    className="watermark-logo watermark-center"
                    aria-hidden="true"
                />

                <div
                    className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-24 w-full min-h-dvh gap-10 lg:gap-16 py-20 lg:py-0">

                    <div className="flex flex-col items-center justify-center w-full lg:w-1/2 space-y-8">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center text-white text-shadow-strong font-bold leading-tight max-w-3xl">
                            Definidos por la calidad de nuestro gran equipo.
                        </h2>
                        <a href={"#EMPRESAS"}>
                            <BigButton
                                textAfter="Nuestras empresas"
                                textBefore="Nuestras empresas"
                                textColor="white"
                                minWidth="230px"
                                maxWidth="260px"
                            />
                        </a>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center px-2">
                        <div className="content-card rounded-3xl p-6 sm:p-8 max-w-xl">
                            <p className="text-base sm:text-lg text-gray-800 text-center lg:text-left leading-relaxed">
                                Nuestro equipo aporta su excelencia técnica, ingenio, empuje, creatividad y experiencia
                                para ayudar a nuestros clientes a lograr sus visiones audaces. Tenemos éxito a través de
                                la asociación y el deseo compartido de marcar la diferencia. Motivados por los desafíos
                                en el horizonte superamos todos los límites posibles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Nuestras Empresas Header */}
            <section className="bg-gradient-to-b from-white to-gray-50 py-16 lg:py-20">
                <div className="flex flex-col px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 justify-center items-center">
                    <div className="decorative-line w-2/3 md:w-1/2 lg:w-1/3 h-1 mt-2 mb-6 rounded-full"></div>
                    <h3 id={"EMPRESAS"}
                        className="section-title text-primaryBlue text-4xl sm:text-5xl lg:text-6xl text-center font-bold pb-4">
                        Nuestras Empresas
                    </h3>
                </div>
            </section>

            {/* Company Slider */}
            <section className="bg-gradient-to-b from-gray-50 to-white py-8">
                <div className="flex px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 justify-center items-center">
                    <CompanySlider companies={companies} />
                </div>
            </section>

            {/* Section: Nuestro Equipo */}
            <section className="relative bg-no-repeat bg-cover bg-center min-h-dvh"
                     style={{backgroundImage: "url(/eolico2.jpg)"}}>
                <div className="section-overlay absolute inset-0 z-0"></div>

                {/* MARCA DE AGUA - CENTRO */}
                <Image
                    src="/LogoCompletoPositivo@4x.png"
                    width={600}
                    height={600}
                    alt=""
                    className="watermark-logo watermark-center"
                    aria-hidden="true"
                />

                <div
                    className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-24 w-full min-h-dvh gap-10 lg:gap-16 py-20 lg:py-0">

                    <div className="flex flex-col items-center justify-center w-full lg:w-1/2 space-y-8">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center text-white text-shadow-strong font-bold leading-tight max-w-3xl">
                            Definidos por la calidad de nuestro gran equipo.
                        </h2>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center px-2">
                        <div className="content-card rounded-3xl p-6 sm:p-8 max-w-xl">
                            <p className="text-base sm:text-lg text-gray-800 text-center lg:text-left leading-relaxed">
                                La integridad, innovación y una mentalidad de "nunca conformarse" están en el centro de
                                todo lo que hacemos. Nuestro equipo está lleno de pensadores audaces y hábiles
                                solucionadores de problemas que convierten los desafíos en oportunidades para lograr lo
                                extraordinario.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Construimos Historia */}
            <section className="bg-white">
                <div
                    className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 pt-16 md:pt-24 lg:pt-32 justify-center items-center gap-10 lg:gap-16">

                    <div
                        className="flex flex-col w-full lg:w-1/2 items-center lg:items-start text-center lg:text-left space-y-6">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-primaryBlue font-bold leading-tight">
                            Nosotros Construimos Historia
                        </h2>
                        <a href={"/proyectos"}>
                            <BigButton
                                textAfter="Todos los Proyectos"
                                textBefore="Todos los Proyectos"
                                textColor="black"
                                minWidth="200px"
                                maxWidth="240px"
                            />
                        </a>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center">
                        <p className="text-base sm:text-lg text-gray-700 text-center lg:text-left leading-relaxed max-w-2xl">
                            La historia desde inicios del siglo y para los siguientes siglos estará determinada por la
                            capacidad del mundo para trabajar rápido y en gran escala para satisfacer necesidades en una
                            pronta evolución de infraestructura, energía, manufactura avanzada, recursos críticos,
                            protección ambiental y seguridad nacional.
                            <br /><br />
                            Durante muchos años hemos estado siempre a la altura de las circunstancias. Tenemos la
                            experiencia y los conocimientos, y estamos diseñados específicamente para afrontar todos
                            estos desafíos que se asoman desde el horizonte.
                        </p>
                    </div>
                </div>

                {/* Projects Section */}
                <div className="pb-24 flex flex-col gap-16 pt-16 md:pt-24 lg:pt-32">
                    <div className="flex flex-col w-full px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primaryBlue">
                            Proyectos Destacados
                        </h2>
                    </div>
                    <ProjectSlide projects={projects} />
                    <div className="flex justify-center">
                        <div
                            className="w-3/4 max-w-4xl bg-gradient-to-r from-transparent via-thirdGreen to-transparent h-[5px] rounded-xl shadow-lg"></div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}