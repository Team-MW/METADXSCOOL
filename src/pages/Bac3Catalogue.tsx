import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, CheckCircle2, Clock, Users, BookOpen } from 'lucide-react';

export default function Bac3Catalogue() {
    const formations = [
        {
            title: "BACHELOR RESPONSABLE DES AFFAIRES",
            subtitle: "Responsable des Affaires (B-RDA)",
            description: "Pilotez le développement commercial et stratégique d'un centre de profit. Maîtrisez la gestion financière, le marketing d'affaires et le management d'équipes.",
            level: "Bac+3 • Niveau 6",
            duration: "12 Mois",
            rhythm: "Alternance ou Initial",
            path: "/cfa/formation/b-rda",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "TP RESPONSABLE D'ÉTABLISSEMENT MARCHAND",
            subtitle: "Responsable d'Établissement Marchand (TP-REM)",
            description: "Pilotez la stratégie commerciale, optimisez la performance financière et animez les équipes d'un point de vente ou d'une unité marchande d'envergure.",
            level: "Bac+3 • Niveau 6",
            duration: "12 Mois",
            rhythm: "Alternance ou Initial",
            path: "/cfa/formation/tp-rem",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Formations Niveau Bac+3 | Meta DX School</title>
                <meta name="description" content="Découvrez nos Bachelors de niveau Bac+3 (Niveau 6) accessibles en alternance ou e-learning. Boostez vos compétences managériales avec Meta DX School." />
            </Helmet>

            <style>{`
                .catalogue-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    padding: 9rem 2rem 8rem;
                    color: #1e293b;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    position: relative;
                    overflow: hidden;
                }

                /* BACKGROUND GLOWS */
                .glow-sphere {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(140px);
                    z-index: 1;
                    pointer-events: none;
                    opacity: 0.45;
                }
                .glow-1 {
                    top: -10%;
                    left: 10%;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%);
                }
                .glow-2 {
                    bottom: 10%;
                    right: -5%;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(239, 154, 55, 0.08) 0%, transparent 70%);
                }

                .catalogue-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 10;
                }

                /* HERO HEADER */
                .hero-section {
                    text-align: center;
                    margin-bottom: 5rem;
                    position: relative;
                }

                .top-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(124, 58, 237, 0.06);
                    border: 1px solid rgba(124, 58, 237, 0.18);
                    color: #7c3aed;
                    padding: 0.6rem 1.5rem;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 750;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    margin-bottom: 2rem;
                    animation: float 3s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-4px); }
                }

                .hero-title {
                    font-size: 3.5rem;
                    font-weight: 900;
                    line-height: 1.15;
                    letter-spacing: -0.03em;
                    margin-bottom: 1.5rem;
                    background: linear-gradient(135deg, #1e1b4b 30%, #7c3aed 70%, #ef9a37 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .hero-subtitle {
                    font-size: 1.2rem;
                    color: #475569;
                    max-width: 750px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                /* STATS BAR */
                .stats-bar {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    max-width: 950px;
                    margin: 0 auto 5rem;
                    background: rgba(255, 255, 255, 0.7);
                    border: 1px solid rgba(226, 232, 240, 0.8);
                    backdrop-filter: blur(12px);
                    padding: 1.5rem;
                    border-radius: 24px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
                }

                .stat-item {
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;
                    justify-content: center;
                    padding: 0.5rem 1.5rem;
                }

                .stat-item:not(:last-child) {
                    border-right: 1px solid rgba(226, 232, 240, 0.8);
                }

                .stat-icon-wrapper {
                    width: 48px;
                    height: 48px;
                    background: rgba(239, 154, 55, 0.1);
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ef9a37;
                }

                .stat-info {
                    text-align: left;
                }

                .stat-value {
                    display: block;
                    font-size: 1.25rem;
                    font-weight: 850;
                    color: #1c1e4c;
                    line-height: 1.2;
                }

                .stat-label {
                    font-size: 0.8rem;
                    color: #64748b;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                /* FORMATIONS GRID */
                .formations-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
                    gap: 3rem;
                }

                .formation-card {
                    background: rgba(255, 255, 255, 0.75);
                    border: 1px solid rgba(226, 232, 240, 0.8);
                    border-radius: 28px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    height: 540px;
                    text-decoration: none;
                    position: relative;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.03);
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                .formation-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(124, 58, 237, 0.25);
                    box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.08), 0 0 40px rgba(124, 58, 237, 0.06);
                }

                .card-media {
                    height: 240px;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                }

                .card-image {
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                .formation-card:hover .card-image {
                    transform: scale(1.06);
                }

                .media-overlay {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, transparent 100%);
                }

                .card-badge {
                    position: absolute;
                    top: 1.5rem;
                    left: 1.5rem;
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    color: #e67e22;
                    padding: 0.45rem 1.1rem;
                    border-radius: 30px;
                    font-size: 0.75rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .card-body {
                    padding: 2.2rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .card-info-header {
                    margin-bottom: 1.25rem;
                }

                .card-main-title {
                    font-size: 1.3rem;
                    font-weight: 900;
                    color: #1c1e4c;
                    margin-bottom: 0.5rem;
                    line-height: 1.25;
                    transition: color 0.3s;
                    text-transform: uppercase;
                }

                .formation-card:hover .card-main-title {
                    color: #7c3aed;
                }

                .card-desc {
                    font-size: 0.95rem;
                    color: #475569;
                    line-height: 1.55;
                    margin: 0;
                }

                .card-meta-list {
                    display: flex;
                    gap: 1.5rem;
                    margin-bottom: 1.5rem;
                    border-top: 1px solid rgba(226, 232, 240, 0.8);
                    padding-top: 1.25rem;
                }

                .meta-pill {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.8rem;
                    color: #64748b;
                    font-weight: 700;
                }

                .meta-pill svg {
                    color: #ef9a37;
                }

                .card-cta-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    width: 100%;
                    background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
                    color: white;
                    padding: 1rem;
                    border-radius: 16px;
                    font-weight: 800;
                    font-size: 0.95rem;
                    box-shadow: 0 4px 15px rgba(124, 58, 237, 0.2);
                    transition: all 0.3s;
                }

                .formation-card:hover .card-cta-btn {
                    transform: translateY(-1px);
                    box-shadow: 0 10px 25px rgba(124, 58, 237, 0.4);
                    background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
                }

                .card-cta-btn svg {
                    transition: transform 0.3s;
                }

                .formation-card:hover .card-cta-btn svg {
                    transform: translateX(4px);
                }

                /* RESPONSIVE */
                @media (max-width: 900px) {
                    .hero-title { font-size: 2.5rem; }
                    .hero-subtitle { font-size: 1.05rem; }
                    .stats-bar {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                        margin-bottom: 3.5rem;
                    }
                    .stat-item:not(:last-child) {
                        border-right: none;
                        border-bottom: 1px solid rgba(226, 232, 240, 0.8);
                        padding-bottom: 1rem;
                    }
                    .formations-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    .formation-card {
                        height: auto;
                        min-height: 520px;
                    }
                }
            `}</style>

            <div className="catalogue-page">
                {/* AMBIENT GLOWS */}
                <div className="glow-sphere glow-1"></div>
                <div className="glow-sphere glow-2"></div>

                <div className="catalogue-container">
                    
                    {/* HERO HEADER */}
                    <header className="hero-section">
                        <span className="top-badge">
                            <GraduationCap size={16} /> Bachelor d'Affaires
                        </span>
                        <h1 className="hero-title">NOS FORMATIONS NIVEAU BAC+3</h1>
                        <p className="hero-subtitle">
                            Découvrez notre Bachelor de niveau 6 (Bac+3), conçu pour vous transmettre des compétences opérationnelles de pointe en négociation d'affaires, gestion commerciale et management de projet, disponible en alternance ou e-learning.
                        </p>
                    </header>

                    {/* KEY STATS BAR */}
                    <div className="stats-bar">
                        <div className="stat-item">
                            <div className="stat-icon-wrapper">
                                <CheckCircle2 size={22} />
                            </div>
                            <div className="stat-info">
                                <span className="stat-value">100%</span>
                                <span className="stat-label">Accompagnement</span>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon-wrapper">
                                <Users size={22} />
                            </div>
                            <div className="stat-info">
                                <span className="stat-value">Alternance</span>
                                <span className="stat-label">Garantie & Rémunérée</span>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon-wrapper">
                                <BookOpen size={22} />
                            </div>
                            <div className="stat-info">
                                <span className="stat-value">Diplôme</span>
                                <span className="stat-label">Reconnu par l'État</span>
                            </div>
                        </div>
                    </div>

                    {/* FORMATIONS GRID */}
                    <div className="formations-grid">
                        {formations.map((f, i) => (
                            <Link key={i} to={f.path} className="formation-card">
                                <div className="card-media">
                                    <div className="card-image" style={{ backgroundImage: `url(${f.image})` }}></div>
                                    <div className="media-overlay"></div>
                                    <span className="card-badge">{f.level}</span>
                                </div>

                                <div className="card-body">
                                    <div className="card-info-header">
                                        <h2 className="card-main-title">{f.title}</h2>
                                        <p style={{ color: '#7c3aed', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                                            {f.subtitle}
                                        </p>
                                        <p className="card-desc">{f.description}</p>
                                    </div>

                                    <div>
                                        <div className="card-meta-list">
                                            <div className="meta-pill">
                                                <Clock size={16} />
                                                <span>Durée : {f.duration}</span>
                                            </div>
                                            <div className="meta-pill">
                                                <GraduationCap size={16} />
                                                <span>{f.rhythm}</span>
                                            </div>
                                        </div>

                                        <div className="card-cta-btn">
                                            <span>DÉCOUVRIR LA FORMATION</span>
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}
