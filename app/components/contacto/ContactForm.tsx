"use client";

import { useState } from "react";
import { useTranslations } from 'next-intl';
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
    const t = useTranslations('Contact');
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
            newErrors.name = t('validationNameRequired');
        }

        if (!formData.email.trim()) {
            newErrors.email = t('validationEmailRequired');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t('validationEmailInvalid');
        }

        if (!formData.phone.trim()) {
            newErrors.phone = t('validationPhoneRequired');
        }

        if (!formData.service) {
            newErrors.service = t('validationServiceRequired');
        }

        if (!formData.message.trim()) {
            newErrors.message = t('validationMessageRequired');
        } else if (formData.message.trim().length < 20) {
            newErrors.message = t('validationMessageMinLength');
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
                                        {t('formTitle')}
                                    </h2>
                                    <p className="text-xl text-gray-600">
                                        {t('formSubtitle')}
                                    </p>
                                </div>

                                {submitStatus === 'success' && (
                                    <div className="success-message bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-8">
                                        <div className="flex items-center gap-3">
                                            <FaCheckCircle className="text-green-500 text-3xl flex-shrink-0" />
                                            <div>
                                                <h3 className="text-xl font-bold text-green-800 mb-1">
                                                    {t('successTitle')}
                                                </h3>
                                                <p className="text-green-700">
                                                    {t('successMessage')}
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
                                                    {t('errorTitle')}
                                                </h3>
                                                <p className="text-red-700">
                                                    {t('errorMessage')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-lg font-semibold text-primaryBlue mb-2">
                                            {t('nameLabel')}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`form-input w-full px-5 py-4 rounded-xl text-lg ${errors.name ? 'error' : ''}`}
                                            placeholder={t('namePlaceholder')}
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                                        )}
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-lg font-semibold text-primaryBlue mb-2">
                                                {t('emailLabel')}
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`form-input w-full px-5 py-4 rounded-xl text-lg ${errors.email ? 'error' : ''}`}
                                                placeholder={t('emailPlaceholder')}
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-lg font-semibold text-primaryBlue mb-2">
                                                {t('phoneLabel')}
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={`form-input w-full px-5 py-4 rounded-xl text-lg ${errors.phone ? 'error' : ''}`}
                                                placeholder={t('phonePlaceholder')}
                                            />
                                            {errors.phone && (
                                                <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-lg font-semibold text-primaryBlue mb-2">
                                            {t('companyLabel')}
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="form-input w-full px-5 py-4 rounded-xl text-lg"
                                            placeholder={t('companyPlaceholder')}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-lg font-semibold text-primaryBlue mb-2">
                                            {t('serviceLabel')}
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className={`form-input w-full px-5 py-4 rounded-xl text-lg bg-white ${errors.service ? 'error' : ''}`}
                                        >
                                            <option value="">{t('serviceDefaultOption')}</option>
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
                                            {t('messageLabelFormField')}
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`form-input w-full px-5 py-4 rounded-xl text-lg resize-none ${errors.message ? 'error' : ''}`}
                                            placeholder={t('messagePlaceholder')}
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
                                            {isSubmitting ? t('sendingButton') : t('sendButton')}
                                        </span>
                                        <FaPaperPlane className="text-2xl relative z-10" />
                                    </button>
                                </form>
                            </div>

                            {/* Right: Why Choose Us */}
                            <div className="form-section space-y-8">
                                <div>
                                    <h3 className="text-h3 text-primaryBlue mb-6">
                                        {t('whyChooseUs')}
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                        {t('whyChooseDescription')}
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="feature-badge bg-gradient-to-r from-secundaryYellow/10 to-thirdGreen/10 rounded-2xl p-6 flex items-start gap-4">
                                        <div className="bg-secundaryYellow rounded-full p-3 flex-shrink-0">
                                            <FaCheckCircle className="text-primaryBlue text-2xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-primaryBlue mb-2">
                                                {t('provenExperienceTitle')}
                                            </h4>
                                            <p className="text-gray-600">
                                                {t('provenExperienceDesc')}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="feature-badge bg-gradient-to-r from-secundaryYellow/10 to-thirdGreen/10 rounded-2xl p-6 flex items-start gap-4">
                                        <div className="bg-secundaryYellow rounded-full p-3 flex-shrink-0">
                                            <FaClock className="text-primaryBlue text-2xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-primaryBlue mb-2">
                                                {t('fastResponseTitle')}
                                            </h4>
                                            <p className="text-gray-600">
                                                {t('fastResponseDesc')}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="feature-badge bg-gradient-to-r from-secundaryYellow/10 to-thirdGreen/10 rounded-2xl p-6 flex items-start gap-4">
                                        <div className="bg-secundaryYellow rounded-full p-3 flex-shrink-0">
                                            <FaShieldAlt className="text-primaryBlue text-2xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-primaryBlue mb-2">
                                                {t('totalCommitmentTitle')}
                                            </h4>
                                            <p className="text-gray-600">
                                                {t('totalCommitmentDesc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-primaryBlue rounded-3xl p-8 text-white mt-8">
                                    <p className="text-2xl italic mb-4">
                                        "{t('quote')}"
                                    </p>
                                    <p className="text-secundaryYellow font-bold text-lg">
                                        {t('quoteAuthor')}
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