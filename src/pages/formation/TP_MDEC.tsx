import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
    Clock, 
    Users, 
    BookOpen, 
    Award, 
    Accessibility, 
    ArrowRight,
    Download,
    TrendingUp,
    ShieldCheck,
    Zap,
    Target,
    BarChart3,
    Handshake
} from 'lucide-react';

export default function TP_MDEC() {
    return (
        <>
            <Helmet>
                <title>TP MDEC - Manager du Développement d'Entreprise et Commercial | Meta DX School</title>
                <meta name="description" content="Formation Titre Professionnel MDEC Niveau 7 (Bac+5). Devenez Manager Commercial et Stratégique en alternance ou e-learning." />
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
                    background: linear-gradient(135deg, #1c1e4c 0%, #7c3aed 100%);
                    color: white;
                    padding: 8rem 2rem 6rem;
                    position: relative;
                    overflow: hidden;
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
                    text-transform: uppercase;
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
                    border-left: 4px solid #7c3aed;
                }
                .stat-icon { color: #7c3aed; flex-shrink: 0; }
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
                .list-check li svg { color: #7c3aed; margin-top: 4px; flex-shrink: 0; }

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

                .bloc-program {
                    margin-bottom: 2rem;
                    background: #f8fafc;
                    padding: 1.5rem;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                }
                .bloc-program h3 {
                    font-size: 1.1rem;
                    font-weight: 900;
                    color: #1c1e4c;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .bloc-badge {
                    background: #7c3aed;
                    color: white;
                    font-size: 0.7rem;
                    padding: 2px 8px;
                    border-radius: 4px;
                }

                .debouches-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
                    gap: 1rem;
                }
                .debouche-tag {
                    background: #f5f3ff;
                    color: #5b21b6;
                    padding: 1rem;
                    border-radius: 10px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    border: 1px solid #ddd6fe;
                }

                @media(max-width: 900px) {
                    .main-layout { grid-template-columns: 1fr; }
                    .formation-hero h1 { font-size: 2.22rem; }
                }
            `}</style>

            <div className="formation-page">
                <header className="formation-hero">
                    <div className="hero-container">
                        <span className="version-tag"><a href="https://www.francecompetences.fr/recherche/rncp/39063/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>RNCP N°39063</a> | V12 | MAJ 18/06/2026</span>
                        <h1>MANAGER DU DÉVELOPPEMENT D'ENTREPRISE ET COMMERCIAL (MDEC)</h1>
                        <div className="hero-subtitle">NIVEAU 7 – BAC+5 (ÉQUIVALENT MASTÈRE)</div>
                        <p className="hero-desc">
                            Une formation de haut niveau conçue pour piloter la stratégie globale, le développement commercial et le management d'équipes dans un environnement complexe.
                        </p>
                    </div>
                </header>

                <div className="main-layout">
                    <div className="content-area">
                        {/* Summary */}
                        <div className="info-card">
                            <h2 className="section-title"><ShieldCheck /> Profil & Certification</h2>
                            <div className="quick-stats">
                                <div className="stat-item">
                                    <Award className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Niveau</span>
                                        <span className="stat-value">Bac+5 (Niveau 7)</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Users className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Certification</span>
                                        <span className="stat-value">ISME</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Accessibility className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Accessibilité</span>
                                        <span className="stat-value">Référent dédié</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Clock className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Accès direct</span>
                                        <span className="stat-value">Hors Parcoursup</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#eff6ff', borderRadius: '12px', borderLeft: '4px solid #3b82f6', fontSize: '0.95rem' }}>
                                <strong>💡 Accessibilité :</strong> Pour les personnes en situation de handicap, un accompagnement spécifique peut être engagé pour faciliter leur parcours. Vous pouvez <Link to="/financements/handicap" style={{color:'#2563eb', fontWeight:700, textDecoration:'underline'}}>contacter notre référent handicap</Link>.
                            </div>
                        </div>

                        {/* Program Details */}
                        <div className="info-card">
                            <h2 className="section-title"><BookOpen /> Programme (5 Blocs de Compétences)</h2>
                            
                            <div className="bloc-program">
                                <h3><span className="bloc-badge">BLOC 1</span> Stratégie Générale</h3>
                                <ul className="list-check">
                                    <li><ArrowRight size={16}/> Analyse SWOT & environnement stratégique</li>
                                    <li><ArrowRight size={16}/> Définition d'objectifs avec enjeux RSE</li>
                                    <li><ArrowRight size={16}/> Accompagnement de la mise en œuvre opérationnelle</li>
                                </ul>
                            </div>

                            <div className="bloc-program">
                                <h3><span className="bloc-badge">BLOC 2</span> Pilotage d'un Centre de Profit</h3>
                                <ul className="list-check">
                                    <li><ArrowRight size={16}/> Gestion financière, budgétaire & rentabilité</li>
                                    <li><ArrowRight size={16}/> Conformité juridique & réglementaire</li>
                                    <li><ArrowRight size={16}/> Management durable & amélioration continue</li>
                                </ul>
                            </div>

                            <div className="bloc-program">
                                <h3><span className="bloc-badge">BLOC 3</span> Stratégie Commerce & Innovation</h3>
                                <ul className="list-check">
                                    <li><ArrowRight size={16}/> Veille via technologies intelligentes</li>
                                    <li><ArrowRight size={16}/> Analyse de marché & opportunités de croissance</li>
                                    <li><ArrowRight size={16}/> Optimisation des ressources & négociations</li>
                                </ul>
                            </div>

                            <div className="bloc-program">
                                <h3><span className="bloc-badge">BLOC 4</span> Performance & Omnicanalité</h3>
                                <ul className="list-check">
                                    <li><ArrowRight size={16}/> Politique commerciale innovante & collaborative</li>
                                    <li><ArrowRight size={16}/> Stratégie client omnicanale & fidélisation</li>
                                    <li><ArrowRight size={16}/> Indicateurs de performance responsables</li>
                                </ul>
                            </div>

                            <div className="bloc-program" style={{marginBottom:0}}>
                                <h3><span className="bloc-badge">BLOC 5</span> Management d'Équipes</h3>
                                <ul className="list-check">
                                    <li><ArrowRight size={16}/> Organisation & planification inclusive</li>
                                    <li><ArrowRight size={16}/> Évaluation de la performance collective</li>
                                    <li><ArrowRight size={16}/> Management collaboratif & conduite du changement</li>
                                </ul>
                            </div>
                        </div>

                        {/* Débouchés */}
                        <div className="info-card">
                            <h2 className="section-title"><TrendingUp /> Débouchés à Hautes Responsabilités</h2>
                            <div className="debouches-grid">
                                <div className="debouche-tag"><Zap size={18}/> Manager du dév. commercial</div>
                                <div className="debouche-tag"><Target size={18}/> Responsable grands comptes</div>
                                <div className="debouche-tag"><TrendingUp size={18}/> Directeur de magasin</div>
                                <div className="debouche-tag"><BarChart3 size={18}/> Chef de produit</div>
                                <div className="debouche-tag"><Users size={18}/> Manager Commercial</div>
                                <div className="debouche-tag"><Handshake size={18}/> Responsable e-commerce</div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Sidebar Sidebar */}
                    <div className="sidebar">
                        <div className="cta-card" style={{background:'#1c1e4c', border:'1px solid rgba(124, 58, 237, 0.3)'}}>
                            <h3 style={{fontSize:'1.4rem', fontWeight:900, marginBottom:'1rem', color:'#ef9a37'}}>ALTERNANCE BAC+5</h3>
                            <div style={{fontSize:'2.2rem', fontWeight:900, margin:'1rem 0'}}>0€ <span style={{fontSize:'1rem', opacity:0.8}}>RESTANT</span></div>
                            <p style={{fontSize:'0.85rem', opacity:0.8, lineHeight:1.5, marginBottom:'2rem'}}>
                                Coût de la formation : 8302€ TTC.
                            </p>

                            <div style={{textAlign:'left', borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:'1.5rem', marginBottom:'2rem'}}>
                                <div style={{marginBottom:'1rem'}}>
                                    <span style={{display:'block', fontSize:'0.7rem', color:'#a78bfa', fontWeight:800}}>MODALITÉ CFA</span>
                                    <span style={{fontSize:'0.9rem', fontWeight:700}}>24 mois (1200 heures)</span>
                                </div>
                                <div>
                                    <span style={{display:'block', fontSize:'0.7rem', color:'#a78bfa', fontWeight:800}}>RYTHME</span>
                                    <span style={{fontSize:'0.9rem', fontWeight:700}}>1 jour école / 4 jours entreprise</span>
                                </div>
                            </div>

                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-primary">POSTULER EN LIGNE</a>
                        </div>

                        <div className="info-card" style={{padding:'1.5rem'}}>
                            <h4 style={{fontWeight:800, marginBottom:'1rem', fontSize:'0.9rem'}}>MODALITÉS PÉDAGOGIQUES</h4>
                            <p style={{fontSize:'0.85rem', lineHeight:1.5, color:'#475569'}}>
                                Plateau technique reconstituant les conditions réelles.<br/>
                                Formateurs professionnels experts du terrain.
                            </p>
                        </div>

                        <div className="info-card" style={{padding:'1.5rem', background:'#f5f3ff', border:'1px dashed #7c3aed'}}>
                            <h4 style={{fontWeight:800, marginBottom:'0.5rem', fontSize:'0.9rem'}}>NOS + ACCOMPAGNEMENT</h4>
                            <ul style={{listStyle:'none', padding:0, fontSize:'0.8rem', color:'#5b21b6'}}>
                                <li style={{marginBottom:'5px'}}>✅ Dossier Professionnel assisté</li>
                                <li style={{marginBottom:'5px'}}>✅ Sessions d'examens blancs</li>
                                <li>✅ Accès réseau entreprises partenaire</li>
                            </ul>
                        </div>

                        <a href="/brochure_mdec.pdf" download className="info-card" style={{display:'flex', alignItems:'center', gap:'1rem', textDecoration:'none', transition:'all 0.2s', border:'2px solid #7c3aed', padding:'1.5rem'}}>
                            <Download color="#7c3aed" />
                            <div>
                                <h4 style={{fontWeight:800, fontSize:'0.9rem', color:'#1c1e4c'}}>TÉLÉCHARGER LA BROCHURE</h4>
                                <span style={{fontSize:'0.75rem', color:'#64748b', fontWeight:700}}>Fiche formation MDEC (PDF)</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
