import { Helmet } from 'react-helmet-async';
import { 
    Users, 
    BookOpen, 
    CheckCircle2, 
    Star, 
    Coffee,
    Cpu,
    Calendar,
    Download
} from 'lucide-react';

export default function FormationIAVeille() {
    const modules = [
        {
            title: "INTRODUCTION AUX CONCEPTS DE L’IA",
            duration: "1H",
            points: [
                "Définition des notions clés : IA, machine learning, NLP, automatisation",
                "Présentation des applications concrètes de l’IA dans les entreprises",
                "Identification des applications possibles dans le contexte professionnel"
            ]
        },
        {
            title: "MAÎTRISER LES TECHNIQUES DE PROMPTING",
            duration: "2H",
            points: [
                "Qu’est-ce que le prompting ? Définition et utilité pratique",
                "Présentation détaillée des différents types de prompts",
                "Création et mise en pratique de prompts performants"
            ]
        },
        {
            title: "VEILLE STRATÉGIQUE AVEC CHATGPT ET PERPLEXITY",
            duration: "2H",
            points: [
                "Présentation et prise en main des outils Perplexity et ChatGPT pour la veille",
                "Techniques pour identifier, collecter et analyser efficacement des informations stratégiques",
                "Réalisation d’une veille stratégique selon des critères professionnels précis"
            ]
        },
        {
            title: "MISE EN APPLICATION ET SYNTHÈSE",
            duration: "2H",
            points: [
                "Mise en place d’une veille stratégique complète",
                "Analyse critique des résultats obtenus et axes d’amélioration"
            ]
        },
        {
            title: "APPROFONDISSEMENT TECHNIQUE DES MODÈLES GPT",
            duration: "3H",
            points: [
                "Les GPT : définition, sources, exemples, architecture détaillée",
                "Tokenisation et gestion des contextes (tokens, prompts, mémoire)",
                "Processus d’entraînement des modèles GPT",
                "Comparaison approfondie (GPT-3.5, GPT-4 and beyond)",
                "Méthodologie pour choisir et adapter le modèle selon les besoins"
            ]
        },
        {
            title: "CRÉATION ET OPTIMISATION DE ROUTINES AUTOMATISÉES",
            duration: "2H",
            points: [
                "Structurer des scénarios récurrents en routines automatisées avec GPT",
                "Méthodes rapides de test et optimisation pour des résultats concrets",
                "Création d’une routine simplifiée pour automatiser une tâche courante"
            ]
        },
        {
            title: "TECHNIQUES AVANCÉES DE QUESTIONNEMENT",
            duration: "2H",
            points: [
                "Techniques efficaces de questionnement pour exploiter pleinement les GPT",
                "Stratégies de veille technologique avec ChatGPT",
                "Mise en place d’une stratégie personnelle d’apprentissage continu"
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>IA & Veille Stratégique - Formation | Meta DX School</title>
                <meta name="description" content="Maîtrisez ChatGPT, Perplexity et les techniques de prompting. Formation IA de 2 jours pour booster votre veille stratégique." />
            </Helmet>

            <style>{`
                .formation-ia-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    color: #1e293b;
                    padding-bottom: 6rem;
                }

                .hero-ia {
                    background: linear-gradient(135deg, #1c1e4c 0%, #10b981 100%);
                    color: white;
                    padding: 8rem 2rem 6rem;
                    position: relative;
                    overflow: hidden;
                }

                .hero-ia::before {
                    content: '';
                    position: absolute;
                    top: -50%; right: -10%;
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

                .hero-ia h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                }

                .hero-ia p {
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
                    border-left: 4px solid #10b981;
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

                .module-card:hover { border-color: #10b981; }

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

                .point-list li svg { color: #10b981; flex-shrink: 0; margin-top: 3px; }

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
                    background: #f0fdf4;
                    padding: 1.5rem;
                    border-radius: 20px;
                    margin-top: 2rem;
                    border: 1px dashed #10b981;
                }

                .date-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 0.75rem 0;
                    border-bottom: 1px solid rgba(16, 185, 129, 0.1);
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: #065f46;
                }

                @media(max-width: 900px) {
                    .main-grid { grid-template-columns: 1fr; }
                    .hero-ia h1 { font-size: 2.5rem; }
                }
            `}</style>

            <div className="formation-ia-page">
                <header className="hero-ia">
                    <div className="container">
                        <span className="badge-v">V12 – MAJ 18/06/2026</span>
                        <h1>INTELLIGENCES ARTIFICIELLES ET VEILLE STRATÉGIQUE</h1>
                        <p>
                            Maîtrisez les outils de demain (ChatGPT, Perplexity) et les techniques de prompting pour transformer votre productivité et votre veille métier.
                        </p>
                    </div>
                </header>

                <main className="container main-grid">
                    <div className="content">
                        {/* Présentation */}
                        <section className="card">
                            <div className="section-head">
                                <Cpu color="#10b981" />
                                <h2>Pourquoi cette formation ?</h2>
                            </div>
                            <p style={{lineHeight: 1.8, color: '#475569', marginBottom: '2rem'}}>
                                L'IA transforme en profondeur les organisations. D’ici 3 ans, 287 000 salariés devront être sensibilisés à l'IA. Cette formation vous donne les clés pour ne pas seulement subir cette révolution, mais pour l'utiliser comme un levier stratégique.
                            </p>
                            <div className="stats-bar">
                                <div className="stat-box">
                                    <span className="stat-label">Durée</span>
                                    <span className="stat-val">2 jours (14h)</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Public</span>
                                    <span className="stat-val">Tout public</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Prérequis</span>
                                    <span className="stat-val">Usage ordi basique</span>
                                </div>
                            </div>
                            <div style={{background: '#eff6ff', padding: '1.5rem', borderRadius: '16px', borderLeft: '5px solid #3b82f6'}}>
                                <h4 style={{fontWeight: 800, color: '#1e40af', marginBottom: '0.5rem'}}>OFFRE EXCLUSIVE</h4>
                                <p style={{fontSize: '0.95rem', color: '#1e40af', margin:0}}>
                                    <strong>1 mois d'abonnement ChatGPT offert</strong> à chaque participant pour prolonger la mise en pratique !
                                </p>
                            </div>
                        </section>

                        {/* Programme */}
                        <section className="card">
                            <div className="section-head">
                                <BookOpen color="#10b981" />
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

                        {/* Pédagogie */}
                        <section className="card">
                            <div className="section-head">
                                <Star color="#10b981" />
                                <h2>Méthodes & Évaluation</h2>
                            </div>
                            <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem'}}>
                                <div>
                                    <h4 style={{fontWeight: 800, marginBottom: '1rem', color: '#1c1e4c'}}>Pédagogie</h4>
                                    <p style={{fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6}}>Alternance de théorie et de démonstrations. Études de cas concrets et mise en place de routines automatisées réelles.</p>
                                </div>
                                <div>
                                    <h4 style={{fontWeight: 800, marginBottom: '1rem', color: '#1c1e4c'}}>Évaluation</h4>
                                    <p style={{fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6}}>Quiz d'auto-positionnement au démarrage et quiz final de validation des acquis en fin de session.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <aside className="sidebar">
                        {/* Prix */}
                        <div className="pricing-card">
                            <span style={{fontSize: '0.8rem', fontWeight: 800, opacity: 0.8, textTransform: 'uppercase'}}>Tarif Inter-entreprise</span>
                            <div className="price">950 € TTC <span style={{fontSize: '1rem', color:'white', opacity:0.6}}>/pers</span></div>
                            <p style={{fontSize: '0.85rem', opacity: 0.8}}>Prise en charge OPCO possible. Conseils en financement offerts.</p>
                            <a href="/contact" target="_blank" rel="noopener noreferrer" className="btn-reg">COMMENT NOUS CONTACTER</a>
                            <div style={{marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display:'flex', alignItems:'center', gap:'1rem', textAlign:'left'}}>
                                <Download size={24} color="#ef9a37" />
                                <div>
                                    <div style={{fontWeight: 800, fontSize: '0.9rem'}}>BROCHURE PDF</div>
                                    <div style={{fontSize: '0.7rem', opacity: 0.7}}>Fiche technique complète</div>
                                </div>
                            </div>
                        </div>

                        {/* Dates */}
                        <div className="dates-box">
                            <h4 style={{fontWeight: 800, color: '#065f46', marginBottom: '1rem', display:'flex', alignItems:'center', gap:'0.5rem'}}>
                                <Calendar size={18} /> PROCHAINES SESSIONS
                            </h4>
                            <div className="date-item">
                                <span>13 & 14 Octobre 2025</span>
                                <span style={{fontSize:'0.7rem', color:'#10b981'}}>PRÉSENTIEL</span>
                            </div>
                            <div className="date-item">
                                <span>20 & 21 Novembre 2025</span>
                                <span style={{fontSize:'0.7rem', color:'#10b981'}}>PRÉSENTIEL</span>
                            </div>
                            <div className="date-item">
                                <span>09 & 10 Décembre 2025</span>
                                <span style={{fontSize:'0.7rem', color:'#3b82f6'}}>DISTANCIEL</span>
                            </div>
                        </div>

                        {/* Expert */}
                        <div className="expert-box">
                            <div style={{background: '#f1f5f9', padding: '10px', borderRadius: '12px'}}><Users color="#1c1e4c" /></div>
                            <div className="expert-info">
                                <h5>Frédéric Murbach</h5>
                                <p>Expert Business Dev & Nouvelles Tech (20 ans d'exp.)</p>
                            </div>
                        </div>

                        {/* Bonus */}
                        <div style={{background: 'white', padding: '1.5rem', borderRadius: '24px', marginTop: '2rem', border: '1px solid #f1f5f9', textAlign: 'center'}}>
                            <Coffee color="#ef9a37" style={{margin: '0 auto 1rem'}} />
                            <h5 style={{fontWeight: 800, color: '#1c1e4c'}}>ACCUEIL CONVIVIAL</h5>
                            <p style={{fontSize: '0.8rem', color: '#64748b'}}>Petit-déjeuner et viennoiseries offerts pour démarrer la journée dans les meilleures conditions.</p>
                        </div>
                    </aside>
                </main>
            </div>
        </>
    );
}
