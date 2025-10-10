import BigButton from "@/app/components/bigButton";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ProjectsCTA() {
    return (
        <>
            <style jsx>{`
                .stats-final {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
            `}</style>

            <div className="relative min-h-[80vh] flex items-center justify-center bg-no-repeat bg-cover"
                 style={{backgroundImage: "url(/eolico2.jpg)"}}>
                <div className="absolute inset-0 bg-gradient-to-r from-primaryBlue/95 to-primaryBlue/80 z-0"></div>

                <div className="relative z-20 px-6 max-w-6xl mx-auto w-full py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-h1 md:text-[3.5rem] text-white font-bold mb-6 leading-tight">
                            Construyamos el Futuro Juntos
                        </h2>
                        <p className="text-h3 md:text-[1.5rem] text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                            Con más de 40 años de experiencia y proyectos exitosos en México,
                            Perú y Argentina, estamos listos para tu próximo desafío
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                            <a href={"/contacto"}>
                                <BigButton
                                    textBefore="Solicitar Cotización"
                                    textAfter="Solicitar Cotización"
                                    textColor="white"
                                    minWidth="240px"
                                    maxWidth="280px"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid md:grid-cols-4 gap-6 mb-16">
                        {[
                            { number: "+900 MW", label: "Capacidad Instalada" },
                            { number: "26+", label: "Proyectos Exitosos" },
                            { number: "3", label: "Países" },
                            { number: "40+", label: "Años de Experiencia" }
                        ].map((stat, idx) => (
                            <div key={idx} className="stats-final text-white p-6 rounded-2xl text-center">
                                <div className="text-4xl font-bold mb-2 text-secundaryYellow">{stat.number}</div>
                                <div className="text-sm opacity-90 uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="grid md:grid-cols-3 gap-6 text-white">
                        <div className="stats-final p-6 rounded-2xl flex items-start gap-4">
                            <FaPhone className="w-6 h-6 text-secundaryYellow flex-shrink-0 mt-1" />
                            <div>
                                <div className="font-bold mb-1">Llámanos</div>
                                <div className="text-sm opacity-90">+52 55 1557 2791</div>
                            </div>
                        </div>
                        <div className="stats-final p-6 rounded-2xl flex items-start gap-4">
                            <FaEnvelope className="w-6 h-6 text-secundaryYellow flex-shrink-0 mt-1" />
                            <div>
                                <div className="font-bold mb-1">Escríbenos</div>
                                <div className="text-sm opacity-90">ccc@4ccc.com.mx</div>
                            </div>
                        </div>
                        <div className="stats-final p-6 rounded-2xl flex items-start gap-4">
                            <FaMapMarkerAlt className="w-6 h-6 text-secundaryYellow flex-shrink-0 mt-1" />
                            <div>
                                <div className="font-bold mb-1">Visítanos</div>
                                <div className="text-sm opacity-90">CDMX, México</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}