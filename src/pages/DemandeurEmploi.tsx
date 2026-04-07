import { Helmet } from 'react-helmet-async';
import { ShieldCheck, UserPlus, GraduationCap, Wallet, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

export default function DemandeurEmploi() {
    return (
        <>
            <Helmet>
                <title>Financements Demandeur d'Emploi | Meta DX School</title>
                <meta name="description" content="Découvrez les différents dispositifs pour financer votre formation en tant que demandeur d'emploi : AIF, AFPR, POE, CPF et aides à la mobilité." />
            </Helmet>

            <style>{`
                .demandeur-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    padding-bottom: 6rem;
                    color: #1e293b;
                }

                .demandeur-hero {
                    background: linear-gradient(135deg, #1c1e4c 0%, #2f69d4 100%);
                    color: white;
                    padding: 8rem 2rem 5rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .demandeur-hero::before {
                    content: '';
                    position: absolute;
                    top: -50%; left: -20%;
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(91, 180, 248, 0.15) 0%, transparent 70%);
                    border-radius: 50%;
                }

                .demandeur-hero-container {
                    max-width: 900px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .badge-title {
                    background: rgba(91, 180, 248, 0.2);
                    color: #8aceff;
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                    display: inline-block;
                    margin-bottom: 1.5rem;
                    border: 1px solid rgba(91, 180, 248, 0.4);
                }

                .demandeur-hero h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                    line-height: 1.2;
                }

                .demandeur-hero p {
                    font-size: 1.3rem;
                    opacity: 0.9;
                    font-weight: 500;
                }

                .demandeur-content {
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
                    border-color: #5bb4f8;
                }

                .icon-wrapper {
                    width: 70px;
                    height: 70px;
                    background: linear-gradient(135deg, #1c1e4c 0%, #2f69d4 100%);
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin-bottom: 2rem;
                    box-shadow: 0 10px 20px rgba(47, 105, 212, 0.2);
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
                    color: #5bb4f8;
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
                    .demandeur-hero h1 { font-size: 2.3rem; }
                    .finance-card { padding: 2rem; }
                    .cards-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <div className="demandeur-page">
                <header className="demandeur-hero">
                    <div className="demandeur-hero-container">
                        <div className="badge-title">FINANCEMENTS</div>
                        <h1>VOUS ÊTES DEMANDEUR D’EMPLOI ?</h1>
                        <p>EN TANT QU’INSCRIT AUPRÈS DE FRANCE TRAVAIL, DÉCOUVREZ VOS SOLUTIONS DE FINANCEMENT.</p>
                    </div>
                </header>

                <main className="demandeur-content">
                    <div className="cards-grid">
                        
                        {/* AIF */}
                        <div className="finance-card">
                            <div className="icon-wrapper"><ShieldCheck size={32} /></div>
                            <h2>L’AIDE INDIVIDUELLE À LA FORMATION (AIF)</h2>
                            <ul className="feature-list">
                                <li><ArrowRight size={18} /> Financement partiel ou total d’une formation en lien avec votre retour à l’emploi.</li>
                            </ul>
                            <a href="https://www.francetravail.fr/candidat/en-formation/mes-aides-financieres/laide-individuelle-a-la-formatio.html" target="_blank" rel="noopener noreferrer" className="card-link">
                                👉 En savoir plus sur l'AIF <ExternalLink size={16} />
                            </a>
                        </div>

                        {/* AFPR / POE */}
                        <div className="finance-card">
                            <div className="icon-wrapper"><UserPlus size={32} /></div>
                            <h2>L’AFPR ET LA POE <br/><span style={{fontSize:'1.1rem', fontWeight:600, color:'#64748b'}}>(Préparation Opérationnelle à l’Emploi)</span></h2>
                            <ul className="feature-list">
                                <li><ArrowRight size={18} /> Pour vous former à un poste précis avant d’être embauché.</li>
                                <li><ArrowRight size={18} /> <strong>AFPR :</strong> si vous êtes recruté en CDD ou mission intérim.</li>
                                <li><ArrowRight size={18} /> <strong>POE :</strong> si vous êtes recruté en CDI ou alternance.</li>
                            </ul>
                            <a href="https://www.service-public.fr/particuliers/vosdroits/F32553" target="_blank" rel="noopener noreferrer" className="card-link">
                                👉 Découvrir <ExternalLink size={16} />
                            </a>
                        </div>

                        {/* Conventions France Travail */}
                        <div className="finance-card">
                            <div className="icon-wrapper"><GraduationCap size={32} /></div>
                            <h2>FORMATIONS CONVENTIONNÉES FRANCE TRAVAIL</h2>
                            <ul className="feature-list">
                                <li><ArrowRight size={18} /> Formation financée directement par France Travail ou la Région.</li>
                                <li><ArrowRight size={18} /> Exemples : Prépa compétences, Prépa apprentissage, formations métiers…</li>
                            </ul>
                            <a href="https://www.francetravail.fr/candidat/en-formation.html" target="_blank" rel="noopener noreferrer" className="card-link">
                                👉 Infos sur les actions de formation <ExternalLink size={16} />
                            </a>
                        </div>

                        {/* CPF + Abondements */}
                        <div className="finance-card">
                            <div className="icon-wrapper"><Wallet size={32} /></div>
                            <h2>MOBILISATION DU CPF + ABONDEMENTS FRANCE TRAVAIL</h2>
                            <ul className="feature-list">
                                <li><ArrowRight size={18} /> Vous pouvez utiliser votre CPF et, si besoin, obtenir un financement complémentaire.</li>
                            </ul>
                            <a href="https://www.moncompteformation.gouv.fr/" target="_blank" rel="noopener noreferrer" className="card-link">
                                👉 Consulter votre compte CPF <ExternalLink size={16} />
                            </a>
                        </div>

                        {/* Aides Mobilité */}
                        <div className="finance-card">
                            <div className="icon-wrapper"><MapPin size={32} /></div>
                            <h2>AIDES À LA MOBILITÉ OU À L’HÉBERGEMENT</h2>
                            <ul className="feature-list">
                                <li><ArrowRight size={18} /> Certaines formations permettent aussi un soutien pour vos déplacements ou logements.</li>
                            </ul>
                            <a href="https://www.francetravail.fr/candidat/mes-droits-aux-aides-et-allocati/aides-a-la-mobilite.html" target="_blank" rel="noopener noreferrer" className="card-link">
                                👉 Aides complémentaires France Travail <ExternalLink size={16} />
                            </a>
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}
