export default function ContactMap() {
    return (
        <>
            <style jsx>{`
                .map-container {
                    position: relative;
                    overflow: hidden;
                }

                .map-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(180deg, 
                        rgba(0, 12, 71, 0.1) 0%,
                        transparent 20%,
                        transparent 80%,
                        rgba(0, 12, 71, 0.1) 100%
                    );
                    pointer-events: none;
                    z-index: 1;
                }

                .map-iframe {
                    filter: grayscale(100%);
                    transition: filter 0.5s ease;
                }

                .map-container:hover .map-iframe {
                    filter: grayscale(0%);
                }

                .map-badge {
                    backdrop-filter: blur(10px);
                    animation: slideInFromLeft 0.8s ease-out;
                }

                @keyframes slideInFromLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>

            <div className="map-container relative h-[500px] lg:h-[600px]">
                <div className="map-overlay"></div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6254937347897!2d-99.11234248509312!3d19.432671886896556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sJard%C3%ADn%20Balbuena%2C%20Venustiano%20Carranza%2C%2015900%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="map-iframe"
                ></iframe>

                {/* Location Badge */}
                <div className="map-badge absolute bottom-8 left-4 sm:left-8 lg:left-16 bg-white/95 rounded-2xl p-6 shadow-2xl max-w-md z-10">
                    <h3 className="text-2xl font-bold text-primaryBlue mb-3">
                        Nuestras Oficinas
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        <strong>RET 1 Cecilio Robelo No. 66</strong><br />
                        Jardín Balbuena, Venustiano Carranza<br />
                        Ciudad de México, CP 15900
                    </p>
                    <a
                        href="https://maps.google.com/?q=Jardín+Balbuena+Venustiano+Carranza+15900+CDMX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 bg-primaryBlue text-white px-6 py-3 rounded-full font-semibold hover:bg-secundaryYellow hover:text-primaryBlue transition-all duration-300"
                    >
                        Abrir en Maps
                    </a>
                </div>
            </div>
        </>
    );
}