import { Helmet } from 'react-helmet-async';
import { 
    Users, 
    BookOpen, 
    CheckCircle2, 
    Star, 
    Coffee,
    MessageSquare,
    Calendar,
    Download,
    Accessibility,
    Target
} from 'lucide-react';

export default function FormationCommMultiActeurs() {
    const modules = [
        {
            title: "FONDAMENTAUX DE LA COMMUNICATION",
            duration: "5H",
            points: [
                "Théorie : Modèle de la communication (émetteur, message, récepteur, bruit)",
                "Verbal vs. non verbal : Posture, gestes, regard, ton de voix",
                "Écoute active : Techniques de questionnement, reformulation, empathie",
                "Assertivité : Expression des besoins, gestion des émotions",
                "Pratique : Jeux de rôles sur accueil et information des usagers"
            ]
        },
        {
            title: "COMMUNICATION INTERPERSONNELLE ET MANAGEMENT",
            duration: "5H",
            points: [
                "Styles de communication : Profil DISC, MBTI et adaptation",
                "Communication de groupe : Réunions, briefings, débriefings",
                "Gestion des conflits : Méthode DESC, négociation",
                "Communication interculturelle : Spécificités culturelles et langues de travail",
                "Pratique : Étude de cas réelle – résolution de conflit en équipe pluridisciplinaire"
            ]
        },
        {
            title: "COMMUNICATION ÉCRITE ET DIGITALE",
            duration: "5H",
            points: [
                "Supports écrits : Email, rapports, notes de service, affichage",
                "Rédaction professionnelle : Structure, clarté, ton",
                "Outils digitaux : Intranet, messagerie instantanée, réseaux sociaux professionnels",
                "Charte graphique et éditoriale : Cohérence visuelle et stylistique",
                "Pratique : Rédaction d’une newsletter interne et d’un post LinkedIn"
            ]
        },
        {
            title: "ÉLABORATION ET PILOTAGE D’UN PLAN DE COMMUNICATION",
            duration: "6H",
            points: [
                "Diagnostic : Analyse SWOT et enquêtes de satisfaction",
                "Objectifs SMART : Définition et indicateurs de performance (KPI)",
                "Cibles et messages : Mapping des parties prenantes",
                "Médias et canaux : Choix selon portée, coût, accessibilité",
                "Suivi et évaluation : Tableaux de bord et retours d’expérience",
                "Pratique : Conception d’un mini-plan de communication projet"
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>Communication Multi-Acteurs - Formation | Meta DX School</title>
                <meta name="description" content="Maîtrisez la communication adaptée aux interactions multi-acteurs : clients, usagers, collègues et partenaires. Formation de 3 jours." />
            </Helmet>

            <style>{`
                .formation-comm-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    color: #1e293b;
                    padding-bottom: 6rem;
                }

                .hero-comm {
                    background: linear-gradient(135deg, #1c1e4c 0%, #ef4444 100%);
                    color: white;
                    padding: 8rem 2rem 6rem;
                    position: relative;
                    overflow: hidden;
                }

                .hero-comm::before {
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

                .hero-comm h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                }

                .hero-comm p {
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

                .module-card {
                    background: #f8fafc;
                    border-radius: 16px;
                    padding: 1.5rem;
                    margin-bottom: 1.25rem;
                    border: 1px solid #e2e8f0;
                    transition: border-color 0.2s;
                }

                .module-card:hover { border-color: #ef4444; }

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

                .point-list li svg { color: #ef4444; flex-shrink: 0; margin-top: 3px; }

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
                    background: #fff5f5;
                    padding: 1.5rem;
                    border-radius: 20px;
                    margin-top: 2rem;
                    border: 1px dashed #ef4444;
                }

                .date-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 0.75rem 0;
                    border-bottom: 1px solid rgba(239, 68, 68, 0.1);
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: #991b1b;
                }

                @media(max-width: 900px) {
                    .main-grid { grid-template-columns: 1fr; }
                    .hero-comm h1 { font-size: 2.5rem; }
                }
            `}</style>

            <div className="formation-comm-page">
                <header className="hero-comm">
                    <div className="container">
                        <span className="badge-v">V12 – MAJ 18/06/2026</span>
                        <h1>COMMUNICATION ADAPTÉE AUX INTERACTIONS MULTI-ACTEURS</h1>
                        <p>
                            Maîtrisez les codes de la communication pour interagir avec efficacité auprès de tous vos partenaires : clients, usagers, collègues et prestataires.
                        </p>
                    </div>
                </header>

                <main className="container main-grid">
                    <div className="content">
                        {/* Présentation */}
                        <section className="card">
                            <div className="section-head">
                                <MessageSquare color="#ef4444" />
                                <h2>Une compétence universelle</h2>
                            </div>
                            <p style={{lineHeight: 1.8, color: '#475569', marginBottom: '2rem'}}>
                                Tous les secteurs requièrent des compétences en communication adaptées aux interactions multi-acteurs. 
                                Cette formation vous apporte les outils pour adapter votre style et vos messages à chaque interlocuteur, 
                                en situations normales comme en périodes de crise.
                            </p>
                            <div className="stats-bar">
                                <div className="stat-box">
                                    <span className="stat-label">Durée</span>
                                    <span className="stat-val">3 jours (21h)</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Public</span>
                                    <span className="stat-val">Salariés (3-12 pers)</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Prérequis</span>
                                    <span className="stat-val">Aucun</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Accessibilité</span>
                                    <span className="stat-val">Référent Accessibilité</span>
                                </div>
                            </div>
                        </section>

                        {/* Objectifs */}
                        <section className="card">
                            <div className="section-head">
                                <Target color="#ef4444" />
                                <h2>Objectifs Pédagogiques</h2>
                            </div>
                            <ul className="point-list">
                                <li><CheckCircle2 size={16} /> Comprendre et appliquer les fondamentaux (verbal, non-verbal, écrit)</li>
                                <li><CheckCircle2 size={16} /> Adapter son style aux différents interlocuteurs (clients, équipes, partenaires)</li>
                                <li><CheckCircle2 size={16} /> Conduire des échanges efficaces même en situation de conflit</li>
                                <li><CheckCircle2 size={16} /> Maîtriser les outils numériques de communication interne/externe</li>
                                <li><CheckCircle2 size={16} /> Construire un plan de communication opérationnel aligné sur vos enjeux</li>
                            </ul>
                        </section>

                        {/* Programme */}
                        <section className="card">
                            <div className="section-head">
                                <BookOpen color="#ef4444" />
                                <h2>Programme de la formation</h2>
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
                                <Star color="#ef4444" />
                                <h2>Méthodes & Évaluation</h2>
                            </div>
                            <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem'}}>
                                <div>
                                    <h4 style={{fontWeight: 800, marginBottom: '1rem', color: '#1c1e4c'}}>Pédagogie</h4>
                                    <p style={{fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6}}>
                                        Alternance de théorie (30%) et de pratique (70%). Exercices individuels, collectifs et études de cas réels.
                                    </p>
                                </div>
                                <div>
                                    <h4 style={{fontWeight: 800, marginBottom: '1rem', color: '#1c1e4c'}}>Évaluation</h4>
                                    <p style={{fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6}}>
                                        Quiz amont de positionnement. Quiz aval et présentation orale d'un plan de communication en fin de session.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <aside className="sidebar">
                        {/* Prix */}
                        <div className="pricing-card">
                            <span style={{fontSize: '0.8rem', fontWeight: 800, opacity: 0.8, textTransform: 'uppercase'}}>Tarif Inter-entreprise</span>
                            <div className="price">1100 € TTC <span style={{fontSize: '1rem', color:'white', opacity:0.6}}>/pers</span></div>
                            <p style={{fontSize: '0.85rem', opacity: 0.8}}>Financement possible par l'OPCO (Tarif préférentiel OPCO Mobilités disponible).</p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-reg">S'INSCRIRE À LA SESSION</a>
                            <div style={{marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display:'flex', alignItems:'center', gap:'1rem', textAlign:'left'}}>
                                <Download size={24} color="#ef9a37" />
                                <div>
                                    <div style={{fontWeight: 800, fontSize: '0.9rem'}}>FICHE TECHNIQUE</div>
                                    <div style={{fontSize: '0.7rem', opacity: 0.7}}>Télécharger le PDF complet</div>
                                </div>
                            </div>
                        </div>

                        {/* Dates */}
                        <div className="dates-box">
                            <h4 style={{fontWeight: 800, color: '#991b1b', marginBottom: '1rem', display:'flex', alignItems:'center', gap:'0.5rem'}}>
                                <Calendar size={18} /> SESSION VIRTUELLE
                            </h4>
                            <div className="date-item"><span>06, 07 & 08 Octobre 2025</span></div>
                            <div className="date-item"><span>17, 18 & 24 Mars 2026</span></div>
                            
                            <h4 style={{fontWeight: 800, color: '#991b1b', margin: '1.5rem 0 1rem', display:'flex', alignItems:'center', gap:'0.5rem'}}>
                                <Calendar size={18} /> SESSION PRÉSENTIEL
                            </h4>
                            <div className="date-item"><span>03, 04 & 05 Novembre 2025</span></div>
                            <div className="date-item"><span>20, 21 & 26 Janvier 2026</span></div>
                        </div>

                        {/* Expert */}
                        <div className="expert-box">
                            <div style={{background: '#f1f5f9', padding: '10px', borderRadius: '12px'}}><Users color="#1c1e4c" /></div>
                            <div className="expert-info">
                                <h5>Nicolas Rubé</h5>
                                <p>Expert Management, Comm & RSE</p>
                            </div>
                        </div>

                        {/* Bonus */}
                        <div style={{background: 'white', padding: '1.5rem', borderRadius: '24px', marginTop: '2rem', border: '1px solid #f1f5f9', textAlign: 'center'}}>
                            <Coffee color="#ef9a37" style={{margin: '0 auto 1rem'}} />
                            <h5 style={{fontWeight: 800, color: '#1c1e4c'}}>CONVIVIALITÉ</h5>
                            <p style={{fontSize: '0.8rem', color: '#64748b'}}>Viennoiseries offertes pour le petit-déjeuner en présentiel.</p>
                        </div>

                        <div style={{marginTop: '2rem', padding: '1rem', background: '#eff6ff', borderRadius: '16px', border: '1px solid #dbeafe'}}>
                            <Accessibility size={20} color="#3b82f6" style={{marginBottom:'0.5rem'}} />
                            <p style={{fontSize: '0.75rem', color: '#1e40af', margin: 0}}>
                                <strong>Accessibilité :</strong> Un accompagnement spécifique est possible. Contactez notre référent dédié.
                            </p>
                        </div>
                    </aside>
                </main>
            </div>
        </>
    );
}
