import { Helmet } from 'react-helmet-async';
import { 
    Users, 
    BookOpen, 
    CheckCircle2, 
    Star, 
    Coffee,
    Zap,
    History,
    ArrowRight
} from 'lucide-react';

export default function FormationWordIA() {
    const modules = [
        {
            title: "WORD + IA POUR UNE RÉDACTION AUGMENTÉE",
            duration: "7H",
            points: [
                "Mise à niveau : Harmonisation des compétences Word de base",
                "Maîtrise des outils IA (Copilot, ChatGPT pour structurer et améliorer)",
                "IA externes pour mise en forme et modèles intelligents",
                "Génération automatique de rapports et documents complexes",
                "Atelier : Créer un dossier complet en 30 minutes de A à Z"
            ]
        },
        {
            title: "SUIVI ET PERFECTIONNEMENT (REX)",
            duration: "7H",
            points: [
                "Session à 15 jours : Retour d'expériences sur les pratiques réelles",
                "Validation des acquis et techniques avancées",
                "Résolution de cas personnalisés rencontrés en entreprise",
                "Approfondissement sur-mesure selon les besoins identifiés"
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>Word + IA : Gagnez du temps - Formation | Meta DX School</title>
                <meta name="description" content="Boostez votre productivité sur Word grâce à l'IA. Maîtrisez la rédaction augmentée et l'automatisation de vos documents." />
            </Helmet>

            <style>{`
                .formation-word-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    color: #1e293b;
                    padding-bottom: 6rem;
                }

                .hero-word {
                    background: linear-gradient(135deg, #1c1e4c 0%, #3b82f6 100%);
                    color: white;
                    padding: 8rem 2rem 6rem;
                    position: relative;
                    overflow: hidden;
                }

                .hero-word::before {
                    content: '';
                    position: absolute;
                    top: -50%; left: -10%;
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(239, 154, 55, 0.2) 0%, transparent 70%);
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

                .hero-word h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                }

                .hero-word p {
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
                    border-left: 4px solid #3b82f6;
                }

                .stat-label { font-size: 0.75rem; color: #64748b; font-weight: 800; text-transform: uppercase; }
                .stat-val { font-size: 1rem; font-weight: 800; color: #1c1e4c; display: block; margin-top: 0.25rem; }

                .rex-badge {
                    background: #ebf5ff;
                    color: #2563eb;
                    padding: 4px 12px;
                    border-radius: 50px;
                    font-size: 0.7rem;
                    font-weight: 900;
                    border: 1px solid #bfdbfe;
                }

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
                .point-list li svg { color: #3b82f6; flex-shrink: 0; margin-top: 3px; }

                @media(max-width: 900px) {
                    .main-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <div className="formation-word-page">
                <header className="hero-word">
                    <div className="container">
                        <span className="badge-v">V12 – MAJ 18/06/2026</span>
                        <h1>WORD : GAGNEZ DU TEMPS AVEC L'IA</h1>
                        <p>
                            Stop aux tâches bureautiques chronophages. Transformez radicalement votre quotidien rédactionnel grâce aux outils d'IA intégrés.
                        </p>
                    </div>
                </header>

                <main className="container main-grid">
                    <div className="content">
                        <section className="card">
                            <div className="section-head">
                                <Zap color="#ef9a37" />
                                <h2>Rédaction Augmentée</h2>
                            </div>
                            <p style={{lineHeight: 1.8, color: '#475569', marginBottom: '2rem'}}>
                                Vous passez trop de temps sur Word pour des tâches répétitives ? En 2025, l'Intelligence Artificielle transforme votre manière de rédiger. Fini les copier-coller fastidieux et les mises en forme interminables.
                            </p>
                            <div className="stats-bar">
                                <div className="stat-box">
                                    <span className="stat-label">Durée</span>
                                    <span className="stat-val">2 jours (14h)</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Format</span>
                                    <span className="stat-val">1j + 1j (REX)</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Public</span>
                                    <span className="stat-val">Utilisateurs Office</span>
                                </div>
                            </div>
                        </section>

                        <section className="card">
                            <div className="section-head">
                                <BookOpen color="#3b82f6" />
                                <h2>Programme détaillé</h2>
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
                                <h2>Pourquoi choisir cette formation ?</h2>
                            </div>
                            <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem'}}>
                                <div style={{background: '#f0f9ff', padding:'1.5rem', borderRadius:'16px'}}>
                                    <History color="#3b82f6" style={{marginBottom:'0.5rem'}} />
                                    <h4 style={{fontWeight:800, color:'#1e40af', marginBottom:'0.5rem'}}>Méthode REX</h4>
                                    <p style={{fontSize:'0.85rem', color:'#1e40af'}}>Une deuxième journée 15 jours après pour valider vos acquis sur vos propres dossiers réels.</p>
                                </div>
                                <div style={{background: '#fff7ed', padding:'1.5rem', borderRadius:'16px'}}>
                                    <Coffee color="#ef9a37" style={{marginBottom:'0.5rem'}} />
                                    <h4 style={{fontWeight:800, color:'#9a3412', marginBottom:'0.5rem'}}>Petit-déjeuner</h4>
                                    <p style={{fontSize:'0.85rem', color:'#9a3412'}}>Viennoiseries et accueil convivial offerts pour démarrer sereinement.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <aside className="sidebar">
                        <div className="pricing-card">
                            <span style={{fontSize: '0.8rem', fontWeight: 800, opacity: 0.8, textTransform: 'uppercase'}}>Tarif</span>
                            <div className="price">700 € TTC <span style={{fontSize: '1rem', color:'white', opacity:0.6}}>/pers</span></div>
                            <p style={{fontSize: '0.85rem', opacity: 0.8}}>Éligible OPCO & Financements Entreprises.</p>
                            <a href="/contact" target="_blank" rel="noopener noreferrer" className="btn-reg">COMMENT NOUS CONTACTER</a>
                        </div>

                        <div className="card" style={{marginTop: '2rem', padding: '1.5rem'}}>
                            <h4 style={{fontWeight: 800, marginBottom: '1rem', fontSize: '1rem', color:'#1c1e4c'}}>INFO INTERVENANT</h4>
                            <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                                <div style={{background: '#f1f5f9', padding: '8px', borderRadius: '12px'}}><Users color="#1c1e4c" /></div>
                                <div>
                                    <h5 style={{fontWeight: 800, fontSize: '0.9rem'}}>Stéphanie Hernandez</h5>
                                    <p style={{fontSize: '0.75rem', color: '#64748b'}}>Formatrice experte (10+ ans exp.)</p>
                                </div>
                            </div>
                        </div>

                        <div style={{background: 'white', padding: '1.5rem', borderRadius: '24px', border: '1px solid #f1f5f9'}}>
                            <h4 style={{fontWeight: 800, marginBottom: '1rem', fontSize: '1rem', color:'#1c1e4c'}}>BÉNÉFICES CLÉS</h4>
                            <ul className="point-list">
                                <li><ArrowRight size={14} /> Documents auto-générés</li>
                                <li><ArrowRight size={14} /> Tableaux intelligents</li>
                                <li><ArrowRight size={14} /> Rapports en 30 minutes</li>
                            </ul>
                        </div>
                    </aside>
                </main>
            </div>
        </>
    );
}
