import { Helmet } from 'react-helmet-async';
import { 
    Mic2, 
    BookOpen, 
    CheckCircle2, 
    Coffee,
    Users,
    Calendar,
    Download,
    Accessibility,
    Target,
    Layers
} from 'lucide-react';

export default function FormationCommImpact() {
    const modules = [
        {
            title: "LES BASES D’UNE COMMUNICATION EFFICACE",
            duration: "7H",
            points: [
                "Composantes de la communication (mots, ton, posture)",
                "Communication verbale, non verbale et para-verbale",
                "Écoute active, reformulation et techniques de questionnement",
                "Techniques d’argumentation et de persuasion",
                "Identifier et adapter son style aux profils et contextes",
                "Communication écrite : e-mails pro, notes, comptes-rendus",
                "Pratique : Accueil téléphonique, brief d'équipe, transmission"
            ]
        },
        {
            title: "COMMUNICATION EN MODE GESTION DE PROJET",
            duration: "7H",
            points: [
                "Maîtrise de Google Workspace (Gmail, Drive, Docs, Sheets)",
                "Gestion de projets avec Google Calendar et Tasks",
                "Collaboration en ligne : réunions Meet et bonnes pratiques",
                "Communication assertive : exprimer un désaccord calmement",
                "Gestion des situations tendues, conflits ou incompréhensions"
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>Communication Professionnelle & Impact - Formation | Meta DX School</title>
                <meta name="description" content="Améliorez votre impact à l'oral et à l'écrit. Maîtrisez la communication en mode gestion de projet avec Google Workspace." />
            </Helmet>

            <style>{`
                .formation-impact-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    color: #1e293b;
                    padding-bottom: 6rem;
                }

                .hero-impact {
                    background: linear-gradient(135deg, #1c1e4c 0%, #3b82f6 100%);
                    color: white;
                    padding: 8rem 2rem 6rem;
                    position: relative;
                    overflow: hidden;
                }

                .hero-impact::before {
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

                .hero-impact h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                }

                .hero-impact p {
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

                .stat-box {
                    background: #f8fafc;
                    padding: 1.25rem;
                    border-radius: 16px;
                    border-left: 4px solid #3b82f6;
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

                .point-list li svg { color: #3b82f6; flex-shrink: 0; margin-top: 3px; }

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

                .dates-box {
                    background: #eff6ff;
                    padding: 1.5rem;
                    border-radius: 20px;
                    margin-top: 2rem;
                    border: 1px dashed #3b82f6;
                    max-height: 400px;
                    overflow-y: auto;
                }

                .date-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 0.75rem 0;
                    border-bottom: 1px solid rgba(59, 130, 246, 0.1);
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: #1e40af;
                }

                @media(max-width: 900px) {
                    .main-grid { grid-template-columns: 1fr; }
                    .hero-impact h1 { font-size: 2.5rem; }
                }
            `}</style>

            <div className="formation-impact-page">
                <header className="hero-impact">
                    <div className="container">
                        <span className="badge-v">V3 – MAJ 27/08/2025</span>
                        <h1>COMMUNICATION PROFESSIONNELLE : IMPACT ORAL ET ÉCRIT</h1>
                        <p>
                            Maîtrisez les fondamentaux de la communication et les outils collaboratifs pour un impact maximal en équipe.
                        </p>
                    </div>
                </header>

                <main className="container main-grid">
                    <div className="content">
                        <section className="card">
                            <div className="section-head">
                                <Mic2 color="#3b82f6" />
                                <h2>Une communication structurée</h2>
                            </div>
                            <p style={{lineHeight: 1.8, color: '#475569', marginBottom: '2rem'}}>
                                Cette formation permet de communiquer au sein d’une équipe en mode gestion de projet. 
                                Que ce soit en présentiel ou à distance, vous apprendrez à structurer des messages clairs, 
                                concis et convaincants tout en gérant les tensions avec assertivité.
                            </p>
                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem'}}>
                                <div className="stat-box">
                                    <span className="stat-label">Durée</span>
                                    <span className="stat-val">2 jours (14h)</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Public</span>
                                    <span className="stat-val">Salariés & Managers</span>
                                </div>
                                <div className="stat-box" style={{borderLeftColor: '#ef9a37'}}>
                                    <span className="stat-label">Méthode</span>
                                    <span className="stat-val">Théorie + Pratique</span>
                                </div>
                            </div>
                        </section>

                        <section className="card">
                            <div className="section-head">
                                <Target color="#3b82f6" />
                                <h2>Objectifs Pédagogiques</h2>
                            </div>
                            <ul className="point-list">
                                <li><CheckCircle2 size={16} /> Maîtriser les bases du verbal, non-verbal et écrit</li>
                                <li><CheckCircle2 size={16} /> Adapter sa communication aux situations professionnelles</li>
                                <li><CheckCircle2 size={16} /> Structurer un message clair et convaincant</li>
                                <li><CheckCircle2 size={16} /> Gérer les tensions et malentendus avec assertivité</li>
                                <li><CheckCircle2 size={16} /> Utiliser Google Workspace pour la collaboration agile</li>
                            </ul>
                        </section>

                        <section className="card">
                            <div className="section-head">
                                <BookOpen color="#3b82f6" />
                                <h2>Contenu du programme</h2>
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
                                <Layers color="#3b82f6" />
                                <h2>Modalités & Évaluation</h2>
                            </div>
                            <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem'}}>
                                <div>
                                    <h4 style={{fontWeight: 800, marginBottom: '1rem', color: '#1c1e4c'}}>Pédagogie</h4>
                                    <p style={{fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6}}>
                                        Démonstrations par l'exemple, exercices individuels et collectifs. Études de cas sectoriels.
                                    </p>
                                </div>
                                <div>
                                    <h4 style={{fontWeight: 800, marginBottom: '1rem', color: '#1c1e4c'}}>Validation</h4>
                                    <p style={{fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6}}>
                                        Auto-positionnement amont et quiz de validation des acquis en fin de formation.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <aside className="sidebar">
                        <div className="pricing-card">
                            <span style={{fontSize: '0.8rem', fontWeight: 800, opacity: 0.8, textTransform: 'uppercase'}}>Tarif Inter-entreprise</span>
                            <div className="price">550 € HT <span style={{fontSize: '1rem', color:'white', opacity:0.6}}>/pers</span></div>
                            <p style={{fontSize: '0.85rem', opacity: 0.8}}>Prise en charge OPCO possible. Conseils financement disponibles.</p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-reg">JE M'INSCRIS</a>
                            <div style={{marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display:'flex', alignItems:'center', gap:'1rem', textAlign:'left'}}>
                                <Download size={24} color="#ef9a37" />
                                <div>
                                    <div style={{fontWeight: 800, fontSize: '0.9rem'}}>FICHE TECHNIQUE</div>
                                    <div style={{fontSize: '0.7rem', opacity: 0.7}}>Programme complet PDF</div>
                                </div>
                            </div>
                        </div>

                        <div className="dates-box">
                            <h4 style={{fontWeight: 800, color: '#1e40af', marginBottom: '1rem', display:'flex', alignItems:'center', gap:'0.5rem'}}>
                                <Calendar size={18} /> SESSIONS VIRTUELLES
                            </h4>
                            {[
                                "06-07 Octobre 2025", "03-04 Novembre 2025", "08-09 Décembre 2025",
                                "26-27 Janvier 2026", "23-24 Avril 2026", "11-12 Mai 2026",
                                "08-09 Juin 2026", "09-10 Juillet 2026", "13-14 Août 2026",
                                "14-15 Septembre 2026", "15-16 Octobre 2026", "26-27 Novembre 2026"
                            ].map(date => (
                                <div className="date-item" key={date}><span>{date}</span></div>
                            ))}
                        </div>

                        <div className="expert-box">
                            <div style={{background: '#f1f5f9', padding: '10px', borderRadius: '12px'}}><Users color="#1c1e4c" /></div>
                            <div className="expert-info">
                                <h5>Fernande Onanda</h5>
                                <p>Formatrice Experte en Communication</p>
                            </div>
                        </div>

                        <div style={{background: 'white', padding: '1.5rem', borderRadius: '24px', marginTop: '2rem', border: '1px solid #f1f5f9', textAlign: 'center'}}>
                            <Coffee color="#ef9a37" style={{margin: '0 auto 1rem'}} />
                            <h5 style={{fontWeight: 800, color: '#1c1e4c'}}>ACCUEIL</h5>
                            <p style={{fontSize: '0.8rem', color: '#64748b'}}>Viennoiseries offertes pour toutes les sessions en présentiel.</p>
                        </div>

                        <div style={{marginTop: '2rem', padding: '1rem', background: '#eff6ff', borderRadius: '16px', border: '1px solid #dbeafe'}}>
                            <Accessibility size={20} color="#3b82f6" style={{marginBottom:'0.5rem'}} />
                            <p style={{fontSize: '0.75rem', color: '#1e40af', margin: 0}}>
                                <strong>Handicap :</strong> Formation accessible, contactez notre référent dédié.
                            </p>
                        </div>
                    </aside>
                </main>
            </div>
        </>
    );
}
