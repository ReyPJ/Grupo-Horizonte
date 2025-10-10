import CompanyHeroSection from "@/app/components/empresas/CompanyHeroSection";
import CompanyMVVSection from "@/app/components/empresas/CompanyMVVSection";
import CompanyServicesSection from "@/app/components/empresas/CompanyServicesSection";
import CompanyClientsSection from "@/app/components/empresas/CompanyClientsSection";

export const metadata = {
    title: "IMBAR | Infraestructura Eléctrica de Alta Tensión",
    description: "IMBAR - 20 años especializándose en subestaciones eléctricas, líneas de transmisión hasta 400 KV y fabricación de estructuras metálicas."
};

export default function EmpresaIMBARPage() {
    const mvvData = {
        mision: "Desarrollar e implementar tecnología de obras de infraestructura eléctrica implementando nuevos métodos en los procesos de obras para la CFE y la industria privada. Cumplir con las necesidades del cliente y anticiparnos a sus exigencias.",
        vision: "Ser una empresa mexicana líder en el manejo integral de obras de infraestructura eléctrica. Alcanzar un nivel óptimo en recursos humanos y materiales bajo un esquema de calidad, satisfaciendo siempre a nuestros clientes en obras civiles, electromecánicas, pruebas preoperativas, estructuras para subestaciones y líneas de transmisión.",
        valores: ["Calidad", "Innovación Tecnológica", "Compromiso", "Seguridad"]
    };

    const services = [
        {
            title: "Ingeniería Eléctrica",
            description: "Diseño y desarrollo de proyectos de infraestructura eléctrica con los más altos estándares técnicos y normativos para CFE e industria privada.",
            icon: "📐",
            image: "/LineasDeTransmisionElectrica.jpg"
        },
        {
            title: "Obra Civil",
            description: "Construcción de cimentaciones, plataformas y estructuras civiles para subestaciones y líneas de transmisión. Obras mayores y menores con certificación LAPEM.",
            icon: "🏗️",
            image: "/obras1.jpg"
        },
        {
            title: "Obra Electromecánica",
            description: "Montaje de equipos, interconexión de sistemas, instalación de tableros y puesta en operación de subestaciones eléctricas completas.",
            icon: "⚡",
            image: "/RehabilatacionSubestacionesPeru.jpg"
        },
        {
            title: "Fabricación de Estructuras",
            description: "Producción de hasta 700 toneladas mensuales de estructuras metálicas galvanizadas para torres y subestaciones hasta 400 KV con liberación LAPEM.",
            icon: "🏭",
            image: "/obras1.jpg"
        },
        {
            title: "Pruebas Preoperativas",
            description: "Realización de pruebas técnicas y certificaciones previas a la puesta en servicio de instalaciones eléctricas.",
            icon: "🔬"
        },
        {
            title: "Puesta en Servicio",
            description: "Proceso completo de energización y arranque de sistemas eléctricos con supervisión técnica especializada.",
            icon: "🔌"
        }
    ];

    const clients = [
        {
            name: "CFE - Comisión Federal de Electricidad",
            location: "Nacional",
            period: "2004-Actualidad",
            description: "Múltiples proyectos de subestaciones y líneas de transmisión"
        },
        {
            name: "CFE - S.E. Villa de García",
            location: "Nuevo León",
            period: "2018-2019",
            description: "Obra civil y electromecánica completa"
        },
        {
            name: "CFE - S.E. Codefront",
            location: "Coahuila",
            period: "2017-2018",
            description: "Obra civil y electromecánica"
        },
        {
            name: "CFE - S.E. Jasso",
            location: "Hidalgo",
            period: "2019-2020",
            description: "Obra civil y electromecánica"
        },
        {
            name: "CFE - LT Querétaro 400 KV",
            location: "Querétaro",
            period: "2016-2017",
            description: "Línea de transmisión de alta tensión"
        },
        {
            name: "CFE - S.E. Ticul 400 KV",
            location: "Yucatán",
            period: "2015-2016",
            description: "Subestación eléctrica de potencia"
        },
        {
            name: "CFE - LT y SE Cuetzalan",
            location: "Puebla",
            period: "2020-2021",
            description: "LT 115KV doble circuito - 20.3 km"
        },
        {
            name: "ABB México S.A. de C.V.",
            location: "Reynosa, Tamaulipas",
            period: "2018-2019",
            description: "S.E. Guerreño - Obra civil 600 toneladas"
        },
        {
            name: "ABB México - Ford",
            location: "Irapuato, Guanajuato",
            period: "2019-2020",
            description: "Suministro, fabricación y montaje de estructuras"
        },
        {
            name: "ABB México - S.E. Agroindustrial",
            location: "Irapuato, Guanajuato",
            period: "2017-2018",
            description: "Obra civil y electromecánica"
        }
    ];

    return (
        <main>
            <CompanyHeroSection
                company="IMBAR"
                logoUrl="/imbar-logo.png"
                tagline="Líderes en Infraestructura Eléctrica"
                description="20 años de experiencia especializada en obras de infraestructura eléctrica para CFE e industria privada. Expertos en subestaciones, líneas de transmisión hasta 400 KV y fabricación de estructuras metálicas."
                backgroundImage="/LineasDeTransmisionElectrica.jpg"
                primaryColor="#1E40AF"
            />

            <CompanyMVVSection
                mvv={mvvData}
                primaryColor="#1E40AF"
                secondaryColor="#3B82F6"
            />

            {/* Capacidades Especiales */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-[#1E40AF]">
                            Capacidades Técnicas
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg text-center">
                                <div className="text-5xl font-bold text-[#1E40AF] mb-2">400 KV</div>
                                <div className="text-gray-700 font-semibold">Capacidad Máxima</div>
                                <p className="text-sm text-gray-600 mt-2">Líneas de transmisión de alta tensión</p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg text-center">
                                <div className="text-5xl font-bold text-[#1E40AF] mb-2">700 Ton</div>
                                <div className="text-gray-700 font-semibold">Producción Mensual</div>
                                <p className="text-sm text-gray-600 mt-2">Estructuras metálicas galvanizadas</p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg text-center">
                                <div className="text-5xl font-bold text-[#1E40AF] mb-2">LAPEM</div>
                                <div className="text-gray-700 font-semibold">Certificación</div>
                                <p className="text-sm text-gray-600 mt-2">Liberación oficial CFE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CompanyServicesSection
                services={services}
                primaryColor="#1E40AF"
                title="Servicios Especializados"
            />

            <CompanyClientsSection
                clients={clients}
                primaryColor="#1E40AF"
                title="Proyectos Realizados"
            />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#1E40AF] to-[#1e3a8a]">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Infraestructura Eléctrica de Clase Mundial
                        </h2>
                        <p className="text-xl text-gray-200 mb-8">
                            Confía en nuestra experiencia para tu próximo proyecto eléctrico
                        </p>
                        <button className="bg-white hover:bg-gray-100 text-[#1E40AF] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl">
                            Solicitar Información
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}