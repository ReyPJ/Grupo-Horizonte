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
                                                  title = "Nuestros Clientes"
                                              }: CompanyClientsSectionProps) {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-4"
                            style={{color: primaryColor}}
                        >
                            {title}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            La confianza de grandes empresas respalda nuestra trayectoria
                        </p>
                    </div>

                    {/* Clients Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 overflow-hidden"
                            >
                                {/* Decorative background */}
                                <div
                                    className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                                    style={{
                                        background: `radial-gradient(circle, ${primaryColor}, transparent 70%)`
                                    }}
                                />

                                {/* Content */}
                                <div className="relative">
                                    {/* Client Name */}
                                    <h3
                                        className="text-lg font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300"
                                        style={{color: primaryColor}}
                                    >
                                        {client.name}
                                    </h3>

                                    {/* Location */}
                                    {client.location && (
                                        <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>{client.location}</span>
                                        </div>
                                    )}

                                    {/* Period */}
                                    {client.period && (
                                        <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span>{client.period}</span>
                                        </div>
                                    )}

                                    {/* Description */}
                                    {client.description && (
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {client.description}
                                        </p>
                                    )}
                                </div>

                                {/* Bottom accent line */}
                                <div
                                    className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-br-xl"
                                    style={{backgroundColor: primaryColor}}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Stats Banner (opcional) */}
                    <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
                        <div className="grid sm:grid-cols-3 gap-8 text-center">
                            <div className="group">
                                <div
                                    className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform"
                                    style={{color: primaryColor}}
                                >
                                    {clients.length}+
                                </div>
                                <div className="text-gray-600 font-semibold">
                                    Clientes Satisfechos
                                </div>
                            </div>
                            <div className="group">
                                <div
                                    className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform"
                                    style={{color: primaryColor}}
                                >
                                    20+
                                </div>
                                <div className="text-gray-600 font-semibold">
                                    Años de Experiencia
                                </div>
                            </div>
                            <div className="group">
                                <div
                                    className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform"
                                    style={{color: primaryColor}}
                                >
                                    100%
                                </div>
                                <div className="text-gray-600 font-semibold">
                                    Compromiso con Calidad
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}