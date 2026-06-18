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
    Monitor
} from 'lucide-react';

export default function TP_RPMS() {
    return (
        <>
            <Helmet>
                <title>TP RPMS - Responsable de Petite et Moyenne Structure | Meta DX School</title>
                <meta name="description" content="Formation Titre Professionnel RPMS Niveau 5 (Bac+2) à Toulouse. Devenez bras droit du dirigeant en alternance ou e-learning." />
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
                    text-transform: uppercase;
                }
                
                .hero-subtitle {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #fbbf24;
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
                    border-left: 4px solid #10b981;
                }
                .stat-icon { color: #10b981; flex-shrink: 0; }
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
                .list-check li svg { color: #10b981; margin-top: 4px; flex-shrink: 0; }

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
                    background: #ecfdf5;
                    color: #065f46;
                    padding: 0.75rem;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    text-align: center;
                    border: 1px solid #a7f3d0;
                }

                .modalite-box {
                    background: #f1f5f9;
                    padding: 1.5rem;
                    border-radius: 12px;
                    border-left: 4px solid #1c1e4c;
                    margin-bottom: 1.5rem;
                }

                .points-bonus {
                    background: #f0fdf4;
                    border: 1px dashed #10b981;
                    padding: 1.5rem;
                    border-radius: 16px;
                    margin-top: 2rem;
                }
            `}</style>

            <div className="formation-page">
                <header className="formation-hero">
                    <div className="hero-container">
                        <span className="version-tag"><a href="https://www.francecompetences.fr/recherche/rncp/37682/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>RNCP N°37682</a> | CODE CPF : 329007</span>
                        <h1>TITRE PROFESSIONNEL RESPONSABLE DE PETITE ET MOYENNE STRUCTURE</h1>
                        <div className="hero-subtitle">NIVEAU 5 – BAC +2 (BAC PRO + EXPÉRIENCE)</div>
                        <p className="hero-desc">
                            Devenez le bras droit incontournable du dirigeant. Une formation complète pour piloter la gestion, le personnel et le développement d'une PME ou Business Unit.
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
                                        <span className="stat-value">Admission Directe (Hors-Parcoursup)</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Accessibility className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Accessibilité</span>
                                        <span className="stat-value">Accompagnement Dédié</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Users className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Admissions</span>
                                        <span className="stat-value">Bac validé ou Expérience Pro</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#eff6ff', borderRadius: '12px', borderLeft: '4px solid #3b82f6', fontSize: '0.95rem' }}>
                                <strong>💡 Accessibilité :</strong> Pour les personnes en situation de handicap, un accompagnement spécifique peut être engagé pour faciliter leur parcours. Vous pouvez <Link to="/financements/handicap" style={{color:'#2563eb', fontWeight:700, textDecoration:'underline'}}>contacter notre référent handicap</Link>.
                            </div>
                            
                            <div className="points-bonus">
                                <h4 style={{fontWeight:900, color:'#1c1e4c', marginBottom:'0.5rem'}}>LE + META DX SCHOOL</h4>
                                <p style={{fontSize:'0.95rem', margin:0}}>
                                    Coaching individuel au Dossier Professionnel (DP), préparation intensive aux oraux de jurys et ateliers de prospection d'entreprises partenaires pour l'alternance.
                                </p>
                            </div>
                        </div>

                        {/* Objectives & Program */}
                        <div className="info-card">
                            <h2 className="section-title"><BookOpen /> Blocs de Compétences (CCP)</h2>
                            <div style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
                                <div>
                                    <h3 style={{fontSize:'1.1rem', fontWeight:800, color:'#10b981', marginBottom:'1rem'}}>
                                        CCP 1 : Gérer les ressources humaines et administratives de la structure
                                    </h3>
                                    <ul className="list-check">
                                        <li><CheckCircle2 size={18}/> Organiser les recrutements et l'intégration des collaborateurs</li>
                                        <li><CheckCircle2 size={18}/> Assurer la gestion administrative du personnel au quotidien</li>
                                        <li><CheckCircle2 size={18}/> Planifier, coordonner et animer le travail de l'équipe</li>
                                        <li><CheckCircle2 size={18}/> Identifier les besoins en compétences et proposer des plans de formation</li>
                                    </ul>
                                </div>
                                <div style={{borderTop:'1px solid #f1f5f9', paddingTop:'1.5rem'}}>
                                    <h3 style={{fontSize:'1.1rem', fontWeight:800, color:'#ef9a37', marginBottom:'1rem'}}>
                                        CCP 2 : Assurer la gestion financière et opérationnelle
                                    </h3>
                                    <ul className="list-check">
                                        <li><CheckCircle2 size={18}/> Piloter les budgets, la trésorerie et facturer les prestations</li>
                                        <li><CheckCircle2 size={18}/> Suivre les indicateurs clés de performance et de rentabilité</li>
                                        <li><CheckCircle2 size={18}/> Gérer les relations avec les fournisseurs, clients et sous-traitants</li>
                                        <li><CheckCircle2 size={18}/> Garantir la conformité réglementaire (sécurité, droit social, hygiène)</li>
                                    </ul>
                                </div>
                                <div style={{borderTop:'1px solid #f1f5f9', paddingTop:'1.5rem'}}>
                                    <h3 style={{fontSize:'1.1rem', fontWeight:800, color:'#3b82f6', marginBottom:'1rem'}}>
                                        CCP 3 : Contribuer au développement commercial et marketing
                                    </h3>
                                    <ul className="list-check">
                                        <li><CheckCircle2 size={18}/> Concevoir, chiffrer et négocier des offres commerciales</li>
                                        <li><CheckCircle2 size={18}/> Déployer les actions de communication et la visibilité numérique de la PME</li>
                                        <li><CheckCircle2 size={18}/> Recueillir les feedbacks clients et piloter des plans de fidélisation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Modalités */}
                        <div className="info-card">
                            <h2 className="section-title"><Monitor /> Modalités de formation</h2>
                            <div className="grid-2">
                                <div className="modalite-box">
                                    <h4 style={{fontWeight:900, marginBottom:'1rem'}}>PRÉSENTIEL (ALTERNANCE)</h4>
                                    <p style={{fontSize:'0.9rem', lineHeight:1.6}}>
                                        • <strong>Durée :</strong> 15 mois (470 heures)<br/>
                                        • <strong>Rythme :</strong> 1 jour école / 4 jours entreprise<br/>
                                        • 15 participants par classe max<br/>
                                        • Salles multimédias modernes
                                    </p>
                                </div>
                                <div className="modalite-box" style={{borderColor:'#ef9a37'}}>
                                    <h4 style={{fontWeight:900, marginBottom:'1rem'}}>E-LEARNING ACCOMPAGNÉ</h4>
                                    <p style={{fontSize:'0.9rem', lineHeight:1.6}}>
                                        • <strong>Durée :</strong> Entrée et sortie permanentes<br/>
                                        • Rythme flexible adapté aux salariés<br/>
                                        • Sessions d'examens biannuelles<br/>
                                        • Webinaires en direct & tutorat individuel
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Débouchés */}
                        <div className="info-card">
                            <h2 className="section-title"><TrendingUp /> Métiers visés</h2>
                            <div className="debouches-grid">
                                <span className="debouche-tag">Bras droit de dirigeant</span>
                                <span className="debouche-tag">Responsable de PME/TPE</span>
                                <span className="debouche-tag">Adjoint de direction</span>
                                <span className="debouche-tag">Responsable d'agence</span>
                                <span className="debouche-tag">Manager de Business Unit</span>
                                <span className="debouche-tag">Chef de projet PME</span>
                                <span className="debouche-tag">Créateur / Repreneur d'entreprise</span>
                            </div>
                        </div>

                        {/* Poursuite d'études */}
                        <div className="info-card" style={{border:'2px solid #fbbf24', background:'#fffbeb'}}>
                            <h2 className="section-title"><GraduationCap /> Poursuite d'études</h2>
                            <p style={{fontSize:'1.05rem', fontWeight:600, color:'#1c1e4c'}}>
                                Après l'obtention de votre Titre RPMS (Bac+2), vous pouvez poursuivre vers un niveau Bac+3 chez Meta DX School :
                            </p>
                            <div style={{marginTop:'1.5rem', display:'flex', alignItems:'center', gap:'1rem'}}>
                                <div style={{background:'#fbbf24', color:'#1c1e4c', padding:'1rem', borderRadius:'12px'}}>
                                    <Award size={32} />
                                </div>
                                <div>
                                    <h4 style={{fontWeight:800}}>BACHELOR RESPONSABLE DES AFFAIRES (BAC+3)</h4>
                                    <p style={{fontSize:'0.9rem'}}>Formation éligible à l'apprentissage pour développer des compétences avancées en stratégie d'affaires.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Sidebar Sidebar */}
                    <div className="sidebar">
                        <div className="cta-card">
                            <h3 style={{fontSize:'1.4rem', fontWeight:900, marginBottom:'1rem', color:'#fbbf24'}}>CONTRAT D'APPRENTISSAGE</h3>
                            <div style={{fontSize:'2rem', fontWeight:900, margin:'1rem 0'}}>0€ <span style={{fontSize:'1rem', opacity:0.8}}>POUR L'APPRENANT</span></div>
                            <p style={{fontSize:'0.85rem', opacity:0.8, lineHeight:1.4, marginBottom:'1.5rem'}}>
                                Le coût de la formation est de **8302 € TTC**.
                            </p>

                            <div style={{textAlign:'left', borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:'1.5rem'}}>
                                <div style={{marginBottom:'1rem'}}>
                                    <span style={{display:'block', fontSize:'0.7rem', color:'#a7f3d0', fontWeight:800}}>FINANCEMENT VAE / CPF</span>
                                    <span style={{fontSize:'0.9rem', fontWeight:700}}>Eligible (Contacter nos conseillers)</span>
                                </div>
                                <div style={{marginBottom:'1rem'}}>
                                    <span style={{display:'block', fontSize:'0.7rem', color:'#a7f3d0', fontWeight:800}}>RÉMUNÉRATION</span>
                                    <span style={{fontSize:'0.9rem', fontWeight:700}}>
                                        Percevez un salaire mensuel (<a href="https://www.service-public.fr/particuliers/vosdroits/F2918" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>selon barème légal</a>)
                                    </span>
                                </div>
                            </div>

                            <a href="/contact" className="btn-primary">S'INSCRIRE À CETTE SESSION</a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-outline">
                                <FileText size={18} /> DOSSIER DE CANDIDATURE
                            </a>
                        </div>

                        <div className="info-card" style={{padding:'1.5rem'}}>
                            <h4 style={{fontWeight: 800, marginBottom: '1rem', fontSize: '0.9rem'}}>MODALITÉS D'EXAMEN</h4>
                            <p style={{fontSize: '0.85rem', lineHeight: 1.5}}>
                                • Mises en situation professionnelle réelles<br/>
                                • Rédaction d'un Dossier Professionnel (DP)<br/>
                                • Entretien technique devant jury agréé par la DREETS
                            </p>
                        </div>

                        <a href="/brochure_rpms.pdf" download className="info-card" style={{display:'flex', alignItems:'center', gap:'1rem', textDecoration:'none', transition:'all 0.2s', border:'2px solid #10b981'}}>
                            <Download color="#10b981" />
                            <div>
                                <h4 style={{fontWeight:800, fontSize:'0.9rem', color:'#1c1e4c'}}>TÉLÉCHARGER LA FICHE PDF</h4>
                                <span style={{fontSize:'0.75rem', color:'#64748b', fontWeight:700}}>Fiche formation RPMS (PDF)</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
