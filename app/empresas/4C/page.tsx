import CompanyHeroSection from "@/app/components/empresas/CompanyHeroSection";
import CompanyMVVSection from "@/app/components/empresas/CompanyMVVSection";
import CompanyServicesSection from "@/app/components/empresas/CompanyServicesSection";
import CompanyClientsSection from "@/app/components/empresas/CompanyClientsSection";

export default function Empresa4CPage() {
    const mvvData = {
        mision: "Ser líderes en la industria implementando soluciones sustentables e innovadoras en infraestructura y energía.",
        vision: "Ser el referente líder en infraestructuras, energías renovables y servicios especializados a nivel nacional e internacional.",
        valores: ["Innovación", "Sostenibilidad", "Calidad", "Responsabilidad Social"]
    };

    const services = [
        {
            title: "Obras Civiles",
            description: "Diseñamos, construimos y gestionamos proyectos de infraestructura civil, incluyendo edificaciones, hospitales, proyectos residenciales, comerciales e industriales, renovaciones y obras de desarrollo urbano.",
            icon: "🏗️",
            image: "/Grua1.jpg"
        },
        {
            title: "Obras Eléctricas",
            description: "Diseño, construcción y mantenimiento de redes eléctricas en alta, media y baja tensión. Instalación y supervisión de líneas de transmisión, subestaciones eléctricas y sistemas de distribución.",
            icon: "⚡",
            image: "/LineasDeTransmisionElectrica.jpg"
        },
        {
            title: "Proyectos Fotovoltaicos",
            description: "Instalación de paneles solares, seguidores, montaje y conexionado. Puesta en marcha con pruebas OMICRON. Soluciones completas para generación de energía limpia.",
            icon: "☀️",
            image: "/paneles.jpg"
        },
        {
            title: "Servicios Especializados",
            description: "Evaluación y ejecución de proyectos, análisis técnico, elaboración de catálogos de obra. Instalación y supervisión de subestaciones eléctricas y montaje de torres.",
            icon: "🔧",
            image: "/turbinas_4c_nucleologo.jpg"
        }
    ];

    const clients = [
        {
            name: "Secretaría de la Marina",
            location: "Puerto Vallarta, Jalisco",
            period: "2020-2021",
            description: "Construcción y equipamiento del Hospital Naval"
        },
        {
            name: "ASELEC S.A. de C.V.",
            location: "Mexicali, B.C.",
            period: "2019-2020",
            description: "Cimentaciones plataforma 400 KV en SE Cucapah"
        },
        {
            name: "Enel Green Power",
            location: "Jujuy, Argentina",
            period: "2018-2019",
            description: "Parque Solar Cauchari - 300 MW"
        },
        {
            name: "CFE",
            location: "Múltiples estados",
            period: "2010-Actualidad",
            description: "Diversos proyectos de infraestructura eléctrica"
        },
        {
            name: "Luz del Sur",
            location: "Lima y Cusco, Perú",
            period: "2017-2018",
            description: "Modernización de subestaciones eléctricas"
        },
        {
            name: "ENERRAY",
            location: "Guanajuato, México",
            period: "2020-2021",
            description: "Proyecto Solar 296 MW DC"
        }
    ];

    return (
        <main>
            <CompanyHeroSection
                company="Constructora 4C"
                logoUrl="/4cSInfondoLogo.png"
                tagline="Construyendo el Futuro con Excelencia"
                description="Más de 20 años de experiencia en construcción civil, mecánica, eléctrica y fotovoltaica. Desarrollamos infraestructura y energía de alta calidad con compromiso hacia la eficiencia, innovación y seguridad."
                backgroundImage="/Grua1.jpg"
                primaryColor="#000C47"
            />

            <CompanyMVVSection
                mvv={mvvData}
                primaryColor="#000C47"
                secondaryColor="#FFC107"
            />

            <CompanyServicesSection
                services={services}
                primaryColor="#000C47"
                title="Nuestros Servicios"
            />

            <CompanyClientsSection
                clients={clients}
                primaryColor="#000C47"
                title="Clientes que Confían en Nosotros"
            />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#000C47] to-[#001a7a]">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            ¿Listo para tu Próximo Proyecto?
                        </h2>
                        <p className="text-xl text-gray-200 mb-8">
                            Contáctanos y descubre cómo podemos hacer realidad tus ideas
                        </p>
                        <button className="bg-[#FFC107] hover:bg-[#ffb300] text-[#000C47] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl">
                            Solicitar Cotización
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}