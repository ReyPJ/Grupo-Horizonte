import BlogCarousel from "@/app/components/BlogCarousel";
import BigButton from "@/app/components/bigButton";
import CompanySlider from "@/app/components/CompanySlider";
import ProjectSlide from "@/app/components/ProyectsSlider";
import HeaderNav from "@/app/components/HeaderNav";
import Footer from "@/app/components/footer"
import Image from "next/image";
import * as React from "react";


export default function Home() {

    const companies = [
        {
            company: "Constructora 4C",
            logoUrl: "/4cSInfondoLogo.png",
            smallHistoryText: "Una empresa con más de 20 años guiando a nuestros clientes hacia el futuro.",
            smallHistoryText2: "Con experiencia en obras civiles, obras eléctricas, servicios especializados y proyectos fotovoltaicos.",
            buttonText: "Conoce a 4C",
            keyServices: ["Obras Civiles", "Obras Eléctricas", "Servicios Especializados", "Proyectos Fotovoltaicos"],
            image: "/Grua1.jpg",
            buttonMinWidth: "150px",
            buttonMaxWidth: "180px",
        },
        {
            company: "Nucleo Energy",
            logoUrl: "/LogoHorizontal@4x.png",
            smallHistoryText: "Núcleo Energy es una empresa joven dedicada a energias renovables.",
            smallHistoryText2: "Impulsando proyectos eólicos, solares y de almacenamiento, fabrica y suministra equipos para el sector y desarrolla infraestructura eléctrica",
            buttonText: "Conoce a Nucleo",
            keyServices: ["Energía Eólica y Fotovoltaica", 'Sistemas de Almacenamiento De Energía', "Manufactura y Suministro", "Infraestructura de Transmisión y Distribución"],
            image: "/fotovoltaic.jpg",
            buttonMinWidth: "180px",
            buttonMaxWidth: "220px",
        },
    ]

    const projects = [
        {
            title: "Secreteria de la Marina",
            country: "Mexico",
            backgroundImageUrl: "/Secretaria.jpg",
            description: "Proyecto: Construcción y equipamiento del Hospital Naval en PTO. Vallarta, Jalisco."
        },
        {
            title: "Pedido 8833 ABEN3T",
            country: "Mexico",
            backgroundImageUrl: "/pedido8833Aben3t.jpg",
            description: "LT 230 KV A3T-SE: Limpieza de vía E aisladores. Revisión FO y herrajes. Anti aves. Termografía en empalmes.\n" +
                "OS: Martpat-31000-LT-CFV-GSC-41"
        },
        {
            title: "Lineas de transmision electrica",
            country: "Mexico",
            backgroundImageUrl: "/LineasDeTransmisionElectrica.jpg",
            description: "Montaje: estructura metálica galvanizada para torres auto soportadas (400 KV) en LT Puerto Peñasco - Golfo de Santa Clara. "
        },
        {
            title: "Rehabilitación de subestación electrica",
            country: "Peru",
            backgroundImageUrl: "/RehabilatacionSubestacionesPeru.jpg",
            description: "Modernización SE Lima y Cusco: Diseño y obras electro-mecánicas/civiles para luz del sur (subcontrato electro Sur Este). "
        },
    ]

    return (
        <div className={"w-full min-h-dvh"}>
            <HeaderNav />
            <div className="bg-no-repeat bg-cover min-h-dvh" style={{backgroundImage: "url(/panelesfondo2.jpg)"}}>
                <div className={"flex flex-col lg:flex-row items-center justify-center p-6 sm:p-10 lg:p-24 w-full min-h-dvh gap-8 lg:gap-0"}>
                    <div className={"flex flex-col items-center justify-center w-full lg:w-1/2 min-h-[40vh] lg:min-h-dvh"}>
                        <h1 className={"text-h1 text-center text-white"}>
                            Impulsando el futuro.<br className="hidden sm:block" />
                            Para lo que viene<br className="hidden sm:block" /> en el horizonte.
                        </h1>
                        <h3 className={"text-h3 text-white text-center mt-4"}>
                            Nuestro compromiso es abrir camino<br className="hidden sm:block" />{" "} hacia un futuro mejor, para que<br className="hidden sm:block" />{" "} estamos listo
                            para el futuro que cada vez<br className="hidden sm:block" />{" "} esta mas cerca.
                        </h3>
                    </div>
                    <div className={"w-full lg:w-1/2 flex justify-center"}>
                        <BlogCarousel />
                    </div>
                </div>
            </div>
            <div className={"flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 py-12 lg:py-20 gap-8 lg:gap-16 justify-center items-center"}>
                <div className={"flex flex-col w-full lg:w-1/2 gap-4"}>
                    <h3 className={"text-h3 sm:text-h2 leading-tight"}>
                        Equipos extraordinarios<br className="hidden sm:block" />{" "}
                        Construyendo proyecto<br className="hidden sm:block" />{" "}
                        Que impulsan hacia el futuro
                    </h3>
                    <p className={"text-p"}>
                        Ofrecemos proyectos únicos que mejoran la calidad de vida, <br className="hidden sm:block" />{" "}
                        fomentamos la innovación y el desarrollo con<br className="hidden sm:block" />{" "}
                        soluciones integrales, con empresas con más de<br className="hidden sm:block" />{" "}
                        20 años de experiencia impulsando al mundo<br className="hidden sm:block" />{" "}
                        hacia el futuro, comprometidos con la calidad y la<br className="hidden sm:block" />{" "}
                        sostenibilidad de cada proyecto.
                    </p>
                    <p className={"text-p"}>
                        Desde el sector de la construcción, ingeniería<br className="hidden sm:block" />{" "}
                        mecánica, civil, fotovoltaica, eléctrica, así como el<br className="hidden sm:block" />{" "}
                        desarrollo de proyectos eólicos, plantas solares,<br className="hidden sm:block" />{" "}
                        sistemas de autoconsumo para uso industrial<br className="hidden sm:block" />{" "}
                        comercial y residencial.
                    </p>
                    <p className={"text-p"}>
                        Desarrollamos infraestructura y energía de alta,<br className="hidden sm:block" />{" "}
                        calidad, con gran compromiso con la<br className="hidden sm:block" />{" "}
                        eficiencia, innovación y seguridad.
                    </p>
                    <BigButton textAfter={"Misión, Visión y Valores"} textBefore={"Misión, Visión y Valores"}
                               textColor={"black"}
                               minWidth={"200px"}
                               maxWidth={"280px"} />
                </div>
                <div className={"flex flex-col w-full lg:w-1/2 items-center"}>
                    <Image src={"/turbinas_4c_nucleologo.jpg"} width={1200} height={1200}
                           alt={"Turbina eolica con logos de 4c y Nucleo Energy"}
                           className={"w-full max-w-[540px] h-[420px] sm:h-[560px] lg:h-[700px] object-cover rounded-4xl"}
                    />
                </div>
            </div>
            <div className="bg-no-repeat bg-cover min-h-dvh relative" style={{backgroundImage: "url(/obras1.jpg)"}}>
                <div className={"absolute inset-0 bg-black opacity-40 z-0"}></div>
                <div className={"flex flex-col lg:flex-row items-center justify-center p-6 sm:p-10 lg:p-24 w-full min-h-dvh gap-8 lg:gap-0"}>
                    <div className={"flex flex-col items-center justify-center w-full lg:w-1/2 min-h-[40vh] lg:min-h-dvh z-20"}>
                        <h2 className={"text-h1 text-center text-white"}>
                            Definidos por la calidad{" "}<br className="hidden sm:block" />
                            de nuestro gran equipo.
                        </h2>
                        <BigButton textAfter={"Nuestras empresas"} textBefore={"Nuestras empresas"}
                                   textColor={"white"} minWidth={"230px"} maxWidth={"260px"} />
                    </div>
                    <div className={"w-full lg:w-1/2 flex justify-center z-20"}>
                        <p className={"text-p text-white text-center lg:text-left"}>
                            Nuestro equipo aporta su excelencia técnica, ingenio,<br className="hidden sm:block" />{" "}
                            empuje, creatividad y experiencia para ayudar a nuestros<br className="hidden sm:block" />{" "}
                            clientes a lograr sus visiones audaces. Tenemos éxito a<br className="hidden sm:block" />{" "}
                            través de la asociación y el deseo compartido de marcar<br className="hidden sm:block" />{" "}
                            la diferencia. Motivados por los desafíos en el horizonte<br className="hidden sm:block" />{" "}
                            superamos todos los límites posibles.
                        </p>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 py-12 lg:py-20 justify-center items-center"}>
                <div className={"w-2/3 md:w-1/2 lg:w-1/3 bg-secundaryYellow h-1 mt-2 mb-2"}></div>
                <h3 className={"text-primaryBlue text-h1 text-center"}>
                    Nuestras Empresas
                </h3>
            </div>
            <div className={"flex px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 py-4 justify-center items-center"}>
                <CompanySlider companies={companies} />
            </div>
            <div className="bg-no-repeat bg-cover min-h-dvh relative" style={{backgroundImage: "url(/eolico2.jpg)"}}>
                <div className={"absolute inset-0 bg-black opacity-50 z-0"}></div>
                <div className={"flex flex-col lg:flex-row items-center justify-center p-6 sm:p-10 lg:p-24 w-full min-h-dvh gap-8 lg:gap-0"}>
                    <div className={"flex flex-col items-center justify-center w-full lg:w-1/2 min-h-[40vh] lg:min-h-dvh z-20"}>
                        <h2 className={"text-h1 text-center text-white"}>
                            Definidos por la calidad{" "}<br className="hidden sm:block" />
                            de nuestro gran equipo.
                        </h2>
                        <BigButton textAfter={"Nuestro equipo"} textBefore={"Nuestro equipo"}
                                   textColor={"white"} minWidth={"200px"} maxWidth={"240px"} />
                    </div>
                    <div className={"w-full lg:w-1/2 flex justify-center z-20"}>
                        <p className={"text-p text-white text-center lg:text-left"}>
                            La integridad, innovación y una mentalidad de “nunca<br className="hidden sm:block" />{" "}conformarse” están en el centro de
                            todo
                            lo que hacemos.<br className="hidden sm:block" />{" "}
                            Nuestro equipo esta lleno de pensadores audaces y<br className="hidden sm:block" />{" "}hábiles solucionadores de problemas
                            que
                            convierten los<br className="hidden sm:block" />{" "}desafíos en oportunidades para lograr lo extraordinario.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className={"flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 pt-16 md:pt-24 lg:pt-40 justify-center items-center gap-8"}>
                    <div className={"flex flex-col w-full lg:w-1/2 items-center lg:items-start text-center lg:text-left"}>
                        <h2 className={"text-h1 text-black"}>
                            Nosotros<br className="hidden sm:block" /> Construimos Historia
                        </h2>
                        <BigButton textAfter={"Todos los Proyectos"} textBefore={"Todos los Proyectos"}
                                   textColor={"black"} minWidth={"200px"} maxWidth={"240px"} />
                    </div>
                    <div className={"w-full lg:w-1/2 flex justify-center"}>
                        <p className={"text-p text-black text-center lg:text-left"}>
                            La historia desde inicios del siglo y para los siguientes siglos estará determinada por la
                            capacidad del mundo para trabajar rápido y en gran escala para satisfacer necesidades en una
                            pronta evolución de infraestructura, energía, manufactura avanzada, recursos críticos,
                            protección ambiental y seguridad nacional.<br className="hidden sm:block" /><br className="hidden sm:block" />{" "}Durante muchos años hemos estado siempre a la
                            altura de las circunstancias. Tenemos la experiencia y los conocimientos, y estamos
                            diseñados específicamente para afrontar todos estos desafíos que se asoman desde el
                            horizonte.
                        </p>
                    </div>
                </div>
                <div className={"pb-20 flex flex-col gap-12 pt-16 md:pt-24 lg:pt-40"}>
                    <div className={"flex flex-col w-full px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64"}>
                        <h2 className={"text-h1"}>Proyectos Destacados</h2>
                    </div>
                    <ProjectSlide projects={projects} />
                    <div className={"flex justify-center"}>
                        <div className={"w-3/4 bg-thirdGreen h-[5px] rounded-xl mt-2 mb-2"}></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
