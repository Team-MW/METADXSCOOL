import { Helmet } from 'react-helmet-async';
import { 
    Clock,
    ArrowRight,
    Users,
    Briefcase,
    Zap,
    ShieldCheck,
    Handshake
} from 'lucide-react';

export default function POEI() {
    return (
        <>
            <Helmet>
                <title>POEI - Préparation Opérationnelle à l'Emploi Individuelle | Meta DX School</title>
                <meta name="description" content="Découvrez la POEI : formez vos futurs salariés avant l'embauche avec Meta DX School. Dispositif financé par France Travail." />
            </Helmet>

            <style>{`
                .poei-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    color: #1e293b;
                    padding-bottom: 6rem;
                }

                .poei-hero {
                    background: linear-gradient(135deg, #1c1e4c 0%, #3b82f6 100%);
                    color: white;
                    padding: 8rem 2rem 6rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .poei-hero::before {
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

                .badge-title {
                    background: rgba(255, 255, 255, 0.15);
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    display: inline-block;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }

                .poei-hero h1 {
                    font-size: 3rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                }

                .poei-hero p {
                    font-size: 1.3rem;
                    opacity: 0.95;
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
                }

                .intro-card {
                    background: white;
                    border-radius: 24px;
                    padding: 3rem;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.06);
                    margin-bottom: 3rem;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                    align-items: center;
                }

                .intro-text h2 {
                    font-size: 1.8rem;
                    font-weight: 800;
                    color: #1c1e4c;
                    margin-bottom: 1.5rem;
                }

                .intro-text p {
                    font-size: 1.1rem;
                    line-height: 1.7;
                    color: #475569;
                    margin-bottom: 1rem;
                }

                .highlight-box {
                    background: #f0f9ff;
                    padding: 2rem;
                    border-radius: 20px;
                    border-left: 6px solid #ef9a37;
                }

                .highlight-item {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .highlight-item:last-child { margin-bottom: 0; }

                .highlight-icon {
                    background: white;
                    color: #ef9a37;
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
                }

                .highlight-content h4 {
                    font-weight: 800;
                    color: #1c1e4c;
                    margin-bottom: 0.25rem;
                }

                .highlight-content p {
                    font-size: 0.9rem;
                    color: #64748b;
                    margin: 0;
                }

                .section-title {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .section-title h2 {
                    font-size: 2.2rem;
                    font-weight: 900;
                    color: #1c1e4c;
                }

                .section-title p {
                    color: #64748b;
                    font-size: 1.1rem;
                }

                .grid-2 {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2.5rem;
                    margin-bottom: 4rem;
                }

                .advantage-card {
                    background: white;
                    border-radius: 24px;
                    padding: 2.5rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.04);
                    border: 1px solid #f1f5f9;
                    position: relative;
                    overflow: hidden;
                }

                .advantage-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0;
                    width: 6px; height: 100%;
                }

                .advantage-card.enterprise::before { background: #3b82f6; }
                .advantage-card.candidate::before { background: #10b981; }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .card-icon {
                    padding: 0.75rem;
                    border-radius: 12px;
                }

                .enterprise .card-icon { background: #eff6ff; color: #3b82f6; }
                .candidate .card-icon { background: #ecfdf5; color: #10b981; }

                .card-header h3 {
                    font-size: 1.4rem;
                    font-weight: 800;
                    color: #1c1e4c;
                    margin: 0;
                }

                .check-list {
                    list-style: none;
                    padding: 0;
                }

                .check-list li {
                    display: flex;
                    gap: 0.75rem;
                    margin-bottom: 1.25rem;
                    font-size: 1rem;
                    color: #475569;
                    line-height: 1.5;
                }

                .check-list li svg {
                    flex-shrink: 0;
                    margin-top: 4px;
                }

                .enterprise li svg { color: #3b82f6; }
                .candidate li svg { color: #10b981; }

                .steps-timeline {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 1.5rem;
                    margin-top: 2rem;
                    position: relative;
                }

                .step-item {
                    text-align: center;
                    position: relative;
                    z-index: 2;
                }

                .step-circle {
                    width: 50px;
                    height: 50px;
                    background: #1c1e4c;
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 900;
                    font-size: 1.25rem;
                    margin: 0 auto 1.5rem;
                    border: 4px solid #fff;
                    box-shadow: 0 0 0 4px #f1f5f9;
                }

                .step-item h4 {
                    font-size: 0.95rem;
                    font-weight: 800;
                    color: #1c1e4c;
                    margin-bottom: 0.75rem;
                }

                .step-item p {
                    font-size: 0.85rem;
                    color: #64748b;
                    line-height: 1.4;
                }

                .final-cta {
                    background: linear-gradient(135deg, #1c1e4c 0%, #171942 100%);
                    color: white;
                    border-radius: 24px;
                    padding: 4rem 2rem;
                    text-align: center;
                    margin-top: 4rem;
                }
                
                .btn-contact {
                    display: inline-block;
                    background: #ef9a37;
                    color: white;
                    padding: 1.2rem 3rem;
                    border-radius: 12px;
                    font-weight: 800;
                    text-decoration: none;
                    margin-top: 2rem;
                    transition: transform 0.2s, background 0.2s;
                    box-shadow: 0 10px 20px rgba(239, 154, 55, 0.2);
                }
                .btn-contact:hover { transform: translateY(-3px); background: #f5a646; }

                @media(max-width: 900px) {
                    .intro-card, .grid-2 { grid-template-columns: 1fr; }
                    .steps-timeline { grid-template-columns: 1fr; gap: 3rem; }
                    .poei-hero h1 { font-size: 2.2rem; }
                }
            `}</style>

            <div className="poei-page">
                <header className="poei-hero">
                    <div className="hero-container">
                        <span className="badge-title">DISPOSITIF FRANCE TRAVAIL</span>
                        <h1>PRÉPARATION OPÉRATIONNELLE À L'EMPLOI INDIVIDUELLE (POEI)</h1>
                        <p>
                            Formez vos futurs talents sur-mesure avant leur embauche. Un dispositif gagnant-gagnant pour sécuriser vos recrutements.
                        </p>
                    </div>
                </header>

                <main className="main-content">
                    <section className="intro-card">
                        <div className="intro-text">
                            <h2>QU’EST-CE QUE LA POEI ?</h2>
                            <p>
                                La POEI est un dispositif financé par <strong>France Travail</strong> qui permet aux entreprises de former un futur salarié avant son embauche.
                            </p>
                            <p>
                                C'est l'outil idéal pour adapter précisément les compétences d'un candidat à un poste spécifique au sein de votre organisation.
                            </p>
                            <div className="objective-box" style={{marginTop:'2rem', background:'#f0fdf4', borderColor:'#10b981', color:'#065f46'}}>
                                <Zap size={20} style={{marginRight:'0.5rem', display:'inline-block'}} />
                                FIN : Sécuriser le recrutement en garantissant que le salarié est immédiatement opérationnel.
                            </div>
                        </div>
                        <div className="highlight-box">
                            <div className="highlight-item">
                                <div className="highlight-icon"><Clock size={20} /></div>
                                <div className="highlight-content">
                                    <h4>Formation Courte</h4>
                                    <p>Jusqu'à 600 heures de formation ciblée.</p>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <div className="highlight-icon"><ArrowRight size={20} /></div>
                                <div className="highlight-content">
                                    <h4>Parcours Adapté</h4>
                                    <p>Théorie en centre et pratique en entreprise.</p>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <div className="highlight-icon"><ShieldCheck size={20} /></div>
                                <div className="highlight-content">
                                    <h4>Recrutement Sûr</h4>
                                    <p>Validation des compétences avant le contrat.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="advantages">
                        <div className="section-title">
                            <h2>DÉCOUVREZ VOS AVANTAGES</h2>
                            <p>Une solution optimisée pour les entreprises et les candidats</p>
                        </div>
                        <div className="grid-2">
                            <div className="advantage-card enterprise">
                                <div className="card-header">
                                    <div className="card-icon"><Briefcase size={28} /></div>
                                    <h3>POUR L'ENTREPRISE</h3>
                                </div>
                                <ul className="check-list">
                                    <li><ShieldCheck size={20} /> Répondre à un besoin précis de compétences métier.</li>
                                    <li><ShieldCheck size={20} /> Transmettre vos méthodes et votre culture d'entreprise dès le départ.</li>
                                    <li><ShieldCheck size={20} /> Prise en charge du coût de formation par France Travail et les OPCO.</li>
                                    <li><ShieldCheck size={20} /> Réduction du risque de "mauvais recrutement".</li>
                                </ul>
                            </div>
                            <div className="advantage-card candidate">
                                <div className="card-header">
                                    <div className="card-icon"><Users size={28} /></div>
                                    <h3>POUR LE CANDIDAT</h3>
                                </div>
                                <ul className="check-list">
                                    <li><ShieldCheck size={20} color="#10b981" /> Accéder à une formation entièrement financée et rémunérée.</li>
                                    <li><ShieldCheck size={20} color="#10b981" /> Développer des compétences recherchées sur le marché.</li>
                                    <li><ShieldCheck size={20} color="#10b981" /> Accompagnement personnalisé par META DXS Conseils.</li>
                                    <li><ShieldCheck size={20} color="#10b981" /> Accès direct à un emploi stable (CDI, CDD {'\u003e'} 6 mois, Alternance).</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="how-it-works">
                        <div className="section-title">
                            <h2>COMMENT ÇA MARCHE ?</h2>
                            <p>5 étapes simples vers votre futur poste ou salarié</p>
                        </div>
                        <div className="steps-timeline">
                            <div className="step-item">
                                <div className="step-circle">1</div>
                                <h4>BESOIN</h4>
                                <p>L'entreprise identifie un besoin de recrutement spécifique.</p>
                            </div>
                            <div className="step-item">
                                <div className="step-circle">2</div>
                                <h4>VALIDATION</h4>
                                <p>France Travail et l'OPCO valident la mise en place du dispositif.</p>
                            </div>
                            <div className="step-item">
                                <div className="step-circle">3</div>
                                <h4>CONCEPTION</h4>
                                <p>META DXS conçoit le programme sur-mesure avec l'entreprise.</p>
                            </div>
                            <div className="step-item">
                                <div className="step-circle">4</div>
                                <h4>FORMATION</h4>
                                <p>Le candidat suit son parcours théorique et pratique.</p>
                            </div>
                            <div className="step-item">
                                <div className="step-circle">5</div>
                                <h4>EMBAUCHE</h4>
                                <p>Le candidat intègre l'entreprise sur son nouveau poste.</p>
                            </div>
                        </div>
                    </section>

                    <div className="final-cta">
                        <Handshake size={48} color="#ef9a37" style={{marginBottom:'1rem'}} />
                        <h2>Prêt à lancer votre POEI ?</h2>
                        <p style={{opacity:0.8, marginTop:'1rem'}}>META DXS vous accompagne dans toutes les démarches administratives et pédagogiques.</p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-contact">
                            INITIALISER MON PROJET POEI
                        </a>
                    </div>
                </main>
            </div>
        </>
    );
}
