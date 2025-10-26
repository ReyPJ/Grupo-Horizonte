"use client";
import Image from "next/image";
import * as React from "react";
import {useTranslations, useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/routing';

type HeaderNavProps = {
    setProjectsOpen?: (open: boolean) => void;
    projectsOpen?: boolean;
    setEnfoqueOpen?: (open: boolean) => void;
    enfoqueOpen?: boolean;
};

export default function HeaderNav({
                                      setProjectsOpen,
                                      projectsOpen,
                                      setEnfoqueOpen,
                                      enfoqueOpen
                                  }: HeaderNavProps) {
    const t = useTranslations();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [empresasDropdownOpen, setEmpresasDropdownOpen] = React.useState(false);
    const [languageDropdownOpen, setLanguageDropdownOpen] = React.useState(false);

    const empresas = [
        {name: t('CompanyData.fourC.name'), href: "/empresas/4C"},
        {name: t('CompanyData.imbar.name'), href: "/empresas/imbar"},
        {name: t('CompanyData.gerd.name'), href: "/empresas/gerd"},
        {name: t('CompanyData.nucleoEnergy.name'), href: "/empresas/nucleo-energy"},
        {name: t('CompanyData.reccmaq2.name'), href: "/empresas/reccmaq2"}
    ];

    const languages = [
        {code: 'es', name: 'Español', flag: '🇲🇽'},
        {code: 'cn', name: '中文', flag: '🇨🇳'}
    ];

    const changeLanguage = (newLocale: string) => {
        router.replace(pathname, {locale: newLocale});
        setLanguageDropdownOpen(false);
    };

    const toggleProjects = () => {
        if (setProjectsOpen) {
            setProjectsOpen(!projectsOpen);
        }
        if (setEnfoqueOpen && enfoqueOpen) {
            setEnfoqueOpen(false);
        }
        setEmpresasDropdownOpen(false);
    };

    const toggleEnfoque = () => {
        if (setEnfoqueOpen) {
            setEnfoqueOpen(!enfoqueOpen);
        }
        if (setProjectsOpen && projectsOpen) {
            setProjectsOpen(false);
        }
        setEmpresasDropdownOpen(false);
    };

    const openProjectsFromMobile = () => {
        setMobileOpen(false);
    };

    const openEnfoqueFromMobile = () => {
        setMobileOpen(false);
    };

    return (
        <>
            <style jsx>{`
                @media (max-width: 767px) {
                    .mobile-nav-overlay {
                        backdrop-filter: blur(8px);
                    }
                }
            `}</style>

            {/* MOBILE: Sticky Header */}
            <div className="md:hidden sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <div className="flex items-center justify-between px-4 py-2.5">
                    <a href="/" onClick={() => setMobileOpen(false)}>
                        <Image
                            src="/LogoCompleto@4x.png"
                            width={300}
                            height={300}
                            alt="Logo Grupo Horizonte"
                            className="w-28 h-auto object-contain"
                        />
                    </a>

                    <button
                        type="button"
                        className="relative z-[60] inline-flex items-center justify-center w-10 h-10 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
                        aria-label={mobileOpen ? t('Navigation.closeMenu') : t('Navigation.openMenu')}
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        <svg
                            className={`h-6 w-6 transition-all duration-300 ${mobileOpen ? 'scale-0 opacity-0 absolute' : 'scale-100 opacity-100'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                        </svg>
                        <svg
                            className={`h-6 w-6 transition-all duration-300 ${mobileOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 absolute'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu - Slide Down */}
                <div
                    className={`absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-[calc(100vh-57px)] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="overflow-y-auto max-h-[calc(100vh-57px)] px-4 py-4">
                        <nav className="space-y-2">
                            {/* Inicio */}
                            <a
                                href="/"
                                className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-primaryBlue hover:text-white rounded-xl transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {t('Navigation.home')}
                            </a>

                            {/* Proyectos */}
                            <a
                                href="/proyectos"
                                className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-primaryBlue hover:text-white rounded-xl transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {t('Navigation.projects')}
                            </a>

                            {/* Empresas - Expandible */}
                            <div className="bg-gray-50 rounded-xl p-3">
                                <p className="text-sm font-bold text-primaryBlue mb-2 px-2">{t('Navigation.ourCompanies')}</p>
                                <div className="space-y-1">
                                    {empresas.map((empresa, idx) => (
                                        <a
                                            key={idx}
                                            href={empresa.href}
                                            className="block py-2 px-3 text-sm text-gray-700 hover:bg-white hover:text-primaryBlue rounded-lg transition-colors"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {empresa.name}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Enfoque */}
                            <a
                                href="/enfoque"
                                className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-primaryBlue hover:text-white rounded-xl transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {t('Navigation.focus')}
                            </a>

                            {/* Contacto */}
                            <a
                                href="/contacto"
                                className="block py-3 px-4 text-base font-medium text-white bg-primaryBlue hover:bg-opacity-90 rounded-xl transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {t('Navigation.contact')}
                            </a>

                            {/* Language Selector - Mobile */}
                            <div className="bg-gray-50 rounded-xl p-3 mt-2">
                                <p className="text-sm font-bold text-primaryBlue mb-2 px-2">Idioma / 语言</p>
                                <div className="space-y-1">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                changeLanguage(lang.code);
                                                setMobileOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-3 py-2 px-3 text-sm rounded-lg transition-colors ${locale === lang.code ? 'bg-primaryBlue text-white font-semibold' : 'text-gray-700 hover:bg-white hover:text-primaryBlue'}`}
                                        >
                                            <span className="text-lg">{lang.flag}</span>
                                            <span>{lang.name}</span>
                                            {locale === lang.code && (
                                                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </nav>

                        {/* Footer del menu */}
                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
                                <a href={`tel:${t('Navigation.phone').replace(/\s/g, '')}`} className="hover:text-primaryBlue">
                                    {t('Navigation.phone')}
                                </a>
                                <a href={`mailto:${t('Navigation.email')}`} className="hover:text-primaryBlue">
                                    {t('Navigation.email')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DESKTOP: Header Original */}
            <div className="hidden md:block w-full h-fit bg-white border-b border-gray-100">
                <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3">
                    <div className="flex items-center">
                        <a href="/">
                            <Image
                                src="/LogoCompleto@4x.png"
                                width={600}
                                height={600}
                                alt="Logo Grupo Horizonte"
                                className="w-36 sm:w-36 h-auto object-contain cursor-pointer"
                            />
                        </a>
                    </div>

                    <div className="flex px-4 gap-4 items-center">
                        <p className="text-h4 cursor-pointer transition delay-100 hover:bg-primaryBlue hover:text-white py-2 px-4 rounded-3xl">
                            <a href="/">
                                {t('Navigation.home')}
                            </a>
                        </p>
                        <button
                            type="button"
                            className={`text-h4 cursor-pointer transition delay-100 py-2 px-4 rounded-3xl ${projectsOpen ? 'bg-primaryBlue text-white' : 'hover:bg-primaryBlue hover:text-white'}`}
                            onMouseEnter={() => setProjectsOpen?.(true)}
                            onFocus={() => setProjectsOpen?.(true)}
                            onClick={toggleProjects}
                            aria-haspopup="true"
                            aria-expanded={projectsOpen ?? false}
                        >
                            <a href="/proyectos">
                                {t('Navigation.projects')}
                            </a>
                        </button>

                        <div
                            className="relative"
                            onMouseEnter={() => setEmpresasDropdownOpen(true)}
                            onMouseLeave={() => setEmpresasDropdownOpen(false)}
                        >
                            <button
                                type="button"
                                className={`text-h4 cursor-pointer transition delay-100 py-2 px-4 rounded-3xl ${empresasDropdownOpen ? 'bg-primaryBlue text-white' : 'hover:bg-primaryBlue hover:text-white'}`}
                            >
                                {t('Navigation.companies')}
                            </button>

                            <div
                                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 transition-all duration-200 ${empresasDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                            >
                                {empresas.map((empresa, idx) => (
                                    <a
                                        key={idx}
                                        href={empresa.href}
                                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primaryBlue transition-colors text-base font-medium"
                                    >
                                        {empresa.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <button
                            type="button"
                            className={`text-h4 cursor-pointer transition delay-100 py-2 px-4 rounded-3xl ${enfoqueOpen ? 'bg-primaryBlue text-white' : 'hover:bg-primaryBlue hover:text-white'}`}
                            onMouseEnter={() => setEnfoqueOpen?.(true)}
                            onFocus={() => setEnfoqueOpen?.(true)}
                            onClick={toggleEnfoque}
                            aria-haspopup="true"
                            aria-expanded={enfoqueOpen ?? false}
                        >
                            <a href="/enfoque">
                                {t('Navigation.focus')}
                            </a>
                        </button>
                        <p className="text-h4 cursor-pointer transition delay-100 hover:bg-primaryBlue hover:text-white py-2 px-4 rounded-3xl">
                            <a href="/contacto">
                                {t('Navigation.contact')}
                            </a>
                        </p>

                        {/* Language Selector */}
                        <div
                            className="relative"
                            onMouseEnter={() => setLanguageDropdownOpen(true)}
                            onMouseLeave={() => setLanguageDropdownOpen(false)}
                        >
                            <button
                                type="button"
                                className={`flex items-center gap-2 text-h4 cursor-pointer transition delay-100 py-2 px-4 rounded-3xl ${languageDropdownOpen ? 'bg-primaryBlue text-white' : 'hover:bg-primaryBlue hover:text-white'}`}
                            >
                                <span className="text-xl">{languages.find(l => l.code === locale)?.flag}</span>
                                <span className="hidden lg:inline">{languages.find(l => l.code === locale)?.name}</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                className={`absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 transition-all duration-200 ${languageDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                            >
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => changeLanguage(lang.code)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${locale === lang.code ? 'bg-blue-50 text-primaryBlue font-semibold' : 'text-gray-700'}`}
                                    >
                                        <span className="text-xl">{lang.flag}</span>
                                        <span className="text-base">{lang.name}</span>
                                        {locale === lang.code && (
                                            <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}