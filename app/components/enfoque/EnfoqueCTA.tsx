import BigButton from "@/app/components/bigButton";

export default function EnfoqueCTA() {
    return (
        <div className="relative min-h-[70vh] flex items-center justify-center bg-no-repeat bg-cover"
             style={{backgroundImage: "url(/paneles.jpg)"}}>
            <div className="absolute inset-0 bg-gradient-to-r from-primaryBlue/95 via-primaryBlue/85 to-thirdGreen/80 z-0"></div>

            <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
                <div className="inline-block px-4 py-2 bg-secundaryYellow rounded-full mb-8">
                    <span className="text-primaryBlue font-bold text-sm uppercase tracking-wider">
                        Únete a Nosotros
                    </span>
                </div>

                <h2 className="text-h1 md:text-[4rem] text-white font-bold mb-8 leading-tight">
                    Construyamos el Futuro<br className="hidden sm:block" />
                    Que Imaginamos
                </h2>

                <p className="text-h3 md:text-[1.5rem] text-white/95 mb-12 leading-relaxed">
                    Ya sea que busques soluciones de infraestructura, energía renovable<br className="hidden sm:block" />
                    o servicios especializados, estamos listos para convertir tu visión en realidad
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                    <BigButton
                        textBefore="Conoce Nuestros Proyectos"
                        textAfter="Conoce Nuestros Proyectos"
                        textColor="white"
                        minWidth="260px"
                        maxWidth="300px"
                    />
                    <BigButton
                        textBefore="Contacta con Nosotros"
                        textAfter="Contacta con Nosotros"
                        textColor="white"
                        minWidth="260px"
                        maxWidth="300px"
                    />
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {[
                        { number: "20+", label: "Años" },
                        { number: "26+", label: "Proyectos" },
                        { number: "3", label: "Países" },
                        { number: "+900 MW", label: "Instalados" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                        >
                            <div className="text-3xl font-bold text-secundaryYellow mb-1">
                                {stat.number}
                            </div>
                            <div className="text-sm text-white/90 uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}