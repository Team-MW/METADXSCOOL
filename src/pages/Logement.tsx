import { Helmet } from 'react-helmet-async';
import { Home, ExternalLink, ShieldCheck, Euro, CheckCircle2, MapPin, Phone, Mail, Bus, Train } from 'lucide-react';

export default function Logement() {
    return (
        <>
            <Helmet>
                <title>Aide au Logement & Campus | Meta DX School</title>
                <meta name="description" content="Découvrez nos conseils, aides et plateformes pour trouver un logement étudiant sereinement lors de votre formation à Toulouse." />
            </Helmet>

            <style>{`
                .logement-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    padding-bottom: 6rem;
                    color: #1e293b;
                }

                .logement-hero {
                    background: linear-gradient(135deg, #1c1e4c 0%, #2f69d4 100%);
                    color: white;
                    padding: 8rem 2rem 5rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .logement-hero::before {
                    content: '';
                    position: absolute;
                    top: -50%; right: -10%;
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(91, 180, 248, 0.2) 0%, transparent 70%);
                    border-radius: 50%;
                }

                .logement-hero-container {
                    max-width: 900px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .badge-title {
                    background: rgba(255, 255, 255, 0.2);
                    color: #dbeafe;
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                    display: inline-block;
                    margin-bottom: 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }

                .logement-hero h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                    line-height: 1.2;
                }

                .logement-hero p {
                    font-size: 1.25rem;
                    opacity: 0.95;
                    font-weight: 400;
                    line-height: 1.6;
                }

                .section-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 4rem 2rem 0;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }
                .section-header h2 {
                    font-size: 2.2rem;
                    font-weight: 900;
                    color: #0f172a;
                    margin-bottom: 1rem;
                }
                .section-header .divider {
                    width: 60px;
                    height: 4px;
                    background: #ef9a37;
                    margin: 0 auto;
                    border-radius: 2px;
                }

                /* Cards Grid */
                .cards-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                }

                .housing-card {
                    background: white;
                    border-radius: 16px;
                    padding: 2.5rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    transition: transform 0.3s;
                    border: 1px solid #e2e8f0;
                    display: flex;
                    flex-direction: column;
                }
                .housing-card:hover {
                    transform: translateY(-5px);
                    border-color: #5bb4f8;
                }

                .housing-card h3 {
                    font-size: 1.3rem;
                    font-weight: 800;
                    color: #1c1e4c;
                    margin-bottom: 1rem;
                }
                .housing-card p {
                    color: #475569;
                    margin-bottom: 1rem;
                    line-height: 1.5;
                    flex-grow: 1;
                }
                .housing-card .highlight {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 600;
                    color: #ef9a37;
                    margin-bottom: 1.5rem;
                }
                
                .card-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: #f8fafc;
                    color: #1c1e4c;
                    padding: 0.8rem 1rem;
                    border-radius: 8px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 0.9rem;
                    border: 1px solid #cbd5e1;
                    justify-content: center;
                    transition: all 0.2s;
                }
                .card-link:hover {
                    background: #1c1e4c;
                    color: white;
                    border-color: #1c1e4c;
                }

                /* Aides Block */
                .aides-section {
                    background: white;
                    border-radius: 24px;
                    padding: 4rem;
                    margin-top: 4rem;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.05);
                }

                .aide-block {
                    display: flex;
                    gap: 2rem;
                    margin-bottom: 3rem;
                }
                .aide-block:last-child {
                    margin-bottom: 0;
                }
                .aide-icon {
                    width: 64px;
                    height: 64px;
                    border-radius: 16px;
                    background: rgba(47, 105, 212, 0.1);
                    color: #2f69d4;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .aide-icon.green {
                    background: rgba(16, 185, 129, 0.1);
                    color: #10b981;
                }
                .aide-content h3 {
                    font-size: 1.5rem;
                    font-weight: 800;
                    margin-bottom: 1rem;
                    color: #0f172a;
                }
                .aide-content ul {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 1.5rem 0;
                }
                .aide-content li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.5rem;
                    margin-bottom: 0.5rem;
                    color: #475569;
                    line-height: 1.5;
                }
                .aide-content li::before {
                    content: '–';
                    color: #ef9a37;
                    font-weight: bold;
                }

                /* Conseils */
                .conseils-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                    margin-top: 4rem;
                }
                .conseil-card {
                    background: #1c1e4c;
                    color: white;
                    padding: 2rem;
                    border-radius: 12px;
                    font-weight: 600;
                    line-height: 1.5;
                    font-size: 1.1rem;
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    box-shadow: 0 10px 20px rgba(28, 30, 76, 0.2);
                }
                .conseil-card svg { color: #5bb4f8; flex-shrink: 0; }

                /* Campus */
                .campus-wrapper {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                    margin-top: 4rem;
                    background: white;
                    border-radius: 24px;
                    padding: 3rem;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.05);
                }
                @media(max-width: 768px) {
                    .campus-wrapper { grid-template-columns: 1fr; padding: 2rem; }
                    .aide-block { flex-direction: column; gap: 1rem; }
                    .logement-hero h1 { font-size: 2.2rem; }
                }

                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    font-size: 1.1rem;
                    color: #334155;
                }
                .contact-item svg {
                    color: #ef9a37;
                }
                .contact-item p { margin: 0; }

                .transport-box {
                    background: #f1f5f9;
                    padding: 1.5rem;
                    border-radius: 12px;
                    margin-bottom: 1rem;
                    border-left: 4px solid #5bb4f8;
                }
                .transport-box h4 {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin: 0 0 0.5rem 0;
                    color: #0f172a;
                    font-weight: 800;
                }

            `}</style>

            <div className="logement-page">
                <header className="logement-hero">
                    <div className="logement-hero-container">
                        <div className="badge-title">VIE ÉTUDIANTE</div>
                        <h1>AIDE AU LOGEMENT</h1>
                        <p>Chez Meta DX School, on sait que se loger sereinement est une condition essentielle pour réussir sa formation. Que vous veniez de Toulouse ou d’ailleurs, voici les dispositifs utiles.</p>
                    </div>
                </header>

                <main>
                    {/* Chercher un logement */}
                    <div className="section-container">
                        <div className="section-header">
                            <h2>OÙ CHERCHER UN LOGEMENT ÉTUDIANT À TOULOUSE ?</h2>
                            <div className="divider"></div>
                        </div>

                        <div className="cards-grid">
                            <div className="housing-card">
                                <h3>CROUS TOULOUSE</h3>
                                <p>Résidences étudiantes à loyers modérés, logement en chambre ou studio.</p>
                                <div className="highlight"><MapPin size={18}/> Proximité campus</div>
                                <a href="https://www.crous-toulouse.fr/se-loger/" target="_blank" rel="noopener noreferrer" className="card-link">
                                    Voir les offres <ExternalLink size={16}/>
                                </a>
                            </div>

                            <div className="housing-card">
                                <h3>LOKAVIZ</h3>
                                <p>Plateforme nationale du CROUS recensant des logements chez des particuliers ou en résidences labellisées.</p>
                                <div className="highlight"><ShieldCheck size={18}/> Logements vérifiés</div>
                                <a href="https://www.lokaviz.fr" target="_blank" rel="noopener noreferrer" className="card-link">
                                    Accéder à Lokaviz <ExternalLink size={16}/>
                                </a>
                            </div>

                            <div className="housing-card">
                                <h3>OTOULOUSE.ORG</h3>
                                <p>Annonces de colocation, appartements, studios dans l’agglomération toulousaine.</p>
                                <div className="highlight"><Home size={18}/> Pour jeunes actifs</div>
                                <a href="https://www.otoulouse.org" target="_blank" rel="noopener noreferrer" className="card-link">
                                    Rechercher <ExternalLink size={16}/>
                                </a>
                            </div>

                            <div className="housing-card">
                                <h3>LA CARTE DES COLOCS</h3>
                                <p>Plateforme dédiée à la colocation partout en France, avec des offres à Toulouse selon vos affinités.</p>
                                <div className="highlight"><MapPin size={18}/> Filtres par affinité</div>
                                <a href="https://www.lacartedescolocs.fr" target="_blank" rel="noopener noreferrer" className="card-link">
                                    Trouver une coloc <ExternalLink size={16}/>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Aides Financières */}
                    <div className="section-container">
                        <div className="aides-section">
                            <div className="section-header">
                                <h2>GARANTIES ET AIDES FINANCIÈRES</h2>
                                <div className="divider"></div>
                            </div>

                            <div className="aide-block">
                                <div className="aide-icon"><ShieldCheck size={32}/></div>
                                <div className="aide-content">
                                    <h3>VISALE (ACTION LOGEMENT)</h3>
                                    <ul>
                                        <li>Caution locative gratuite pour les étudiants sans garant.</li>
                                        <li>Garantie des loyers impayés auprès du propriétaire.</li>
                                        <li>Prise en charge jusqu’à 36 mois de loyers.</li>
                                    </ul>
                                    <a href="https://www.visale.fr" target="_blank" rel="noopener noreferrer" style={{color: '#2f69d4', fontWeight: 'bold'}} className="card-link">
                                        🌐 visale.fr
                                    </a>
                                </div>
                            </div>

                            <div className="aide-block">
                                <div className="aide-icon green"><Euro size={32}/></div>
                                <div className="aide-content">
                                    <h3>APL & ALS (CAF)</h3>
                                    <ul>
                                        <li>Aide personnalisée au logement selon vos revenus et le type de logement.</li>
                                        <li>À demander directement sur le site de la CAF après signature du bail.</li>
                                    </ul>
                                    <a href="https://www.caf.fr" target="_blank" rel="noopener noreferrer" style={{color: '#10b981', fontWeight: 'bold'}} className="card-link">
                                        🌐 caf.fr
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Conseils */}
                    <div className="section-container">
                        <div className="section-header">
                            <h2>NOS CONSEILS PRATIQUES</h2>
                            <div className="divider"></div>
                        </div>

                        <div className="conseils-grid">
                            <div className="conseil-card">
                                <CheckCircle2 />
                                <div>Anticipez votre recherche (minimum 1 à 2 mois avant la rentrée)</div>
                            </div>
                            <div className="conseil-card">
                                <CheckCircle2 />
                                <div>Vérifiez l’éligibilité à la garantie VISALE avant toute signature</div>
                            </div>
                            <div className="conseil-card">
                                <CheckCircle2 />
                                <div>Préparez un dossier complet (pièce d'identité, contrat, garant, justificatifs)</div>
                            </div>
                            <div className="conseil-card">
                                <CheckCircle2 />
                                <div>En cas de doute, contactez-nous ou parlez-en à votre référent META DX</div>
                            </div>
                        </div>
                    </div>

                    {/* Le Campus */}
                    <div className="section-container">
                        <div className="campus-wrapper">
                            <div>
                                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '2rem' }}>LE CAMPUS</h2>
                                
                                <h3 style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Nos coordonnées</h3>
                                <div className="contact-item">
                                    <MapPin size={24}/>
                                    <p><strong>244 Route de Seysses</strong><br/>Bâtiment 2, 4e étage<br/>31100 Toulouse</p>
                                </div>
                                <div className="contact-item">
                                    <Phone size={24}/>
                                    <p>06 82 64 10 25  /  06 82 64 10 26</p>
                                </div>
                                <div className="contact-item">
                                    <Mail size={24}/>
                                    <p>contact@metadxs.com</p>
                                </div>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Comment s'y rendre ?</h3>
                                
                                <div className="transport-box">
                                    <h4><Train size={20}/> En métro</h4>
                                    <p style={{ margin: 0, color: '#475569' }}>10 minutes à pieds de l’arrêt <strong>Reynerie</strong> (Ligne A)</p>
                                </div>

                                <div className="transport-box">
                                    <h4><Bus size={20}/> En bus</h4>
                                    <p style={{ margin: 0, color: '#475569' }}>Ligne 7 depuis Mermoz, arrêt <strong>Bordelongue</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
