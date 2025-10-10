import Image from "next/image";

export default function EnfoqueIntro() {
    return (
        <div className="bg-white py-20 overflow-hidden">
            <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Image Side */}
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/obras1.jpg"
                                    alt="Equipo trabajando"
                                    width={1200}
                                    height={1400}
                                    className="w-full h-[450px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Subtle Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primaryBlue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Corner Accent */}
                                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-secundaryYellow rounded-bl-3xl"></div>
                            </div>

                            {/* Decorative Background Elements - Contained within view */}
                            <div className="absolute -bottom-4 -left-4 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-secundaryYellow/20 to-secundaryYellow/5 rounded-3xl -z-10 blur-2xl"></div>
                            <div className="absolute -top-4 -right-4 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-bl from-thirdGreen/20 to-thirdGreen/5 rounded-3xl -z-10 blur-2xl"></div>
                        </div>

                        {/* Content Side */}
                        <div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primaryBlue mb-6 leading-tight">
                                Quiénes Somos
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Somos un grupo empresarial comprometido en ofrecer soluciones especializadas
                                en ingeniería, construcción, infraestructura eléctrica de alta tensión y energía
                                renovable, garantizando la calidad, la innovación y el respeto al medio ambiente.
                            </p>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Constructora 4C, con más de 20 años de experiencia en construcción
                                civil, mecánica, eléctrica y fotovoltaica. IMBAR, con 20 años especializándose en
                                infraestructura eléctrica para CFE y la industria privada. Núcleo Energy, impulsando
                                el futuro con energías renovables.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Nuestro compromiso con la eficiencia, la innovación y la sostenibilidad nos ha
                                posicionado como líderes en la transformación del sector energético e infraestructura
                                en Latinoamérica.
                            </p>

                            {/* Feature Cards */}
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="group relative bg-gradient-to-br from-bgMain to-white p-6 rounded-2xl border border-gray-100 hover:border-primaryBlue/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primaryBlue/5 to-transparent rounded-tr-2xl"></div>
                                    <div className="text-3xl font-bold text-primaryBlue mb-2 relative z-10">
                                        Innovación
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                                        Tecnología de punta en cada proyecto
                                    </p>
                                    <div className="absolute bottom-0 left-0 w-1 h-0 bg-gradient-to-t from-primaryBlue to-transparent group-hover:h-full transition-all duration-300 rounded-bl-2xl"></div>
                                </div>

                                <div className="group relative bg-gradient-to-br from-bgMain to-white p-6 rounded-2xl border border-gray-100 hover:border-secundaryYellow/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-secundaryYellow/5 to-transparent rounded-tr-2xl"></div>
                                    <div className="text-3xl font-bold text-primaryBlue mb-2 relative z-10">
                                        Calidad
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                                        Excelencia en cada entrega
                                    </p>
                                    <div className="absolute bottom-0 left-0 w-1 h-0 bg-gradient-to-t from-secundaryYellow to-transparent group-hover:h-full transition-all duration-300 rounded-bl-2xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}