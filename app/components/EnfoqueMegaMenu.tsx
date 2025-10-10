import * as React from "react";
import BigButton from "@/app/components/bigButton";
import Image from "next/image";
import { FaRocket, FaEye, FaLeaf, FaStar, FaHeart, FaUsers, FaChartLine, FaHandshake } from "react-icons/fa";

export default function EnfoqueMegaMenu() {
    const [activeTab, setActiveTab] = React.useState<'cultura' | 'proceso'>('cultura');

    const valores = [
        { key: 'innovacion', title: 'Innovación', icon: FaLeaf },
        { key: 'sostenibilidad', title: 'Sostenibilidad', icon: FaStar },
        { key: 'calidad', title: 'Calidad', icon: FaHeart },
        { key: 'responsabilidad', title: 'Responsabilidad Social', icon: FaUsers }
    ];

    const capacidades = [
        { key: 'equipo', title: 'Nuestro Equipo', icon: FaUsers },
        { key: 'proceso', title: 'Cómo Trabajamos', icon: FaChartLine },
        { key: 'sostenibilidad', title: 'Compromiso Ambiental', icon: FaLeaf },
        { key: 'alianzas', title: 'Alianzas Estratégicas', icon: FaHandshake }
    ];

    return (
        <div className="w-full py-6 px-6 md:px-12 lg:px-20 bg-white">
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left column: intro + highlights */}
                <div className="w-full lg:w-1/3 lg:pr-10 lg:border-r lg:border-gray-200">
                    <div className="flex flex-col gap-6 lg:gap-10">
                        <h3 className="text-h3 text-primaryBlue">Nuestro Enfoque</h3>
                        <p className="text-p text-gray-700 leading-relaxed">
                            Más de 40 años construyendo el futuro con innovación, calidad
                            y compromiso inquebrantable. Descubre los valores y principios
                            que guían cada uno de nuestros proyectos.
                        </p>
                        <a href={"/enfoque"}>
                            <BigButton
                                textBefore="Conoce Más"
                                textAfter="Conoce Más"
                                minWidth="200px"
                                maxWidth="240px"
                            />
                        </a>
                    </div>

                    {/* Mission & Vision Cards */}
                    <div className="flex flex-col gap-4 mt-8">
                        <div className="bg-gradient-to-br from-primaryBlue/5 to-thirdGreen/5 p-6 rounded-2xl border-l-4 border-primaryBlue hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <FaRocket className="w-6 h-6 text-primaryBlue" />
                                <h4 className="font-bold text-primaryBlue">Misión</h4>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Ser líderes en la industria implementando soluciones sustentables e innovadoras
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-thirdGreen/5 to-secundaryYellow/5 p-6 rounded-2xl border-l-4 border-thirdGreen hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <FaEye className="w-6 h-6 text-thirdGreen" />
                                <h4 className="font-bold text-thirdGreen">Visión</h4>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Ser el referente líder en infraestructuras, energías renovables y servicios especializados
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right column: tabs */}
                <div className="w-full lg:w-2/3 lg:pl-10">
                    <div className="flex items-center gap-8 border-b border-gray-200">
                        <button
                            className={`${activeTab === 'cultura' ? 'text-primaryBlue border-primaryBlue' : 'text-gray-500 border-transparent'} uppercase tracking-widest text-[13px] py-4 border-b-2 transition-colors duration-300`}
                            onClick={() => setActiveTab('cultura')}
                        >
                            Cultura y Valores
                        </button>
                        <button
                            className={`${activeTab === 'proceso' ? 'text-primaryBlue border-primaryBlue' : 'text-gray-500 border-transparent'} uppercase tracking-widest text-[13px] py-4 border-b-2 transition-colors duration-300`}
                            onClick={() => setActiveTab('proceso')}
                        >
                            Capacidades
                        </button>
                    </div>

                    <div className="pt-6">
                        {activeTab === 'cultura' && (
                            <div>
                                <h4 className="text-xl font-bold text-primaryBlue mb-6">Nuestros Valores</h4>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                    {valores.map((valor) => (
                                        <div key={valor.key} className="group cursor-pointer flex flex-col items-center text-center">
                                            <div className="w-20 h-20 bg-gradient-to-br from-primaryBlue to-thirdGreen rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                                <valor.icon className="w-10 h-10 text-white" />
                                            </div>
                                            <p className="text-sm font-semibold text-gray-900 group-hover:text-primaryBlue transition-colors">
                                                {valor.title}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Team Section */}
                                <div className="mt-10 bg-bgMain rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-secundaryYellow to-thirdGreen rounded-xl flex items-center justify-center flex-shrink-0">
                                            <FaUsers className="w-6 h-6 text-primaryBlue" />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-primaryBlue mb-2">Nuestro Equipo</h5>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                Más de 500 profesionales dedicados a la excelencia, con ingenieros
                                                certificados y expertos en cada área de especialización.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'proceso' && (
                            <div>
                                <h4 className="text-xl font-bold text-primaryBlue mb-6">Nuestras Capacidades</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {capacidades.map((cap) => (
                                        <div
                                            key={cap.key}
                                            className="group cursor-pointer bg-bgMain hover:bg-white p-6 rounded-2xl transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-secundaryYellow"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-thirdGreen to-secundaryYellow rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <cap.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <h5 className="font-bold text-primaryBlue mb-2 group-hover:text-thirdGreen transition-colors">
                                                        {cap.title}
                                                    </h5>
                                                    <p className="text-sm text-gray-600">
                                                        {cap.key === 'equipo' && 'Profesionales dedicados a la excelencia'}
                                                        {cap.key === 'proceso' && 'Metodologías probadas y eficientes'}
                                                        {cap.key === 'sostenibilidad' && 'Responsabilidad ambiental integral'}
                                                        {cap.key === 'alianzas' && 'Colaboraciones estratégicas globales'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Stats Section */}
                                <div className="mt-10 grid grid-cols-4 gap-4">
                                    {[
                                        { number: '20+', label: 'Años' },
                                        { number: '500+', label: 'Profesionales' },
                                        { number: '3', label: 'Países' },
                                        { number: '100%', label: 'Compromiso' }
                                    ].map((stat, index) => (
                                        <div key={index} className="text-center p-4 bg-gradient-to-br from-primaryBlue/5 to-thirdGreen/5 rounded-xl">
                                            <div className="text-2xl font-bold text-primaryBlue mb-1">
                                                {stat.number}
                                            </div>
                                            <div className="text-xs text-gray-600 uppercase tracking-wide">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}