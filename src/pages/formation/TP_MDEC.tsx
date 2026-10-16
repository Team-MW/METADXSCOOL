import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import logoIsme from '../../assets/logo-isme.png';
import { 
    Clock, 
    Users, 
    BookOpen, 
    Award, 
    ArrowRight,
    TrendingUp,
    ShieldCheck,
    FileText,
    CheckCircle2,
    Monitor,
    Zap,
    Target,
    BarChart3,
    Handshake,
    Calendar,
    GraduationCap,
    ExternalLink
} from 'lucide-react';

export default function TP_MDEC() {
    return (
        <>
            <Helmet>
                <title>Certification Professionnelle MDEC (RNCP 39354) - Manager du Développement d'Entreprise et Commercial | Meta DX School</title>
                <meta name="description" content="Certification professionnelle MDEC Niveau 7 (Bac+5) enregistrée au RNCP sous le N° 39354 par décision de France Compétences en date du 19/07/2024. Délivrée par ISME. Accessible par la VAE." />
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
                    display: inline-flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    background: rgba(255, 255, 255, 0.12);
                    padding: 0.5rem 1.25rem;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.25);
                    backdrop-filter: blur(8px);
                }

                .formation-hero h1 {
                    font-size: 2.75rem;
                    font-weight: 900;
                    line-height: 1.15;
                    margin-bottom: 1rem;
                    max-width: 950px;
                    text-transform: uppercase;
                }
                .hero-subtitle {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: #ef9a37;
                    margin-bottom: 1.5rem;
                }

                .hero-desc {
                    font-size: 1.15rem;
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

                .quick-stats {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                .stat-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    background: #f8fafc;
                    padding: 1.25rem;
                    border-radius: 12px;
                    border-left: 4px solid #7c3aed;
                }
                .stat-icon { color: #7c3aed; flex-shrink: 0; margin-top: 2px; }
                .stat-text { display: flex; flex-direction: column; gap: 0.25rem; }
                .stat-label { font-size: 0.75rem; color: #64748b; font-weight: 700; text-transform: uppercase; display: block; }
                .stat-value { font-size: 0.95rem; font-weight: 800; color: #1e293b; display: block; }

                .rncp-banner {
                    margin-top: 1.5rem;
                    padding: 1.25rem 1.5rem;
                    background: #f5f3ff;
                    border-radius: 14px;
                    border: 1px solid #ddd6fe;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    color: #3b0764;
                }

                .list-check { list-style: none; padding: 0; margin: 0; }
                .list-check li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                    font-size: 0.98rem;
                    line-height: 1.55;
                }
                .list-check li svg { color: #7c3aed; margin-top: 3px; flex-shrink: 0; }

                /* TABLE STYLES */
                .rncp-table-container {
                    overflow-x: auto;
                    border: 1px solid #e2e8f0;
                    border-radius: 14px;
                    margin-top: 1.25rem;
                    box-shadow: 0 4px 16px rgba(0,0,0,0.03);
                }
                .rncp-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 0.88rem;
                    text-align: left;
                    background: white;
                }
                .rncp-table thead {
                    background: #1c1e4c;
                    color: white;
                }
                .rncp-table th {
                    padding: 1rem;
                    font-weight: 800;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    border-right: 1px solid rgba(255, 255, 255, 0.12);
                    vertical-align: middle;
                }
                .rncp-table th:last-child {
                    border-right: none;
                }
                .rncp-table td {
                    padding: 1rem;
                    border-bottom: 1px solid #f1f5f9;
                    border-right: 1px solid #f1f5f9;
                    vertical-align: middle;
                }
                .rncp-table td:last-child {
                    border-right: none;
                }
                .rncp-table tbody tr:hover {
                    background-color: #f8fafc;
                }
                .rncp-cell-name {
                    font-weight: 700;
                    color: #1e293b;
                    line-height: 1.45;
                }
                .rncp-cell-check {
                    text-align: center;
                    font-weight: 800;
                }
                .badge-oui {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 26px;
                    height: 26px;
                    background: #10b981;
                    color: white;
                    border-radius: 6px;
                    font-size: 0.85rem;
                    font-weight: 900;
                }
                .badge-non {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 26px;
                    height: 26px;
                    background: #ef4444;
                    color: white;
                    border-radius: 6px;
                    font-size: 0.85rem;
                    font-weight: 900;
                }
                .rncp-cell-jury {
                    font-size: 0.85rem;
                    color: #475569;
                    line-height: 1.5;
                }
                .rncp-cell-date {
                    text-align: center;
                    color: #94a3b8;
                    font-weight: 600;
                }

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
                    .formation-hero h1 { font-size: 2.1rem; }
                    .quick-stats { grid-template-columns: 1fr; }
                }
            `}</style>

            <div className="formation-page">
                <header className="formation-hero">
                    <div className="hero-container">
                        <div className="version-tag">
                            <a 
                                href="https://www.francecompetences.fr/recherche/rncp/39354" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: 'white', textDecoration: 'underline', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                            >
                                <Award size={16} /> RNCP N°39354 <ExternalLink size={14} />
                            </a>
                            <span>| Certification professionnelle</span>
                            <span>| Date d'enregistrement : 19/07/2024</span>
                            <span>| Échéance : 19-07-2027</span>
                        </div>
                        <h1>CERTIFICATION PROFESSIONNELLE — MANAGER DU DÉVELOPPEMENT D'ENTREPRISE ET COMMERCIAL (MDEC)</h1>
                        <div className="hero-subtitle">NIVEAU 7 – BAC+5 (ÉQUIVALENT MASTÈRE)</div>
                        <p className="hero-desc">
                            Enregistrée au RNCP par décision de France Compétences sous le N° 39354 en date du 19/07/2024. Une formation d'excellence conçue pour piloter la stratégie globale, le développement commercial et le management d'équipes dans un environnement complexe, délivrée par ISME.
                        </p>
                    </div>
                </header>

                <div className="main-layout">
                    <div className="content-area">
                        {/* Summary / Profil & Certification */}
                        <div className="info-card">
                            <h2 className="section-title"><ShieldCheck /> Profil & Certification</h2>
                            <div className="quick-stats">
                                <div className="stat-item">
                                    <Users className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Certificateur</span>
                                        <span className="stat-value" style={{ marginTop: '0.25rem', display: 'block' }}>
                                            <img src={logoIsme} alt="ISME" style={{ height: '28px', objectFit: 'contain' }} />
                                        </span>
                                        <span style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 700, marginTop: '4px', display: 'block' }}>
                                            Délivrée par : <strong>ISME</strong>
                                        </span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Award className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Fiche RNCP</span>
                                        <span className="stat-value">
                                            <a 
                                                href="https://www.francecompetences.fr/recherche/rncp/39354" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                style={{ color: '#7c3aed', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                                            >
                                                N° 39354 <ExternalLink size={14} />
                                            </a>
                                        </span>
                                        <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                                            France Compétences
                                        </span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Calendar className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Dates d'enregistrement</span>
                                        <span className="stat-value" style={{ fontSize: '0.88rem' }}>
                                            Enregistrée le : <strong>19/07/2024</strong>
                                        </span>
                                        <span style={{ fontSize: '0.8rem', color: '#b45309', fontWeight: 700 }}>
                                            Échéance : 19-07-2027
                                        </span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Clock className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Admission & Prérequis</span>
                                        <span className="stat-value">Titre Niveau 6 + 18 ans min</span>
                                        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Hors-Parcoursup + Entretien</span>
                                    </div>
                                </div>
                            </div>

                            {/* RNCP legal notice */}
                            <div className="rncp-banner">
                                <div style={{ fontWeight: 800, marginBottom: '0.35rem', color: '#5b21b6', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <ShieldCheck size={18} /> Reconnaissance officielle France Compétences
                                </div>
                                <div>
                                    Certification professionnelle enregistrée au RNCP par décision de France Compétences sous le <strong>N° 39354</strong> en date du <strong>19/07/2024</strong> (Date d’échéance de l’enregistrement : <strong>19-07-2027</strong>), délivrée par <strong>ISME</strong>.
                                </div>
                            </div>

                            <div style={{ marginTop: '1.25rem', padding: '1rem', background: '#eff6ff', borderRadius: '12px', borderLeft: '4px solid #3b82f6', fontSize: '0.95rem' }}>
                                <strong>💡 Accessibilité :</strong> Pour les personnes en situation de handicap, un accompagnement spécifique peut être engagé pour faciliter leur parcours. Vous pouvez <Link to="/ressources/financements-handicap" style={{color:'#2563eb', fontWeight:700, textDecoration:'underline'}}>contacter notre référent handicap</Link>.
                            </div>
                        </div>

                        {/* ENCART VAE */}
                        <div className="info-card" style={{ border: '2px solid #7c3aed', background: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#7c3aed', color: 'white', padding: '0.35rem 0.9rem', borderRadius: '50px', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1rem' }}>
                                <GraduationCap size={15} /> Voie d'accès VAE
                            </div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1c1e4c', marginBottom: '0.75rem' }}>
                                Certification accessible par la VAE
                            </h2>
                            <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: '#334155', marginBottom: '1.25rem' }}>
                                Cette <strong>certification professionnelle est accessible par la VAE</strong> (Validation des Acquis de l'Expérience). Toute personne justifiant d’une expérience professionnelle en lien avec les compétences du référentiel (développement commercial, management, pilotage de centre de profit) peut faire valider ses acquis pour l'obtention de la certification de Niveau 7 (Bac+5).
                            </p>
                            <div style={{ background: '#ffffff', padding: '1rem 1.25rem', borderRadius: '12px', borderLeft: '4px solid #7c3aed', marginBottom: '1.5rem', fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, border: '1px solid #ede9fe' }}>
                                <strong style={{ color: '#1c1e4c' }}>Composition du jury VAE :</strong> Conformément au décret n° 2024-332 du 10 avril 2024 relatif au jury et au congé de validation des acquis de l’expérience, le jury de certification pour l’obtention par voie de la VAE réunit au moins deux personnes, dont au moins une personne qualifiée au titre de la certification visée.
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                                <a 
                                    href="https://www.emineo-education.fr/le-groupe/vae/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        background: '#7c3aed',
                                        color: 'white',
                                        padding: '0.85rem 1.5rem',
                                        borderRadius: '10px',
                                        fontWeight: 800,
                                        fontSize: '0.92rem',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s',
                                        boxShadow: '0 4px 14px rgba(124, 58, 237, 0.25)'
                                    }}
                                >
                                    <span>Lien info VAE (Émineo Éducation)</span>
                                    <ExternalLink size={16} />
                                </a>
                                <Link 
                                    to="/vae" 
                                    style={{
                                        fontSize: '0.9rem',
                                        fontWeight: 700,
                                        color: '#7c3aed',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    Découvrir l'accompagnement VAE Meta DX School &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* Prérequis & Voies d'accès (Conforme fiche RNCP) */}
                        <div className="info-card">
                            <h2 className="section-title"><Clock /> Prérequis & Voies d'accès à la certification</h2>
                            
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1c1e4c', marginBottom: '0.75rem' }}>
                                    Prérequis d'admission
                                </h3>
                                <ul className="list-check">
                                    <li><CheckCircle2 size={18}/> Être titulaire d'un titre ou diplôme de <strong>Niveau 6 (Bac+3 / Bachelor / Licence)</strong> ou équivalent.</li>
                                    <li><CheckCircle2 size={18}/> Être âgé de <strong>18 ans au moins</strong> à la date d’entrée en formation.</li>
                                    <li><CheckCircle2 size={18}/> <strong>Délai d'accès :</strong> Le délai d'accès moyen à la formation est de <strong>7 jours maximum</strong> (étapes : information individuelle ou collective, identification, test de connaissances et entretien individuel).</li>
                                </ul>
                            </div>

                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1c1e4c', margin: 0 }}>
                                        Voies d'accès à la certification (Fiche officielle RNCP 39354)
                                    </h3>
                                    <a 
                                        href="https://www.francecompetences.fr/recherche/rncp/39354" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        style={{ fontSize: '0.8rem', color: '#7c3aed', fontWeight: 700, textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '3px' }}
                                    >
                                        Voir sur France Compétences <ExternalLink size={12} />
                                    </a>
                                </div>

                                <div className="rncp-table-container">
                                    <table className="rncp-table">
                                        <thead>
                                            <tr>
                                                <th>Voie d'accès à la certification</th>
                                                <th style={{ textAlign: 'center', width: '60px' }}>Oui</th>
                                                <th style={{ textAlign: 'center', width: '60px' }}>Non</th>
                                                <th>Composition des jurys</th>
                                                <th style={{ textAlign: 'center', width: '120px' }}>Date de dernière modification</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="rncp-cell-name">
                                                    Après un parcours de formation sous statut d’élève ou d’étudiant
                                                </td>
                                                <td className="rncp-cell-check">
                                                    <span className="badge-oui">X</span>
                                                </td>
                                                <td className="rncp-cell-check">-</td>
                                                <td className="rncp-cell-jury">
                                                    Le jury est composé de 3 membres minimum dont 2 professionnels externes
                                                </td>
                                                <td className="rncp-cell-date">-</td>
                                            </tr>
                                            <tr>
                                                <td className="rncp-cell-name">
                                                    En contrat d’apprentissage
                                                </td>
                                                <td className="rncp-cell-check">
                                                    <span className="badge-oui">X</span>
                                                </td>
                                                <td className="rncp-cell-check">-</td>
                                                <td className="rncp-cell-jury">
                                                    Le jury est composé de 3 membres minimum dont 2 professionnels externes
                                                </td>
                                                <td className="rncp-cell-date">-</td>
                                            </tr>
                                            <tr>
                                                <td className="rncp-cell-name">
                                                    Après un parcours de formation continue
                                                </td>
                                                <td className="rncp-cell-check">
                                                    <span className="badge-oui">X</span>
                                                </td>
                                                <td className="rncp-cell-check">-</td>
                                                <td className="rncp-cell-jury">
                                                    Le jury est composé de 3 membres minimum dont 2 professionnels externes
                                                </td>
                                                <td className="rncp-cell-date">-</td>
                                            </tr>
                                            <tr>
                                                <td className="rncp-cell-name">
                                                    En contrat de professionnalisation
                                                </td>
                                                <td className="rncp-cell-check">
                                                    <span className="badge-oui">X</span>
                                                </td>
                                                <td className="rncp-cell-check">-</td>
                                                <td className="rncp-cell-jury">
                                                    Le jury est composé de 3 membres minimum dont 2 professionnels externes
                                                </td>
                                                <td className="rncp-cell-date">-</td>
                                            </tr>
                                            <tr>
                                                <td className="rncp-cell-name">
                                                    Par candidature individuelle
                                                </td>
                                                <td className="rncp-cell-check">-</td>
                                                <td className="rncp-cell-check">
                                                    <span className="badge-non">X</span>
                                                </td>
                                                <td className="rncp-cell-jury">-</td>
                                                <td className="rncp-cell-date">-</td>
                                            </tr>
                                            <tr>
                                                <td className="rncp-cell-name">
                                                    Par expérience (VAE)
                                                </td>
                                                <td className="rncp-cell-check">
                                                    <span className="badge-oui">X</span>
                                                </td>
                                                <td className="rncp-cell-check">-</td>
                                                <td className="rncp-cell-jury">
                                                    Conformément au décret n° 2024-332 du 10 avril 2024 relatif au jury et au congé de validation des acquis de l’expérience, le jury de certification pour l’obtention par voie de la VAE réunit au moins deux personnes, dont au moins une personne qualifiée au titre de la certification visée.
                                                </td>
                                                <td className="rncp-cell-date">-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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

                        {/* Modalités pédagogiques */}
                        <div className="info-card">
                            <h2 className="section-title"><Monitor /> Modalités pédagogiques</h2>
                            <p style={{fontSize:'0.95rem', lineHeight:1.6, marginBottom:'1.5rem'}}>
                                Les moyens pédagogiques mis en œuvre sont variés et adaptés aux besoins des apprenants, afin de garantir une expérience d'apprentissage enrichissante et efficace.
                            </p>
                            <ul className="list-check">
                                <li><CheckCircle2 size={18}/> <strong>Cours magistraux :</strong> Des sessions de cours magistraux animées par des experts du domaine, couvrant les fondamentaux théoriques et les tendances actuelles du développement des affaires.</li>
                                <li><CheckCircle2 size={18}/> <strong>Études de cas :</strong> Analyse approfondie de cas réels et fictifs pour illustrer les concepts théoriques et développer des compétences en résolution de problèmes.</li>
                                <li><CheckCircle2 size={18}/> <strong>Ressources en ligne :</strong> Accès à une plateforme d'apprentissage en ligne offrant des ressources pédagogiques complémentaires, des vidéos, des articles et des forums de discussion.</li>
                                <li><CheckCircle2 size={18}/> <strong>Tutorat et mentorat :</strong> Suivi personnalisé par des tuteurs et des mentors pour accompagner les apprenants dans leur parcours de formation et les aider à atteindre leurs objectifs professionnels.</li>
                                <li><CheckCircle2 size={18}/> <strong>Évaluations continues :</strong> Mise en place d'évaluations régulières pour mesurer les progrès des apprenants et adapter les moyens pédagogiques en conséquence.</li>
                            </ul>
                            <p style={{fontSize:'0.95rem', lineHeight:1.6, marginTop:'1.5rem'}}>
                                Ces moyens pédagogiques sont conçus pour offrir une formation complète et adaptée aux exigences du marché, permettant aux apprenants de développer les compétences nécessaires pour réussir dans le domaine du développement des affaires.
                            </p>
                        </div>

                        {/* Modalités d'évaluation */}
                        <div className="info-card">
                            <h2 className="section-title"><FileText /> Modalité d'évaluation</h2>
                            <ul className="list-check">
                                <li><CheckCircle2 size={18}/> La certification est conditionnée par l'obtention des 5 blocs de compétences.</li>
                                <li><CheckCircle2 size={18}/> Chaque bloc peut être validé indépendamment ; un bloc validé donne lieu à une attestation de validation.</li>
                                <li><CheckCircle2 size={18}/> Voies d'accès : statut étudiant, apprentissage, professionnalisation, formation continue et VAE.</li>
                            </ul>
                            
                            <h3 style={{fontSize:'1.1rem', fontWeight:800, color:'#7c3aed', marginTop:'1.5rem', marginBottom:'1rem'}}>Composition des jurys de certification</h3>
                            <p style={{fontSize:'0.95rem', lineHeight:1.6}}>
                                Pour les parcours de formation (statut élève/étudiant, apprentissage, professionnalisation, formation continue), le jury est composé de <strong>3 membres minimum dont 2 professionnels externes</strong>.
                            </p>
                            <p style={{fontSize:'0.95rem', lineHeight:1.6, marginTop:'0.75rem'}}>
                                Pour la voie de la <strong>VAE</strong> : conformément au décret n° 2024-332 du 10 avril 2024 relatif au jury et au congé de validation des acquis de l’expérience, le jury de certification réunit <strong>au moins deux personnes, dont au moins une personne qualifiée au titre de la certification visée</strong>. Le jury est souverain dans l'appréciation des productions et des prestations.
                            </p>
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

                    {/* Sidebar */}
                    <div className="sidebar">
                        <div className="cta-card" style={{background:'#1c1e4c', border:'1px solid rgba(124, 58, 237, 0.3)'}}>
                            <h3 style={{fontSize:'1.4rem', fontWeight:900, marginBottom:'1rem', color:'#ef9a37'}}>ALTERNANCE BAC+5</h3>
                            <div style={{fontSize:'2.2rem', fontWeight:900, margin:'1rem 0'}}>0€ <span style={{fontSize:'1rem', opacity:0.8}}>RESTANT</span></div>
                            <p style={{fontSize:'0.85rem', opacity:0.8, lineHeight:1.5, marginBottom:'2rem'}}>
                                Coût de la formation : 8302€ TTC (Prise en charge OPCO en alternance).
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

                            <a href="/contact" className="btn-primary">COMMENT NOUS CONTACTER</a>
                        </div>

                        {/* Lien officiel France Compétences */}
                        <a 
                            href="https://www.francecompetences.fr/recherche/rncp/39354" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="info-card" 
                            style={{display:'flex', alignItems:'center', gap:'1rem', textDecoration:'none', transition:'all 0.2s', border:'2px solid #7c3aed', padding:'1.5rem'}}
                        >
                            <ExternalLink color="#7c3aed" size={26} />
                            <div>
                                <h4 style={{fontWeight:800, fontSize:'0.92rem', color:'#1c1e4c', margin:0}}>FICHE COMPLÈTE RNCP 39354</h4>
                                <span style={{fontSize:'0.75rem', color:'#64748b', fontWeight:700}}>Consulter sur France Compétences</span>
                            </div>
                        </a>

                        {/* Encart VAE Sidebar */}
                        <div className="info-card" style={{padding:'1.5rem', background:'#faf5ff', border:'1px solid #ddd6fe'}}>
                            <h4 style={{fontWeight:800, marginBottom:'0.5rem', fontSize:'0.9rem', color:'#7c3aed', display:'flex', alignItems:'center', gap:'6px'}}>
                                <GraduationCap size={18} /> PARCOURS VAE
                            </h4>
                            <p style={{fontSize:'0.82rem', lineHeight:1.5, color:'#475569', marginBottom:'0.75rem'}}>
                                Certification accessible par la VAE pour faire reconnaître votre expérience professionnelle.
                            </p>
                            <a 
                                href="https://www.emineo-education.fr/le-groupe/vae/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{fontSize:'0.82rem', fontWeight:800, color:'#7c3aed', textDecoration:'underline', display:'inline-flex', alignItems:'center', gap:'4px'}}
                            >
                                Informations VAE (Émineo Éducation) <ExternalLink size={12} />
                            </a>
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
                    </div>
                </div>
            </div>
        </>
    );
}

