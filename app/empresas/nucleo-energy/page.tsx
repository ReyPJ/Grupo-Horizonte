import CompanyHeroSection from "@/app/components/empresas/CompanyHeroSection";
import CompanyMVVSection from "@/app/components/empresas/CompanyMVVSection";
import CompanyServicesSection from "@/app/components/empresas/CompanyServicesSection";

export const metadata = {
    title: "Núcleo Energy | Energías Renovables del Futuro",
    description: "Núcleo Energy - Empresa joven especializada en energías renovables: eólica, fotovoltaica, almacenamiento y manufactura OEM."
};

export default function EmpresaNucleoPage() {
    const mvvData = {
        mision: "Impulsar la transición energética mediante el desarrollo de proyectos innovadores de energía renovable que generen impacto positivo en el medio ambiente y la sociedad.",
        vision: "Ser líderes en América Latina en soluciones integrales de energía renovable, almacenamiento y manufactura especializada para el sector energético.",
        valores: ["Sostenibilidad", "Innovación", "Eficiencia Energética", "Compromiso Ambiental"]
    };

    const services = [
        {
            title: "Energía Eólica",
            description: "Conceptualización, ingeniería, desarrollo y ejecución de proyectos de generación de energía eléctrica a partir de fuentes eólicas. Instalación, operación y mantenimiento de parques eólicos.",
            icon: "🌬️",
            image: "/eolico2.jpg"
        },
        {
            title: "Energía Fotovoltaica",
            description: "Desarrollo de plantas solares y sistemas de autoconsumo para uso industrial, comercial y residencial. Compra, venta e instalación de paneles solares, inversores y componentes.",
            icon: "☀️",
            image: "/fotovoltaic.jpg"
        },
        {
            title: "Sistemas de Almacenamiento (SAE)",
            description: "Investigación, desarrollo, diseño e implementación de sistemas de almacenamiento de energía con baterías de ion-litio y tecnologías emergentes para aplicaciones conectadas a red o aisladas.",
            icon: "🔋",
            image: "/paneles.jpg"
        },
        {
            title: "Manufactura y Suministro (OEM)",
            description: "Fabricación, ensamblaje, integración y comercialización de equipos originales y componentes para el sector energético. Servicios de ingeniería y consultoría técnica.",
            icon: "⚙️",
            image: "/turbinas_4c_nucleologo.jpg"
        },
        {
            title: "Infraestructura de Transmisión",
            description: "Diseño, ingeniería, procura y construcción de subestaciones eléctricas, líneas de transmisión y redes de distribución de media y alta tensión.",
            icon: "⚡",
            image: "/LineasDeTransmisionElectrica.jpg"
        },
        {
            title: "Mantenimiento Especializado",
            description: "Servicios de mantenimiento preventivo y correctivo, así como operación de subestaciones, parques eólicos y plantas solares.",
            icon: "🔧"
        }
    ];

    return (
        <main>
            <CompanyHeroSection
                company="Núcleo Energy"
                logoUrl="/LogoHorizontal@4x.png"
                tagline="Energías Renovables para el Futuro"
                description="Empresa joven y dinámica dedicada al desarrollo de proyectos de energía renovable. Especializados en energía eólica, fotovoltaica, sistemas de almacenamiento y manufactura OEM para impulsar la transición energética."
                backgroundImage="/fotovoltaic.jpg"
                primaryColor="#10B981"
            />

            <CompanyMVVSection
                mvv={mvvData}
                primaryColor="#10B981"
                secondaryColor="#34D399"
            />

            {/* Tecnologías Section */}
            <section className="py-16 bg-gradient-to-br from-green-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-[#10B981]">
                            Tecnologías de Vanguardia
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#10B981]">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Energía Eólica</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#10B981] font-bold">•</span>
                                        <span>Parques eólicos de gran escala</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#10B981] font-bold">•</span>
                                        <span>Turbinas de última generación</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#10B981] font-bold">•</span>
                                        <span>Sistemas de monitoreo inteligente</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#34D399]">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Energía Solar</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#34D399] font-bold">•</span>
                                        <span>Plantas fotovoltaicas industriales</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#34D399] font-bold">•</span>
                                        <span>Sistemas de autoconsumo</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#34D399] font-bold">•</span>
                                        <span>Paneles de alta eficiencia</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#10B981]">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Almacenamiento</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#10B981] font-bold">•</span>
                                        <span>Baterías de ion-litio</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#10B981] font-bold">•</span>
                                        <span>Sistemas conectados a red</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#10B981] font-bold">•</span>
                                        <span>Aplicaciones off-grid</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#34D399]">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Manufactura OEM</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#34D399] font-bold">•</span>
                                        <span>Equipos originales certificados</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#34D399] font-bold">•</span>
                                        <span>Componentes especializados</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#34D399] font-bold">•</span>
                                        <span>Consultoría técnica integral</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CompanyServicesSection
                services={services}
                primaryColor="#10B981"
                title="Soluciones Integrales"
            />

            {/* Impact Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-[#10B981]">
                            Impacto Ambiental Positivo
                        </h2>
                        <div className="grid sm:grid-cols-3 gap-8">
                            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg">
                                <div className="text-5xl mb-4">🌍</div>
                                <div className="text-3xl font-bold text-[#10B981] mb-2">-CO₂</div>
                                <div className="text-gray-700 font-semibold">Reducción de Emisiones</div>
                            </div>
                            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg">
                                <div className="text-5xl mb-4">♻️</div>
                                <div className="text-3xl font-bold text-[#10B981] mb-2">100%</div>
                                <div className="text-gray-700 font-semibold">Energía Limpia</div>
                            </div>
                            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg">
                                <div className="text-5xl mb-4">🌱</div>
                                <div className="text-3xl font-bold text-[#10B981] mb-2">+</div>
                                <div className="text-gray-700 font-semibold">Futuro Sostenible</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#10B981] to-[#059669]">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Transforma tu Energía al Futuro
                        </h2>
                        <p className="text-xl text-gray-100 mb-8">
                            Únete a la revolución de las energías renovables
                        </p>
                        <button className="bg-white hover:bg-gray-100 text-[#10B981] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl">
                            Conoce Nuestras Soluciones
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}