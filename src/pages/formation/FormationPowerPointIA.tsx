import { Helmet } from 'react-helmet-async';
import { 
    Users, 
    BookOpen, 
    CheckCircle2, 
    Star, 
    Coffee,
    History,
    Calendar,
    Layout,
    ArrowRight
} from 'lucide-react';

export default function FormationPowerPointIA() {
    const modules = [
        {
            title: "POWERPOINT + IA : INTÉGRATION & DESIGN",
            duration: "7H",
            points: [
                "Mise à niveau : Harmonisation des compétences PowerPoint de base",
                "Design automatique & création de visuels percutants avec l'IA",
                "Automatisation des animations intelligentes",
                "Synchronisation avancée Word-Excel-PowerPoint",
                "Challenge : Création d'une présentation complète en 20 minutes"
            ]
        },
        {
            title: "SUIVI ET PERFECTIONNEMENT (REX)",
            duration: "7H",
            points: [
                "Session à 15 jours : Analyse des pratiques réelles",
                "Validation des techniques avancées et résolution de cas",
                "Approfondissement sur-mesure selon les besoins",
                "Plan d'actions : 3 objectifs concrets à mettre en œuvre"
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>PowerPoint + IA : Design Express - Formation | Meta DX School</title>
                <meta name="description" content="Créez des présentations percutantes en un temps record grâce à l'IA. Maîtrisez le design automatique et les animations intelligentes." />
            </Helmet>

            <style>{`
                .formation-ppt-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    color: #1e293b;
                    padding-bottom: 6rem;
                }

                .hero-ppt {
                    background: linear-gradient(135deg, #1c1e4c 0%, #ef4444 100%);
                    color: white;
                    padding: 8rem 2rem 6rem;
                    position: relative;
                    overflow: hidden;
                }

                .hero-ppt::before {
                    content: '';
                    position: absolute;
                    bottom: -20%; right: -10%;
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
                    border-radius: 50%;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .badge-v {
                    background: rgba(255, 255, 255, 0.2);
                    padding: 0.5rem 1.2rem;
                    border-radius: 50px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    display: inline-block;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }

                .hero-ppt h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                }

                .hero-ppt p {
                    font-size: 1.3rem;
                    opacity: 0.95;
                    max-width: 800px;
                    line-height: 1.6;
                }

                .main-grid {
                    display: grid;
                    grid-template-columns: 2.2fr 1fr;
                    gap: 3rem;
                    margin-top: -4rem;
                    padding: 0 2rem;
                }

                .card {
                    background: white;
                    border-radius: 24px;
                    padding: 2.5rem;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.06);
                    margin-bottom: 2.5rem;
                }

                .section-head {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    border-bottom: 2px solid #f1f5f9;
                    padding-bottom: 1rem;
                }

                .section-head h2 {
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: #1c1e4c;
                }

                .stats-bar {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2.5rem;
                }

                .stat-box {
                    background: #f8fafc;
                    padding: 1.25rem;
                    border-radius: 16px;
                    border-left: 4px solid #ef4444;
                }

                .stat-label { font-size: 0.75rem; color: #64748b; font-weight: 800; text-transform: uppercase; }
                .stat-val { font-size: 1rem; font-weight: 800; color: #1c1e4c; display: block; margin-top: 0.25rem; }

                .sidebar { position: sticky; top: 2rem; }

                .pricing-card {
                    background: #1c1e4c;
                    color: white;
                    border-radius: 24px;
                    padding: 2.5rem;
                    text-align: center;
                }

                .price { font-size: 2.5rem; font-weight: 900; color: #ef9a37; margin: 1rem 0; }
                
                .btn-reg {
                    display: block;
                    background: #ef9a37;
                    color: white;
                    padding: 1.25rem;
                    border-radius: 12px;
                    text-decoration: none;
                    font-weight: 800;
                    margin-top: 1.5rem;
                    transition: all 0.2s;
                }
                .btn-reg:hover { transform: translateY(-3px); background: #f5a646; }

                .point-list { list-style: none; padding: 0; }
                .point-list li {
                    display: flex;
                    gap: 0.75rem;
                    margin-bottom: 0.75rem;
                    font-size: 0.95rem;
                    color: #475569;
                    line-height: 1.5;
                }
                .point-list li svg { color: #ef4444; flex-shrink: 0; margin-top: 3px; }

                .dates-box {
                    background: #fff5f5;
                    border: 1px dashed #feb2b2;
                    padding: 1.5rem;
                    border-radius: 24px;
                    margin-top: 2rem;
                }

                .date-row {
                    display: flex;
                    justify-content: space-between;
                    padding: 0.75rem 0;
                    border-bottom: 1px solid rgba(239, 68, 68, 0.1);
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: #9b2c2c;
                }

                @media(max-width: 900px) {
                    .main-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <div className="formation-ppt-page">
                <header className="hero-ppt">
                    <div className="container">
                        <span className="badge-v">V12 – MAJ 18/06/2026</span>
                        <h1>POWERPOINT : DES PRÉSENTATIONS PERCUTANTES AVEC L'IA</h1>
                        <p>
                            Fini les mises en forme interminables. Produisez des slides professionnelles et dynamiques en un temps record grâce à l'IA.
                        </p>
                    </div>
                </header>

                <main className="container main-grid">
                    <div className="content">
                        <section className="card">
                            <div className="section-head">
                                <Layout color="#ef4444" />
                                <h2>Design & Impact</h2>
                            </div>
                            <p style={{lineHeight: 1.8, color: '#475569', marginBottom: '2rem'}}>
                                Vous passez trop de temps sur le design de vos slides au détriment du fond ? En 2025, l'Intelligence Artificielle génère vos visuels, structure vos présentations et automatise vos animations.
                            </p>
                            <div className="stats-bar">
                                <div className="stat-box">
                                    <span className="stat-label">Durée</span>
                                    <span className="stat-val">2 jours (14h)</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Méthode</span>
                                    <span className="stat-val">1j + 1j (REX)</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Objectif</span>
                                    <span className="stat-val">Slide Express</span>
                                </div>
                            </div>
                        </section>

                        <section className="card">
                            <div className="section-head">
                                <BookOpen color="#ef4444" />
                                <h2>Programme de formation</h2>
                            </div>
                            {modules.map((m, i) => (
                                <div key={i} style={{background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', marginBottom: '1.5rem', border: '1px solid #e2e8f0'}}>
                                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                                        <h4 style={{fontWeight: 800, color: '#1c1e4c'}}>{m.title}</h4>
                                        <span style={{background: '#1c1e4c', color:'white', padding:'2px 10px', borderRadius:'50px', fontSize:'0.75rem'}}>{m.duration}</span>
                                    </div>
                                    <ul className="point-list">
                                        {m.points.map((p, j) => (
                                            <li key={j}><CheckCircle2 size={16} /> {p}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </section>

                        <section className="card">
                            <div className="section-head">
                                <Star color="#ef9a37" />
                                <h2>Les avantages Meta DX School</h2>
                            </div>
                            <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem'}}>
                                <div style={{background: '#f8fafc', padding:'1.5rem', borderRadius:'16px'}}>
                                    <History color="#ef4444" style={{marginBottom:'0.5rem'}} />
                                    <h4 style={{fontWeight:800, color:'#1c1e4c', marginBottom:'0.5rem'}}>Accompagnement REX</h4>
                                    <p style={{fontSize:'0.85rem', color:'#64748b'}}>Retour d'expérience 15 jours après pour perfectionner vos présentations réelles de bureau.</p>
                                </div>
                                <div style={{background: '#f8fafc', padding:'1.5rem', borderRadius:'16px'}}>
                                    <Coffee color="#ef9a37" style={{marginBottom:'0.5rem'}} />
                                    <h4 style={{fontWeight:800, color:'#1c1e4c', marginBottom:'0.5rem'}}>Petit-déjeuner Offert</h4>
                                    <p style={{fontSize:'0.85rem', color:'#64748b'}}>Viennoiseries fraîches pour bien démarrer votre session de formation.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <aside className="sidebar">
                        <div className="pricing-card">
                            <span style={{fontSize: '0.8rem', fontWeight: 800, opacity: 0.8, textTransform: 'uppercase'}}>Investissement</span>
                            <div className="price">700 € TTC <span style={{fontSize: '1rem', color:'white', opacity:0.6}}>/pers</span></div>
                            <p style={{fontSize: '0.85rem', opacity: 0.8}}>Financement OPCO & Entreprises disponible.</p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-reg">RÉSERVER MA SESSION</a>
                        </div>

                        <div className="dates-box">
                            <h4 style={{fontWeight: 800, color: '#9b2c2c', marginBottom: '1rem', display:'flex', alignItems:'center', gap:'0.5rem'}}>
                                <Calendar size={18} /> CALENDRIER
                            </h4>
                            <div className="date-row"><span>01 & 02 Octobre 2025</span><span>DISTANCIEL</span></div>
                            <div className="date-row"><span>15 & 16 Décembre 2025</span><span>PRÉSENTIEL</span></div>
                            <div className="date-row"><span>15 & 16 Janvier 2026</span><span>DISTANCIEL</span></div>
                        </div>

                        <div className="card" style={{marginTop: '2rem', padding: '1.5rem'}}>
                            <h4 style={{fontWeight: 800, marginBottom: '1rem', fontSize: '1rem', color:'#1c1e4c'}}>VOTRE FORMATRICE</h4>
                            <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                                <div style={{background: '#f1f5f9', padding: '8px', borderRadius: '12px'}}><Users color="#1c1e4c" /></div>
                                <div>
                                    <h5 style={{fontWeight: 800, fontSize: '0.9rem'}}>Stéphanie Hernandez</h5>
                                    <p style={{fontSize: '0.75rem', color: '#64748b'}}>Plus de 10 ans d'expertise</p>
                                </div>
                            </div>
                        </div>

                        <div style={{background: 'white', padding: '1.5rem', borderRadius: '24px', border: '1px solid #f1f5f9'}}>
                            <h4 style={{fontWeight: 800, marginBottom: '1rem', fontSize: '1rem', color:'#1c1e4c'}}>EN 20 MINUTES :</h4>
                            <ul className="point-list" style={{fontSize: '0.85rem'}}>
                                <li><ArrowRight size={14} /> Structure de présentation IA</li>
                                <li><ArrowRight size={14} /> Visuels générés par prompts</li>
                                <li><ArrowRight size={14} /> Animations intelligentes</li>
                            </ul>
                        </div>
                    </aside>
                </main>
            </div>
        </>
    );
}
