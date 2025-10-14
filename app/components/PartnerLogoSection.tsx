import Image from "next/image";

export default function PartnerLogosSection() {
    const empresas = [
        {
            name: "Constructora 4C",
            logo: "/4cSInfondoLogo.png",
            href: "/empresas/4C"
        },
        {
            name: "IMBAR",
            logo: "/imbarlogo.jpeg",
            href: "/empresas/imbar"
        },
        {
            name: "Núcleo Energy",
            logo: "/LogoHorizontal@4x.png",
            href: "/empresas/nucleo-energy"
        },
        {
            name: "RECCMAQ2",
            logo: "/reccmalogoxD.png",
            href: "/empresas/reccmaq2"
        }
    ];

    return (
        <>
            <style jsx>{`
                /* Desktop: grayscale con hover a color */
                @media (min-width: 1024px) {
                    .logo-wrapper {
                        filter: grayscale(100%);
                        opacity: 0.7;
                        transition: all 0.3s ease;
                    }
                    
                    .logo-link:hover .logo-wrapper {
                        filter: grayscale(0%);
                        opacity: 1;
                        transform: scale(1.05);
                    }
                }
                
                /* Mobile: siempre a color, efecto tap */
                @media (max-width: 1023px) {
                    .logo-wrapper {
                        filter: grayscale(0%);
                        opacity: 1;
                        transition: all 0.2s ease;
                    }
                    
                    .logo-link:active .logo-wrapper {
                        transform: scale(0.95);
                        opacity: 0.8;
                    }
                }
            `}</style>

            <section className="bg-white py-8 sm:py-12 lg:py-16 border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
                    {/* Título */}
                    <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                        <p className="text-xs sm:text-sm lg:text-base font-medium text-gray-500 uppercase tracking-wider mb-2">
                            Nuestras empresas
                        </p>
                        <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-primaryBlue to-thirdGreen mx-auto rounded-full"></div>
                    </div>

                    {/* Grid de logos */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-12 items-center max-w-6xl mx-auto">
                        {empresas.map((empresa) => (
                            <a
                                key={empresa.name}
                                href={empresa.href}
                                className="logo-link flex items-center justify-center p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-none bg-gray-50 lg:bg-transparent transition-all duration-300"
                                aria-label={`Ir a ${empresa.name}`}
                            >
                                <div className="logo-wrapper relative w-full h-16 sm:h-20 lg:h-24">
                                    <Image
                                        src={empresa.logo}
                                        alt={`Logo ${empresa.name}`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}