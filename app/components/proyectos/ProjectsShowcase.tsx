"use client";
import * as React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaBolt, FaIndustry, FaBuilding } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

const featuredProjects = [
    {
        id: "1",
        title: "Parque Solar Puerto Peñasco",
        subtitle: "Mecánica Eléctrica para Parque Solar",
        location: "Sonora, México",
        client: "China Energy",
        category: "Energía Fotovoltaica",
        scope: "Gran Escala",
        image: "/paneles.jpg",
        description: "Proyecto integral de mecánica eléctrica para uno de los parques solares más importantes del noroeste de México. Implementación de tecnología de punta en generación fotovoltaica.",
        highlights: [
            "Instalación de infraestructura eléctrica completa",
            "Coordinación con equipos internacionales",
            "Tecnología de última generación"
        ],
        icon: FaBolt
    },
    {
        id: "2",
        title: "Hospital IMSS-Bienestar Tuxtepec",
        subtitle: "Sistema Fotovoltaico en Instalaciones Hospitalarias",
        location: "Oaxaca, México",
        client: "Secretaría de la Defensa Nacional",
        category: "Obra Civil + Energía",
        image: "/Secretaria.jpg",
        description: "Instalación de sistema fotovoltaico en instalaciones hospitalarias críticas, garantizando suministro eléctrico confiable y sostenible para servicios de salud.",
        highlights: [
            "Integración con sistemas hospitalarios existentes",
            "Respaldo energético continuo",
            "Reducción de huella de carbono"
        ],
        icon: FaBuilding
    },
    {
        id: "3",
        title: "Líneas de Transmisión 400 KV",
        subtitle: "Infraestructura Eléctrica de Alto Voltaje",
        location: "Puerto Peñasco - Golfo de Santa Clara",
        client: "ASELEC, S.A. de C.V.",
        category: "Transmisión Eléctrica",
        scope: "400 KV",
        image: "/LineasDeTransmisionElectrica.jpg",
        description: "Montaje de estructura metálica galvanizada para torres autosoportadas en línea de transmisión crítica. Proyecto que conecta infraestructura energética regional.",
        highlights: [
            "Torres autosoportadas de 400 KV",
            "Estructura metálica galvanizada",
            "Cumplimiento de normas internacionales"
        ],
        icon: FaBolt
    },
    {
        id: "4",
        title: "Parque Fotovoltaico Potrero Solar",
        subtitle: "Instalación de Gran Escala",
        location: "Lagos de Moreno, Jalisco",
        category: "Energía Fotovoltaica",
        scope: "296 MW DC",
        image: "/muchospaneles.jpg",
        description: "Uno de los proyectos fotovoltaicos más grandes de México. Instalación completa de sistema con capacidad de 296 MW DC, contribuyendo significativamente a la matriz energética nacional.",
        highlights: [
            "296 MW DC de capacidad instalada",
            "Miles de paneles fotovoltaicos",
            "Impacto ambiental positivo medible"
        ],
        icon: FaIndustry
    },
    {
        id: "5",
        title: "Rehabilitación de Subestaciones en Perú",
        subtitle: "Modernización SE Lima y Cusco",
        location: "Lima y Cusco, Perú",
        client: "Luz del Sur",
        category: "Transmisión Eléctrica",
        image: "/RehabilatacionSubestacionesPeru.jpg",
        description: "Diseño y ejecución de obras electro-mecánicas y civiles para la modernización de subestaciones críticas en Perú. Proyecto subcontratado por Electro Sur Este.",
        highlights: [
            "Modernización completa de subestaciones",
            "Mejora en confiabilidad del sistema",
            "Expansión internacional"
        ],
        icon: MdEngineering
    },
    {
        id: "6",
        title: "Infraestructura Solar en Argentina",
        subtitle: "Parque Solar Cauchari",
        location: "Jujuy, Argentina",
        client: "Enel Green Power",
        category: "Energía Fotovoltaica",
        scope: "300 MW",
        image: "/img218.jpg",
        description: "Construcción de infraestructura solar en uno de los proyectos más ambiciosos de Sudamérica. Instalación de paneles, inversores y puesta en marcha completa.",
        highlights: [
            "300 MW de capacidad",
            "Proyecto internacional",
            "Condiciones climáticas extremas"
        ],
        icon: FaIndustry
    },
    {
        id: "imbar-1",
        title: "S.E. Villa de García",
        subtitle: "Subestación Eléctrica CFE - Obra Completa",
        location: "Villa de García, México",
        client: "CFE (Comisión Federal de Electricidad)",
        category: "Infraestructura Eléctrica",
        scope: "Obra Civil + Electromecánica",
        image: "/subestacionelectrica.jpg", // ⚠️ NECESITAS ESTA IMAGEN
        description: "Desarrollo integral de subestación eléctrica para CFE incluyendo ingeniería, obra civil, suministro, fabricación, armado, montaje de equipos, interconexión y puesta en operación.",
        highlights: [
            "Obra civil mayores y menores",
            "Montaje electromecánico completo",
            "Puesta en servicio certificada",
            "Cumplimiento normas CFE"
        ],
        icon: FaBolt
    },
    {
        id: "imbar-2",
        title: "S.E. Guerreño ABB México",
        subtitle: "Subestación Industrial Privada",
        location: "Reynosa, Tamaulipas",
        client: "ABB México S.A. de C.V.",
        category: "Infraestructura Eléctrica",
        scope: "600 Toneladas",
        image: "/subestacion.jpg", // ⚠️ NECESITAS ESTA IMAGEN
        description: "Obra civil para estructuras mayores y menores en subestación industrial. Proyecto ejecutado para ABB México con 600 toneladas de estructuras metálicas.",
        highlights: [
            "Obra civil mayores y menores",
            "600 toneladas de estructuras",
            "Cliente industrial privado",
            "Trabajo especializado con ABB"
        ],
        icon: FaIndustry
    },
    {
        id: "imbar-3",
        title: "S.E. Ford/ABB México",
        subtitle: "Fabricación y Montaje de Estructuras",
        location: "México",
        client: "Ford/ABB México",
        category: "Fabricación + Montaje",
        image: "/consite.jpg", // ⚠️ NECESITAS ESTA IMAGEN
        description: "Suministro, fabricación, galvanizado por inmersión en caliente, liberación LAPEM, transporte a obra, armado y montaje de estructuras mayores y menores para subestación industrial.",
        highlights: [
            "Fabricación en planta propia",
            "Galvanizado por inmersión",
            "Certificación LAPEM",
            "Montaje en sitio"
        ],
        icon: MdEngineering
    },
];

export default function ProjectsShowcase() {
    const [activeProject, setActiveProject] = React.useState(0);

    return (
        <>
            <style jsx>{`
                .showcase-card {
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .showcase-card:hover {
                    transform: translateY(-8px);
                }

                .project-badge {
                    background: linear-gradient(135deg, rgba(206, 211, 0, 0.9), rgba(10, 135, 0, 0.9));
                    backdrop-filter: blur(10px);
                }
            `}</style>

            <div className="bg-bgMain py-20">
                {/* Section Header */}
                <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 mb-16">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 id={"DESTACADOS"} className="text-h1 text-primaryBlue mb-6">
                            Proyectos que Definen el Futuro
                        </h2>
                        <p className="text-p text-gray-700 leading-relaxed">
                            Cada proyecto es una historia de innovación, dedicación y excelencia técnica.
                            Descubre cómo estamos construyendo el mañana, un proyecto a la vez.
                        </p>
                        <div className="w-24 h-1 bg-secundaryYellow mx-auto mt-8 rounded-full"></div>
                    </div>
                </div>

                {/* Featured Projects Grid */}
                <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                    <div className="grid gap-12">
                        {featuredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`showcase-card grid lg:grid-cols-2 gap-8 items-center ${
                                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                                }`}
                            >
                                {/* Image */}
                                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={1200}
                                            height={800}
                                            className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primaryBlue/90 via-primaryBlue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Floating badge */}
                                        <div className="absolute top-6 right-6 project-badge text-white px-4 py-2 rounded-full text-sm font-bold">
                                            {project.category}
                                        </div>

                                        {/* Icon overlay */}
                                        <div className="absolute bottom-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <project.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-secundaryYellow">
                                            <project.icon className="w-6 h-6" />
                                            <span className="font-bold uppercase text-sm tracking-wider">
                                                {project.category}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl lg:text-4xl font-bold text-primaryBlue leading-tight">
                                            {project.title}
                                        </h3>

                                        <p className="text-xl text-gray-600 font-medium">
                                            {project.subtitle}
                                        </p>

                                        <div className="flex flex-wrap gap-4 py-4">
                                            <div className="flex items-center gap-2 text-gray-700">
                                                <FaMapMarkerAlt className="w-4 h-4 text-thirdGreen" />
                                                <span className="text-sm font-medium">{project.location}</span>
                                            </div>
                                            {project.client && (
                                                <div className="px-3 py-1 bg-primaryBlue/10 rounded-full">
                                                    <span className="text-sm font-semibold text-primaryBlue">
                                                        {project.client}
                                                    </span>
                                                </div>
                                            )}
                                            {project.scope && (
                                                <div className="px-3 py-1 bg-secundaryYellow/20 rounded-full">
                                                    <span className="text-sm font-bold text-primaryBlue">
                                                        {project.scope}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <p className="text-gray-700 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="pt-4 space-y-2">
                                            {project.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-secundaryYellow mt-2 flex-shrink-0"></div>
                                                    <p className="text-gray-600 text-sm">{highlight}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}