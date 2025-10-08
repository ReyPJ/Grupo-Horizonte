import Image from "next/image";
import * as React from "react";

type HeaderNavProps = {
    setProjectsOpen?: (open: boolean) => void;
    projectsOpen?: boolean;
    setEnfoqueOpen?: (open: boolean) => void;
    enfoqueOpen?: boolean;
};

export default function HeaderNav({
                                      setProjectsOpen,
                                      projectsOpen,
                                      setEnfoqueOpen,
                                      enfoqueOpen
                                  }: HeaderNavProps) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const toggleProjects = () => {
        if (setProjectsOpen) {
            setProjectsOpen(!projectsOpen);
        }
        if (setEnfoqueOpen && enfoqueOpen) {
            setEnfoqueOpen(false);
        }
    };

    const toggleEnfoque = () => {
        if (setEnfoqueOpen) {
            setEnfoqueOpen(!enfoqueOpen);
        }
        if (setProjectsOpen && projectsOpen) {
            setProjectsOpen(false);
        }
    };

    const openProjectsFromMobile = () => {
        setMobileOpen(false);
    };

    const openEnfoqueFromMobile = () => {
        setMobileOpen(false);
    };

    return (
        <div className="w-full h-fit bg-white border-b border-gray-100">
            <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3">
                <div className="flex items-center">
                    <Image
                        src="/LogoCompleto@4x.png"
                        width={400}
                        height={400}
                        alt="Logo Grupo Horizonte"
                        className="w-28 sm:w-32 h-auto object-contain"
                    />
                </div>

                {/* Desktop nav */}
                <div className="hidden md:flex px-4 gap-4 items-center">
                    <p className="text-h4 cursor-pointer transition delay-100 hover:bg-primaryBlue hover:text-white py-2 px-4 rounded-3xl">
                        <a href={"/"}>
                            Inicio
                        </a>
                    </p>
                    <button
                        type="button"
                        className={`text-h4 cursor-pointer transition delay-100 py-2 px-4 rounded-3xl ${projectsOpen ? 'bg-primaryBlue text-white' : 'hover:bg-primaryBlue hover:text-white'}`}
                        onMouseEnter={() => setProjectsOpen?.(true)}
                        onFocus={() => setProjectsOpen?.(true)}
                        onClick={toggleProjects}
                        aria-haspopup="true"
                        aria-expanded={projectsOpen ?? false}
                    >
                        <a href="/proyectos">
                            Proyectos
                        </a>
                    </button>
                    <p className="text-h4 cursor-pointer transition delay-100 hover:bg-primaryBlue hover:text-white py-2 px-4 rounded-3xl">
                        Empresas
                    </p>
                    <button
                        type="button"
                        className={`text-h4 cursor-pointer transition delay-100 py-2 px-4 rounded-3xl ${enfoqueOpen ? 'bg-primaryBlue text-white' : 'hover:bg-primaryBlue hover:text-white'}`}
                        onMouseEnter={() => setEnfoqueOpen?.(true)}
                        onFocus={() => setEnfoqueOpen?.(true)}
                        onClick={toggleEnfoque}
                        aria-haspopup="true"
                        aria-expanded={enfoqueOpen ?? false}
                    >
                        <a href="/enfoque">
                            Enfoque
                        </a>
                    </button>
                    <p className="text-h4 cursor-pointer transition delay-100 hover:bg-primaryBlue hover:text-white py-2 px-4 rounded-3xl">
                        <a href="/contacto">
                            Contacto
                        </a>
                    </p>
                </div>

                {/* Mobile hamburger */}
                <button
                    type="button"
                    className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primaryBlue"
                    aria-label="Abrir menú"
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen((v) => !v)}
                >
                    <svg
                        className={`h-6 w-6 ${mobileOpen ? 'hidden' : 'block'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                    </svg>
                    <svg
                        className={`h-6 w-6 ${mobileOpen ? 'block' : 'hidden'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Mobile menu panel */}
            <div
                className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-4 pb-3 space-y-1">
                    <button className="block w-full text-left text-h4 py-2 px-3 rounded-2xl hover:bg-gray-100" onClick={() => setMobileOpen(false)}>
                        <a href={"/"}>
                            Inicio
                        </a>
                    </button>
                    <button
                        className={`block w-full text-left text-h4 py-2 px-3 rounded-2xl ${projectsOpen ? 'bg-primaryBlue text-white' : 'hover:bg-gray-100'}`}
                        onClick={openProjectsFromMobile}
                        aria-haspopup="true"
                        aria-expanded={projectsOpen ?? false}
                    >
                        <a href={"/proyectos"}>
                            Proyectos
                        </a>
                    </button>
                    <button className="block w-full text-left text-h4 py-2 px-3 rounded-2xl hover:bg-gray-100" onClick={() => setMobileOpen(false)}>
                        Empresas
                    </button>
                    <button
                        className={`block w-full text-left text-h4 py-2 px-3 rounded-2xl ${enfoqueOpen ? 'bg-primaryBlue text-white' : 'hover:bg-gray-100'}`}
                        onClick={openEnfoqueFromMobile}
                        aria-haspopup="true"
                        aria-expanded={enfoqueOpen ?? false}
                    >
                        <a href={"/enfoque"}>
                            Enfoque
                        </a>
                    </button>
                    <button className="block w-full text-left text-h4 py-2 px-3 rounded-2xl hover:bg-gray-100" onClick={() => setMobileOpen(false)}>
                        <a href={"/contacto"}>
                            Contacto
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}