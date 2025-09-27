import BlogCarousel from "@/app/components/BlogCarousel";

export default function Home() {
  return (
    <div className={"w-full min-h-dvh"}>
        <div className="bg-no-repeat bg-cover min-h-dvh" style={{backgroundImage:"url(/panelesfondo2.jpg)"}}>
            <div className={"flex items-center justify-center p-24 w-full h-dvh"}>
                <div className={"flex flex-col items-center justify-center w-1/2 h-dvh"}>
                    <h1 className={"text-h1 text-white"}>
                        Impulsando el futuro.
                    </h1>
                    <h1 className={"text-h1 text-white text-center"}>
                        Para lo que viene<br /> en el horizonte.
                    </h1>
                    <h3 className={"text-h3 text-white text-center"}>
                        Nuestro compromiso es abrir camino<br /> hacia un futuro mejor, para que<br /> estamos listo para el futuro que cada vez<br /> esta mas cerca.
                    </h3>
                </div>
                <div className={"w-1/2 flex justify-center"}>
                    <BlogCarousel />
                </div>
            </div>
        </div>
    </div>
  );
}
