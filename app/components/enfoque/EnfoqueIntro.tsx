import Image from "next/image";

export default function EnfoqueIntro() {
    return (
        <div className="bg-white py-20">
            <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/obras1.jpg"
                                    alt="Equipo trabajando"
                                    width={1200}
                                    height={1400}
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secundaryYellow/20 rounded-3xl -z-10"></div>
                            <div className="absolute -top-8 -right-8 w-48 h-48 bg-thirdGreen/20 rounded-3xl -z-10"></div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-h1 text-primaryBlue mb-6 leading-tight">
                                Quiénes Somos
                            </h2>
                            <p className="text-p text-gray-700 mb-6 leading-relaxed">
                                Somos una empresa comprometida en ofrecer soluciones especializadas
                                en ingeniería, construcción y energía fotovoltaica, garantizando la
                                calidad, la innovación y el respeto al medio ambiente.
                            </p>
                            <p className="text-p text-gray-700 mb-6 leading-relaxed">
                                Constructora Cuatro Caminos, empresa con más de 20 años de experiencia
                                en el sector de la construcción, con especial foco en la ingeniería
                                mecánica, civil, eléctrica y fotovoltaica. Nos dedicamos a desarrollar
                                proyectos de infraestructura y energía de alta calidad.
                            </p>
                            <p className="text-p text-gray-700 leading-relaxed">
                                Nuestro compromiso con la eficiencia, la innovación y la sostenibilidad
                                nos ha posicionado como líderes en la transformación del sector energético
                                e infraestructura en Latinoamérica.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-6">
                                <div className="bg-bgMain p-6 rounded-2xl">
                                    <div className="text-2xl font-bold text-primaryBlue mb-2">Innovación</div>
                                    <p className="text-sm text-gray-600">
                                        Tecnología de punta en cada proyecto
                                    </p>
                                </div>
                                <div className="bg-bgMain p-6 rounded-2xl">
                                    <div className="text-2xl font-bold text-primaryBlue mb-2">Calidad</div>
                                    <p className="text-sm text-gray-600">
                                        Excelencia en cada entrega
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}