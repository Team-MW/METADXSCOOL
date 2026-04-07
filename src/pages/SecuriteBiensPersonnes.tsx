import { Helmet } from 'react-helmet-async';
import { ShieldPlus, Activity, ExternalLink } from 'lucide-react';

export default function SecuriteBiensPersonnes() {
    return (
        <>
            <Helmet>
                <title>Sécurité des Biens et des Personnes | Meta DX School</title>
                <meta name="description" content="Découvrez nos formations en Santé et Sécurité au travail : Sauvetage Secourisme du Travail (SST) et Actualisation." />
            </Helmet>

            <style>{`
                .secu-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    padding-bottom: 6rem;
                    color: #1e293b;
                }

                .secu-hero {
                    background: linear-gradient(135deg, #1c1e4c 0%, #ef9a37 100%);
                    color: white;
                    padding: 8rem 2rem 5rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .secu-hero::before {
                    content: '';
                    position: absolute;
                    top: -50%; left: -20%;
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(239, 154, 55, 0.4) 0%, transparent 70%);
                    border-radius: 50%;
                }

                .secu-hero-container {
                    max-width: 900px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .badge-title {
                    background: rgba(255, 255, 255, 0.2);
                    color: #ffedd5;
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                    display: inline-block;
                    margin-bottom: 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }

                .secu-hero h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                    line-height: 1.2;
                }

                .secu-hero p {
                    font-size: 1.3rem;
                    opacity: 0.95;
                    font-weight: 500;
                    line-height: 1.6;
                }

                .secu-content {
                    max-width: 1200px;
                    margin: -3rem auto 0;
                    padding: 0 2rem;
                    position: relative;
                    z-index: 10;
                }

                .cards-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 2.5rem;
                }

                .formation-card {
                    background: white;
                    border-radius: 16px;
                    padding: 2.5rem;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.06);
                    transition: transform 0.3s, box-shadow 0.3s;
                    border: 2px solid #ef9a37;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                }

                .formation-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.12);
                }

                .badge-nouveau {
                    position: absolute;
                    top: -15px;
                    right: 20px;
                    background-color: #e25865;
                    color: white;
                    padding: 5px 15px;
                    border-radius: 20px;
                    font-weight: bold;
                    font-size: 0.85rem;
                    box-shadow: 0 4px 10px rgba(226,88,101,0.3);
                }

                .icon-wrapper {
                    width: 70px;
                    height: 70px;
                    background: rgba(239, 154, 55, 0.1);
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ef9a37;
                    margin-bottom: 1.5rem;
                    box-shadow: 0 4px 10px rgba(239, 154, 55, 0.1);
                }

                .formation-card h3 {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: #0f172a;
                    margin-bottom: 0.5rem;
                    line-height: 1.3;
                }
                .formation-card h4 {
                    font-size: 1.05rem;
                    color: #64748b;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                }

                .formation-desc {
                    color: #475569;
                    font-size: 1.05rem;
                    line-height: 1.6;
                    flex-grow: 1;
                    margin-bottom: 1.5rem;
                }

                .tags-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                    margin-bottom: 2rem;
                }
                .tag {
                    background: #f1f5f9;
                    color: #334155;
                    padding: 6px 14px;
                    border-radius: 6px;
                    font-size: 0.85rem;
                    font-weight: 700;
                }

                .card-link {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    background: #1c1e4c;
                    color: white;
                    padding: 1rem;
                    border-radius: 8px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 0.95rem;
                    transition: all 0.2s;
                }
                .card-link:hover {
                    background: #2f69d4;
                }
                
                @media(max-width: 768px) {
                    .secu-hero h1 { font-size: 2.1rem; }
                    .formation-card { padding: 2rem; }
                    .cards-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <div className="secu-page">
                <header className="secu-hero">
                    <div className="secu-hero-container">
                        <div className="badge-title">CATALOGUE DE FORMATIONS</div>
                        <h1>SÉCURITÉ DES BIENS ET DES PERSONNES</h1>
                        <p>Santé et Sécurité au Travail (SST) pour protéger vos collaborateurs et répondre aux obligations de prévention en entreprise.</p>
                    </div>
                </header>

                <main className="secu-content">
                    <div className="cards-grid">
                        
                        {/* SST Initial */}
                        <div className="formation-card">
                            <span className="badge-nouveau">NOUVEAU</span>
                            <div className="icon-wrapper"><ShieldPlus size={32} /></div>
                            <h3>SAUVETEUR SECOURISTE DU TRAVAIL</h3>
                            <h4>FORMATION INITIALE</h4>
                            <p className="formation-desc">
                                Toutes les entreprises doivent disposer de secouristes en nombre adapté et bien répartis, capables d’intervenir immédiatement et efficacement après tout accident, et de contribuer à la prévention des risques professionnels de l’entreprise.
                            </p>
                            <div className="tags-container">
                                <span className="tag">⏱ 2 JOURS (14 HEURES)</span>
                                <span className="tag">📍 INTER / SUR MESURE</span>
                            </div>
                            <a href="/forma-secu/securite/sst-initial" className="card-link">
                                Voir la formation <ExternalLink size={16} />
                            </a>
                        </div>

                        {/* SST MAC */}
                        <div className="formation-card">
                            <span className="badge-nouveau">NOUVEAU</span>
                            <div className="icon-wrapper"><Activity size={32} /></div>
                            <h3>SAUVETEUR SECOURISTE DU TRAVAIL</h3>
                            <h4>MAINTIEN ET ACTUALISATION DES COMPÉTENCES (MAC)</h4>
                            <p className="formation-desc">
                                Toutes les entreprises doivent disposer de secouristes en nombre adapté et bien répartis, capables d’intervenir immédiatement et efficacement après tout accident, et de contribuer à la prévention des risques professionnels de l’entreprise.
                            </p>
                            <div className="tags-container">
                                <span className="tag">⏱ 1 JOUR (7 HEURES)</span>
                                <span className="tag">📍 INTER / SUR MESURE</span>
                            </div>
                            <a href="/forma-secu/securite/sst-mac" className="card-link">
                                Voir la formation <ExternalLink size={16} />
                            </a>
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}
