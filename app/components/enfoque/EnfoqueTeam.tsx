import Image from "next/image";
import { FaUsers, FaGraduationCap, FaAward, FaHandshake } from "react-icons/fa";

export default function EnfoqueTeam() {
    return (
        <>
            <style jsx>{`
                .team-stat {
                    background: linear-gradient(135deg, rgba(0, 12, 71, 0.05), rgba(10, 135, 0, 0.05));
                    transition: all 0.4s ease;
                }

                .team-stat:hover {
                    background: linear-gradient(135deg, rgba(0, 12, 71, 0.1), rgba(10, 135, 0, 0.1));
                    transform: translateY(-4px);
                }
            `}</style>

            <div className="bg-white py-20">
                <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                    <div className="max-w-7xl mx-auto">
                        {/* Header with Image */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                            <div className="order-2 lg:order-1 relative">
                                <Image
                                    src="/obras1.jpg"
                                    alt="Nuestro equipo"
                                    width={1200}
                                    height={800}
                                    className="rounded-3xl shadow-2xl"
                                />
                                <div className="absolute -top-6 -left-6 w-48 h-48 bg-primaryBlue/10 rounded-3xl -z-10"></div>
                            </div>

                            <div className="order-1 lg:order-2">
                                <div className="inline-block px-4 py-2 bg-primaryBlue/10 rounded-full mb-6">
                                    <span className="text-primaryBlue font-bold text-sm uppercase tracking-wider">
                                        Nuestro Equipo
                                    </span>
                                </div>
                                <h2 className="text-h1 text-primaryBlue mb-6 leading-tight">
                                    La Fuerza Detrás de Cada Proyecto
                                </h2>
                                <p className="text-p text-gray-700 mb-6 leading-relaxed">
                                    Nuestro equipo aporta su excelencia técnica, ingenio, empuje, creatividad
                                    y experiencia para ayudar a nuestros clientes a lograr sus visiones audaces.
                                    Tenemos éxito a través de la asociación y el deseo compartido de marcar
                                    la diferencia.
                                </p>
                                <p className="text-p text-gray-700 leading-relaxed">
                                    Motivados por los desafíos en el horizonte, superamos todos los límites
                                    posibles. La integridad, innovación y una mentalidad de nunca conformarse
                                    están en el centro de todo lo que hacemos.
                                </p>
                            </div>
                        </div>

                        {/* Team Stats */}
                        <div className="grid md:grid-cols-4 gap-6 mb-16">
                            {[
                                { icon: FaUsers, number: "500+", label: "Profesionales" },
                                { icon: FaGraduationCap, number: "50+", label: "Ingenieros Certificados" },
                                { icon: FaAward, number: "20+", label: "Años de Experiencia" },
                                { icon: FaHandshake, number: "100%", label: "Compromiso" }
                            ].map((stat, index) => (
                                <div key={index} className="team-stat rounded-2xl p-6 text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primaryBlue to-thirdGreen rounded-full mb-4">
                                        <stat.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-3xl font-bold text-primaryBlue mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-600 uppercase tracking-wide">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Culture & Values */}
                        <div className="bg-gradient-to-br from-primaryBlue to-thirdGreen rounded-3xl p-10 lg:p-16 text-white">
                            <div className="max-w-4xl mx-auto">
                                <h3 className="text-h2 mb-8 text-center">Nuestra Cultura</h3>

                                <div className="grid md:grid-cols-2 gap-8 mb-12">
                                    <div>
                                        <h4 className="text-xl font-bold mb-4 text-secundaryYellow">
                                            Pensadores Audaces
                                        </h4>
                                        <p className="text-white/90 leading-relaxed">
                                            Nuestro equipo está lleno de pensadores audaces y hábiles
                                            solucionadores de problemas que convierten los desafíos en
                                            oportunidades para lograr lo extraordinario.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-4 text-secundaryYellow">
                                            Colaboración
                                        </h4>
                                        <p className="text-white/90 leading-relaxed">
                                            Trabajamos en equipo, compartiendo conocimientos y experiencias
                                            para superar cualquier obstáculo y entregar resultados excepcionales.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-4 text-secundaryYellow">
                                            Desarrollo Continuo
                                        </h4>
                                        <p className="text-white/90 leading-relaxed">
                                            Invertimos en el crecimiento profesional de nuestro equipo,
                                            manteniéndonos a la vanguardia de la industria.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-4 text-secundaryYellow">
                                            Seguridad Primero
                                        </h4>
                                        <p className="text-white/90 leading-relaxed">
                                            La seguridad de nuestro equipo es nuestra máxima prioridad en
                                            cada proyecto que emprendemos.
                                        </p>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className="text-xl text-white/95 italic">
                                        "Juntos construimos no solo proyectos, sino el futuro que queremos ver"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}