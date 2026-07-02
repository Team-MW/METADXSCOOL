import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
    Clock, 
    Users, 
    CheckCircle2, 
    Accessibility, 
    Download,
    GraduationCap,
    TrendingUp,
    ShieldCheck,
    Monitor,
    Target
} from 'lucide-react';

export default function TP_NTC() {
    return (
        <>
            <Helmet>
                <title>TP NTC - Négociateur Technico-Commercial | Meta DX School</title>
                <meta name="description" content="Formation Titre Professionnel Négociateur Technico-Commercial Niveau 5 (Bac+2). Devenez expert de la vente technique et de la négociation complexe." />
            </Helmet>

            <style>{`
                .formation-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    color: #1e293b;
                    padding-bottom: 6rem;
                }

                .formation-hero {
                    background: linear-gradient(135deg, #1c1e4c 0%, #ef9a37 100%);
                    color: white;
                    padding: 8rem 2rem 6rem;
                    position: relative;
                    overflow: hidden;
                }

                .formation-hero::before {
                    content: '';
                    position: absolute;
                    top: -50%; right: -10%;
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
                    border-radius: 50%;
                }

                .hero-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .version-tag {
                    display: inline-block;
                    background: rgba(255, 255, 255, 0.1);
                    padding: 0.4rem 1rem;
                    border-radius: 50px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .formation-hero h1 {
                    font-size: 3rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1rem;
                    max-width: 900px;
                }
                .hero-subtitle {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #1c1e4c;
                    background: rgba(255,255,255,0.9);
                    display: inline-block;
                    padding: 0.5rem 1.5rem;
                    border-radius: 8px;
                    margin-bottom: 2rem;
                }

                .hero-desc {
                    font-size: 1.2rem;
                    line-height: 1.6;
                    opacity: 0.95;
                    max-width: 800px;
                }

                .main-layout {
                    max-width: 1200px;
                    margin: -4rem auto 0;
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 2.5rem;
                    padding: 0 2rem;
                    position: relative;
                    z-index: 10;
                }

                .info-card {
                    background: white;
                    border-radius: 20px;
                    padding: 2.5rem;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.06);
                    margin-bottom: 2.5rem;
                }

                .section-title {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: #1c1e4c;
                    margin-bottom: 2rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    border-bottom: 2px solid #f1f5f9;
                    padding-bottom: 1rem;
                }

                .quick-stats {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2.5rem;
                }
                .stat-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    background: #f8fafc;
                    padding: 1.25rem;
                    border-radius: 12px;
                    border-left: 4px solid #ef9a37;
                }
                .stat-icon { color: #ef9a37; flex-shrink: 0; }
                .stat-text { display: flex; flex-direction: column; }
                .stat-label { font-size: 0.75rem; color: #64748b; font-weight: 700; text-transform: uppercase; }
                .stat-value { font-size: 0.95rem; font-weight: 800; color: #1e293b; }

                .list-check { list-style: none; padding: 0; }
                .list-check li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                    font-size: 1rem;
                    line-height: 1.5;
                }
                .list-check li svg { color: #ef9a37; margin-top: 4px; flex-shrink: 0; }

                .sidebar { position: sticky; top: 2rem; align-self: start; }
                
                .cta-card {
                    background: #1c1e4c;
                    color: white;
                    border-radius: 20px;
                    padding: 2rem;
                    box-shadow: 0 15px 35px rgba(28, 30, 76, 0.2);
                    margin-bottom: 2.5rem;
                }

                .btn-primary {
                    display: block;
                    background: #ef9a37;
                    color: white;
                    padding: 1.25rem;
                    border-radius: 12px;
                    text-decoration: none;
                    font-weight: 800;
                    text-align: center;
                    margin-top: 1.5rem;
                    transition: all 0.2s;
                }
                .btn-primary:hover { background: #f5a646; transform: translateY(-3px); }

                .modalite-box {
                    background: #f8fafc;
                    padding: 1.5rem;
                    border-radius: 16px;
                    margin-bottom: 1.5rem;
                    border: 1px solid #e2e8f0;
                }

                .debouche-tag {
                    background: #fff7ed;
                    color: #c2410c;
                    padding: 0.75rem 1rem;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    display: inline-block;
                    margin: 0.25rem;
                    border: 1px solid #ffedd5;
                }

                @media(max-width: 900px) {
                    .main-layout { grid-template-columns: 1fr; }
                    .formation-hero h1 { font-size: 2.2rem; }
                }
            `}</style>

            <div className="formation-page">
                <header className="formation-hero">
                    <div className="hero-container">
                        <span className="version-tag"><a href="https://www.francecompetences.fr/recherche/rncp/39063/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>RNCP N°39063</a> | V12 – MAJ 18/06/2026</span>
                        <h1>TITRE PROFESSIONNEL NÉGOCIATEUR TECHNICO-COMMERCIAL</h1>
                        <div className="hero-subtitle">NIVEAU 5 – BAC+2</div>
                        <p className="hero-desc">
                            Devenez l'interface stratégique entre les solutions techniques et les besoins clients. Une formation de haut niveau pour maîtriser la vente complexe et le développement d'affaires.
                        </p>
                    </div>
                </header>

                <div className="main-layout">
                    <div className="content-area">
                        {/* Infos Générales */}
                        <div className="info-card">
                            <h2 className="section-title"><ShieldCheck /> Profil & Prérequis</h2>
                            <div className="quick-stats">
                                <div className="stat-item">
                                    <GraduationCap className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Certificateur</span>
                                        <span className="stat-value">Ministère du Travail</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Clock className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Admission</span>
                                        <span className="stat-value">Hors-Parcoursup + Entretien</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Users className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Prérequis</span>
                                        <span className="stat-value">Titre Niveau 4 + 18 ans min</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Accessibility className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Accessibilité</span>
                                        <span className="stat-value">Référent Dédié</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#eff6ff', borderRadius: '12px', borderLeft: '4px solid #3b82f6', fontSize: '0.95rem' }}>
                                <strong>💡 Accessibilité :</strong> Pour les personnes en situation de handicap, un accompagnement spécifique peut être engagé pour faciliter leur parcours. Vous pouvez <Link to="/ressources/financements-handicap" style={{color:'#2563eb', fontWeight:700, textDecoration:'underline'}}>contacter notre référent handicap</Link>.
                            </div>

                            <p style={{fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6}}>
                                Cette formation s’adresse aux professionnels et futurs professionnels dans le domaine du commerce souhaitant acquérir une double compétence technique et commerciale.
                            </p>
                        </div>

                        {/* Objectifs & Programme */}
                        <div className="info-card">
                            <h2 className="section-title"><Target /> Objectifs & Programme</h2>
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
                                <div>
                                    <h4 style={{fontWeight: 900, color: '#ef9a37', marginBottom: '1.25rem'}}>CCP 1 : STRATÉGIE OMNICANALE</h4>
                                    <ul className="list-check">
                                        <li><CheckCircle2 size={18} /> Veille commerciale & analyse marché</li>
                                        <li><CheckCircle2 size={18} /> Pilotage du plan d’actions commerciales</li>
                                        <li><CheckCircle2 size={18} /> Actions de fidélisation stratégiques</li>
                                        <li><CheckCircle2 size={18} /> Bilan et reporting d'activité</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 style={{fontWeight: 900, color: '#1c1e4c', marginBottom: '1.25rem'}}>CCP 2 : NÉGOCIATION COMPLEXE</h4>
                                    <ul className="list-check">
                                        <li><CheckCircle2 size={18} /> Valorisation de l’image de marque</li>
                                        <li><CheckCircle2 size={18} /> Conception de propositions techniques</li>
                                        <li><CheckCircle2 size={18} /> Négociation de solutions à haute valeur</li>
                                        <li><CheckCircle2 size={18} /> Optimisation de la relation client CRM</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Modalités */}
                        <div className="info-card">
                            <h2 className="section-title"><Monitor /> Modalités de Formation</h2>
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
                                <div className="modalite-box">
                                    <h4 style={{fontWeight: 900, marginBottom: '1rem', color: '#1c1e4c'}}>PRÉSENTIEL</h4>
                                    <ul style={{fontSize: '0.9rem', padding: 0, listStyle: 'none', color: '#475569'}}>
                                        <li style={{marginBottom: '0.5rem'}}>• 15 mois (470h en centre)</li>
                                        <li style={{marginBottom: '0.5rem'}}>• Rythme 1j centre / 4j entreprise</li>
                                        <li style={{marginBottom: '0.5rem'}}>• Plateau technique dédié</li>
                                        <li>• Max 15 participants</li>
                                    </ul>
                                </div>
                                <div className="modalite-box" style={{borderColor: '#ef9a37'}}>
                                    <h4 style={{fontWeight: 900, marginBottom: '1rem', color: '#ef9a37'}}>E-LEARNING</h4>
                                    <ul style={{fontSize: '0.9rem', padding: 0, listStyle: 'none', color: '#475569'}}>
                                        <li style={{marginBottom: '0.5rem'}}>• 15 mois (470h module)</li>
                                        <li style={{marginBottom: '0.5rem'}}>• Entrée / Sortie permanente</li>
                                        <li style={{marginBottom: '0.5rem'}}>• Classes virtuelles en capsules</li>
                                        <li>• 2 sessions d'examens / an</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Débouchés */}
                        <div className="info-card">
                            <h2 className="section-title"><TrendingUp /> Débouchés & Poursuites</h2>
                            <div style={{marginBottom: '2rem'}}>
                                <span className="debouche-tag">Chargé d'affaires</span>
                                <span className="debouche-tag">Ingénieur commercial</span>
                                <span className="debouche-tag">Chargé de clientèle</span>
                                <span className="debouche-tag">Technico-commercial itinérant</span>
                                <span className="debouche-tag">Agent commercial</span>
                            </div>
                            <div style={{background: '#f1f5f9', padding: '1.5rem', borderRadius: '16px'}}>
                                <h4 style={{fontWeight: 800, color: '#1c1e4c', marginBottom: '0.5rem'}}>POURSUITE D'ÉTUDES</h4>
                                <p style={{fontSize: '0.9rem', color: '#475569'}}>
                                    Accédez à une Licence Professionnelle ou un Titre de Niveau 6 (Bac+3) dans les métiers du management commercial et de la stratégie de vente.
                                </p>
                            </div>
                        </div>
                    </div>

                    <aside className="sidebar">
                        <div className="cta-card">
                            <h3 style={{fontSize: '1.4rem', fontWeight: 900, marginBottom: '1rem', color: '#ef9a37'}}>ALTERNANCE</h3>
                            <div style={{fontSize: '2.5rem', fontWeight: 900, margin: '1rem 0'}}>0€ <span style={{fontSize: '1rem', opacity: 0.8}}>RESTE À CHARGE</span></div>
                            <p style={{fontSize: '0.85rem', opacity: 0.8, lineHeight: 1.5, marginBottom: '1.5rem'}}>
                                Coût de la formation : 8302€ TTC.
                            </p>
                            <a href="/contact" target="_blank" rel="noopener noreferrer" className="btn-primary">COMMENT NOUS CONTACTER</a>
                        </div>

                        <div className="info-card" style={{padding: '1.5rem'}}>
                            <h4 style={{fontWeight: 800, marginBottom: '1rem', fontSize: '1rem'}}>LES + META DXS</h4>
                            <ul className="list-check" style={{fontSize: '0.85rem'}}>
                                <li><CheckCircle2 size={16} /> Accompagnement Dossier Pro</li>
                                <li><CheckCircle2 size={16} /> Session d'examen blanc</li>
                                <li><CheckCircle2 size={16} /> Aide active recherche emploi</li>
                            </ul>
                        </div>

                        <div className="info-card" style={{padding: '1.5rem'}}>
                            <h4 style={{fontWeight: 800, marginBottom: '1rem', fontSize: '1rem'}}>ÉVALUATIONS</h4>
                            <p style={{fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5}}>
                                • Jury de 2 professionnels habilités DREETS<br/>
                                • Dossier professionnel<br/>
                                • Mise en situation professionnelle<br/>
                                • Entretien final
                            </p>
                        </div>

                        <div style={{background: 'white', padding: '1.5rem', borderRadius: '24px', border: '2px solid #ef9a37', textAlign: 'center'}}>
                            <Download color="#ef9a37" style={{margin: '0 auto 1rem'}} />
                            <h4 style={{fontWeight: 800, fontSize: '0.9rem', color: '#1c1e4c'}}>BROCHURE FORMATION</h4>
                            <p style={{fontSize: '0.75rem', color: '#64748b', marginBottom: '1rem'}}>Consultez les indicateurs et modalités détaillées.</p>
                            <a href="#" style={{fontSize: '0.8rem', fontWeight: 900, color: '#ef9a37', textDecoration: 'none'}}>TÉLÉCHARGER LE PDF</a>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
