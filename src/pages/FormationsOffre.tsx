import { Helmet } from 'react-helmet-async';
import { 
    Layers, 
    Monitor, 
    Lightbulb, 
    Users, 
    Zap, 
    BarChart3, 
    Search, 
    PenTool, 
    Smartphone, 
    Repeat, 
    Cpu 
} from 'lucide-react';

export default function FormationsOffre() {
    return (
        <>
            <Helmet>
                <title>Notre Offre de Formation - METADXS</title>
                <meta name="description" content="Découvrez une offre de formation modulable et évolutive : Intra, Inter, Sur-mesure, E-learning et SMS Learning." />
            </Helmet>

            <style>{`
                .offre-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: 'Inter', sans-serif;
                    padding-bottom: 6rem;
                    color: #1e293b;
                }

                .offre-hero {
                    background: linear-gradient(135deg, #1c1e4c 0%, #3b82f6 100%);
                    color: white;
                    padding: 8rem 2rem 5rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .offre-hero-container {
                    max-width: 1000px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .badge-title {
                    background: rgba(255, 255, 255, 0.15);
                    color: white;
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                    display: inline-block;
                    margin-bottom: 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    text-transform: uppercase;
                    font-size: 0.85rem;
                }

                .offre-hero h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                    line-height: 1.1;
                }

                .offre-hero p {
                    font-size: 1.25rem;
                    opacity: 0.95;
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .section-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 5rem 2rem 0;
                }

                /* Cards Formats */
                .formats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 1.5rem;
                    margin-top: 3rem;
                }

                .format-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 20px;
                    text-align: center;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
                    border: 1px solid #e2e8f0;
                    transition: transform 0.3s;
                }
                .format-card:hover {
                    transform: translateY(-5px);
                    border-color: #3b82f6;
                }
                .format-icon {
                    width: 50px; height: 50px;
                    background: #eff6ff;
                    color: #3b82f6;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1.5rem;
                }
                .format-card h3 {
                    font-size: 0.95rem;
                    font-weight: 900;
                    color: #1c1e4c;
                    margin: 0;
                    line-height: 1.4;
                }

                /* Modalité Detail */
                .modalite-detail {
                    background: white;
                    border-radius: 24px;
                    padding: 3rem;
                    margin-top: 4rem;
                    border: 1px solid #e2e8f0;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }

                .modalite-text h2 {
                    font-size: 2rem;
                    font-weight: 900;
                    color: #1c1e4c;
                    margin-bottom: 1.5rem;
                }
                .modalite-text p {
                    line-height: 1.7;
                    color: #475569;
                    margin-bottom: 1.5rem;
                }

                /* Adaptation Section */
                .adaptation-section {
                    background: #1c1e4c;
                    color: white;
                    border-radius: 32px;
                    padding: 5rem;
                    margin-top: 5rem;
                }

                .adaptation-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 3rem;
                    margin-top: 4rem;
                }

                .adaptation-item {
                    display: flex;
                    gap: 1.5rem;
                }

                .item-icon {
                    flex-shrink: 0;
                    width: 48px; height: 48px;
                    background: rgba(59, 130, 246, 0.2);
                    color: #3b82f6;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .item-content h3 {
                    font-size: 1.1rem;
                    font-weight: 800;
                    margin-bottom: 1rem;
                    color: #ef9a37;
                    text-transform: uppercase;
                }
                .item-content p {
                    font-size: 0.95rem;
                    line-height: 1.6;
                    opacity: 0.85;
                }

                /* Experts Footer */
                .experts-banner {
                    background: linear-gradient(to right, #f1f5f9, #eff6ff);
                    border-radius: 24px;
                    padding: 3rem;
                    margin-top: 5rem;
                    display: flex;
                    align-items: center;
                    gap: 3rem;
                    border: 1px solid #dbeafe;
                }
                .experts-icon { font-size: 3rem; }
                .experts-content h3 {
                    font-size: 1.5rem;
                    font-weight: 900;
                    color: #1c1e4c;
                    margin-bottom: 0.5rem;
                }
                .experts-content p {
                    margin: 0;
                    color: #475569;
                    line-height: 1.6;
                }

                @media (max-width: 900px) {
                    .modalite-detail, .adaptation-grid, .experts-banner {
                        grid-template-columns: 1fr;
                        flex-direction: column;
                        gap: 2rem;
                    }
                    .offre-hero h1 { font-size: 2.22rem; }
                    .adaptation-section { padding: 3rem 2rem; }
                }
            `}</style>

            <div className="offre-page">
                <header className="offre-hero">
                    <div className="offre-hero-container">
                        <div className="badge-title">OFFRE MODULABLE & ÉVOLUTIVE</div>
                        <h1>NOTRE OFFRE DE FORMATION</h1>
                        <p>
                            Structurée par niveau de compétence (Initiation, Perfectionnement ou Expertise), 
                            notre offre est multimodale pour s'adapter à vos contraintes et vos rythmes d'apprentissage.
                        </p>
                    </div>
                </header>

                <main className="section-container">
                    {/* Formats de formation */}
                    <div className="formats-grid">
                        <div className="format-card">
                            <div className="format-icon"><Users /></div>
                            <h3>INTER ET INTRA ENTREPRISE</h3>
                        </div>
                        <div className="format-card">
                            <div className="format-icon"><PenTool /></div>
                            <h3>INTRA ENTREPRISE SUR-MESURE</h3>
                        </div>
                        <div className="format-card">
                            <div className="format-icon"><Repeat /></div>
                            <h3>FORMATIONS MIXTES</h3>
                        </div>
                        <div className="format-card">
                            <div className="format-icon"><Monitor /></div>
                            <h3>MODULES E-LEARNING</h3>
                        </div>
                        <div className="format-card">
                            <div className="format-icon"><Smartphone /></div>
                            <h3>SMS LEARNING</h3>
                        </div>
                    </div>

                    {/* Detail Modalités */}
                    <div className="modalite-detail">
                        <div className="modalite-text">
                            <h2>Une flexibilité totale</h2>
                            <p>
                                Synchrones, en présentiel ou en classe virtuelle : Idéal pour répondre à un besoin ponctuel ou spécifique, 
                                notre catalogue permet d’enrichir le spectre de formations proposées à vos équipes.
                            </p>
                            <p>
                                D’après le rapport France Stratégie (2024), 30 % des métiers sont en pleine mutation ou émergence. 
                                Par ailleurs, 85% des emplois de 2030 n’existent pas encore. Aussi, METADXS travaille dans l’anticipation.
                            </p>
                        </div>
                        <div className="modalite-text" style={{background: '#f1f5f9', padding: '2rem', borderRadius: '16px'}}>
                            <h3 style={{fontWeight: 900, marginBottom: '1rem', display:'flex', gap:'0.5rem', alignItems:'center'}}><Zap color="#ef9a37"/> CATALOGUE ÉVOLUTIF</h3>
                            <p style={{fontSize: '0.95rem', margin: 0}}>
                                Notre offre est construite grâce à des études approfondies sur les besoins du marché du travail 
                                et des analyses sectorielles à court et long terme via une veille active auprès de nos entreprises partenaires.
                            </p>
                        </div>
                    </div>

                    {/* Adaptation Section */}
                    <section className="adaptation-section">
                        <h2 style={{textAlign: 'center', fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem'}}>L’ADAPTATION DE NOTRE OFFRE</h2>
                        <p style={{textAlign: 'center', opacity: 0.8, maxWidth: '700px', margin: '0 auto 4rem'}}>
                            METADXS place l’adaptation sectorielle au cœur de sa démarche pédagogique pour garantir l’efficacité et la pertinence.
                        </p>

                        <div className="adaptation-grid">
                            <div className="adaptation-item">
                                <div className="item-icon"><Search /></div>
                                <div className="item-content">
                                    <h3>ANALYSE DES BESOINS</h3>
                                    <p>Veille active des évolutions du marché et co-construction de programmes avec nos partenaires pour anticiper les mutations.</p>
                                </div>
                            </div>

                            <div className="adaptation-item">
                                <div className="item-icon"><Lightbulb /></div>
                                <div className="item-content">
                                    <h3>APPROCHE SUR-MESURE</h3>
                                    <p>Accompagnement individualisé et parcours adaptés aux exigences concrètes du terrain et aux enjeux de chaque secteur.</p>
                                </div>
                            </div>

                            <div className="adaptation-item">
                                <div className="item-icon"><Layers /></div>
                                <div className="item-content">
                                    <h3>DOUBLE COMPÉTENCE</h3>
                                    <p>Intégration des compétences transversales et sectorielles pour des salariés immédiatement opérationnels.</p>
                                </div>
                            </div>

                            <div className="adaptation-item">
                                <div className="item-icon"><BarChart3 /></div>
                                <div className="item-content">
                                    <h3>70% DE PRATIQUE</h3>
                                    <p>Alternance théorie (30%) et pratique (70%) pour favoriser l'intégration rapide des compétences en situations réelles.</p>
                                </div>
                            </div>

                            <div className="adaptation-item">
                                <div className="item-icon"><Cpu /></div>
                                <div className="item-content">
                                    <h3>INNOVATION TECH</h3>
                                    <p>Utilisation d'outils d'IA, réalité virtuelle et adaptive learning pour maximiser l'engagement des stagiaires.</p>
                                </div>
                            </div>

                            <div className="adaptation-item">
                                <div className="item-icon"><Users /></div>
                                <div className="item-content">
                                    <h3>EXPERTS DU TERRAIN</h3>
                                    <p>Une équipe de passionnés partageant leur savoir-faire concret pour des solutions immédiatement applicables en poste.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion Banner */}
                    <div className="experts-banner">
                        <div className="experts-icon">🤝</div>
                        <div className="experts-content">
                            <h3>PASSAGE À L'ACTION IMMÉDIAT</h3>
                            <p>
                                Notre accompagnement dans la construction de vos parcours sur-mesure permet à vos équipes 
                                de passer à l'action dès leur retour en poste grâce à des solutions contextualisées.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
