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
    ShieldCheck,
    Briefcase
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
                    height: 60px;
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
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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
                    font-size: 1.2rem;
                }
                .aid-header svg { color: #7c3aed; }

                .aid-tool {
                    background: white;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    padding: 1.2rem;
                    margin-bottom: 1rem;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
                }
                .aid-tool h4 {
                    font-weight: 800;
                    margin-bottom: 0.5rem;
                    color: #1c1e4c;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .aid-tool p {
                    font-size: 0.9rem;
                    color: #475569;
                    line-height: 1.6;
                    margin-bottom: 0.8rem;
                }

                .link-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #7c3aed;
                    font-weight: 700;
                    text-decoration: none;
                    font-size: 0.9rem;
                    margin-top: 0.5rem;
                }
                .link-btn:hover { text-decoration: underline; }

                .sensibilisation-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                }
                
                .affiche-gallery {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1.5rem;
                    overflow-x: auto;
                    padding-bottom: 1rem;
                }
                .affiche-placeholder {
                    width: 150px;
                    height: 200px;
                    background: #e2e8f0;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #64748b;
                    font-weight: 700;
                    font-size: 0.9rem;
                    flex-shrink: 0;
                }

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
                    .aids-grid { grid-template-columns: 1fr; }
                    .sensibilisation-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <div className="handicap-page">
                <header className="handicap-hero">
                    <div className="hero-container">
                        <span className="rh-badge">ACTIVATEUR DE PROGRÈS</span>
                        <h1>À PROPOS DE L'HANDICAP</h1>
                        <p>
                            L'engagement de Meta DX School
                        </p>
                    </div>
                </header>

                <main className="main-content">
                    {/* Engagement */}
                    <div className="card">
                        <h2 className="section-title"><Target color="#ef9a37" /> L'engagement de Meta DX School</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#475569' }}>
                            Chez Meta DX School, nous croyons que l’accès à la formation doit être universel.
                            C’est pourquoi nous nous engageons dans une démarche continue d’accessibilité, soutenue par des partenaires comme l’<strong>Agefiph</strong>, la <strong>RHF</strong> et le réseau <strong>Activateur de Progrès</strong>.
                            <br /><br />
                            🎯 <strong>Objectif :</strong> que chaque personne, quelles que soient ses difficultés ou son handicap, puisse suivre une formation dans de bonnes conditions.
                        </p>
                        <a href="https://www.agefiph.fr/professionnels-de-la-formation/signer-la-charte-dengagement" target="_blank" rel="noopener noreferrer" className="link-btn" style={{ marginTop: '2rem' }}>
                            <FileText size={18} /> Charte d’engagement consultable ici
                        </a>
                    </div>

                    {/* Stats Icons */}
                    <div className="card">
                        <h2 className="section-title"><BarChart3 color="#7c3aed" /> Chiffres Clés sur le Handicap</h2>
                        <div className="stats-grid">
                            <div className="stat-box">
                                <span className="nb">50%</span>
                                <span className="label">Des personnes concernées craignent d'en parler en entreprise par crainte des discriminations</span>
                            </div>
                            <div className="stat-box">
                                <span className="nb" style={{ fontSize: '1.8rem' }}>1.2 M</span>
                                <span className="label">Travailleurs handicapés en emploi (1 205 000)</span>
                            </div>
                            <div className="stat-box">
                                <span className="nb">75%</span>
                                <span className="label">Estiment que leur parcours a été freiné par leur handicap</span>
                            </div>
                            <div className="stat-box">
                                <span className="nb" style={{ fontSize: '1.8rem' }}>3.1 M</span>
                                <span className="label">Français disposent d'une reconnaissance administrative d'un handicap</span>
                            </div>
                            <div className="stat-box">
                                <span className="nb" style={{ fontSize: '1.8rem' }}>2 900</span>
                                <span className="label">Référents handicap au sein des entreprises françaises</span>
                            </div>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: '#94a3b8', textAlign: 'center' }}>
                            Ces chiffres clés sont issus de ce document, à retrouver sur le site de l’Agefiph.
                        </p>
                    </div>

                    {/* Referent */}
                    <div className="card" style={{ borderLeft: '8px solid #7c3aed' }}>
                        <h2 className="section-title"><Users color="#7c3aed" /> Qui contacter ?</h2>
                        <div className="team-card">
                            <div className="avatar-box">
                                <Accessibility size={100} strokeWidth={1} />
                            </div>
                            <div>
                                <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                                    Notre référente handicap <strong>Sarah LACHEROY</strong> vous accompagne à chaque étape de votre parcours. Elle est là pour vous aider à :
                                </p>
                                <ul style={{ lineHeight: 1.8, color: '#475569', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                                    <li>Identifier les besoins spécifiques (matériel, accompagnement…)</li>
                                    <li>Mettre en œuvre des aménagements avec l’équipe pédagogique</li>
                                    <li>Suivre les démarches administratives en lien avec les dispositifs de compensation</li>
                                </ul>
                                
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <a href="mailto:sarah.lacheroy@metadxs.com" className="link-btn" style={{ fontSize: '1.1rem', color: '#1c1e4c' }}>
                                        <Mail size={20} /> Contact : sarah.lacheroy@metadxs.com
                                    </a>
                                    <a href="#" className="link-btn">
                                        <FileText size={18} /> Voir notre charte d’engagement ici
                                    </a>
                                    <a href="#" className="link-btn" style={{ color: '#ef9a37' }}>
                                        <Briefcase size={18} /> LES MISSIONS OFFICIELLES DU RÉFÉRENT HANDICAP
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Material & Aids */}
                    <div className="card">
                        <h2 className="section-title"><ShieldCheck color="#ef9a37" /> Aides et matériels disponibles</h2>
                        <div className="aids-grid">
                            
                            {/* VISUEL */}
                            <div className="aid-item">
                                <div className="aid-header"><Monitor size={24} /> HANDICAP VISUEL</div>
                                
                                <div className="aid-tool">
                                    <h4>🔍 ZoomText</h4>
                                    <p>Un logiciel de grossissement d’écran qui agrandit les textes et les images, avec une option de lecture vocale. Il est conçu pour les personnes malvoyantes.</p>
                                    <a href="#" className="link-btn">🔗 Utiliser l’outil</a>
                                </div>

                                <div className="aid-tool">
                                    <h4>🖱️ Afficheur Braille</h4>
                                    <p>Cet outil permet de lire l’écran d’un ordinateur grâce à une ligne de cellules braille actualisées en temps réel. Il est indispensable pour les personnes aveugles.</p>
                                    <a href="#" className="link-btn">🔗 Utiliser l’outil</a>
                                </div>
                            </div>

                            {/* AUDITIF */}
                            <div className="aid-item">
                                <div className="aid-header"><Ear size={24} /> HANDICAP AUDITIF</div>
                                
                                <div className="aid-tool">
                                    <h4>🎧 Casque anti-bruit</h4>
                                    <p>Il aide à s’isoler du bruit ambiant pour se concentrer, particulièrement utile dans les environnements partagés ou bruyants. Idéal pour les personnes hyperacousiques ou hypersensibles.</p>
                                </div>

                                <div className="aid-tool">
                                    <h4>💡 Cube lumineux d’alerte</h4>
                                    <p>Ce dispositif émet un signal lumineux en cas d’alerte sonore (sonnette, alarme, etc.), permettant aux personnes sourdes ou malentendantes de rester informées.</p>
                                    <a href="#" className="link-btn">🔗 Voir la fiche technique</a>
                                </div>
                            </div>

                            {/* APPRENTISSAGE */}
                            <div className="aid-item">
                                <div className="aid-header"><Brain size={24} /> TROUBLE DE L'APPRENTISSAGE</div>
                                
                                <div className="aid-tool">
                                    <h4>🖊 Stylo Scanneur</h4>
                                    <p>Un outil très pratique qui lit à voix haute les textes imprimés. Il permet aux personnes ayant des troubles de la lecture ou de la concentration de mieux comprendre les documents papier.</p>
                                    <a href="#" className="link-btn">🔗 Voir la démonstration</a>
                                </div>

                                <div className="aid-tool">
                                    <h4>💡 Logiciel Correcteur (Antidote)</h4>
                                    <p>Ce logiciel aide à corriger l’orthographe, la grammaire et la syntaxe. Il est particulièrement utile pour les apprenants ayant des troubles de l’écrit (dyslexie, dysorthographie, etc.).</p>
                                    <a href="#" className="link-btn">🔗 En savoir plus</a>
                                </div>
                            </div>

                            {/* MOTEUR */}
                            <div className="aid-item">
                                <div className="aid-header"><Accessibility size={24} /> HANDICAP MOTEUR</div>
                                
                                <div className="aid-tool">
                                    <h4>🪑 Siège ergonomique</h4>
                                    <p>Conçu pour maintenir une bonne posture et réduire la fatigue liée à une position assise prolongée, il améliore le confort et l’autonomie au poste de travail.</p>
                                </div>

                                <div className="aid-tool">
                                    <h4>🖱️ Souris verticale</h4>
                                    <p>Cette souris réduit les tensions musculaires du bras et du poignet, en offrant une prise naturelle. Elle est idéale pour les personnes ayant des troubles musculosquelettiques.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Sensibilisation */}
                    <div className="card">
                        <h2 className="section-title"><Video color="#3b82f6" /> Sensibilisation & Aller plus loin</h2>
                        <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '2rem', lineHeight: 1.6 }}>
                            Comprendre les situations de handicap, c’est lever les freins à l’inclusion. Chez Meta DX School, nous croyons que la formation est un levier puissant pour changer les regards.
                        </p>

                        <div className="sensibilisation-grid">
                            <div>
                                <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Vidéos et affiches</h4>
                                <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '1rem' }}>Retrouvez une sélection de vidéos pédagogiques et supports de communication pour sensibiliser vos équipes ou votre entourage.</p>
                                <a href="https://www.activateurdeprogres.fr/ressources" target="_blank" rel="noopener noreferrer" className="link-btn">🔗 Découvrir les ressources – Activateur de Progrès</a>
                            </div>
                            
                            <div>
                                <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Un thème chaque mois</h4>
                                <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '1rem' }}>Suivez le calendrier annuel de sensibilisation autour du handicap (santé mentale, troubles moteurs, autisme, etc.).</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <a href="#" className="link-btn">🔗 Voir le calendrier thématique 1</a>
                                    <a href="#" className="link-btn">🔗 Voir le calendrier thématique 2</a>
                                </div>
                            </div>

                            <div>
                                <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Charte d’engagement RHF</h4>
                                <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '1rem' }}>Nous adhérons à la charte nationale des référents handicap, pour garantir une démarche éthique et responsable.</p>
                                <a href="#" className="link-btn">🔗 Télécharger la charte</a>
                            </div>

                            <div>
                                <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Réseau Activateur de Progrès</h4>
                                <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '1rem' }}>Nous sommes fiers d’être Activateur de Progrès, un label valorisant les établissements engagés en faveur de l’accessibilité à la formation.</p>
                                <a href="#" className="link-btn">🔗 En savoir plus sur le réseau</a>
                            </div>
                        </div>

                        <div className="affiche-gallery">
                            <div className="affiche-placeholder">affiche-2</div>
                            <div className="affiche-placeholder">affiche-3</div>
                            <div className="affiche-placeholder">affiche-4</div>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="cta-box">
                        <Award size={48} color="#ef9a37" style={{ marginBottom: '1rem' }} />
                        <h2>Les solutions de financement si vous êtes en situation de handicap</h2>
                        <p style={{ opacity: 0.8, marginTop: '1rem' }}>Découvrez les aides à la formation pour les travailleurs en situation de handicap (AGEFIPH, FIPHFP, dispositifs cumulables...).</p>
                        <Link to="/ressources/financements-handicap" className="btn-primary">
                            VOIR LES SOLUTIONS DE FINANCEMENT
                        </Link>
                    </div>
                </main>
            </div>
        </>
    );
}

