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
        <section className="bg-white py-12 sm:py-16 border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">
                {/* Título */}
                <div className="text-center mb-8 sm:mb-12">
                    <p className="text-sm sm:text-base font-medium text-gray-500 uppercase tracking-wider mb-2">
                        Nuestras empresas
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-primaryBlue to-thirdGreen mx-auto rounded-full"></div>
                </div>

                {/* Grid de logos */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
                    {empresas.map((empresa) => (
                        <a
                            key={empresa.name}
                            href={empresa.href}
                            className="group flex items-center justify-center p-4 sm:p-6 transition-all duration-300 hover:scale-105"
                        >
                            <div className="relative w-full h-20 sm:h-24 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
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

            <style jsx>{`
                @media (max-width: 640px) {
                    .container {
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }
                }
            `}</style>
        </section>
    );
}