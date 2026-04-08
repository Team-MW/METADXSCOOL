import { Helmet } from 'react-helmet-async';
import { 
    Compass, 
    Clock, 
    Accessibility, 
    Users, 
    Euro, 
    ShieldCheck, 
    Search,
    ArrowRight,
    Star,
    Layout,
    Briefcase,
    Gem
} from 'lucide-react';

export default function BilanCompetences() {
    return (
        <>
            <Helmet>
                <title>Bilan de Compétences | Meta DX School</title>
                <meta name="description" content="Réalisez votre bilan de compétences avec Meta DX School. 24h d'accompagnement pour booster votre carrière et réussir votre reconversion." />
            </Helmet>

            <style>{`
                .bilan-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    color: #1e293b;
                    padding-bottom: 6rem;
                }

                .bilan-hero {
                    background: linear-gradient(135deg, #1c1e4c 0%, #10b981 100%);
                    color: white;
                    padding: 8rem 2rem 6rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .bilan-hero::before {
                    content: '';
                    position: absolute;
                    bottom: -20%; right: -10%;
                    width: 500px; height: 500px;
                    background: radial-gradient(circle, rgba(239, 154, 55, 0.1) 0%, transparent 70%);
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

                .bilan-hero h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                }

                .bilan-hero p {
                    font-size: 1.3rem;
                    opacity: 0.95;
                    max-width: 800px;
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

                .feature-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-top: 2rem;
                }

                .feature-item {
                    display: flex;
                    gap: 1rem;
                    background: #f8fafc;
                    padding: 1.5rem;
                    border-radius: 16px;
                    transition: transform 0.2s;
                }

                .feature-item:hover { transform: translateY(-5px); }

                .icon-box {
                    background: white;
                    color: #10b981;
                    padding: 0.75rem;
                    border-radius: 12px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .sidebar-card {
                    background: white;
                    border-radius: 24px;
                    padding: 2rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.04);
                    margin-bottom: 2rem;
                    border: 1px solid #f1f5f9;
                }

                .price-card {
                    background: #1c1e4c;
                    color: white;
                    border-radius: 24px;
                    padding: 2.5rem 2rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .price-tag {
                    font-size: 2.5rem;
                    font-weight: 900;
                    color: #ef9a37;
                    margin: 1rem 0;
                }

                .btn-apply {
                    display: block;
                    background: #ef9a37;
                    color: white;
                    padding: 1.1rem;
                    border-radius: 12px;
                    text-decoration: none;
                    font-weight: 800;
                    margin-top: 1.5rem;
                    transition: all 0.2s;
                }

                .btn-apply:hover { transform: translateY(-3px); background: #f5a646; }

                .pill-info {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .info-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: #475569;
                    background: #f1f5f9;
                    padding: 0.6rem 1rem;
                    border-radius: 50px;
                }

                @media(max-width: 900px) {
                    .main-layout { grid-template-columns: 1fr; }
                    .feature-grid { grid-template-columns: 1fr; }
                    .bilan-hero h1 { font-size: 2.8rem; }
                }
            `}</style>

            <div className="bilan-page">
                <header className="bilan-hero">
                    <div className="hero-container">
                        <span className="badge-version">V5 – MAJ 26/08/2025</span>
                        <h1>BILAN DE COMPÉTENCES</h1>
                        <p>
                            Mieux vous connaître pour mieux réussir. Un accompagnement de 24 heures pour révéler votre potentiel et construire votre futur projet professionnel.
                        </p>
                    </div>
                </header>

                <div className="main-layout">
                    <div className="content-area">
                        {/* Pour qui ? */}
                        <section className="info-card">
                            <h2 className="section-title"><Users /> Public concerné</h2>
                            <p style={{marginBottom: '2rem', fontSize: '1.1rem', color: '#475569', lineHeight: 1.7}}>
                                Ce bilan s'adresse à toute personne désireuse de faire le point sur sa carrière et d'envisager une évolution épanouissante.
                            </p>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <div className="icon-box"><Briefcase size={24}/></div>
                                    <div>
                                        <h4 style={{fontWeight: 800, color: '#1c1e4c'}}>Salarié & Indépendant</h4>
                                        <p style={{fontSize:'0.85rem', color:'#64748b', marginTop:'4px'}}>Chef.fe d'entreprise ou collaborateur en recherche de progression.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="icon-box"><Search size={24}/></div>
                                    <div>
                                        <h4 style={{fontWeight: 800, color: '#1c1e4c'}}>Demandeur d'emploi</h4>
                                        <p style={{fontSize:'0.85rem', color:'#64748b', marginTop:'4px'}}>En reconversion ou en recherche de sa nouvelle voie professionnelle.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="objective-box" style={{marginTop:'2rem', background:'#f0f9ff', borderColor:'#3b82f6', color:'#1e40af', padding:'1.5rem', borderRadius:'16px', borderLeft:'5px solid #3b82f6', fontWeight: 700}}>
                                PRÉREQUIS : Avoir au moins 18 ans et valider l'adéquation du bilan lors d'un entretien préalable gratuit.
                            </div>
                        </section>

                        {/* Nos Plus */}
                        <section className="info-card">
                            <h2 className="section-title" style={{color: '#10b981', borderBottomColor: '#ecfdf5'}}><Gem /> L'avantage Meta DX School</h2>
                            <div style={{display: 'grid', gap: '1.25rem'}}>
                                <div style={{display:'flex', gap:'1rem', alignItems:'flex-start'}}>
                                    <div style={{background:'#ecfdf5', color:'#10b981', padding:'8px', borderRadius:'8px'}}><ShieldCheck size={20}/></div>
                                    <div>
                                        <h4 style={{fontWeight: 800, color: '#1c1e4c'}}>Suivi Ultra-Personnalisé</h4>
                                        <p style={{fontSize:'0.95rem', color:'#475569'}}>Un consultant expert dédié vous accompagne de la réflexion initiale à la mise en œuvre finale.</p>
                                    </div>
                                </div>
                                <div style={{display:'flex', gap:'1rem', alignItems:'flex-start'}}>
                                    <div style={{background:'#ecfdf5', color:'#10b981', padding:'8px', borderRadius:'8px'}}><Layout size={20}/></div>
                                    <div>
                                        <h4 style={{fontWeight: 800, color: '#1c1e4c'}}>Échanges & Ateliers Pratiques</h4>
                                        <p style={{fontSize:'0.95rem', color:'#475569'}}>Accès à une base de données métiers, ateliers CV et préparation aux entretiens de recrutement.</p>
                                    </div>
                                </div>
                                <div style={{display:'flex', gap:'1rem', alignItems:'flex-start'}}>
                                    <div style={{background:'#ecfdf5', color:'#10b981', padding:'8px', borderRadius:'8px'}}><Compass size={20}/></div>
                                    <div>
                                        <h4 style={{fontWeight: 800, color: '#1c1e4c'}}>Espace Personnel Dédié</h4>
                                        <p style={{fontSize:'0.95rem', color:'#475569'}}>Un environnement numérique pour suivre votre progression et accéder à toutes vos ressources.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <aside className="sidebar">
                        {/* PRICE & MODALITY */}
                        <div className="price-card">
                            <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem', opacity: 0.9}}>Format Intensif</h3>
                            <div className="price-tag">2 000 €</div>
                            <div style={{fontSize: '0.9rem', marginBottom:'1.5rem'}}>24 heures d'accompagnement</div>
                            <div className="pill-info">
                                <div className="info-item" style={{background:'rgba(255,255,255,0.1)', color:'white'}}><Clock size={16}/> 7j de délai d'accès</div>
                                <div className="info-item" style={{background:'rgba(255,255,255,0.1)', color:'white'}}><Layout size={16}/> Présentiel ou Distanciel</div>
                            </div>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-apply">RÉSERVER MON BILAN</a>
                        </div>

                        {/* FINANCEMENT */}
                        <div className="sidebar-card" style={{marginTop:'2rem'}}>
                            <h4 style={{fontWeight: 900, marginBottom: '1.2rem', color: '#1c1e4c'}}><Euro size={20} style={{verticalAlign:'middle', marginRight:'5px'}}/> Financement</h4>
                            <p style={{fontSize:'0.85rem', color:'#64748b', marginBottom:'1rem'}}>Le bilan peut être financé via :</p>
                            <ul style={{fontSize:'0.85rem', paddingLeft:'1.2rem', color:'#475569', lineHeight: 1.6}}>
                                <li>OPCO (via votre employeur)</li>
                                <li>CPF (Compte Personnel de Formation)</li>
                                <li>Paiement personnel (échelonnement possible)</li>
                            </ul>
                        </div>

                        {/* STATS */}
                        <div className="sidebar-card">
                            <h4 style={{fontWeight: 900, marginBottom: '1.5rem', color: '#1c1e4c'}}><Star size={20} style={{verticalAlign:'middle', marginRight:'5px'}}/> Chiffres 2023-24</h4>
                            <div style={{display:'grid', gridTemplateColumns:'1fr', gap:'0.75rem'}}>
                                <div style={{display:'flex', alignItems:'center', gap:'0.5rem', background:'#ecfdf5', color:'#065f46', padding:'10px 15px', borderRadius:'10px', fontSize:'0.9rem', fontWeight:800}}>
                                    100% Satisfaction
                                </div>
                                <div style={{display:'flex', alignItems:'center', gap:'0.5rem', background:'#f1f5f9', color:'#475569', padding:'10px 15px', borderRadius:'10px', fontSize:'0.9rem', fontWeight:800}}>
                                    1 Candidat accompagné
                                </div>
                            </div>
                        </div>

                        {/* ACCESSIBILITE */}
                        <div className="sidebar-card" style={{background:'#fffbeb', borderColor:'#fbbf24'}}>
                            <h4 style={{fontWeight: 900, marginBottom: '1rem', color: '#92400e'}}><Accessibility size={20} style={{verticalAlign:'middle', marginRight:'5px'}}/> Accessibilité</h4>
                            <p style={{fontSize: '0.85rem', color: '#92400e'}}>Étude de faisabilité systématique pour adapter les modalités à votre situation de handicap.</p>
                            <a href="/ressources/handicap-engagement" style={{fontSize: '0.8rem', fontWeight: 800, color: '#b45309', textDecoration:'none', marginTop:'1rem', display:'block'}}>Consulter notre politique <ArrowRight size={14}/></a>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
