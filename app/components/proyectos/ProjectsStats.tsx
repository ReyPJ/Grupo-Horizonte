export default function ProjectsStats() {
    const stats = [
        { number: "26+", label: "Proyectos Completados" },
        { number: "40+", label: "Años de Experiencia" },
        { number: "900+", label: "MW Instalados" },
        { number: "3", label: "Países" }
    ];

    return (
        <>
            <style jsx>{`
                .stat-card {
                    background: linear-gradient(135deg, rgba(0, 12, 71, 0.05), rgba(206, 211, 0, 0.05));
                    padding: 2rem;
                    border-radius: 1.5rem;
                    text-align: center;
                    border: 2px solid transparent;
                    transition: all 0.4s ease;
                }

                .stat-card:hover {
                    border-color: #CED300;
                    transform: translateY(-4px);
                    box-shadow: 0 12px 24px rgba(0, 12, 71, 0.1);
                }

                .stat-number {
                    font-size: 3rem;
                    font-weight: 800;
                    background: linear-gradient(135deg, #000C47, #0A8700);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin-bottom: 0.5rem;
                }

                .stat-label {
                    font-size: 1rem;
                    color: #000C47;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
            `}</style>

            <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-64 py-16 bg-white">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="stat-card" style={{animationDelay: `${idx * 0.1}s`}}>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}