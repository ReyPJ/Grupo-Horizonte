import Image from "next/image";
import * as React from "react";

export default function HeaderNav() {
    return (
        <div className="flex justify-between w-full h-fit bg-white">
            <div className={"px-10 flex items-center"}>
                <Image
                    src="/LogoCompleto@4x.png"
                    width={400}
                    height={400}
                    alt="Logo Grupo Horizonte"
                    className="w-32 h-auto object-contain"
                />
            </div>
            <div className={"px-10 gap-2 flex items-center"}>
                <p className={"text-h3 cursor-pointer transition delay-100 hover:bg-primaryBlue hover:text-white py-2 px-4 rounded-3xl"}>
                    Inicio
                </p>
                <p className={"text-h3 cursor-pointer transition delay-100 hover:bg-primaryBlue hover:text-white py-2 px-4 rounded-3xl"}>
                    Proyectos
                </p>
                <p className={"text-h3 cursor-pointer transition delay-100 hover:bg-primaryBlue hover:text-white py-2 px-4 rounded-3xl"}>
                    Empresas
                </p>
                <p className={"text-h3 cursor-pointer transition delay-100 hover:bg-primaryBlue hover:text-white py-2 px-4 rounded-3xl"}>
                    Enfoque
                </p>
                <p className={"text-h3 cursor-pointer transition delay-100 hover:bg-primaryBlue hover:text-white py-2 px-4 rounded-3xl"}>
                    Contacto
                </p>
            </div>
        </div>
    )
}