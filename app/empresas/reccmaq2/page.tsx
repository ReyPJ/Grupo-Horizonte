import CompanyHeroSection from "@/app/components/empresas/CompanyHeroSection";
import CompanyServicesSection from "@/app/components/empresas/CompanyServicesSection";
import CompanyClientsSection from "@/app/components/empresas/CompanyClientsSection";
import Image from "next/image";

export const metadata = {
    title: "RECCMAQ2 | Reconstrucción de Maquinaria Industrial",
    description: "RECCMAQ2 - Reconstructora de Maquinaria de la Torre. Servicio especializado de reconstrucción, mantenimiento y reparación de maquinaria pesada con cobertura nacional."
};

export default function EmpresaRECCMAQ2Page() {
    const services = [
        {
            title: "Reconstrucción de Maquinaria Pesada",
            description: "Servicio especializado en reconstrucción completa de maquinaria pesada industrial. Recuperamos equipos con altos estándares de calidad garantizando su óptimo funcionamiento.",
            icon: "🔨",
            image: "/maquinaria-reccmaq.jpg"
        },
        {
            title: "Mantenimiento Preventivo",
            description: "Programas de mantenimiento preventivo diseñados para maximizar la vida útil de tu maquinaria y evitar paros no programados en tus operaciones.",
            icon: "🔧"
        },
        {
            title: "Reparación de Equipos",
            description: "Reparación especializada de maquinaria y equipo pesado. Contamos con personal técnico certificado y refacciones de calidad.",
            icon: "⚙️"
        },
        {
            title: "Servicio en Sitio",
            description: "Llevamos nuestro servicio directamente a tu ubicación. Cobertura nacional con técnicos especializados disponibles.",
            icon: "🚛"
        }
    ];

    const clients = [
        {
            name: "AFLEX",
            location: "Fernando Montes de Oca, Altamira, Tamaulipas",
            period: "Febrero 2018 - Actualidad",
            description: "Servicio continuo de mantenimiento y reparación"
        },
        {
            name: "McDermott",
            location: "Boulevard Golfo de México N. 380, Altamira, Tamaulipas",
            period: "Octubre 2017 - Enero 2022",
            description: "Reconstrucción y mantenimiento de equipos"
        },
        {
            name: "ALPASA",
            location: "Parque Pequeña y Mediana Industria, Altamira, Tamaulipas",
            period: "Enero 2007 - Actualidad",
            description: "Más de 18 años de servicio continuo"
        },
        {
            name: "GS Autotransportes",
            location: "Boulevard de los Ríos 3800, Altamira, Tamaulipas",
            period: "Enero 2016 - Actualidad",
            description: "Mantenimiento de flota vehicular"
        },
        {
            name: "Anuar Renaud Torres García",
            location: "Boulevard de los Ríos 3800, Altamira, Tamaulipas",
            period: "Marzo 2012 - Actualidad",
            description: "Servicios especializados continuos"
        }
    ];

    const coverageLocations = [
        "Altamira",
        "Monterrey",
        "Ciudad de México",
        "Manzanillo",
        "Mérida",
        "Mexicali",
        "Oaxaca",
        "Hermosillo"
    ];

    return (
        <main>
            <CompanyHeroSection
                company="RECCMAQ2"
                logoUrl="/reccmaq2-logo.png"
                tagline="Reconstruimos tu Maquinaria, Impulsamos tu Productividad"
                description="Reconstructora de Maquinaria de la Torre. Especialistas en reconstrucción, mantenimiento y reparación de maquinaria pesada con presencia nacional en los sectores más exigentes de la industria."
                backgroundImage="/maquinaria-reccmaq.jpg"
                primaryColor="#DC2626"
            />

            {/* Experiencia Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#DC2626]">
                                Experiencia que Respalda Resultados
                            </h2>
                            <p className="text-xl text-gray-600">
                                Años de experiencia al servicio de la industria mexicana
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-[#DC2626]">
                                <div className="text-5xl font-bold text-[#DC2626] mb-2">18+</div>
                                <div className="text-gray-700 font-semibold">Años de Experiencia</div>
                                <p className="text-sm text-gray-600 mt-2">Sirviendo a la industria</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-[#DC2626]">
                                <div className="text-5xl font-bold text-[#DC2626] mb-2">100%</div>
                                <div className="text-gray-700 font-semibold">Compromiso</div>
                                <p className="text-sm text-gray-600 mt-2">Calidad garantizada</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-[#DC2626]">
                                <div className="text-5xl font-bold text-[#DC2626] mb-2">8</div>
                                <div className="text-gray-700 font-semibold">Ciudades</div>
                                <p className="text-sm text-gray-600 mt-2">Cobertura nacional</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CompanyServicesSection
                services={services}
                primaryColor="#DC2626"
                title="Servicios Especializados"
            />

            {/* Cobertura Nacional Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-[#DC2626] mb-4">
                                Cobertura Nacional
                            </h2>
                            <p className="text-xl text-gray-600">
                                Presencia estratégica en las principales ciudades de México
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {coverageLocations.map((location, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-red-100"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#DC2626] flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <div className="text-gray-800 font-semibold">{location}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mapa Decorativo */}
                        <div className="mt-12 text-center">
                            <div className="inline-block bg-gradient-to-r from-red-50 to-gray-50 px-8 py-4 rounded-full shadow-md">
                                <p className="text-gray-700 font-semibold">
                                    🇲🇽 Servicio en toda la República Mexicana
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CompanyClientsSection
                clients={clients}
                primaryColor="#DC2626"
                title="Clientes que Confían en Nosotros"
            />

            {/* Ventajas Competitivas */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12">
                            ¿Por qué elegir RECCMAQ2?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                <div className="text-4xl mb-3">⚡</div>
                                <h3 className="text-xl font-bold mb-2">Respuesta Rápida</h3>
                                <p className="text-gray-300 text-sm">Atención inmediata a tus necesidades</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                <div className="text-4xl mb-3">🎯</div>
                                <h3 className="text-xl font-bold mb-2">Especialización</h3>
                                <p className="text-gray-300 text-sm">Expertos en maquinaria pesada</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                <div className="text-4xl mb-3">✓</div>
                                <h3 className="text-xl font-bold mb-2">Calidad Certificada</h3>
                                <p className="text-gray-300 text-sm">Procesos garantizados</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                <div className="text-4xl mb-3">🔧</div>
                                <h3 className="text-xl font-bold mb-2">Tecnología</h3>
                                <p className="text-gray-300 text-sm">Equipamiento de vanguardia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#DC2626] to-[#991b1b]">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            ¿Necesitas Reconstruir tu Maquinaria?
                        </h2>
                        <p className="text-xl text-gray-100 mb-8">
                            Contáctanos hoy y recupera la productividad de tus equipos
                        </p>
                        <button className="bg-white hover:bg-gray-100 text-[#DC2626] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl">
                            Solicitar Cotización
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}