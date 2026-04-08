import { Helmet } from 'react-helmet-async';
import { 
    BookOpen, 
    CheckCircle2, 
    Star, 
    Coffee,
    Monitor,
    Download,
    Accessibility,
    Target,
    Zap
} from 'lucide-react';

export default function FormationCommDigitale() {
    const modules = [
        {
            title: "LA COMMUNICATION DIGITALE DANS SON ENSEMBLE",
            duration: "2H",
            points: [
                "Définition, objectifs et enjeux pour les entreprises",
                "Évolution des usages : des e-mails à TikTok et LinkedIn",
                "Supports numériques : emailing, réseaux sociaux, outils collaboratifs"
            ]
        },
        {
            title: "CONSTRURE UN MESSAGE IMPACTANT",
            duration: "3H",
            points: [
                "Adapter son message à chaque canal (social, newsletter, email)",
                "L’écriture web : clarté, concision et structure",
                "Impact visuel : images, vidéos et infographies"
            ]
        },
        {
            title: "BONNES PRATIQUES DE L'EMAIL PRO",
            duration: "2H",
            points: [
                "Rédiger des mails efficaces et professionnels",
                "Gestion des destinataires, de l’objet et de la signature",
                "Gérer les échanges et relances pour plus d'efficacité"
            ]
        },
        {
            title: "RÉSEAUX SOCIAUX EN ENTREPRISE",
            duration: "2H",
            points: [
                "Choisir ses réseaux selon ses cibles (FB, Insta, LinkedIn)",
                "Adopter une posture professionnelle en ligne",
                "Personal branding : valoriser son expérience"
            ]
        },
        {
            title: "COMMUNICATION INTERNE DIGITALE",
            duration: "2H",
            points: [
                "Outils collaboratifs : Teams, Slack, Google Workspace",
                "Événementiel numérique : newsletter interne, blog",
                "Faire adhérer les collaborateurs aux processus digitaux"
            ]
        },
        {
            title: "ATELIERS PRATIQUES",
            duration: "3H",
            points: [
                "Rédaction réelle d’un post LinkedIn professionnel",
                "Conception d’un mini-plan de communication digitale événementiel"
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>Communication Digitale Entreprise - Formation | Meta DX School</title>
                <meta name="description" content="Boostez votre communication digitale. Maîtrisez les réseaux sociaux, l'écriture web et les outils collaboratifs. Formation de 2 jours." />
            </Helmet>

            <style>{`
                .formation-dig-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    color: #1e293b;
                    padding-bottom: 6rem;
                }

                .hero-dig {
                    background: linear-gradient(135deg, #ef4444 0%, #1c1e4c 100%);
                    color: white;
                    padding: 8rem 2rem 6rem;
                    position: relative;
                    overflow: hidden;
                }

                .hero-dig::before {
                    content: '';
                    position: absolute;
                    top: -20%; left: -5%;
                    width: 500px; height: 500px;
                    background: radial-gradient(circle, rgba(239, 154, 55, 0.1) 0%, transparent 70%);
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

                .hero-dig h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                }

                .hero-dig p {
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
                    border: 1px solid #f1f5f9;
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
                }

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

                @media(max-width: 900px) {
                    .main-grid { grid-template-columns: 1fr; }
                    .hero-dig h1 { font-size: 2.5rem; }
                }
            `}</style>

            <div className="formation-dig-page">
                <header className="hero-dig">
                    <div className="container">
                        <span className="badge-v">V4 – MAJ 27/08/2025</span>
                        <h1>LA COMMUNICATION DIGITALE AU SERVICE DE L’ENTREPRISE</h1>
                        <p>
                            Maîtrisez les codes du digital pour communiquer avec aisance, booster votre visibilité et fédérer vos collaborateurs.
                        </p>
                    </div>
                </header>

                <main className="container main-grid">
                    <div className="content">
                        <section className="card">
                            <div className="section-head">
                                <Zap color="#ef4444" />
                                <h2>Pourquoi cette formation ?</h2>
                            </div>
                            <p style={{lineHeight: 1.8, color: '#475569', marginBottom: '2rem'}}>
                                Cette formation permet aux salariés de communiquer avec aisance via les canaux digitaux. 
                                Dans un monde où les usages évoluent à une vitesse fulgurante (TikTok, LinkedIn, outils collaboratifs), 
                                savoir construire un message impactant et choisir les bons supports est devenu un impératif stratégique.
                            </p>
                            <div className="stats-bar">
                                <div className="stat-box">
                                    <span className="stat-label">Durée</span>
                                    <span className="stat-val">2 jours (14h)</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Public</span>
                                    <span className="stat-val">Salariés (3-12 pers)</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Prérequis</span>
                                    <span className="stat-val">Aise avec l'ordi</span>
                                </div>
                            </div>
                        </section>

                        <section className="card">
                            <div className="section-head">
                                <Target color="#ef4444" />
                                <h2>Objectifs Pédagogiques</h2>
                            </div>
                            <ul className="point-list">
                                <li><CheckCircle2 size={16} /> Comprendre les enjeux et usages pro de la comm digitale</li>
                                <li><CheckCircle2 size={16} /> Choisir les bons outils pour l'interne et l'externe</li>
                                <li><CheckCircle2 size={16} /> Améliorer l’image pro et la visibilité de l’entreprise en ligne</li>
                                <li><CheckCircle2 size={16} /> Maîtriser l'écriture web et l'impact visuel</li>
                            </ul>
                        </section>

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

                        <section className="card">
                            <div className="section-head">
                                <Star color="#ef4444" />
                                <h2>Méthodes & Évaluation</h2>
                            </div>
                            <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem'}}>
                                <div>
                                    <h4 style={{fontWeight: 800, marginBottom: '1rem', color: '#1c1e4c'}}>Pédagogie Active</h4>
                                    <p style={{fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6}}>
                                        Alternance de théorie, démonstrations et mises en pratique réelles. Travaux sur vos propres cas d'entreprise.
                                    </p>
                                </div>
                                <div>
                                    <h4 style={{fontWeight: 800, marginBottom: '1rem', color: '#1c1e4c'}}>Évaluation</h4>
                                    <p style={{fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6}}>
                                        Quiz d'auto-positionnement au démarrage. Quiz final de validation des acquis en fin de session.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <aside className="sidebar">
                        <div className="pricing-card">
                            <span style={{fontSize: '0.8rem', fontWeight: 800, opacity: 0.8, textTransform: 'uppercase'}}>Tarif Inter-entreprise</span>
                            <div className="price">600 € HT <span style={{fontSize: '1rem', color:'white', opacity:0.6}}>/pers</span></div>
                            <p style={{fontSize: '0.85rem', opacity: 0.8}}>Prise en charge OPCO possible (Tarif préférentiel OPCO Mobilités disponible).</p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-reg">M'INSCRIRE</a>
                            <div style={{marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display:'flex', alignItems:'center', gap:'1rem', textAlign:'left'}}>
                                <Download size={24} color="#ef9a37" />
                                <div>
                                    <div style={{fontWeight: 800, fontSize: '0.9rem'}}>PROGRAMME PDF</div>
                                    <div style={{fontSize: '0.7rem', opacity: 0.7}}>Fiche technique complète</div>
                                </div>
                            </div>
                        </div>

                        <div className="expert-box">
                            <div style={{background: '#f1f5f9', padding: '10px', borderRadius: '12px'}}><Monitor color="#1c1e4c" /></div>
                            <div className="expert-info">
                                <h5>Romane Villanti</h5>
                                <p>Experte Com Digitale & Pédagogie Active</p>
                            </div>
                        </div>

                        <div style={{background: 'white', padding: '1.5rem', borderRadius: '24px', marginTop: '2rem', border: '1px solid #f1f5f9', textAlign: 'center'}}>
                            <Coffee color="#ef9a37" style={{margin: '0 auto 1rem'}} />
                            <h5 style={{fontWeight: 800, color: '#1c1e4c'}}>BIENVENUE</h5>
                            <p style={{fontSize: '0.8rem', color: '#64748b'}}>Viennoiseries et café offerts pour les sessions en présentiel.</p>
                        </div>

                        <div style={{marginTop: '2rem', padding: '1rem', background: '#eff6ff', borderRadius: '16px', border: '1px solid #dbeafe'}}>
                            <Accessibility size={20} color="#3b82f6" style={{marginBottom:'0.5rem'}} />
                            <p style={{fontSize: '0.75rem', color: '#1e40af', margin: 0}}>
                                <strong>Accessibilité :</strong> Formation accessible aux PMR, contactez notre référent.
                            </p>
                        </div>
                    </aside>
                </main>
            </div>
        </>
    );
}
