import {FaSolarPanel, FaBolt, FaBuilding, FaCogs, FaGlobeAmericas, FaAward, FaIndustry} from "react-icons/fa";

const capabilities = [
    {
        icon: FaSolarPanel,
        title: "Energía Fotovoltaica",
        stat: "+900 MW",
        description: "Instalación y puesta en marcha de parques solares a gran escala, desde 7 kW residenciales hasta 300 MW comerciales.",
        services: [
            "Instalación de paneles y seguidores",
            "Montaje y conexionado eléctrico",
            "Pruebas OMICRON y puesta en marcha",
            "Mantenimiento preventivo y correctivo"
        ]
    },
    {
        icon: FaBolt,
        title: "Transmisión Eléctrica",
        stat: "400 kV",
        description: "Diseño y construcción de líneas de transmisión y subestaciones eléctricas de alta, media y baja tensión.",
        services: [
            "Líneas de transmisión 115-400 kV",
            "Construcción de subestaciones",
            "Montaje de torres y estructuras",
            "Mantenimiento especializado"
        ]
    },
    {
        icon: FaBuilding,
        title: "Obra Civil",
        stat: "26+ Proyectos",
        description: "Construcción y supervisión de infraestructura residencial, comercial, industrial y hospitalaria.",
        services: [
            "Edificaciones y hospitales",
            "Infraestructura industrial",
            "Renovaciones y ampliaciones",
            "Desarrollo urbano"
        ]
    },
    {
        icon: FaCogs,
        title: "Servicios Especializados",
        stat: "20+ Años",
        description: "Evaluación, supervisión y mantenimiento de proyectos eléctricos y electromecánicos.",
        services: [
            "Inspección termográfica",
            "Pruebas eléctricas especializadas",
            "Supervisión de obra",
            "Análisis y estudios técnicos"
        ]
    },
    {
        icon: FaIndustry,
        title: "Fabricación de Estructuras",
        stat: "700 Ton/mes",
        description: "Planta especializada de 7,000 m² con maquinaria CNC para fabricación de estructuras metálicas galvanizadas para subestaciones y líneas de transmisión.",
        services: [
            "Torres de transmisión hasta 400 KV",
            "Estructuras para subestaciones",
            "Torres de telecomunicaciones",
            "Galvanizado por inmersión en caliente",
            "Control de calidad LAPEM"
        ]
    }
];

const regions = [
    {
        country: "México",
        projects: "22+ Proyectos",
        icon: FaGlobeAmericas,
        description: "Presencia en múltiples estados incluyendo Sonora, Sinaloa, Jalisco, Oaxaca y CDMX"
    },
    {
        country: "Perú",
        projects: "2 Proyectos",
        icon: FaGlobeAmericas,
        description: "Modernización de subestaciones en Lima y Cusco"
    },
    {
        country: "Argentina",
        projects: "2 Proyectos",
        icon: FaGlobeAmericas,
        description: "Infraestructura solar de gran escala en Jujuy"
    }
];

export default function ProjectsCapabilities() {
    return (
        <>
            <style jsx>{`
                .capability-card {
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                }

                .capability-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #CED300, #0A8700);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .capability-card:hover::before {
                    transform: scaleX(1);
                }

                .capability-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0, 12, 71, 0.15);
                }
            `}</style>

            <div className="bg-bgMain py-20">
                <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                    {/* Capabilities Section */}
                    <div className="mb-20">
                        <div className="text-center max-w-4xl mx-auto mb-16">
                            <div className="inline-block px-4 py-2 bg-secundaryYellow/20 rounded-full mb-6">
                                <span className="text-primaryBlue font-bold text-sm uppercase tracking-wider">
                                    Nuestras Capacidades
                                </span>
                            </div>
                            <h2 className="text-h1 text-primaryBlue mb-6">
                                Experiencia Integral en Infraestructura
                            </h2>
                            <p className="text-p text-gray-700 leading-relaxed">
                                Cuatro décadas de especialización nos permiten ofrecer soluciones
                                completas en cada sector que atendemos
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {capabilities.map((capability, index) => (
                                <div key={index} className="capability-card bg-white rounded-2xl p-8">
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primaryBlue to-thirdGreen rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <capability.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-2xl font-bold text-primaryBlue">
                                                    {capability.title}
                                                </h3>
                                                <span className="text-secundaryYellow font-bold text-xl">
                                                    {capability.stat}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">
                                                {capability.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        {capability.services.map((service, idx) => (
                                            <div key={idx} className="flex items-center gap-3 text-gray-700">
                                                <div className="w-2 h-2 rounded-full bg-secundaryYellow flex-shrink-0"></div>
                                                <span className="text-sm">{service}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Geographic Presence */}
                    <div className="bg-white rounded-3xl p-8 lg:p-12">
                        <div className="text-center mb-12">
                            <h3 className="text-h2 text-primaryBlue mb-4">
                                Presencia Internacional
                            </h3>
                            <p className="text-gray-700">
                                Expandiendo horizontes más allá de las fronteras
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {regions.map((region, index) => (
                                <div
                                    key={index}
                                    className="text-center p-6 rounded-2xl bg-bgMain hover:bg-white transition-all duration-300 hover:shadow-lg"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-thirdGreen to-secundaryYellow rounded-full flex items-center justify-center mx-auto mb-4">
                                        <region.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-primaryBlue mb-2">
                                        {region.country}
                                    </h4>
                                    <div className="text-secundaryYellow font-bold mb-3">
                                        {region.projects}
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {region.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications & Awards */}
                    <div className="mt-16 grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300">
                            <FaAward className="w-12 h-12 text-secundaryYellow mx-auto mb-4" />
                            <h4 className="text-lg font-bold text-primaryBlue mb-2">
                                Calidad Certificada
                            </h4>
                            <p className="text-sm text-gray-600">
                                Cumplimiento de normas nacionales e internacionales
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300">
                            <FaAward className="w-12 h-12 text-secundaryYellow mx-auto mb-4" />
                            <h4 className="text-lg font-bold text-primaryBlue mb-2">
                                Seguridad Primero
                            </h4>
                            <p className="text-sm text-gray-600">
                                Protocolos estrictos en cada proyecto ejecutado
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300">
                            <FaAward className="w-12 h-12 text-secundaryYellow mx-auto mb-4" />
                            <h4 className="text-lg font-bold text-primaryBlue mb-2">
                                Sostenibilidad
                            </h4>
                            <p className="text-sm text-gray-600">
                                Compromiso ambiental en cada desarrollo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}