"use client";
import * as React from "react";
import Image from "next/image";

interface Project {
    backgroundImageUrl: string;
    country: string;
    title: string;
    description: string;
}

export default function ProjectSlide({projects}: { projects: Project[] }) {
    const [inView, setInView] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(entry.target);
                }
            },
            {threshold: 0.5}
        );

        const container = document.querySelector(".project-slide-container");
        if (container) observer.observe(container);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>
                {`
          .project-slide-container {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            overflow-x: hidden; /* Contenedor padre sin scroll */
          }

          .project-slide-wrapper {
            display: flex;
            gap: 8px;
            overflow-x: auto; /* Scroll solo en el wrapper */
            white-space: nowrap;
            padding-bottom: 20px; /* Espacio para el scroll */
            padding-right: 16px; /* Espacio al final para que el último slide no pegue al borde */
            scrollbar-width: thin; /* Scroll visible en Firefox */
          }
          /* Scrollbar visible en navegadores WebKit */
          .project-slide-wrapper::-webkit-scrollbar {
            height: 8px;
          }
          .project-slide-wrapper::-webkit-scrollbar-track {
            background: rgb(0, 12, 71);
          }
          .project-slide-wrapper::-webkit-scrollbar-thumb {
            background-color: #CED300;
            border-radius: 10px;
            border: 2px solid rgb(0, 12, 71);
          }
          .project-slide-wrapper::-webkit-scrollbar-thumb:hover {
            background-color: #0A8700;
          }

          .project-slide {
            flex: 0 0 auto;
            width: 520px;
            transform: translateX(100%);
            transition: transform 0.8s ease-out;
          }

          /* Slide fantasma para crear espacio al final sin afectar el resto */
          .project-slide--ghost {
            width: 300px; /* igual al ancho de un slide real para mantener el cálculo/flujo original */
            opacity: 0; /* invisible */
            pointer-events: none; /* ignora eventos */
          }
          .project-slide--ghost .project-slide-item {
            width: 0;
            height: 0; /* no aporta altura extra */
          }

          .project-slide.in-view .project-slide-item {
            transform: translateX(0);
          }

          .project-slide-item {
            position: relative;
            width: 520px;
            height: 800px;
            overflow: hidden;
            border-radius: 1rem;
          }

          .project-slide-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease-out;
          }

          .project-slide-item:hover img {
            transform: scale(1.03);
          }

          .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2), transparent);
            opacity: 0;
            transition: opacity 0.5s ease-out;
            pointer-events: none;
          }

          .project-slide-item:hover .overlay {
            opacity: 1;
          }

          .text-content {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: flex-end;
            padding: 1.25rem;
            padding-top: 0;
            white-space: normal; /* Asegura que el texto pueda envolver dentro de cada tarjeta */
          }

          .text-inner {
            max-width: 90%;
            white-space: normal; /* Evita que el texto se corte por heredar nowrap del wrapper */
          }

          .desc {
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transform: translateY(0.5rem);
            transition: max-height 0.5s ease-out, opacity 0.5s ease-out, transform 0.5s ease-out;
          }

          .project-slide-item:hover .desc {
            max-height: 220px; /* suficiente para 3-4 líneas */
            opacity: 1;
            transform: translateY(0);
          }

          .text-inner div:first-child {
            margin-bottom: 0.25rem;
            font-size: 22px;
            font-weight: 600;
            letter-spacing: 0.1em;
            color: var(--color-secundaryYellow);
          }

          .text-inner h3 {
            margin-bottom: 0.5rem;
            font-size: 18px;
            font-weight: 700;
            color: white;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
          }

          .text-inner p {
            font-size: 13px;
            color: rgba(255, 255, 255, 0.9);
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
            white-space: normal; /* evita corte de texto heredado */
            overflow-wrap: anywhere;
            word-break: break-word;
            margin-top: 0.5rem;
          }
        `}
            </style>
            <div className="project-slide-container">
                <div className="project-slide-wrapper">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-slide ${inView ? "in-view" : ""}`}
                        >
                            <div className="project-slide-item">
                                <Image
                                    src={project.backgroundImageUrl}
                                    alt={project.title}
                                    width={1200}
                                    height={1200}
                                    className="h-full w-full object-cover"
                                    priority={index === 0}
                                />
                                <div className="overlay" />
                                <div className="text-content">
                                    <div className="text-inner">
                                        <div>{project.country}</div>
                                        <h3>{project.title}</h3>
                                        <div className="desc"><p>{project.description}</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Slide fantasma invisible para dar espacio al final sin tocar el resto del código */}
                    <div
                        className={`project-slide project-slide--ghost ${inView ? "in-view" : ""}`}
                        aria-hidden="true"
                    >
                        <div className="project-slide-item" />
                    </div>
                </div>
            </div>
        </>
    );
}