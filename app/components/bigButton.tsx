"use client";
import { FaArrowRightLong } from 'react-icons/fa6';

interface ButtonProps {
    textBefore: string;
    textAfter: string;
    textColor?: string;
    minWidth: string;
    maxWidth: string;
}

export default function BigButton({textBefore, textAfter, textColor = "black", minWidth = "250px", maxWidth = "280px"}: ButtonProps) {
    return (
        <button className="custom-button">
            <span className="before-content">
                <FaArrowRightLong className="before-arrow"  />
                <span className="before-text">{textBefore}</span>
            </span>

            <span className="after-content">
                <span className="after-text">{textAfter}</span>
                <FaArrowRightLong className="after-arrow" />
            </span>

            <style jsx>{`
                .custom-button {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    padding: 0 12px;
                    min-width: ${minWidth};
                    max-width: ${maxWidth};
                    overflow: hidden;
                    min-height: 48px; /* Aumenté la altura para más espacio */
                    font-weight: 500;
                    cursor: pointer;
                    border-radius: 24px; /* Bordes más suaves */
                    transition: all 0.5s ease-in-out; /* Animación más suave */
                }

                .before-content {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    position: relative;
                    z-index: 10;
                    white-space: nowrap; /* Evita salto de línea */
                    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
                    color: ${textColor};
                }

                .before-arrow {
                    font-size: 32px;
                    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
                }

                .before-text {
                    white-space: nowrap; /* Evita salto de línea */
                    transition: transform 0.5s ease-in-out;
                    font-size: 18px;
                }

                .after-content {
                    display: flex;
                    align-items: center;
                    gap: 12px; /* Más espacio entre texto y flecha */
                    position: absolute;
                    box-sizing: border-box;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    color: white;
                    padding: 0 16px;
                    opacity: 0;
                    transform: translateX(-20px); /* Comienza un poco fuera */
                    white-space: nowrap; /* Evita salto de línea */
                    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
                }

                .after-text {
                    white-space: nowrap; /* Evita salto de línea */
                    transition: transform 0.5s ease-in-out;
                    font-size: 18px;
                }

                .after-arrow {
                    font-size: 32px;
                    transition: transform 0.5s ease-in-out;
                }

                .custom-button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 100%;
                    background-color: #000C47; /* primaryBlue */
                    transition: width 0.5s ease-in-out; /* Animación más suave */
                    z-index: 0;
                }

                .custom-button:hover::before {
                    width: 100%;
                }

                .custom-button:hover .before-content {
                    opacity: 0;
                    transform: translateX(-30px); /* Sale más suavemente */
                }

                .custom-button:hover .after-content {
                    opacity: 1;
                    transform: translateX(0); /* Entra suavemente */
                }
            `}</style>
        </button>
    );
}