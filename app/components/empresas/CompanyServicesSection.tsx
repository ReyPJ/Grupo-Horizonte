import Image from "next/image";

interface Service {
    title: string;
    description: string;
    icon?: string;
    image?: string;
}

interface CompanyServicesSectionProps {
    services: Service[];
    primaryColor?: string;
    title?: string;
}

export default function CompanyServicesSection({
                                                   services,
                                                   primaryColor = "#000C47",
                                                   title = "Nuestros Servicios"
                                               }: CompanyServicesSectionProps) {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-4"
                            style={{ color: primaryColor }}
                        >
                            {title}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Soluciones integrales con los más altos estándares de calidad
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                            >
                                {/* Image or Color Header */}
                                {service.image ? (
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    </div>
                                ) : (
                                    <div
                                        className="h-2 group-hover:h-3 transition-all duration-300"
                                        style={{ backgroundColor: primaryColor }}
                                    />
                                )}

                                {/* Content */}
                                <div className="p-6">
                                    {/* Icon if provided */}
                                    {service.icon && (
                                        <div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                                            style={{
                                                background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}dd)`
                                            }}
                                        >
                                            <span className="text-2xl">{service.icon}</span>
                                        </div>
                                    )}

                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-opacity-80 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Decorative corner */}
                                    <div
                                        className="absolute bottom-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity"
                                        style={{
                                            background: `radial-gradient(circle at bottom right, ${primaryColor}, transparent 70%)`
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}