import { FaClipboardList, FaHammer, FaCheckCircle, FaHandshake, FaCogs, FaChartLine } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

const civilProcess = [
    { icon: FaClipboardList, title: "Planificación y Diseño", subtitle: "Gestión y Licencias" },
    { icon: FaHammer, title: "Preparación del Campo", subtitle: "Obras Tempranas" },
    { icon: MdEngineering, title: "Estructuración", subtitle: "Integración" },
    { icon: FaCogs, title: "Acabado / Puesta en Servicio", subtitle: "Inspección y Funcionalidad" },
    { icon: FaHandshake, title: "Finalización y Entrega", subtitle: "Post-construcción" }
];

const electroProcess = [
    { icon: FaClipboardList, title: "Planificación y Diseño", subtitle: "Análisis técnico inicial" },
    { icon: FaHammer, title: "Ejecución de Campo", subtitle: "Instalación de equipos" },
    { icon: FaChartLine, title: "Supervisión y Control", subtitle: "Monitoreo de calidad" },
    { icon: FaCheckCircle, title: "Entrega y Mantenimiento", subtitle: "Puesta en marcha" }
];

export default function EnfoqueProcess() {
    return (
        <>
            <style jsx>{`
                .process-card {
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .process-card:hover {
                    transform: translateY(-8px);
                }

                .process-number {
                    background: linear-gradient(135deg, #000C47, #0A8700);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
            `}</style>

            <div className="bg-white py-20">
                <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h2 className="text-h1 text-primaryBlue mb-6">
                                Cómo Trabajamos
                            </h2>
                            <p className="text-p text-gray-700 leading-relaxed max-w-3xl mx-auto">
                                Un proceso meticuloso y probado que garantiza resultados excepcionales
                                en cada tipo de proyecto que ejecutamos
                            </p>
                        </div>

                        {/* Obras Civiles */}
                        <div className="mb-20">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-primaryBlue to-thirdGreen rounded-2xl flex items-center justify-center">
                                    <MdEngineering className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-h2 text-primaryBlue font-bold">
                                        Proyectos de Obras Civiles
                                    </h3>
                                    <p className="text-gray-600">
                                        Infraestructura residencial, comercial e industrial
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-5 gap-6">
                                {civilProcess.map((step, index) => (
                                    <div key={index} className="process-card relative">
                                        <div className="bg-bgMain rounded-2xl p-6 h-full border-2 border-transparent hover:border-secundaryYellow">
                                            <div className="text-5xl font-bold process-number mb-4">
                                                {index + 1}
                                            </div>
                                            <div className="w-12 h-12 bg-gradient-to-br from-secundaryYellow to-thirdGreen rounded-xl flex items-center justify-center mb-4">
                                                <step.icon className="w-6 h-6 text-primaryBlue" />
                                            </div>
                                            <h4 className="font-bold text-primaryBlue mb-2 text-sm">
                                                {step.title}
                                            </h4>
                                            <p className="text-xs text-gray-600">
                                                {step.subtitle}
                                            </p>
                                        </div>
                                        {index < civilProcess.length - 1 && (
                                            <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-secundaryYellow"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Proyectos Electromecánicos */}
                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-thirdGreen to-secundaryYellow rounded-2xl flex items-center justify-center">
                                    <FaCogs className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-h2 text-primaryBlue font-bold">
                                        Proyectos Electromecánicos
                                    </h3>
                                    <p className="text-gray-600">
                                        Energía fotovoltaica y transmisión eléctrica
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-4 gap-6">
                                {electroProcess.map((step, index) => (
                                    <div key={index} className="process-card relative">
                                        <div className="bg-bgMain rounded-2xl p-6 h-full border-2 border-transparent hover:border-thirdGreen">
                                            <div className="text-5xl font-bold process-number mb-4">
                                                {index + 1}
                                            </div>
                                            <div className="w-12 h-12 bg-gradient-to-br from-thirdGreen to-secundaryYellow rounded-xl flex items-center justify-center mb-4">
                                                <step.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <h4 className="font-bold text-primaryBlue mb-2 text-sm">
                                                {step.title}
                                            </h4>
                                            <p className="text-xs text-gray-600">
                                                {step.subtitle}
                                            </p>
                                        </div>
                                        {index < electroProcess.length - 1 && (
                                            <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-thirdGreen"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}