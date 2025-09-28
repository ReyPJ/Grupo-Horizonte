import BlogCarousel from "@/app/components/BlogCarousel";
import BigButton from "@/app/components/bigButton";
import CompanySlider from "@/app/components/CompanySlider";
import Image from "next/image";


export default function Home() {

    const companies = [
        {
            company: "Constructora 4C",
            logoUrl: "/4cSInfondoLogo.png",
            smallHistoryText: "Una empresa con más de 20 años guiando a nuestros clientes hacia el futuro. Con experiencia en obras civiles, obras eléctricas, servicios especializados y proyectos fotovoltaicos.",
            buttonText: "Conoce a 4C",
            keyServices: ["Obras Civiles", "Obras Eléctricas", "Servicios Especializados", "Proyectos Fotovoltaicos"],
            image: "/Grua1.jpg"
        },
        {
            company: "Constructora XX",
            logoUrl: "/4cSInfondoLogo.png",
            smallHistoryText: "Una empresa con más de 20 años guiando a nuestros clientes hacia el futuro. Con experiencia en obras civiles, obras eléctricas, servicios especializados y proyectos fotovoltaicos.",
            buttonText: "Conoce a 4C",
            keyServices: ["Obras Civiles", "Obras Eléctricas", "Servicios Especializados", "Proyectos Fotovoltaicos"],
            image: "/Grua1.jpg"
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
            <div className={"w-full min-h-dvh p-64"}>
                <CompanySlider companies={companies} />
            </div>
        </div>
    );
}
