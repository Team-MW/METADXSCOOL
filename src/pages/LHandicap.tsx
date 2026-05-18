import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
    Accessibility,
    Target,
    Users,
    FileText,
    BarChart3,
    Video,
    Award,
    Mail,
    Monitor,
    Ear,
    Brain,
    ShieldCheck
} from 'lucide-react';

export default function LHandicap() {
    return (
        <>
            <Helmet>
                <title>L'Engagement Handicap | Meta DX School</title>
                <meta name="description" content="Meta DX School s'engage pour une formation accessible à tous. Découvrez nos ressources, nos partenaires et le rôle de notre référente handicap." />
            </Helmet>

            <style>{`
                .handicap-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    color: #1e293b;
                    padding-bottom: 6rem;
                }

                .handicap-hero {
                    background: linear-gradient(135deg, #1c1e4c 0%, #7c3aed 100%);
                    color: white;
                    padding: 8rem 2rem 6rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .hero-container {
                    max-width: 1000px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .rh-badge {
                    background: rgba(255, 255, 255, 0.15);
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    display: inline-block;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }

                .handicap-hero h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                }

                .handicap-hero p {
                    font-size: 1.3rem;
                    opacity: 0.9;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .main-content {
                    max-width: 1200px;
                    margin: -4rem auto 0;
                    padding: 0 2rem;
                    position: relative;
                    z-index: 10;
                }

                .card {
                    background: white;
                    border-radius: 24px;
                    padding: 3rem;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.06);
                    margin-bottom: 2.5rem;
                }

                .section-title {
                    font-size: 1.8rem;
                    font-weight: 800;
                    color: #1c1e4c;
                    margin-bottom: 2rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                /* Stats Grid */
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin: 2.5rem 0;
                }
                .stat-box {
                    background: #f1f5f9;
                    padding: 2rem;
                    border-radius: 20px;
                    text-align: center;
                    transition: transform 0.2s;
                    border: 1px solid #e2e8f0;
                }
                .stat-box:hover { transform: translateY(-5px); border-color: #7c3aed; }
                .stat-box .nb {
                    display: block;
                    font-size: 2.5rem;
                    font-weight: 900;
                    color: #7c3aed;
                    margin-bottom: 0.5rem;
                }
                .stat-box .label {
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: #475569;
                    line-height: 1.4;
                    text-transform: uppercase;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* Team Card */
                .team-card {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 3rem;
                    align-items: center;
                }
                .avatar-box {
                    width: 200px;
                    height: 200px;
                    background: #f1f5f9;
                    border-radius: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #7c3aed;
                    border: 2px solid #e2e8f0;
                }

                /* Aids Grid */
                .aids-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 2rem;
                }
                .aid-item {
                    background: #f8fafc;
                    padding: 2rem;
                    border-radius: 20px;
                    border: 1px solid #e2e8f0;
                }
                .aid-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    color: #1c1e4c;
                    font-weight: 800;
                }
                .aid-header svg { color: #7c3aed; }

                .link-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #7c3aed;
                    font-weight: 700;
                    text-decoration: none;
                    font-size: 0.9rem;
                    margin-top: 1rem;
                }
                .link-btn:hover { text-decoration: underline; }

                .cta-box {
                    background: linear-gradient(135deg, #1c1e4c 0%, #171942 100%);
                    color: white;
                    padding: 3rem;
                    border-radius: 24px;
                    text-align: center;
                }
                .btn-primary {
                    display: inline-block;
                    background: #ef9a37;
                    color: white;
                    padding: 1rem 2.5rem;
                    border-radius: 12px;
                    font-weight: 800;
                    text-decoration: none;
                    margin-top: 1.5rem;
                    transition: transform 0.2s;
                }
                .btn-primary:hover { transform: translateY(-3px); background: #f5a646; }

                @media(max-width: 900px) {
                    .team-card { grid-template-columns: 1fr; text-align: center; }
                    .avatar-box { margin: 0 auto; }
                    .handicap-hero h1 { font-size: 2.22rem; }
                }
            `}</style>

            <div className="handicap-page">
                <header className="handicap-hero">
                    <div className="hero-container">
                        <span className="rh-badge">ACTIVATEUR DE PROGRÈS</span>
                        <h1>L'HANDICAP : UN ENGAGEMENT AU QUOTIDIEN</h1>
                        <p>
                            Chez Meta DX School, nous croyons que l’accès à la formation doit être universel.
                        </p>
                    </div>
                </header>

                <main className="main-content">
                    {/* Engagement */}
                    <div className="card">
                        <h2 className="section-title"><Target color="#ef9a37" /> Notre Mission</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#475569' }}>
                            Nous nous engageons dans une démarche continue d’accessibilité, soutenue par des partenaires comme l’<strong>Agefiph</strong>, la <strong>RHF</strong> et le réseau <strong>Activateur de Progrès</strong>.
                            <br /><br />
                            🎯 <strong>Objectif :</strong> Que chaque personne, quelles que soient ses difficultés ou son handicap, puisse suivre une formation dans de bonnes conditions.
                        </p>
                        <a href="https://www.agefiph.fr/professionnels-de-la-formation/signer-la-charte-dengagement" target="_blank" rel="noopener noreferrer" className="link-btn" style={{ marginTop: '2rem' }}>
                            <FileText size={18} /> Consulter notre Charte d’engagement
                        </a>
                    </div>

                    {/* Stats Icons */}
                    <div className="card">
                        <h2 className="section-title"><BarChart3 color="#7c3aed" /> Chiffres Clés en France</h2>
                        <div className="stats-grid">
                            <div className="stat-box">
                                <span className="nb">50%</span>
                                <span className="label">Craignent d'en parler en entreprise</span>
                            </div>
                            <div className="stat-box">
                                <span className="nb" style={{ fontSize: '1.8rem' }}>1.2 M</span>
                                <span className="label">Travailleurs handicapés en emploi</span>
                            </div>
                            <div className="stat-box">
                                <span className="nb">75%</span>
                                <span className="label">Parcours freiné par le handicap</span>
                            </div>
                            <div className="stat-box">
                                <span className="nb" style={{ fontSize: '1.8rem' }}>3.1 M</span>
                                <span className="label">Bénéficiaires RQTH en France</span>
                            </div>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: '#94a3b8', textAlign: 'center' }}>Source : Agefiph 2024</p>
                    </div>

                    {/* Referent */}
                    <div className="card" style={{ borderLeft: '8px solid #7c3aed' }}>
                        <h2 className="section-title"><Users color="#7c3aed" /> Qui contacter ?</h2>
                        <div className="team-card">
                            <div className="avatar-box">
                                <Accessibility size={100} strokeWidth={1} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem' }}>Sarah LACHEROY</h3>
                                <p style={{ color: '#7c3aed', fontWeight: 700, marginBottom: '1.5rem' }}>Référente Handicap Meta DX School</p>
                                <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1.5rem' }}>
                                    Sarah vous accompagne à chaque étape de votre parcours : identification des besoins (matériel, accompagnement), mise en œuvre des aménagements pédagogiques et suivi des démarches administratives.
                                </p>
                                <a href="mailto:sarah.lacheroy@metadxs.com" className="link-btn" style={{ fontSize: '1.1rem', color: '#1c1e4c' }}>
                                    <Mail size={20} /> sarah.lacheroy@metadxs.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Material & Aids */}
                    <div className="card">
                        <h2 className="section-title"><ShieldCheck color="#ef9a37" /> Solutions & Accessibilité</h2>
                        <div className="aids-grid">
                            <div className="aid-item">
                                <div className="aid-header"><Monitor size={24} /> VISUEL</div>
                                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>
                                    <strong>ZoomText :</strong> Logiciel de grossissement d’écran et lecture vocale pour malvoyants.
                                </p>
                                <a href="https://vimeo.com/showcase/7713437" target="_blank" rel="noopener noreferrer" className="link-btn">Découvrir l'outil →</a>
                            </div>
                            <div className="aid-item">
                                <div className="aid-header"><Accessibility size={24} /> BRAILLE</div>
                                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>
                                    <strong>Afficheur Braille :</strong> Cellules braille actualisées en temps réel pour lire l'écran.
                                </p>
                                <a href="https://vimeo.com/showcase/7713437" target="_blank" rel="noopener noreferrer" className="link-btn">Découvrir l'outil →</a>
                            </div>
                            <div className="aid-item">
                                <div className="aid-header"><Ear size={24} /> AUDITIF</div>
                                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>Aménagements spécifiques (boucles magnétiques, transcriptions) selon les besoins.</p>
                            </div>
                            <div className="aid-item">
                                <div className="aid-header"><Brain size={24} /> APPRENTISSAGE</div>
                                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>Adaptation des supports pédagogiques pour les troubles DYS.</p>
                            </div>
                        </div>
                    </div>

                    {/* Ressources */}
                    <div className="card">
                        <h2 className="section-title"><Video color="#3b82f6" /> Sensibilisation</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>Videos & Affiches</h4>
                                <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '1rem' }}>Retrouvez une sélection de supports pédagogiques pour sensibiliser vos équipes.</p>
                                <a href="https://www.activateurdeprogres.fr/ressources" target="_blank" rel="noopener noreferrer" className="link-btn">Ressources Activateur de Progrès</a>
                            </div>
                            <div>
                                <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>Le Calendrier Thématique</h4>
                                <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '1rem' }}>Suivez les mois de sensibilisation (santé mentale, autisme, etc.).</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <a href="https://www.activateurdeprogres.fr" target="_blank" rel="noopener noreferrer" className="link-btn">Calendrier 2025 #1</a>
                                    <a href="https://www.agefiph.fr" target="_blank" rel="noopener noreferrer" className="link-btn">Calendrier 2025 #2</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="cta-box">
                        <Award size={48} color="#ef9a37" style={{ marginBottom: '1rem' }} />
                        <h2>Besoin de financer votre formation ?</h2>
                        <p style={{ opacity: 0.8, marginTop: '1rem' }}>Découvrez les solutions de financement spécifiques au handicap (AGEFIPH, FIPHFP...).</p>
                        <Link to="/financements/handicap" className="btn-primary">
                            VOIR LES SOLUTIONS DE FINANCEMENT
                        </Link>
                    </div>
                </main>
            </div>
        </>
    );
}
