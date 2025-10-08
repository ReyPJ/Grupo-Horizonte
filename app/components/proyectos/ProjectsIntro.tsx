import Image from "next/image";

export default function ProjectsIntro() {
    return (
        <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 py-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block px-4 py-2 bg-secundaryYellow/20 rounded-full mb-6">
                            <span className="text-primaryBlue font-bold text-sm uppercase tracking-wider">
                                Nuestra Experiencia
                            </span>
                        </div>
                        <h2 className="text-h1 text-primaryBlue mb-6 leading-tight">
                            Transformando Infraestructura en Latinoamérica
                        </h2>
                        <p className="text-p text-gray-700 mb-6 leading-relaxed">
                            Desde parques solares de gran escala hasta hospitales de última generación,
                            cada proyecto representa nuestro compromiso inquebrantable con la excelencia.
                            Con presencia en México, Perú y Argentina, hemos desarrollado una capacidad
                            única para ejecutar proyectos complejos en diversos entornos y condiciones.
                        </p>
                        <p className="text-p text-gray-700 mb-8 leading-relaxed">
                            Nuestro portafolio abarca desde la construcción de líneas de transmisión
                            eléctrica de 400 kV hasta la instalación de sistemas fotovoltaicos de 300 MW,
                            demostrando nuestra versatilidad y capacidad técnica en el sector energético
                            e infraestructura.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="border-l-4 border-secundaryYellow pl-4">
                                <div className="text-3xl font-bold text-primaryBlue mb-2">+900 MW</div>
                                <div className="text-sm text-gray-600 uppercase tracking-wide">
                                    Capacidad Solar Instalada
                                </div>
                            </div>
                            <div className="border-l-4 border-thirdGreen pl-4">
                                <div className="text-3xl font-bold text-primaryBlue mb-2">400 kV</div>
                                <div className="text-sm text-gray-600 uppercase tracking-wide">
                                    Transmisión de Alto Voltaje
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/turbinas_4c_nucleologo.jpg"
                                alt="Proyectos de infraestructura"
                                width={1200}
                                height={1400}
                                className="w-full h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primaryBlue/80 via-primaryBlue/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">Innovación en Cada Proyecto</h3>
                                <p className="text-white/90">
                                    Tecnología de punta aplicada a soluciones reales
                                </p>
                            </div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secundaryYellow/20 rounded-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}