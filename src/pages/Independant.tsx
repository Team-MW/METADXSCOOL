import { Helmet } from 'react-helmet-async';
import { Landmark, Wallet, ExternalLink, ArrowRight } from 'lucide-react';

export default function Independant() {
    return (
        <>
            <Helmet>
                <title>Financements Indépendants & TNS | Meta DX School</title>
                <meta name="description" content="Découvrez les différents dispositifs pour financer votre formation en tant qu'indépendant, dirigeant ou TNS (FAF, CPF)." />
            </Helmet>

            <style>{`
                .indep-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    padding-bottom: 6rem;
                    color: #1e293b;
                }

                .indep-hero {
                    background: linear-gradient(135deg, #1c1e4c 0%, #e25865 100%);
                    color: white;
                    padding: 8rem 2rem 5rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .indep-hero::before {
                    content: '';
                    position: absolute;
                    top: -50%; left: -20%;
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(226, 88, 101, 0.2) 0%, transparent 70%);
                    border-radius: 50%;
                }

                .indep-hero-container {
                    max-width: 900px;
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
                }

                .indep-hero h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                    line-height: 1.2;
                }

                .indep-hero p {
                    font-size: 1.3rem;
                    opacity: 0.95;
                    font-weight: 500;
                }

                .indep-content {
                    max-width: 1000px;
                    margin: -3rem auto 0;
                    padding: 0 2rem;
                    position: relative;
                    z-index: 10;
                }

                .cards-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 2.5rem;
                }

                .finance-card {
                    background: white;
                    border-radius: 16px;
                    padding: 2.5rem;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.06);
                    transition: transform 0.3s, box-shadow 0.3s;
                    border: 1px solid #f1f5f9;
                    display: flex;
                    flex-direction: column;
                }

                .finance-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.12);
                    border-color: #e25865;
                }

                .icon-wrapper {
                    width: 70px;
                    height: 70px;
                    background: linear-gradient(135deg, #1c1e4c 0%, #e25865 100%);
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin-bottom: 2rem;
                    box-shadow: 0 10px 20px rgba(226, 88, 101, 0.2);
                }
                .finance-card:nth-child(even) .icon-wrapper {
                    background: linear-gradient(135deg, #ef9a37 0%, #e25865 100%);
                    box-shadow: 0 10px 20px rgba(239, 154, 55, 0.2);
                }

                .finance-card h2 {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: #0f172a;
                    margin-bottom: 1.5rem;
                    line-height: 1.3;
                }

                .feature-list {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 2.5rem 0;
                    flex-grow: 1;
                }

                .feature-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                    color: #475569;
                    font-size: 1.05rem;
                    line-height: 1.5;
                }
                .feature-list li svg {
                    color: #e25865;
                    flex-shrink: 0;
                    margin-top: 4px;
                }
                .finance-card:nth-child(even) .feature-list li svg {
                    color: #ef9a37;
                }

                .card-link {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    background: #f8fafc;
                    color: #1c1e4c;
                    padding: 1rem;
                    border-radius: 8px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 0.95rem;
                    transition: all 0.2s;
                    border: 1px solid #e2e8f0;
                }
                .card-link:hover {
                    background: #1c1e4c;
                    color: white;
                    border-color: #1c1e4c;
                }
                
                @media(max-width: 768px) {
                    .indep-hero h1 { font-size: 2.1rem; }
                    .finance-card { padding: 2rem; }
                    .cards-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <div className="indep-page">
                <header className="indep-hero">
                    <div className="indep-hero-container">
                        <div className="badge-title">FINANCEMENTS</div>
                        <h1>VOUS ÊTES INDÉPENDANT, DIRIGEANT OU TNS ?</h1>
                        <p>DÉCOUVREZ LES DISPOSITIFS ET FONDS D'ASSURANCE POUR FINANCER VOTRE FORMATION PROFESSIONNELLE.</p>
                    </div>
                </header>

                <main className="indep-content">
                    <div className="cards-grid">
                        
                        {/* FAF */}
                        <div className="finance-card">
                            <div className="icon-wrapper"><Landmark size={32} /></div>
                            <h2>FAF (FONDS D’ASSURANCE FORMATION)</h2>
                            <ul className="feature-list">
                                <li>
                                    <ArrowRight size={18} /> 
                                    Chaque professionnel indépendant cotise à un FAF via l’URSSAF. Il existe plusieurs organismes selon votre secteur : Artisan, commerçants et dirigeants non-salariés, professions libérales, auto-entrepreneurs…
                                </li>
                            </ul>
                            <a href="https://entreprendre.service-public.fr/vosdroits/F31148" target="_blank" rel="noopener noreferrer" className="card-link">
                                👉 Infos complètes sur les FAF <ExternalLink size={16} />
                            </a>
                        </div>

                        {/* CPF */}
                        <div className="finance-card">
                            <div className="icon-wrapper"><Wallet size={32} /></div>
                            <h2>MOBILISATION DU CPF</h2>
                            <ul className="feature-list">
                                <li>
                                    <ArrowRight size={18} /> 
                                    Vous pouvez alimenter votre CPF en tant qu’indépendant (si vous avez déclaré votre activité depuis plus d’un an).
                                </li>
                            </ul>
                            <a href="https://www.moncompteformation.gouv.fr/" target="_blank" rel="noopener noreferrer" className="card-link">
                                👉 Vérifier vos droits CPF <ExternalLink size={16} />
                            </a>
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}
