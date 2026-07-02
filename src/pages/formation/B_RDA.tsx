import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import logoSupDeVinci from '../../assets/logo-supdevinci.png';
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
    Briefcase
} from 'lucide-react';

export default function B_RDA() {
    return (
        <>
            <Helmet>
                <title>Bachelor RDA - Responsable du Développement des Affaires | Meta DX School</title>
                <meta name="description" content="Formation Bachelor RDA Niveau 6 (Bac+3) à Toulouse. Devenez un ingénieur commercial d'élite en alternance ou e-learning." />
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
                    background: linear-gradient(135deg, #1e1b4b 0%, #ef9a37 100%);
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
                    background: radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%);
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
                    background: #fffbeb;
                    color: #b45309;
                    padding: 0.75rem;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    text-align: center;
                    border: 1px solid #fde68a;
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
                        <span className="version-tag"><a href="https://www.francecompetences.fr/recherche/rncp/38602/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>RNCP N°38602</a> | SUP DE VINCI | MAJ 27-08-2025</span>
                        <h1>Bachelor Responsable du Développement des Affaires (B-RDA)</h1>
                        <div className="hero-subtitle">NIVEAU 6 – BAC +3 (TITRE RECONNU PAR L'ÉTAT)</div>
                        <p className="hero-desc">
                            Une formation d'excellence préparant à la certification professionnelle pour piloter l'ingénierie d'affaires complexe, le plan d'action commerciale cross-canal et la négociation de haut niveau.
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
                                        <span className="stat-label">Certificateur</span>
                                        <span className="stat-value" style={{ marginTop: '0.25rem', display: 'block' }}>
                                            <img src={logoSupDeVinci} alt="SUP DE VINCI" style={{ maxHeight: '40px', width: 'auto' }} />
                                        </span>
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
                                    <Accessibility className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Accessibilité</span>
                                        <span className="stat-value">Accompagnement Spécifique</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Users className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Prérequis</span>
                                        <span className="stat-value">Titre Niveau 5 + 18 ans min</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Briefcase className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Initiale & Alternance</span>
                                        <span className="stat-value">Alternance et initial</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#eff6ff', borderRadius: '12px', borderLeft: '4px solid #3b82f6', fontSize: '0.95rem' }}>
                                <strong>💡 Accessibilité :</strong> Pour les personnes en situation de handicap, un accompagnement spécifique peut être engagé pour faciliter leur parcours. Vous pouvez <Link to="/ressources/financements-handicap" style={{color:'#2563eb', fontWeight:700, textDecoration:'underline'}}>contacter notre référent handicap</Link>.
                            </div>
                            
                            <div className="points-bonus">
                                <h4 style={{fontWeight:900, color:'#1c1e4c', marginBottom:'0.5rem'}}>LES + META DX SCHOOL</h4>
                                <ul style={{margin:0, paddingLeft:'1.2rem', fontSize:'0.95rem', lineHeight:'1.6'}}>
                                    <li><strong>Business Game :</strong> Un séminaire de simulation d'entreprise intensif pour s’entraîner à la prise de décision stratégique en équipe.</li>
                                    <li>Accompagnement et entraînement sur-mesure à la préparation complète de l’examen final.</li>
                                    <li>Des outils exclusifs d’aide à la recherche d’entreprises et un réseau de partenaires engagés.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Modalités d'accès */}
                        <div className="info-card">
                            <h2 className="section-title"><Clock /> Modalités d'accès</h2>
                            <div style={{fontSize:'0.95rem', lineHeight:1.6}}>
                                <strong>Délai d'accès :</strong> Le délai d'accès moyen à la formation est de <strong>7 jours maximum</strong>. Les étapes comprennent : information individuelle ou collective, identification, test de connaissances et entretien individuel.
                            </div>
                        </div>

                        {/* Objectives & Program */}
                        <div className="info-card">
                            <h2 className="section-title"><BookOpen /> Objectifs & Programme complet</h2>
                            <div style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
                                <div>
                                    <h3 style={{fontSize:'1.1rem', fontWeight:850, color:'#ef9a37', marginBottom:'1rem'}}>
                                        BLOC 1 : Construire le plan d’action commerciale du périmètre en responsabilité (91h)
                                    </h3>
                                    <ul className="list-check">
                                        <li><CheckCircle2 size={18}/> Développer un dispositif de veille concurrentielle et d’évolution des marchés</li>
                                        <li><CheckCircle2 size={18}/> Réaliser le diagnostic commercial interne pour définir les avantages concurrentiels</li>
                                        <li><CheckCircle2 size={18}/> Décliner la stratégie commerciale de l’entreprise à l’échelle du périmètre</li>
                                        <li><CheckCircle2 size={18}/> Élaborer le plan d’action commerciale pour prioriser, piloter et budgétiser les actions</li>
                                    </ul>
                                </div>
                                <div style={{borderTop:'1px solid #f1f5f9', paddingTop:'1.5rem'}}>
                                    <h3 style={{fontSize:'1.1rem', fontWeight:850, color:'#7c3aed', marginBottom:'1rem'}}>
                                        BLOC 2 : Déployer le plan d’action commerciale cross et multicanal de détection d’opportunités (98h)
                                    </h3>
                                    <ul className="list-check">
                                        <li><CheckCircle2 size={18}/> Piloter en mode projet les équipes pluridisciplinaires supports (marketing, com, assistance)</li>
                                        <li><CheckCircle2 size={18}/> Déployer les actions de marketing opérationnel et de prospection directe</li>
                                        <li><CheckCircle2 size={18}/> Élaborer des actions de vente sociale (social selling) et de marketing entrant (inbound)</li>
                                        <li><CheckCircle2 size={18}/> Sélectionner les appels d’offres pertinents, qualifier le CRM et suivre le ROI global</li>
                                    </ul>
                                </div>
                                <div style={{borderTop:'1px solid #f1f5f9', paddingTop:'1.5rem'}}>
                                    <h3 style={{fontSize:'1.1rem', fontWeight:850, color:'#3b82f6', marginBottom:'1rem'}}>
                                        BLOC 3 : Négocier des accords contractuels complexes (136h30)
                                    </h3>
                                    <ul className="list-check">
                                        <li><CheckCircle2 size={18}/> Mener une recherche d'informations stratégique multicanale pré-négociation</li>
                                        <li><CheckCircle2 size={18}/> Élaborer l'approche et le questionnement pour formuler une offre personnalisée</li>
                                        <li><CheckCircle2 size={18}/> Décliner une argumentation collaborative alliant rentabilité et satisfaction client</li>
                                        <li><CheckCircle2 size={18}/> Construire et concevoir la proposition finale, piloter sa mise en œuvre réglementaire</li>
                                    </ul>
                                </div>
                                <div style={{borderTop:'1px solid #f1f5f9', paddingTop:'1.5rem'}}>
                                    <h3 style={{fontSize:'1.1rem', fontWeight:850, color:'#10b981', marginBottom:'1rem'}}>
                                        BLOC 4 : Piloter la qualité et la performance de l’action commerciale (73h30)
                                    </h3>
                                    <ul className="list-check">
                                        <li><CheckCircle2 size={18}/> Mobiliser les interlocuteurs internes (SAV, comptabilité, service clients...)</li>
                                        <li><CheckCircle2 size={18}/> Intégrer la démarche commerciale dans la démarche qualité globale</li>
                                        <li><CheckCircle2 size={18}/> Identifier les actions correctives durables pour résoudre les anomalies</li>
                                        <li><CheckCircle2 size={18}/> Installer un système de mesure de la performance (KPIs) pour affiner les décisions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Modalités Pédagogiques */}
                        <div className="info-card">
                            <h2 className="section-title"><Monitor /> Modalités pédagogiques</h2>
                            
                            <div className="modalite-box">
                                <h4 style={{fontWeight:900, color:'#ef9a37', marginBottom:'1rem'}}>SUIVI EN PRÉSENTIEL (ALTERNANCE / INITIAL)</h4>
                                <p style={{fontSize:'0.9rem', lineHeight:1.6}}>
                                    • <strong>Durée :</strong> 12 mois (soit 600 heures en centre de formation)<br/>
                                    • <strong>Rythme :</strong> 1 jour par semaine à l'école, le reste en entreprise<br/>
                                    • 15 participants maximum par groupe pour un suivi optimal<br/>
                                    • Formateurs professionnels experts du secteur et mise en application « terrain »<br/>
                                    • Plateau technique dédié pour la mise en pratique de gestes professionnels
                                </p>
                            </div>

                            <div style={{marginTop: '1.5rem'}}>
                                <p style={{fontSize:'0.95rem', marginBottom:'1rem'}}>
                                    Les moyens pédagogiques mis en œuvre sont variés et adaptés aux besoins des apprenants, afin de garantir une expérience d'apprentissage enrichissante et efficace.
                                </p>
                                <h4 style={{fontWeight:900, color:'#1c1e4c', marginBottom:'1rem'}}>Moyens pédagogiques</h4>
                                <ul style={{margin:0, paddingLeft:'1.2rem', fontSize:'0.9rem', lineHeight:'1.6', marginBottom:'1rem'}}>
                                    <li><strong>Cours magistraux :</strong> Des sessions de cours magistraux animées par des experts du domaine, couvrant les fondamentaux théoriques et les tendances actuelles du développement des affaires.</li>
                                    <li><strong>Études de cas :</strong> Analyse approfondie de cas réels et fictifs pour illustrer les concepts théoriques et développer des compétences en résolution de problèmes.</li>
                                    <li><strong>Ressources en ligne :</strong> Accès à une plateforme d'apprentissage en ligne offrant des ressources pédagogiques complémentaires, des vidéos, des articles et des forums de discussion.</li>
                                    <li><strong>Tutorat et mentorat :</strong> Suivi personnalisé par des tuteurs et des mentors pour accompagner les apprenants dans leur parcours de formation et les aider à atteindre leurs objectifs professionnels.</li>
                                    <li><strong>Évaluations continues :</strong> Mise en place d'évaluations régulières pour mesurer les progrès des apprenants et adapter les moyens pédagogiques en conséquence.</li>
                                </ul>
                                <p style={{fontSize:'0.95rem'}}>
                                    Ces moyens pédagogiques sont conçus pour offrir une formation complète et adaptée aux exigences du marché, permettant aux apprenants de développer les compétences nécessaires pour réussir dans le domaine du développement des affaires.
                                </p>
                            </div>
                        </div>

                        {/* Evaluations */}
                        <div className="info-card">
                            <h2 className="section-title"><FileText /> Modalités d’évaluation</h2>
                            <div className="doc-block">
                                <ul style={{margin:0, paddingLeft:'1.2rem', fontSize:'0.9rem', lineHeight:'1.6', marginBottom:'1.5rem'}}>
                                    <li>La certification s'obtient par la validation des 4 blocs de compétences, complétée de l'évaluation complémentaire prévue au règlement de certification pour le titre complet.</li>
                                    <li>Chaque bloc peut être validé indépendamment ; un bloc validé reste acquis et donne lieu à une attestation.</li>
                                </ul>
                                <h4 style={{fontWeight:900, color:'#1c1e4c', marginBottom:'0.5rem', fontSize:'1rem'}}>Composition du jury</h4>
                                <p style={{fontSize:'0.9rem', lineHeight:1.6, margin:0}}>
                                    Le jury de certification est composé de 3 membres minimum, dont 2 professionnels externes. Pour la VAE, le jury comprend un membre de l'organisme certificateur et deux professionnels exerçant ou experts des emplois visés, avec une présence systématique d'au moins deux professionnels représentant au moins 25 % des membres. Le jury est souverain dans l'appréciation des prestations.
                                </p>
                            </div>
                        </div>

                        {/* Débouchés */}
                        <div className="info-card">
                            <h2 className="section-title"><TrendingUp /> Débouchés professionnels</h2>
                            <div className="debouches-grid">
                                <span className="debouche-tag">Responsable comptes clés</span>
                                <span className="debouche-tag">Responsable grands comptes</span>
                                <span className="debouche-tag">Responsable technico-commercial</span>
                                <span className="debouche-tag">Chargé(e) d’affaires</span>
                                <span className="debouche-tag">Chef de secteur</span>
                                <span className="debouche-tag">Attaché(e) commercial</span>
                            </div>
                        </div>

                        {/* Poursuite d'études */}
                        <div className="info-card" style={{border:'2px solid #fbbf24', background:'#fffbeb'}}>
                            <h2 className="section-title"><GraduationCap /> Poursuite d'études</h2>
                            <p style={{fontSize:'1rem', lineHeight:1.6, color:'#1c1e4c', margin:0}}>
                                Suite à l’obtention de la formation RDA, il est tout à fait possible de poursuivre vos études vers un niveau supérieur (Bac+5 / Niveau 7), tel que notre **Mastère Manager du Développement d’Entreprise et Commercial (TP-MDEC)** ou un Mastère d'Ingénieur d'Affaires.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar Sidebar Sidebar */}
                    <div className="sidebar">
                        <div className="cta-card">
                            <h3 style={{fontSize:'1.4rem', fontWeight:900, marginBottom:'1rem', color:'#fbbf24'}}>Initiale & Alternance</h3>
                            <div style={{fontSize:'2.2rem', fontWeight:900, margin:'1rem 0'}}>0€ <span style={{fontSize:'1rem', opacity:0.8}}>POUR L'APPRENANT</span></div>
                            <p style={{fontSize:'0.85rem', opacity:0.9, lineHeight:1.4, marginBottom:'1.5rem'}}>
                                
                            </p>

                            <div style={{textAlign:'left', borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:'1.5rem'}}>
                                <div style={{marginBottom:'1rem'}}>
                                    <span style={{display:'block', fontSize:'0.7rem', color:'#fbcfe8', fontWeight:800}}>COÛT DE LA FORMATION</span>
                                    <span style={{fontSize:'0.9rem', fontWeight:700}}>7 827 € TTC</span>
                                </div>
                                <div style={{marginBottom:'1rem'}}>
                                    <span style={{display:'block', fontSize:'0.7rem', color:'#fbcfe8', fontWeight:800}}>DIPLÔME</span>
                                    <span style={{fontSize:'0.9rem', fontWeight:700}}>Titre RNCP Sup de Vinci Niveau 6</span>
                                </div>
                                <div style={{marginBottom:'1rem'}}>
                                    <span style={{display:'block', fontSize:'0.7rem', color:'#fbcfe8', fontWeight:800}}>DURÉE</span>
                                    <span style={{fontSize:'0.9rem', fontWeight:700}}>12 mois (600 heures en centre)</span>
                                </div>
                            </div>

                            <a href="/contact" className="btn-primary">COMMENT NOUS CONTACTER</a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-outline">
                                <FileText size={18} /> CANDIDATER
                            </a>
                        </div>

                        <div className="info-card" style={{padding:'1.5rem'}}>
                            <h4 style={{fontWeight: 800, marginBottom: '1rem', fontSize: '0.9rem'}}>RÉSULTATS & TAUX</h4>
                            <p style={{fontSize: '0.85rem', lineHeight: 1.5}}>
                                Les différents taux et indicateurs de nos formations sont mis à jour chaque année et sont librement consultables.
                            </p>
                            <Link to="/cfa/indicateurs" style={{color:'#ef9a37', fontWeight:800, fontSize:'0.85rem', display:'block', marginTop:'0.5rem', textDecoration:'underline'}}>
                                Voir les indicateurs de résultats
                            </Link>
                        </div>

                        <a href="https://www.francecompetences.fr/recherche/rncp/38602/" target="_blank" rel="noopener noreferrer" className="info-card" style={{display:'flex', alignItems:'center', gap:'1rem', textDecoration:'none', transition:'all 0.2s', border:'2px solid #ef9a37'}}>
                            <Download color="#ef9a37" />
                            <div>
                                <h4 style={{fontWeight:800, fontSize:'0.9rem', color:'#1c1e4c'}}>FICHE COMPLÈTE RNCP</h4>
                                <span style={{fontSize:'0.75rem', color:'#64748b', fontWeight:700}}>Fiche Officielle N°38602</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
