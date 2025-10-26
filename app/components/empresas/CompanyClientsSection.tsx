"use client";
import { MdLocationOn, MdCalendarToday, MdCheckCircle } from "react-icons/md";
import { useTranslations } from 'next-intl';

interface Client {
    name: string;
    location?: string;
    period?: string;
    description?: string;
}

interface CompanyClientsSectionProps {
    clients: Client[];
    primaryColor?: string;
    title?: string;
}

export default function CompanyClientsSection({
                                                  clients,
                                                  primaryColor = "#000C47",
                                                  title
                                              }: CompanyClientsSectionProps) {
    const t = useTranslations('Components.companyClients');
    const displayTitle = title || t('defaultTitle');

    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto" suppressHydrationWarning={true}>
                    {/* Header */}
                    <div className="text-center mb-20">
                        <div
                            className="inline-block h-0.5 w-16 rounded-full mb-6"
                            style={{ backgroundColor: primaryColor }}
                        />
                        <h2
                            className="text-5xl md:text-6xl font-bold mb-4"
                            style={{
                                color: primaryColor,
                                letterSpacing: '-0.02em'
                            }}
                        >
                            {displayTitle}
                        </h2>
                        <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
                            {t('subtitle')}
                        </p>
                    </div>

                    {/* Clients Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                            >
                                {/* Borde superior decorativo */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-1"
                                    style={{ backgroundColor: primaryColor }}
                                />

                                {/* Background decorativo */}
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at top right, ${primaryColor}, transparent 70%)`
                                    }}
                                />

                                {/* Content */}
                                <div className="relative">
                                    {/* Check icon */}
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                                        style={{ backgroundColor: `${primaryColor}15` }}
                                    >
                                        <MdCheckCircle size={22} style={{ color: primaryColor }} />
                                    </div>

                                    {/* Client name */}
                                    <h3
                                        className="text-lg font-bold mb-3 leading-tight min-h-[3.5rem]"
                                        style={{ color: primaryColor }}
                                    >
                                        {client.name}
                                    </h3>

                                    {/* Location */}
                                    {client.location && (
                                        <div className="flex items-start gap-2 mb-2 text-gray-600">
                                            <MdLocationOn size={16} className="mt-0.5 flex-shrink-0" />
                                            <p className="text-sm font-light">
                                                {client.location}
                                            </p>
                                        </div>
                                    )}

                                    {/* Period */}
                                    {client.period && (
                                        <div className="flex items-start gap-2 mb-3 text-gray-600">
                                            <MdCalendarToday size={16} className="mt-0.5 flex-shrink-0" />
                                            <p className="text-sm font-light">
                                                {client.period}
                                            </p>
                                        </div>
                                    )}

                                    {/* Description */}
                                    {client.description && (
                                        <>
                                            <div
                                                className="h-px w-full my-3 rounded-full"
                                                style={{ backgroundColor: `${primaryColor}20` }}
                                            />
                                            <p className="text-sm text-gray-600 leading-relaxed font-light">
                                                {client.description}
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}