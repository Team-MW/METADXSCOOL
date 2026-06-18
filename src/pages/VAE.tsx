import { Helmet } from 'react-helmet-async';
import { 
    BookOpen, 
    CheckCircle2, 
    Accessibility, 
    Users, 
    Euro, 
    TrendingUp, 
    ShieldCheck, 
    Search,
    ArrowRight,
    Star
} from 'lucide-react';

export default function VAE() {
    return (
        <>
            <Helmet>
                <title>VAE - Validation des Acquis de l'Expérience | Meta DX School</title>
                <meta name="description" content="Obtenez un diplôme reconnu grâce à votre expérience professionnelle. Accompagnement VAE personnalisé avec Meta DX School." />
            </Helmet>

            <style>{`
                .vae-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    color: #1e293b;
                    padding-bottom: 6rem;
                }

                .vae-hero {
                    background: linear-gradient(135deg, #1c1e4c 0%, #7c3aed 100%);
                    color: white;
                    padding: 8rem 2rem 6rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .vae-hero::before {
                    content: '';
                    position: absolute;
                    top: -50%; left: -10%;
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
                    border-radius: 50%;
                }

                .hero-container {
                    max-width: 1000px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .badge-version {
                    background: rgba(255, 255, 255, 0.15);
                    padding: 0.5rem 1.2rem;
                    border-radius: 50px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    display: inline-block;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }

                .vae-hero h1 {
                    font-size: 3.2rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                }

                .vae-hero p {
                    font-size: 1.3rem;
                    opacity: 0.95;
                    max-width: 850px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .main-layout {
                    max-width: 1200px;
                    margin: -4rem auto 0;
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 2.5rem;
                    padding: 0 2rem;
                    position: relative;
                    z-index: 10;
                }

                .info-card {
                    background: white;
                    border-radius: 24px;
                    padding: 2.5rem;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.06);
                    margin-bottom: 2.5rem;
                }

                .section-title {
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: #1c1e4c;
                    margin-bottom: 2rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    border-bottom: 2px solid #f1f5f9;
                    padding-bottom: 1rem;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2.5rem;
                }

                .stat-box {
                    background: #f8fafc;
                    padding: 1.5rem;
                    border-radius: 16px;
                    border-left: 4px solid #7c3aed;
                }

                .stat-label {
                    font-size: 0.75rem;
                    color: #64748b;
                    font-weight: 800;
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                    display: block;
                }

                .stat-value {
                    font-size: 1.1rem;
                    font-weight: 800;
                    color: #1c1e4c;
                }

                .check-list {
                    list-style: none;
                    padding: 0;
                }

                .check-list li {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1.25rem;
                    font-size: 1.05rem;
                    line-height: 1.6;
                    color: #475569;
                }

                .check-list li svg {
                    color: #7c3aed;
                    flex-shrink: 0;
                    margin-top: 4px;
                }

                .sidebar-card {
                    background: white;
                    border-radius: 24px;
                    padding: 2rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.04);
                    margin-bottom: 2rem;
                    border: 1px solid #f1f5f9;
                }

                .cta-sidebar {
                    background: #1c1e4c;
                    color: white;
                    border-radius: 24px;
                    padding: 2rem;
                    text-align: center;
                }

                .price-tag {
                    font-size: 1.8rem;
                    font-weight: 900;
                    color: #ef9a37;
                    margin-bottom: 1rem;
                }

                .btn-apply {
                    display: block;
                    background: #ef9a37;
                    color: white;
                    padding: 1rem;
                    border-radius: 12px;
                    text-decoration: none;
                    font-weight: 800;
                    margin-top: 1.5rem;
                    transition: all 0.2s;
                }

                .btn-apply:hover { transform: translateY(-3px); background: #f5a646; }

                .timeline {
                    margin-top: 2rem;
                }

                .timeline-item {
                    display: flex;
                    gap: 1.5rem;
                    margin-bottom: 2.5rem;
                    position: relative;
                }

                .timeline-item::after {
                    content: '';
                    position: absolute;
                    left: 20px;
                    top: 50px;
                    bottom: -20px;
                    width: 2px;
                    background: #e2e8f0;
                }

                .timeline-item:last-child::after { display: none; }

                .timeline-number {
                    width: 42px;
                    height: 42px;
                    background: #7c3aed;
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 900;
                    flex-shrink: 0;
                    z-index: 2;
                }

                .timeline-content h4 {
                    font-size: 1.2rem;
                    font-weight: 800;
                    color: #1c1e4c;
                    margin-bottom: 0.5rem;
                }

                .timeline-content p {
                    color: #475569;
                    line-height: 1.6;
                    font-size: 0.95rem;
                }

                .indicator-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: #f1f5f9;
                    padding: 0.5rem 1rem;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: #475569;
                }

                @media(max-width: 900px) {
                    .main-layout { grid-template-columns: 1fr; }
                    .vae-hero h1 { font-size: 2.5rem; }
                }
            `}</style>

            <div className="vae-page">
                <header className="vae-hero">
                    <div className="hero-container">
                        <span className="badge-version">V12 – MAJ 18/06/2026</span>
                        <h1>VALIDATION DES ACQUIS DE L'EXPÉRIENCE (VAE)</h1>
                        <p>
                            Transformez vos années d'expérience en un diplôme certifié et reconnu par l'État. Valorisez vos compétences sans retourner en formation initiale.
                        </p>
                    </div>
                </header>

                <div className="main-layout">
                    <div className="content-area">
                        {/* Pourquoi la VAE */}
                        <section className="info-card">
                            <h2 className="section-title"><TrendingUp /> Pourquoi choisir la VAE ?</h2>
                            <p style={{fontSize: '1.1rem', lineHeight: 1.8, color: '#475569', marginBottom: '2rem'}}>
                                Vous avez acquis des compétences précieuses tout au long de votre parcours professionnel ? La VAE de <strong>Meta DX School</strong> est un levier stratégique pour faire évoluer votre carrière, obtenir une promotion ou sécuriser votre employabilité.
                            </p>
                            <div className="stats-grid">
                                <div className="stat-box">
                                    <span className="stat-label">Public</span>
                                    <span className="stat-value">Tous profils (Salariés, Indépendants, Bénévoles)</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Délai d'accès</span>
                                    <span className="stat-value">7 jours après inscription</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">Condition</span>
                                    <span className="stat-value">+1 an d'expérience métier</span>
                                </div>
                            </div>
                            <ul className="check-list">
                                <li><ShieldCheck size={20} /> Obtenez un diplôme basé uniquement sur votre savoir-faire réel.</li>
                                <li><ShieldCheck size={20} /> Valorisez votre parcours sans suivre une formation théorique complète.</li>
                                <li><ShieldCheck size={20} /> Accédez à des opportunités de carrière et de rémunération supérieures.</li>
                            </ul>
                        </section>

                        {/* La Démarche */}
                        <section className="info-card">
                            <h2 className="section-title"><BookOpen /> Votre parcours VAE en 4 étapes</h2>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-number">1</div>
                                    <div className="timeline-content">
                                        <h4>Information & Conseil</h4>
                                        <p>Bénéficiez gratuitement des conseils d'un expert Meta DX School pour valider la pertinence de votre démarche et identifier le bon certificateur.</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-number">2</div>
                                    <div className="timeline-number">2</div>
                                    <div className="timeline-content">
                                        <h4>Recevabilité (Livret 1)</h4>
                                        <p>Vérification de l'adéquation expérience/certification via le formulaire Cerfa envoyé à la DDETS. Délai de réponse de 2 mois maximum.</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-number">3</div>
                                    <div className="timeline-content">
                                        <h4>Accompagnement (Le + Meta DXS)</h4>
                                        <p>Phase cruciale : aide à la constitution du dossier professionnel, simulations d'examens et préparation intensive à l'entretien avec le jury.</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-number">4</div>
                                    <div className="timeline-content">
                                        <h4>Session d'examen</h4>
                                        <p>Soutenance devant un jury de professionnels. Résultat : validation totale (diplôme obtenu), partielle ou refus.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Nos Atouts */}
                        <section className="info-card" style={{border: '2px solid #7c3aed'}}>
                            <h2 className="section-title" style={{color: '#7c3aed', borderBottomColor: '#f3e8ff'}}><Star /> L'expertise Meta DX School</h2>
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
                                <div>
                                    <h4 style={{fontWeight: 800, marginBottom: '1rem', color: '#1c1e4c'}}>Accompagnement Premium</h4>
                                    <p style={{fontSize: '0.9rem', color: '#64748b'}}>Un coach dédié vous suit de A à Z : de la recevabilité à la réussite finale. Nous ne vous laissons jamais seul face à votre dossier.</p>
                                </div>
                                <div>
                                    <h4 style={{fontWeight: 800, marginBottom: '1rem', color: '#1c1e4c'}}>Reconnaissance Nationale</h4>
                                    <p style={{fontSize: '0.9rem', color: '#64748b'}}>Toutes nos certifications sont enregistrées au RNCP et reconnues par l'État, garantissant une valeur internationale à votre diplôme.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <aside className="sidebar">
                        <div className="cta-sidebar">
                            <h3 style={{fontSize: '1.2rem', marginBottom: '1.5rem'}}>Démarrer ma VAE</h3>
                            <div className="price-tag">Sur Devis</div>
                            <p style={{fontSize: '0.85rem', opacity: 0.8, lineHeight: 1.5}}>Proposition tarifaire personnalisée sous 48h selon votre parcours.</p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-apply">DEMANDER UN DEVIS VAE</a>
                        </div>

                        <div className="sidebar-card" style={{marginTop: '2rem'}}>
                            <h4 style={{fontWeight: 900, marginBottom: '1rem', color: '#1c1e4c'}}><Euro size={20} style={{verticalAlign:'middle', marginRight:'5px'}}/> Financement</h4>
                            <p style={{fontSize: '0.85rem', color: '#64748b', marginBottom: '1rem'}}>La VAE peut être financée par :</p>
                            <ul style={{fontSize: '0.85rem', paddingLeft: '1.2rem', color: '#475569'}}>
                                <li style={{marginBottom: '0.5rem'}}>France Travail</li>
                                <li style={{marginBottom: '0.5rem'}}>OPCO (via votre employeur)</li>
                                <li>Compte Professionnel de Formation</li>
                            </ul>
                        </div>

                        <div className="sidebar-card">
                            <h4 style={{fontWeight: 900, marginBottom: '1.5rem', color: '#1c1e4c'}}><Search size={20} style={{verticalAlign:'middle', marginRight:'5px'}}/> Indicateurs 2025</h4>
                            <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                                <div className="indicator-pill"><Users size={16}/> 1 Candidat(s)</div>
                                <div className="indicator-pill"><CheckCircle2 size={16}/> Taux de réussite : /</div>
                                <div className="indicator-pill"><Star size={16}/> Satisfaction : /</div>
                            </div>
                        </div>

                        <div className="sidebar-card" style={{background:'#f0fdf4', borderColor:'#10b981'}}>
                            <h4 style={{fontWeight: 900, marginBottom: '1rem', color: '#065f46'}}><Accessibility size={20} style={{verticalAlign:'middle', marginRight:'5px'}}/> Accessibilité</h4>
                            <p style={{fontSize: '0.85rem', color: '#065f46'}}>Un accompagnement spécifique est disponible pour les personnes en situation de handicap.</p>
                            <a href="/ressources/handicap-engagement" style={{fontSize: '0.8rem', fontWeight: 800, color: '#059669', textDecoration:'none', marginTop:'1rem', display:'block'}}>En savoir plus <ArrowRight size={14}/></a>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
