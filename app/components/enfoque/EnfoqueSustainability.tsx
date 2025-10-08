import Image from "next/image";
import {FaSolarPanel, FaRecycle, FaTint, FaLeaf, FaChartLine, FaHandHoldingHeart} from "react-icons/fa";

export default function EnfoqueSustainability() {
    return (
        <div className="bg-bgMain py-20 overflow-hidden">
            <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section with Image */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                        <div>
                            <div
                                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-thirdGreen/20 to-thirdGreen/10 rounded-full mb-6 backdrop-blur-sm">
                                <span className="text-thirdGreen font-bold text-sm uppercase tracking-wider">
                                    Sostenibilidad
                                </span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primaryBlue mb-6 leading-tight">
                                Compromiso con el Medio Ambiente
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                La sostenibilidad no es solo una palabra para nosotros, es el núcleo
                                de cada decisión que tomamos. Desde la selección de materiales hasta
                                la ejecución final, cada proyecto refleja nuestro compromiso inquebrantable
                                con el planeta.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Implementamos las mejores prácticas internacionales en gestión ambiental,
                                asegurando que nuestros proyectos no solo cumplan con las regulaciones,
                                sino que las superen, estableciendo nuevos estándares en la industria.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/eolico2.jpg"
                                    alt="Sostenibilidad"
                                    width={1200}
                                    height={800}
                                    className="w-full h-[450px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Gradient Overlay on Hover */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-thirdGreen/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Corner Accent */}
                                <div
                                    className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-thirdGreen rounded-tr-3xl opacity-60"></div>
                            </div>

                            {/* Decorative Background - Contained */}
                            <div
                                className="absolute -bottom-4 -right-4 w-3/4 h-3/4 bg-gradient-to-br from-thirdGreen/15 via-secundaryYellow/10 to-transparent rounded-3xl -z-10 blur-3xl"></div>
                        </div>
                    </div>

                    {/* Sustainability Pillars */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                        {[
                            {
                                icon: FaSolarPanel,
                                title: "Energía Renovable",
                                description: "Implementación de sistemas de energía renovable en todos nuestros proyectos",
                                stat: "+900 MW instalados",
                                gradient: "from-thirdGreen to-thirdGreen/80"
                            },
                            {
                                icon: FaRecycle,
                                title: "Gestión de Residuos",
                                description: "Gestión adecuada de residuos en todas nuestras operaciones",
                                stat: "100% cumplimiento",
                                gradient: "from-secundaryYellow to-secundaryYellow/80"
                            },
                            {
                                icon: FaTint,
                                title: "Optimización de Recursos",
                                description: "Optimización de recursos para minimizar el impacto ambiental",
                                stat: "Reducción continua",
                                gradient: "from-primaryBlue to-primaryBlue/80"
                            }
                        ].map((pillar, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Top accent line */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-thirdGreen to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>

                                <div
                                    className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                                    <pillar.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-primaryBlue mb-3">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-4 text-sm lg:text-base">
                                    {pillar.description}
                                </p>
                                <div className="flex items-center gap-2">
                                    <div
                                        className="h-1 w-12 bg-gradient-to-r from-secundaryYellow to-transparent rounded-full"></div>
                                    <div className="text-secundaryYellow font-bold text-sm">
                                        {pillar.stat}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Commitments */}
                    <div className="relative bg-white rounded-3xl p-8 lg:p-16 shadow-xl">
                        {/* Decorative corner elements */}
                        <div
                            className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-thirdGreen/20 rounded-tl-3xl"></div>
                        <div
                            className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-secundaryYellow/20 rounded-br-3xl"></div>

                        <div className="text-center mb-12">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primaryBlue mb-4">
                                Nuestros Compromisos Ambientales
                            </h3>
                            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                                Acciones concretas que tomamos cada día para proteger nuestro planeta
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                            {[
                                {
                                    icon: FaLeaf,
                                    title: "Carbono Neutral",
                                    description: "Trabajando hacia la neutralidad de carbono en todas nuestras operaciones",
                                    color: "text-thirdGreen"
                                },
                                {
                                    icon: FaChartLine,
                                    title: "Medición de Impacto",
                                    description: "Monitoreo constante del impacto ambiental de cada proyecto",
                                    color: "text-primaryBlue"
                                },
                                {
                                    icon: FaHandHoldingHeart,
                                    title: "Responsabilidad Social",
                                    description: "Programas de educación ambiental en las comunidades donde operamos",
                                    color: "text-secundaryYellow"
                                }
                            ].map((commitment, index) => (
                                <div key={index} className="text-center group">
                                    <div
                                        className="relative inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-bgMain to-gray-50 rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                                        <commitment.icon
                                            className={`w-9 h-9 lg:w-10 lg:h-10 ${commitment.color} transition-transform duration-300 group-hover:scale-110`} />
                                        {/* Pulse effect on hover */}
                                        <div
                                            className="absolute inset-0 rounded-full bg-gradient-to-br from-thirdGreen/20 to-transparent opacity-0 group-hover:opacity-100 animate-pulse"></div>
                                    </div>
                                    <h4 className="text-lg lg:text-xl font-bold text-primaryBlue mb-3 group-hover:text-thirdGreen transition-colors duration-300">
                                        {commitment.title}
                                    </h4>
                                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
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