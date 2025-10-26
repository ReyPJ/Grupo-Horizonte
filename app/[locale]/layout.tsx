import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';

export const metadata: Metadata = {
    metadataBase: new URL('https://ghenergy.com.mx'),

    title: {
        default: "Grupo Horizonte | Infraestructura y Energía Renovable en México",
        template: "%s | Grupo Horizonte"
    },

    description: "Grupo Horizonte: Líderes en construcción de infraestructura, obras civiles, eléctricas y energías renovables con más de 40 años de experiencia en México y Latinoamérica.",

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

    manifest: "/site.webmanifest",

    alternates: {
        canonical: "https://grupohorizonte.mx",
        languages: {
            "es-MX": "https://grupohorizonte.mx",
            "en-US": "https://grupohorizonte.mx/en",
        },
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

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{locale: string}>;
}>) {
    const {locale} = await params;

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body>
            <NextIntlClientProvider messages={messages}>
                {children}
            </NextIntlClientProvider>
        </body>
        </html>
    );
}