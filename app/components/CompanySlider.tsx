"use client";
import * as React from "react";
import Image from "next/image";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {BsArrowUpRightCircleFill} from "react-icons/bs";
import {FaFacebook, FaLinkedin, FaWhatsapp, FaInstagram} from "react-icons/fa";

interface Company {
    company: string;
    logoUrl: string;
    smallHistoryText: string;
    buttonText: string;
    keyServices: string[];
    image: string;
}

export default function CompanySlider({companies}: { companies: Company[] }) {
    const [current, setCurrent] = React.useState<number>(0);
    const [isTransitioning, setIsTransitioning] = React.useState<boolean>(false);

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrent((prev) => (prev === 0 ? companies.length - 1 : prev - 1));
            setIsTransitioning(false);
        }, 300); // Match with transition duration
    };

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrent((prev) => (prev === companies.length - 1 ? 0 : prev + 1));
            setIsTransitioning(false);
        }, 300); // Match with transition duration
    };
    // {companies.map((_, index) => (
    //     <div
    //         key={index}
    //         onClick={() => {
    //             if (!isTransitioning) setCurrent(index);
    //         }}
    //         className={
    //             index === current
    //                 ? "cursor-pointer h-2 w-8 transition-all duration-300 rounded-full bg-yellow-500"
    //                 : "cursor-pointer h-2 w-2 transition-all duration-300 rounded-full bg-green-300"
    //         }
    //     ></div>
    // ))}

    return (
        <div className="relative w-full max-w-6xl mx-auto">
        </div>
    );
}