import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    metadataBase: new URL('https://grupohorizonte.mx'),

    title: {
        default: "Grupo Horizonte | Infraestructura y Energía Renovable en México",
        template: "%s | Grupo Horizonte"
    },

    description: "Grupo Horizonte: Líderes en construcción de infraestructura, obras civiles, eléctricas y energías renovables con más de 20 años de experiencia en México y Latinoamérica.",

    keywords: [
        "construcción México",
        "infraestructura",
        "obras civiles",
        "obras eléctricas",
        "energía renovable",
        "paneles solares",
        "energía eólica",
        "construcción CDMX",
        "4C Constructora",
        "Núcleo Energy",
        "proyectos fotovoltaicos",
        "líneas de transmisión",
        "subestaciones eléctricas",
        "construcción industrial",
        "ingeniería civil",
        "energía limpia México"
    ],

    authors: [{ name: "Grupo Horizonte Energy" }],

    creator: "Grupo Horizonte Energy",
    publisher: "Grupo Horizonte Energy",

    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    openGraph: {
        type: "website",
        locale: "es_MX",
        url: "https://grupohorizonte.mx",
        siteName: "Grupo Horizonte",
        title: "Grupo Horizonte | Infraestructura y Energía Renovable",
        description: "Líderes en construcción de infraestructura, obras civiles, eléctricas y energías renovables con más de 20 años de experiencia en México.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Grupo Horizonte - Infraestructura y Energía",
            }
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Grupo Horizonte | Infraestructura y Energía Renovable",
        description: "Líderes en construcción de infraestructura y energías renovables con más de 20 años de experiencia.",
        images: ["/twitter-image.jpg"],
        creator: "@GrupoHorizonte",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [
            { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
        ],
    },

    manifest: "/site.webmanifest",

    alternates: {
        canonical: "https://grupohorizonte.mx",
        languages: {
            "es-MX": "https://grupohorizonte.mx",
            "en-US": "https://grupohorizonte.mx/en",
        },
    },

    verification: {
        google: "tu-codigo-de-verificacion-google",
        // yandex: "tu-codigo-yandex",
        // bing: "tu-codigo-bing",
    },

    category: "Construcción e Ingeniería",

    other: {
        "contact:phone_number": "+52-55-1557-2791",
        "contact:email": "ghorizonte@hh.com",
        "geo.region": "MX-CMX",
        "geo.placename": "Ciudad de México",
        "geo.position": "19.432671;-99.112342",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es-MX">
        <head>
            {/* Google Analytics */}
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
                }}
            />

            {/* Schema.org structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Grupo Horizonte",
                        "alternateName": ["4C Constructora", "Núcleo Energy"],
                        "url": "https://grupohorizonte.mx",
                        "logo": "https://grupohorizonte.mx/logo.png",
                        "description": "Grupo empresarial mexicano especializado en infraestructura, construcción y energías renovables con más de 20 años de experiencia.",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "RET 1 Cecilio Robelo No. 66",
                            "addressLocality": "Jardín Balbuena, Venustiano Carranza",
                            "addressRegion": "CDMX",
                            "postalCode": "15900",
                            "addressCountry": "MX"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+52-55-1557-2791",
                            "contactType": "customer service",
                            "areaServed": "MX",
                            "availableLanguage": ["Spanish", "English"]
                        },
                        "sameAs": [
                            "https://www.facebook.com/grupohorizonte",
                            "https://www.linkedin.com/company/grupohorizonte",
                            "https://www.instagram.com/grupohorizonte"
                        ],
                        "founder": {
                            "@type": "Person",
                            "name": "Grupo Horizonte Founders"
                        },
                        "foundingDate": "2004",
                        "numberOfEmployees": {
                            "@type": "QuantitativeValue",
                            "value": "200+"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "México"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Servicios de Construcción e Infraestructura",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Obras Civiles",
                                        "description": "Construcción de infraestructura civil, edificaciones, hospitales y proyectos residenciales e industriales."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Obras Eléctricas",
                                        "description": "Instalación de redes eléctricas, líneas de transmisión, subestaciones y sistemas de distribución."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Proyectos Fotovoltaicos",
                                        "description": "Instalación de paneles solares, seguidores y sistemas de energía renovable."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Energía Eólica",
                                        "description": "Desarrollo e instalación de parques eólicos y sistemas de energía limpia."
                                    }
                                }
                            ]
                        }
                    })
                }}
            />
            <title></title>
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}