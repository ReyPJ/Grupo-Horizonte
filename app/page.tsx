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

    // ✅ Callback para Enfoque
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
            company: "Constructora 4C",
            logoUrl: "/4cSInfondoLogo.png",
            smallHistoryText: "Una empresa con más de 20 años guiando a nuestros clientes hacia el futuro.",
            smallHistoryText2: "Con experiencia en obras civiles, obras eléctricas, servicios especializados y proyectos fotovoltaicos.",
            buttonText: "Conoce a 4C",
            keyServices: ["Obras Civiles", "Obras Eléctricas", "Servicios Especializados", "Proyectos Fotovoltaicos"],
            image: "/Grua1.jpg",
            buttonMinWidth: "150px",
            buttonMaxWidth: "180px",
        },
        {
            company: "Nucleo Energy",
            logoUrl: "/LogoHorizontal@4x.png",
            smallHistoryText: "Núcleo Energy es una empresa joven dedicada a energias renovables.",
            smallHistoryText2: "Impulsando proyectos eólicos, solares y de almacenamiento, fabrica y suministra equipos para el sector y desarrolla infraestructura eléctrica",
            buttonText: "Conoce a Nucleo",
            keyServices: ["Energía Eólica y Fotovoltaica", 'Sistemas de Almacenamiento De Energía', "Manufactura y Suministro", "Infraestructura de Transmisión y Distribución"],
            image: "/fotovoltaic.jpg",
            buttonMinWidth: "180px",
            buttonMaxWidth: "220px",
        },
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
                            rgba(0, 12, 71, 0.7) 0%,
                            rgba(0, 12, 71, 0.5) 50%,
                            rgba(0, 12, 71, 0.7) 100%
                    );
                }

                .section-overlay {
                    background: linear-gradient(
                            to bottom,
                            rgba(0, 0, 0, 0.5) 0%,
                            rgba(0, 0, 0, 0.3) 50%,
                            rgba(0, 0, 0, 0.5) 100%
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
                    backdrop-filter: blur(4px);
                    background: rgba(255, 255, 255, 0.98);
                    box-shadow: 0 8px 32px rgba(0, 12, 71, 0.08);
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

            {/* Hero Section */}
            <section className="relative bg-no-repeat bg-cover bg-center min-h-dvh"
                     style={{backgroundImage: "url(/panelesfondo2.jpg)"}}>
                <div className="hero-gradient absolute inset-0 z-0"></div>
                <div
                    className="relative z-10 flex flex-col lg:flex-row items-center justify-center p-6 sm:p-10 lg:p-24 w-full min-h-dvh gap-12 lg:gap-16">
                    <div
                        className="flex flex-col items-center justify-center w-full lg:w-1/2 min-h-[40vh] lg:min-h-dvh space-y-6">
                        <h1 className="text-h1 text-center text-white drop-shadow-2xl animate-fade-in-up">
                            Impulsando el futuro.<br className="hidden sm:block" />
                            Para lo que viene<br className="hidden sm:block" /> en el horizonte.
                        </h1>
                        <h3 className="text-h3 text-white text-center mt-4 drop-shadow-lg max-w-2xl animate-fade-in-up"
                            style={{animationDelay: '0.2s'}}>
                            Nuestro compromiso es abrir camino<br className="hidden sm:block" /> hacia un futuro
                            mejor, para que<br className="hidden sm:block" /> estemos listos
                            para el futuro que cada vez<br className="hidden sm:block" /> está más cerca.
                        </h3>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center animate-fade-in-up"
                         style={{animationDelay: '0.4s'}}>
                        <BlogCarousel />
                    </div>
                </div>
            </section>

            {/* Section: Equipos extraordinarios */}
            <section className="bg-gradient-to-b from-white via-gray-50 to-white">
                <div
                    className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 py-16 lg:py-24 gap-10 lg:gap-20 justify-center items-center">
                    <div className="flex flex-col w-full lg:w-1/2 gap-6">
                        <h3 className="text-h3 sm:text-h2 leading-tight text-primaryBlue font-bold">
                            Equipos extraordinarios<br className="hidden sm:block" />
                            Construyendo proyectos<br className="hidden sm:block" />
                            Que impulsan hacia el futuro
                        </h3>
                        <p className="text-p text-gray-700 leading-relaxed">
                            Ofrecemos proyectos únicos que mejoran la calidad de vida,<br className="hidden sm:block" />
                            fomentamos la innovación y el desarrollo con<br className="hidden sm:block" />
                            soluciones integrales, con empresas con más de<br className="hidden sm:block" />
                            20 años de experiencia impulsando al mundo<br className="hidden sm:block" />
                            hacia el futuro, comprometidos con la calidad y la<br className="hidden sm:block" />
                            sostenibilidad de cada proyecto.
                        </p>
                        <p className="text-p text-gray-700 leading-relaxed">
                            Desde el sector de la construcción, ingeniería<br className="hidden sm:block" />
                            mecánica, civil, fotovoltaica, eléctrica, así como el<br className="hidden sm:block" />
                            desarrollo de proyectos eólicos, plantas solares,<br className="hidden sm:block" />
                            sistemas de autoconsumo para uso industrial<br className="hidden sm:block" />
                            comercial y residencial.
                        </p>
                        <p className="text-p text-gray-700 leading-relaxed">
                            Desarrollamos infraestructura y energía de alta<br className="hidden sm:block" />
                            calidad, con gran compromiso con la<br className="hidden sm:block" />
                            eficiencia, innovación y seguridad.
                        </p>
                        <div className="mt-2">
                            <BigButton textAfter="Misión, Visión y Valores" textBefore="Misión, Visión y Valores"
                                       textColor="black"
                                       minWidth="200px"
                                       maxWidth="280px" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-1/2 items-center">
                        <div className="relative group">
                            <Image src="/turbinas_4c_nucleologo.jpg" width={1200} height={1200}
                                   alt="Turbina eolica con logos de 4c y Nucleo Energy"
                                   className="w-full max-w-[540px] h-[420px] sm:h-[560px] lg:h-[700px] object-cover rounded-4xl shadow-2xl ring-1 ring-black/5 transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Calidad del equipo */}
            <section className="relative bg-no-repeat bg-cover bg-center min-h-dvh"
                     style={{backgroundImage: "url(/obras1.jpg)"}}>
                <div className="section-overlay absolute inset-0 z-0"></div>
                <div
                    className="relative z-10 flex flex-col lg:flex-row items-center justify-center p-6 sm:p-10 lg:p-24 w-full min-h-dvh gap-12 lg:gap-16">
                    <div
                        className="flex flex-col items-center justify-center w-full lg:w-1/2 min-h-[40vh] lg:min-h-dvh space-y-8">
                        <h2 className="text-h1 text-center text-white drop-shadow-2xl">
                            Definidos por la calidad<br className="hidden sm:block" />
                            de nuestro gran equipo.
                        </h2>
                        <BigButton textAfter="Nuestras empresas" textBefore="Nuestras empresas"
                                   textColor="white" minWidth="230px" maxWidth="260px" />
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="content-card rounded-3xl p-8 max-w-xl">
                            <p className="text-p text-gray-800 text-center lg:text-left leading-relaxed">
                                Nuestro equipo aporta su excelencia técnica, ingenio,<br className="hidden sm:block" />
                                empuje, creatividad y experiencia para ayudar a nuestros<br
                                className="hidden sm:block" />
                                clientes a lograr sus visiones audaces. Tenemos éxito a<br
                                className="hidden sm:block" />
                                través de la asociación y el deseo compartido de marcar<br
                                className="hidden sm:block" />
                                la diferencia. Motivados por los desafíos en el horizonte<br
                                className="hidden sm:block" />
                                superamos todos los límites posibles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Nuestras Empresas Header */}
            <section className="bg-gradient-to-b from-white to-gray-50 py-16 lg:py-20">
                <div className="flex flex-col px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 justify-center items-center">
                    <div className="decorative-line w-2/3 md:w-1/2 lg:w-1/3 h-1 mt-2 mb-6 rounded-full"></div>
                    <h3 className="section-title text-primaryBlue text-h1 text-center font-bold pb-4">
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
                <div
                    className="relative z-10 flex flex-col lg:flex-row items-center justify-center p-6 sm:p-10 lg:p-24 w-full min-h-dvh gap-12 lg:gap-16">
                    <div
                        className="flex flex-col items-center justify-center w-full lg:w-1/2 min-h-[40vh] lg:min-h-dvh space-y-8">
                        <h2 className="text-h1 text-center text-white drop-shadow-2xl">
                            Definidos por la calidad<br className="hidden sm:block" />
                            de nuestro gran equipo.
                        </h2>
                        <BigButton textAfter="Nuestro equipo" textBefore="Nuestro equipo"
                                   textColor="white" minWidth="200px" maxWidth="240px" />
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="content-card rounded-3xl p-8 max-w-xl">
                            <p className="text-p text-gray-800 text-center lg:text-left leading-relaxed">
                                La integridad, innovación y una mentalidad de "nunca<br
                                className="hidden sm:block" /> conformarse" están en el centro de
                                todo lo que hacemos.<br className="hidden sm:block" />
                                Nuestro equipo está lleno de pensadores audaces y<br
                                className="hidden sm:block" /> hábiles solucionadores de problemas
                                que convierten los<br className="hidden sm:block" /> desafíos en oportunidades para
                                lograr lo extraordinario.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Construimos Historia */}
            <section className="bg-white">
                <div
                    className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 pt-20 md:pt-28 lg:pt-40 justify-center items-center gap-10 lg:gap-16">
                    <div
                        className="flex flex-col w-full lg:w-1/2 items-center lg:items-start text-center lg:text-left space-y-6">
                        <h2 className="text-h1 text-primaryBlue font-bold">
                            Nosotros<br className="hidden sm:block" /> Construimos Historia
                        </h2>
                        <BigButton textAfter="Todos los Proyectos" textBefore="Todos los Proyectos"
                                   textColor="black" minWidth="200px" maxWidth="240px" />
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <p className="text-p text-gray-700 text-center lg:text-left leading-relaxed max-w-2xl">
                            La historia desde inicios del siglo y para los siguientes siglos estará determinada por la
                            capacidad del mundo para trabajar rápido y en gran escala para satisfacer necesidades en una
                            pronta evolución de infraestructura, energía, manufactura avanzada, recursos críticos,
                            protección ambiental y seguridad nacional.<br /><br />Durante muchos años hemos estado
                            siempre a la
                            altura de las circunstancias. Tenemos la experiencia y los conocimientos, y estamos
                            diseñados específicamente para afrontar todos estos desafíos que se asoman desde el
                            horizonte.
                        </p>
                    </div>
                </div>

                {/* Projects Section */}
                <div className="pb-24 flex flex-col gap-16 pt-20 md:pt-28 lg:pt-40">
                    <div className="flex flex-col w-full px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                        <h2 className="text-h1 font-bold text-primaryBlue">Proyectos Destacados</h2>
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
    );
}
