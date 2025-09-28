"use client";
import * as React from "react";
import Image from "next/image";
import BigButton from "@/app/components/bigButton";
import {GoArrowUpRight} from "react-icons/go";


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
}

export default function CompanySlider({companies}: { companies: Company[] }) {
    const [current, setCurrent] = React.useState<number>(0);
    const [isTransitioning, setIsTransitioning] = React.useState<boolean>(false);
    const [isFading, setIsFading] = React.useState<boolean>(false);

    const handleDotClick = (index: number) => {
        if (index === current || isTransitioning) return;
        setIsTransitioning(true);
        setIsFading(true);
        // Fade-out, swap content, then fade-in
        setTimeout(() => {
            setCurrent(index);
            // small delay to ensure DOM updates before fade-in
            setTimeout(() => {
                setIsFading(false);
                // allow clicks after fade-in completes
                setTimeout(() => setIsTransitioning(false), 300);
            }, 50);
        }, 200);
    };

    return (
        <div className=" w-full">
            <div className={`flex gap-28 items-center transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"} min-h-[640px]`}>
                <div className={"flex-1 min-w-0"}>
                    <div className={"flex flex-col"}>
                        <div className={"flex items-center justify-center gap-12"}>
                            <Image
                                src={companies[current].logoUrl}
                                alt={companies[current].company}
                                width={800}
                                height={800}
                                className={"w-1/2 max-w-[380px] h-[160px] md:h-[200px] lg:h-[280px] object-contain"}
                            />
                            <div className={"flex w-1/2 flex-col gap-3 min-w-0"}>
                                <h2 className={"text-primaryBlue text-h1"}>
                                    {companies[current].company}
                                </h2>
                                <p className={"text-black text-p leading-relaxed"}>
                                    {companies[current].smallHistoryText}
                                </p>
                                <p className={"text-black text-p leading-relaxed"}>
                                    {companies[current].smallHistoryText2}
                                </p>
                                <BigButton textBefore={companies[current].buttonText}
                                           textAfter={companies[current].buttonText}
                                           minWidth={companies[current].buttonMinWidth}
                                           maxWidth={companies[current].buttonMaxWidth} />
                            </div>
                        </div>
                        <div className={"flex flex-col items-center"}>
                            <div className={"w-1/2 bg-secundaryYellow h-1 mt-2 mb-2"}></div>
                            <p className={"mt-2 text-center text-h2"}>Servicios Clave</p>
                        </div>
                        <div className={"flex my-10 flex-col items-center"}>
                            <ul className={"grid grid-cols-2 text-left gap-10 list-none"}>
                                {companies[current].keyServices.map((service, index) => (
                                    <li key={index} className={"text-p flex gap-4"}>{service}<GoArrowUpRight
                                        className={"text-secundaryYellow bg-primaryBlue rounded-full text-2xl hover:bg-thirdGreen cursor-pointer hover:scale-110"} />
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
                <div className={"flex-shrink-0"}>
                    <Image src={companies[current].image} alt={companies[current].company} width={1200} height={1200}
                           className={"rounded-4xl w-[520px] h-[700px] object-cover"} />
                </div>
            </div>
            <div className={"flex justify-center my-6 space-x-2 items-center"}>
                {companies.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={
                            index === current
                                ? "cursor-pointer h-3 w-12 transition-all duration-300 rounded-full bg-secundaryYellow"
                                : "cursor-pointer h-3 w-3 transition-all duration-300 rounded-full bg-thirdGreen"
                        }
                    ></div>
                ))}
            </div>
        </div>
    );
}