import { Helmet } from 'react-helmet-async';
import { 
    Clock, 
    Users, 
    BookOpen, 
    CheckCircle2, 
    Award, 
    Calendar, 
    Accessibility, 
    Utensils, 
    ChefHat,
    ArrowRight
} from 'lucide-react';

export default function HygeneHACCP() {
    return (
        <>
            <Helmet>
                <title>Hygiène Alimentaire - HACCP | Formation Meta DX School</title>
                <meta name="description" content="Formation HACCP de 2 jours pour maîtriser la sécurité alimentaire et les pratiques responsables." />
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
                    background: linear-gradient(135deg, #1c1e4c 0%, #10b981 100%);
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
                    background: radial-gradient(circle, rgba(239, 154, 55, 0.2) 0%, transparent 70%);
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
                    font-size: 3.5rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    max-width: 800px;
                }

                .hero-desc {
                    font-size: 1.25rem;
                    line-height: 1.6;
                    opacity: 0.9;
                    max-width: 900px;
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
                    grid-template-columns: repeat(2, 1fr);
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
                    border-left: 4px solid #10b981;
                }
                .stat-icon { color: #10b981; flex-shrink: 0; }
                .stat-text {
                    display: flex;
                    flex-direction: column;
                }
                .stat-label { font-size: 0.85rem; color: #64748b; font-weight: 600; text-transform: uppercase; }
                .stat-value { font-size: 1.1rem; font-weight: 800; color: #1e293b; }

                .list-check { list-style: none; padding: 0; }
                .list-check li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    margin-bottom: 1.25rem;
                    font-size: 1.05rem;
                    line-height: 1.5;
                }
                .list-check li svg { color: #10b981; margin-top: 4px; flex-shrink: 0; }

                /* Sidebar Sidebar Sidebar */
                .sidebar { position: sticky; top: 2rem; align-self: start; }
                
                .cta-card {
                    background: #1c1e4c;
                    color: white;
                    border-radius: 20px;
                    padding: 2rem;
                    box-shadow: 0 15px 35px rgba(28, 30, 76, 0.2);
                    text-align: center;
                }
                .price-tag {
                    font-size: 2.5rem;
                    font-weight: 900;
                    margin: 1.5rem 0;
                    color: #ef9a37;
                }
                .price-sub { font-size: 0.9rem; opacity: 0.7; margin-bottom: 1.5rem; }

                .tabs-container {
                    display: flex;
                    background: rgba(255,255,255,0.1);
                    border-radius: 10px;
                    padding: 0.3rem;
                    margin-bottom: 2rem;
                }
                .tab-btn {
                    flex: 1;
                    padding: 0.6rem;
                    border-radius: 8px;
                    border: none;
                    background: transparent;
                    color: white;
                    font-size: 0.8rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .tab-btn.active {
                    background: #ef9a37;
                }

                .sidebar-info-label {
                    display: block;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: #5bb4f8;
                    margin-bottom: 0.25rem;
                    font-weight: 800;
                }
                .sidebar-info-value {
                    display: block;
                    font-size: 0.95rem;
                    margin-bottom: 1.25rem;
                    line-height: 1.4;
                }

                .btn-apply {
                    display: block;
                    background: #ef9a37;
                    color: white;
                    padding: 1.25rem;
                    border-radius: 12px;
                    text-decoration: none;
                    font-weight: 800;
                    font-size: 1.1rem;
                    transition: all 0.2s;
                    margin-top: 2rem;
                }
                .btn-apply:hover { background: #f5a646; transform: translateY(-3px); }

                .calendrier-box {
                    margin-top: 2rem;
                    text-align: left;
                }
                .date-item {
                    padding: 0.75rem;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.95rem;
                }
                .date-item:last-child { border: none; }

                /* Indicators Bar */
                .indicator-bar {
                    display: flex;
                    gap: 2rem;
                    background: white;
                    padding: 1.5rem;
                    border-radius: 16px;
                    margin-bottom: 2.5rem;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                }
                .indicator-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                .indicator-item span { font-weight: 800; font-size: 1.4rem; color: #10b981; }

                @media(max-width: 900px) {
                    .main-layout { grid-template-columns: 1fr; }
                    .formation-hero h1 { font-size: 2.5rem; }
                    .quick-stats { grid-template-columns: 1fr; }
                }

                .method-card {
                    background: #f1f5f9;
                    padding: 1.5rem;
                    border-radius: 12px;
                    border-left: 4px solid #ef9a37;
                    margin-bottom: 1rem;
                }

                .bonus-box {
                    background: #fff8f1;
                    border: 1px dashed #ef9a37;
                    padding: 2rem;
                    border-radius: 16px;
                    display: flex;
                    gap: 1.5rem;
                    align-items: center;
                }
            `}</style>

            <div className="formation-page">
                <header className="formation-hero">
                    <div className="hero-container">
                        <span className="version-tag">V12 – DATE DE MAJ 18/06/2026</span>
                        <h1>HYGIÈNE ALIMENTAIRE - HACCP</h1>
                        <p className="hero-desc">
                            Cette formation HACCP accompagne les entreprises engagées dans leur démarche qualité en alliant sécurité alimentaire, pratiques responsables et mise en valeur de produits.
                        </p>
                    </div>
                </header>

                <div className="main-layout">
                    <div className="content-area">
                        {/* Indicators Header */}
                        <div className="indicator-bar">
                            <div className="indicator-item">
                                <span>6</span> <label style={{fontSize:'0.8rem', fontWeight:700}}>STAGIAIRES</label>
                            </div>
                            <div className="indicator-item">
                                <span>100%</span> <label style={{fontSize:'0.8rem', fontWeight:700}}>RÉUSSITE</label>
                            </div>
                            <div className="indicator-item">
                                <span>100%</span> <label style={{fontSize:'0.8rem', fontWeight:700}}>SATISFACTION</label>
                            </div>
                        </div>

                        {/* Quick Overview */}
                        <div className="info-card">
                            <h2 className="section-title"><BookOpen /> Présentation de la formation</h2>
                            <p style={{lineHeight:1.7, marginBottom: '1.5rem'}}>
                                Vos équipes y apprendront les bonnes pratiques d’hygiène, la règlementation en vigueur et les différents principes HACCP. 
                                Ils disposeront ainsi des connaissances pour éviter les dangers alimentaires et passer les contrôles sanitaires avec sérénité.
                            </p>
                            
                            <div className="quick-stats">
                                <div className="stat-item">
                                    <Clock className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Durée</span>
                                        <span className="stat-value">2 jours (14 heures)</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Users className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Public</span>
                                        <span className="stat-value">3 à 12 participants</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <CheckCircle2 className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Prérequis</span>
                                        <span className="stat-value">Aucun</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Accessibility className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Accessibilité</span>
                                        <span className="stat-value">Référent Accessibilité dédié</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bonus-box">
                                <Utensils size={40} color="#ef9a37" />
                                <div>
                                    <h4 style={{fontWeight:800, marginBottom: '0.5rem', color:'#c05621'}}>LES + META DX</h4>
                                    <p style={{fontSize: '0.95rem', margin: 0}}>Des viennoiseries sont offertes pour le petit-déjeuner afin de démarrer la journée dans les meilleures conditions.</p>
                                </div>
                            </div>
                        </div>

                        {/* Objectifs */}
                        <div className="info-card">
                            <h2 className="section-title"><Award /> Objectifs pédagogiques</h2>
                            <ul className="list-check">
                                <li><CheckCircle2 size={20}/> Comprendre les obligations légales d’hygiène alimentaire</li>
                                <li><CheckCircle2 size={20}/> Identifier les risques spécifiques à l’épicerie multiculturelle</li>
                                <li><CheckCircle2 size={20}/> Appliquer les bonnes pratiques (boucherie, produits secs & laitiers)</li>
                                <li><CheckCircle2 size={20}/> Maîtriser la méthode HACCP de façon simple et pratique</li>
                                <li><CheckCircle2 size={20}/> Savoir conserver, étiqueter et tracer les produits importés</li>
                                <li><CheckCircle2 size={20}/> Gérer les DLC, les allergènes et les températures</li>
                            </ul>
                        </div>

                        {/* Programme Detail */}
                        <div className="info-card">
                            <h2 className="section-title"><BookOpen /> Programme détaillé</h2>
                            
                            <div style={{marginBottom: '2rem'}}>
                                <h3 style={{display:'flex', alignItems:'center', gap:'0.5rem', color:'#10b981', fontWeight:800, marginBottom:'1rem'}}>
                                    <span style={{background:'#10b981', color:'white', width:'30px', height:'30px', borderRadius:'50%', display:'flex', alignItems:'center', justifySelf:'center', justifyContent:'center', fontSize:'0.9rem'}}>1</span>
                                    PARTIE THÉORIQUE (7H)
                                </h3>
                                <ul className="list-check">
                                    <li><ArrowRight size={18} /> Bases de l'hygiène : dangers, contaminations, prévention</li>
                                    <li><ArrowRight size={18} /> Obligations légales : paquet Hygiène, autocontrôles, traçabilité</li>
                                    <li><ArrowRight size={18} /> Présentation des 7 principes HACCP & méthode simplifiée</li>
                                    <li><ArrowRight size={18} /> Gestion spécifique : étiquetages, produits du monde, DLC</li>
                                </ul>
                            </div>

                            <div>
                                <h3 style={{display:'flex', alignItems:'center', gap:'0.5rem', color:'#ef9a37', fontWeight:800, marginBottom:'1rem'}}>
                                    <span style={{background:'#ef9a37', color:'white', width:'30px', height:'30px', borderRadius:'50%', display:'flex', alignItems:'center', justifySelf:'center', justifyContent:'center', fontSize:'0.9rem'}}>2</span>
                                    PARTIE PRATIQUE (7H)
                                </h3>
                                <ul className="list-check">
                                    <li><ArrowRight size={18} /> Quiz interactif sur les règles d'hygiène</li>
                                    <li><ArrowRight size={18} /> Atelier d'identification des points critiques en rayon</li>
                                    <li><ArrowRight size={18} /> Simulation : Jeu de rôles "Le contrôleur sanitaire surprise"</li>
                                    <li><ArrowRight size={18} /> Étude de cas sur la rupture de la chaîne du froid</li>
                                </ul>
                            </div>
                        </div>

                        {/* Intervenant */}
                        <div className="info-card">
                            <h2 className="section-title"><ChefHat /> Votre Formateur Référent</h2>
                            <div style={{display:'flex', gap:'2rem', alignItems: 'center'}}>
                                <div style={{width:'100px', height:'100px', borderRadius: '50%', background: '#f1f5f9', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <Users size={50} color="#1c1e4c" />
                                </div>
                                <div>
                                    <h4 style={{fontWeight:800, fontSize:'1.2rem', color:'#1c1e4c'}}>Marc Chevalier</h4>
                                    <p style={{lineHeight:1.6, marginTop:'0.5rem'}}>
                                        Professionnel de la restauration depuis plus de 30 ans. Il a dirigé et accompagné des équipes dans des établissements de prestige, aussi bien en restauration commerciale que collective.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar">
                        {/* Carte INTER */}
                        <div className="cta-card">
                            <div style={{textAlign:'left', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom:'1.5rem', marginBottom:'1.5rem'}}>
                                <h3 style={{fontSize:'1.3rem', fontWeight:900, color:'#ef9a37', marginBottom:'0.5rem'}}>MODALITÉ INTER</h3>
                                <p style={{fontSize:'0.85rem', margin:0, opacity:0.8}}>Formation dans nos locaux ou à distance</p>
                            </div>

                            <div className="price-tag">400€ TTC <span style={{fontSize:'1rem', opacity:0.8}}>/ pers.</span></div>
                            <p className="price-sub">Financement possible par OPCO. Nos conseillers vous accompagnent.</p>
                            
                            <div className="calendrier-box" style={{marginTop:0}}>
                                <span className="sidebar-info-label">Délai :</span>
                                <span className="sidebar-info-value">Inscription jusqu’à 48h avant le début</span>

                                <h4 style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontWeight: 800, fontSize:'0.9rem'}}>
                                    <Calendar size={16} /> PROCHAINES SESSIONS (Présentiel) :
                                </h4>
                                <div className="date-item"><span>📅 Février 2026</span> <span>23 & 24</span></div>
                                <div className="date-item"><span>📅 Avril 2026</span> <span>27 & 28</span></div>
                                <div className="date-item"><span>📅 Juin 2026</span> <span>29 & 30</span></div>
                                <div className="date-item"><span>📅 Août 2026</span> <span>24 & 25</span></div>
                                <div className="date-item"><span>📅 Octobre 2026</span> <span>26 & 27</span></div>
                            </div>

                            <a href="/contact" target="_blank" rel="noopener noreferrer" className="btn-apply">COMMENT NOUS CONTACTER</a>
                        </div>

                        {/* Carte INTRA / GROUPE */}
                        <div className="cta-card" style={{marginTop:'2rem', background:'#f8fafc', color:'#1e293b', border:'1px solid #e2e8f0', boxShadow:'none'}}>
                            <div style={{textAlign:'left', borderBottom: '1px solid #e2e8f0', paddingBottom:'1.5rem', marginBottom:'1.5rem'}}>
                                <h3 style={{fontSize:'1.3rem', fontWeight:900, color:'#1c1e4c', marginBottom:'0.5rem'}}>MODALITÉ INTRA</h3>
                                <p style={{fontSize:'0.85rem', margin:0, color:'#64748b'}}>Au sein de vos locaux* ou en distanciel</p>
                            </div>

                            <div className="price-tag" style={{color:'#1c1e4c'}}>1550€ TTC <span style={{fontSize:'1rem', opacity:0.6}}>/ groupe</span></div>
                            
                            <div style={{textAlign:'left'}}>
                                <span className="sidebar-info-label" style={{color:'#1c1e4c'}}>Localisation :</span>
                                <span className="sidebar-info-value">Classe virtuelle ou Présentiel</span>

                                <span className="sidebar-info-label" style={{color:'#1c1e4c'}}>Délais :</span>
                                <span className="sidebar-info-value">Mise en route jusqu'à 3 semaines selon le besoin</span>

                                <p style={{fontSize:'0.75rem', fontStyle:'italic', color:'#94a3b8', marginBottom:'1.5rem'}}>
                                    *Mise à disposition d’une salle possible sous condition.
                                </p>
                            </div>

                            <a href="/contact" target="_blank" rel="noopener noreferrer" className="btn-apply" style={{background:'#1c1e4c'}}>COMMENT NOUS CONTACTER</a>
                            <p style={{fontSize:'0.8rem', marginTop:'1rem', fontWeight:600}}>Réponse sous 48 heures.</p>
                        </div>

                        {/* Bloc SUR MESURE */}
                        <div className="info-card" style={{marginTop: '2rem', background:'linear-gradient(135deg, #ef9a37 0%, #e25865 100%)', color:'white', border:'none', padding:'2rem'}}>
                            <h4 style={{fontWeight:900, marginBottom:'1rem', fontSize:'1.2rem'}}>BESOIN SUR MESURE ?</h4>
                            <p style={{fontSize:'0.9rem', marginBottom:'1.5rem', opacity:0.9}}>
                                Vous avez un besoin spécifique pour votre entreprise ? Contactez notre équipe pour une formation totalement personnalisée.
                            </p>
                            <ul style={{listStyle:'none', padding:0, fontSize:'0.85rem', marginBottom:'1.5rem'}}>
                                <li style={{marginBottom:'0.5rem'}}>✅ Programme adapté</li>
                                <li style={{marginBottom:'0.5rem'}}>✅ Calendrier flexible</li>
                                <li>✅ Réponse sous 48h</li>
                            </ul>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" style={{display:'block', background:'white', color:'#e25865', textAlign:'center', padding:'0.8rem', borderRadius:'8px', fontWeight:800, textDecoration:'none', fontSize:'0.9rem'}}>
                                DEMANDER UN DEVIS
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
