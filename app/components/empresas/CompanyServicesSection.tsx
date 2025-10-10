"use client";
import Image from "next/image";
import {
    MdConstruction,
    MdElectricalServices,
    MdSolarPower,
    MdBuild,
    MdFactory,
    MdWindPower,
    MdBattery80,
    MdSettings,
    MdEngineering,
    MdHandyman,
    MdPrecisionManufacturing,
    MdPower
} from "react-icons/md";
import {IconType} from "react-icons";

interface Service {
    title: string;
    description: string;
    icon?: string; // Ignoramos esto
    image?: string;
}

interface CompanyServicesSectionProps {
    services: Service[];
    primaryColor?: string;
    title?: string;
}

// Función para obtener el icono correcto basado en el título
const getServiceIcon = (title: string): IconType => {
    const lower = title.toLowerCase();

    if (lower.includes('civil')) return MdConstruction;
    if (lower.includes('eléctric') || lower.includes('electric')) return MdElectricalServices;
    if (lower.includes('solar') || lower.includes('fotovoltai')) return MdSolarPower;
    if (lower.includes('eólic') || lower.includes('wind')) return MdWindPower;
    if (lower.includes('almacenamiento') || lower.includes('baterí') || lower.includes('sae')) return MdBattery80;
    if (lower.includes('manufactura') || lower.includes('oem')) return MdPrecisionManufacturing;
    if (lower.includes('fabric')) return MdFactory;
    if (lower.includes('mantenimiento')) return MdHandyman;
    if (lower.includes('reparación') || lower.includes('reconstruc')) return MdBuild;
    if (lower.includes('ingenierí')) return MdEngineering;
    if (lower.includes('transmisión') || lower.includes('línea')) return MdPower;

    return MdSettings; // Default
};

export default function CompanyServicesSection({
                                                   services,
                                                   primaryColor = "#000C47",
                                                   title = "Nuestros Servicios"
                                               }: CompanyServicesSectionProps) {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header profesional */}
                    <div className="text-center mb-20">
                        <div
                            className="inline-block h-0.5 w-16 rounded-full mb-6"
                            style={{backgroundColor: primaryColor}}
                        />
                        <h2
                            className="text-5xl md:text-6xl font-bold mb-4"
                            style={{
                                color: primaryColor,
                                letterSpacing: '-0.02em'
                            }}
                        >
                            {title}
                        </h2>
                        <p className="text-gray-500 text-lg font-light">
                            Soluciones integrales con los más altos estándares de calidad
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = getServiceIcon(service.title);

                            return (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                                >
                                    {/* Image Header o Color Header */}
                                    {service.image ? (
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div
                                                className="absolute inset-0"
                                                style={{
                                                    background: `linear-gradient(to top, ${primaryColor}ee, transparent)`
                                                }}
                                            />
                                            {/* Icon sobre imagen */}
                                            <div className="absolute bottom-4 left-6">
                                                <div
                                                    className="w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20"
                                                    style={{backgroundColor: 'rgba(255,255,255,0.9)'}}
                                                >
                                                    <Icon size={28} style={{color: primaryColor}} />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div
                                            className="h-48 relative"
                                            style={{
                                                background: `linear-gradient(135deg, ${primaryColor}15 0%, ${primaryColor}05 100%)`
                                            }}
                                        >
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div
                                                    className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                                                    style={{backgroundColor: 'white'}}
                                                >
                                                    <Icon size={40} style={{color: primaryColor}} />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Línea decorativa */}
                                        <div
                                            className="h-1 w-12 rounded-full mb-4"
                                            style={{backgroundColor: primaryColor}}
                                        />

                                        <h3
                                            className="text-xl font-bold mb-3 leading-tight"
                                            style={{color: primaryColor}}
                                        >
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed text-sm font-light">
                                            {service.description}
                                        </p>

                                        {/* Hover indicator */}
                                        <div
                                            className="mt-4 flex items-center gap-2 text-gray-400 group-hover:text-gray-600 transition-colors">
                                            <span className="text-sm font-medium">Conocer más</span>
                                            <svg
                                                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Decorative corner */}
                                    <div
                                        className="absolute top-0 right-0 w-20 h-20 opacity-5"
                                        style={{
                                            background: `radial-gradient(circle at top right, ${primaryColor}, transparent 70%)`
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}