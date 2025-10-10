"use client";
import Image from "next/image";

interface CompanyHeroProps {
    company: string;
    logoUrl: string;
    tagline: string;
    description: string;
    backgroundImage: string;
    primaryColor?: string;
}

export default function CompanyHeroSection({
                                               company,
                                               logoUrl,
                                               tagline,
                                               description,
                                               backgroundImage,
                                               primaryColor = "#000C47"
                                           }: CompanyHeroProps) {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background con overlay profesional */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt={`${company} background`}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay con gradiente más sofisticado */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(135deg, 
                            rgba(0, 12, 71, 0.92) 0%, 
                            rgba(0, 12, 71, 0.75) 40%, 
                            rgba(0, 0, 0, 0.6) 100%)`
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 py-24">
                <div className="max-w-6xl mx-auto">
                    {/* Logo con animación sutil */}
                    <div className="mb-12 flex justify-center">
                        <div className="relative w-72 h-36 md:w-96 md:h-44 animate-fade-in">
                            <Image
                                src={logoUrl}
                                alt={`${company} logo`}
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>

                    {/* Línea decorativa superior */}
                    <div className="flex justify-center mb-8">
                        <div
                            className="h-0.5 w-24 rounded-full"
                            style={{ backgroundColor: primaryColor }}
                        />
                    </div>

                    {/* Tagline principal */}
                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight text-center"
                        style={{
                            textShadow: '0 2px 30px rgba(0,0,0,0.7)',
                            letterSpacing: '-0.02em'
                        }}
                    >
                        {tagline}
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-12 text-center font-light">
                        {description}
                    </p>

                    {/* Línea decorativa inferior con acento */}
                    <div className="flex justify-center items-center gap-3">
                        <div className="h-px w-16 bg-white/30" />
                        <div
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: primaryColor }}
                        />
                        <div className="h-px w-16 bg-white/30" />
                    </div>
                </div>
            </div>

            {/* Scroll indicator minimalista */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
                <div className="animate-bounce">
                    <svg
                        className="w-6 h-6 text-white/70"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }
            `}</style>
        </section>
    );
}