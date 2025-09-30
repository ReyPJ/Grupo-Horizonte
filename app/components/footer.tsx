import { GoArrowUpRight } from "react-icons/go";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import * as React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top section: navigation columns */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Proyectos */}
          <div>
            <h3 className="text-h2 mb-6">Proyectos</h3>
            <ul className="space-y-3">
              <FooterItem label="Proyectos 4C" />
              <FooterItem label="Proyectos Nucleo Energy" multiline />
            </ul>
          </div>

          {/* Nosotros */}
          <div>
            <h3 className="text-h2 mb-6">Nosotros</h3>
            <ul className="space-y-3">
              <FooterItem label="Visión, Misión, Valores" multiline />
              <FooterItem label="Liderazgo" />
            </ul>
          </div>

          {/* Empresas */}
          <div>
            <h3 className="text-h2 mb-6">Empresas</h3>
            <ul className="space-y-3">
              <FooterItem label="4C" />
              <FooterItem label="Nucleo Energy" />
              <FooterItem label="IMBMAR" />
              <FooterItem label="RECCMAQ" />
            </ul>
          </div>

          {/* Enfoque */}
          <div>
            <h3 className="text-h2 mb-6">Enfoque</h3>
            <ul className="space-y-3">
              <FooterItem label="Seguridad" />
              <FooterItem label="Servicios" />
              <FooterItem label="Éticas" />
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 sm:px-10 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="h-px w-full bg-white/15"></div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-6">
          <div className="flex-1 w-full lg:w-auto flex items-center justify-center lg:justify-start">
            <Image
              src="/LogoCompletoPositivo@4x.png"
              width={400}
              height={400}
              alt="Logo Grupo Horizonte"
              className="w-36 sm:w-40 md:w-44 lg:w-48 h-auto object-contain"
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <p className="text-p"><a href="tel:+525588888888" className="hover:text-secundaryYellow transition-colors">+52 55 8888 8888</a></p>
            <p className="text-p"><a href="mailto:ghorizonte@hh.com" className="hover:text-secundaryYellow transition-colors">ghorizonte@hh.com</a></p>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <p className="text-p"><a href="#" className="hover:text-secundaryYellow transition-colors">Política de Privacidad</a></p>
            <p className="text-p"><a href="#" className="hover:text-secundaryYellow transition-colors">Términos de uso</a></p>
          </div>

          <div className="flex-1 flex flex-col items-center lg:items-end gap-3">
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
            <p className="text-p text-white/70">© 2025 Grupo Horizonte</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Small helper components to keep JSX clean
function FooterItem({ label, multiline = false }: { label: string; multiline?: boolean }) {
  return (
    <li>
      <a href="#" className="group flex items-center justify-between gap-4 rounded-md px-3 py-2 hover:bg-white/5 transition-colors">
        <span className="text-p leading-snug">{label}</span>
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-secundaryYellow text-thirdGreen group-hover:scale-105 transition-transform">
          <GoArrowUpRight className="text-xl" />
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
      className="inline-flex items-center justify-center size-9 rounded-full bg-white/10 text-white hover:bg-secundaryYellow hover:text-thirdGreen transition-colors"
    >
      {children}
    </a>
  );
}