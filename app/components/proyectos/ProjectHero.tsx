import BigButton from "@/app/components/bigButton";

export default function ProjectsHero() {
    return (
        <div className="relative min-h-[70vh] flex items-center justify-center bg-no-repeat bg-cover"
             style={{backgroundImage: "url(/obras1.jpg)"}}>
            <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
            <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
                <h1 className="text-h1 md:text-[4rem] lg:text-[5rem] text-white font-bold mb-6 leading-tight">
                    Construyendo<br className="hidden sm:block" /> el Futuro
                </h1>
                <p className="text-h3 md:text-[1.75rem] text-white mb-8 leading-relaxed">
                    Más de 40 años de experiencia en proyectos<br className="hidden sm:block" />
                    de infraestructura, energía renovable y construcción
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <a href={"#DESTACADOS"}>
                        <BigButton
                            textBefore="Ver Proyectos Destacados"
                            textAfter="Ver Proyectos Destacados"
                            textColor="white"
                            minWidth="280px"
                            maxWidth="320px"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}