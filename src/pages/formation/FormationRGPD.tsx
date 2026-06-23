import { Helmet } from 'react-helmet-async';
import { 
    ShieldCheck, 
    Users, 
    BookOpen, 
    CheckCircle2, 
    Star, 
    Coffee,
    Fingerprint,
    Globe,
    HardDrive,
    Database
} from 'lucide-react';

export default function FormationRGPD() {
    const modules = [
        {
            title: "PANORAMA DE LA SSI",
            duration: "4H",
            points: [
                "Définitions et enjeux de la cybersécurité",
                "Types de menaces : malware, ransomware, phishing, fuite de données",
                "Exemples concrets d'attaques récentes en entreprise",
                "Impact humain, technique et légal"
            ]
        },
        {
            title: "SÉCURITÉ DE L’AUTHENTIFICATION",
            duration: "3H",
            points: [
                "Mots de passe : complexité, renouvellement, gestionnaires",
                "Gestion des identifiants professionnels",
                "Authentification multi-facteurs (MFA)",
                "Cas pratiques : création d'un mot de passe robuste"
            ]
        },
        {
            title: "SÉCURITÉ SUR INTERNET",
            duration: "4H",
            points: [
                "Phishing et autres formes d'attaques par email",
                "Sites frauduleux, extensions malveillantes",
                "Utilisation sécurisée du cloud et des outils collaboratifs",
                "Exercice : repérer une tentative de fraude par email"
            ]
        },
        {
            title: "POSTE DE TRAVAIL & NOMADISME",
            duration: "3H",
            points: [
                "Mises à jour, antivirus, chiffrement des données",
                "Bonnes pratiques sur clé USB, smartphone, poste distant",
                "VPN et connexions sécurisées (WiFi public, nomadisme)",
                "Comportements à risque à éviter en déplacement"
            ]
        },
        {
            title: "RGPD & PROTECTION DES DONNÉES",
            duration: "7H",
            points: [
                "Principes clés du RGPD : transparence, finalité, proportionnalité",
                "Données sensibles vs données personnelles",
                "Responsabilités individuelles et collectives",
                "Mise en conformité : exemples concrets et droit à l'oubli"
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>RGPD & Cybersécurité - Formation | Meta DX School</title>
                <meta name="description" content="Formation certifiante en cybersécurité et RGPD. Adoptez les bons comportements pour protéger les données de votre entreprise." />
            </Helmet>

            <style>{`
                .formation-cyber-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    color: #1e293b;
                    padding-bottom: 6rem;
                }

                .hero-cyber {
                    background: linear-gradient(135deg, #1c1e4c 0%, #334155 100%);
                    color: white;
                    padding: 8rem 2rem 6rem;
                    position: relative;
                    overflow: hidden;
                }

                .hero-cyber::before {
                    content: '';
                    position: absolute;
                    top: -20%; left: -10%;
                    width: 500px; height: 500px;
                    background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
                    border-radius: 50%;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .badge-v {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 0.5rem 1.2rem;
                    border-radius: 50px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    display: inline-block;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .hero-cyber h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                }

                .hero-cyber p {
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
                    border-left: 4px solid #1c1e4c;
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
                .point-list li svg { color: #10b981; flex-shrink: 0; margin-top: 3px; }

                .dates-list {
                    margin-top: 2rem;
                }
                .date-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 0.75rem 0;
                    border-bottom: 1px solid #f1f5f9;
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: #475569;
                }

                @media(max-width: 900px) {
                    .main-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <div className="formation-cyber-page">
                <header className="hero-cyber">
                    <div className="container">
                        <span className="badge-v">V12 – MAJ 18/06/2026</span>
                        <h1>SENSIBILISATION RGPD & CYBERSÉCURITÉ</h1>
                        <p>
                            Protégez votre entreprise et vos données. Apprenez à identifier les menaces et à adopter les comportements responsables indispensables en 2025.
                        </p>
                    </div>
                </header>

                <main className="container main-grid">
                    <div className="content">
                        {/* Enjeux */}
                        <section className="card">
                            <div className="section-head">
                                <ShieldCheck color="#10b981" />
                                <h2>Les enjeux de la sécurité</h2>
                            </div>
                            <p style={{lineHeight: 1.8, color: '#475569', marginBottom: '2rem'}}>
                                Aujourd'hui, la sécurité informatique ne concerne plus seulement les techniciens. Chaque collaborateur est un maillon essentiel de la protection des données de la structure. Comprendre les menaces (phishing, ransomwares) et les obligations légales (RGPD) est devenu un impératif.
                            </p>
                            <div className="stats-bar">
                                <div className="stat-box">
                                    <span className="stat-label">Durée</span>
                                    <span className="stat-val">3 jours (21h)</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Public</span>
                                    <span className="stat-val">Tout public pro</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Méthodes</span>
                                    <span className="stat-val">Cas pratiques</span>
                                </div>
                            </div>
                        </section>

                        {/* Programme */}
                        <section className="card">
                            <div className="section-head">
                                <BookOpen color="#1c1e4c" />
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

                        {/* Expert */}
                        <section className="card" style={{border: '2px solid #10b981'}}>
                            <div className="section-head">
                                <Star color="#10b981" />
                                <h2>Intervenant Référent</h2>
                            </div>
                            <div style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
                                <div style={{background: '#f1f5f9', padding: '20px', borderRadius: '50%'}}><Users size={40} color="#1c1e4c" /></div>
                                <div>
                                    <h4 style={{fontWeight: 900, fontSize: '1.3rem', color: '#1c1e4c'}}>Dimitri Klopstein</h4>
                                    <p style={{marginTop: '0.5rem', lineHeight: 1.6, color: '#64748b'}}>
                                        Formateur tech iOS & web passionné. Expert dans la transmission de contenus clairs pour faire gagner en autonomie et en confiance sur les sujets techniques complexes.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <aside className="sidebar">
                        <div className="pricing-card">
                            <span style={{fontSize: '0.8rem', fontWeight: 800, opacity: 0.8, textTransform: 'uppercase'}}>Tarif Inter</span>
                            <div className="price">900 € TTC <span style={{fontSize: '1rem', color:'white', opacity:0.6}}>/pers</span></div>
                            <p style={{fontSize: '0.85rem', opacity: 0.8}}>Prise en charge OPCO possible.</p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-reg">CONTACTEZ-NOUS</a>
                        </div>

                        <div className="card" style={{marginTop: '2rem'}}>
                            <h4 style={{fontWeight: 800, marginBottom: '1.5rem', color: '#1c1e4c'}}>PROCHAINES DÉBATS</h4>
                            <div className="dates-list">
                                <div className="date-item"><span>07 - 09 Octobre 2025</span><span style={{color:'#3b82f6'}}>Virtuel</span></div>
                                <div className="date-item"><span>18 - 20 Nov. 2025</span><span style={{color:'#10b981'}}>Présentiel</span></div>
                                <div className="date-item"><span>16 - 18 Déc. 2025</span><span style={{color:'#3b82f6'}}>Virtuel</span></div>
                                <div className="date-item"><span>16 - 18 Janvier 2026</span><span style={{color:'#3b82f6'}}>Virtuel</span></div>
                            </div>
                        </div>

                        <div style={{background: 'white', padding: '1.5rem', borderRadius: '24px', border: '1px solid #f1f5f9', textAlign: 'center'}}>
                            <Coffee color="#ef9a37" style={{margin: '0 auto 1rem'}} />
                            <h5 style={{fontWeight: 800, color: '#1c1e4c'}}>PETIT-DÉJEUNER</h5>
                            <p style={{fontSize: '0.8rem', color: '#64748b'}}>Accueil café et viennoiseries offerts pour toutes nos sessions présentielles.</p>
                        </div>

                        <div style={{marginTop: '2rem', padding: '0 1rem'}}>
                            <h4 style={{fontWeight: 800, color: '#1c1e4c', marginBottom: '1rem', fontSize: '0.9rem'}}>COMPÉTENCES VISÉES</h4>
                            <ul className="point-list" style={{fontSize: '0.8rem'}}>
                                <li><Fingerprint size={14} /> Gestion d'authentification</li>
                                <li><Globe size={14} /> Navigation sécurisée</li>
                                <li><HardDrive size={14} /> Sécurité poste & nomadisme</li>
                                <li><Database size={14} /> Conformité RGPD</li>
                            </ul>
                        </div>
                    </aside>
                </main>
            </div>
        </>
    );
}
