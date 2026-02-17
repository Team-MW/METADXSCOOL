import { Helmet } from 'react-helmet-async';
import { Rocket, Sparkles, Building2, GraduationCap, Briefcase, ExternalLink } from 'lucide-react';
import '../styles/Alternant.css';

export default function Alternant() {
    return (
        <div>
            <Helmet>
                <title>Alternant & Futur Alternant - Meta DX School</title>
                <meta name="description" content="Découvrez les avantages de l'alternance chez Meta DX School : contrat d'apprentissage, professionnalisation, financement et recherche d'entreprise." />
                <link rel="canonical" href="https://www.metadxs.com/financements/alternant" />
            </Helmet>

            {/* HERO SECTION */}
            <section className="alternant-hero">
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="alternant-title">
                        ALTERNANT<br />& FUTUR ALTERNANT
                    </h1>
                    <p className="alternant-subtitle">DÉCOLLEZ VERS VOTRE AVENIR PROFESSIONNEL 🚀</p>
                </div>
            </section>

            {/* SECTION 1: FINANCEMENT INFO (Cards) */}
            <section className="section-cout">
                <div className="cout-container">
                    <div className="cout-card">
                        <h2 className="cout-title">VOUS ÊTES ALTERNANT(E) ?</h2>
                        <p className="cout-text">
                            Si vous suivez une formation en alternance (contrat d’apprentissage ou contrat de professionnalisation),
                            <br /><br />
                            <span className="highlight-free">VOUS N'AVEZ RIEN À PAYER ! 🎉</span>
                            <br /><br />
                            Les coûts pédagogiques sont pris en charge à 100% par l’OPCO de votre entreprise d'accueil.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 2: TYPES DE CONTRATS */}
            <section className="section-contrats">
                <div className="contrats-container">
                    <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '1rem', color: 'white' }}>
                            <Sparkles style={{ display: 'inline', marginRight: '10px', color: '#fbbf24' }} />
                            LES DEUX TYPES DE CONTRATS
                        </h2>
                        <div style={{ width: '80px', height: '5px', background: '#fbbf24', margin: '0 auto', borderRadius: '5px' }}></div>
                    </div>

                    {/* APPRENTISSAGE */}
                    <div className="contrat-column">
                        <GraduationCap className="contrat-icon" style={{ color: '#60a5fa' }} />
                        <h3 className="contrat-title">CONTRAT D'APPRENTISSAGE</h3>
                        <ul className="contrat-list">
                            <li><Rocket size={18} color="#60a5fa" /> Jusqu’à 29 ans révolus (avec exceptions)</li>
                            <li><Briefcase size={18} color="#60a5fa" /> Formation initiale</li>
                            <li><Building2 size={18} color="#60a5fa" /> Statut d’élève / salarié</li>
                        </ul>
                    </div>

                    {/* PROFESSIONNALISATION */}
                    <div className="contrat-column">
                        <Briefcase className="contrat-icon" style={{ color: '#f472b6' }} />
                        <h3 className="contrat-title" style={{ color: '#f472b6' }}>CONTRAT DE PROFESSIONNALISATION</h3>
                        <ul className="contrat-list">
                            <li><Rocket size={18} color="#f472b6" /> Dès 16 ans, sans limite d’âge</li>
                            <li><Briefcase size={18} color="#f472b6" /> Formation continue</li>
                            <li><Building2 size={18} color="#f472b6" /> Statut salarié</li>
                        </ul>
                    </div>

                    <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
                        <a href="https://www.alternance.emploi.gouv.fr" target="_blank" rel="noopener noreferrer" className="official-link">
                            🔗 Voir les infos officielles sur alternance.emploi.gouv.fr
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 3: RECHERCHE ENTREPRISE (Grimp) */}
            <section className="section-recherche">
                <div className="recherche-container">
                    <div className="recherche-card">
                        <span className="recherche-emoji">🎯</span>
                        <h2 className="recherche-title">PAS ENCORE D'ENTREPRISE ?</h2>
                        <p className="recherche-text">
                            Pas de panique ! 😌 Nous vous aidons dans votre recherche d’alternance grâce à notre plateforme partenaire <strong>GRIMP</strong> et notre accompagnement dédié.
                        </p>
                        <a href="/contact/candidat" className="btn-grimp">
                            <Rocket size={20} />
                            VOIR LA PROCÉDURE DE CANDIDATURE
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 4: SITES UTILES */}
            <section className="section-sites">
                <div className="sites-container">
                    <h2 className="sites-title">DES SITES UTILES POUR VOUS 📚</h2>

                    <div className="sites-grid">
                        <div className="site-card">
                            <div>
                                <h3 className="site-name">ANAF</h3>
                                <p className="site-desc">L’ANAF informe, défend et accompagne les apprentis. Guides pratiques et aides disponibles.</p>
                            </div>
                            <a href="https://www.anaf.fr" target="_blank" rel="noopener noreferrer" className="site-link">www.anaf.fr <ExternalLink size={14} style={{ display: 'inline' }} /></a>
                        </div>

                        <div className="site-card">
                            <div>
                                <h3 className="site-name">Alternance.emploi.gouv.fr</h3>
                                <p className="site-desc">Le site de référence : simulateur de rémunération, infos contrats et offres d'emploi.</p>
                            </div>
                            <a href="https://www.alternance.emploi.gouv.fr" target="_blank" rel="noopener noreferrer" className="site-link">Accéder au portail <ExternalLink size={14} style={{ display: 'inline' }} /></a>
                        </div>

                        <div className="site-card">
                            <div>
                                <h3 className="site-name">Service-public.fr</h3>
                                <p className="site-desc">Pour tout comprendre sur le cadre légal, les aides et les démarches administratives.</p>
                            </div>
                            <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer" className="site-link">Consulter le site <ExternalLink size={14} style={{ display: 'inline' }} /></a>
                        </div>

                        <div className="site-card">
                            <div>
                                <h3 className="site-name">1jeune1solution.gouv.fr</h3>
                                <p className="site-desc">Portail complet pour les jeunes : recherche d'alternance, stages, aides financières.</p>
                            </div>
                            <a href="https://www.1jeune1solution.gouv.fr" target="_blank" rel="noopener noreferrer" className="site-link">Trouver une solution <ExternalLink size={14} style={{ display: 'inline' }} /></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
