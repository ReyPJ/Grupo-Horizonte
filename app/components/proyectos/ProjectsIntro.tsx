import Image from "next/image";

export default function ProjectsIntro() {
    return (
        <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content Side */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-secundaryYellow/20 to-secundaryYellow/10 rounded-full mb-6 backdrop-blur-sm">
                            <span className="text-primaryBlue font-bold text-sm uppercase tracking-wider">
                                Nuestra Experiencia
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primaryBlue mb-6 leading-tight">
                            Transformando Infraestructura en Latinoamérica
                        </h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Desde parques solares de gran escala hasta hospitales de última generación,
                            cada proyecto representa nuestro compromiso inquebrantable con la excelencia.
                            Con presencia en México, Perú y Argentina, hemos desarrollado una capacidad
                            única para ejecutar proyectos complejos en diversos entornos y condiciones.
                        </p>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Nuestro portafolio abarca desde la construcción de líneas de transmisión
                            eléctrica de 400 kV hasta la instalación de sistemas fotovoltaicos de 300 MW,
                            demostrando nuestra versatilidad y capacidad técnica en el sector energético
                            e infraestructura.
                        </p>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-secundaryYellow/50 transition-all duration-300 hover:shadow-lg">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secundaryYellow to-secundaryYellow/50 rounded-l-2xl"></div>
                                <div className="text-4xl font-bold text-primaryBlue mb-2 group-hover:scale-105 transition-transform">
                                    +900 MW
                                </div>
                                <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">
                                    Capacidad Solar Instalada
                                </div>
                            </div>
                            <div className="group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-thirdGreen/50 transition-all duration-300 hover:shadow-lg">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-thirdGreen to-thirdGreen/50 rounded-l-2xl"></div>
                                <div className="text-4xl font-bold text-primaryBlue mb-2 group-hover:scale-105 transition-transform">
                                    400 kV
                                </div>
                                <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">
                                    Transmisión de Alto Voltaje
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/turbinas_4c_nucleologo.jpg"
                                alt="Proyectos de infraestructura"
                                width={1200}
                                height={1400}
                                className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primaryBlue/90 via-primaryBlue/30 to-transparent"></div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white transform transition-transform duration-300">
                                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                                    Innovación en Cada Proyecto
                                </h3>
                                <p className="text-white/90 text-sm sm:text-base">
                                    Tecnología de punta aplicada a soluciones reales
                                </p>
                            </div>

                            {/* Decorative Corner Accent */}
                            <div className="absolute top-4 right-4 w-20 h-20 border-t-4 border-r-4 border-secundaryYellow rounded-tr-3xl opacity-50"></div>
                        </div>

                        {/* Decorative Background Element - Contained */}
                        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-secundaryYellow/10 to-transparent rounded-3xl -z-10 blur-3xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}