import { GoArrowUpRight } from "react-icons/go";
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactCTA() {
    return (
        <>
            <style jsx>{`
                .cta-background {
                    background: linear-gradient(135deg, #000C47 0%, #001a5c 50%, #0A8700 100%);
                    position: relative;
                    overflow: hidden;
                }

                .cta-background::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -20%;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(206, 211, 0, 0.15) 0%, transparent 70%);
                    border-radius: 50%;
                    animation: float 6s ease-in-out infinite;
                }

                .cta-background::after {
                    content: '';
                    position: absolute;
                    bottom: -30%;
                    left: -10%;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(10, 135, 0, 0.15) 0%, transparent 70%);
                    border-radius: 50%;
                    animation: float 8s ease-in-out infinite reverse;
                }

                @keyframes float {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(30px, 30px); }
                }

                .cta-button {
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .cta-button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    transition: left 0.6s ease;
                }

                .cta-button:hover::before {
                    left: 100%;
                }

                .cta-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 30px rgba(206, 211, 0, 0.4);
                }

                .info-card-cta {
                    backdrop-filter: blur(10px);
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    transition: all 0.3s ease;
                }

                .info-card-cta:hover {
                    background: rgba(255, 255, 255, 0.15);
                    transform: translateY(-4px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                }
            `}</style>

            <div className="cta-background py-20 relative">
                <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        {/* Main CTA */}
                        <div className="text-center mb-16">
                            <h2 className="text-h2 md:text-[48px] text-white mb-6">
                                ¿Listo para Iniciar tu Proyecto?
                            </h2>
                            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                                Con más de 20 años de experiencia, Grupo Horizonte es tu aliado
                                estratégico para construir el futuro de la infraestructura y energía en México.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/proyectos"
                                    className="cta-button bg-secundaryYellow text-primaryBlue px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 shadow-2xl"
                                >
                                    Ver Proyectos
                                    <GoArrowUpRight className="text-3xl" />
                                </a>
                                <a
                                    href="/#EMPRESAS"
                                    className="cta-button bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 border-2 border-white/30 hover:bg-white hover:text-primaryBlue"
                                >
                                    Nuestras Empresas
                                    <GoArrowUpRight className="text-3xl" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Contact Cards */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                            <div className="info-card-cta rounded-2xl p-6 text-center">
                                <FaPhone className="text-secundaryYellow text-4xl mx-auto mb-3" />
                                <div className="text-white font-bold text-lg mb-2">Teléfono</div>
                                <a href="tel:+525530238337" className="text-white/90 hover:text-secundaryYellow transition-colors">
                                    55 3023 8337
                                </a>
                            </div>

                            <div className="info-card-cta rounded-2xl p-6 text-center">
                                <FaWhatsapp className="text-secundaryYellow text-4xl mx-auto mb-3" />
                                <div className="text-white font-bold text-lg mb-2">WhatsApp</div>
                                <a href="https://wa.me/525530238337" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-secundaryYellow transition-colors">
                                    55 3023 8337
                                </a>
                            </div>
                            <div className="info-card-cta rounded-2xl p-6 text-center">
                                <FaMapMarkerAlt className="text-secundaryYellow text-4xl mx-auto mb-3" />
                                <div className="text-white font-bold text-lg mb-2">Ubicación</div>
                                <div className="text-white/90">
                                    CDMX, México
                                </div>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-16 pt-12 border-t border-white/20">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                <div>
                                    <div className="text-5xl font-bold text-secundaryYellow mb-2">20+</div>
                                    <div className="text-white/90">Años de Experiencia</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-bold text-secundaryYellow mb-2">500+</div>
                                    <div className="text-white/90">Proyectos Exitosos</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-bold text-secundaryYellow mb-2">15+</div>
                                    <div className="text-white/90">Estados Cubiertos</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-bold text-secundaryYellow mb-2">100%</div>
                                    <div className="text-white/90">Satisfacción</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}