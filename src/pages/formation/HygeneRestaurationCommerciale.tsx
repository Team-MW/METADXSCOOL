import { Helmet } from 'react-helmet-async';
import { 
    Clock, 
    Users, 
    BookOpen, 
    CheckCircle2, 
    Award, 
    Calendar, 
    Utensils, 
    ChefHat,
    ArrowRight,
    Scale
} from 'lucide-react';

export default function HygeneRestaurationCommerciale() {
    return (
        <>
            <Helmet>
                <title>Hygiène adaptée à la Restauration Commerciale | Formation Meta DX School</title>
                <meta name="description" content="Formation obligatoire en hygiène alimentaire pour la restauration commerciale (restaurants, cafés, food trucks)." />
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
                    font-size: 2.8rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    max-width: 900px;
                    text-transform: uppercase;
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
                    margin-bottom: 1rem;
                    font-size: 1rem;
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

                .warning-box {
                    background: #fff1f2;
                    border-left: 4px solid #ef4444;
                    padding: 1.5rem;
                    border-radius: 0 12px 12px 0;
                    margin-bottom: 2.5rem;
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

                @media(max-width: 900px) {
                    .main-layout { grid-template-columns: 1fr; }
                    .formation-hero h1 { font-size: 2.2rem; }
                    .quick-stats { grid-template-columns: 1fr; }
                }
            `}</style>

            <div className="formation-page">
                <header className="formation-hero">
                    <div className="hero-container">
                        <span className="version-tag">V4 – DATE DE MAJ 27/08/2025</span>
                        <h1>HYGIÈNE ALIMENTAIRE EN RESTAURATION COMMERCIALE</h1>
                        <p className="hero-desc">
                            Une obligation légale depuis 2012 pour tout établissement de restauration commerciale afin de garantir la présence d'une personne formée à l'hygiène alimentaire.
                        </p>
                    </div>
                </header>

                <div className="main-layout">
                    <div className="content-area">
                        {/* Indicators Header */}
                        <div className="indicator-bar">
                            <div className="indicator-item">
                                <span>/</span> <label style={{fontSize:'0.8rem', fontWeight:700}}>STAGIAIRES</label>
                            </div>
                            <div className="indicator-item">
                                <span>/</span> <label style={{fontSize:'0.8rem', fontWeight:700}}>RÉUSSITE</label>
                            </div>
                            <div className="indicator-item">
                                <span>/</span> <label style={{fontSize:'0.8rem', fontWeight:700}}>SATISFACTION</label>
                            </div>
                        </div>

                        {/* Warning Legal */}
                        <div className="warning-box">
                            <h4 style={{color:'#be123c', fontWeight:900, fontSize:'1.1rem', marginBottom:'0.5rem', display:'flex', alignItems:'center', gap:'0.5rem'}}>
                                <Scale size={20} /> OBLIGATION LÉGALE & SANCTIONS
                            </h4>
                            <p style={{fontSize:'0.95rem', lineHeight:1.5, color:'#4c0519'}}>
                                Le non-respect de ces exigences lors d’un contrôle officiel peut faire l’objet d’une mise en demeure (article L.233-1 du CRPM) et, en cas de récidive, d’une contravention de 5ème classe.
                            </p>
                        </div>

                        {/* Quick Overview */}
                        <div className="info-card">
                            <h2 className="section-title"><BookOpen /> Présentation de la formation</h2>
                            <p style={{lineHeight:1.7, marginBottom: '2rem'}}>
                                Cette formation permet aux entreprises de remplir l’obligation légale de disposer au moins d'une personne justifiant d’une formation spécifique adaptée à l’activité de l’établissement.
                            </p>
                            
                            <h4 style={{fontWeight:800, color:'#1c1e4c', marginBottom:'1rem'}}>ÉTABLISSEMENTS CONCERNÉS :</h4>
                            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'0.5rem', marginBottom:'2.5rem'}}>
                                <div style={{background:'#f1f5f9', padding:'0.75rem', borderRadius:'8px', fontSize:'0.9rem', fontWeight:600}}>🍽️ Restaurants traditionnels</div>
                                <div style={{background:'#f1f5f9', padding:'0.75rem', borderRadius:'8px', fontSize:'0.9rem', fontWeight:600}}>☕ Cafés, brasseries, bistrots</div>
                                <div style={{background:'#f1f5f9', padding:'0.75rem', borderRadius:'8px', fontSize:'0.9rem', fontWeight:600}}>🥪 Snacks, sandwicheries</div>
                                <div style={{background:'#f1f5f9', padding:'0.75rem', borderRadius:'8px', fontSize:'0.9rem', fontWeight:600}}>🍤 Traiteurs avec conso sur place</div>
                                <div style={{background:'#f1f5f9', padding:'0.75rem', borderRadius:'8px', fontSize:'0.9rem', fontWeight:600}}>🚚 Food trucks</div>
                                <div style={{background:'#f1f5f9', padding:'0.75rem', borderRadius:'8px', fontSize:'0.9rem', fontWeight:600}}>⚡ Restauration rapide</div>
                            </div>

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
                                        <span className="stat-value">Gpe de 3 à 12 personnes</span>
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
                                <li><CheckCircle2 size={20}/> Identifier les grands principes de la réglementation</li>
                                <li><CheckCircle2 size={20}/> Connaître le contenu du plan de maîtrise sanitaire (PMS)</li>
                                <li><CheckCircle2 size={20}/> Maîtriser la nécessité et l'organisation des autocontrôles</li>
                                <li><CheckCircle2 size={20}/> Analyser les risques liés à une insuffisance d'hygiène</li>
                                <li><CheckCircle2 size={20}/> Appliquer les bonnes pratiques pour assurer la sécurité alimentaire</li>
                            </ul>
                        </div>

                        {/* Programme Detail */}
                        <div className="info-card">
                            <h2 className="section-title"><BookOpen /> Programme détaillé</h2>
                            
                            <div style={{marginBottom: '2.5rem'}}>
                                <h3 style={{display:'flex', alignItems:'center', gap:'0.5rem', color:'#10b981', fontWeight:800, marginBottom:'1.5rem'}}>
                                    <span style={{background:'#10b981', color:'white', width:'30px', height:'30px', borderRadius:'50%', display:'flex', alignItems:'center', justifySelf:'center', justifyContent:'center', fontSize:'0.9rem'}}>1</span>
                                    RÉFÉRENTIEL DE CAPACITÉS (7H)
                                </h3>
                                <ul className="list-check" style={{fontSize:'0.95rem'}}>
                                    <li><ArrowRight size={18} /> Identifier les grands principes de la réglementation et les responsabilités</li>
                                    <li><ArrowRight size={18} /> Maîtriser le contenu du plan de maîtrise sanitaire & le Paquet Hygiène</li>
                                    <li><ArrowRight size={18} /> Utiliser le Guide de Bonnes Pratiques d’Hygiène (GBPH) du secteur</li>
                                    <li><ArrowRight size={18} /> Organiser la production et le stockage dans les conditions requises</li>
                                </ul>
                            </div>

                            <div>
                                <h3 style={{display:'flex', alignItems:'center', gap:'0.5rem', color:'#ef9a37', fontWeight:800, marginBottom:'1.5rem'}}>
                                    <span style={{background:'#ef9a37', color:'white', width:'30px', height:'30px', borderRadius:'50%', display:'flex', alignItems:'center', justifySelf:'center', justifyContent:'center', fontSize:'0.9rem'}}>2</span>
                                    RÉFÉRENTIEL DE FORMATION ET SAVOIRS (7H)
                                </h3>
                                <ul className="list-check" style={{fontSize:'0.95rem'}}>
                                    <li><ArrowRight size={18} /> Aliments et risques : Les différents dangers pour le consommateur</li>
                                    <li><ArrowRight size={18} /> Notions de déclaration, agrément et dérogation (Cerfas 13984/13982)</li>
                                    <li><ArrowRight size={18} /> Plan de Maîtrise Sanitaire : Responsabilité, BPH et principes HACCP</li>
                                    <li><ArrowRight size={18} /> Mesures de surveillance, de vérification et gestion de la traçabilité</li>
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

                            <div className="price-tag">450€ HT <span style={{fontSize:'1rem', opacity:0.8}}>/ pers.</span></div>
                            
                            <div className="calendrier-box" style={{marginTop:0}}>
                                <span className="sidebar-info-label">Délai :</span>
                                <span className="sidebar-info-value">Inscription jusqu’à 48h avant le début</span>

                                <h4 style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontWeight: 800, fontSize:'0.9rem'}}>
                                    <Calendar size={16} /> PROCHAINES SESSIONS (Présentiel) :
                                </h4>
                                <div className="date-item"><span>📅 Mars 2026</span> <span>23 & 24</span></div>
                                <div className="date-item"><span>📅 Mai 2026</span> <span>18 & 19</span></div>
                                <div className="date-item"><span>📅 Juillet 2026</span> <span>27 & 28</span></div>
                                <div className="date-item"><span>📅 Septembre 2026</span> <span>28 & 29</span></div>
                                <div className="date-item"><span>📅 Novembre 2026</span> <span>23 & 24</span></div>
                            </div>

                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-apply">
                                VOUS INSCRIRE (INTER)
                            </a>
                        </div>

                        {/* OPCO MOBILITES */}
                        <div className="info-card" style={{marginTop:'2rem', border:'2px solid #5bb4f8', padding:'1.5rem'}}>
                            <h4 style={{fontWeight:800, color:'#1c1e4c', fontSize:'0.9rem', marginBottom:'0.75rem'}}>OFFRE OPCO MOBILITÉS</h4>
                            <p style={{fontSize:'0.85rem', lineHeight:1.4}}>
                                Tarif préférentiel disponible pour les entreprises rattachées à <strong>OPCO Mobilités</strong> sur leur catalogue M-Campus.
                            </p>
                        </div>

                        {/* MODALITES DIVERSES */}
                        <div className="info-card" style={{marginTop: '2rem', padding: '1.5rem'}}>
                            <h4 style={{fontWeight:800, marginBottom:'1rem', fontSize:'0.9rem'}}>ÉVALUATION & SUIVI</h4>
                            <div style={{fontSize:'0.9rem'}}>
                                <p><strong>Début :</strong> Quiz d’auto-positionnement</p>
                                <p style={{marginTop:'0.5rem'}}><strong>Fin :</strong> Quiz aval (validé à 80%)</p>
                                <p style={{marginTop:'1.5rem', fontStyle:'italic', opacity:0.7}}>Délai de réponse sous 48h.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
