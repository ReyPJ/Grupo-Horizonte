import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaGlobe } from "react-icons/fa";

export default function ContactInfo() {
    return (
        <>
            <style jsx>{`
                .info-card {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 2px solid transparent;
                }

                .info-card:hover {
                    transform: translateY(-8px) scale(1.02);
                    border-color: #CED300;
                    box-shadow: 0 20px 40px rgba(0, 12, 71, 0.15);
                }

                .icon-wrapper {
                    position: relative;
                    transition: all 0.4s ease;
                }

                .info-card:hover .icon-wrapper {
                    transform: rotate(5deg) scale(1.1);
                }

                .info-link {
                    transition: all 0.3s ease;
                    display: inline-block;
                }

                .info-link:hover {
                    color: #CED300;
                    transform: translateX(4px);
                }

                .section-badge {
                    background: linear-gradient(135deg, #000C47 0%, #0A8700 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .decorative-line {
                    height: 4px;
                    background: linear-gradient(90deg, #CED300 0%, #0A8700 100%);
                    border-radius: 2px;
                    animation: expandLine 1.5s ease-out;
                }

                @keyframes expandLine {
                    from { width: 0; opacity: 0; }
                    to { width: 100%; opacity: 1; }
                }
            `}</style>

            <div className="bg-gradient-to-b from-white to-gray-50 py-20">
                <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h2 className="text-h2 text-primaryBlue mb-4">
                                Múltiples Formas de Conectar
                            </h2>
                            <div className="decorative-line w-24 mx-auto mb-6"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Estamos disponibles para atenderte por el medio que prefieras.
                                Tu proyecto es nuestra prioridad.
                            </p>
                        </div>

                        {/* Info Cards */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Teléfonos */}
                            <div className="info-card bg-white rounded-3xl p-8 shadow-lg">
                                <div className="icon-wrapper w-16 h-16 bg-gradient-to-br from-secundaryYellow to-thirdGreen rounded-2xl flex items-center justify-center mb-6">
                                    <FaPhone className="text-primaryBlue text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-primaryBlue mb-4">
                                    Teléfonos
                                </h3>
                                <div className="space-y-3">
                                    <a href="tel:+525515572791" className="info-link text-lg text-gray-700 block font-semibold">
                                        55 1557 2791
                                    </a>
                                    <a href="tel:+525610421156" className="info-link text-lg text-gray-700 block font-semibold">
                                        56 1042 1156
                                    </a>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="info-card bg-white rounded-3xl p-8 shadow-lg">
                                <div className="icon-wrapper w-16 h-16 bg-gradient-to-br from-secundaryYellow to-thirdGreen rounded-2xl flex items-center justify-center mb-6">
                                    <FaWhatsapp className="text-primaryBlue text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-primaryBlue mb-4">
                                    WhatsApp
                                </h3>
                                <div className="space-y-3">
                                    <a href="https://wa.me/5215610421156" target="_blank" rel="noopener noreferrer" className="info-link text-lg text-gray-700 block font-semibold">
                                        56 1042 1156
                                    </a>
                                    <p className="text-sm text-gray-500">
                                        Respuesta inmediata
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="info-card bg-white rounded-3xl p-8 shadow-lg">
                                <div className="icon-wrapper w-16 h-16 bg-gradient-to-br from-secundaryYellow to-thirdGreen rounded-2xl flex items-center justify-center mb-6">
                                    <FaEnvelope className="text-primaryBlue text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-primaryBlue mb-4">
                                    Correos
                                </h3>
                                <div className="space-y-3">
                                    <a href="mailto:ghorizonte@hh.com" className="info-link text-lg text-gray-700 block font-semibold break-words">
                                        ghorizonte@hh.com
                                    </a>
                                    <a href="mailto:ccc@4ccc.com.mx" className="info-link text-lg text-gray-700 block font-semibold break-words">
                                        ccc@4ccc.com.mx
                                    </a>
                                </div>
                            </div>

                            {/* Dirección */}
                            <div className="info-card bg-white rounded-3xl p-8 shadow-lg">
                                <div className="icon-wrapper w-16 h-16 bg-gradient-to-br from-secundaryYellow to-thirdGreen rounded-2xl flex items-center justify-center mb-6">
                                    <FaMapMarkerAlt className="text-primaryBlue text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-primaryBlue mb-4">
                                    Dirección
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    RET 1 Cecilio Robelo No. 66,<br />
                                    Jardín Balbuena,<br />
                                    Venustiano Carranza,<br />
                                    CDMX, CP 15900
                                </p>
                            </div>

                            {/* Horario */}
                            <div className="info-card bg-white rounded-3xl p-8 shadow-lg">
                                <div className="icon-wrapper w-16 h-16 bg-gradient-to-br from-secundaryYellow to-thirdGreen rounded-2xl flex items-center justify-center mb-6">
                                    <FaClock className="text-primaryBlue text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-primaryBlue mb-4">
                                    Horario
                                </h3>
                                <div className="space-y-2 text-lg text-gray-700">
                                    <div className="flex justify-between">
                                        <span>Lun - Vie</span>
                                        <span className="font-bold text-secundaryYellow">9:00 - 18:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sábado</span>
                                        <span className="font-bold text-secundaryYellow">9:00 - 14:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Domingo</span>
                                        <span className="text-gray-400">Cerrado</span>
                                    </div>
                                </div>
                            </div>

                            {/* Cobertura */}
                            <div className="info-card bg-white rounded-3xl p-8 shadow-lg">
                                <div className="icon-wrapper w-16 h-16 bg-gradient-to-br from-secundaryYellow to-thirdGreen rounded-2xl flex items-center justify-center mb-6">
                                    <FaGlobe className="text-primaryBlue text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-primaryBlue mb-4">
                                    Cobertura
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Atendemos proyectos en<br />
                                    todo México y<br />
                                    Latinoamérica
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}