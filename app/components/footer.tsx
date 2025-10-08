import { GoArrowUpRight } from "react-icons/go";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import * as React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-black to-[#000818] text-white relative overflow-hidden">
            <style jsx>{`
        .footer-link {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .footer-link:hover {
          background: rgba(206, 211, 0, 0.08);
          transform: translateX(4px);
        }
        
        .footer-link:hover .arrow-icon {
          background: linear-gradient(135deg, #CED300 0%, #0A8700 100%);
          transform: rotate(45deg) scale(1.1);
        }
        
        .arrow-icon {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .social-icon-link {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .social-icon-link:hover {
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 8px 16px rgba(206, 211, 0, 0.3);
        }
        
        .contact-link {
          transition: all 0.25s ease;
          display: inline-block;
        }
        
        .contact-link:hover {
          color: #CED300;
          transform: translateX(2px);
        }
        
        .policy-link {
          transition: all 0.25s ease;
          display: inline-block;
        }
        
        .policy-link:hover {
          color: #CED300;
          transform: translateX(2px);
        }
        
        .footer-section-title {
          position: relative;
          display: inline-block;
        }
        
        .footer-section-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #CED300 0%, transparent 100%);
          border-radius: 2px;
        }
        
        .logo-container {
          filter: drop-shadow(0 4px 12px rgba(206, 211, 0, 0.15));
          transition: filter 0.3s ease;
        }
        
        .logo-container:hover {
          filter: drop-shadow(0 6px 20px rgba(206, 211, 0, 0.25));
        }
        
        .divider-gradient {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.15) 50%,
            transparent 100%
          );
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .footer-bg-decoration {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(206, 211, 0, 0.03) 0%, transparent 70%);
          pointer-events: none;
        }
        
        .footer-bg-decoration-1 {
          top: -200px;
          right: -200px;
          animation: float 20s ease-in-out infinite;
        }
        
        .footer-bg-decoration-2 {
          bottom: -200px;
          left: -200px;
          animation: float 25s ease-in-out infinite reverse;
        }
      `}</style>

            {/* Decorative background elements */}
            <div className="footer-bg-decoration footer-bg-decoration-1"></div>
            <div className="footer-bg-decoration footer-bg-decoration-2"></div>

            {/* Top section: navigation columns */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 lg:py-20 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {/* Proyectos */}
                    <div>
                        <h3 className="footer-section-title text-h2 mb-8 pb-2">Proyectos</h3>
                        <ul className="space-y-2">
                            <FooterItem label="Proyectos 4C" />
                            <FooterItem label="Proyectos Nucleo Energy" multiline />
                        </ul>
                    </div>

                    {/* Nosotros */}
                    <div>
                        <h3 className="footer-section-title text-h2 mb-8 pb-2">Nosotros</h3>
                        <ul className="space-y-2">
                            <FooterItem label="Visión, Misión, Valores" multiline />
                            <FooterItem label="Liderazgo" />
                        </ul>
                    </div>

                    {/* Empresas */}
                    <div>
                        <h3 className="footer-section-title text-h2 mb-8 pb-2">Empresas</h3>
                        <ul className="space-y-2">
                            <FooterItem label="4C" />
                            <FooterItem label="Nucleo Energy" />
                            <FooterItem label="IMBMAR" />
                            <FooterItem label="RECCMAQ" />
                        </ul>
                    </div>

                    {/* Enfoque */}
                    <div>
                        <h3 className="footer-section-title text-h2 mb-8 pb-2">Enfoque</h3>
                        <ul className="space-y-2">
                            <FooterItem label="Seguridad" />
                            <FooterItem label="Servicios" />
                            <FooterItem label="Éticas" />
                        </ul>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="px-6 sm:px-10 lg:px-12 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="divider-gradient h-px w-full"></div>
                </div>
            </div>

            {/* Bottom section */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 lg:py-14 relative z-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-8">
                    <div className="flex-1 w-full lg:w-auto flex items-center justify-center lg:justify-start">
                        <div className="logo-container">
                            <Image
                                src="/LogoCompletoPositivo@4x.png"
                                width={400}
                                height={400}
                                alt="Logo Grupo Horizonte"
                                className="w-40 sm:w-44 md:w-48 lg:w-52 h-auto object-contain"
                            />
                        </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left space-y-2">
                        <p className="text-p">
                            <a href="tel:+525588888888" className="contact-link">
                                +52 55 8888 8888
                            </a>
                        </p>
                        <p className="text-p">
                            <a href="mailto:ghorizonte@hh.com" className="contact-link">
                                ghorizonte@hh.com
                            </a>
                        </p>
                    </div>

                    <div className="flex-1 text-center lg:text-left space-y-2">
                        <p className="text-p">
                            <a href="#" className="policy-link">
                                Política de Privacidad
                            </a>
                        </p>
                        <p className="text-p">
                            <a href="#" className="policy-link">
                                Términos de uso
                            </a>
                        </p>
                    </div>

                    <div className="flex-1 flex flex-col items-center lg:items-end gap-4">
                        <div className="flex items-center gap-3">
                            <SocialIcon href="#" label="Facebook">
                                <FaFacebookF />
                            </SocialIcon>
                            <SocialIcon href="#" label="Instagram">
                                <FaInstagram />
                            </SocialIcon>
                            <SocialIcon href="#" label="LinkedIn">
                                <FaLinkedinIn />
                            </SocialIcon>
                            <SocialIcon href="#" label="WhatsApp">
                                <FaWhatsapp />
                            </SocialIcon>
                        </div>
                        <p className="text-sm text-white/60 tracking-wide">
                            © 2025 Grupo Horizonte
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Helper components
function FooterItem({ label, multiline = false }: { label: string; multiline?: boolean }) {
    return (
        <li>
            <a href="#" className="footer-link group flex items-center justify-between gap-4 rounded-xl px-4 py-3 transition-all">
        <span className="text-p leading-snug text-white/90 group-hover:text-white">
          {label}
        </span>
                <span className="arrow-icon inline-flex items-center justify-center w-8 h-8 rounded-full bg-secundaryYellow text-primaryBlue flex-shrink-0">
          <GoArrowUpRight className="text-lg" />
        </span>
            </a>
        </li>
    );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
    return (
        <a
            aria-label={label}
            href={href}
            className="social-icon-link inline-flex items-center justify-center size-11 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-secundaryYellow hover:text-primaryBlue border border-white/10 hover:border-secundaryYellow"
        >
            {children}
        </a>
    );
}