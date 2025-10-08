"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { LiaShareSquareSolid } from "react-icons/lia";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import HeaderNav from "@/app/components/HeaderNav";
import Footer from "@/app/components/footer";

type BlogArticle = {
    id: string;
    date: string;
    title: string;
    author: {
        name: string;
        title: string;
        image: string;
    };
    uploaded_at: string;
    tags: string[];
    heroImage: string;
    content: string; // En el futuro será HTML o Markdown
}

// Mock data - En producción vendrá de un CMS o API
const mockData: BlogArticle = {
    id: "1",
    date: "AGO 10, 2025",
    title: "Enfocado a la suma de esfuerzos conjuntos lealtad y fuerza entre empresas hermanas",
    author: {
        name: "Didier",
        title: "Chairman and Chief Executive Officer",
        image: "/personasonriendo.jpg"
    },
    uploaded_at: "Hace 1 día",
    tags: ["Energía Limpia", "Infraestructura", "Parque Fotovoltaico"],
    heroImage: "/panelesfondo2.jpg",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor sit amet leo vel posuere. Sed lobortis ligula quis urna lacinia aliquet. Sed viverra lacus ut arcu egestas imperdiet. Donec auctor massa ligula, non sodales risus posuere at. Nunc ac magna sollicitudin orci accumsan volutpat a sit amet tortor. Nunc scelerisque mollis rhoncus.

Nunc auctor semper ornare. Vestibulum et massa non dui tempor pretium. Ut lorem lorem, convallis at mollis in, commodo sed sapien. Proin elit lacus, vulputate eget enim ut, tempor suscipit augue. In pulvinar enim massa, et lacinia arcu cursus sed. Nam in ultricies ligula. Vivamus eu posuere nibh, ut sollicitudin enim.

Vestibulum dapibus odio turpis, ac porttitor felis vestibulum quis. Integer ullamcorper varius ligula, sit amet mollis lectus feugiat bibendum. Nullam tristique dui vitae nisi interdum euismod. Duis hendrerit, nisi id ultrices commodo, libero ante euismod quam, id blandit nulla sem at ligula.

Integer est nisl, elementum sed sem vel, facilisis mattis nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus luctus nisl at lobortis sollicitudin. Nam metus massa, aliquam eu finibus non, elementum vel leo.

Morbi vulputate semper urna id gravida. Nam semper interdum est nec facilisis. Nullam tristique dolor lectus, vitae faucibus mauris vulputate a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
}

export default function BlogPage({ params }: { params: { id: string } }) {
    const [article] = React.useState<BlogArticle>(mockData);

    // Función para compartir en redes sociales
    const shareOnSocial = (platform: string) => {
        const url = typeof window !== 'undefined' ? window.location.href : '';
        const text = article.title;

        const shareUrls: { [key: string]: string } = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
        };

        if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
        }
    };

    return (
        <div className="w-full min-h-dvh bg-white">
            <HeaderNav />

            {/* Hero Section */}
            <div className="relative bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${article.heroImage})` }}>
                {/* Overlay para mejor legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

                <div className="relative z-10 flex items-center justify-center min-h-[60vh] lg:min-h-[70vh] px-4 sm:px-6 lg:px-12">
                    <div className="max-w-4xl w-full text-center space-y-6 py-16">
                        <p className="text-secundaryYellow text-sm sm:text-base uppercase tracking-widest font-semibold">
                            {article.date}
                        </p>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-4">
                            {article.title}
                        </h1>

                        {/* Tags */}
                        <div className="flex flex-wrap justify-center gap-2 pt-4">
                            {article.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm hover:bg-white/20 transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 overflow-x-auto">
                        <Link href="/" className="hover:text-primaryBlue transition-colors whitespace-nowrap">
                            Inicio
                        </Link>
                        <MdArrowForwardIos className="h-3 w-3 flex-shrink-0 text-gray-400" />
                        <Link href="/blog" className="hover:text-primaryBlue transition-colors whitespace-nowrap">
                            Blog
                        </Link>
                        <MdArrowForwardIos className="h-3 w-3 flex-shrink-0 text-gray-400" />
                        <span className="text-gray-900 truncate max-w-xs sm:max-w-md">
                            {article.title}
                        </span>
                    </nav>
                </div>
            </div>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">

                {/* Author Info */}
                <div className="flex items-center gap-4 sm:gap-6 mb-12 pb-8 border-b border-gray-200">
                    <Image
                        src={article.author.image}
                        alt={article.author.name}
                        width={800}
                        height={800}
                        className="object-cover object-center w-20 h-20 sm:w-28 sm:h-28 rounded-full ring-4 ring-secundaryYellow/20"
                    />
                    <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primaryBlue">
                            {article.author.name}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mt-1 leading-snug">
                            {article.author.title}
                        </p>
                    </div>
                </div>

                {/* Meta Info & Share */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 py-6 border-y border-gray-200 mb-12">
                    <div className="flex items-center gap-3">
                        <GoClock className="w-5 h-5 text-gray-400" />
                        <p className="text-sm sm:text-base text-gray-600">
                            {article.uploaded_at}
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <LiaShareSquareSolid className="w-5 h-5 text-gray-500" />
                            <span className="text-xs sm:text-sm uppercase text-gray-600 font-semibold tracking-wide">
                                Compartir
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => shareOnSocial('facebook')}
                                aria-label="Compartir en Facebook"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primaryBlue hover:text-white transition-all duration-200"
                            >
                                <FaFacebook className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => shareOnSocial('instagram')}
                                aria-label="Compartir en Instagram"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primaryBlue hover:text-white transition-all duration-200"
                            >
                                <FaInstagram className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => shareOnSocial('linkedin')}
                                aria-label="Compartir en LinkedIn"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primaryBlue hover:text-white transition-all duration-200"
                            >
                                <FaLinkedin className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => shareOnSocial('whatsapp')}
                                aria-label="Compartir en WhatsApp"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-thirdGreen hover:text-white transition-all duration-200"
                            >
                                <FaWhatsapp className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                    {article.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Author Card al final */}
                <div className="mt-20 pt-12 border-t-2 border-gray-200">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                            <Image
                                src={article.author.image}
                                alt={article.author.name}
                                width={140}
                                height={140}
                                className="object-cover object-center w-28 h-28 sm:w-32 sm:h-32 rounded-full ring-4 ring-secundaryYellow/30 flex-shrink-0"
                            />
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="text-2xl sm:text-3xl font-bold text-primaryBlue mb-2">
                                    {article.author.name}
                                </h3>
                                <p className="text-base sm:text-lg text-gray-600 mb-4">
                                    {article.author.title}
                                </p>
                                <p className="text-sm sm:text-base text-gray-500">
                                    Líder visionario en el sector de energías renovables e infraestructura,
                                    con más de 20 años de experiencia impulsando proyectos transformadores.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Share Section Final */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <div className="flex items-center gap-3">
                            <LiaShareSquareSolid className="w-6 h-6 text-primaryBlue" />
                            <span className="text-sm uppercase text-gray-700 font-semibold tracking-wide">
                                ¿Te gustó este artículo? Compártelo
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => shareOnSocial('facebook')}
                                aria-label="Compartir en Facebook"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primaryBlue hover:text-white hover:scale-110 transition-all duration-200"
                            >
                                <FaFacebook className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => shareOnSocial('instagram')}
                                aria-label="Compartir en Instagram"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primaryBlue hover:text-white hover:scale-110 transition-all duration-200"
                            >
                                <FaInstagram className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => shareOnSocial('linkedin')}
                                aria-label="Compartir en LinkedIn"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primaryBlue hover:text-white hover:scale-110 transition-all duration-200"
                            >
                                <FaLinkedin className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => shareOnSocial('whatsapp')}
                                aria-label="Compartir en WhatsApp"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-thirdGreen hover:text-white hover:scale-110 transition-all duration-200"
                            >
                                <FaWhatsapp className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

            </article>

            <Footer />
        </div>
    );
}