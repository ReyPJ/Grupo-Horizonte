"use client";
import * as React from "react";
import HeaderNav from "@/app/components/HeaderNav";
import Footer from "@/app/components/footer";
import ProjectsMegaMenu from "@/app/components/ProjectsMegaMenu";
import EnfoqueMegaMenu from "@/app/components/EnfoqueMegaMenu";
import EnfoqueHero from "@/app/components/enfoque/EnfoqueHero";
import EnfoqueIntro from "@/app/components/enfoque/EnfoqueIntro";
import EnfoqueMVV from "@/app/components/enfoque/EnfoqueMVV";
import EnfoqueProcess from "@/app/components/enfoque/EnfoqueProcess";
import EnfoqueSustainability from "@/app/components/enfoque/EnfoqueSustainability";
import EnfoqueTeam from "@/app/components/enfoque/EnfoqueTeam";
import EnfoqueCTA from "@/app/components/enfoque/EnfoqueCTA";

export default function EnfoquePage() {
    const [projectsOpen, setProjectsOpen] = React.useState(false);
    const [enfoqueOpen, setEnfoqueOpen] = React.useState(false); // ✅ NUEVO
    const [isClosingProjects, setIsClosingProjects] = React.useState(false);
    const [isClosingEnfoque, setIsClosingEnfoque] = React.useState(false); // ✅ NUEVO
    const closeTimerProjects = React.useRef<ReturnType<typeof setTimeout> | null>(null);
    const closeTimerEnfoque = React.useRef<ReturnType<typeof setTimeout> | null>(null); // ✅ NUEVO

    const setProjectsOpenWithAnimation = React.useCallback((open: boolean) => {
        if (open) {
            if (closeTimerProjects.current) {
                clearTimeout(closeTimerProjects.current);
                closeTimerProjects.current = null;
            }
            setIsClosingProjects(false);
            setProjectsOpen(true);
            // Cerrar Enfoque si está abierto
            if (enfoqueOpen) {
                setEnfoqueOpenWithAnimation(false);
            }
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

    // ✅ NUEVO - Callback para Enfoque
    const setEnfoqueOpenWithAnimation = React.useCallback((open: boolean) => {
        if (open) {
            if (closeTimerEnfoque.current) {
                clearTimeout(closeTimerEnfoque.current);
                closeTimerEnfoque.current = null;
            }
            setIsClosingEnfoque(false);
            setEnfoqueOpen(true);
            // Cerrar Proyectos si está abierto
            if (projectsOpen) {
                setProjectsOpenWithAnimation(false);
            }
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
            if (closeTimerEnfoque.current) clearTimeout(closeTimerEnfoque.current); // ✅ NUEVO
        };
    }, []);

    return (
        <div className="w-full min-h-dvh bg-bgMain">
            {/* ✅ Envolvemos AMBOS mega menús */}
            <div className="relative z-50" onMouseLeave={() => {
                setProjectsOpenWithAnimation(false);
                setEnfoqueOpenWithAnimation(false);
            }}>
                <HeaderNav
                    setProjectsOpen={setProjectsOpenWithAnimation}
                    projectsOpen={projectsOpen}
                    setEnfoqueOpen={setEnfoqueOpenWithAnimation} // ✅ NUEVO
                    enfoqueOpen={enfoqueOpen} // ✅ NUEVO
                />

                {/* Mega Menu de Proyectos */}
                <div
                    className={`hidden md:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-2xl transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] origin-top z-[60] ${projectsOpen ? 'animate-megaSlideDown opacity-100 translate-y-0 visible pointer-events-auto' : (isClosingProjects ? 'animate-megaSlideUp visible pointer-events-none' : 'opacity-0 -translate-y-4 invisible pointer-events-none')}`}
                    onMouseEnter={() => setProjectsOpenWithAnimation(true)}
                >
                    <ProjectsMegaMenu/>
                </div>

                {/* ✅ NUEVO - Mega Menu de Enfoque */}
                <div
                    className={`hidden md:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-2xl transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] origin-top z-[60] ${enfoqueOpen ? 'animate-megaSlideDown opacity-100 translate-y-0 visible pointer-events-auto' : (isClosingEnfoque ? 'animate-megaSlideUp visible pointer-events-none' : 'opacity-0 -translate-y-4 invisible pointer-events-none')}`}
                    onMouseEnter={() => setEnfoqueOpenWithAnimation(true)}
                >
                    <EnfoqueMegaMenu/>
                </div>
            </div>

            <EnfoqueHero />
            <EnfoqueIntro />
            <EnfoqueMVV />
            <EnfoqueProcess />
            <EnfoqueSustainability />
            <EnfoqueTeam />
            <EnfoqueCTA />

            <Footer/>
        </div>
    );
}