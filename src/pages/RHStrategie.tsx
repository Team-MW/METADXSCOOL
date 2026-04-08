import { Helmet } from 'react-helmet-async';
import { 
    Target, 
    Search, 
    Gem,
    Euro,
    ArrowRight
} from 'lucide-react';

export default function RHStrategie() {
    return (
        <>
            <Helmet>
                <title>Conseils RH & Stratégie d'Entreprise | Meta DXS</title>
                <meta name="description" content="Développement du capital humain et stratégie RH agile. Audit, plan de développement des compétences et optimisation des financements." />
            </Helmet>

            <style>{`
                .rh-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    color: #1e293b;
                    padding-bottom: 6rem;
                }

                .rh-hero {
                    background: linear-gradient(135deg, #1c1e4c 0%, #3b82f6 100%);
                    color: white;
                    padding: 8rem 2rem 6rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .rh-hero::before {
                    content: '';
                    position: absolute;
                    top: -50%; left: -20%;
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
                    border-radius: 50%;
                }

                .hero-container {
                    max-width: 1000px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .badge-title {
                    background: rgba(255, 255, 255, 0.15);
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    display: inline-block;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }

                .rh-hero h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                }

                .rh-hero p {
                    font-size: 1.3rem;
                    opacity: 0.9;
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .main-content {
                    max-width: 1200px;
                    margin: -4rem auto 0;
                    padding: 0 2rem;
                    position: relative;
                    z-index: 10;
                }

                .intro-card {
                    background: white;
                    border-radius: 24px;
                    padding: 3rem;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.06);
                    margin-bottom: 3rem;
                    text-align: center;
                }
                .intro-card h2 {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #1c1e4c;
                    margin-bottom: 1.5rem;
                }

                .steps-container {
                    display: grid;
                    gap: 3rem;
                }

                .step-card {
                    background: white;
                    border-radius: 24px;
                    overflow: hidden;
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    box-shadow: 0 15px 45px rgba(0,0,0,0.05);
                    border: 1px solid #f1f5f9;
                }

                .step-number {
                    background: #1c1e4c;
                    color: white;
                    padding: 3rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                }
                .nb-circle {
                    width: 60px;
                    height: 60px;
                    border: 2px solid #ef9a37;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.8rem;
                    font-weight: 900;
                    color: #ef9a37;
                    margin-bottom: 1.5rem;
                }

                .step-content {
                    padding: 3rem;
                }
                .step-content h3 {
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: #1c1e4c;
                    margin-bottom: 1.5rem;
                    line-height: 1.3;
                }

                .feature-list {
                    list-style: none;
                    padding: 0;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }
                .feature-item {
                    display: flex;
                    gap: 0.75rem;
                    font-size: 0.95rem;
                    line-height: 1.5;
                    color: #475569;
                }
                .feature-item svg { color: #3b82f6; flex-shrink: 0; margin-top: 3px; }

                .objective-box {
                    margin-top: 2rem;
                    background: #f0f9ff;
                    padding: 1.5rem;
                    border-radius: 12px;
                    border-left: 5px solid #3b82f6;
                    font-weight: 700;
                    color: #1e40af;
                }

                .final-cta {
                    background: linear-gradient(135deg, #1c1e4c 0%, #171942 100%);
                    color: white;
                    border-radius: 24px;
                    padding: 4rem 2rem;
                    text-align: center;
                    margin-top: 4rem;
                }
                .btn-contact {
                    display: inline-block;
                    background: #ef9a37;
                    color: white;
                    padding: 1.2rem 3rem;
                    border-radius: 12px;
                    font-weight: 800;
                    text-decoration: none;
                    margin-top: 2rem;
                    transition: transform 0.2s, background 0.2s;
                }
                .btn-contact:hover { transform: translateY(-3px); background: #f5a646; }

                @media(max-width: 900px) {
                    .step-card { grid-template-columns: 1fr; }
                    .feature-list { grid-template-columns: 1fr; }
                    .rh-hero h1 { font-size: 2.5rem; }
                }
            `}</style>

            <div className="rh-page">
                <header className="rh-hero">
                    <div className="hero-container">
                        <span className="badge-title">EXPERTISE & CONSEILS</span>
                        <h1>RESSOURCES HUMAINES ET STRATÉGIE D'ENTREPRISE</h1>
                        <p>
                            Nous plaçons l'humain au cœur de votre performance pour révéler vos talents et accélérer votre croissance durable.
                        </p>
                    </div>
                </header>

                <main className="main-content">
                    <div className="intro-card">
                        <Gem size={48} color="#ef9a37" style={{marginBottom:'1rem'}} />
                        <h2>L'Humain, Moteur de votre Stratégie</h2>
                        <p style={{fontSize:'1.1rem', color:'#475569', lineHeight:1.8, maxWidth:'900px', margin:'0 auto'}}>
                            La réussite d'une entreprise repose avant tout sur la valorisation de son capital humain et une stratégie RH agile. 
                            Notre approche pragmatique et personnalisée permet d'aligner vos talents avec vos objectifs business.
                        </p>
                    </div>

                    <div className="steps-container">
                        {/* Étape 1 */}
                        <div className="step-card">
                            <div className="step-number">
                                <div className="nb-circle">1</div>
                                <Search size={40} />
                                <span style={{marginTop:'1rem', fontWeight:800, fontSize:'0.8rem', opacity:0.7, textTransform:'uppercase'}}>Audit & Diagnostic</span>
                            </div>
                            <div className="step-content">
                                <h3>Audit Approfondi de l'Organisation</h3>
                                <div className="feature-list">
                                    <div className="feature-item"><ArrowRight size={18}/> Analyse détaillée de votre organisation et de vos métiers</div>
                                    <div className="feature-item"><ArrowRight size={18}/> Cartographie des compétences (Savoirs, Savoir-faire, Savoir-être)</div>
                                    <div className="feature-item"><ArrowRight size={18}/> Identification des écarts et besoins opérationnels</div>
                                    <div className="feature-item"><ArrowRight size={18}/> Analyse prospective des besoins de demain</div>
                                </div>
                                <div className="objective-box">
                                    OBJECTIF : Détecter les talents à valoriser et les opportunités de montée en compétences pour rester compétitif.
                                </div>
                            </div>
                        </div>

                        {/* Étape 2 */}
                        <div className="step-card">
                            <div className="step-number" style={{background:'#2563eb'}}>
                                <div className="nb-circle" style={{borderColor:'white', color:'white'}}>2</div>
                                <Target size={40} />
                                <span style={{marginTop:'1rem', fontWeight:800, fontSize:'0.8rem', opacity:0.8, textTransform:'uppercase'}}>Co-Construction</span>
                            </div>
                            <div className="step-content">
                                <h3>Plan de Développement sur Mesure</h3>
                                <div className="feature-list">
                                    <div className="feature-item"><ArrowRight size={18}/> Définition d'objectifs ROI (Performance, Digital, Engagement)</div>
                                    <div className="feature-item"><ArrowRight size={18}/> Sélection de dispositifs variés (Présentiel, E-learning, Coaching)</div>
                                    <div className="feature-item"><ArrowRight size={18}/> Pilotage agiles avec indicateurs de motivation</div>
                                    <div className="feature-item"><ArrowRight size={18}/> Planification harmonieuse avec votre calendrier métier</div>
                                </div>
                                <div className="objective-box" style={{background:'#ecfdf5', borderColor:'#10b981', color:'#065f46'}}>
                                    OBJECTIF : Faire du développement des compétences un levier de motivation, d'innovation et de fidélisation.
                                </div>
                            </div>
                        </div>

                        {/* Étape 3 */}
                        <div className="step-card">
                            <div className="step-number" style={{background:'#ef9a37'}}>
                                <div className="nb-circle" style={{borderColor:'white', color:'white'}}>3</div>
                                <Euro size={40} />
                                <span style={{marginTop:'1rem', fontWeight:800, fontSize:'0.8rem', opacity:0.9, textTransform:'uppercase'}}>Optimisation</span>
                            </div>
                            <div className="step-content">
                                <h3>Ingénierie de Financement</h3>
                                <div className="feature-list">
                                    <div className="feature-item"><ArrowRight size={18}/> Analyse de situation et leviers (OPCO, etc.)</div>
                                    <div className="feature-item"><ArrowRight size={18}/> Montage et gestion administrative complète de A à Z</div>
                                    <div className="feature-item"><ArrowRight size={18}/> Conseils stratégiques pour maximiser votre budget</div>
                                    <div className="feature-item"><ArrowRight size={18}/> Sécurisation totale des démarches administratives</div>
                                </div>
                                <div className="objective-box" style={{background:'#fffbeb', borderColor:'#fbbf24', color:'#92400e'}}>
                                    OBJECTIF : Transformer vos RH en moteur de croissance sans contrainte budgétaire.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="final-cta">
                        <h2>Besoin d'un accompagnement sur-mesure ?</h2>
                        <p style={{opacity:0.8, marginTop:'1rem'}}>Nos experts sont à votre disposition pour un premier diagnostic offert.</p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-contact">
                            CONTACTER UN CONSULTANT RH
                        </a>
                    </div>
                </main>
            </div>
        </>
    );
}
