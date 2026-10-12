import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
    Clock, 
    Users, 
    CheckCircle2, 
    Accessibility, 
    GraduationCap,
    TrendingUp,
    ShieldCheck,
    Monitor,
    Target
} from 'lucide-react';

export default function TP_MEM() {
    return (
        <>
            <Helmet>
                <title>TP MEM - Manager d'Établissement Marchand | Meta DX School</title>
                <meta name="description" content="Formation Titre Professionnel Manager d'Établissement Marchand Niveau 5 (Bac+2). Développez vos compétences en merchandising, gestion et management d'équipe." />
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
                    margin-bottom: 1rem;
                    max-width: 900px;
                }
                .hero-subtitle {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #1c1e4c;
                    background: rgba(255,255,255,0.9);
                    display: inline-block;
                    padding: 0.5rem 1.5rem;
                    border-radius: 8px;
                    margin-bottom: 0;
                }
                .hero-badges {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 2rem;
                }
                .rncp-badge {
                    display: inline-block;
                    background: #fbbf24;
                    color: #1c1e4c;
                    font-size: 1.15rem;
                    font-weight: 800;
                    padding: 0.55rem 1.15rem;
                    border-radius: 8px;
                    text-decoration: none;
                    letter-spacing: 0.02em;
                }
                .rncp-badge:hover { background: #f59e0b; }

                .hero-desc {
                    font-size: 1.2rem;
                    line-height: 1.6;
                    opacity: 0.95;
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
                    margin-bottom: 2.5rem;
                }

                .btn-primary {
                    display: block;
                    background: #3b82f6;
                    color: white;
                    padding: 1.25rem;
                    border-radius: 12px;
                    text-decoration: none;
                    font-weight: 800;
                    text-align: center;
                    margin-top: 1.5rem;
                    transition: all 0.2s;
                }
                .btn-primary:hover { background: #2563eb; transform: translateY(-3px); }

                .modalite-box {
                    background: #f8fafc;
                    padding: 1.5rem;
                    border-radius: 16px;
                    margin-bottom: 1.5rem;
                    border: 1px solid #e2e8f0;
                }

                .debouche-tag {
                    background: #eff6ff;
                    color: #1d4ed8;
                    padding: 0.75rem 1rem;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    display: inline-block;
                    margin: 0.25rem;
                    border: 1px solid #dbeafe;
                }

                .metier-block p {
                    font-size: 0.98rem;
                    color: #334155;
                    line-height: 1.7;
                    margin-bottom: 1rem;
                }
                .metier-block p:last-child { margin-bottom: 0; }
                .ref-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }
                .ref-item {
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    padding: 1rem 1.1rem;
                }
                .ref-item span {
                    display: block;
                    font-size: 0.72rem;
                    font-weight: 800;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    color: #64748b;
                    margin-bottom: 0.3rem;
                }
                .ref-item strong { color: #1c1e4c; font-size: 0.95rem; }
                .obtention h4 {
                    font-weight: 800;
                    color: #1c1e4c;
                    margin-bottom: 0.6rem;
                }
                .obtention p, .obtention li {
                    font-size: 0.92rem;
                    color: #475569;
                    line-height: 1.6;
                }
                .obtention ul { margin: 0.4rem 0 0 1.1rem; }
                @media(max-width: 700px) {
                    .ref-grid { grid-template-columns: 1fr; }
                }

                @media(max-width: 900px) {
                    .main-layout { grid-template-columns: 1fr; }
                    .formation-hero h1 { font-size: 2.2rem; }
                }
            `}</style>

            <div className="formation-page">
                <header className="formation-hero">
                    <div className="hero-container">
                        <span className="version-tag">Code TP 00136 | Ministère du Travail</span>
                        <h1>TITRE PROFESSIONNEL MANAGER D'ÉTABLISSEMENT MARCHAND</h1>
                        <div className="hero-badges">
                            <div className="hero-subtitle">NIVEAU 5 – BAC+2 · MEM</div>
                            <a className="rncp-badge" href="https://www.francecompetences.fr/recherche/rncp/41853/" target="_blank" rel="noopener noreferrer">RNCP 41853</a>
                        </div>
                        <p className="hero-desc">
                            Pilotez la performance de votre rayon ou magasin. Développez vos compétences en merchandising, gestion et management d'équipe pour devenir un vrai leader commercial.
                        </p>
                    </div>
                </header>

                <div className="main-layout">
                    <div className="content-area">
                        {/* Infos Générales */}
                        <div className="info-card">
                            <h2 className="section-title"><ShieldCheck /> Profil & Prérequis</h2>
                            <div className="quick-stats">
                                <div className="stat-item">
                                    <GraduationCap className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Certificateur</span>
                                        <span className="stat-value">Ministère du Travail</span>
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
                                    <Users className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Prérequis</span>
                                        <span className="stat-value">Titre Niveau 4 + 18 ans min</span>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Accessibility className="stat-icon" />
                                    <div className="stat-text">
                                        <span className="stat-label">Accessibilité</span>
                                        <span className="stat-value">Référent Dédié</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#eff6ff', borderRadius: '12px', borderLeft: '4px solid #3b82f6', fontSize: '0.95rem' }}>
                                <strong>💡 Accessibilité :</strong> Pour les personnes en situation de handicap, un accompagnement spécifique peut être engagé pour faciliter leur parcours. Vous pouvez <Link to="/ressources/financements-handicap" style={{color:'#2563eb', fontWeight:700, textDecoration:'underline'}}>contacter notre référent handicap</Link>.
                            </div>

                            <p style={{fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6, marginTop: '1.5rem'}}>
                                Cette formation s’adresse aux futurs responsables de magasins, chefs de rayons et managers souhaitant maîtriser le développement commercial, la gestion financière et l'animation d'équipe.
                            </p>
                        </div>

                        <div className="info-card metier-block">
                            <h2 className="section-title"><Target /> Le métier</h2>
                            <p>
                                Le titre professionnel Manager d’établissement marchand, niveau 5 (code NSF 312m), se compose de trois activités types. À chaque activité correspond un certificat de compétences professionnelles (CCP).
                            </p>
                            <p>
                                Dans le respect des consignes de sa hiérarchie et de la démarche RSE de l’entreprise, le manager d’établissement marchand assure le management opérationnel de l’équipe de son périmètre. Il développe la dynamique commerciale et contribue à la performance et à la rentabilité.
                            </p>
                            <p>
                                Il met en œuvre une démarche de maîtrise des risques professionnels, en cohérence avec la politique RH, applique les mesures de prévention et contrôle leur application par les équipes.
                            </p>
                            <p>
                                Il analyse les résultats et les partage lors des briefings, débriefings et réunions. Il élabore les plannings en tenant compte des besoins spécifiques des collaborateurs en situation de handicap, suit la réalisation des tâches et veille au développement des compétences. Il identifie les besoins en ressources humaines, contribue à la sélection des candidatures, s’assure du bon déroulement de la période d’essai et, le cas échéant, à l’étude des adaptations de poste.
                            </p>
                            <p>
                                Il anticipe les besoins d’approvisionnement à partir des stocks, des prévisions de ventes, des tendances du marché et des capacités de stockage. Il réceptionne les produits avec l’équipe, participe au stockage, et fait appliquer les consignes RSE sur la gestion des stocks, la valorisation des déchets et la réduction du gaspillage.
                            </p>
                            <p>
                                Il améliore l’expérience client, sensibilise l’équipe à l’accueil des personnes en situation de handicap, organise l’implantation de l’offre et les opérations commerciales, met en avant les produits et services, et propose des solutions pour améliorer la satisfaction client.
                            </p>
                            <p>
                                Son niveau d’autonomie varie selon la taille de l’établissement. Il exerce sous la responsabilité de sa hiérarchie, à laquelle il rend compte, et peut être force de proposition. En cas d’imprévu, il réagit, adapte ses priorités, alerte et met en œuvre un plan d’actions avec les acteurs concernés.
                            </p>
                            <p>
                                Il communique à l’écrit et à l’oral avec sa hiérarchie, l’équipe et les services internes et externes. Il est en contact direct avec le client, les agents de sécurité et le personnel de maintenance. Selon la zone de chalandise, il peut utiliser l’anglais ou une autre langue étrangère.
                            </p>
                            <p>
                                Ses horaires peuvent être décalés, avec des astreintes possibles, y compris le dimanche et certains jours fériés. L’emploi s’exerce souvent dans un environnement bruyant, avec de nombreux déplacements dans l’espace de vente et des variations de température. Il peut participer aux tâches de manutention, avec port d’équipements de protection.
                            </p>
                            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
                                Code TP 00136. Titre créé par arrêté du 19 février 2004 (JO modificatif du 7 décembre 2025). Source : référentiel du titre MEM.
                            </p>
                        </div>

                        <div className="info-card">
                            <h2 className="section-title"><ShieldCheck /> Références</h2>
                            <div className="ref-grid">
                                <div className="ref-item">
                                    <span>Certification</span>
                                    <strong>Titre professionnel du ministère du Travail</strong>
                                </div>
                                <div className="ref-item">
                                    <span>RNCP</span>
                                    <strong>41853</strong>
                                </div>
                                <div className="ref-item">
                                    <span>Code TP</span>
                                    <strong>00136</strong>
                                </div>
                                <div className="ref-item">
                                    <span>Niveau</span>
                                    <strong>5 (Bac+2) · NSF 312m</strong>
                                </div>
                            </div>
                            <div style={{ marginTop: '1.25rem' }}>
                                <h4 style={{ fontWeight: 800, color: '#1c1e4c', marginBottom: '0.75rem' }}>Emplois ROME</h4>
                                <ul className="list-check">
                                    <li><CheckCircle2 size={18} /> D1502 — Chef / Cheffe de rayon alimentaire</li>
                                    <li><CheckCircle2 size={18} /> D1503 — Chef / Cheffe de rayon de produits non alimentaires</li>
                                    <li><CheckCircle2 size={18} /> D1508 — Responsable de caisses</li>
                                    <li><CheckCircle2 size={18} /> D1509 — Responsable de département en grande distribution</li>
                                    <li><CheckCircle2 size={18} /> D1510 — Chef / Cheffe de secteur magasin</li>
                                </ul>
                            </div>
                        </div>

                        {/* Objectifs & Programme */}
                        <div className="info-card">
                            <h2 className="section-title"><Target /> Objectifs & Programme</h2>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                                <div>
                                    <h4 style={{fontWeight: 900, color: '#3b82f6', marginBottom: '1.25rem'}}>CCP 1 : MANAGER L’ÉQUIPE DE SON PÉRIMÈTRE AU SEIN DE L’ÉTABLISSEMENT MARCHAND</h4>
                                    <ul className="list-check">
                                        <li><CheckCircle2 size={18} /> Animer l’équipe de son périmètre</li>
                                        <li><CheckCircle2 size={18} /> Planifier et coordonner l'activité de l’équipe de son périmètre</li>
                                        <li><CheckCircle2 size={18} /> Accompagner la performance individuelle des collaborateurs de son périmètre</li>
                                        <li><CheckCircle2 size={18} /> Contribuer aux processus de recrutement et d’intégration des collaborateurs de son périmètre</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 style={{fontWeight: 900, color: '#1c1e4c', marginBottom: '1.25rem'}}>CCP 2 : CONTRIBUER À LA PERFORMANCE COMMERCIALE ET À LA RENTABILITÉ DE SON PÉRIMÈTRE</h4>
                                    <ul className="list-check">
                                        <li><CheckCircle2 size={18} /> Analyser la performance commerciale de son périmètre</li>
                                        <li><CheckCircle2 size={18} /> Analyser la rentabilité de son périmètre</li>
                                        <li><CheckCircle2 size={18} /> Proposer des actions correctives à sa hiérarchie et assurer le suivi du plan d’actions de son périmètre</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 style={{fontWeight: 900, color: '#10b981', marginBottom: '1.25rem'}}>CCP 3 : DÉVELOPPER LA DYNAMIQUE COMMERCIALE DE SON PÉRIMÈTRE AU SEIN DE L’ÉTABLISSEMENT MARCHAND</h4>
                                    <ul className="list-check">
                                        <li><CheckCircle2 size={18} /> Gérer l'approvisionnement de son périmètre</li>
                                        <li><CheckCircle2 size={18} /> Organiser et mettre en œuvre le merchandising de l’offre de produits et de services de son périmètre</li>
                                        <li><CheckCircle2 size={18} /> Participer à l’amélioration de l’expérience client de son périmètre</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Modalités */}
                        <div className="info-card">
                            <h2 className="section-title"><Monitor /> Modalités de Formation</h2>
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
                                <div className="modalite-box">
                                    <h4 style={{fontWeight: 900, marginBottom: '1rem', color: '#1c1e4c'}}>PRÉSENTIEL</h4>
                                    <ul style={{fontSize: '0.9rem', padding: 0, listStyle: 'none', color: '#475569'}}>
                                        <li style={{marginBottom: '0.5rem'}}>• 15 mois (470h en centre)</li>
                                        <li style={{marginBottom: '0.5rem'}}>• Rythme 1j centre / 4j entreprise</li>
                                        <li style={{marginBottom: '0.5rem'}}>• Plateau technique dédié</li>
                                        <li>• Max 15 participants</li>
                                    </ul>
                                </div>
                                <div className="modalite-box" style={{borderColor: '#3b82f6'}}>
                                    <h4 style={{fontWeight: 900, marginBottom: '1rem', color: '#3b82f6'}}>E-LEARNING</h4>
                                    <ul style={{fontSize: '0.9rem', padding: 0, listStyle: 'none', color: '#475569'}}>
                                        <li style={{marginBottom: '0.5rem'}}>• 15 mois (470h module)</li>
                                        <li style={{marginBottom: '0.5rem'}}>• Entrée / Sortie permanente</li>
                                        <li style={{marginBottom: '0.5rem'}}>• Classes virtuelles en capsules</li>
                                        <li>• 2 sessions d'examens / an</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="info-card obtention">
                            <h2 className="section-title"><GraduationCap /> Obtention du titre</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div className="modalite-box">
                                    <h4>Parcours continu de formation</h4>
                                    <p>À l’issue du parcours, un jury de professionnels évalue :</p>
                                    <ul>
                                        <li>une mise en situation professionnelle ou un projet, complétés par un entretien technique et, si prévu, un questionnaire professionnel ;</li>
                                        <li>les évaluations passées en cours de formation ;</li>
                                        <li>un dossier professionnel ;</li>
                                        <li>un entretien final avec le jury.</li>
                                    </ul>
                                </div>
                                <div className="modalite-box">
                                    <h4>VAE</h4>
                                    <p>Le candidat justifie d’un an d’expérience en rapport avec le titre et dépose un dossier auprès de la DREETS. Après notification de recevabilité, le jury s’appuie sur la mise en situation ou le projet, le dossier professionnel et l’entretien final.</p>
                                </div>
                                <div className="modalite-box">
                                    <h4>Parcours discontinu ou réussite partielle</h4>
                                    <p>Le titre peut être obtenu par capitalisation des CCP. En cas de non-obtention du titre complet, le jury peut délivrer un ou plusieurs CCP. Un entretien final a lieu à la fin du dernier CCP, au vu du livret de certification.</p>
                                </div>
                            </div>
                            <p style={{ marginTop: '1rem', fontSize: '0.88rem', color: '#64748b' }}>
                                Un parchemin est délivré pour le titre complet. Un livret de certification est remis en cas de réussite partielle. Ces documents sont délivrés par le représentant territorial du ministère du Travail.
                            </p>
                        </div>

                        {/* Débouchés */}
                        <div className="info-card">
                            <h2 className="section-title"><TrendingUp /> Types d'emplois accessibles</h2>
                            <div style={{marginBottom: '2rem'}}>
                                <span className="debouche-tag">Manager de rayon</span>
                                <span className="debouche-tag">Manager d’espace commercial</span>
                                <span className="debouche-tag">Manager de surface de vente</span>
                                <span className="debouche-tag">Manager d’univers commercial</span>
                                <span className="debouche-tag">Manager de rayon fabrication alimentaire / frais</span>
                                <span className="debouche-tag">Manager de rayon non alimentaire ou alimentaire / sec</span>
                                <span className="debouche-tag">Responsable / animateur</span>
                                <span className="debouche-tag">Responsable de magasin</span>
                                <span className="debouche-tag">Gestionnaire de centre de profit</span>
                                <span className="debouche-tag">Chef de rayon</span>
                                <span className="debouche-tag">Responsable de boutique</span>
                                <span className="debouche-tag">Gérant de magasin</span>
                                <span className="debouche-tag">Responsable de succursale</span>
                                <span className="debouche-tag">Responsable de point de vente</span>
                                <span className="debouche-tag">Responsable de département</span>
                            </div>
                            <div style={{background: '#f1f5f9', padding: '1.5rem', borderRadius: '16px'}}>
                                <h4 style={{fontWeight: 800, color: '#1c1e4c', marginBottom: '0.5rem'}}>POURSUITE D'ÉTUDES</h4>
                                <p style={{fontSize: '0.9rem', color: '#475569'}}>
                                    Accédez à un Titre de Niveau 6 (Bac+3) ou à une Licence Professionnelle dans le domaine de la distribution, du marketing ou de la gestion d'entreprise.
                                </p>
                            </div>
                        </div>
                    </div>

                    <aside className="sidebar">
                        <div className="cta-card">
                            <h3 style={{fontSize: '1.4rem', fontWeight: 900, marginBottom: '1rem', color: '#3b82f6'}}>ALTERNANCE</h3>
                            <div style={{fontSize: '2.5rem', fontWeight: 900, margin: '1rem 0'}}>0€ <span style={{fontSize: '1rem', opacity: 0.8}}>RESTE À CHARGE</span></div>
                            <p style={{fontSize: '0.85rem', opacity: 0.8, lineHeight: 1.5, marginBottom: '1.5rem'}}>
                                Coût de la formation : 8302€ TTC.
                            </p>
                            <a href="/contact" className="btn-primary">COMMENT NOUS CONTACTER</a>
                        </div>

                        <div className="info-card" style={{padding: '1.5rem'}}>
                            <h4 style={{fontWeight: 800, marginBottom: '1rem', fontSize: '1rem'}}>LES + META DXS</h4>
                            <ul className="list-check" style={{fontSize: '0.85rem'}}>
                                <li><CheckCircle2 size={16} /> Accompagnement Dossier Pro</li>
                                <li><CheckCircle2 size={16} /> Session d'examen blanc</li>
                                <li><CheckCircle2 size={16} /> Aide active recherche emploi</li>
                            </ul>
                        </div>

                        <div className="info-card" style={{padding: '1.5rem'}}>
                            <h4 style={{fontWeight: 800, marginBottom: '1rem', fontSize: '1rem'}}>ÉVALUATIONS</h4>
                            <p style={{fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5}}>
                                • Jury de 2 professionnels habilités DREETS<br/>
                                • Dossier professionnel<br/>
                                • Mise en situation professionnelle<br/>
                                • Entretien final
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
