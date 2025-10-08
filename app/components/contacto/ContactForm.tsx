import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaPaperPlane, FaCheckCircle, FaShieldAlt, FaClock } from "react-icons/fa";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
        alert("¡Gracias por contactarnos! Te responderemos pronto.");
    };

    return (
        <>
            <style jsx>{`
                .form-input {
                    transition: all 0.3s ease;
                    border: 2px solid #e5e7eb;
                }

                .form-input:focus {
                    border-color: #000C47;
                    box-shadow: 0 0 0 4px rgba(0, 12, 71, 0.1);
                    outline: none;
                }

                .form-input:hover {
                    border-color: #cbd5e0;
                }

                .submit-button {
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .submit-button::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    transform: translate(-50%, -50%);
                    transition: width 0.6s ease, height 0.6s ease;
                }

                .submit-button:hover::before {
                    width: 300px;
                    height: 300px;
                }

                .submit-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 24px rgba(206, 211, 0, 0.4);
                }

                .form-section {
                    animation: fadeInUp 0.6s ease-out;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .feature-badge {
                    transition: all 0.3s ease;
                }

                .feature-badge:hover {
                    transform: translateX(4px);
                }
            `}</style>

            <div className="bg-white py-20">
                <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* Left: Form */}
                            <div className="form-section">
                                <div className="mb-10">
                                    <h2 className="text-h2 text-primaryBlue mb-4">
                                        Cuéntanos sobre tu Proyecto
                                    </h2>
                                    <p className="text-xl text-gray-600">
                                        Completa el formulario y nos pondremos en contacto contigo
                                        en menos de 24 horas.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {/* Nombre */}
                                    <div>
                                        <label htmlFor="name" className="block text-lg font-semibold text-primaryBlue mb-2">
                                            Nombre Completo *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-input w-full px-5 py-4 rounded-xl text-lg"
                                            placeholder="Juan Pérez"
                                        />
                                    </div>

                                    {/* Email y Teléfono */}
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-lg font-semibold text-primaryBlue mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-input w-full px-5 py-4 rounded-xl text-lg"
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-lg font-semibold text-primaryBlue mb-2">
                                                Teléfono *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="form-input w-full px-5 py-4 rounded-xl text-lg"
                                                placeholder="+52 55 1234 5678"
                                            />
                                        </div>
                                    </div>

                                    {/* Empresa */}
                                    <div>
                                        <label htmlFor="company" className="block text-lg font-semibold text-primaryBlue mb-2">
                                            Empresa / Organización
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="form-input w-full px-5 py-4 rounded-xl text-lg"
                                            placeholder="Tu empresa"
                                        />
                                    </div>

                                    {/* Servicio */}
                                    <div>
                                        <label htmlFor="service" className="block text-lg font-semibold text-primaryBlue mb-2">
                                            Servicio de Interés *
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="form-input w-full px-5 py-4 rounded-xl text-lg bg-white"
                                        >
                                            <option value="">Selecciona un servicio</option>
                                            <option value="obras-civiles">Obras Civiles</option>
                                            <option value="obras-electricas">Obras Eléctricas</option>
                                            <option value="proyectos-fotovoltaicos">Proyectos Fotovoltaicos</option>
                                            <option value="servicios-especializados">Servicios Especializados</option>
                                            <option value="energia-eolica">Energía Eólica</option>
                                            <option value="energia-fotovoltaica">Energía Fotovoltaica</option>
                                            <option value="almacenamiento">Sistemas de Almacenamiento</option>
                                            <option value="transmision">Transmisión y Distribución</option>
                                            <option value="manufactura">Manufactura y Suministro</option>
                                            <option value="otro">Otro</option>
                                        </select>
                                    </div>

                                    {/* Mensaje */}
                                    <div>
                                        <label htmlFor="message" className="block text-lg font-semibold text-primaryBlue mb-2">
                                            Mensaje *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="form-input w-full px-5 py-4 rounded-xl text-lg resize-none"
                                            placeholder="Cuéntanos sobre tu proyecto, necesidades, presupuesto estimado, timeline..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        onClick={handleSubmit}
                                        className="submit-button w-full bg-primaryBlue text-white py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 shadow-xl relative z-10"
                                    >
                                        <span className="relative z-10">Enviar Mensaje</span>
                                        <FaPaperPlane className="text-2xl relative z-10" />
                                    </button>
                                </div>
                            </div>

                            {/* Right: Why Choose Us */}
                            <div className="form-section space-y-8">
                                <div>
                                    <h3 className="text-h3 text-primaryBlue mb-6">
                                        ¿Por qué trabajar con nosotros?
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                        Con más de 20 años de experiencia en infraestructura y energía,
                                        somos tu socio estratégico para proyectos de cualquier escala.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="feature-badge bg-gradient-to-r from-secundaryYellow/10 to-thirdGreen/10 rounded-2xl p-6 flex items-start gap-4">
                                        <div className="bg-secundaryYellow rounded-full p-3 flex-shrink-0">
                                            <FaCheckCircle className="text-primaryBlue text-2xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-primaryBlue mb-2">
                                                Experiencia Comprobada
                                            </h4>
                                            <p className="text-gray-600">
                                                Más de 500 proyectos exitosos en toda la República Mexicana
                                                y Latinoamérica.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="feature-badge bg-gradient-to-r from-secundaryYellow/10 to-thirdGreen/10 rounded-2xl p-6 flex items-start gap-4">
                                        <div className="bg-secundaryYellow rounded-full p-3 flex-shrink-0">
                                            <FaClock className="text-primaryBlue text-2xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-primaryBlue mb-2">
                                                Respuesta Rápida
                                            </h4>
                                            <p className="text-gray-600">
                                                Te contactamos en menos de 24 horas con una propuesta
                                                inicial personalizada.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="feature-badge bg-gradient-to-r from-secundaryYellow/10 to-thirdGreen/10 rounded-2xl p-6 flex items-start gap-4">
                                        <div className="bg-secundaryYellow rounded-full p-3 flex-shrink-0">
                                            <FaShieldAlt className="text-primaryBlue text-2xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-primaryBlue mb-2">
                                                Compromiso Total
                                            </h4>
                                            <p className="text-gray-600">
                                                Calidad certificada, cumplimiento de tiempos y
                                                transparencia en cada etapa.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Quote */}
                                <div className="bg-primaryBlue rounded-3xl p-8 text-white mt-8">
                                    <p className="text-2xl italic mb-4">
                                        "Nuestro compromiso es abrir camino hacia un futuro mejor,
                                        donde la calidad y la eficiencia sean la base de cada construcción."
                                    </p>
                                    <p className="text-secundaryYellow font-bold text-lg">
                                        - Grupo Horizonte Energy
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