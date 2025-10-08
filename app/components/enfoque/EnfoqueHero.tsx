export default function EnfoqueHero() {
    return (
        <div className="relative min-h-[75vh] flex items-center justify-center bg-no-repeat bg-cover"
             style={{backgroundImage: "url(/fondopaneles1.jpg)"}}>
            <div className="absolute inset-0 bg-gradient-to-r from-primaryBlue/90 via-primaryBlue/70 to-transparent z-0"></div>
            <div className="relative z-20 text-left px-6 max-w-7xl mx-auto w-full">
                <div className="max-w-3xl">
                    <div className="inline-block px-4 py-2 bg-secundaryYellow/90 backdrop-blur-sm rounded-full mb-6">
                        <span className="text-primaryBlue font-bold text-sm uppercase tracking-wider">
                            Nuestro Enfoque
                        </span>
                    </div>
                    <h1 className="text-h1 md:text-[4.5rem] lg:text-[5.5rem] text-white font-bold mb-6 leading-tight">
                        Construyendo<br />
                        con Propósito
                    </h1>
                    <p className="text-h3 md:text-[1.75rem] text-white/95 leading-relaxed mb-8">
                        Más de 20 años guiando la transformación de infraestructura
                        con innovación, calidad y compromiso inquebrantable
                    </p>
                    <div className="flex items-center gap-8 text-white">
                        <div className="border-l-4 border-secundaryYellow pl-6">
                            <div className="text-3xl font-bold mb-1">20+</div>
                            <div className="text-sm opacity-90">Años de Experiencia</div>
                        </div>
                        <div className="border-l-4 border-secundaryYellow pl-6">
                            <div className="text-3xl font-bold mb-1">3</div>
                            <div className="text-sm opacity-90">Países</div>
                        </div>
                        <div className="border-l-4 border-secundaryYellow pl-6">
                            <div className="text-3xl font-bold mb-1">100%</div>
                            <div className="text-sm opacity-90">Compromiso</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}