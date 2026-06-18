import { Helmet } from 'react-helmet-async';
import { 
    Clock, 
    Users, 
    CheckCircle2, 
    Award, 
    Calendar, 
    Accessibility, 
    RefreshCcw,
    ArrowRight,
    Search,
    Utensils,
    FileText
} from 'lucide-react';

export default function SecouristeSSTMAC() {
    return (
        <>
            <Helmet>
                <title>SST MAC - Maintien et Actualisation des Compétences | Meta DX School</title>
                <meta name="description" content="Formation de recyclage SST (MAC) d'une journée. Obligatoire tous les 24 mois pour maintenir votre certificat de secouriste." />
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
                    border: 1px solid rgba(255,255,255,0.2);
                }

                .formation-hero h1 {
                    font-size: 2.8rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                }

                .hero-desc {
                    font-size: 1.25rem;
                    line-height: 1.6;
                    opacity: 0.95;
                    max-width: 850px;
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

                .stat-grid {
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
                    border-left: 4px solid #10b981;
                }
                .stat-icon { color: #10b981; flex-shrink: 0; }
                .stat-text { display: flex; flex-direction: column; }
                .stat-label { font-size: 0.75rem; color: #64748b; font-weight: 700; text-transform: uppercase; }
                .stat-value { font-size: 1rem; font-weight: 800; color: #1e293b; }

                .list-check { list-style: none; padding: 0; }
                .list-check li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                    font-size: 1.05rem;
                    line-height: 1.5;
                }
                .list-check li svg { color: #10b981; margin-top: 4px; flex-shrink: 0; }

                .sidebar { position: sticky; top: 2rem; align-self: start; }
                
                .cta-card {
                    background: #1c1e4c;
                    color: white;
                    border-radius: 20px;
                    padding: 2.5rem;
                    box-shadow: 0 15px 35px rgba(16, 185, 129, 0.2);
                }
                .price-tag {
                    font-size: 2.5rem;
                    font-weight: 900;
                    margin: 1.5rem 0;
                    color: #10b981;
                }

                .btn-apply {
                    display: block;
                    background: #10b981;
                    color: white;
                    padding: 1.25rem;
                    border-radius: 12px;
                    text-decoration: none;
                    font-weight: 800;
                    font-size: 1.1rem;
                    text-align: center;
                    margin-top: 2rem;
                    transition: all 0.2s;
                }
                .btn-apply:hover { background: #059669; transform: translateY(-3px); }

                .date-item {
                    padding: 0.75rem;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.95rem;
                }
                .date-item:last-child { border: none; }

                .bonus-box {
                    background: #f0fdf4;
                    border: 1px dashed #10b981;
                    padding: 1.5rem;
                    border-radius: 16px;
                    display: flex;
                    gap: 1.25rem;
                    align-items: center;
                    margin-top: 1rem;
                }

                @media(max-width: 900px) {
                    .main-layout { grid-template-columns: 1fr; }
                    .formation-hero h1 { font-size: 2rem; }
                }
            `}</style>

            <div className="formation-page">
                <header className="formation-hero">
                    <div className="hero-container">
                        <span className="version-tag">V12 – DATE DE MAJ 18/06/2026</span>
                        <h1>SST : MAINTIEN ET ACTUALISATION DES COMPÉTENCES (MAC)</h1>
                        <p className="hero-desc">
                            Actualisez vos compétences de secouriste et renouvelez votre certificat SST pour une durée de 24 mois.
                        </p>
                    </div>
                </header>

                <div className="main-layout">
                    <div className="content-area">
                        {/* Presentation */}
                        <div className="info-card">
                            <h2 className="section-title"><RefreshCcw /> Recyclage Obligatoire</h2>
                            <p style={{lineHeight:1.7, marginBottom: '2rem'}}>
                                Toutes les entreprises doivent disposer de secouristes opérationnels. Leurs compétences doivent être mises à jour <strong>tous les 24 mois</strong> pour garantir une efficacité maximale en cas d'accident.
                            </p>
                            
                            <div className="stat-grid">
                                <div className="stat-item">
                                    <Clock className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Durée</span>
                                        <span className="stat-value">1 jour (7 heures)</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <CheckCircle2 className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Prérequis</span>
                                        <span style={{fontSize:'0.75rem'}}>Certificat SST ou APS valide</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Users className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Groupe</span>
                                        <span className="stat-value">4 à 10 participants</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Accessibility className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Accessibilité</span>
                                        <span className="stat-value">Référent Accessibilité</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bonus-box">
                                <Utensils size={32} color="#10b981" />
                                <div>
                                    <h4 style={{fontWeight:800, color:'#065f46', fontSize:'0.95rem'}}>LES + META DX</h4>
                                    <p style={{fontSize: '0.85rem', margin: 0, color:'#064e3b'}}>Viennoiseries offertes pour le petit-déjeuner. Intervenant certifié formateur SST.</p>
                                </div>
                            </div>
                        </div>

                        {/* Programme */}
                        <div className="info-card">
                            <h2 className="section-title"><FileText /> Programme du recyclage</h2>
                            
                            <div style={{marginBottom: '2rem'}}>
                                <h3 style={{fontWeight:900, color:'#1c1e4c', fontSize:'1rem', marginBottom:'1rem'}}>1. ANALYSE DES COMPÉTENCES</h3>
                                <ul className="list-check">
                                    <li><ArrowRight size={18} /> Échanger sur ses pratiques en tant que SST</li>
                                    <li><ArrowRight size={18} /> S’approprier les nouveautés du document de référence INRS</li>
                                </ul>
                            </div>

                            <div style={{marginBottom: '2rem'}}>
                                <h3 style={{fontWeight:900, color:'#1c1e4c', fontSize:'1rem', marginBottom:'1rem'}}>2. RÉVISIONS SECOURS</h3>
                                <ul className="list-check">
                                    <li><ArrowRight size={18} /> Protéger, Examiner, Alerter et Secourir</li>
                                    <li><ArrowRight size={18} /> Mise à jour des données techniques de secours</li>
                                </ul>
                            </div>

                            <div>
                                <h3 style={{fontWeight:900, color:'#1c1e4c', fontSize:'1rem', marginBottom:'1rem'}}>3. PRÉVENTION</h3>
                                <ul className="list-check">
                                    <li><ArrowRight size={18} /> Caractériser et participer à la maîtrise des risques pro</li>
                                </ul>
                            </div>
                        </div>

                        {/* Eval */}
                        <div className="info-card" style={{background: '#f0fdf4', border:'1px solid #d1fae5'}}>
                            <h2 className="section-title" style={{border:0, marginBottom: '1rem'}}><Search /> Évaluation</h2>
                            <p style={{fontSize:'0.95rem', lineHeight:1.6}}>
                                <strong>Modalités :</strong> Quiz aval et exercices collectifs de mise en pratique à partir de cas concrets.<br/>
                                <strong>Certification :</strong> Délivrance d'un nouveau certificat SST valide 24 mois.
                            </p>
                        </div>
                    </div>

                    <div className="sidebar">
                        <div className="cta-card">
                            <span style={{color: '#d1fae5', fontWeight: 800, fontSize:'0.75rem'}}>RECYCLAGE / MAC</span>
                            <div className="price-tag">200€ TTC <span style={{fontSize:'1rem', opacity:0.8}}>/ pers.</span></div>
                            
                            <div style={{textAlign:'left', marginBottom:'1.5rem'}}>
                                <p style={{fontSize:'0.85rem', marginBottom:'1rem', display:'flex', gap:'0.5rem'}}>
                                    <Award size={16} color="#10b981" /> 
                                    <span><strong>Éligible CPF</strong></span>
                                </p>
                                <p style={{fontSize:'0.85rem', color:'#d1fae5'}}>Possibilité de prise en charge par OPCO.</p>
                            </div>

                            <div className="calendrier-box" style={{background:'rgba(255,255,255,0.05)', padding:'1rem', borderRadius:'12px'}}>
                                <h4 style={{fontSize:'0.85rem', fontWeight:800, marginBottom:'1rem', display:'flex', gap:'0.5rem'}}>
                                    <Calendar size={16} /> SESSIONS EN PRÉSENTIEL :
                                </h4>
                                <div className="date-item"><span>📅 Mars 2026</span> <span>Le 23</span></div>
                                <div className="date-item"><span>📅 Mai 2026</span> <span>Le 18</span></div>
                                <div className="date-item"><span>📅 Juillet 2026</span> <span>Le 27</span></div>
                                <div className="date-item"><span>📅 Sept. 2026</span> <span>Le 28</span></div>
                                <div className="date-item"><span>📅 Nov. 2026</span> <span>Le 23</span></div>
                            </div>

                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-apply">S'INSCRIRE (MAC)</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
