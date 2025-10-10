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
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt={`${company} background`}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 py-20">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Logo */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative w-64 h-32 md:w-80 md:h-40">
                            <Image
                                src={logoUrl}
                                alt={`${company} logo`}
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>

                    {/* Tagline */}
                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                        style={{
                            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                        }}
                    >
                        {tagline}
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
                        {description}
                    </p>

                    {/* Decorative Line */}
                    <div className="flex justify-center">
                        <div
                            className="h-1 w-32 rounded-full"
                            style={{backgroundColor: primaryColor}}
                        />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="animate-bounce">
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
}