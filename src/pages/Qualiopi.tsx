import { Helmet } from 'react-helmet-async';
import { Award, Download, FileText, Heart, ShieldCheck, Trophy, Sparkles } from 'lucide-react';

export default function Qualiopi() {
    return (
        <>
            <Helmet>
                <title>Certification Qualiopi - Meta DX School</title>
                <meta name="description" content="Meta DX School est fier d'annoncer l'obtention de la certification Qualiopi pour son Centre de Formation d'Apprentis (CFA)." />
                <link rel="canonical" href="https://www.metadxs.com/qualiopi" />
            </Helmet>

            <style>{`
                .qualiopi-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    color: #1e293b;
                    padding-bottom: 6rem;
                }

                .qualiopi-hero {
                    background: linear-gradient(135deg, #1c1e4c 0%, #7c3aed 100%);
                    color: white;
                    padding: 8rem 2rem 6rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .qualiopi-hero::before {
                    content: '';
                    position: absolute;
                    top: -50%; right: -10%;
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(239, 154, 55, 0.15) 0%, transparent 70%);
                    border-radius: 50%;
                }

                .hero-container {
                    max-width: 1000px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .qualiopi-badge {
                    background: rgba(255, 255, 255, 0.15);
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    display: inline-block;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    letter-spacing: 0.05em;
                }

                .qualiopi-hero h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                }

                .qualiopi-hero p {
                    font-size: 1.3rem;
                    opacity: 0.9;
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .main-content {
                    max-width: 1200px;
                    margin: -4rem auto 0;
                    padding: 0 2rem;
                    position: relative;
                    z-index: 10;
                    display: grid;
                    grid-template-columns: 7fr 5fr;
                    gap: 3rem;
                }

                @media(max-width: 968px) {
                    .main-content {
                        grid-template-columns: 1fr;
                        margin-top: -2rem;
                    }
                }

                .card {
                    background: white;
                    border-radius: 24px;
                    padding: 3rem;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.06);
                    margin-bottom: 2.5rem;
                    border: 1px solid rgba(226, 232, 240, 0.8);
                }

                .card-title {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #1c1e4c;
                    margin-bottom: 2rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .text-block p {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #475569;
                    margin-bottom: 1.5rem;
                }

                .highlight-box {
                    background: linear-gradient(135deg, #eff6ff 0%, #dbedea 100%);
                    border-left: 6px solid #7c3aed;
                    padding: 2rem;
                    border-radius: 16px;
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                }

                .highlight-box p {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: #1c1e4c;
                    margin: 0;
                    line-height: 1.7;
                }

                .qualiopi-download-card {
                    background: white;
                    border-radius: 24px;
                    padding: 3rem;
                    box-shadow: 0 15px 45px rgba(28, 30, 76, 0.08);
                    text-align: center;
                    border: 1px solid rgba(226, 232, 240, 0.8);
                    height: fit-content;
                    position: sticky;
                    top: 2rem;
                }

                .download-title {
                    font-size: 1.4rem;
                    font-weight: 800;
                    color: #1c1e4c;
                    margin-bottom: 1.5rem;
                }

                .image-container {
                    margin: 2rem auto;
                    max-width: 300px;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border: 1px solid #e2e8f0;
                    background: #fff;
                    padding: 1rem;
                }

                .image-container:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 15px 35px rgba(124, 58, 237, 0.2);
                }

                .cert-img {
                    width: 100%;
                    height: auto;
                    display: block;
                    border-radius: 8px;
                }

                .btn-download {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    background: linear-gradient(135deg, #ef9a37 0%, #e25865 100%);
                    color: white;
                    padding: 1.2rem 2rem;
                    border-radius: 14px;
                    font-weight: 800;
                    font-size: 1.05rem;
                    text-decoration: none;
                    margin-top: 1.5rem;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 20px rgba(239, 154, 55, 0.2);
                }

                .btn-download:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 25px rgba(239, 154, 55, 0.35);
                    background: linear-gradient(135deg, #f5a646 0%, #eb6875 100%);
                }

                .benefits-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-top: 2rem;
                }

                @media(max-width: 600px) {
                    .benefits-grid {
                        grid-template-columns: 1fr;
                    }
                }

                .benefit-item {
                    background: #f8fafc;
                    padding: 1.5rem;
                    border-radius: 16px;
                    border: 1px solid #e2e8f0;
                    transition: all 0.2s ease;
                }

                .benefit-item:hover {
                    border-color: #7c3aed;
                    background: #fff;
                    transform: translateY(-3px);
                }

                .benefit-icon {
                    color: #7c3aed;
                    margin-bottom: 1rem;
                }

                .benefit-item h4 {
                    font-size: 1.1rem;
                    font-weight: 800;
                    color: #1c1e4c;
                    margin-bottom: 0.5rem;
                }

                .benefit-item p {
                    font-size: 0.9rem;
                    color: #64748b;
                    line-height: 1.5;
                    margin: 0;
                }

                .signature-section {
                    margin-top: 3rem;
                    padding-top: 2rem;
                    border-top: 2px solid #f1f5f9;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .signature-text {
                    font-style: italic;
                    color: #64748b;
                }

                .team-name {
                    font-weight: 800;
                    color: #1c1e4c;
                }
            `}</style>

            <div className="qualiopi-page">
                <header className="qualiopi-hero">
                    <div className="hero-container">
                        <span className="qualiopi-badge">
                            <Trophy size={14} style={{ marginRight: '6px', display: 'inline', verticalAlign: 'middle' }} strokeWidth={2.5} />
                            LABEL QUALITÉ NATIONAL
                        </span>
                        <h1>CERTIFICATION QUALIOPI</h1>
                        <p>
                            Meta DX School est fier de vous annoncer l'obtention de la certification Qualiopi pour son Centre de Formation d’Apprentis (CFA).
                        </p>
                    </div>
                </header>

                <main className="main-content">
                    <div className="content-area">
                        <div className="card">
                            <h2 className="card-title">
                                <Award color="#ef9a37" size={32} />
                                Notre Engagement Qualité
                            </h2>
                            <div className="text-block">
                                <p>
                                    Nous sommes fiers de vous annoncer que notre Centre de Formation d’Apprentis (CFA) a obtenu la Certification Qualiopi. Cette reconnaissance atteste de notre engagement indéfectible envers la qualité de notre organisation et confirme notre volonté constante de répondre aux besoins des apprenants et des entreprises.
                                </p>
                                <p>
                                    Nos équipes dévouées travaillent sans relâche pour offrir des formations adaptées aux besoins du marché du travail, tout en maintenant les plus hauts standards de qualité.
                                </p>

                                <div className="highlight-box">
                                    <p>
                                        « En choisissant notre CFA, vous bénéficiez donc non seulement d’une formation reconnue et de qualité, mais aussi de la certitude de faire partie d’un environnement d’apprentissage où l’excellence est la norme. »
                                    </p>
                                </div>

                                <p>
                                    Nous sommes impatients de vous accompagner dans votre parcours professionnel et de vous aider à atteindre vos objectifs. Bienvenue au sein de notre CFA certifié Qualiopi, où votre réussite est notre priorité absolue.
                                </p>
                            </div>

                            <div className="signature-section">
                                <div className="signature-text">
                                    Nous vous remercions de votre confiance.
                                </div>
                                <div className="team-name">
                                    L’équipe de Meta DX School
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <h2 className="card-title">
                                <Sparkles color="#7c3aed" size={28} />
                                Pourquoi choisir un CFA certifié Qualiopi ?
                            </h2>
                            <p style={{ color: '#64748b', marginBottom: '2rem' }}>
                                La certification Qualiopi atteste de la qualité du processus mis en œuvre par les prestataires d’actions concourant au développement des compétences, conformément au Référentiel National Qualité (RNQ).
                            </p>
                            <div className="benefits-grid">
                                <div className="benefit-item">
                                    <ShieldCheck className="benefit-icon" size={24} />
                                    <h4>Gage de Confiance</h4>
                                    <p>Une conformité rigoureuse aux 7 critères fondamentaux de qualité nationale.</p>
                                </div>
                                <div className="benefit-item">
                                    <Trophy className="benefit-icon" size={24} />
                                    <h4>Formations Reconnues</h4>
                                    <p>Des parcours d'apprentissage qualitatifs et parfaitement adaptés aux besoins actuels.</p>
                                </div>
                                <div className="benefit-item">
                                    <FileText className="benefit-icon" size={24} />
                                    <h4>Financements Activés</h4>
                                    <p>Éligibilité totale aux dispositifs de financements publics (CPF, OPCO, Transitions Pro...).</p>
                                </div>
                                <div className="benefit-item">
                                    <Heart className="benefit-icon" size={24} />
                                    <h4>Suivi Personnalisé</h4>
                                    <p>Un accompagnement attentif depuis l'admission jusqu'à l'insertion en entreprise.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-area">
                        <div className="qualiopi-download-card">
                            <h3 className="download-title">Certificat Qualiopi</h3>
                            <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5 }}>
                                Cliquez sur l’image ci-dessous pour télécharger notre certificat Qualiopi officiel.
                            </p>

                            <a href="/Qualiopi-Certificat-de-conformite.pdf" target="_blank" rel="noopener noreferrer" className="image-link" download>
                                <div className="image-container">
                                    <img src="/Logo-OF-CBC-VAE-CFA-300x169.jpeg" alt="Logo Qualiopi CFA" className="cert-img" />
                                </div>
                            </a>

                            <a href="/Qualiopi-Certificat-de-conformite.pdf" target="_blank" rel="noopener noreferrer" className="btn-download" download>
                                <Download size={20} />
                                Télécharger le certificat
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
