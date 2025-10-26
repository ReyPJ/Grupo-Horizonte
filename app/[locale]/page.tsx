"use client";
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
import {useTranslations} from 'next-intl';

export default function Home() {
    const t = useTranslations();

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
            company: t('CompanyData.fourC.name'),
            logoUrl: "/4cSInfondoLogo.png",
            smallHistoryText: t('CompanyData.fourC.shortHistory'),
            smallHistoryText2: t('CompanyData.fourC.shortHistory2'),
            buttonText: t('CompanyData.fourC.buttonText'),
            keyServices: [
                t('CompanyData.fourC.services.civilWorks'),
                t('CompanyData.fourC.services.electricalWorks'),
                t('CompanyData.fourC.services.specializedServices'),
                t('CompanyData.fourC.services.photovoltaic')
            ],
            image: "/Grua1.jpg",
            buttonMinWidth: "150px",
            buttonMaxWidth: "180px",
            bigButtonLinkTo: "/empresas/4C"
        },
        {
            company: t('CompanyData.imbar.name'),
            logoUrl: "/imbarlogo.jpeg",
            smallHistoryText: t('CompanyData.imbar.shortHistory'),
            smallHistoryText2: t('CompanyData.imbar.shortHistory2'),
            buttonText: t('CompanyData.imbar.buttonText'),
            keyServices: [
                t('CompanyData.imbar.services.substations'),
                t('CompanyData.imbar.services.transmission'),
                t('CompanyData.imbar.services.civilWorks'),
                t('CompanyData.imbar.services.manufacturing')
            ],
            image: "/LineasDeTransmisionElectrica.jpg",
            buttonMinWidth: "180px",
            buttonMaxWidth: "220px",
            bigButtonLinkTo: "/empresas/imbar"
        },
        {
            company: t('CompanyData.gerd.name'),
            logoUrl: "/gerdlogo.png",
            smallHistoryText: t('CompanyData.gerd.shortHistory'),
            smallHistoryText2: t('CompanyData.gerd.shortHistory2'),
            buttonText: t('CompanyData.gerd.buttonText'),
            keyServices: [
                t('CompanyData.gerd.services.industrial'),
                t('CompanyData.gerd.services.construction'),
                t('CompanyData.gerd.services.infrastructure'),
                t('CompanyData.gerd.services.telecommunications')
            ],
            image: "/img143.jpg",
            buttonMinWidth: "150px",
            buttonMaxWidth: "180px",
            bigButtonLinkTo: "/empresas/gerd"
        },
        {
            company: t('CompanyData.nucleoEnergy.name'),
            logoUrl: "/LogoHorizontal@4x.png",
            smallHistoryText: t('CompanyData.nucleoEnergy.shortHistory'),
            smallHistoryText2: t('CompanyData.nucleoEnergy.shortHistory2'),
            buttonText: t('CompanyData.nucleoEnergy.buttonText'),
            keyServices: [
                t('CompanyData.nucleoEnergy.services.windSolar'),
                t('CompanyData.nucleoEnergy.services.storage'),
                t('CompanyData.nucleoEnergy.services.manufacturing'),
                t('CompanyData.nucleoEnergy.services.infrastructure')
            ],
            image: "/2.jpg",
            buttonMinWidth: "180px",
            buttonMaxWidth: "220px",
            bigButtonLinkTo: "/empresas/nucleo-energy"
        },
        {
            company: t('CompanyData.reccmaq2.name'),
            logoUrl: "/reccmalogoxD.png",
            smallHistoryText: t('CompanyData.reccmaq2.shortHistory'),
            smallHistoryText2: t('CompanyData.reccmaq2.shortHistory2'),
            buttonText: t('CompanyData.reccmaq2.buttonText'),
            keyServices: [
                t('CompanyData.reccmaq2.services.reconstruction'),
                t('CompanyData.reccmaq2.services.maintenance'),
                t('CompanyData.reccmaq2.services.repair'),
                t('CompanyData.reccmaq2.services.national')
            ],
            image: "/img143.jpg",
            buttonMinWidth: "200px",
            buttonMaxWidth: "240px",
            bigButtonLinkTo: "/empresas/reccmaq2"
        }
    ]

    const projects = [
        {
            title: t('Projects.marina.title'),
            country: t('Projects.marina.country'),
            backgroundImageUrl: "/Secretaria.jpg",
            description: t('Projects.marina.description')
        },
        {
            title: t('Projects.pedido8833.title'),
            country: t('Projects.pedido8833.country'),
            backgroundImageUrl: "/pedido8833Aben3t.jpg",
            description: t('Projects.pedido8833.description')
        },
        {
            title: t('Projects.transmission.title'),
            country: t('Projects.transmission.country'),
            backgroundImageUrl: "/LineasDeTransmisionElectrica.jpg",
            description: t('Projects.transmission.description')
        },
        {
            title: t('Projects.rehabilitation.title'),
            country: t('Projects.rehabilitation.country'),
            backgroundImageUrl: "/RehabilatacionSubestacionesPeru.jpg",
            description: t('Projects.rehabilitation.description')
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
            <section className="relative bg-no-repeat bg-cover bg-center md:min-h-dvh"
                     style={{backgroundImage: "url(/panelesfondo2.jpg)"}}>
                <div className="hero-gradient absolute inset-0 z-0"></div>

                <Image
                    src="/LogoCompletoPositivo@4x.png"
                    width={600}
                    height={600}
                    alt=""
                    className="watermark-logo watermark-center"
                    aria-hidden="true"
                />

                {/* MOBILE LAYOUT - MUY COMPACTO */}
                <div className="lg:hidden relative z-10 flex flex-col items-center justify-center px-5 w-full min-h-[50vh] py-12">
                    <div className="flex flex-col items-center justify-center w-full max-w-md space-y-4">
                        {/* Título mobile - compacto */}
                        <h1 className="text-2xl sm:text-3xl text-center text-white text-shadow-strong animate-fade-in-up font-bold leading-snug">
                            {t('Hero.mainTitle')}
                        </h1>

                        {/* Subtítulo mobile - más pequeño */}
                        <p className="text-xs sm:text-sm text-white text-center text-shadow-soft animate-fade-in-up leading-relaxed opacity-90"
                           style={{animationDelay: '0.2s'}}>
                            {t('Hero.subtitle')}
                        </p>

                        {/* CTA Button mobile - más compacto */}
                        <div className="animate-fade-in-up mt-3" style={{animationDelay: '0.4s'}}>
                            <a href="#EMPRESAS">
                                <button className="bg-white text-primaryBlue px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                    {t('Hero.cta')}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* DESKTOP LAYOUT - EXACTAMENTE IGUAL QUE ANTES */}
                <div className="hidden lg:flex relative z-10 flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-24 w-full min-h-dvh gap-8 lg:gap-16 py-20 lg:py-0">
                    <div className="flex flex-col items-center justify-center w-full space-y-6 lg:space-y-8">
                        {/* Desktop: Con line break (igual que antes) */}
                        <h1 className="text-6xl lg:text-7xl text-center text-white text-shadow-strong animate-fade-in-up font-bold leading-tight max-w-4xl">
                            {t('Hero.mainTitleDesktop1')}{' '}
                            <span className="block mt-2 lg:mt-1">
                    {t('Hero.mainTitleDesktop2')}
                </span>
                        </h1>

                        <h3 className="text-lg sm:text-xl lg:text-2xl text-white text-center text-shadow-soft max-w-2xl animate-fade-in-up leading-relaxed px-2"
                            style={{animationDelay: '0.2s'}}>
                            {t('Hero.subtitle')}
                        </h3>
                    </div>
                </div>

                {/* Scroll indicator - solo desktop */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block animate-bounce-slow">
                    <div className="w-6 h-10 border-2 border-white/80 rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
            </section>

            <PartnerLogosSection />

            {/* Hero IMBAR */}
            <section className="relative bg-no-repeat bg-cover bg-center min-h-[90vh] lg:min-h-dvh"
                     style={{backgroundImage: "url(/LineasDeTransmisionElectrica.jpg)"}}>
                <div className="imbar-gradient absolute inset-0 z-0"></div>

                <Image
                    src="/LogoCompletoPositivo@4x.png"
                    width={280}
                    height={280}
                    alt=""
                    className="watermark-logo watermark-corner-tl"
                    aria-hidden="true"
                />

                {/* MOBILE LAYOUT - SUPER COMPACTO */}
                <div className="lg:hidden relative z-10 flex flex-col items-center justify-center px-4 w-full min-h-[90vh] py-10">
                    <div className="max-w-lg w-full space-y-6">
                        {/* Header compacto */}
                        <div className="text-center space-y-3">
                            <h2 className="text-2xl sm:text-3xl text-white text-shadow-strong font-bold leading-tight">
                                {t('IMBAR.title')}
                            </h2>
                            <div className="decorative-line w-20 h-0.5 mx-auto rounded-full"></div>
                            <p className="text-xs sm:text-sm text-white text-shadow-soft leading-relaxed opacity-90">
                                {t('IMBAR.subtitle')}
                            </p>
                        </div>

                        {/* Stats - más compactos en mobile */}
                        <div className="grid grid-cols-3 gap-3">
                            <div className="stat-card content-card rounded-xl p-3 text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-primaryBlue mb-1">{t('IMBAR.stat1Value')}</div>
                                <div className="text-gray-700 text-[10px] sm:text-xs font-medium leading-tight">{t('IMBAR.stat1Label')}</div>
                            </div>

                            <div className="stat-card content-card rounded-xl p-3 text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-thirdGreen mb-1">{t('IMBAR.stat2Value')}</div>
                                <div className="text-gray-700 text-[10px] sm:text-xs font-medium leading-tight">{t('IMBAR.stat2Label')}</div>
                            </div>

                            <div className="stat-card content-card rounded-xl p-3 text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-primaryBlue mb-1">{t('IMBAR.stat3Value')}</div>
                                <div className="text-gray-700 text-[10px] sm:text-xs font-medium leading-tight">{t('IMBAR.stat3Label')}</div>
                            </div>
                        </div>

                        {/* Servicios - lista compacta */}
                        <div className="content-card rounded-2xl p-4 space-y-3">
                            <div className="space-y-2">
                                <h3 className="text-sm font-bold text-primaryBlue">{t('IMBAR.service1Title')}</h3>
                                <p className="text-xs text-gray-700 leading-relaxed">
                                    {t('IMBAR.service1Description')}
                                </p>
                            </div>
                            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                            <div className="space-y-2">
                                <h3 className="text-sm font-bold text-thirdGreen">{t('IMBAR.service2Title')}</h3>
                                <p className="text-xs text-gray-700 leading-relaxed">
                                    {t('IMBAR.service2Description')}
                                </p>
                            </div>
                        </div>

                        {/* Botón compacto */}
                        <div className="text-center pt-2">
                            <a href="/empresas/imbar">
                                <button className="bg-white text-primaryBlue px-5 py-2 rounded-full font-bold text-xs sm:text-sm hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:scale-105">
                                    {t('IMBAR.cta')}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* DESKTOP LAYOUT - EXACTAMENTE IGUAL QUE ANTES */}
                <div className="hidden lg:flex relative z-10 flex-col items-center justify-center px-4 sm:px-8 lg:px-24 w-full md:min-h-dvh py-20">
                    <div className="max-w-6xl w-full space-y-12">
                        <div className="text-center space-y-6">
                            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white text-shadow-strong font-bold leading-tight">
                                {t('IMBAR.title')}
                            </h2>

                            <div className="decorative-line w-1/3 h-1 mx-auto rounded-full"></div>
                            <p className="text-lg sm:text-xl lg:text-2xl text-white text-shadow-soft max-w-3xl mx-auto leading-relaxed px-4">
                                {t('IMBAR.subtitle')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                            <div className="stat-card content-card rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105">
                                <div className="text-5xl font-bold text-primaryBlue mb-3">{t('IMBAR.stat1Value')}</div>
                                <div className="text-gray-700 text-lg font-medium">{t('IMBAR.stat1Label')}</div>
                                <div className="text-gray-600 text-sm mt-2">{t('IMBAR.stat1Description')}</div>
                            </div>

                            <div className="stat-card content-card rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105">
                                <div className="text-5xl font-bold text-thirdGreen mb-3">{t('IMBAR.stat2Value')}</div>
                                <div className="text-gray-700 text-lg font-medium">{t('IMBAR.stat2Label')}</div>
                                <div className="text-gray-600 text-sm mt-2">{t('IMBAR.stat2Description')}</div>
                            </div>

                            <div className="stat-card content-card rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105">
                                <div className="text-5xl font-bold text-primaryBlue mb-3">{t('IMBAR.stat3Value')}</div>
                                <div className="text-gray-700 text-lg font-medium">{t('IMBAR.stat3LabelDesktop')}</div>
                                <div className="text-gray-600 text-sm mt-2">{t('IMBAR.stat3Description')}</div>
                            </div>
                        </div>

                        <div className="content-card rounded-3xl p-8 lg:p-12 mt-12">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-primaryBlue mb-4">{t('IMBAR.service1Title')}</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {t('IMBAR.service1DescriptionDesktop')}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-thirdGreen mb-4">{t('IMBAR.service2Title')}</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {t('IMBAR.service2DescriptionDesktop')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <a href="/empresas/imbar">
                                <BigButton
                                    textAfter={t('IMBAR.cta')}
                                    textBefore={t('IMBAR.cta')}
                                    textColor="white"
                                    minWidth="200px"
                                    maxWidth="240px"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero 4C */}
            <section className="relative bg-no-repeat bg-cover bg-center min-h-[90vh] lg:min-h-dvh"
                     style={{backgroundImage: "url(/Grua1.jpg)"}}>
                <div className="four-c-gradient absolute inset-0 z-0"></div>

                {/* Marca de agua - MÁS PEQUEÑA en mobile */}
                <Image
                    src="/LogoCompletoPositivo@4x.png"
                    width={280}
                    height={280}
                    alt=""
                    className="watermark-logo watermark-corner-br hidden lg:block"
                    aria-hidden="true"
                />
                {/* Marca de agua mobile - centrada y más pequeña */}
                <div className="lg:hidden absolute inset-0 flex items-center justify-center pointer-events-none z-1">
                    <Image
                        src="/LogoCompletoPositivo@4x.png"
                        width={200}
                        height={200}
                        alt=""
                        className="opacity-[0.04] mix-blend-overlay"
                        aria-hidden="true"
                    />
                </div>

                {/* MOBILE LAYOUT - SUPER COMPACTO */}
                <div className="lg:hidden relative z-10 flex flex-col items-center justify-center px-4 w-full min-h-[90vh] py-10">
                    <div className="max-w-lg w-full space-y-6">
                        {/* Header compacto */}
                        <div className="text-center space-y-3">
                            <h2 className="text-2xl sm:text-3xl text-white text-shadow-strong font-bold leading-tight">
                                {t('FourC.title')}
                            </h2>
                            <div className="decorative-line w-20 h-0.5 mx-auto rounded-full"></div>
                            <p className="text-xs sm:text-sm text-white text-shadow-soft leading-relaxed opacity-90">
                                {t('FourC.subtitle')}
                            </p>
                        </div>

                        {/* Stats - grid 3 columnas compacto */}
                        <div className="grid grid-cols-3 gap-3">
                            <div className="stat-card content-card rounded-xl p-3 text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-primaryBlue mb-1">{t('FourC.stat1Value')}</div>
                                <div className="text-gray-700 text-[10px] sm:text-xs font-medium leading-tight">{t('FourC.stat1Label')}</div>
                            </div>

                            <div className="stat-card content-card rounded-xl p-3 text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-secondYellow mb-1">{t('FourC.stat2Value')}</div>
                                <div className="text-gray-700 text-[10px] sm:text-xs font-medium leading-tight">{t('FourC.stat2Label')}</div>
                            </div>

                            <div className="stat-card content-card rounded-xl p-3 text-center">
                                <div className="text-xl sm:text-2xl font-bold text-thirdGreen mb-1">{t('FourC.stat3Value')}</div>
                                <div className="text-gray-700 text-[10px] sm:text-xs font-medium leading-tight">{t('FourC.stat3Label')}</div>
                            </div>
                        </div>

                        {/* Servicios - lista compacta */}
                        <div className="content-card rounded-2xl p-4 space-y-3">
                            <div className="space-y-2">
                                <h3 className="text-sm font-bold text-primaryBlue">{t('FourC.service1Title')}</h3>
                                <p className="text-xs text-gray-700 leading-relaxed">
                                    {t('FourC.service1Description')}
                                </p>
                            </div>
                            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                            <div className="space-y-2">
                                <h3 className="text-sm font-bold text-secondYellow">{t('FourC.service2Title')}</h3>
                                <p className="text-xs text-gray-700 leading-relaxed">
                                    {t('FourC.service2Description')}
                                </p>
                            </div>
                        </div>

                        {/* Botón compacto */}
                        <div className="text-center pt-2">
                            <a href="/empresas/4C">
                                <button className="bg-white text-primaryBlue px-5 py-2 rounded-full font-bold text-xs sm:text-sm hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:scale-105">
                                    {t('FourC.cta')}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* DESKTOP LAYOUT - EXACTAMENTE IGUAL QUE ANTES */}
                <div className="hidden lg:flex relative z-10 flex-col items-center justify-center px-4 sm:px-8 lg:px-24 w-full min-h-dvh py-20">
                    <div className="max-w-6xl w-full space-y-12">
                        <div className="text-center space-y-6">
                            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white text-shadow-strong font-bold leading-tight">
                                {t('FourC.title')}
                            </h2>

                            <div className="decorative-line w-1/3 h-1 mx-auto rounded-full"></div>
                            <p className="text-lg sm:text-xl lg:text-2xl text-white text-shadow-soft max-w-3xl mx-auto leading-relaxed px-4">
                                {t('FourC.subtitle')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                            <div className="stat-card content-card rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105">
                                <div className="text-5xl font-bold text-primaryBlue mb-3">{t('FourC.stat1Value')}</div>
                                <div className="text-gray-700 text-lg font-medium">{t('FourC.stat1LabelDesktop')}</div>
                                <div className="text-gray-600 text-sm mt-2">{t('FourC.stat1Description')}</div>
                            </div>

                            <div className="stat-card content-card rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105">
                                <div className="text-5xl font-bold text-secondYellow mb-3">{t('FourC.stat2Value')}</div>
                                <div className="text-gray-700 text-lg font-medium">{t('FourC.stat2LabelDesktop')}</div>
                                <div className="text-gray-600 text-sm mt-2">{t('FourC.stat2Description')}</div>
                            </div>

                            <div className="stat-card content-card rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105">
                                <div className="text-5xl font-bold text-thirdGreen mb-3">{t('FourC.stat3Value')}</div>
                                <div className="text-gray-700 text-lg font-medium">{t('FourC.stat3Label')}</div>
                                <div className="text-gray-600 text-sm mt-2">{t('FourC.stat3Description')}</div>
                            </div>
                        </div>

                        <div className="content-card rounded-3xl p-8 lg:p-12 mt-12">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-primaryBlue mb-4">{t('FourC.service1Title')}</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {t('FourC.service1DescriptionDesktop')}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-secondYellow mb-4">{t('FourC.service2Title')}</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {t('FourC.service2DescriptionDesktop')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <a href="/empresas/4C">
                                <BigButton
                                    textAfter={t('FourC.cta')}
                                    textBefore={t('FourC.cta')}
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
                {/* MOBILE LAYOUT */}
                <div className="lg:hidden px-4 py-12">
                    <div className="max-w-lg mx-auto space-y-6">
                        {/* Título compacto */}
                        <h3 className="text-2xl sm:text-3xl leading-tight text-primaryBlue font-bold text-center">
                            {t('ExtraordinaryTeams.title')}
                        </h3>

                        {/* Imagen compacta */}
                        <div className="relative w-full">
                            <Image
                                src="/Heroafter.jpeg"
                                width={1200}
                                height={800}
                                alt={t('AriaLabels.turbineAlt')}
                                className="w-full h-[240px] sm:h-[280px] object-cover rounded-2xl shadow-xl ring-1 ring-black/5"
                            />
                        </div>

                        {/* Texto resumido y compacto */}
                        <div className="space-y-3">
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-center">
                                {t('ExtraordinaryTeams.paragraph1')}
                            </p>

                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-center">
                                {t('ExtraordinaryTeams.paragraph2')}
                            </p>
                        </div>

                        {/* Botón compacto */}
                        <div className="flex justify-center pt-2">
                            <a href="/enfoque#ADN">
                                <button className="bg-primaryBlue text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:scale-105">
                                    {t('ExtraordinaryTeams.cta')}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* DESKTOP LAYOUT - EXACTAMENTE IGUAL */}
                <div className="hidden lg:flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 py-16 lg:py-24 gap-10 lg:gap-20 justify-center items-center">
                    <div className="flex flex-col w-full lg:w-1/2 gap-6">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-primaryBlue font-bold">
                            <span className="block">{t('ExtraordinaryTeams.titleDesktop1')}</span>
                            <span className="block">{t('ExtraordinaryTeams.titleDesktop2')}</span>
                            <span className="block">{t('ExtraordinaryTeams.titleDesktop3')}</span>
                        </h3>

                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            {t('ExtraordinaryTeams.paragraph1Desktop')}
                        </p>

                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            {t('ExtraordinaryTeams.paragraph2Desktop')}
                        </p>

                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            {t('ExtraordinaryTeams.paragraph3Desktop')}
                        </p>

                        <div className="mt-4">
                            <a href="/enfoque#ADN">
                                <BigButton
                                    textAfter={t('ExtraordinaryTeams.cta')}
                                    textBefore={t('ExtraordinaryTeams.cta')}
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
            <section className="relative bg-no-repeat bg-cover bg-center min-h-[75vh] lg:min-h-dvh"
                     style={{backgroundImage: "url(/obras1.jpg)"}}>
                <div className="section-overlay absolute inset-0 z-0"></div>

                {/* Marca de agua - más sutil en mobile */}
                <div className="lg:hidden absolute inset-0 flex items-center justify-center pointer-events-none z-1">
                    <Image
                        src="/LogoCompletoPositivo@4x.png"
                        width={250}
                        height={250}
                        alt=""
                        className="opacity-[0.05] mix-blend-overlay"
                        aria-hidden="true"
                    />
                </div>
                <Image
                    src="/LogoCompletoPositivo@4x.png"
                    width={600}
                    height={600}
                    alt=""
                    className="watermark-logo watermark-center hidden lg:block"
                    aria-hidden="true"
                />

                {/* MOBILE LAYOUT - COMPACTO */}
                <div className="lg:hidden relative z-10 flex flex-col items-center justify-center px-4 w-full min-h-[75vh] py-10">
                    <div className="max-w-lg w-full space-y-5">
                        {/* Título compacto */}
                        <h2 className="text-2xl sm:text-3xl text-center text-white text-shadow-strong font-bold leading-tight">
                            {t('TeamQuality.title')}
                        </h2>

                        {/* Card con texto - más compacta */}
                        <div className="content-card rounded-2xl p-5">
                            <p className="text-xs sm:text-sm text-gray-800 text-center leading-relaxed">
                                {t('TeamQuality.description')}
                            </p>
                        </div>

                        {/* Botón compacto */}
                        <div className="flex justify-center pt-2">
                            <a href="#EMPRESAS">
                                <button className="bg-white text-primaryBlue px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:scale-105">
                                    {t('TeamQuality.cta')}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* DESKTOP LAYOUT - EXACTAMENTE IGUAL QUE ANTES */}
                <div className="hidden lg:flex relative z-10 flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-24 w-full min-h-dvh gap-10 lg:gap-16 py-20 lg:py-0">

                    <div className="flex flex-col items-center justify-center w-full lg:w-1/2 space-y-8">
                        <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center text-white text-shadow-strong font-bold leading-tight max-w-3xl px-4">
                            {t('TeamQuality.title')}
                        </h2>
                        <a href="#EMPRESAS">
                            <BigButton
                                textAfter={t('TeamQuality.cta')}
                                textBefore={t('TeamQuality.cta')}
                                textColor="white"
                                minWidth="230px"
                                maxWidth="260px"
                            />
                        </a>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center px-2">
                        <div className="content-card rounded-3xl p-6 sm:p-8 max-w-xl">
                            <p className="text-base sm:text-lg text-gray-800 text-center lg:text-left leading-relaxed">
                                {t('TeamQuality.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Nuestras Empresas Header */}
            <section className="bg-gradient-to-b from-white to-gray-50 py-8 lg:py-16">
                <div className="flex flex-col px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 justify-center items-center">
                    {/* Mobile: más compacto */}
                    <div className="lg:hidden flex flex-col items-center gap-3">
                        <div className="decorative-line w-16 h-0.5 rounded-full"></div>
                        <h3 id="EMPRESAS" className="text-2xl sm:text-3xl text-center font-bold text-primaryBlue">
                            {t('Companies.sectionTitle')}
                        </h3>
                    </div>

                    {/* Desktop: igual que antes */}
                    <div className="hidden lg:flex flex-col items-center">
                        <div className="decorative-line w-1/3 h-1 mt-2 mb-6 rounded-full"></div>
                        <h3 className="section-title text-primaryBlue text-4xl sm:text-5xl lg:text-6xl text-center font-bold pb-4">
                            {t('Companies.sectionTitle')}
                        </h3>
                    </div>
                </div>
            </section>

            {/* Company Slider */}
            <section className="bg-gradient-to-b from-gray-50 to-white py-4 lg:py-8">
                <div className="flex px-2 sm:px-4 lg:px-16 xl:px-24 2xl:px-64 justify-center items-center">
                    <CompanySlider companies={companies} />
                </div>
            </section>

            {/* Section: Nuestro Equipo */}
            <section className="relative bg-no-repeat bg-cover bg-center min-h-[60vh] lg:min-h-dvh"
                     style={{backgroundImage: "url(/eolico2.jpg)"}}>
                <div className="section-overlay absolute inset-0 z-0"></div>

                {/* MOBILE LAYOUT - ULTRA COMPACTO */}
                <div className="lg:hidden relative z-10 flex flex-col items-center justify-center px-5 w-full min-h-[60vh] py-8">
                    <div className="max-w-md w-full space-y-4">
                        {/* Título compacto */}
                        <h2 className="text-xl sm:text-2xl text-center text-white text-shadow-strong font-bold leading-tight">
                            {t('TeamQuality.title')}
                        </h2>

                        {/* Card muy compacta */}
                        <div className="content-card rounded-xl p-4 backdrop-blur-md">
                            <p className="text-xs text-gray-800 text-center leading-relaxed">
                                {t('TeamQuality.descriptionMobile')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* DESKTOP LAYOUT - EXACTAMENTE IGUAL QUE ANTES */}
                <div className="hidden lg:flex relative z-10 flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-24 w-full min-h-dvh gap-10 lg:gap-16 py-20 lg:py-0">
                    <Image
                        src="/LogoCompletoPositivo@4x.png"
                        width={600}
                        height={600}
                        alt=""
                        className="watermark-logo watermark-center"
                        aria-hidden="true"
                    />

                    <div className="flex flex-col items-center justify-center w-full lg:w-1/2 space-y-8">
                        <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center text-white text-shadow-strong font-bold leading-tight max-w-3xl px-4">
                            {t('TeamQuality.title')}
                        </h2>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center px-2">
                        <div className="content-card rounded-3xl p-6 sm:p-8 max-w-xl">
                            <p className="text-base sm:text-lg text-gray-800 text-center lg:text-left leading-relaxed">
                                {t('TeamQuality.descriptionDesktop')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Construimos Historia */}
            <section className="bg-white">
                {/* MOBILE LAYOUT */}
                <div className="lg:hidden px-4 py-12">
                    <div className="max-w-lg mx-auto space-y-6">
                        {/* Título compacto */}
                        <h2 className="text-2xl sm:text-3xl text-primaryBlue font-bold leading-tight text-center">
                            {t('History.title')}
                        </h2>

                        {/* Texto resumido */}
                        <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">
                            {t('History.paragraph1')}
                        </p>

                        <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">
                            {t('History.paragraph2')}
                        </p>

                        {/* Botón compacto */}
                        <div className="flex justify-center pt-2">
                            <a href="/proyectos">
                                <button className="bg-primaryBlue text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:scale-105">
                                    {t('History.cta')}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* DESKTOP LAYOUT - EXACTAMENTE IGUAL */}
                <div className="hidden lg:flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 pt-16 md:pt-24 lg:pt-32 justify-center items-center gap-10 lg:gap-16">
                    <div className="flex flex-col w-full lg:w-1/2 items-center lg:items-start text-center lg:text-left space-y-6">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-primaryBlue font-bold leading-tight">
                            {t('History.title')}
                        </h2>
                        <a href="/proyectos">
                            <BigButton
                                textAfter={t('History.cta')}
                                textBefore={t('History.cta')}
                                textColor="black"
                                minWidth="200px"
                                maxWidth="240px"
                            />
                        </a>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center">
                        <p className="text-base sm:text-lg text-gray-700 text-center lg:text-left leading-relaxed max-w-2xl">
                            {t('History.paragraph1Desktop')}
                            <br /><br />
                            {t('History.paragraph2Desktop')}
                        </p>
                    </div>
                </div>

                {/* Projects Section - Título compacto mobile */}
                <div className="pb-16 lg:pb-24 flex flex-col gap-8 lg:gap-16 pt-12 lg:pt-32">
                    {/* Mobile: título más pequeño */}
                    <div className="lg:hidden flex flex-col w-full px-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-primaryBlue text-center">
                            {t('History.featuredProjects')}
                        </h2>
                    </div>

                    {/* Desktop: título original */}
                    <div className="hidden lg:flex flex-col w-full px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primaryBlue">
                            {t('History.featuredProjects')}
                        </h2>
                    </div>

                    {/* Slider - SIN TOCAR, mantiene animación */}
                    <ProjectSlide projects={projects} />

                    {/* Línea decorativa - más delgada en mobile */}
                    <div className="flex justify-center px-4">
                        <div className="w-3/4 max-w-4xl bg-gradient-to-r from-transparent via-thirdGreen to-transparent h-[3px] lg:h-[5px] rounded-xl shadow-lg"></div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}