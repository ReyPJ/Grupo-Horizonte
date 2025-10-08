import Image from "next/image";
import * as React from "react";
import BigButton from "@/app/components/bigButton";

type HeaderNavProps = {
    setProjectsOpen?: (open: boolean) => void;
    projectsOpen?: boolean;
};

export default function HeaderNav({ setProjectsOpen, projectsOpen }: HeaderNavProps) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [internalProjectsOpen, setInternalProjectsOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
    const [activeTab, setActiveTab] = React.useState<'mercado' | 'region'>('mercado');

    // Si viene controlado desde afuera, usa esas props; si no, usa estado interno
    const projectsState = setProjectsOpen !== undefined ? projectsOpen : internalProjectsOpen;
    const setProjectsState = setProjectsOpen !== undefined ? setProjectsOpen : setInternalProjectsOpen;

    const setProjectsOpenWithAnimation = React.useCallback((open: boolean) => {
        if (open) {
            if (closeTimer.current) {
                clearTimeout(closeTimer.current);
                closeTimer.current = null;
            }
            setIsClosing(false);
            setProjectsState(true);
        } else {
            if (projectsState) {
                setIsClosing(true);
                if (closeTimer.current) clearTimeout(closeTimer.current);
                closeTimer.current = setTimeout(() => {
                    setIsClosing(false);
                    closeTimer.current = null;
                }, 420);
            }
            setProjectsState(false);
        }
    }, [projectsState, setProjectsState]);

    React.useEffect(() => {
        return () => {
            if (closeTimer.current) clearTimeout(closeTimer.current);
        };
    }, []);

    const toggleProjects = () => {
        setProjectsOpenWithAnimation(!projectsState);
    };

    const openProjectsFromMobile = () => {
        setMobileOpen(false);
    };

    const mercados = [
        { key: 'eolica', title: 'Energía eólica', img: '/eolico2.jpg' },
        { key: 'fotovoltaica', title: 'Energía fotovoltaica', img: '/paneles.jpg' },
        { key: 'construccion', title: 'Construcción', img: '/Grua1.jpg' },
        { key: 'transmision', title: 'Transmisión y distribución', img: '/LineasDeTransmisionElectrica.jpg' },
        { key: 'mantenimiento', title: 'Mantenimiento', img: '/RehabilatacionSubestacionesPeru.jpg' },
        { key: 'servicios', title: 'Servicios especializados', img: '/turbinas_4c_nucleologo.jpg' },
    ];

    const regiones = [
        { key: 'mx', title: 'México', img: '/Secretaria.jpg' },
        { key: 'pe', title: 'Perú', img: '/RehabilatacionSubestacionesPeru.jpg' },
        { key: 'latam', title: 'Latinoamérica', img: '/obras1.jpg' },
    ];

    return (
        <div className="relative z-50" onMouseLeave={() => setProjectsOpenWithAnimation(false)}>
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
                            Inicio
                        </p>
                        <button
                            type="button"
                            className={`text-h4 cursor-pointer transition delay-100 py-2 px-4 rounded-3xl ${projectsState ? 'bg-primaryBlue text-white' : 'hover:bg-primaryBlue hover:text-white'}`}
                            onMouseEnter={() => setProjectsOpenWithAnimation(true)}
                            onFocus={() => setProjectsOpenWithAnimation(true)}
                            onClick={toggleProjects}
                            aria-haspopup="true"
                            aria-expanded={projectsState ?? false}
                        >
                            Proyectos
                        </button>
                        <p className="text-h4 cursor-pointer transition delay-100 hover:bg-primaryBlue hover:text-white py-2 px-4 rounded-3xl">
                            Empresas
                        </p>
                        <p className="text-h4 cursor-pointer transition delay-100 hover:bg-primaryBlue hover:text-white py-2 px-4 rounded-3xl">
                            Enfoque
                        </p>
                        <p className="text-h4 cursor-pointer transition delay-100 hover:bg-primaryBlue hover:text-white py-2 px-4 rounded-3xl">
                            Contacto
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
                            Inicio
                        </button>
                        <button
                            className={`block w-full text-left text-h4 py-2 px-3 rounded-2xl ${projectsState ? 'bg-primaryBlue text-white' : 'hover:bg-gray-100'}`}
                            onClick={openProjectsFromMobile}
                            aria-haspopup="true"
                            aria-expanded={projectsState ?? false}
                        >
                            Proyectos
                        </button>
                        <button className="block w-full text-left text-h4 py-2 px-3 rounded-2xl hover:bg-gray-100" onClick={() => setMobileOpen(false)}>
                            Empresas
                        </button>
                        <button className="block w-full text-left text-h4 py-2 px-3 rounded-2xl hover:bg-gray-100" onClick={() => setMobileOpen(false)}>
                            Enfoque
                        </button>
                        <button className="block w-full text-left text-h4 py-2 px-3 rounded-2xl hover:bg-gray-100" onClick={() => setMobileOpen(false)}>
                            Contacto
                        </button>
                    </div>
                </div>
            </div>

            {/* Mega Menu Desktop */}
            <div
                className={`hidden md:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-2xl transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] origin-top z-[60] ${projectsState ? 'animate-megaSlideDown opacity-100 translate-y-0 visible pointer-events-auto' : (isClosing ? 'animate-megaSlideUp visible pointer-events-none' : 'opacity-0 -translate-y-4 invisible pointer-events-none')}`}
                onMouseEnter={() => setProjectsOpenWithAnimation(true)}
            >
                <div className={"w-full py-6 px-6 md:px-12 lg:px-20 bg-white"}>
                    <div className={"flex flex-col lg:flex-row gap-10"}>
                        {/* Left column: intro + blog */}
                        <div className={"w-full lg:w-1/3 lg:pr-10 lg:border-r lg:border-gray-200"}>
                            <div className={"flex flex-col gap-6 lg:gap-10"}>
                                <h3 className={"text-h3"}>Construyendo Historia</h3>
                                <p className={"text-p"}>
                                    Escala. Complejidad. Impacto. Propósito. Ofrecemos proyectos<br className="hidden sm:block" />{" "}
                                    desafiantes que elevan los de niveles de vida, impulsan la<br className="hidden sm:block" />{" "}
                                    prosperidad y apoyan el crecimiento sostenible en todo el mundo<br className="hidden sm:block" />{" "}-
                                    desde transporte limpio y eficiente hasta energía sostenible,<br className="hidden sm:block" />{" "}infraestructura y mucho más.
                                </p>
                                <BigButton textBefore={'Todos los proyectos'} textAfter={'Todos los proyectos'} minWidth={"230px"}
                                           maxWidth={"280px"} />
                            </div>
                            <div className={"flex flex-col gap-3"}>
                                <p className={"text-p uppercase pt-4 text-center lg:text-left"}>
                                    Conoce más en nuestro blog
                                </p>
                                <div className={"w-full bg-gray-300 h-[2px] rounded-xl my-2"}></div>
                                <div className={"flex gap-3 w-full items-center"}>
                                    <Image
                                        src={"/eolico2.jpg"}
                                        width={800}
                                        height={800}
                                        alt={"Parque eólico en las montañas en México"}
                                        className={"hidden sm:block w-28 sm:w-36 h-20 sm:h-24 object-cover rounded-2xl flex-shrink-0"}
                                    />
                                    <div className={"space-y-0.5 flex-1 min-w-0"}>
                                        <p className={"text-primaryBlue leading-tight break-words text-[16px] sm:text-[18px]"}>
                                            El avance en la energía eólica
                                        </p>
                                        <p className={"text-gray-900 leading-snug break-words text-[13px] sm:text-[14px]"}>
                                            Desde la planeación hasta la ejecución del proyecto
                                        </p>
                                    </div>
                                </div>
                                <div className={"flex gap-3 w-full items-center"}>
                                    <Image
                                        src={"/paneles.jpg"}
                                        width={800}
                                        height={800}
                                        alt={"Paneles solares a cielo abierto"}
                                        className={"hidden sm:block w-28 sm:w-36 h-20 sm:h-24 object-cover rounded-2xl flex-shrink-0"}
                                    />
                                    <div className={"space-y-0.5 flex-1 min-w-0"}>
                                        <p className={"text-primaryBlue leading-tight break-words text-[16px] sm:text-[18px]"}>
                                            Energía Fotovoltaica
                                        </p>
                                        <p className={"text-gray-900 leading-snug break-words text-[13px] sm:text-[14px]"}>
                                            La importancia de migrar a este tipo de energía
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right column: tabs */}
                        <div className={"w-full lg:w-2/3 lg:pl-10"}>
                            <div className="flex items-center gap-8 border-b border-gray-200">
                                <button
                                    className={`${activeTab === 'mercado' ? 'text-primaryBlue border-primaryBlue' : 'text-gray-500 border-transparent'} uppercase tracking-widest text-[13px] py-4 border-b-2`}
                                    onClick={() => setActiveTab('mercado')}
                                >
                                    Explorar proyectos por mercado
                                </button>
                                <button
                                    className={`${activeTab === 'region' ? 'text-primaryBlue border-primaryBlue' : 'text-gray-500 border-transparent'} uppercase tracking-widest text-[13px] py-4 border-b-2`}
                                    onClick={() => setActiveTab('region')}
                                >
                                    Explorar proyectos por región
                                </button>
                            </div>

                            <div className="pt-6">
                                {activeTab === 'mercado' && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {mercados.map((m) => (
                                            <div key={m.key} className="group cursor-pointer flex flex-col items-start text-left">
                                                <Image
                                                    src={m.img}
                                                    width={800}
                                                    height={800}
                                                    alt={m.title}
                                                    className="hidden sm:block w-full h-28 sm:h-32 md:h-40 object-cover rounded-2xl shadow-sm ring-1 ring-black/5 group-hover:ring-primaryBlue/40 transition-all duration-300"
                                                />
                                                <p className="mt-0 sm:mt-3 text-[15px] text-gray-900 group-hover:text-primaryBlue transition-colors">
                                                    {m.title}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'region' && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {regiones.map((r) => (
                                            <div key={r.key} className="group cursor-pointer flex flex-col items-start text-left">
                                                <Image
                                                    src={r.img}
                                                    width={800}
                                                    height={800}
                                                    alt={r.title}
                                                    className="hidden sm:block w-full h-28 sm:h-32 md:h-40 object-cover rounded-2xl shadow-sm ring-1 ring-black/5 group-hover:ring-primaryBlue/40 transition-all duration-300"
                                                />
                                                <p className="mt-0 sm:mt-3 text-[15px] text-gray-900 group-hover:text-primaryBlue transition-colors">
                                                    {r.title}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}