"use client";

import { useState } from "react";
import { FaPaperPlane, FaCheckCircle, FaShieldAlt, FaClock } from "react-icons/fa";

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    service?: string;
    message?: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "El nombre es requerido";
        }

        if (!formData.email.trim()) {
            newErrors.email = "El email es requerido";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "El teléfono es requerido";
        }

        if (!formData.service) {
            newErrors.service = "Selecciona un servicio";
        }

        if (!formData.message.trim()) {
            newErrors.message = "El mensaje es requerido";
        } else if (formData.message.trim().length < 20) {
            newErrors.message = "El mensaje debe tener al menos 20 caracteres";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    service: "",
                    message: ""
                });

                setTimeout(() => {
                    setSubmitStatus('idle');
                }, 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error al enviar formulario:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
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

                .form-input.error {
                    border-color: #ef4444;
                }

                .form-input.error:focus {
                    box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
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

                .submit-button:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 24px rgba(206, 211, 0, 0.4);
                }

                .submit-button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
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

                .success-message {
                    animation: slideIn 0.5s ease-out;
                }

                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
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

                                {submitStatus === 'success' && (
                                    <div className="success-message bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-8">
                                        <div className="flex items-center gap-3">
                                            <FaCheckCircle className="text-green-500 text-3xl flex-shrink-0" />
                                            <div>
                                                <h3 className="text-xl font-bold text-green-800 mb-1">
                                                    Mensaje Enviado
                                                </h3>
                                                <p className="text-green-700">
                                                    Gracias por contactarnos. Te responderemos pronto.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 mb-8">
                                        <div className="flex items-center gap-3">
                                            <span className="text-red-500 text-3xl flex-shrink-0">⚠</span>
                                            <div>
                                                <h3 className="text-xl font-bold text-red-800 mb-1">
                                                    Error al Enviar
                                                </h3>
                                                <p className="text-red-700">
                                                    Intenta de nuevo o contáctanos directamente.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
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
                                            className={`form-input w-full px-5 py-4 rounded-xl text-lg ${errors.name ? 'error' : ''}`}
                                            placeholder="Juan Pérez"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                                        )}
                                    </div>

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
                                                className={`form-input w-full px-5 py-4 rounded-xl text-lg ${errors.email ? 'error' : ''}`}
                                                placeholder="tu@email.com"
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                                            )}
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
                                                className={`form-input w-full px-5 py-4 rounded-xl text-lg ${errors.phone ? 'error' : ''}`}
                                                placeholder="+52 55 1234 5678"
                                            />
                                            {errors.phone && (
                                                <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                                            )}
                                        </div>
                                    </div>

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

                                    <div>
                                        <label htmlFor="service" className="block text-lg font-semibold text-primaryBlue mb-2">
                                            Servicio de Interés *
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className={`form-input w-full px-5 py-4 rounded-xl text-lg bg-white ${errors.service ? 'error' : ''}`}
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
                                        {errors.service && (
                                            <p className="text-red-500 text-sm mt-2">{errors.service}</p>
                                        )}
                                    </div>

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
                                            className={`form-input w-full px-5 py-4 rounded-xl text-lg resize-none ${errors.message ? 'error' : ''}`}
                                            placeholder="Cuéntanos sobre tu proyecto, necesidades, presupuesto estimado, timeline..."
                                        />
                                        {errors.message && (
                                            <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="submit-button w-full bg-primaryBlue text-white py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 shadow-xl relative z-10"
                                    >
                                        <span className="relative z-10">
                                            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                                        </span>
                                        <FaPaperPlane className="text-2xl relative z-10" />
                                    </button>
                                </form>
                            </div>

                            {/* Right: Why Choose Us */}
                            <div className="form-section space-y-8">
                                <div>
                                    <h3 className="text-h3 text-primaryBlue mb-6">
                                        ¿Por qué trabajar con nosotros?
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                        Con más de 40 años de experiencia en infraestructura y energía,
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