import { Helmet } from 'react-helmet-async';
import { TrendingUp, Award, Users, Briefcase, Star, ShieldCheck, Target, FileText, Calendar } from 'lucide-react';
import '../styles/Conseils.css';
import fondateurImg from '../assets/fondateurMETADX.png';

export default function ConseilsFormations() {
    return (
        <div>
            <Helmet>
                <title>Conseils & Formations - Expert RH & Audit | Meta DXS</title>
                <meta name="description" content="Meta DXS Conseils & Formations accompagne les entreprises dans leur stratégie RH, développement des compétences et conformité Qualiopi." />

                {/* Facebook / Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.metadxs.com/conseils-formations" />
                <meta property="og:title" content="Conseils & Formations - Expert RH & Audit | Meta DXS" />
                <meta property="og:description" content="Meta DXS Conseils & Formations accompagne les entreprises dans leur stratégie RH." />
                <meta property="og:image" content="https://www.metadxs.com/og-conseil.jpg" />

                <link rel="canonical" href="https://www.metadxs.com/conseils-formations" />
            </Helmet>

            {/* HERO SECTION */}
            <section className="conseils-hero">
                <div className="conseils-hero-content">
                    <h1 className="conseils-title">À PROPOS DE<br />META DXS CONSEILS & FORMATIONS</h1>
                    <p className="conseils-subtitle">NOTRE HISTOIRE & NOTRE EXPERTISE</p>
                </div>
            </section>

            {/* SECTION 1: HISTORY */}
            <section className="conseils-section section-history">
                <div className="history-container">
                    <div className="history-text-col">
                        <h2 className="section-title">Notre Histoire</h2>
                        <p className="text-content">
                            <strong>METADXS</strong> est né d’un regroupement d’entreprises et de collaborateurs qui lui confère une grande force et une incontestable légitimité.
                        </p>
                        <p className="text-content">
                            C’est du monde de l’entreprise lui-même qu’a ainsi émergé, suite à la crise internationale du Covid, cette nécessité de repenser la formation professionnelle en ayant à cœur <strong>l’employabilité et l’opérabilité immédiate des compétences acquises</strong>.
                        </p>

                        <div className="quote-highlight">
                            <p>
                                "Les formations que propose METADXS sont nées d’une convergence entre les besoins clairement identifiés par les entreprises de tous secteurs et l’expertise de pédagogues confirmés."
                            </p>
                        </div>

                        <p className="text-content">
                            Nous sommes soucieux de pouvoir proposer aux salariés et futurs salariés des formations entièrement adaptées à leurs besoins professionnels et aux exigences du marché.
                        </p>
                    </div>

                    <div className="history-image-col">
                        <img
                            src={fondateurImg}
                            alt="Fondateurs Meta DX School"
                            className="history-image"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 2: ADVANTAGES (BENEFITS) */}
            <section className="conseils-section section-benefits">
                <div className="history-container" style={{ display: 'block' }}>
                    <div className="benefits-intro">
                        <h2 className="section-title" style={{ color: 'white' }}>LES AVANTAGES DE LA FORMATION POUR VOTRE ENTREPRISE</h2>
                        <p className="text-content" style={{ color: 'rgba(255,255,255,0.9)' }}>
                            Chez METADXS, nous sommes convaincus que la formation de vos équipes est bien plus qu’une obligation légale. C’est un véritable levier de performance, d’innovation et de qualité de service.
                        </p>
                    </div>

                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3 className="benefit-title"><TrendingUp size={24} /> Renforcement des compétences</h3>
                            <p className="benefit-desc">
                                Adaptation rapide aux évolutions technologiques et réglementaires. Une équipe formée est plus efficace, autonome et productive.
                            </p>
                        </div>

                        <div className="benefit-card">
                            <h3 className="benefit-title"><Award size={24} /> Qualité de service & Performance</h3>
                            <p className="benefit-desc">
                                Un travail de meilleure qualité qui contribue à la performance globale et à la satisfaction client.
                            </p>
                        </div>

                        <div className="benefit-card">
                            <h3 className="benefit-title"><Users size={24} /> Engagement & Fidélisation</h3>
                            <p className="benefit-desc">
                                Renforce la motivation et limite le turnover en offrant des opportunités de développement.
                            </p>
                        </div>

                        <div className="benefit-card">
                            <h3 className="benefit-title"><Briefcase size={24} /> Optimisation & Polyvalence</h3>
                            <p className="benefit-desc">
                                Développer la polyvalence pour optimiser la gestion RH et garantir la continuité de service.
                            </p>
                        </div>

                        <div className="benefit-card">
                            <h3 className="benefit-title"><Star size={24} /> Marque Employeur</h3>
                            <p className="benefit-desc">
                                Valorise l’image de votre entreprise pour attirer les talents et rassurer vos partenaires.
                            </p>
                        </div>

                        <div className="benefit-card">
                            <h3 className="benefit-title"><ShieldCheck size={24} /> Conformité & Anticipation</h3>
                            <p className="benefit-desc">
                                Répondre aux obligations légales tout en préparant vos équipes aux mutations du secteur.
                            </p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem', fontStyle: 'italic', color: '#60a5fa' }}>
                        "Investir dans la formation de vos équipes, c’est investir dans l’avenir de votre entreprise."
                    </div>
                </div>
            </section>

            {/* SECTION 3: ENGAGEMENTS */}
            <section className="conseils-section section-engagements">
                <div className="history-container" style={{ display: 'block' }}>
                    <div className="engagements-intro">
                        <h2 className="section-title">NOS ENGAGEMENTS</h2>
                        <p className="text-content">
                            Chez METADXS, nous savons que la formation est un investissement stratégique. C’est pourquoi nous vous accompagnons de A à Z. Externalisez la gestion de votre plan de formation pour gagner en temps et en performance.
                        </p>
                    </div>

                    <div className="engagements-list">
                        <div className="engagement-item">
                            <div className="engagement-icon-box">
                                <Target size={32} />
                            </div>
                            <div className="engagement-content">
                                <h3>Construction de votre plan de développement</h3>
                                <p>Nous analysons vos besoins et définissons des objectifs stratégiques pour bâtir un plan sur mesure, aligné avec vos enjeux métiers.</p>
                            </div>
                        </div>

                        <div className="engagement-item">
                            <div className="engagement-icon-box">
                                <FileText size={32} />
                            </div>
                            <div className="engagement-content">
                                <h3>Recherche de financements & Montage de dossiers</h3>
                                <p>Nous identifions les dispositifs (OPCO, etc.) et gérons la constitution des dossiers pour optimiser votre budget formation.</p>
                            </div>
                        </div>

                        <div className="engagement-item">
                            <div className="engagement-icon-box">
                                <Briefcase size={32} />
                            </div>
                            <div className="engagement-content">
                                <h3>Gestion administrative simplifiée</h3>
                                <p>Conventions, convocations, feuilles de présence... Nous gérons tout pour vous assurer conformité et tranquillité.</p>
                            </div>
                        </div>

                        <div className="engagement-item">
                            <div className="engagement-icon-box">
                                <Calendar size={32} />
                            </div>
                            <div className="engagement-content">
                                <h3>Organisation logistique clé en main</h3>
                                <p>Réservation de salles, équipements, accueil... Nous veillons au bon déroulement de chaque session pour une efficacité maximale.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <h3 style={{ color: '#1e40af', fontSize: '1.5rem', textTransform: 'uppercase' }}>METADXS VOUS OFFRE LA SOLUTION CLÉ EN MAIN.</h3>
                    </div>
                </div>
            </section>
        </div>
    );
}
