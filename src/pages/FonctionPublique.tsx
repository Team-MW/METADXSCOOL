import { Helmet } from 'react-helmet-async';
import { CalendarClock, Wallet, HeartHandshake, ExternalLink, ArrowRight } from 'lucide-react';

export default function FonctionPublique() {
    return (
        <>
            <Helmet>
                <title>Financements Fonction Publique | Meta DX School</title>
                <meta name="description" content="Découvrez les dispositifs de financement pour la fonction publique : Congé de Formation, CPF spécifique et FIPHFP." />
            </Helmet>

            <style>{`
                .fp-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    padding-bottom: 6rem;
                    color: #1e293b;
                }

                .fp-hero {
                    background: linear-gradient(135deg, #1c1e4c 0%, #10b981 100%);
                    color: white;
                    padding: 8rem 2rem 5rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .fp-hero::before {
                    content: '';
                    position: absolute;
                    top: -50%; left: -20%;
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%);
                    border-radius: 50%;
                }

                .fp-hero-container {
                    max-width: 900px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .badge-title {
                    background: rgba(255, 255, 255, 0.2);
                    color: #d1fae5;
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                    display: inline-block;
                    margin-bottom: 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }

                .fp-hero h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                    line-height: 1.2;
                }

                .fp-hero p {
                    font-size: 1.3rem;
                    opacity: 0.95;
                    font-weight: 500;
                }

                .fp-content {
                    max-width: 1000px;
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
                    border-color: #10b981;
                }

                .icon-wrapper {
                    width: 70px;
                    height: 70px;
                    background: linear-gradient(135deg, #1c1e4c 0%, #10b981 100%);
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin-bottom: 2rem;
                    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2);
                }
                .finance-card:nth-child(even) .icon-wrapper {
                    background: linear-gradient(135deg, #ef9a37 0%, #10b981 100%);
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
                    color: #10b981;
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
                    .fp-hero h1 { font-size: 2.1rem; }
                    .finance-card { padding: 2rem; }
                    .cards-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <div className="fp-page">
                <header className="fp-hero">
                    <div className="fp-hero-container">
                        <div className="badge-title">FINANCEMENTS</div>
                        <h1>VOUS TRAVAILLEZ DANS LA FONCTION PUBLIQUE ?</h1>
                        <p>FONCTIONNAIRE OU CONTRACTUEL, DÉCOUVREZ VOS DROITS ET VOS AIDES À LA FORMATION.</p>
                    </div>
                </header>

                <main className="fp-content">
                    <div className="cards-grid">
                        
                        {/* CFP */}
                        <div className="finance-card">
                            <div className="icon-wrapper"><CalendarClock size={32} /></div>
                            <h2>CONGÉ DE FORMATION PROFESSIONNELLE (CFP)</h2>
                            <ul className="feature-list">
                                <li><ArrowRight size={18} /> Permet de suivre une formation longue, avec maintien partiel de la rémunération (85 % pendant un an max).</li>
                                <li><ArrowRight size={18} /> Peut être mobilisé pour une reconversion, une évolution ou une montée en compétences.</li>
                            </ul>
                            <a href="https://www.fonction-publique.gouv.fr/etre-agent-public/mon-parcours-professionnel/formation/conge-de-formation-professionnelle-cfp-dans-la-fonction-publique-de-letat" target="_blank" rel="noopener noreferrer" className="card-link">
                                👉 Modalités du CFP <ExternalLink size={16} />
                            </a>
                        </div>

                        {/* CPF */}
                        <div className="finance-card">
                            <div className="icon-wrapper"><Wallet size={32} /></div>
                            <h2>LE COMPTE PERSONNEL DE FORMATION (CPF)</h2>
                            <ul className="feature-list">
                                <li><ArrowRight size={18} /> Les agents publics disposent aussi d’un CPF (modalités spécifiques).</li>
                                <li><ArrowRight size={18} /> Mobilisable sur le temps de travail avec accord, ou en dehors avec autorisation.</li>
                            </ul>
                            <a href="https://www.moncompteformation.gouv.fr/" target="_blank" rel="noopener noreferrer" className="card-link">
                                👉 CPF fonction publique <ExternalLink size={16} />
                            </a>
                        </div>

                        {/* FIPHFP */}
                        <div className="finance-card">
                            <div className="icon-wrapper"><HeartHandshake size={32} /></div>
                            <h2>FIPHFP <span style={{fontSize:'1.1rem', fontWeight:600, color:'#64748b'}}>(Si situation de handicap)</span></h2>
                            <ul className="feature-list">
                                <li><ArrowRight size={18} /> Financements et accompagnements renforcés pour les agents publics en situation de handicap.</li>
                            </ul>
                            <a href="https://www.fiphfp.fr/" target="_blank" rel="noopener noreferrer" className="card-link">
                                👉 Site du FIPHFP <ExternalLink size={16} />
                            </a>
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}
