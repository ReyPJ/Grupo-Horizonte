import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

interface Empresa {
    key: string;
    name: string;
    logo: string;
    description: string;
    tagline: string;
    href: string;
    color: string;
    highlights: string[];
}

export default function EmpresasMegaMenu() {
    const t = useTranslations('EmpresasMegaMenu');
    const empresas = t.raw('empresas') as Empresa[];

    return (
        <div className="w-full bg-white py-12">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primaryBlue mb-3">
                            {t('title')}
                        </h2>
                        <p className="text-gray-600 text-lg font-light">
                            {t('subtitle')}
                        </p>
                        <div className="h-1 w-20 bg-secundaryYellow rounded-full mx-auto mt-4" />
                    </div>

                    {/* Grid de empresas */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {empresas.map((empresa) => (
                            <Link
                                key={empresa.key}
                                href={empresa.href}
                                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Borde superior con color de empresa */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                                    style={{ backgroundColor: empresa.color }}
                                />

                                {/* Logo */}
                                <div className="relative h-20 mb-4 flex items-center justify-center">
                                    <Image
                                        src={empresa.logo}
                                        alt={empresa.name}
                                        width={200}
                                        height={80}
                                        className="object-contain max-h-16 w-auto"
                                    />
                                </div>

                                {/* Tagline */}
                                <div
                                    className="text-xs font-semibold mb-3 text-center px-3 py-1 rounded-full inline-block w-full"
                                    style={{
                                        backgroundColor: `${empresa.color}15`,
                                        color: empresa.color
                                    }}
                                >
                                    {empresa.tagline}
                                </div>

                                {/* Description */}
                                <p className="text-sm text-gray-600 text-center mb-4 font-light min-h-[2.5rem]">
                                    {empresa.description}
                                </p>

                                {/* Separador */}
                                <div
                                    className="h-px w-full mb-4"
                                    style={{ backgroundColor: `${empresa.color}20` }}
                                />

                                {/* Highlights */}
                                <div className="space-y-2 mb-4">
                                    {empresa.highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                                            <div
                                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                style={{ backgroundColor: empresa.color }}
                                            />
                                            <span className="font-light">{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="flex items-center justify-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                                    <span style={{ color: empresa.color }}>
                                        {t('ctaText')}
                                    </span>
                                    <svg
                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                        style={{ color: empresa.color }}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>

                                {/* Decorative corner */}
                                <div
                                    className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at bottom right, ${empresa.color}, transparent 70%)`
                                    }}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Footer info */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-500 text-sm font-light">
                            {t('footerText')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}