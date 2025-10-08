"use client";
import * as React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

type BlogMockSlide = {
    id: number;
    title: string;
    image: string;
};

const MockSlides: BlogMockSlide[] = [
    {
        id: 1,
        title: "México camina hacia el futuro",
        image: "/paneles.jpg",
    },
    {
        id: 2,
        title: "Nuevo nivel de vida en México",
        image: "/paneles.jpg",
    },
    {
        id: 3,
        title: "Nueva tecnología se apodera de México",
        image: "/paneles.jpg",
    },
];

export default function BlogCarousel() {
    const [current, setCurrent] = React.useState<number>(0);
    const [isTransitioning, setIsTransitioning] = React.useState<boolean>(false);

    const prevSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrent((prev) => (prev === 0 ? MockSlides.length - 1 : prev - 1));
            setIsTransitioning(false);
        }, 300);
    };

    const nextSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrent((prev) => (prev === MockSlides.length - 1 ? 0 : prev + 1));
            setIsTransitioning(false);
        }, 300);
    };

    return (
        <div className="relative w-full max-w-md mx-auto">
            <style jsx>{`
                .carousel-arrow {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .carousel-arrow:hover {
                    transform: scale(1.1);
                    filter: drop-shadow(0 4px 12px rgba(206, 211, 0, 0.4));
                }
                
                .carousel-arrow:active {
                    transform: scale(0.95);
                }
                
                .social-icon {
                    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .social-icon:hover {
                    transform: translateY(-2px) scale(1.1);
                }
                
                .blog-card {
                    backdrop-filter: blur(8px);
                    box-shadow: 
                        0 10px 40px -10px rgba(0, 12, 71, 0.15),
                        0 0 0 1px rgba(0, 12, 71, 0.05);
                }
                
                .image-container {
                    position: relative;
                    overflow: hidden;
                }
                
                .image-container::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to bottom,
                        transparent 0%,
                        transparent 70%,
                        rgba(0, 12, 71, 0.03) 100%
                    );
                    pointer-events: none;
                }
                
                .dot-indicator {
                    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                }
                
                .dot-indicator:hover {
                    transform: scale(1.15);
                    opacity: 0.8;
                }
                
                .read-more-btn {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .read-more-btn:hover {
                    transform: scale(1.05);
                    box-shadow: 0 4px 16px rgba(206, 211, 0, 0.3);
                }
                
                .read-more-btn:active {
                    transform: scale(0.98);
                }
            `}</style>

            <div className="relative flex items-center justify-between gap-2">
                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="carousel-arrow rounded-full p-2.5 bg-white/10 backdrop-blur-md cursor-pointer border border-white/20 hover:bg-white/20 hover:border-secundaryYellow/50"
                    aria-label="Artículo anterior"
                >
                    <ArrowLeft className="w-6 h-6 text-white" strokeWidth={2.5} />
                </button>

                {/* Card Container */}
                <div className="relative w-full max-w-md mx-4">
                    <div className="blog-card bg-white/95 rounded-3xl pt-5 pb-5 px-4">
                        <div className="image-container relative h-64 w-full rounded-2xl overflow-hidden mb-4">
                            <div
                                className={`absolute w-full h-full transition-opacity duration-300 ease-out ${
                                    isTransitioning ? "opacity-0" : "opacity-100"
                                }`}
                            >
                                <Image
                                    src={MockSlides[current].image}
                                    alt={MockSlides[current].title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="px-2">
                            <h3
                                className={`font-bold text-xl sm:text-2xl text-primaryBlue text-center mb-5 min-h-[3.5rem] flex items-center justify-center transition-opacity duration-300 ${
                                    isTransitioning ? "opacity-0" : "opacity-100"
                                }`}
                            >
                                {MockSlides[current].title}
                            </h3>

                            <div className="flex justify-between items-center gap-3">
                                {/* Read More Button */}
                                <button
                                    className="read-more-btn flex-shrink-0"
                                    aria-label="Leer más"
                                >
                                    <BsArrowUpRightCircleFill className="w-11 h-11 text-primaryBlue bg-secundaryYellow rounded-full" />
                                </button>

                                {/* Dot Indicators */}
                                <div className="flex justify-center items-center gap-2">
                                    {MockSlides.map((_, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setCurrent(index)}
                                            className={`dot-indicator ${
                                                index === current
                                                    ? "h-2.5 w-9 rounded-full bg-secundaryYellow"
                                                    : "h-2.5 w-2.5 rounded-full bg-thirdGreen"
                                            }`}
                                            role="button"
                                            aria-label={`Ir al artículo ${index + 1}`}
                                            tabIndex={0}
                                        ></div>
                                    ))}
                                </div>

                                {/* Social Icons */}
                                <div className="flex gap-2.5 items-center flex-shrink-0">
                                    <button className="social-icon" aria-label="Compartir en Facebook">
                                        <FaFacebook className="w-5 h-5 text-thirdGreen hover:text-secundaryYellow" />
                                    </button>
                                    <button className="social-icon" aria-label="Compartir en LinkedIn">
                                        <FaLinkedin className="w-5 h-5 text-thirdGreen hover:text-secundaryYellow" />
                                    </button>
                                    <button className="social-icon" aria-label="Compartir en Instagram">
                                        <FaInstagram className="w-5 h-5 text-thirdGreen hover:text-secundaryYellow" />
                                    </button>
                                    <button className="social-icon" aria-label="Compartir en WhatsApp">
                                        <FaWhatsapp className="w-5 h-5 text-thirdGreen hover:text-secundaryYellow" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="carousel-arrow rounded-full p-2.5 bg-white/10 backdrop-blur-md cursor-pointer border border-white/20 hover:bg-white/20 hover:border-secundaryYellow/50"
                    aria-label="Siguiente artículo"
                >
                    <ArrowRight className="w-6 h-6 text-white" strokeWidth={2.5} />
                </button>
            </div>
        </div>
    );
}