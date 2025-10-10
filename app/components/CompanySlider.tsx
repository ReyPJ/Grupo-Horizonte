"use client";
import * as React from "react";
import Image from "next/image";
import BigButton from "@/app/components/bigButton";
import { GoArrowUpRight } from "react-icons/go";

interface Company {
    company: string;
    logoUrl: string;
    smallHistoryText: string;
    smallHistoryText2: string;
    buttonText: string;
    keyServices: string[];
    image: string;
    buttonMinWidth: string;
    buttonMaxWidth: string;
    bigButtonLinkTo: string;
}

export default function CompanySlider({ companies }: { companies: Company[] }) {
    const [current, setCurrent] = React.useState<number>(0);
    const [isTransitioning, setIsTransitioning] = React.useState<boolean>(false);
    const [isFading, setIsFading] = React.useState<boolean>(false);

    const handleDotClick = (index: number) => {
        if (index === current || isTransitioning) return;
        setIsTransitioning(true);
        setIsFading(true);
        setTimeout(() => {
            setCurrent(index);
            setTimeout(() => {
                setIsFading(false);
                setTimeout(() => setIsTransitioning(false), 300);
            }, 50);
        }, 200);
    };

    return (
        <div className="w-full">
            <style jsx>{`
                .service-item {
                    position: relative;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .service-item:hover {
                    transform: translateX(4px);
                }
                
                .service-icon {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .service-item:hover .service-icon {
                    transform: rotate(45deg) scale(1.15);
                    background: linear-gradient(135deg, #0A8700 0%, #CED300 100%);
                }
                
                .company-image {
                    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                }
                
                .company-image::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        135deg,
                        rgba(0, 12, 71, 0) 0%,
                        rgba(0, 12, 71, 0.05) 100%
                    );
                    pointer-events: none;
                }
                
                .company-image:hover {
                    transform: scale(1.02);
                }
                
                .logo-container {
                    filter: drop-shadow(0 4px 12px rgba(0, 12, 71, 0.08));
                    transition: filter 0.3s ease;
                }
                
                .logo-container:hover {
                    filter: drop-shadow(0 6px 20px rgba(0, 12, 71, 0.12));
                }
                
                .divider-line {
                    background: linear-gradient(
                        90deg,
                        transparent 0%,
                        #CED300 20%,
                        #CED300 80%,
                        transparent 100%
                    );
                    box-shadow: 0 2px 8px rgba(206, 211, 0, 0.2);
                }
                
                .dot-indicator {
                    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                }
                
                .dot-indicator:hover {
                    transform: scale(1.2);
                    opacity: 0.8;
                }
                
                .dot-active {
                    box-shadow: 0 2px 8px rgba(206, 211, 0, 0.4);
                }
                
                .dot-inactive {
                    box-shadow: 0 1px 4px rgba(10, 135, 0, 0.2);
                }
            `}</style>

            <div
                className={`flex flex-col lg:flex-row gap-10 lg:gap-28 items-center transition-opacity duration-300 ${
                    isFading ? "opacity-0" : "opacity-100"
                } min-h-[480px] lg:min-h-[640px]`}
            >
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                            {/* Logo */}
                            <div className="logo-container w-full md:w-1/2 max-w-[380px]">
                                <Image
                                    src={companies[current].logoUrl}
                                    alt={companies[current].company}
                                    width={800}
                                    height={800}
                                    className="w-full h-[120px] sm:h-[160px] md:h-[200px] lg:h-[280px] object-contain"
                                />
                            </div>

                            {/* Company Info */}
                            <div className="flex w-full md:w-1/2 flex-col gap-4 min-w-0">
                                <h2 className="text-primaryBlue text-h1 text-center md:text-left font-bold">
                                    {companies[current].company}
                                </h2>
                                <p className="text-black text-p leading-relaxed text-center md:text-left">
                                    {companies[current].smallHistoryText}
                                </p>
                                <p className="text-black text-p leading-relaxed text-center md:text-left">
                                    {companies[current].smallHistoryText2}
                                </p>
                                <div className="flex justify-center md:justify-start mt-2">
                                    <a href={companies[current].bigButtonLinkTo}>
                                        <BigButton
                                            textBefore={companies[current].buttonText}
                                            textAfter={companies[current].buttonText}
                                            minWidth={companies[current].buttonMinWidth}
                                            maxWidth={companies[current].buttonMaxWidth}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Divider & Title */}
                        <div className="flex flex-col items-center mt-8 mb-6">
                            <div className="divider-line w-2/3 md:w-1/2 h-1 rounded-full"></div>
                            <p className="mt-4 text-center text-h2 font-bold text-primaryBlue">
                                Servicios Clave
                            </p>
                        </div>

                        {/* Services Grid */}
                        <div className="flex my-10 flex-col items-center">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 text-left gap-6 sm:gap-10 list-none w-full max-w-3xl">
                                {companies[current].keyServices.map((service, index) => (
                                    <li
                                        key={index}
                                        className="service-item text-p flex gap-4 items-center group"
                                    >
                                        <span className="text-gray-800 font-medium flex-1">
                                            {service}
                                        </span>
                                        <a href={companies[current].bigButtonLinkTo}><GoArrowUpRight className="service-icon text-secundaryYellow bg-primaryBlue rounded-full text-3xl p-1.5 flex-shrink-0 cursor-pointer" /></a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Company Image */}
                <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
                    <div className="company-image rounded-4xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                        <Image
                            src={companies[current].image}
                            alt={companies[current].company}
                            width={1200}
                            height={1200}
                            className="w-full max-w-[520px] h-[420px] sm:h-[560px] lg:h-[700px] object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center my-8 gap-2.5 items-center">
                {companies.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`dot-indicator ${
                            index === current
                                ? "dot-active h-3 w-12 rounded-full bg-secundaryYellow"
                                : "dot-inactive h-3 w-3 rounded-full bg-thirdGreen hover:bg-thirdGreen/80"
                        }`}
                        role="button"
                        aria-label={`Ver empresa ${companies[index].company}`}
                        tabIndex={0}
                    ></div>
                ))}
            </div>
        </div>
    );
}