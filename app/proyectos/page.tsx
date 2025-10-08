"use client";
import * as React from "react";
import HeaderNav from "@/app/components/HeaderNav";
import Footer from "@/app/components/footer";
import ProjectsMegaMenu from "@/app/components/ProjectsMegaMenu";
import ProjectsHero from "@/app/components/proyectos/ProjectHero";
import ProjectsStats from "@/app/components/proyectos/ProjectsStats";
import ProjectsIntro from "@/app/components/proyectos/ProjectsIntro";
import ProjectsShowcase from "@/app/components/proyectos/ProjectsShowcase";
import ProjectsTimeline from "@/app/components/proyectos/ProjectsTimeline";
import ProjectsCapabilities from "@/app/components/proyectos/ProjectsCapabilities";
import ProjectsCTA from "@/app/components/proyectos/ProjectsCTA";

export default function ProyectosPage() {
    const [projectsOpen, setProjectsOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    const setProjectsOpenWithAnimation = React.useCallback((open: boolean) => {
        if (open) {
            if (closeTimer.current) {
                clearTimeout(closeTimer.current);
                closeTimer.current = null;
            }
            setIsClosing(false);
            setProjectsOpen(true);
        } else {
            if (projectsOpen) {
                setIsClosing(true);
                if (closeTimer.current) clearTimeout(closeTimer.current);
                closeTimer.current = setTimeout(() => {
                    setIsClosing(false);
                    closeTimer.current = null;
                }, 420);
            }
            setProjectsOpen(false);
        }
    }, [projectsOpen]);

    React.useEffect(() => {
        return () => {
            if (closeTimer.current) clearTimeout(closeTimer.current);
        };
    }, []);

    return (
        <div className="w-full min-h-dvh bg-bgMain">
            <div className="relative z-50" onMouseLeave={() => setProjectsOpenWithAnimation(false)}>
                <HeaderNav setProjectsOpen={setProjectsOpenWithAnimation} projectsOpen={projectsOpen} />
                <div
                    className={`hidden md:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-2xl transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] origin-top z-[60] ${projectsOpen ? 'animate-megaSlideDown opacity-100 translate-y-0 visible pointer-events-auto' : (isClosing ? 'animate-megaSlideUp visible pointer-events-none' : 'opacity-0 -translate-y-4 invisible pointer-events-none')}`}
                    onMouseEnter={() => setProjectsOpenWithAnimation(true)}
                >
                    <ProjectsMegaMenu />
                </div>
            </div>

            <ProjectsHero />
            <ProjectsStats />
            <ProjectsIntro />
            <ProjectsShowcase />
            <ProjectsTimeline />
            <ProjectsCapabilities />
            <ProjectsCTA />

            <Footer />
        </div>
    );
}