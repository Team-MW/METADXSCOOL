import { Helmet } from 'react-helmet-async';
import { Briefcase, RefreshCw, Wallet, Target, Compass, ExternalLink, ArrowRight } from 'lucide-react';

export default function Salarie() {
    return (
        <>
            <Helmet>
                <title>Financements Salariés | Meta DX School</title>
                <meta name="description" content="Découvrez les différents dispositifs pour financer votre formation en tant que salarié (PDC, CPF, Pro-A, AFEST, PTP)." />
            </Helmet>

            <style>{`
                .salarie-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    padding-bottom: 6rem;
                    color: #1e293b;
                }

                .salarie-hero {
                    background: linear-gradient(135deg, #1c1e4c 0%, #4a2166 100%);
                    color: white;
                    padding: 8rem 2rem 5rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .salarie-hero::before {
                    content: '';
                    position: absolute;
                    top: -50%; left: -20%;
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(239, 154, 55, 0.15) 0%, transparent 70%);
                    border-radius: 50%;
                }

                .salarie-hero-container {
                    max-width: 900px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .badge-title {
                    background: rgba(239, 154, 55, 0.2);
                    color: #f5a646;
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                    display: inline-block;
                    margin-bottom: 1.5rem;
                    border: 1px solid rgba(239, 154, 55, 0.4);
                }

                .salarie-hero h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                    line-height: 1.2;
                }

                .salarie-hero p {
                    font-size: 1.3rem;
                    opacity: 0.9;
                    font-weight: 500;
                }

                .salarie-content {
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
                    border-color: #ef9a37;
                }

                .icon-wrapper {
                    width: 70px;
                    height: 70px;
                    background: linear-gradient(135deg, #1c1e4c 0%, #4a2166 100%);
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin-bottom: 2rem;
                    box-shadow: 0 10px 20px rgba(28, 30, 76, 0.2);
                }
                .finance-card:nth-child(even) .icon-wrapper {
                    background: linear-gradient(135deg, #f09e3a 0%, #e25865 100%);
                    box-shadow: 0 10px 20px rgba(240, 158, 58, 0.2);
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
                    color: #ef9a37;
                    flex-shrink: 0;
                    margin-top: 4px;
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
                    .salarie-hero h1 { font-size: 2.5rem; }
                    .finance-card { padding: 2rem; }
                    .cards-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <div className="salarie-page">
                <header className="salarie-hero">
                    <div className="salarie-hero-container">
                        <div className="badge-title">FINANCEMENTS</div>
                        <h1>VOUS ÊTES SALARIÉ(E) ?</h1>
                        <p>QUE VOUS SOYEZ EN CDI, EN CDD OU MÊME EN INTÉRIM, DÉCOUVREZ LES DISPOSITIFS POUR FINANCER VOTRE FORMATION.</p>
                    </div>
                </header>

                <main className="salarie-content">
                    <div className="cards-grid">
                        
                        {/* PDC */}
                        <div className="finance-card">
                            <div className="icon-wrapper"><Briefcase size={32} /></div>
                            <h2>LE PLAN DE DÉVELOPPEMENT DES COMPÉTENCES (PDC)</h2>
                            <ul className="feature-list">
                                <li><ArrowRight size={18} /> Financé par votre entreprise, en lien avec son OPCO.</li>
                                <li><ArrowRight size={18} /> Permet de suivre une formation pendant votre temps de travail, avec maintien de salaire.</li>
                            </ul>
                            <a href="https://travail-emploi.gouv.fr/formation-professionnelle/droit-a-la-formation-et-orientation-professionnelle/plan-de-developpement-des-competences" target="_blank" rel="noopener noreferrer" className="card-link">
                                👉 En savoir plus <ExternalLink size={16} />
                            </a>
                        </div>

                        {/* PRO-A */}
                        <div className="finance-card">
                            <div className="icon-wrapper"><RefreshCw size={32} /></div>
                            <h2>LE DISPOSITIF PRO-A <br/><span style={{fontSize:'1.1rem', fontWeight:600, color:'#64748b'}}>(Reconversion ou Promotion par Alternance)</span></h2>
                            <ul className="feature-list">
                                <li><ArrowRight size={18} /> Pour changer de métier ou monter en compétences, via l’alternance.</li>
                                <li><ArrowRight size={18} /> Destiné aux salariés peu qualifiés ou souhaitant évoluer.</li>
                            </ul>
                            <a href="https://www.service-public.fr/particuliers/vosdroits/F13516" target="_blank" rel="noopener noreferrer" className="card-link">
                                👉 En savoir plus <ExternalLink size={16} />
                            </a>
                        </div>

                        {/* CPF */}
                        <div className="finance-card">
                            <div className="icon-wrapper"><Wallet size={32} /></div>
                            <h2>LE COMPTE PERSONNEL DE FORMATION (CPF)</h2>
                            <ul className="feature-list">
                                <li><ArrowRight size={18} /> Mobilisable à tout moment, même hors temps de travail.</li>
                                <li><ArrowRight size={18} /> Vous cumulez des droits chaque année pour financer tout ou partie de votre formation.</li>
                            </ul>
                            <a href="https://www.moncompteformation.gouv.fr/" target="_blank" rel="noopener noreferrer" className="card-link">
                                👉 Consulter vos droits <ExternalLink size={16} />
                            </a>
                        </div>

                        {/* AFEST */}
                        <div className="finance-card">
                            <div className="icon-wrapper"><Target size={32} /></div>
                            <h2>L’AFEST <br/><span style={{fontSize:'1.1rem', fontWeight:600, color:'#64748b'}}>(Action de Formation en Situation de Travail)</span></h2>
                            <ul className="feature-list">
                                <li><ArrowRight size={18} /> Formation directement sur votre lieu de travail, encadrée et accompagnée.</li>
                            </ul>
                            <a href="https://www.anact.fr/afest" target="_blank" rel="noopener noreferrer" className="card-link">
                                👉 Découvrir l’AFEST <ExternalLink size={16} />
                            </a>
                        </div>

                        {/* PTP */}
                        <div className="finance-card">
                            <div className="icon-wrapper"><Compass size={32} /></div>
                            <h2>LE PROJET DE TRANSITION PROFESSIONNELLE (PTP)</h2>
                            <ul className="feature-list">
                                <li><ArrowRight size={18} /> Pour changer de métier avec une formation longue et financée.</li>
                                <li><ArrowRight size={18} /> Le PTP remplace l’ancien CIF. Il est géré par Transitions Pro.</li>
                            </ul>
                            <a href="https://www.service-public.fr/particuliers/vosdroits/F14018" target="_blank" rel="noopener noreferrer" className="card-link">
                                👉 Infos complètes <ExternalLink size={16} />
                            </a>
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}
