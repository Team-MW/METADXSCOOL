import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export default function Bac2Catalogue() {
    const formations = [
        {
            title: "TITRE PROFESSIONNEL",
            subtitle: "NÉGOCIATEUR TECHNICO-COMMERCIAL",
            level: "NIVEAU 5 - BAC+2",
            path: "/cfa/formation/tp-ntc",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "TITRE PROFESSIONNEL",
            subtitle: "RESPONSABLE DE PETITE OU MOYENNE STRUCTURE",
            level: "NIVEAU 5 - BAC+2",
            path: "/cfa/formation/tp-rpms",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "TITRE PROFESSIONNEL",
            subtitle: "MANAGER D'UNITÉ MARCHANDE",
            level: "NIVEAU 5 - BAC+2",
            path: "/cfa/formation/tp-mum",
            image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Formations Niveau Bac+2 | Meta DX School</title>
                <meta name="description" content="Découvrez nos titres professionnels de niveau Bac+2 (Niveau 5) accessibles en alternance ou e-learning." />
            </Helmet>

            <style>{`
                .catalogue-page {
                    background: linear-gradient(135deg, #1c1e4c 0%, #312e81 100%);
                    min-height: 100vh;
                    padding: 8rem 2rem 6rem;
                    color: white;
                    font-family: 'Inter', sans-serif;
                }

                .catalogue-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .section-header {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    margin-bottom: 4rem;
                }

                .section-title {
                    font-size: 2.5rem;
                    font-weight: 900;
                    text-transform: uppercase;
                    margin: 0;
                    letter-spacing: -0.02em;
                }

                .star-icon {
                    color: #ef9a37;
                    width: 48px;
                    height: 48px;
                    filter: drop-shadow(0 0 10px rgba(239, 154, 55, 0.4));
                }

                .formations-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 2.5rem;
                }

                .formation-card {
                    position: relative;
                    height: 450px;
                    border-radius: 24px;
                    overflow: hidden;
                    text-decoration: none;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                }

                .formation-card:hover {
                    transform: translateY(-10px) scale(1.02);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                }

                .card-bg {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background-size: cover;
                    background-position: center;
                    transition: transform 0.6s;
                }

                .formation-card:hover .card-bg {
                    transform: scale(1.1);
                }

                .card-overlay {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: linear-gradient(to bottom, 
                        rgba(124, 58, 237, 0.4) 0%, 
                        rgba(236, 72, 153, 0.4) 50%, 
                        rgba(255, 255, 255, 0.95) 100%
                    );
                    z-index: 1;
                }

                .card-content {
                    position: absolute;
                    bottom: 0; left: 0; width: 100%;
                    padding: 2.5rem;
                    z-index: 2;
                    text-align: center;
                    color: #1c1e4c;
                }

                .card-title {
                    font-size: 1.1rem;
                    font-weight: 900;
                    margin-bottom: 0.25rem;
                    text-transform: uppercase;
                }

                .card-subtitle {
                    font-size: 0.95rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    color: #4c1d95;
                    text-transform: uppercase;
                }

                .card-level {
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: #6b7280;
                    text-transform: uppercase;
                }

                @media (max-width: 768px) {
                    .section-title { font-size: 1.8rem; }
                    .formations-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <div className="catalogue-page">
                <div className="catalogue-container">
                    <div className="section-header">
                        <GraduationCap className="star-icon" />
                        <h1 className="section-title">NOS FORMATIONS NIVEAU BAC+2</h1>
                    </div>

                    <div className="formations-grid">
                        {formations.map((f, i) => (
                            <Link key={i} to={f.path} className="formation-card">
                                <div className="card-bg" style={{ backgroundImage: `url(${f.image})` }}></div>
                                <div className="card-overlay"></div>
                                <div className="card-content">
                                    <h2 className="card-title">{f.title}</h2>
                                    <p className="card-subtitle">{f.subtitle}</p>
                                    <span className="card-level">{f.level}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
