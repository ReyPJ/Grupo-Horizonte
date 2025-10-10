interface MVVData {
    mision: string;
    vision: string;
    valores: string[];
}

interface CompanyMVVSectionProps {
    mvv: MVVData;
    primaryColor?: string;
    secondaryColor?: string;
}

export default function CompanyMVVSection({
                                              mvv,
                                              primaryColor = "#000C47",
                                              secondaryColor = "#FFC107"
                                          }: CompanyMVVSectionProps) {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-4"
                            style={{ color: primaryColor }}
                        >
                            Nuestra Esencia
                        </h2>
                        <div
                            className="h-1 w-24 mx-auto rounded-full"
                            style={{ backgroundColor: secondaryColor }}
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Misión */}
                        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4"
                             style={{ borderColor: primaryColor }}>
                            <div className="absolute top-0 right-0 w-20 h-20 opacity-5"
                                 style={{
                                     background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`
                                 }}
                            />
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: `${primaryColor}15` }}
                                    >
                                        <svg className="w-6 h-6" style={{ color: primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Misión</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {mvv.mision}
                                </p>
                            </div>
                        </div>

                        {/* Visión */}
                        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4"
                             style={{ borderColor: secondaryColor }}>
                            <div className="absolute top-0 right-0 w-20 h-20 opacity-5"
                                 style={{
                                     background: `radial-gradient(circle, ${secondaryColor} 0%, transparent 70%)`
                                 }}
                            />
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: `${secondaryColor}20` }}
                                    >
                                        <svg className="w-6 h-6" style={{ color: secondaryColor }} fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Visión</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {mvv.vision}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Valores */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: `${primaryColor}15` }}
                            >
                                <svg className="w-6 h-6" style={{ color: primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">Nuestros Valores</h3>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {mvv.valores.map((valor, index) => (
                                <div
                                    key={index}
                                    className="group relative px-6 py-4 rounded-xl text-center transition-all duration-300 hover:scale-105"
                                    style={{
                                        background: `linear-gradient(135deg, ${primaryColor}10, ${secondaryColor}10)`
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{
                                            background: `linear-gradient(135deg, ${primaryColor}20, ${secondaryColor}20)`
                                        }}
                                    />
                                    <p className="relative text-gray-800 font-semibold">
                                        {valor}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}