import { Helmet } from 'react-helmet-async';
import { HeartHandshake, Globe, Siren, Heart, AlertTriangle } from 'lucide-react';

export default function Egalite() {
    return (
        <>
            <Helmet>
                <title>Égalité et Inclusion | Meta DX School</title>
                <meta name="description" content="Découvrez notre engagement pour l'égalité, la diversité et l'inclusion, ainsi que les ressources et numéros d'urgence utiles." />
            </Helmet>

            <style>{`
                .egalite-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    padding-bottom: 6rem;
                    color: #1e293b;
                }

                .egalite-hero {
                    background: linear-gradient(135deg, #4a2166 0%, #e43a9f 100%);
                    color: white;
                    padding: 8rem 2rem 5rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .egalite-hero::before {
                    content: '';
                    position: absolute;
                    top: -50%; right: -20%;
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(228, 58, 159, 0.4) 0%, transparent 70%);
                    border-radius: 50%;
                }

                .egalite-hero-container {
                    max-width: 900px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .badge-title {
                    background: rgba(255, 255, 255, 0.2);
                    color: #fbcfe8;
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                    display: inline-block;
                    margin-bottom: 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }

                .egalite-hero h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                    line-height: 1.2;
                }

                .egalite-hero p {
                    font-size: 1.3rem;
                    opacity: 0.95;
                    font-weight: 500;
                    line-height: 1.6;
                }

                .hero-link {
                    display: inline-block;
                    margin-top: 2rem;
                    background: white;
                    color: #e43a9f;
                    padding: 1rem 2.5rem;
                    border-radius: 50px;
                    font-weight: 800;
                    text-decoration: none;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                    transition: transform 0.2s;
                }
                .hero-link:hover { transform: translateY(-3px); }

                .section-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 4rem 2rem 0;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                .section-header h2 {
                    font-size: 2.5rem;
                    font-weight: 900;
                    color: #0f172a;
                    margin-bottom: 1rem;
                }
                .section-header .divider {
                    width: 80px;
                    height: 4px;
                    background: #e43a9f;
                    margin: 0 auto;
                    border-radius: 2px;
                }

                /* Layout Grids */
                .split-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                }
                @media(max-width: 900px) {
                    .split-grid { grid-template-columns: 1fr; }
                    .egalite-hero h1 { font-size: 2.2rem; }
                }

                /* Focus Cards */
                .focus-card {
                    background: white;
                    padding: 3rem;
                    border-radius: 24px;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.04);
                    border: 1px solid #e2e8f0;
                    position: relative;
                }
                .focus-card h3 {
                    font-size: 1.8rem;
                    font-weight: 800;
                    color: #1c1e4c;
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .focus-card h3 svg {
                    color: #e43a9f;
                }
                .focus-card p {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    color: #475569;
                    margin-bottom: 1.5rem;
                }
                .feature-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .feature-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                    color: #334155;
                    font-size: 1.1rem;
                }

                /* Block Engagement */
                .engagement-block {
                    background: #1c1e4c;
                    color: white;
                    padding: 3rem;
                    border-radius: 24px;
                    margin-top: 3rem;
                    position: relative;
                    overflow: hidden;
                }
                .engagement-block h3 {
                    font-size: 1.6rem;
                    font-weight: 800;
                    margin-bottom: 2rem;
                    color: #ef9a37;
                }
                .engagement-block .feature-list li {
                    color: white;
                }
                .engagement-block li::before {
                    content: '→';
                    color: #5bb4f8;
                    font-weight: bold;
                }

                /* Cycle de la violence */
                .violence-section {
                    background: #fff0f2;
                    border: 2px dashed #fca5a5;
                    border-radius: 24px;
                    padding: 4rem;
                    margin-top: 5rem;
                    text-align: center;
                }
                .violence-section h3 {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #be123c;
                    margin-bottom: 1.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                }
                .image-placeholder {
                    background: white;
                    border-radius: 16px;
                    padding: 4rem 2rem;
                    margin: 3rem auto 0;
                    max-width: 800px;
                    box-shadow: 0 10px 30px rgba(190, 18, 60, 0.1);
                    color: #94a3b8;
                    font-weight: 600;
                }

                /* Numbers Grid */
                .numbers-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    margin-top: 3rem;
                }
                .number-card {
                    background: white;
                    border-radius: 16px;
                    padding: 2.5rem;
                    border-left: 6px solid #e43a9f;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }
                .number-card.emergency { border-left-color: #ef4444; }
                .number-card.support { border-left-color: #8b5cf6; }
                .number-card.info { border-left-color: #3b82f6; }
                
                .number-card h4 {
                    font-size: 1.3rem;
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                .number-card.emergency h4 { color: #ef4444; }
                .number-card.support h4 { color: #8b5cf6; }
                .number-card.info h4 { color: #3b82f6; }

                .num-line {
                    margin-bottom: 1.25rem;
                    padding-bottom: 1.25rem;
                    border-bottom: 1px solid #f1f5f9;
                }
                .num-line:last-child {
                    margin-bottom: 0; border-bottom: none; padding-bottom: 0;
                }
                .num-badge {
                    display: inline-block;
                    background: #f1f5f9;
                    font-weight: 900;
                    font-size: 1.4rem;
                    color: #0f172a;
                    padding: 0.2rem 0.8rem;
                    border-radius: 8px;
                    margin-right: 1rem;
                    margin-bottom: 0.5rem;
                }
                .num-card-link {
                    display: inline-block;
                    margin-top: 0.5rem;
                    color: #5bb4f8;
                    font-weight: 700;
                    text-decoration: none;
                }
                .num-card-link:hover { text-decoration: underline; }

            `}</style>

            <div className="egalite-page">
                <header className="egalite-hero">
                    <div className="egalite-hero-container">
                        <div className="badge-title">ENGAGEMENT</div>
                        <h1>L'ÉGALITÉ ET L'INCLUSION</h1>
                        <p>Chez Meta DX School, nous croyons que chacun doit pouvoir accéder à la formation et à l’emploi, quelles que soient ses origines, sa situation ou son parcours.</p>
                        
                        <a href="https://www.laregion.fr/Generation-Egalite" target="_blank" rel="noopener noreferrer" className="hero-link">
                            🔗 Génération Égalité – Région Occitanie
                        </a>
                    </div>
                </header>

                <main>
                    {/* Diversité & Inclusion */}
                    <div className="section-container">
                        <div className="section-header">
                            <h2>COMPRENDRE LA DIVERSITÉ & L’INCLUSION</h2>
                            <div className="divider"></div>
                        </div>

                        <div className="split-grid">
                            <div className="focus-card">
                                <h3><Globe size={28}/> La diversité, c'est quoi ?</h3>
                                <p>La diversité fait référence à l’ensemble des différences visibles ou invisibles qui composent une communauté. Cela comprend notamment :</p>
                                <ul className="feature-list" style={{ color: '#0f172a' }}>
                                    <li><strong style={{color:'#e43a9f'}}>·</strong> L’âge</li>
                                    <li><strong style={{color:'#e43a9f'}}>·</strong> Les origines culturelles ou ethniques</li>
                                    <li><strong style={{color:'#e43a9f'}}>·</strong> La situation de handicap</li>
                                    <li><strong style={{color:'#e43a9f'}}>·</strong> La religion</li>
                                    <li><strong style={{color:'#e43a9f'}}>·</strong> Le parcours social ou économique</li>
                                    <li><strong style={{color:'#e43a9f'}}>·</strong> Les compétences, expériences et façons d’apprendre</li>
                                </ul>
                                <p style={{ marginTop: '1.5rem', fontWeight: 600, color: '#1c1e4c' }}>
                                    Valoriser la diversité, c’est reconnaître la richesse de ces différences et les considérer comme un levier de performance et d’innovation.
                                </p>
                            </div>

                            <div className="focus-card">
                                <h3><HeartHandshake size={28}/> L'inclusion, c'est quoi ?</h3>
                                <p>L’inclusion consiste à créer un environnement dans lequel chacun se sent accueilli, respecté et valorisé, quelles que soient ses caractéristiques.</p>
                                <p>C’est aller au-delà de la simple coexistence des différences, pour garantir que chaque individu :</p>
                                <ul className="feature-list" style={{ color: '#0f172a', fontWeight: 500 }}>
                                    <li><strong style={{color:'#5bb4f8'}}>✓</strong> Ait les mêmes opportunités d’accès à la formation et à la réussite.</li>
                                    <li><strong style={{color:'#5bb4f8'}}>✓</strong> Soit écouté et accompagné de manière équitable.</li>
                                    <li><strong style={{color:'#5bb4f8'}}>✓</strong> Évolue dans un climat sécurisant et sans discrimination.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="engagement-block">
                            <h3>Chez Meta DX School, l’inclusion signifie concrètement :</h3>
                            <ul className="feature-list">
                                <li>Un référent handicap et diversité dédié.</li>
                                <li>Une vigilance constante contre les discriminations et les stéréotypes.</li>
                                <li>Une pédagogie différenciée, adaptée aux besoins individuels.</li>
                                <li>Une ouverture active à tous les profils, y compris les plus éloignés de la formation.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Cycle de la violence */}
                    <div className="section-container">
                        <div className="violence-section">
                            <h3><AlertTriangle size={36}/> COMPRENDRE LE CYCLE DE LA VIOLENCE CONJUGALE</h3>
                            <p style={{ fontSize: '1.2rem', color: '#881337', maxWidth: '800px', margin: '0 auto', fontWeight: 500, lineHeight: 1.6 }}>
                                La violence conjugale ne commence pas forcément par un coup. Elle suit souvent un cycle en 3 phases, qui se répète et peut s’intensifier. Il est important de savoir le reconnaître pour protéger les victimes et agir à temps.
                            </p>
                            
                            <div className="image-placeholder">
                                {/* The user mentioned this file name, keeping the actual img tag ready in case it exists, but showing an alt block otherwise */}
                                <img 
                                    src="/process-frise-violence-07.png" 
                                    alt="Cycle de la violence (Lune de miel, Tensions, Justifications...)" 
                                    style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement?.classList.add('broken-img');
                                        if (e.currentTarget.parentElement) {
                                            e.currentTarget.parentElement.innerHTML = '🖼️ <em>Le visuel "Cycle de la Violence" sera affiché ici. (Merci d\'insérer l\'image process-frise-violence-07.png dans le dossier "public")</em>';
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Numéros Utiles */}
                    <div className="section-container" style={{ paddingBottom: '4rem' }}>
                        <div className="section-header">
                            <h2>LES NUMÉROS ET SITES UTILES</h2>
                            <div className="divider" style={{ background: '#0f172a' }}></div>
                        </div>

                        <div className="numbers-grid">
                            {/* Urgences */}
                            <div className="number-card emergency">
                                <h4><Siren size={24}/> En cas d'urgence ou de danger</h4>
                                <div className="num-line">
                                    <span className="num-badge">17</span> Police secours
                                </div>
                                <div className="num-line">
                                    <span className="num-badge">112</span> Numéro d’urgence européen
                                </div>
                                <div className="num-line">
                                    <span className="num-badge">114</span> Numéro d’urgence par SMS
                                </div>
                            </div>

                            {/* Écoute et aide */}
                            <div className="number-card support">
                                <h4><Heart size={24}/> Écoute et accompagnement</h4>
                                <div className="num-line">
                                    <span className="num-badge" style={{color:'#8b5cf6'}}>3919</span> 
                                    <strong>Violences Femmes Info</strong><br/>
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Gratuit, anonyme, 24h/24</span><br/>
                                    <a href="https://arretonslesviolences.gouv.fr" target="_blank" rel="noopener noreferrer" className="num-card-link">arretonslesviolences.gouv.fr</a>
                                </div>
                                <div className="num-line">
                                    <span className="num-badge" style={{color:'#8b5cf6'}}>116 006</span> 
                                    <strong>France Victimes</strong><br/>
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Soutien psy, juridique, social</span><br/>
                                    <a href="https://www.france-victimes.fr" target="_blank" rel="noopener noreferrer" className="num-card-link">france-victimes.fr</a>
                                </div>
                                <div className="num-line">
                                    <strong>CIDFF Haute-Garonne</strong><br/>
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Droits des femmes, orientation</span><br/>
                                    <a href="http://hautegaronne.cidff.info" target="_blank" rel="noopener noreferrer" className="num-card-link">hautegaronne.cidff.info</a>
                                </div>
                            </div>

                            {/* Orientation */}
                            <div className="number-card info">
                                <h4><Globe size={24}/> Orientation et Infos</h4>
                                <div className="num-line">
                                    🔹 <strong>Info Jeunes France</strong>
                                </div>
                                <div className="num-line">
                                    🔹 <strong>CRIJ Occitanie</strong>
                                </div>
                                <div className="num-line">
                                    🔹 <strong>UNAF</strong> - Dossiers et accompagnement des familles
                                </div>
                                <div className="num-line" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '2px solid #f1f5f9' }}>
                                    <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#1e293b' }}>Ressources complémentaires :</strong>
                                    <div style={{color:'#475569', fontSize: '0.95rem', marginBottom: '0.3rem'}}>• Cycle de la violence : Infographie France Victimes</div>
                                    <div style={{color:'#475569', fontSize: '0.95rem'}}>• Effets sur les victimes : UNAF – Étude complète</div>
                                </div>
                            </div>

                        </div>
                    </div>

                </main>
            </div>
        </>
    );
}
