import { Helmet } from 'react-helmet-async';
import { 
    ShieldCheck, 
    Heart, 
    Utensils,
    Clock, 
    Monitor, 
    Eye, 
    Sparkles
} from 'lucide-react';

export default function SanteSecuriteCatalogue() {
    const formations = [
        {
            title: "SAUVETEUR SECOURISTE DU TRAVAIL (SST) - INITIAL",
            desc: "Devenez un acteur de la prévention des risques au sein de votre entreprise et maîtrisez les gestes de secours indispensables pour sauver des vies.",
            duration: "2 JOURS (14 HEURES)",
            modalities: "INTRA / INTER / SUR MESURE",
            link: "/forma-secu/securite/sst-initial",
            icon: <ShieldCheck className="cat-icon" />,
            badge: "SECOURISME PRO"
        },
        {
            title: "MAINTIEN ET ACTUALISATION DES COMPÉTENCES SST (MAC)",
            desc: "Réactualisez vos connaissances théoriques et pratiques de secouriste de travail pour conserver la validité de votre certification INRS.",
            duration: "1 JOUR (7 HEURES)",
            modalities: "INTRA / INTER / SUR MESURE",
            link: "/forma-secu/securite/sst-mac",
            icon: <Heart className="cat-icon" />,
            badge: "SST RECYCLAGE"
        },
        {
            title: "HYGIÈNE ALIMENTAIRE EN RESTAURATION COMMERCIALE (HACCP)",
            desc: "Acquérez la méthodologie HACCP pour assurer la conformité réglementaire de votre établissement de restauration face aux règles sanitaires.",
            duration: "2 JOURS (14 HEURES)",
            modalities: "INTRA / INTER / SUR MESURE",
            link: "/forma-secu/alimentaire/haccp",
            icon: <Utensils className="cat-icon" />,
            badge: "HYGIÈNE ALIMENTAIRE"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Catalogue Santé & Sécurité au Travail | Meta DXS</title>
                <meta name="description" content="Découvrez nos formations certifiantes en Secourisme (SST) et en Hygiène Alimentaire (HACCP) pour assurer la conformité et la sécurité de vos collaborateurs." />
            </Helmet>

            <style>{`
                .catalogue-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    color: #1e293b;
                    padding-bottom: 6rem;
                }

                .cat-hero {
                    background: linear-gradient(135deg, #1c1e4c 0%, #3b82f6 100%);
                    color: white;
                    padding: 8rem 2rem 6rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .cat-hero::before {
                    content: '';
                    position: absolute;
                    top: -50%; right: -10%;
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

                .cat-hero h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                }

                .cat-hero p {
                    font-size: 1.3rem;
                    opacity: 0.9;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .main-content {
                    max-width: 1200px;
                    margin: -4rem auto 0;
                    padding: 0 2rem;
                    position: relative;
                    z-index: 10;
                }

                .cat-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 2rem;
                }

                .formation-card {
                    background: white;
                    border-radius: 24px;
                    padding: 2.5rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.04);
                    border: 1px solid #f1f5f9;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                }

                .formation-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 50px rgba(0,0,0,0.08);
                    border-color: #3b82f6;
                }

                .card-cat-badge {
                    background: #eff6ff;
                    color: #3b82f6;
                    padding: 0.4rem 1rem;
                    border-radius: 50px;
                    font-size: 0.75rem;
                    font-weight: 800;
                    display: inline-block;
                    margin-bottom: 1.5rem;
                }

                .card-icon-wrapper {
                    background: #f8fafc;
                    width: 60px;
                    height: 60px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                    color: #1c1e4c;
                    transition: all 0.3s;
                }

                .formation-card:hover .card-icon-wrapper {
                    background: #3b82f6;
                    color: white;
                }

                .cat-icon { width: 30px; height: 30px; }

                .formation-card h2 {
                    font-size: 1.4rem;
                    font-weight: 800;
                    color: #1c1e4c;
                    margin-bottom: 1rem;
                    line-height: 1.3;
                    min-height: 3.6rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .formation-card p {
                    font-size: 0.95rem;
                    color: #64748b;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                    flex-grow: 1;
                }

                .card-footer {
                    border-top: 1px solid #f1f5f9;
                    padding-top: 1.5rem;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }

                .footer-info {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: #475569;
                }

                .btn-view {
                    grid-column: span 2;
                    background: #1c1e4c;
                    color: white;
                    padding: 1rem;
                    border-radius: 12px;
                    text-align: center;
                    text-decoration: none;
                    font-weight: 800;
                    font-size: 0.9rem;
                    margin-top: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    transition: all 0.2s;
                }

                .btn-view:hover {
                    background: #ef9a37;
                    transform: scale(1.02);
                }

                @media(max-width: 768px) {
                    .cat-hero h1 { font-size: 2.22rem; }
                    .cat-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <div className="catalogue-page">
                <header className="cat-hero">
                    <div className="hero-container">
                        <span className="badge-title">CATALOGUE DE FORMATIONS</span>
                        <h1>SANTÉ & SÉCURITÉ AU TRAVAIL</h1>
                        <p>Assurez la protection de vos salariés et la conformité de votre établissement face aux exigences légales.</p>
                    </div>
                </header>

                <main className="main-content">
                    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '3rem'}}>
                        <div style={{background: '#1c1e4c', color: 'white', padding: '0.8rem 2rem', borderRadius: '50px', fontWeight: 800}}>
                            NOS MODULES DISPONIBLES
                        </div>
                    </div>

                    <div className="cat-grid">
                        {formations.map((f, idx) => (
                            <div className="formation-card" key={idx}>
                                <span className="card-cat-badge">{f.badge}</span>
                                <div className="card-icon-wrapper">
                                    {f.icon}
                                </div>
                                <h2>{f.title}</h2>
                                <p>{f.desc}</p>
                                <div className="card-footer">
                                    <div className="footer-info">
                                        <Clock size={14} color="#3b82f6" />
                                        {f.duration}
                                    </div>
                                    <div className="footer-info">
                                        <Monitor size={14} color="#3b82f6" />
                                        {f.modalities.split(' / ')[0]}...
                                    </div>
                                    <a href={f.link} className="btn-view">
                                        <Eye size={18} /> VOIR LA FORMATION DÉTAILLÉE
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{marginTop: '5rem', textAlign: 'center'}} className="info-card">
                        <Sparkles color="#ef9a37" size={48} style={{marginBottom:'1.5rem'}} />
                        <h2 style={{fontSize: '2rem', fontWeight: 900, color: '#1c1e4c'}}>BESOIN DE DÉPLOYER UN PLAN DE SÉCURITÉ ?</h2>
                        <p style={{maxWidth:'700px', margin: '1rem auto 2rem', color:'#64748b'}}>
                            Nos formateurs qualifiés interviennent directement dans vos locaux (Intra-entreprise) pour former des groupes complets de secouristes sur vos plateaux techniques.
                        </p>
                        <a href="/contact" style={{display:'inline-block', background:'#ef9a37', color:'white', padding:'1.2rem 3rem', borderRadius:'12px', fontWeight:800, textDecoration:'none', boxShadow:'0 10px 20px rgba(239, 154, 55, 0.2)'}}>
                            PLANIFIER UNE SESSION INTRA
                        </a>
                    </div>
                </main>
            </div>
        </>
    );
}
