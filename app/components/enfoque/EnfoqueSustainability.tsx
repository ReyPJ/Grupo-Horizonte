import Image from "next/image";
import { FaSolarPanel, FaRecycle, FaTint, FaLeaf, FaChartLine, FaHandHoldingHeart } from "react-icons/fa";

export default function EnfoqueSustainability() {
    return (
        <div className="bg-bgMain py-20">
            <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section with Image */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <div className="inline-block px-4 py-2 bg-thirdGreen/20 rounded-full mb-6">
                                <span className="text-thirdGreen font-bold text-sm uppercase tracking-wider">
                                    Sostenibilidad
                                </span>
                            </div>
                            <h2 className="text-h1 text-primaryBlue mb-6 leading-tight">
                                Compromiso con el Medio Ambiente
                            </h2>
                            <p className="text-p text-gray-700 mb-6 leading-relaxed">
                                La sostenibilidad no es solo una palabra para nosotros, es el núcleo
                                de cada decisión que tomamos. Desde la selección de materiales hasta
                                la ejecución final, cada proyecto refleja nuestro compromiso inquebrantable
                                con el planeta.
                            </p>
                            <p className="text-p text-gray-700 leading-relaxed">
                                Implementamos las mejores prácticas internacionales en gestión ambiental,
                                asegurando que nuestros proyectos no solo cumplan con las regulaciones,
                                sino que las superen, estableciendo nuevos estándares en la industria.
                            </p>
                        </div>

                        <div className="relative">
                            <Image
                                src="/eolico2.jpg"
                                alt="Sostenibilidad"
                                width={1200}
                                height={800}
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-thirdGreen/20 to-secundaryYellow/20 rounded-3xl -z-10"></div>
                        </div>
                    </div>

                    {/* Sustainability Pillars */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: FaSolarPanel,
                                title: "Energía Renovable",
                                description: "Implementación de sistemas de energía renovable en todos nuestros proyectos",
                                stat: "+900 MW instalados"
                            },
                            {
                                icon: FaRecycle,
                                title: "Gestión de Residuos",
                                description: "Gestión adecuada de residuos en todas nuestras operaciones",
                                stat: "100% cumplimiento"
                            },
                            {
                                icon: FaTint,
                                title: "Optimización de Recursos",
                                description: "Optimización de recursos para minimizar el impacto ambiental",
                                stat: "Reducción continua"
                            }
                        ].map((pillar, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-thirdGreen to-secundaryYellow rounded-2xl flex items-center justify-center mb-6">
                                    <pillar.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-primaryBlue mb-3">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {pillar.description}
                                </p>
                                <div className="text-secundaryYellow font-bold text-sm">
                                    {pillar.stat}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Commitments */}
                    <div className="bg-white rounded-3xl p-10 lg:p-16">
                        <div className="text-center mb-12">
                            <h3 className="text-h2 text-primaryBlue mb-4">
                                Nuestros Compromisos Ambientales
                            </h3>
                            <p className="text-gray-700 max-w-2xl mx-auto">
                                Acciones concretas que tomamos cada día para proteger nuestro planeta
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: FaLeaf,
                                    title: "Carbono Neutral",
                                    description: "Trabajando hacia la neutralidad de carbono en todas nuestras operaciones"
                                },
                                {
                                    icon: FaChartLine,
                                    title: "Medición de Impacto",
                                    description: "Monitoreo constante del impacto ambiental de cada proyecto"
                                },
                                {
                                    icon: FaHandHoldingHeart,
                                    title: "Responsabilidad Social",
                                    description: "Programas de educación ambiental en las comunidades donde operamos"
                                }
                            ].map((commitment, index) => (
                                <div key={index} className="text-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-bgMain rounded-full mb-6">
                                        <commitment.icon className="w-10 h-10 text-thirdGreen" />
                                    </div>
                                    <h4 className="text-lg font-bold text-primaryBlue mb-3">
                                        {commitment.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {commitment.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}