import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function ContactHero() {
    return (
        <>
            <style jsx>{`
                .hero-overlay {
                    background: linear-gradient(135deg, 
                        rgba(0, 12, 71, 0.95) 0%,
                        rgba(0, 12, 71, 0.85) 50%,
                        rgba(10, 135, 0, 0.75) 100%
                    );
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
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: left 0.6s ease;
                }

                .cta-button:hover::before {
                    left: 100%;
                }

                .cta-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 24px rgba(206, 211, 0, 0.3);
                }

                .hero-badge {
                    animation: float 3s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }

                .stats-badge {
                    backdrop-filter: blur(10px);
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    transition: all 0.3s ease;
                }

                .stats-badge:hover {
                    background: rgba(255, 255, 255, 0.15);
                    transform: scale(1.05);
                }
            `}</style>

            <div className="relative bg-cover bg-center min-h-[85vh] flex items-center" style={{backgroundImage: "url(/obras1.jpg)"}}>
                <div className="hero-overlay absolute inset-0 z-0"></div>

                <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 py-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="text-white space-y-8">
                                <div className="hero-badge inline-block">
                                    <span className="bg-secundaryYellow text-primaryBlue px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
                                        Contacto
                                    </span>
                                </div>

                                <h1 className="text-h1 md:text-[58px] lg:text-[68px] font-bold leading-tight">
                                    Transformemos<br />
                                    Tus Ideas en<br />
                                    <span className="text-secundaryYellow">Realidad</span>
                                </h1>

                                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                                    Con más de 20 años de experiencia, Grupo Horizonte está listo
                                    para llevar tu proyecto al siguiente nivel. Contáctanos y
                                    descubre cómo podemos ayudarte.
                                </p>
                            </div>

                            {/* Right Stats */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="stats-badge rounded-2xl p-6 text-center">
                                    <div className="text-5xl font-bold text-secundaryYellow mb-2">40+</div>
                                    <div className="text-white text-lg">Años de Experiencia</div>
                                </div>
                                <div className="stats-badge rounded-2xl p-6 text-center">
                                    <div className="text-5xl font-bold text-secundaryYellow mb-2">500+</div>
                                    <div className="text-white text-lg">Proyectos Completados</div>
                                </div>
                                <div className="stats-badge rounded-2xl p-6 text-center">
                                    <div className="text-5xl font-bold text-secundaryYellow mb-2">15+</div>
                                    <div className="text-white text-lg">Estados Atendidos</div>
                                </div>
                                <div className="stats-badge rounded-2xl p-6 text-center">
                                    <div className="text-5xl font-bold text-secundaryYellow mb-2">100%</div>
                                    <div className="text-white text-lg">Compromiso</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}