import { Helmet } from 'react-helmet-async';
import { 
    Globe, 
    Plane, 
    Backpack, 
    TrendingUp, 
    ShieldCheck, 
    ArrowRight, 
    Mail, 
    ClipboardCheck,
    Map
} from 'lucide-react';

export default function Mobilite() {
    return (
        <>
            <Helmet>
                <title>La Mobilité - Meta DX School</title>
                <meta name="description" content="Ouvrez vos horizons avec Meta DX School. Accompagnement mobilité nationale et internationale (Erasmus+, Mouv'Occitanie, Passeport Mobilité)." />
            </Helmet>

            <style>{`
                .mobilite-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: 'Inter', sans-serif;
                    color: #1e293b;
                    padding-bottom: 6rem;
                }

                .hero-section {
                    background: linear-gradient(135deg, #1c1e4c 0%, #3b82f6 100%);
                    color: white;
                    padding: 9rem 2rem 6rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .hero-container {
                    max-width: 1000px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .tagline {
                    background: rgba(255, 255, 255, 0.15);
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    font-size: 0.9rem;
                    font-weight: 700;
                    letter-spacing: 0.05em;
                    display: inline-block;
                    margin-bottom: 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }

                .hero-section h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                    line-height: 1.1;
                }

                .hero-desc {
                    font-size: 1.25rem;
                    opacity: 0.95;
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .section-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 4rem 2rem 0;
                }

                .intro-text {
                    background: white;
                    padding: 3rem;
                    border-radius: 24px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.05);
                    margin-top: -4rem;
                    position: relative;
                    z-index: 10;
                    border: 1px solid #e2e8f0;
                }

                .section-title {
                    font-size: 2rem;
                    font-weight: 900;
                    color: #1c1e4c;
                    margin-bottom: 3rem;
                    text-align: center;
                    text-transform: uppercase;
                }

                /* GRID BENEFITS */
                .benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                    margin-bottom: 5rem;
                }

                .benefit-card {
                    background: white;
                    padding: 2.5rem;
                    border-radius: 20px;
                    border: 1px solid #e2e8f0;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .benefit-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                    border-color: #3b82f6;
                }

                .benefit-icon {
                    width: 56px; height: 56px;
                    background: #eff6ff;
                    color: #3b82f6;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                }

                .benefit-card h3 {
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: #1c1e4c;
                    margin-bottom: 1rem;
                    line-height: 1.3;
                }

                .benefit-card p {
                    font-size: 0.95rem;
                    line-height: 1.6;
                    color: #475569;
                }

                /* SOLUTIONS */
                .solutions-section {
                    background: #1c1e4c;
                    color: white;
                    padding: 5rem 2rem;
                    border-radius: 40px;
                    margin-top: 5rem;
                }

                .solutions-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2.5rem;
                    margin-top: 3rem;
                }

                .solution-box {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 2.5rem;
                    border-radius: 24px;
                    transition: all 0.3s;
                }
                .solution-box:hover {
                    background: rgba(255, 255, 255, 0.1);
                    transform: scale(1.02);
                }

                .solution-box h3 {
                    font-size: 1.2rem;
                    font-weight: 800;
                    color: #ef9a37;
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .solution-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .solution-list li {
                    display: flex;
                    gap: 0.75rem;
                    font-size: 0.95rem;
                    margin-bottom: 1rem;
                    opacity: 0.9;
                }

                /* CONTACT */
                .contact-card {
                    background: #f1f5f9;
                    border-radius: 24px;
                    padding: 4rem;
                    margin-top: 5rem;
                    text-align: center;
                    border: 1px solid #e2e8f0;
                }

                .contact-card h2 {
                    font-size: 2.5rem;
                    font-weight: 900;
                    color: #1c1e4c;
                    margin-bottom: 1.5rem;
                }

                .contact-info {
                    display: flex;
                    justify-content: center;
                    gap: 3rem;
                    margin: 3rem 0;
                }

                .btn-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.75rem;
                    background: #ef9a37;
                    color: white;
                    padding: 1.25rem 2.5rem;
                    border-radius: 50px;
                    font-weight: 800;
                    text-decoration: none;
                    transition: all 0.3s;
                    box-shadow: 0 10px 20px rgba(239, 154, 55, 0.3);
                }

                .btn-cta:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 30px rgba(239, 154, 55, 0.5);
                    background: #f5a646;
                }

                @media (max-width: 900px) {
                    .hero-section h1 { font-size: 2.2rem; }
                    .solutions-grid { grid-template-columns: 1fr; }
                    .contact-info { flex-direction: column; gap: 1.5rem; }
                    .contact-card { padding: 2rem; }
                }
            `}</style>

            <div className="mobilite-page">
                <header className="hero-section">
                    <div className="hero-container">
                        <div className="tagline">OUVRIR SON HORIZON</div>
                        <h1>LA MOBILITÉ</h1>
                        <p className="hero-desc">
                            Chez Meta DX School, nous accompagnons nos apprenants dans leurs projets de mobilité, 
                            que ce soit en France ou à l'international.
                        </p>
                    </div>
                </header>

                <div className="section-container">
                    <div className="intro-text text-center">
                        <h2 className="section-title">À QUI S'ADRESSE LA MOBILITÉ ?</h2>
                        <p style={{fontSize: '1.1rem', color: '#475569', maxWidth: '800px', margin: '0 auto 3rem'}}>
                            La mobilité nationale ou internationale est ouverte à toutes et tous, quel que soit votre parcours !
                        </p>
                        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem'}}>
                            {['Alternants', 'Apprentis', 'Professionnels', 'Reconversion', 'Ultra-Marins'].map(tag => (
                                <span key={tag} style={{background: '#eff6ff', color: '#3b82f6', padding: '0.6rem 1.2rem', borderRadius: '50px', fontWeight: 800, border: '1px solid #dbeafe'}}>
                                    # {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div style={{marginTop: '6rem'}}>
                        <h2 className="section-title">POURQUOI PARTIR EN MOBILITÉ ?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <div className="benefit-icon"><Globe /></div>
                                <h3>COMPÉTENCES LINGUISTIQUES</h3>
                                <p>Étudier dans un autre environnement vous pousse à pratiquer une langue étrangère quotidiennement et renforce votre agilité professionnelle.</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon"><TrendingUp /></div>
                                <h3>VALORISER SON CV</h3>
                                <p>Un atout majeur montrant aux recuteurs votre capacité à sortir de votre zone de confort, votre autonomie et votre adaptabilité.</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon"><Map /></div>
                                <h3>CULTURES PROS</h3>
                                <p>Découvrez d'autres codes et pratiques de travail pour enrichir votre vision du monde professionnel et développer votre esprit critique.</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon"><ShieldCheck /></div>
                                <h3>DÉVELOPPER SON AUTONOMIE</h3>
                                <p>Faire face à de nouveaux défis loin de votre cadre habituel vous fait progresser personnellement autant que professionnellement.</p>
                            </div>
                        </div>
                    </div>

                    <section className="solutions-section">
                        <h2 className="section-title" style={{color: 'white'}}>NOS SOLUTIONS DE MOBILITÉ</h2>
                        <div className="solutions-grid">
                            <div className="solution-box">
                                <h3><Plane /> ERASMUS+</h3>
                                <ul className="solution-list">
                                    <li>✈️ Prise en charge transport & hébergement</li>
                                    <li>🗣️ Soutien linguistique dédié</li>
                                    <li>🤝 Accompagnement par un référent</li>
                                    <li>⏱️ Durée de 2 semaines à 12 mois</li>
                                </ul>
                            </div>
                            <div className="solution-box">
                                <h3><Globe /> ULTRA-MARINE</h3>
                                <ul className="solution-list">
                                    <li>🏝️ Passeport Mobilité Formation</li>
                                    <li>🚢 Aide spécifique aux ultra-marins</li>
                                    <li>📑 Gestion administrative simplifiée</li>
                                    <li>📦 Soutien logistique global</li>
                                </ul>
                            </div>
                            <div className="solution-box">
                                <h3><Backpack /> MOUV'OCCITANIE</h3>
                                <ul className="solution-list">
                                    <li>🏛️ Dispositifs régionaux spécifiques</li>
                                    <li>💰 Bourses de mobilité locales</li>
                                    <li>🎓 Ouvert aux jeunes de 15 à 30 ans</li>
                                    <li>🏗️ Parcours professionnels sécurisés</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{textAlign: 'center', marginTop: '3rem', opacity: 0.7, fontSize: '0.85rem'}}>
                            Source : Erasmus+ Alternance – Loi Mobilité 2024
                        </div>
                    </section>

                    <div className="contact-card">
                        <div style={{fontSize: '4rem', marginBottom: '1.5rem'}}>💡</div>
                        <h2>UN PROJET ? DES QUESTIONS ?</h2>
                        <p style={{fontSize: '1.1rem', color: '#475569', marginBottom: '2rem'}}>
                            Notre référente mobilité <strong>Sarah LACHEROY</strong> vous accompagne pour discuter de votre projet de A à Z.
                        </p>
                        
                        <div className="contact-info">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-cta">
                                <ClipboardCheck /> PREMIER CONTACT
                            </a>
                            <a href="mailto:contact@metadxs.com" className="btn-cta" style={{background: '#1c1e4c', boxShadow: '0 10px 20px rgba(28, 30, 76, 0.2)'}}>
                                <Mail /> NOUS ÉCRIRE
                            </a>
                        </div>
                        
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#3b82f6', fontWeight: 800}}>
                            <ArrowRight size={20} />
                            <span>REMPLISSEZ LE QUESTIONNAIRE DE PREMIER CONTACT</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
