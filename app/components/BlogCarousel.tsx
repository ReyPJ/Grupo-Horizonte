"use client";
import * as React from "react";
import Image from "next/image";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {BsArrowUpRightCircleFill} from "react-icons/bs";
import {FaFacebook, FaLinkedin, FaWhatsapp, FaInstagram} from "react-icons/fa";


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
        }, 300); // Match this with the transition duration
    };

    const nextSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrent((prev) => (prev === MockSlides.length - 1 ? 0 : prev + 1));
            setIsTransitioning(false);
        }, 300); // Match this with the transition duration
    };

    return (
        <div className="relative w-full max-w-md mx-auto">
            <div className="relative flex items-center justify-between">
                {/* Left Arrow outside */}
                <button
                    onClick={prevSlide}
                    className="rounded-full p-2 bg-transparent cursor-pointer"
                >
                    <ArrowLeft className="w-6 h-6 text-white" />
                </button>

                {/* Image and Card Container */}
                <div className="relative w-full bg-white max-w-md mx-4 shadow-xl rounded-2xl pt-4">
                    <div className="relative h-58 w-full rounded-2xl overflow-hidden">
                        <div
                            className={`absolute w-full h-full transition-opacity duration-300 ${
                                isTransitioning ? "opacity-40" : "opacity-100"
                            }`}
                        >
                            <Image
                                src={MockSlides[current].image}
                                alt={MockSlides[current].title}
                                width={1200}
                                height={1200}
                                className="object-cover shadow-md shadow-gray-600 rounded-lg"
                                style={{width: "90%", height: "90%", margin: "auto", display: "block"}}
                            />
                        </div>
                    </div>
                    <div className="bg-white rounded-b-2xl shadow-lg p-4 pt-0 text-center">
                        <h3 className={`font-semibold text-h3 transition-all duration-300 ${
                            isTransitioning ? "opacity-0" : "opacity-100"}`}>
                            {MockSlides[current].title}
                        </h3>
                        <div className="flex justify-between mt-3 space-x-2 items-center">
                            <BsArrowUpRightCircleFill
                                className="w-10 h-10 cursor-pointer hover:bg-thirdGreen hover:scale-101 hover:text-secundaryYellow transition-all duration-200 rounded-full text-primaryBlue bg-secundaryYellow" />
                            <div className="flex justify-center space-x-2 items-center">
                                {MockSlides.map((_, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setCurrent(index)}
                                        className={
                                            index === current
                                                ? "cursor-pointer h-2 w-8 transition-all duration-300 rounded-full bg-secundaryYellow"
                                                : "cursor-pointer h-2 w-2 transition-all duration-300 rounded-full bg-thirdGreen"
                                        }
                                    ></div>
                                ))}
                            </div>
                            <div className="flex space-x-2 items-center text-gray-500">
                                <FaFacebook
                                    className="w-5 h-5 text-thirdGreen transition-all delay-50 cursor-pointer hover:text-secundaryYellow" />
                                <FaLinkedin
                                    className="w-5 h-5 text-thirdGreen transition-all delay-50 cursor-pointer hover:text-secundaryYellow" />
                                <FaInstagram
                                    className="w-5 h-5 text-thirdGreen transition-all delay-50 cursor-pointer hover:text-secundaryYellow" />
                                <FaWhatsapp
                                    className="w-5 h-5 text-thirdGreen transition-all delay-50 cursor-pointer hover:text-secundaryYellow" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Arrow outside */}
                <button
                    onClick={nextSlide}
                    className="rounded-full p-2 bg-transparent cursor-pointer"
                >
                    <ArrowRight className="w-6 h-6 text-white" />
                </button>
            </div>
        </div>
    );
}