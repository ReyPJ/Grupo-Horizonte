"use client";
import * as React from "react";
import CloudinaryImage from "./CloudinaryImage";
import BigButton from "@/app/components/bigButton";
import { GoArrowUpRight } from "react-icons/go";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useTranslations } from 'next-intl';

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
  const t = useTranslations();
  const [current, setCurrent] = React.useState<number>(0);
  const [isTransitioning, setIsTransitioning] = React.useState<boolean>(false);
  const [isFading, setIsFading] = React.useState<boolean>(false);
  const [touchStart, setTouchStart] = React.useState<number>(0);
  const [touchEnd, setTouchEnd] = React.useState<number>(0);

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

  const handleNext = () => {
    if (isTransitioning) return;
    const nextIndex = (current + 1) % companies.length;
    handleDotClick(nextIndex);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    const prevIndex = (current - 1 + companies.length) % companies.length;
    handleDotClick(prevIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
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
                
                .mobile-card {
                    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.98), rgba(249, 250, 251, 0.95));
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(0, 12, 71, 0.08);
                }
                
                .arrow-button {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 12px rgba(0, 12, 71, 0.1);
                }
                
                .arrow-button:hover {
                    background: rgba(255, 255, 255, 1);
                    transform: scale(1.1);
                    box-shadow: 0 6px 20px rgba(0, 12, 71, 0.15);
                }
                
                .arrow-button:active {
                    transform: scale(0.95);
                }
            `}</style>

      <div
        className={`transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"
          }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* MOBILE LAYOUT - ULTRA COMPACTO */}
        <div className="lg:hidden relative max-w-md mx-auto">
          {/* Flechas más pequeñas */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="arrow-button absolute left-0 top-[40%] -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 disabled:opacity-50"
            aria-label={t('Navigation.previousCompany')}
          >
            <IoChevronBack className="text-primaryBlue text-lg" />
          </button>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="arrow-button absolute right-0 top-[40%] -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 disabled:opacity-50"
            aria-label={t('Navigation.nextCompany')}
          >
            <IoChevronForward className="text-primaryBlue text-lg" />
          </button>

          <div className="px-10 space-y-4">
            {/* Imagen compacta */}
            <div className="w-full">
              <div className="company-image rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5 relative w-full h-[200px] sm:h-[240px]">
                <CloudinaryImage
                  src={companies[current].image}
                  alt={companies[current].company}
                  fill={true}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Card ultra compacta */}
            <div className="mobile-card rounded-2xl p-4 shadow-lg space-y-4">
              {/* Logo pequeño */}
              <div className="logo-container w-full max-w-[200px] mx-auto">
                <div className="w-full h-[70px] ">
                  <CloudinaryImage
                    src={companies[current].logoUrl}
                    alt={companies[current].company}
                    className="object-contain"
                    fill={true}
                  />
                </div>
              </div>


              {/* Textos compactos */}
              <div className="text-center space-y-2">
                <p className="text-gray-700 text-xs leading-relaxed">
                  {companies[current].smallHistoryText}
                </p>
              </div>

              {/* Botón compacto */}
              <div className="flex justify-center">
                <a href={companies[current].bigButtonLinkTo}>
                  <button className="bg-primaryBlue text-white px-4 py-2 rounded-full font-bold text-xs hover:bg-opacity-90 transition-all duration-300 shadow-md hover:scale-105">
                    {companies[current].buttonText}
                  </button>
                </a>
              </div>

              {/* Divider delgado */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-3"></div>

              {/* Servicios compactos */}
              <div>
                <p className="text-center text-sm font-bold text-primaryBlue mb-3">
                  {t('Companies.keyServices')}
                </p>
                <ul className="space-y-2">
                  {companies[current].keyServices.slice(0, 4).map((service, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between gap-2 p-2 rounded-lg bg-white/60 transition-colors"
                    >
                      <span className="text-gray-800 text-xs font-medium flex-1">
                        {service}
                      </span>
                      <a href={companies[current].bigButtonLinkTo}>
                        <GoArrowUpRight className="service-icon text-secundaryYellow bg-primaryBlue rounded-full text-lg p-0.5 flex-shrink-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT - IGUAL QUE ANTES */}
        <div className="hidden lg:flex flex-row gap-28 items-center min-h-[640px]">
          <div className="flex-1 min-w-0">
            <div className="flex flex-col">
              <div className="flex flex-row items-center justify-center gap-12">
                <div className="logo-container w-1/2 max-w-[380px] relative h-[280px]">
                  <CloudinaryImage
                    src={companies[current].logoUrl}
                    alt={companies[current].company}
                    fill={true}
                    className="object-contain"
                  />
                </div>

                <div className="flex w-1/2 flex-col gap-4 min-w-0">
                  <h2 className="text-primaryBlue text-h1 text-left font-bold">
                    {companies[current].company}
                  </h2>
                  <p className="text-black text-p leading-relaxed text-left">
                    {companies[current].smallHistoryText}
                  </p>
                  <p className="text-black text-p leading-relaxed text-left">
                    {companies[current].smallHistoryText2}
                  </p>
                  <div className="flex justify-start mt-2">
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

              <div className="flex flex-col items-center mt-8 mb-6">
                <div className="divider-line w-1/2 h-1 rounded-full"></div>
                <p className="mt-4 text-center text-h2 font-bold text-primaryBlue">
                  {t('Companies.keyServices')}
                </p>
              </div>

              <div className="flex my-10 flex-col items-center">
                <ul className="grid grid-cols-2 text-left gap-10 list-none w-full max-w-3xl">
                  {companies[current].keyServices.map((service, index) => (
                    <li
                      key={index}
                      className="service-item text-p flex gap-4 items-center group"
                    >
                      <span className="text-gray-800 font-medium flex-1">
                        {service}
                      </span>
                      <a href={companies[current].bigButtonLinkTo}>
                        <GoArrowUpRight className="service-icon text-secundaryYellow bg-primaryBlue rounded-full text-3xl p-1.5 flex-shrink-0 cursor-pointer" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 flex justify-center">
            <div className="company-image rounded-4xl overflow-hidden shadow-2xl ring-1 ring-black/5 relative w-[520px] h-[700px]">
              <CloudinaryImage
                src={companies[current].image}
                alt={companies[current].company}
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dot Indicators - más pequeños en mobile */}
      <div className="flex justify-center my-6 lg:my-8 gap-2 lg:gap-2.5 items-center">
        {companies.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`dot-indicator ${index === current
              ? "dot-active h-2 lg:h-3 w-10 lg:w-12 rounded-full bg-secundaryYellow"
              : "dot-inactive h-2 lg:h-3 w-2 lg:w-3 rounded-full bg-thirdGreen hover:bg-thirdGreen/80"
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
