import { Helmet } from 'react-helmet-async';
import { 
    Clock, 
    Users, 
    BookOpen, 
    CheckCircle2, 
    Award, 
    Calendar, 
    Accessibility, 
    ArrowRight,
    Search,
    Utensils,
    FileText
} from 'lucide-react';

export default function SecouristeSST() {
    return (
        <>
            <Helmet>
                <title>Sauveteur Secouriste du Travail (SST) | Formation Meta DX School</title>
                <meta name="description" content="Formation SST de 2 jours pour devenir Sauveteur Secouriste du Travail. Éligible CPF et OPCO." />
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
                    top: -50%; left: -10%;
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
                    border-left: 4px solid #ef9a37;
                }
                .stat-icon { color: #ef9a37; flex-shrink: 0; }
                .stat-text { display: flex; flex-direction: column; }
                .stat-label { font-size: 0.75rem; color: #64748b; font-weight: 700; text-transform: uppercase; }
                .stat-value { font-size: 1rem; font-weight: 800; color: #1e293b; }

                .list-check { list-style: none; padding: 0; }
                .list-check li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    margin-bottom: 1.25rem;
                    font-size: 1.05rem;
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
                }
                .price-tag {
                    font-size: 2.5rem;
                    font-weight: 900;
                    margin: 1.5rem 0;
                    color: #ef9a37;
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
                    text-align: center;
                    margin-top: 2rem;
                    transition: all 0.2s;
                }
                .btn-apply:hover { background: #f5a646; transform: translateY(-3px); }

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

                .bonus-box {
                    background: #fff8f1;
                    border: 1px dashed #ef9a37;
                    padding: 1.5rem;
                    border-radius: 16px;
                    display: flex;
                    gap: 1.25rem;
                    align-items: center;
                    margin-top: 2rem;
                }

                .program-section { margin-bottom: 2.5rem; }
                .program-title { 
                    font-weight: 900; 
                    color: #1c1e4c; 
                    margin-bottom: 1.25rem; 
                    font-size: 1.1rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                @media(max-width: 900px) {
                    .main-layout { grid-template-columns: 1fr; }
                    .formation-hero h1 { font-size: 2.2rem; }
                }
            `}</style>

            <div className="formation-page">
                <header className="formation-hero">
                    <div className="hero-container">
                        <span className="version-tag">V1 – DATE DE MAJ 23/09/2025</span>
                        <h1>SAUVETEUR SECOURISTE DU TRAVAIL (SST)</h1>
                        <p className="hero-desc">
                            Contribuez à la prévention des risques professionnels et soyez capable d’intervenir immédiatement et efficacement après tout accident au sein de votre entreprise.
                        </p>
                    </div>
                </header>

                <div className="main-layout">
                    <div className="content-area">
                        {/* Indicators */}
                        <div className="indicator-bar">
                            <div style={{flex:1, textAlign:'center'}}>
                                <span style={{display:'block', fontSize:'1.5rem', fontWeight:900, color:'#ef9a37'}}>/</span>
                                <span style={{fontSize:'0.75rem', fontWeight:800, color:'#64748b'}}>STAGIAIRES</span>
                            </div>
                            <div style={{flex:1, textAlign:'center', borderLeft:'1px solid #f1f5f9', borderRight:'1px solid #f1f5f9'}}>
                                <span style={{display:'block', fontSize:'1.5rem', fontWeight:900, color:'#ef9a37'}}>/</span>
                                <span style={{fontSize:'0.75rem', fontWeight:800, color:'#64748b'}}>RÉUSSITE</span>
                            </div>
                            <div style={{flex:1, textAlign:'center'}}>
                                <span style={{display:'block', fontSize:'1.5rem', fontWeight:900, color:'#ef9a37'}}>/</span>
                                <span style={{fontSize:'0.75rem', fontWeight:800, color:'#64748b'}}>SATISFACTION</span>
                            </div>
                        </div>

                        {/* Presentation */}
                        <div className="info-card">
                            <h2 className="section-title"><BookOpen /> Présentation</h2>
                            <p style={{lineHeight:1.7, marginBottom: '2rem'}}>
                                Toutes les entreprises doivent disposer de secouristes en nombre adapté et bien répartis. Cette formation vous donne les clés pour agir en tant qu'acteur de la prévention et du secours.
                            </p>
                            
                            <div className="stat-grid">
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
                                        <span className="stat-label">Public / Groupe</span>
                                        <span className="stat-value">4 à 10 participants</span>
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
                                        <span className="stat-value">Référent Handicap</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bonus-box">
                                <Utensils size={32} color="#ef9a37" />
                                <div>
                                    <h4 style={{fontWeight:800, color:'#c05621', fontSize:'0.95rem'}}>LES + META DX</h4>
                                    <p style={{fontSize: '0.85rem', margin: 0, color:'#7b341e'}}>Viennoiseries offertes pour le petit-déjeuner. Intervenant expert certifié formateur SST.</p>
                                </div>
                            </div>
                        </div>

                        {/* Objectifs */}
                        <div className="info-card">
                            <h2 className="section-title"><Award /> Objectifs pédagogiques</h2>
                            <ul className="list-check">
                                <li><CheckCircle2 size={20}/> Intervenir face à une situation d’accident du travail</li>
                                <li><CheckCircle2 size={20}/> Contribuer à la prévention des risques professionnels</li>
                                <li><CheckCircle2 size={20}/> Situer son rôle de SST dans l'organisation de l'entreprise</li>
                            </ul>
                        </div>

                        {/* Programme */}
                        <div className="info-card">
                            <h2 className="section-title"><FileText /> Programme détaillé</h2>
                            
                            <div className="program-section">
                                <h3 className="program-title" style={{color:'#e25865'}}>🛡️ SECOURS</h3>
                                <ul className="list-check">
                                    <li><ArrowRight size={18} /> Situer son rôle de SST dans l'entreprise</li>
                                    <li><ArrowRight size={18} /> Protéger la victime de façon adaptée</li>
                                    <li><ArrowRight size={18} /> Examiner la victime & garantir une alerte efficace</li>
                                    <li><ArrowRight size={18} /> Secourir de manière appropriée</li>
                                </ul>
                            </div>

                            <div className="program-section">
                                <h3 className="program-title" style={{color:'#ef9a37'}}>🚧 PRÉVENTION</h3>
                                <ul className="list-check">
                                    <li><ArrowRight size={18} /> Rôle du SST dans l'organisation de la prévention</li>
                                    <li><ArrowRight size={18} /> Caractériser les risques professionnels en situation réelle</li>
                                    <li><ArrowRight size={18} /> Participer à la maîtrise des risques par des actions concrètes</li>
                                </ul>
                            </div>
                        </div>

                        {/* Eval */}
                        <div className="info-card" style={{background: '#f8fafc', border:'1px solid #e2e8f0'}}>
                            <h2 className="section-title" style={{border:0, marginBottom: '1rem'}}><Search /> Évaluation & Certification</h2>
                            <p style={{fontSize:'0.95rem', lineHeight:1.6}}>
                                <strong>Évaluation :</strong> Simulation d’accident de travail et questionnement.<br/>
                                <strong>Validité :</strong> Le certificat SST est valide <strong>24 mois</strong> (Doc ref V8 - 01/2021).
                            </p>
                        </div>
                    </div>

                    <div className="sidebar">
                        <div className="cta-card">
                            <span style={{color: '#5bb4f8', fontWeight: 800, fontSize:'0.75rem'}}>FORMATION INITIALE</span>
                            <div className="price-tag">300€ HT <span style={{fontSize:'0.9rem', opacity:0.8}}>/ pers.</span></div>
                            
                            <div style={{textAlign:'left', marginBottom:'1.5rem'}}>
                                <p style={{fontSize:'0.85rem', marginBottom:'1rem', display:'flex', gap:'0.5rem'}}>
                                    <Award size={16} color="#ef9a37" /> 
                                    <span><strong>Éligible CPF</strong> via Mon Compte Formation</span>
                                </p>
                                <p style={{fontSize:'0.85rem', color:'#5bb4f8'}}>Possibilité de prise en charge par OPCO.</p>
                            </div>

                            <div className="calendrier-box" style={{background:'rgba(255,255,255,0.05)', padding:'1rem', borderRadius:'12px'}}>
                                <h4 style={{fontSize:'0.85rem', fontWeight:800, marginBottom:'1rem', display:'flex', gap:'0.5rem'}}>
                                    <Calendar size={16} /> SESSIONS EN PRÉSENTIEL :
                                </h4>
                                <div style={{maxHeight:'200px', overflowY:'auto', paddingRight:'5px'}}>
                                    <div className="date-item"><span>Fév. 26</span> <span>16 & 17</span></div>
                                    <div className="date-item"><span>Mars 26</span> <span>16 & 17</span></div>
                                    <div className="date-item"><span>Avr. 26</span> <span>13 & 14</span></div>
                                    <div className="date-item"><span>Mai 26</span> <span>11 & 12</span></div>
                                    <div className="date-item"><span>Juin 26</span> <span>15 & 16</span></div>
                                    <div className="date-item"><span>Juil. 26</span> <span>15 & 16</span></div>
                                    <div className="date-item"><span>Août 26</span> <span>17 & 18</span></div>
                                    <div className="date-item"><span>Sept. 26</span> <span>14 & 15</span></div>
                                </div>
                            </div>

                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-apply">S'INSCRIRE (INTER)</a>
                        </div>
                        
                        <div className="info-card" style={{marginTop:'2rem', border:'2px solid #ef9a37'}}>
                            <h4 style={{fontWeight:900, color:'#1c1e4c', fontSize:'1rem', marginBottom:'0.75rem'}}>MAINTIEN DES COMPÉTENCES (MAC)</h4>
                            <p style={{fontSize:'0.9rem', color:'#475569', marginBottom:'1.5rem'}}>
                                Vous avez déjà votre certificat ? Pensez au recyclage obligatoire tous les 24 mois.
                            </p>
                            <a href="/forma-secu/securite/sst-mac" style={{color:'#1c1e4c', fontWeight:800, fontSize:'0.9rem', display:'flex', alignItems:'center', gap:'0.5rem', textDecoration:'none'}}>
                                Voir la formation MAC <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
