import { Helmet } from 'react-helmet-async';
import { 
    Linkedin, 
    BookOpen, 
    CheckCircle2, 
    Star, 
    Coffee,
    TrendingUp,
    Calendar,
    Download,
    Accessibility,
    Target
} from 'lucide-react';

export default function FormationLinkedin() {
    const modules = [
        {
            title: "L’UNIVERS ET LES FONDAMENTAUX DE LINKEDIN",
            duration: "4H",
            points: [
                "Tendances et spécificités 2025 de la prospection B2B",
                "7 questions clés pour optimiser sa stratégie",
                "Optimisation Profil vs Page Entreprise",
                "Comprendre l'algorithme 2025 pour la visibilité",
                "Stratégie de contenu : formats, thématiques et bonnes pratiques"
            ]
        },
        {
            title: "DÉVELOPPER SON RÉSEAU (SOCIAL SELLING)",
            duration: "3H",
            points: [
                "Définition et calcul du Social Selling Index (SSI)",
                "Les 5 piliers de la stratégie Social Selling",
                "Construction de votre marque personnelle",
                "Ciblage et échange d'informations stratégiques",
                "Établir et consolider des relations (invitation, suivi)",
                "Contrôle et analyse des statistiques de performance"
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>Formation LinkedIn & Visibilité B2B | Meta DX School</title>
                <meta name="description" content="Optimisez votre présence sur LinkedIn et maîtrisez le Social Selling. Formation d'un jour pour booster votre visibilité professionnelle." />
            </Helmet>

            <style>{`
                .formation-in-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    color: #1e293b;
                    padding-bottom: 6rem;
                }

                .hero-in {
                    background: linear-gradient(135deg, #0077b5 0%, #1c1e4c 100%);
                    color: white;
                    padding: 8rem 2rem 6rem;
                    position: relative;
                    overflow: hidden;
                }

                .hero-in::before {
                    content: '';
                    position: absolute;
                    top: -20%; right: -5%;
                    width: 500px; height: 500px;
                    background: radial-gradient(circle, rgba(239, 154, 55, 0.15) 0%, transparent 70%);
                    border-radius: 50%;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .badge-v {
                    background: rgba(255, 255, 255, 0.15);
                    padding: 0.5rem 1.2rem;
                    border-radius: 50px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    display: inline-block;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }

                .hero-in h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                }

                .hero-in p {
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
                    border-left: 4px solid #0077b5;
                }

                .stat-label { font-size: 0.75rem; color: #64748b; font-weight: 800; text-transform: uppercase; }
                .stat-val { font-size: 1rem; font-weight: 800; color: #1c1e4c; display: block; margin-top: 0.25rem; }

                .module-card {
                    background: #f8fafc;
                    border-radius: 16px;
                    padding: 1.5rem;
                    margin-bottom: 1.25rem;
                    border: 1px solid #e2e8f0;
                    transition: border-color 0.2s;
                }

                .module-card:hover { border-color: #0077b5; }

                .module-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }

                .module-header h4 { font-weight: 800; color: #1c1e4c; font-size: 1.1rem; }
                .module-dur { background: #1c1e4c; color: white; padding: 0.25rem 0.75rem; border-radius: 50px; font-size: 0.8rem; font-weight: 700; }

                .point-list { list-style: none; padding: 0; }
                .point-list li {
                    display: flex;
                    gap: 0.75rem;
                    margin-bottom: 0.75rem;
                    font-size: 0.95rem;
                    color: #475569;
                    line-height: 1.5;
                }

                .point-list li svg { color: #0077b5; flex-shrink: 0; margin-top: 3px; }

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

                .expert-box {
                    background: white;
                    border-radius: 20px;
                    padding: 1.5rem;
                    margin-top: 2rem;
                    border: 1px solid #f1f5f9;
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                }

                .expert-info h5 { font-weight: 800; color: #1c1e4c; margin-bottom: 0.25rem; }
                .expert-info p { font-size: 0.8rem; color: #64748b; }

                .dates-box {
                    background: #f0f9ff;
                    padding: 1.5rem;
                    border-radius: 20px;
                    margin-top: 2rem;
                    border: 1px dashed #0077b5;
                }

                .date-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 0.75rem 0;
                    border-bottom: 1px solid rgba(0, 119, 181, 0.1);
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: #0369a1;
                }

                @media(max-width: 900px) {
                    .main-grid { grid-template-columns: 1fr; }
                    .hero-in h1 { font-size: 2.5rem; }
                }
            `}</style>

            <div className="formation-in-page">
                <header className="hero-in">
                    <div className="container">
                        <span className="badge-v">V12 – MAJ 18/06/2026</span>
                        <h1>OPTIMISER SA PRÉSENCE ET SA VISIBILITÉ SUR LINKEDIN</h1>
                        <p>
                            Maîtrisez le réseau social incontournable pour développer votre visibilité B2B et votre marque personnelle.
                        </p>
                    </div>
                </header>

                <main className="container main-grid">
                    <div className="content">
                        {/* Présentation */}
                        <section className="card">
                            <div className="section-head">
                                <Linkedin color="#0077b5" />
                                <h2>Pourquoi LinkedIn ?</h2>
                            </div>
                            <p style={{lineHeight: 1.8, color: '#475569', marginBottom: '2rem'}}>
                                Cette formation permet aux salariés d’utiliser LinkedIn avec adresse dans le cadre de leurs activités. 
                                Vous apprendrez à optimiser votre profil, comprendre l'algorithme 2025 et mettre en œuvre une stratégie 
                                de <strong>Social Selling</strong> efficace.
                            </p>
                            <div className="stats-bar">
                                <div className="stat-box">
                                    <span className="stat-label">Durée</span>
                                    <span className="stat-val">1 jour (7h)</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Public</span>
                                    <span className="stat-val">Salariés (3-12 pers)</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Prérequis</span>
                                    <span className="stat-val">Accès LinkedIn</span>
                                </div>
                            </div>
                        </section>

                        {/* Objectifs */}
                        <section className="card">
                            <div className="section-head">
                                <Target color="#0077b5" />
                                <h2>Objectifs Pédagogiques</h2>
                            </div>
                            <ul className="point-list">
                                <li><CheckCircle2 size={16} /> Comprendre le fonctionnement global du réseau LinkedIn en 2025</li>
                                <li><CheckCircle2 size={16} /> Développer sa visibilité organique et sa marque personnelle</li>
                                <li><CheckCircle2 size={16} /> Identifier une méthodologie pour développer son réseau BtoB</li>
                                <li><CheckCircle2 size={16} /> Maîtriser l'algorithme et les types de publications performants</li>
                            </ul>
                        </section>

                        {/* Programme */}
                        <section className="card">
                            <div className="section-head">
                                <BookOpen color="#0077b5" />
                                <h2>Programme détaillé</h2>
                            </div>
                            {modules.map((m, i) => (
                                <div className="module-card" key={i}>
                                    <div className="module-header">
                                        <h4>{m.title}</h4>
                                        <span className="module-dur">{m.duration}</span>
                                    </div>
                                    <ul className="point-list">
                                        {m.points.map((p, j) => (
                                            <li key={j}><CheckCircle2 size={16} /> {p}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </section>

                        {/* Méthodes */}
                        <section className="card">
                            <div className="section-head">
                                <Star color="#0077b5" />
                                <h2>Méthodes & Évaluation</h2>
                            </div>
                            <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem'}}>
                                <div>
                                    <h4 style={{fontWeight: 800, marginBottom: '1rem', color: '#1c1e4c'}}>Pédagogie</h4>
                                    <p style={{fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6}}>
                                        Alternance de théorie et pratique. Analyse de votre Social Selling Index (SSI) en direct.
                                    </p>
                                </div>
                                <div>
                                    <h4 style={{fontWeight: 800, marginBottom: '1rem', color: '#1c1e4c'}}>Évaluation</h4>
                                    <p style={{fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6}}>
                                        Quiz final et atelier de création de contenu réel lié à votre activité.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <aside className="sidebar">
                        {/* Prix */}
                        <div className="pricing-card">
                            <span style={{fontSize: '0.8rem', fontWeight: 800, opacity: 0.8, textTransform: 'uppercase'}}>Tarif Inter-entreprise</span>
                            <div className="price">450 € TTC <span style={{fontSize: '1rem', color:'white', opacity:0.6}}>/pers</span></div>
                            <p style={{fontSize: '0.85rem', opacity: 0.8}}>Financement personnel ou OPCO possible (Tarif préférentiel OPCO Mobilités).</p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-reg">RÉSERVER MA PLACE</a>
                            <div style={{marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display:'flex', alignItems:'center', gap:'1rem', textAlign:'left'}}>
                                <Download size={24} color="#ef9a37" />
                                <div>
                                    <div style={{fontWeight: 800, fontSize: '0.9rem'}}>FICHE FORMATION</div>
                                    <div style={{fontSize: '0.7rem', opacity: 0.7}}>Détails techniques (PDF)</div>
                                </div>
                            </div>
                        </div>

                        {/* Dates */}
                        <div className="dates-box">
                            <h4 style={{fontWeight: 800, color: '#0369a1', marginBottom: '1rem', display:'flex', alignItems:'center', gap:'0.5rem'}}>
                                <Calendar size={18} /> CLASSE VIRTUELLE
                            </h4>
                            <div className="date-item"><span>07 Octobre 2025</span></div>
                            <div className="date-item"><span>07 Décembre 2025</span></div>
                            <div className="date-item"><span>28 Janvier 2026</span></div>
                            
                            <h4 style={{fontWeight: 800, color: '#0369a1', margin: '1.5rem 0 1rem', display:'flex', alignItems:'center', gap:'0.5rem'}}>
                                <Calendar size={18} /> PRÉSENTIEL
                            </h4>
                            <div className="date-item"><span>06 Novembre 2025</span></div>
                            <div className="date-item"><span>06 Février 2026</span></div>
                        </div>

                        {/* Expert */}
                        <div className="expert-box">
                            <div style={{background: '#f1f5f9', padding: '10px', borderRadius: '12px'}}><TrendingUp color="#1c1e4c" /></div>
                            <div className="expert-info">
                                <h5>Carole Torlasco</h5>
                                <p>Experte Marketing & Digital (10+ ans d'exp.)</p>
                            </div>
                        </div>

                        {/* Bonus Convivialité */}
                        <div style={{background: 'white', padding: '1.5rem', borderRadius: '24px', marginTop: '2rem', border: '1px solid #f1f5f9', textAlign: 'center'}}>
                            <Coffee color="#ef9a37" style={{margin: '0 auto 1rem'}} />
                            <h5 style={{fontWeight: 800, color: '#1c1e4c'}}>PETIT-DÉJEUNER OFFERT</h5>
                            <p style={{fontSize: '0.8rem', color: '#64748b'}}>Pour les sessions en présentiel, viennoiseries offertes le matin.</p>
                        </div>

                        {/* Accessibilité */}
                        <div style={{marginTop: '2rem', padding: '1rem', background: '#eff6ff', borderRadius: '16px', border: '1px solid #dbeafe'}}>
                            <Accessibility size={20} color="#3b82f6" style={{marginBottom:'0.5rem'}} />
                            <p style={{fontSize: '0.75rem', color: '#1e40af', margin: 0}}>
                                <strong>Accessibilité :</strong> Formation accessible, contactez notre référent.
                            </p>
                        </div>
                    </aside>
                </main>
            </div>
        </>
    );
}
