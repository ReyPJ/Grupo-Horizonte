import BlogCarousel from "@/app/components/BlogCarousel";
import BigButton from "@/app/components/bigButton";
import CompanySlider from "@/app/components/CompanySlider";
import ProjectSlide from "@/app/components/ProyectsSlider";
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
            <div className="bg-no-repeat bg-cover min-h-dvh" style={{backgroundImage: "url(/panelesfondo2.jpg)"}}>
                <div className={"flex items-center justify-center p-24 w-full h-dvh"}>
                    <div className={"flex flex-col items-center justify-center w-1/2 h-dvh"}>
                        <h1 className={"text-h1 text-center text-white"}>
                            Impulsando el futuro.<br />
                            Para lo que viene<br /> en el horizonte.
                        </h1>
                        <h3 className={"text-h3 text-white text-center"}>
                            Nuestro compromiso es abrir camino<br /> hacia un futuro mejor, para que<br /> estamos listo
                            para el futuro que cada vez<br /> esta mas cerca.
                        </h3>
                    </div>
                    <div className={"w-1/2 flex justify-center"}>
                        <BlogCarousel />
                    </div>
                </div>
            </div>
            <div className={"flex px-64 py-20 gap-40 justify-center items-center"}>
                <div className={"flex flex-col w-1/2 gap-4"}>
                    <h3 className={"text-h2"}>
                        Equipos extraordinarios<br />
                        Construyendo proyecto<br />
                        Que impulsan hacia el futuro
                    </h3>
                    <p className={"text-p"}>
                        Ofrecemos proyectos únicos que mejoran la calidad de vida, <br />
                        fomentamos la innovación y el desarrollo con<br />
                        soluciones integrales, con empresas con más de<br />
                        20 años de experiencia impulsando al mundo<br />
                        hacia el futuro, comprometidos con la calidad y la<br />
                        sostenibilidad de cada proyecto.
                    </p>
                    <p className={"text-p"}>
                        Desde el sector de la construcción, ingeniería<br />
                        mecánica, civil, fotovoltaica, eléctrica, así como el<br />
                        desarrollo de proyectos eólicos, plantas solares,<br />
                        sistemas de autoconsumo para uso industrial<br />
                        comercial y residencial.
                    </p>
                    <p className={"text-p"}>
                        Desarrollamos infraestructura y energía de alta,<br />
                        calidad, con gran compromiso con la<br />
                        eficiencia, innovación y seguridad.
                    </p>
                    <BigButton textAfter={"Misión, Visión y Valores"} textBefore={"Misión, Visión y Valores"}
                               textColor={"black"}
                               minWidth={"200px"}
                               maxWidth={"280px"} />
                </div>
                <div className={"flex flex-col w-1/2"}>
                    <Image src={"/turbinas_4c_nucleologo.jpg"} width={1200} height={1200}
                           alt={"Turbina eolica con logos de 4c y Nucleo Energy"}
                           className={"w-[540px] h-[700px] rounded-4xl"}
                    />


                </div>
            </div>
            <div className="bg-no-repeat bg-cover min-h-dvh relative" style={{backgroundImage: "url(/obras1.jpg)"}}>
                <div className={"absolute inset-0 bg-black opacity-40 z-0"}></div>
                <div className={"flex items-center justify-center p-24 w-full h-dvh"}>
                    <div className={"flex flex-col items-center justify-center w-1/2 h-dvh z-20"}>
                        <h2 className={"text-h1 text-center text-white"}>
                            Definidos por la calidad<br />
                            de nuestro gran equipo.
                        </h2>
                        <BigButton textAfter={"Nuestras empresas"} textBefore={"Nuestras empresas"}
                                   textColor={"white"} minWidth={"230px"} maxWidth={"260px"} />
                    </div>
                    <div className={"w-1/2 flex justify-center z-20"}>
                        <p className={"text-p text-white"}>
                            Nuestro equipo aporta su excelencia técnica, ingenio,<br />
                            empuje, creatividad y experiencia para ayudar a nuestros<br />
                            clientes a lograr sus visiones audaces. Tenemos éxito a<br />
                            través de la asociación y el deseo compartido de marcar<br />
                            la diferencia. Motivados por los desafíos en el horizonte<br />
                            superamos todos los límites posibles.
                        </p>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col px-64 py-20 justify-center items-center"}>
                <div className={"w-1/2 bg-secundaryYellow h-1 mt-2 mb-2"}></div>
                <h3 className={"text-primaryBlue text-h1"}>
                    Nuestras Empresas
                </h3>
            </div>
            <div className={"flex px-64 py-4 justify-center items-center"}>
                <CompanySlider companies={companies} />
            </div>
            <div className="bg-no-repeat bg-cover min-h-dvh relative" style={{backgroundImage: "url(/eolico2.jpg)"}}>
                <div className={"absolute inset-0 bg-black opacity-50 z-0"}></div>
                <div className={"flex items-center justify-center p-24 w-full h-dvh"}>
                    <div className={"flex flex-col items-center justify-center w-1/2 h-dvh z-20"}>
                        <h2 className={"text-h1 text-center text-white"}>
                            Definidos por la calidad<br />
                            de nuestro gran equipo.
                        </h2>
                        <BigButton textAfter={"Nuestro equipo"} textBefore={"Nuestro equipo"}
                                   textColor={"white"} minWidth={"200px"} maxWidth={"240px"} />
                    </div>
                    <div className={"w-1/2 flex justify-center z-20"}>
                        <p className={"text-p text-white"}>
                            La integridad, innovación y una mentalidad de “nunca<br />conformarse” están en el centro de
                            todo
                            lo que hacemos.<br />
                            Nuestro equipo esta lleno de pensadores audaces y<br /> hábiles solucionadores de problemas
                            que
                            convierten los<br /> desafíos en oportunidades para lograr lo extraordinario.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className={"flex px-64 pt-40 justify-center items-center"}>
                    <div className={"flex flex-col w-1/2"}>
                        <h2 className={"text-h1 text-start text-black"}>
                            Nosotros<br />Construimos Historia
                        </h2>
                        <BigButton textAfter={"Todos los Proyectos"} textBefore={"Todos los Proyectos"}
                                   textColor={"black"} minWidth={"200px"} maxWidth={"240px"} />
                    </div>
                    <div className={"w-1/2 flex justify-center"}>
                        <p className={"text-p text-black"}>
                            La historia desde inicios del siglo y para los siguientes siglos estará determinada por la
                            capacidad del mundo para trabajar rápido y en gran escala para satisfacer necesidades en una
                            pronta evolución de infraestructura, energía, manufactura avanzada, recursos críticos,
                            protección ambiental y seguridad nacional.<br /><br /> Durante muchos años hemos estado siempre a la
                            altura de las circunstancias. Tenemos la experiencia y los conocimientos, y estamos
                            diseñados específicamente para afrontar todos estos desafíos que se asoman desde el
                            horizonte.
                        </p>
                    </div>
                </div>
                <div className={"pb-20 flex justify-end pt-40"}>
                    <ProjectSlide projects={projects} />
                </div>
            </div>
        </div>
    );
}
