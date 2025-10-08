"use client";
import * as React from "react";
import HeaderNav from "@/app/components/HeaderNav";
import Footer from "@/app/components/footer";
import ProjectsMegaMenu from "@/app/components/ProjectsMegaMenu";
import EnfoqueMegaMenu from "@/app/components/EnfoqueMegaMenu";
import ContactHero from "@/app/components/contacto/ContactHero";
import ContactInfo from "@/app/components/contacto/ContactInfo";
import ContactForm from "@/app/components/contacto/ContactForm";
import ContactMap from "@/app/components/contacto/ContactMap";
import ContactCTA from "@/app/components/contacto/ContactCTA";

export default function ContactPage() {
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

    const setEnfoqueOpenWithAnimation = React.useCallback((open: boolean) => {
        if (open) {
            if (closeTimerEnfoque.current) {
                clearTimeout(closeTimerEnfoque.current);
                closeTimerEnfoque.current = null;
            }
            setIsClosingEnfoque(false);
            setEnfoqueOpen(true);
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
            if (closeTimerEnfoque.current) clearTimeout(closeTimerEnfoque.current);
        };
    }, []);

    return (
        <div className="w-full min-h-dvh bg-bgMain">
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

            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <ContactMap />
            <ContactCTA />

            <Footer />
        </div>
    );
}