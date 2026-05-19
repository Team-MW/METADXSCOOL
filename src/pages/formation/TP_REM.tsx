import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
    Clock, 
    Users, 
    BookOpen, 
    CheckCircle2, 
    Accessibility, 
    Download,
    GraduationCap,
    TrendingUp,
    ShieldCheck,
    FileText,
    Monitor,
    AlertCircle
} from 'lucide-react';

export default function TP_REM() {
    return (
        <>
            <Helmet>
                <title>TP REM - Responsable d'Établissement Marchand | Meta DX School</title>
                <meta name="description" content="Formation Titre Professionnel REM Niveau 6 (Bac+3) à Toulouse. Devenez un manager d'établissement marchand performant en alternance ou e-learning." />
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
                    background: linear-gradient(135deg, #1e1b4b 0%, #7c3aed 100%);
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
                    border-left: 4px solid #7c3aed;
                }
                .stat-icon { color: #7c3aed; flex-shrink: 0; }
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
                    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
                    gap: 1rem;
                }
                .debouche-tag {
                    background: #f5f3ff;
                    color: #5b21b6;
                    padding: 0.75rem;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    text-align: center;
                    border: 1px solid #ddd6fe;
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

                .doc-block {
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    padding: 1.25rem;
                    margin-bottom: 1.5rem;
                }
            `}</style>

            <div className="formation-page">
                <header className="formation-hero">
                    <div className="hero-container">
                        <span className="version-tag">RNCP N°39063 (V1 du 20/10/2025)</span>
                        <h1>Titre Professionnel Responsable d’Établissement Marchand (REM)</h1>
                        <div className="hero-subtitle">NIVEAU 6 – BAC +3 (ÉQUIVALENT LICENCE)</div>
                        <p className="hero-desc">
                            Cette formation s’adresse aux professionnels et futurs professionnels dans le domaine du commerce souhaitant piloter le développement stratégique et opérationnel d'un centre de profit.
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
                                        <span className="stat-value">Admission Hors-Parcoursup</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Accessibility className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Handicap</span>
                                        <span className="stat-value">Accompagnement Spécifique</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Users className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Enregistrement</span>
                                        <span className="stat-value">Date : 22-02-2024</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#eff6ff', borderRadius: '12px', borderLeft: '4px solid #3b82f6', fontSize: '0.95rem' }}>
                                <strong>💡 Accessibilité :</strong> Pour les personnes en situation de handicap, un accompagnement spécifique peut être engagé pour faciliter leur parcours. N'hésitez pas à <Link to="/ressources/handicap-engagement" style={{color:'#2563eb', fontWeight:700, textDecoration:'underline'}}>contacter notre référente handicap</Link>.
                            </div>
                            
                            <div className="points-bonus">
                                <h4 style={{fontWeight:900, color:'#1c1e4c', marginBottom:'0.5rem'}}>LES + META DX SCHOOL</h4>
                                <ul style={{margin:0, paddingLeft:'1.2rem', fontSize:'0.95rem', lineHeight:'1.6'}}>
                                    <li>Un accompagnement sur-mesure à la réalisation de votre Dossier Professionnel (DP).</li>
                                    <li>Un examen blanc complet en conditions réelles devant des jurys blancs.</li>
                                    <li>Des aides exclusives à la recherche d'entreprises partenaires et à l’emploi.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Prérequis */}
                        <div className="info-card">
                            <h2 className="section-title"><AlertCircle /> Prérequis & Conditions d'accès</h2>
                            <ul className="list-check">
                                <li><CheckCircle2 size={18}/> Être âgé de 18 ans au moins à la date d’entrée en formation.</li>
                                <li><CheckCircle2 size={18}/> Avoir participé et réussi l'entretien individuel d’admission.</li>
                            </ul>
                        </div>

                        {/* Objectives & Program */}
                        <div className="info-card">
                            <h2 className="section-title"><BookOpen /> Objectifs & Programme</h2>
                            <div style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
                                <div>
                                    <h3 style={{fontSize:'1.1.rem', fontWeight:850, color:'#7c3aed', marginBottom:'1rem'}}>
                                        BLOC 1 : Coordonner et améliorer l’activité commerciale de l’établissement marchand
                                    </h3>
                                    <ul className="list-check">
                                        <li><CheckCircle2 size={18}/> Gérer la chaîne d’approvisionnement de l’établissement marchand</li>
                                        <li><CheckCircle2 size={18}/> Piloter l’offre commerciale de l’établissement marchand</li>
                                        <li><CheckCircle2 size={18}/> Bâtir et développer l’expérience client</li>
                                    </ul>
                                </div>
                                <div style={{borderTop:'1px solid #f1f5f9', paddingTop:'1.5rem'}}>
                                    <h3 style={{fontSize:'1.1rem', fontWeight:850, color:'#ef9a37', marginBottom:'1rem'}}>
                                        BLOC 2 : Contribuer aux orientations stratégiques de l’enseigne et optimiser la performance économique
                                    </h3>
                                    <ul className="list-check">
                                        <li><CheckCircle2 size={18}/> Contribuer aux orientations stratégiques de l’enseigne</li>
                                        <li><CheckCircle2 size={18}/> Établir et présenter les budgets prévisionnels de l’établissement marchand</li>
                                        <li><CheckCircle2 size={18}/> Analyser les performances de l’établissement marchand et définir les actions correctives</li>
                                    </ul>
                                </div>
                                <div style={{borderTop:'1px solid #f1f5f9', paddingTop:'1.5rem'}}>
                                    <h3 style={{fontSize:'1.1rem', fontWeight:850, color:'#3b82f6', marginBottom:'1rem'}}>
                                        BLOC 3 : Manager les salariés de l’établissement marchand
                                    </h3>
                                    <ul className="list-check">
                                        <li><CheckCircle2 size={18}/> Piloter les processus de recrutement et d’intégration des salariés de l’établissement marchand</li>
                                        <li><CheckCircle2 size={18}/> Optimiser la performance collective des équipes et la performance individuelle des salariés</li>
                                        <li><CheckCircle2 size={18}/> Manager l’activité quotidienne de l’établissement marchand et favoriser la cohésion des équipes</li>
                                        <li><CheckCircle2 size={18}/> Mobiliser les équipes dans la gestion des projets de l’établissement marchand</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Modalités */}
                        <div className="info-card">
                            <h2 className="section-title"><Monitor /> Modalités pédagogiques & d'accès</h2>
                            <div style={{marginBottom:'2rem', fontSize:'0.95rem', lineHeight:1.6}}>
                                <strong>Délai d'accès :</strong> Le délai d'accès moyen à la formation est de <strong>7 jours maximum</strong>. Les étapes comprennent : information individuelle ou collective, identification, test de connaissances et entretien individuel.
                            </div>
                            <div className="grid-2">
                                <div className="modalite-box">
                                    <h4 style={{fontWeight:900, color:'#7c3aed', marginBottom:'1rem'}}>SUIVI EN PRÉSENTIEL (ALTERNANCE)</h4>
                                    <p style={{fontSize:'0.9rem', lineHeight:1.6}}>
                                        • <strong>Durée :</strong> 12 mois (soit 600 heures en centre)<br/>
                                        • <strong>Rythme :</strong> 1 jour par semaine à l'école, le reste en entreprise<br/>
                                        • 20 participants maximum par groupe<br/>
                                        • Formateurs professionnels experts du secteur<br/>
                                        • Plateau technique dédié reconstituant les conditions réelles des gestes professionnels
                                    </p>
                                </div>
                                <div className="modalite-box" style={{borderColor:'#ef9a37'}}>
                                    <h4 style={{fontWeight:900, color:'#ef9a37', marginBottom:'1rem'}}>SUIVI EN E-LEARNING ACCÈS FLEXIBLE</h4>
                                    <p style={{fontSize:'0.9rem', lineHeight:1.6}}>
                                        • Parcours en e-learning complet adapté à votre rythme<br/>
                                        • Capsules de cours interactives en classes virtuelles<br/>
                                        • <strong>Entrée / sortie permanente :</strong> commencez quand vous voulez !<br/>
                                        • Sessions d'examens biannuelles (2 par an) pour vous inscrire dès que vous êtes prêt.e
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Evaluations */}
                        <div className="info-card">
                            <h2 className="section-title"><FileText /> Modalités d’évaluation</h2>
                            <p style={{fontSize:'0.95rem', marginBottom:'1.5rem'}}>
                                Les compétences des candidats sont évaluées par un jury composé de deux professionnels habilités par la <strong>DREETS</strong> au vu :
                            </p>
                            <div className="doc-block">
                                <ul style={{margin:0, paddingLeft:'1.2rem', fontSize:'0.9rem', lineHeight:'1.6'}}>
                                    <li><strong>Résultats des évaluations :</strong> réalisés durant le cursus pour les candidats issus de la formation continue.</li>
                                    <li><strong>Dossier Professionnel (DP) :</strong> élaboré par vos soins, faisant état de vos pratiques professionnelles et projets.</li>
                                    <li><strong>Mise en situation professionnelle :</strong> ou présentation d'un projet réalisé en amont, éventuellement complétée par d'autres modalités (entretien technique, questionnaire, questionnement de production...).</li>
                                    <li><strong>Entretien final :</strong> soutenance finale devant le jury.</li>
                                </ul>
                            </div>
                            <p style={{fontSize:'0.85rem', color:'#64748b', fontStyle:'italic'}}>
                                * À partir de l'obtention d’un Certificat de Compétence Professionnelle (CCP), vous pouvez vous présenter aux autres CCP restants pour obtenir le titre complet dans la limite de validité du titre.
                            </p>
                        </div>

                        {/* Débouchés */}
                        <div className="info-card">
                            <h2 className="section-title"><TrendingUp /> Débouchés professionnels</h2>
                            <div className="debouches-grid">
                                <span className="debouche-tag">Manager du développement commercial</span>
                                <span className="debouche-tag">Responsable grands comptes</span>
                                <span className="debouche-tag">Responsable / Directeur de magasin</span>
                                <span className="debouche-tag">Chef de secteur / produit</span>
                                <span className="debouche-tag">Manager Commercial</span>
                                <span className="debouche-tag">Adjoint de direction</span>
                                <span className="debouche-tag">Responsable e-commerce</span>
                                <span className="debouche-tag">Manager SAV</span>
                            </div>
                        </div>

                        {/* Poursuite d'études */}
                        <div className="info-card" style={{border:'2px solid #fbbf24', background:'#fffbeb'}}>
                            <h2 className="section-title"><GraduationCap /> Passerelles & Poursuite d'études</h2>
                            <p style={{fontSize:'1rem', lineHeight:1.6, color:'#1c1e4c', margin:0}}>
                                Le Titre Professionnel REM mène principalement à une **insertion directe et rapide dans l’emploi** (formation professionnalisante équivalent Licence). Néanmoins, pour ceux souhaitant poursuivre, des passerelles sont possibles sur un niveau de qualification supérieur (Bac+5 / Niveau 7) dans les domaines commerciaux ou managériaux, tels que nos Mastères.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar Sidebar Sidebar */}
                    <div className="sidebar">
                        <div className="cta-card">
                            <h3 style={{fontSize:'1.4rem', fontWeight:900, marginBottom:'1rem', color:'#fbbf24'}}>APPRENTISSAGE & ALTERNANCE</h3>
                            <div style={{fontSize:'2.2rem', fontWeight:900, margin:'1rem 0'}}>0€ <span style={{fontSize:'1rem', opacity:0.8}}>POUR L'APPRENANT</span></div>
                            <p style={{fontSize:'0.85rem', opacity:0.9, lineHeight:1.4, marginBottom:'1.5rem'}}>
                                Le coût de formation (moyenne de **8302 €** ou avec une **minoration de 20%** en e-learning) est **100% pris en charge par l'OPCO** de votre entreprise d'accueil. Aucun frais restant à votre charge.
                            </p>

                            <div style={{textAlign:'left', borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:'1.5rem'}}>
                                <div style={{marginBottom:'1rem'}}>
                                    <span style={{display:'block', fontSize:'0.7rem', color:'#fbcfe8', fontWeight:800}}>COÛT MOYEN</span>
                                    <span style={{fontSize:'0.9rem', fontWeight:700}}>8 302 € (Prise en charge OPCO complète)</span>
                                </div>
                                <div style={{marginBottom:'1rem'}}>
                                    <span style={{display:'block', fontSize:'0.7rem', color:'#fbcfe8', fontWeight:800}}>MINoration E-LEARNING</span>
                                    <span style={{fontSize:'0.9rem', fontWeight:700}}>20% de remise sur le module à distance</span>
                                </div>
                                <div style={{marginBottom:'1rem'}}>
                                    <span style={{display:'block', fontSize:'0.7rem', color:'#fbcfe8', fontWeight:800}}>RÉMUNÉRATION ALtERNANCE</span>
                                    <span style={{fontSize:'0.9rem', fontWeight:700}}>Percevez un salaire mensuel (selon barème légal)</span>
                                </div>
                            </div>

                            <a href="/contact/candidat" className="btn-primary">CANDIDATER À CETTE SESSION</a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-outline">
                                <FileText size={18} /> DOSSIER DE CANDIDATURE
                            </a>
                        </div>

                        <div className="info-card" style={{padding:'1.5rem'}}>
                            <h4 style={{fontWeight: 800, marginBottom: '1rem', fontSize: '0.9rem'}}>RÉSULTATS & TAUX</h4>
                            <p style={{fontSize: '0.85rem', lineHeight: 1.5}}>
                                Les différents taux et indicateurs de nos formations sont mis à jour chaque année et sont librement consultables.
                            </p>
                            <Link to="/cfa/indicateurs" style={{color:'#7c3aed', fontWeight:800, fontSize:'0.85rem', display:'block', marginTop:'0.5rem', textDecoration:'underline'}}>
                                Voir les indicateurs de résultats
                            </Link>
                        </div>

                        <a href="https://www.francecompetences.fr/recherche/rncp/39063/" target="_blank" rel="noopener noreferrer" className="info-card" style={{display:'flex', alignItems:'center', gap:'1rem', textDecoration:'none', transition:'all 0.2s', border:'2px solid #7c3aed'}}>
                            <Download color="#7c3aed" />
                            <div>
                                <h4 style={{fontWeight:800, fontSize:'0.9rem', color:'#1c1e4c'}}>FICHE COMPLÈTE RNCP</h4>
                                <span style={{fontSize:'0.75rem', color:'#64748b', fontWeight:700}}>Fiche Officielle N°39063</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
