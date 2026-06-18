import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
    Clock, 
    Users, 
    BookOpen, 
    CheckCircle2, 
    Award, 
    Accessibility, 
    Download,
    GraduationCap,
    TrendingUp,
    ShieldCheck,
    FileText,
    Monitor,
    AlertCircle
} from 'lucide-react';

export default function TP_CRCD() {
    return (
        <>
            <Helmet>
                <title>TP CRCD - Conseiller Relation Client à Distance | Meta DX School</title>
                <meta name="description" content="Formation Titre Professionnel CRCD Niveau 4 (Bac). Devenez expert de la relation client à distance en alternance ou e-learning." />
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
                    background: linear-gradient(135deg, #1c1e4c 0%, #3b82f6 100%);
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
                    background: radial-gradient(circle, rgba(239, 154, 55, 0.15) 0%, transparent 70%);
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
                    color: #ef9a37;
                    margin-bottom: 2rem;
                }

                .hero-desc {
                    font-size: 1.2rem;
                    line-height: 1.6;
                    opacity: 0.9;
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
                    border-left: 4px solid #3b82f6;
                }
                .stat-icon { color: #3b82f6; flex-shrink: 0; }
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
                .list-check li svg { color: #3b82f6; margin-top: 4px; flex-shrink: 0; }

                .sidebar { position: sticky; top: 2rem; align-self: start; }
                
                .cta-card {
                    background: #1c1e4c;
                    color: white;
                    border-radius: 20px;
                    padding: 2rem;
                    box-shadow: 0 15px 35px rgba(28, 30, 76, 0.2);
                    margin-bottom: 2rem;
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

                .btn-outline {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    border: 2px solid rgba(255,255,255,0.2);
                    color: white;
                    padding: 1rem;
                    border-radius: 12px;
                    text-decoration: none;
                    font-weight: 700;
                    margin-top: 1rem;
                    transition: all 0.2s;
                }
                .btn-outline:hover { background: rgba(255,255,255,0.1); }

                .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
                @media(max-width: 768px) { .grid-2 { grid-template-columns: 1fr; } }

                .debouches-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                    gap: 1rem;
                }
                .debouche-tag {
                    background: #eff6ff;
                    color: #1e40af;
                    padding: 0.75rem;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    text-align: center;
                    border: 1px solid #dbeafe;
                }

                .modalite-box {
                    background: #f1f5f9;
                    padding: 1.5rem;
                    border-radius: 12px;
                    border-left: 4px solid #1c1e4c;
                    margin-bottom: 1.5rem;
                }

                .points-bonus {
                    background: #fffafa;
                    border: 1px dashed #e25865;
                    padding: 1.5rem;
                    border-radius: 16px;
                    margin-top: 2rem;
                }
            `}</style>

            <div className="formation-page">
                <header className="formation-hero">
                    <div className="hero-container">
                        <span className="version-tag">V12 – DATE DE MAJ 18/06/2026 | <a href="https://www.francecompetences.fr/recherche/rncp/35304/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>RNCP N°35304</a></span>
                        <h1>TITRE PROFESSIONNEL CONSEILLER(E) RELATION CLIENT À DISTANCE</h1>
                        <div className="hero-subtitle">NIVEAU 4 – BAC TECHNIQUE</div>
                        <p className="hero-desc">
                            Une formation d'excellence pour maîtriser la relation client multicanale, le conseil et la prospection commerciale à distance.
                        </p>
                    </div>
                </header>

                <div className="main-layout">
                    <div className="content-area">
                        {/* Quick Overview */}
                        <div className="info-card">
                            <h2 className="section-title"><ShieldCheck /> Informations Générales</h2>
                            <div className="quick-stats">
                                <div className="stat-item">
                                    <GraduationCap className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Certification</span>
                                        <span className="stat-value">Ministère du Travail</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Clock className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Parcoursup</span>
                                        <span className="stat-value">Accès Direct (Sans Parcoursup)</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Accessibility className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Accessibilité</span>
                                        <span className="stat-value">Accompagnement Spécifique</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Users className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Admissions</span>
                                        <span className="stat-value">Dès 18 ans + Entretien</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#eff6ff', borderRadius: '12px', borderLeft: '4px solid #3b82f6', fontSize: '0.95rem' }}>
                                <strong>💡 Accessibilité :</strong> Pour les personnes en situation de handicap, un accompagnement spécifique peut être engagé pour faciliter leur parcours. Vous pouvez <Link to="/financements/handicap" style={{color:'#2563eb', fontWeight:700, textDecoration:'underline'}}>contacter notre référent handicap</Link>.
                            </div>

                            <div className="points-bonus" style={{borderColor:'#3b82f6', background:'#eff6ff'}}>
                                <h4 style={{fontWeight:900, color:'#1c1e4c', marginBottom:'0.5rem'}}>LE + META DX SCHOOL</h4>
                                <p style={{fontSize:'0.95rem', margin:0}}>
                                    Accompagnement personnalisé au Dossier Professionnel, Examen Blanc et aide active à la recherche d'emploi.
                                </p>
                            </div>
                        </div>

                        {/* Objectives & Program */}
                        <div className="info-card">
                            <h2 className="section-title"><BookOpen /> Objectifs & Programme</h2>
                            <div className="grid-2">
                                <div>
                                    <h3 style={{fontSize:'1.1rem', fontWeight:800, color:'#3b82f6', marginBottom:'1.5rem'}}>CCP 1 : CONSEIL & SERVICE</h3>
                                    <ul className="list-check">
                                        <li><CheckCircle2 size={18}/> Accueillir et renseigner le client</li>
                                        <li><CheckCircle2 size={18}/> Accompagner et conseiller dans les choix</li>
                                        <li><CheckCircle2 size={18}/> Gérer des situations difficiles à distance</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 style={{fontSize:'1.1rem', fontWeight:800, color:'#ef9a37', marginBottom:'1.1rem'}}>CCP 2 : ACTIONS COMMERCIALES</h3>
                                    <ul className="list-check">
                                        <li><CheckCircle2 size={18}/> Réaliser des actions de prospection</li>
                                        <li><CheckCircle2 size={18}/> Ventes, commandes et fidélisation</li>
                                        <li><CheckCircle2 size={18}/> Gestion de la rétention client</li>
                                        <li><CheckCircle2 size={18}/> Recouvrement amiable de créances</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Modalités */}
                        <div className="info-card">
                            <h2 className="section-title"><Monitor /> Modalités de formation</h2>
                            <div className="grid-2">
                                <div className="modalite-box">
                                    <h4 style={{fontWeight:900, marginBottom:'1rem'}}>PRÉSENTIEL (CFA)</h4>
                                    <p style={{fontSize:'0.9rem', lineHeight:1.6}}>
                                        • <strong>Durée :</strong> 15 mois (470h centre)<br/>
                                        • <strong>Rythme :</strong> 1j/semaine école, 4j entreprise<br/>
                                        • 15 participants maximum<br/>
                                        • Plateau technique dédié
                                    </p>
                                </div>
                                <div className="modalite-box" style={{borderColor:'#ef9a37'}}>
                                    <h4 style={{fontWeight:900, marginBottom:'1rem'}}>E-LEARNING</h4>
                                    <p style={{fontSize:'0.9rem', lineHeight:1.6}}>
                                        • <strong>Durée :</strong> 15 mois (470h e-learning)<br/>
                                        • Entrée / Sortie permanente<br/>
                                        • 2 sessions d'examens par an<br/>
                                        • Parcours personnalisé & classe virtuelle
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Prérequis & Admission */}
                        <div className="info-card">
                            <h2 className="section-title"><AlertCircle /> Prérequis & Admission</h2>
                            <ul className="list-check">
                                <li><CheckCircle2 size={18}/> Être âgé de 18 ans et plus.</li>
                                <li><CheckCircle2 size={18}/> <strong>Niveau d'accès :</strong> Être titulaire d'une certification ou d'un diplôme de Niveau 3 (CAP/BEP) ou justifier d'un niveau équivalent.</li>
                                <li><CheckCircle2 size={18}/> <strong>Processus :</strong> Admission par entretien préalable.</li>
                            </ul>
                        </div>

                        {/* Débouchés */}
                        <div className="info-card">
                            <h2 className="section-title"><TrendingUp /> Débouchés Professionnels</h2>
                            <div className="debouches-grid">
                                <span className="debouche-tag">Téléconseiller</span>
                                <span className="debouche-tag">Téléprospecteur</span>
                                <span className="debouche-tag">Chargé d'accueil</span>
                                <span className="debouche-tag">Conseiller clientèle</span>
                                <span className="debouche-tag">Conseiller hotline</span>
                                <span className="debouche-tag">Attaché Commercial</span>
                                <span className="debouche-tag">Chargé de recouvrement</span>
                            </div>
                        </div>

                        {/* Poursuite d'études */}
                        <div className="info-card" style={{border:'2px solid #ef9a37', background:'#fffbeb'}}>
                            <h2 className="section-title"><GraduationCap /> Poursuite d'études</h2>
                            <p style={{fontSize:'1.05rem', fontWeight:600, color:'#1c1e4c'}}>
                                Suite à cette formation, vous pouvez évoluer vers un niveau Bac+2 :
                            </p>
                            <div style={{marginTop:'1.5rem', display:'flex', alignItems:'center', gap:'1rem'}}>
                                <div style={{background:'#ef9a37', color:'white', padding:'1rem', borderRadius:'12px'}}>
                                    <Award size={32} />
                                </div>
                                <div>
                                    <h4 style={{fontWeight:800}}>TP NÉGOCIATEUR TECHNICO-COMMERCIAL (BAC +2)</h4>
                                    <p style={{fontSize:'0.9rem'}}>Disponible en alternance chez Meta DX School.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Sidebar Sidebar */}
                    <div className="sidebar">
                        <div className="cta-card">
                            <h3 style={{fontSize:'1.4rem', fontWeight:900, marginBottom:'1rem', color:'#ef9a37'}}>ALTERNANCE</h3>
                            <div style={{fontSize:'2rem', fontWeight:900, margin:'1rem 0'}}>0€ <span style={{fontSize:'1rem', opacity:0.8}}>RESTE À CHARGE</span></div>
                            <p style={{fontSize:'0.85rem', opacity:0.8, lineHeight:1.4, marginBottom:'1.5rem'}}>
                                Coût de la formation : 7650€ TTC.
                            </p>

                            <div style={{textAlign:'left', borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:'1.5rem'}}>
                                <div style={{marginBottom:'1rem'}}>
                                    <span style={{display:'block', fontSize:'0.7rem', color:'#5bb4f8', fontWeight:800}}>DÉLAI D'ACCÈS</span>
                                    <span style={{fontSize:'0.9rem', fontWeight:700}}>7 jours maximum</span>
                                </div>
                                <div style={{marginBottom:'1rem'}}>
                                    <span style={{display:'block', fontSize:'0.7rem', color:'#5bb4f8', fontWeight:800}}>SALAIRE</span>
                                    <span style={{fontSize:'0.9rem', fontWeight:700}}>
                                        <a href="https://www.service-public.fr/particuliers/vosdroits/F2918" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>Selon barème apprentissage</a>
                                    </span>
                                </div>
                            </div>

                            <a href="/contact" className="btn-primary">NOUS CONTACTER</a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-outline">
                                <FileText size={18} /> FORMULAIRE DE CANDIDATURE
                            </a>
                        </div>

                        <div className="info-card" style={{padding:'1.5rem'}}>
                            <h4 style={{fontWeight:800, marginBottom:'1rem', fontSize:'0.9rem'}}>ÉVALUATION</h4>
                            <p style={{fontSize:'0.85rem', lineHeight:1.5}}>
                                • Contrôle continu<br/>
                                • Dossier Professionnel<br/>
                                • Mise en situation<br/>
                                • Entretien final devant jury (Professionnels habilités DREETS)
                            </p>
                        </div>

                        <a href="/brochure_crcd.pdf" download className="info-card" style={{display:'flex', alignItems:'center', gap:'1rem', textDecoration:'none', transition:'all 0.2s', border:'2px solid #3b82f6'}}>
                            <Download color="#3b82f6" />
                            <div>
                                <h4 style={{fontWeight:800, fontSize:'0.9rem', color:'#1c1e4c'}}>TÉLÉCHARGER LA BROCHURE</h4>
                                <span style={{fontSize:'0.75rem', color:'#64748b', fontWeight:700}}>Fiche formation (PDF)</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
