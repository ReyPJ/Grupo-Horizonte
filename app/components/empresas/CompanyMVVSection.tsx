"use client";
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
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header minimalista */}
                    <div className="text-center mb-20">
                        <div
                            className="inline-block h-0.5 w-16 rounded-full mb-6"
                            style={{backgroundColor: secondaryColor}}
                        />
                        <h2
                            className="text-5xl md:text-6xl font-bold mb-3"
                            style={{
                                color: primaryColor,
                                letterSpacing: '-0.02em'
                            }}
                        >
                            Nuestra Esencia
                        </h2>
                        <p className="text-gray-500 text-lg mt-4 font-light">
                            Los pilares que definen nuestra forma de trabajar
                        </p>
                    </div>

                    {/* Grid de Misión y Visión */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {/* Misión */}
                        <div className="group relative">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
                            <div
                                className="relative bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 h-full">
                                {/* Borde superior con color primario */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                                    style={{backgroundColor: primaryColor}}
                                />

                                <div className="flex items-start gap-4 mb-6">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                                        style={{backgroundColor: `${primaryColor}15`}}
                                    >
                                        <svg
                                            className="w-7 h-7"
                                            style={{color: primaryColor}}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3
                                            className="text-3xl font-bold mb-2"
                                            style={{color: primaryColor}}
                                        >
                                            Misión
                                        </h3>
                                        <div
                                            className="h-0.5 w-12 rounded-full"
                                            style={{backgroundColor: secondaryColor}}
                                        />
                                    </div>
                                </div>

                                <p className="text-gray-700 leading-relaxed text-base font-light">
                                    {mvv.mision}
                                </p>
                            </div>
                        </div>

                        {/* Visión */}
                        <div className="group relative">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
                            <div
                                className="relative bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 h-full">
                                {/* Borde superior con color primario */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                                    style={{backgroundColor: primaryColor}}
                                />

                                <div className="flex items-start gap-4 mb-6">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                                        style={{backgroundColor: `${primaryColor}15`}}
                                    >
                                        <svg
                                            className="w-7 h-7"
                                            style={{color: primaryColor}}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3
                                            className="text-3xl font-bold mb-2"
                                            style={{color: primaryColor}}
                                        >
                                            Visión
                                        </h3>
                                        <div
                                            className="h-0.5 w-12 rounded-full"
                                            style={{backgroundColor: secondaryColor}}
                                        />
                                    </div>
                                </div>

                                <p className="text-gray-700 leading-relaxed text-base font-light">
                                    {mvv.vision}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Valores */}
                    <div className="relative">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent rounded-3xl" />
                        <div className="relative bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
                            <div className="text-center mb-8">
                                <h3
                                    className="text-3xl font-bold mb-3"
                                    style={{color: primaryColor}}
                                >
                                    Valores Fundamentales
                                </h3>
                                <div
                                    className="h-0.5 w-16 mx-auto rounded-full"
                                    style={{backgroundColor: secondaryColor}}
                                />
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                                {mvv.valores.map((valor, index) => (
                                    <div
                                        key={index}
                                        className="group relative text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300"
                                    >
                                        <div
                                            className="absolute inset-x-0 top-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                                            style={{backgroundColor: secondaryColor}}
                                        />
                                        <div
                                            className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center"
                                            style={{backgroundColor: `${primaryColor}10`}}
                                        >
                                            <div
                                                className="w-2 h-2 rounded-full"
                                                style={{backgroundColor: primaryColor}}
                                            />
                                        </div>
                                        <p
                                            className="font-semibold text-base"
                                            style={{color: primaryColor}}
                                        >
                                            {valor}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}