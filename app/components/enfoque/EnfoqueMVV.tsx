import { FaRocket, FaEye, FaHeart, FaLeaf, FaStar, FaUsers } from "react-icons/fa";

export default function EnfoqueMVV() {
    return (
        <>
            <style jsx>{`
                .mvv-card {
                    position: relative;
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    background: linear-gradient(135deg, rgba(0, 12, 71, 0.03), rgba(206, 211, 0, 0.03));
                }

                .mvv-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 6px;
                    background: linear-gradient(90deg, #CED300, #0A8700);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .mvv-card:hover::before {
                    transform: scaleX(1);
                }

                .mvv-card:hover {
                    transform: translateY(-12px);
                    box-shadow: 0 24px 48px rgba(0, 12, 71, 0.2);
                }

                .value-card {
                    transition: all 0.5s ease;
                }

                .value-card:hover {
                    transform: scale(1.05);
                }
            `}</style>

            <div className="bg-bgMain py-20">
                <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                    {/* Header */}
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-h1 text-primaryBlue mb-6">
                            Nuestro ADN Corporativo
                        </h2>
                        <p className="text-p text-gray-700 leading-relaxed">
                            Los principios que guían cada decisión, cada proyecto, cada día
                        </p>
                        <div className="w-24 h-1 bg-secundaryYellow mx-auto mt-6 rounded-full"></div>
                    </div>

                    {/* Misión y Visión */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {/* Misión */}
                        <div className="mvv-card bg-white rounded-3xl p-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-primaryBlue to-thirdGreen rounded-2xl flex items-center justify-center">
                                    <FaRocket className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-primaryBlue">Misión</h3>
                            </div>
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Ser líderes en la industria implementando soluciones sustentables
                                e innovadoras.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Nos comprometemos a transformar la infraestructura y energía de
                                Latinoamérica a través de proyectos que combinan tecnología de punta
                                con prácticas sostenibles, generando valor para nuestros clientes y
                                las comunidades donde operamos.
                            </p>
                        </div>

                        {/* Visión */}
                        <div className="mvv-card bg-white rounded-3xl p-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-thirdGreen to-secundaryYellow rounded-2xl flex items-center justify-center">
                                    <FaEye className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-primaryBlue">Visión</h3>
                            </div>
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Ser el referente líder en infraestructuras, energías renovables
                                y servicios especializados a nivel nacional e internacional.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Aspiramos a ser reconocidos como la empresa más confiable y
                                visionaria del sector, expandiendo nuestra presencia internacional
                                y estableciendo nuevos estándares de excelencia en cada mercado
                                que servimos.
                            </p>
                        </div>
                    </div>

                    {/* Valores */}
                    <div className="bg-white rounded-3xl p-10 lg:p-16">
                        <div className="text-center mb-12">
                            <h3 className="text-h2 text-primaryBlue mb-4">Nuestros Valores</h3>
                            <p className="text-gray-700">
                                Los pilares que sostienen nuestra cultura organizacional
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: FaLeaf,
                                    title: "Innovación",
                                    description: "Constantemente buscamos nuevas formas de mejorar y evolucionar",
                                    color: "from-primaryBlue to-thirdGreen"
                                },
                                {
                                    icon: FaStar,
                                    title: "Sostenibilidad",
                                    description: "Comprometidos con el medio ambiente en cada proyecto",
                                    color: "from-thirdGreen to-secundaryYellow"
                                },
                                {
                                    icon: FaHeart,
                                    title: "Calidad",
                                    description: "Excelencia sin compromisos en cada entrega",
                                    color: "from-secundaryYellow to-primaryBlue"
                                },
                                {
                                    icon: FaUsers,
                                    title: "Responsabilidad Social",
                                    description: "Impacto positivo en las comunidades que servimos",
                                    color: "from-primaryBlue to-secundaryYellow"
                                }
                            ].map((value, index) => (
                                <div key={index} className="value-card text-center">
                                    <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                                        <value.icon className="w-10 h-10 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-primaryBlue mb-3">
                                        {value.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}