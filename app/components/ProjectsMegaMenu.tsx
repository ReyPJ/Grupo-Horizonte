import * as React from "react";
import BigButton from "@/app/components/bigButton";
import Image from "next/image";

export default function ProjectsMegaMenu() {
    const [activeTab, setActiveTab] = React.useState<'mercado' | 'region'>('mercado');

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
    )
}