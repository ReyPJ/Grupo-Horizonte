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
            overflow-x: hidden;
          }

          .project-slide-wrapper {
            display: flex;
            gap: 8px;
            overflow-x: auto;
            white-space: nowrap;
            padding-bottom: 20px;
            padding-right: 16px;
            scrollbar-width: thin;
          }
          
          .project-slide-wrapper::-webkit-scrollbar {
            height: 10px;
          }
          .project-slide-wrapper::-webkit-scrollbar-track {
            background: rgb(0, 12, 71);
            border-radius: 10px;
          }
          .project-slide-wrapper::-webkit-scrollbar-thumb {
            background: linear-gradient(90deg, #CED300 0%, #0A8700 100%);
            border-radius: 10px;
            border: 2px solid rgb(0, 12, 71);
          }
          .project-slide-wrapper::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(90deg, #0A8700 0%, #CED300 100%);
          }

          .project-slide {
            flex: 0 0 auto;
            width: 280px;
            transform: translateX(100%);
            transition: transform 0.8s ease-out;
          }

          .project-slide--ghost {
            width: 280px;
            opacity: 0;
            pointer-events: none;
          }
          .project-slide--ghost .project-slide-item {
            width: 0;
            height: 0;
          }

          .project-slide.in-view .project-slide-item {
            transform: translateX(0);
          }

          .project-slide-item {
            position: relative;
            width: 280px;
            height: 420px;
            overflow: hidden;
            border-radius: 1.5rem;
            box-shadow: 
              0 20px 40px -10px rgba(0, 12, 71, 0.25),
              0 0 0 1px rgba(0, 12, 71, 0.05);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .project-slide-item:hover {
            box-shadow: 
              0 30px 60px -15px rgba(0, 12, 71, 0.35),
              0 0 0 1px rgba(206, 211, 0, 0.3);
            transform: translateY(-8px);
          }

          .project-slide-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .project-slide-item:hover img {
            transform: scale(1.08);
          }

          .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to top, 
              rgba(0, 12, 71, 0.95) 0%, 
              rgba(0, 12, 71, 0.7) 40%,
              rgba(0, 12, 71, 0.3) 70%,
              transparent 100%
            );
            opacity: 0;
            transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
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
            padding: 1.5rem;
            padding-top: 0;
            white-space: normal;
          }

          .text-inner {
            max-width: 90%;
            white-space: normal;
          }

          .country-badge {
            display: inline-block;
            margin-bottom: 0.5rem;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 0.15em;
            color: var(--color-secundaryYellow);
            text-transform: uppercase;
            padding: 4px 12px;
            background: rgba(206, 211, 0, 0.15);
            backdrop-filter: blur(8px);
            border-radius: 20px;
            border: 1px solid rgba(206, 211, 0, 0.3);
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
          }
          
          .project-slide-item:hover .country-badge {
            background: rgba(206, 211, 0, 0.25);
            border-color: rgba(206, 211, 0, 0.5);
            transform: translateY(-2px);
          }

          .project-title {
            margin-bottom: 0.75rem;
            font-size: 20px;
            font-weight: 800;
            color: white;
            text-shadow: 
              0 2px 8px rgba(0, 0, 0, 0.6),
              0 1px 3px rgba(0, 0, 0, 0.8);
            line-height: 1.3;
          }

          .desc {
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transform: translateY(0.5rem);
            transition: max-height 0.5s ease-out, opacity 0.5s ease-out, transform 0.5s ease-out;
          }

          .project-slide-item:hover .desc {
            max-height: 220px;
            opacity: 1;
            transform: translateY(0);
          }

          .desc p {
            font-size: 14px;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.95);
            text-shadow: 
              0 2px 6px rgba(0, 0, 0, 0.7),
              0 1px 2px rgba(0, 0, 0, 0.9);
            white-space: normal;
            overflow-wrap: anywhere;
            word-break: break-word;
            margin-top: 0.5rem;
            font-weight: 400;
          }
          
          .desc::before {
            content: '';
            display: block;
            width: 40px;
            height: 3px;
            background: linear-gradient(90deg, #CED300 0%, transparent 100%);
            margin-bottom: 0.75rem;
            border-radius: 2px;
          }

          /* Responsive sizes */
          @media (min-width: 640px) {
            .project-slide,
            .project-slide--ghost { width: 340px; }
            .project-slide-item { width: 340px; height: 500px; }
            .project-title { font-size: 22px; }
            .desc p { font-size: 15px; }
          }
          @media (min-width: 768px) {
            .project-slide,
            .project-slide--ghost { width: 400px; }
            .project-slide-item { width: 400px; height: 600px; }
            .country-badge { font-size: 15px; }
            .project-title { font-size: 24px; }
          }
          @media (min-width: 1024px) {
            .project-slide,
            .project-slide--ghost { width: 520px; }
            .project-slide-item { width: 520px; height: 800px; }
            .text-content { padding: 2rem; }
            .country-badge { font-size: 16px; padding: 6px 16px; }
            .project-title { font-size: 28px; }
            .desc p { font-size: 16px; }
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
                                        <span className="country-badge">{project.country}</span>
                                        <h3 className="project-title">{project.title}</h3>
                                        <div className="desc">
                                            <p>{project.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
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