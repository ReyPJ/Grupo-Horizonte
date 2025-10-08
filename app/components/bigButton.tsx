"use client";
import {FaArrowRightLong} from 'react-icons/fa6';

interface ButtonProps {
    textBefore: string;
    textAfter: string;
    textColor?: string;
    minWidth: string;
    maxWidth: string;
}

export default function BigButton({
                                      textBefore,
                                      textAfter,
                                      textColor = "black",
                                      minWidth = "250px",
                                      maxWidth = "280px"
                                  }: ButtonProps) {
    return (
        <button className="custom-button">
            <span className="before-content">
                <FaArrowRightLong className="before-arrow" />
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
                    justify-content: center;
                    padding: 0 16px;
                    min-width: ${minWidth};
                    max-width: ${maxWidth};
                    overflow: hidden;
                    min-height: 52px;
                    font-weight: 600;
                    cursor: pointer;
                    border-radius: 26px;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 2px solid transparent;
                    box-shadow: 0 4px 12px rgba(0, 12, 71, 0.1);
                }

                .custom-button:hover {
                    box-shadow: 0 8px 24px rgba(0, 12, 71, 0.2);
                    transform: translateY(-2px);
                }

                .custom-button:active {
                    transform: translateY(0px);
                    box-shadow: 0 2px 8px rgba(0, 12, 71, 0.15);
                }

                .before-content {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    position: relative;
                    z-index: 10;
                    white-space: nowrap;
                    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    color: ${textColor};
                }

                .before-arrow {
                    font-size: 28px;
                    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .before-text {
                    white-space: nowrap;
                    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    font-size: 18px;
                    letter-spacing: 0.02em;
                }

                .after-content {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    position: absolute;
                    box-sizing: border-box;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    color: white;
                    padding: 0 16px;
                    opacity: 0;
                    transform: translateX(-30px);
                    white-space: nowrap;
                    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .after-text {
                    white-space: nowrap;
                    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    font-size: 18px;
                    letter-spacing: 0.02em;
                    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
                }

                .after-arrow {
                    font-size: 28px;
                    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .custom-button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 100%;
                    background: linear-gradient(135deg, #000C47 0%, #001560 100%);
                    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 0;
                    border-radius: 26px;
                }

                .custom-button::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(206, 211, 0, 0.15) 0%, transparent 100%);
                    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 1;
                    border-radius: 26px;
                    opacity: 0;
                }

                .custom-button:hover::before {
                    width: 100%;
                }

                .custom-button:hover::after {
                    width: 100%;
                    opacity: 1;
                }

                .custom-button:hover .before-content {
                    opacity: 0;
                    transform: translateX(-40px);
                }

                .custom-button:hover .after-content {
                    opacity: 1;
                    transform: translateX(0);
                    z-index: 2;
                }

                .custom-button:hover .after-arrow {
                    animation: arrowBounce 0.6s ease-in-out 0.5s;
                }

                @keyframes arrowBounce {
                    0%, 100% {
                        transform: translateX(0);
                    }
                    50% {
                        transform: translateX(4px);
                    }
                }

                /* Responsive adjustments */
                @media (max-width: 640px) {
                    .custom-button {
                        min-height: 48px;
                        padding: 0 14px;
                    }

                    .before-text,
                    .after-text {
                        font-size: 16px;
                    }

                    .before-arrow,
                    .after-arrow {
                        font-size: 24px;
                    }
                }
            `}</style>
        </button>
    );
}