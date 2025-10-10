import * as React from "react";
import BigButton from "@/app/components/bigButton";
import Image from "next/image";

export default function ProjectsMegaMenu() {
    const [activeTab, setActiveTab] = React.useState<'mercado' | 'region'>('mercado');

    const mercados = [
        {
            key: 'eolica',
            title: 'Energía eólica',
            img: '/eolico2.jpg',
            empresa: 'Núcleo Energy'
        },
        {
            key: 'fotovoltaica',
            title: 'Energía fotovoltaica',
            img: '/paneles.jpg',
            empresa: '4C'
        },
        {
            key: 'construccion',
            title: 'Construcción',
            img: '/Grua1.jpg',
            empresa: '4C'
        },
        // ⚡ NUEVO - Subestaciones eléctricas (IMBAR)
        {
            key: 'subestaciones',
            title: 'Subestaciones Eléctricas',
            img: '/LineasDeTransmisionElectrica.jpg',
            empresa: 'IMBAR',
            badge: '400 KV'
        },
        {
            key: 'transmision',
            title: 'Líneas de Transmisión',
            img: '/LineasDeTransmisionElectrica.jpg',
            empresa: 'IMBAR & 4C'
        },
        // ⚡ NUEVO - Fabricación (IMBAR)
        {
            key: 'fabricacion',
            title: 'Fabricación de Estructuras',
            img: '/obras1.jpg',
            empresa: 'IMBAR',
            badge: '700 Ton/mes'
        },
        {
            key: 'mantenimiento',
            title: 'Mantenimiento',
            img: '/RehabilatacionSubestacionesPeru.jpg',
            empresa: '4C & IMBAR'
        },
        {
            key: 'servicios',
            title: 'Servicios Especializados',
            img: '/turbinas_4c_nucleologo.jpg',
            empresa: '4C'
        },
        {
            key: 'reconstruccion',
            title: 'Reconstrucción de Maquinaria',
            img: '/maquinaria-reccmaq.jpg',
            empresa: 'RECCMAQ2',
            badge: 'Nacional'
        },
        {
            key: 'almacenamiento',
            title: 'Sistemas de Almacenamiento',
            img: '/baterias-energia.jpg', // 👈 Necesitas una imagen de baterías/SAE
            empresa: 'Nucleo Energy',
            badge: 'SAE'
        },
        {
            key: 'oem',
            title: 'Manufactura y Suministro (OEM)',
            img: '/manufactura-oem.jpg', // 👈 Imagen de manufactura
            empresa: 'Nucleo Energy'
        },
    ];

    const regiones = [
        {key: 'mx', title: 'México', img: '/Secretaria.jpg', proyectos: '50+'},
        {key: 'pe', title: 'Perú', img: '/RehabilatacionSubestacionesPeru.jpg', proyectos: '10+'},
        {key: 'latam', title: 'Latinoamérica', img: '/obras1.jpg', proyectos: '60+'},
    ];

    return (
        <div className={"w-full py-6 px-6 md:px-12 lg:px-20 bg-white"}>
            <style jsx>{`
                .empresa-badge {
                    font-size: 9px;
                    background: linear-gradient(135deg, #000C47, #0A8700);
                    color: white;
                    padding: 2px 8px;
                    border-radius: 9999px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .imbar-badge {
                    background: linear-gradient(135deg, #FF6B35, #FFA500);
                }

                .capacity-badge {
                    font-size: 10px;
                    background: linear-gradient(135deg, #CED300, #0A8700);
                    color: #000C47;
                    padding: 3px 10px;
                    border-radius: 9999px;
                    font-weight: 800;
                }
            `}</style>

            <div className={"flex flex-col lg:flex-row gap-10"}>
                {/* Left column: intro + blog */}
                <div className={"w-full lg:w-1/3 lg:pr-10 lg:border-r lg:border-gray-200"}>
                    <div className={"flex flex-col gap-6 lg:gap-10"}>
                        <h3 className={"text-h3"}>Construyendo Historia</h3>
                        <p className={"text-p"}>
                            Escala. Complejidad. Impacto. Propósito. Ofrecemos proyectos<br
                            className="hidden sm:block" />{" "}
                            desafiantes que elevan los niveles de vida, impulsan la<br
                            className="hidden sm:block" />{" "}
                            prosperidad y apoyan el crecimiento sostenible en todo el mundo<br
                            className="hidden sm:block" />{" "}-
                            desde transporte limpio y eficiente hasta energía sostenible,<br
                            className="hidden sm:block" />{" "}
                            infraestructura eléctrica de alta tensión y mucho más.
                        </p>
                        <BigButton textBefore={'Todos los proyectos'} textAfter={'Todos los proyectos'}
                                   minWidth={"230px"}
                                   maxWidth={"280px"} />
                    </div>
                    <div className={"flex flex-col gap-3 mt-8"}>
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
                            className={`${activeTab === 'mercado' ? 'text-primaryBlue border-primaryBlue' : 'text-gray-500 border-transparent'} uppercase tracking-widest text-[13px] py-4 border-b-2 transition-all duration-300`}
                            onClick={() => setActiveTab('mercado')}
                        >
                            Explorar proyectos por mercado
                        </button>
                        <button
                            className={`${activeTab === 'region' ? 'text-primaryBlue border-primaryBlue' : 'text-gray-500 border-transparent'} uppercase tracking-widest text-[13px] py-4 border-b-2 transition-all duration-300`}
                            onClick={() => setActiveTab('region')}
                        >
                            Explorar proyectos por región
                        </button>
                    </div>

                    <div className="pt-6">
                        {activeTab === 'mercado' && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {mercados.map((m) => (
                                    <div key={m.key}
                                         className="group cursor-pointer flex flex-col items-start text-left">
                                        <div className="relative w-full">
                                            <Image
                                                src={m.img}
                                                width={800}
                                                height={800}
                                                alt={m.title}
                                                className="hidden sm:block w-full h-28 sm:h-32 md:h-40 object-cover rounded-2xl shadow-sm ring-1 ring-black/5 group-hover:ring-primaryBlue/40 transition-all duration-300 group-hover:scale-[1.02]"
                                            />
                                            {/* Badge de empresa */}
                                            {m.empresa && (
                                                <div className="absolute top-2 right-2">
                                                    <span
                                                        className={`empresa-badge ${m.empresa === 'IMBAR' || m.empresa.includes('IMBAR') ? 'imbar-badge' : ''}`}>
                                                        {m.empresa}
                                                    </span>
                                                </div>
                                            )}
                                            {/* Badge de capacidad/voltaje */}
                                            {m.badge && (
                                                <div className="absolute bottom-2 left-2">
                                                    <span className="capacity-badge">
                                                        {m.badge}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <p className="mt-0 sm:mt-3 text-[15px] font-semibold text-gray-900 group-hover:text-primaryBlue transition-colors">
                                            {m.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'region' && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {regiones.map((r) => (
                                    <div key={r.key}
                                         className="group cursor-pointer flex flex-col items-start text-left">
                                        <div className="relative w-full">
                                            <Image
                                                src={r.img}
                                                width={800}
                                                height={800}
                                                alt={r.title}
                                                className="hidden sm:block w-full h-28 sm:h-32 md:h-40 object-cover rounded-2xl shadow-sm ring-1 ring-black/5 group-hover:ring-primaryBlue/40 transition-all duration-300 group-hover:scale-[1.02]"
                                            />
                                            {r.proyectos && (
                                                <div className="absolute bottom-2 right-2">
                                                    <span className="capacity-badge">
                                                        {r.proyectos} proyectos
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <p className="mt-0 sm:mt-3 text-[15px] font-semibold text-gray-900 group-hover:text-primaryBlue transition-colors">
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