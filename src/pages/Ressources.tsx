import { Helmet } from 'react-helmet-async';
import { Target, Rocket, Users, Briefcase, BookOpen, Heart } from 'lucide-react';
import '../styles/Ressources.css';

export default function Ressources() {
    return (
        <div>
            <Helmet>
                <title>À Propos & Ressources - Meta DX School</title>
                <meta name="description" content="Découvrez l'histoire, la mission et l'équipe de Meta DX School. Un établissement dédié à la formation des talents de demain avec une pédagogie innovante." />

                {/* Facebook / Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.metadxs.com/ressources" />
                <meta property="og:title" content="À Propos & Ressources - Meta DX School" />
                <meta property="og:description" content="Découvrez l'histoire, la mission et l'équipe de Meta DX School." />
                <meta property="og:image" content="https://www.metadxs.com/og-ressources.jpg" />

                <link rel="canonical" href="https://www.metadxs.com/ressources" />
            </Helmet>

            {/* HERO SECTION */}
            <section className="ressources-hero">
                <div className="ressources-hero-content">
                    <h1 className="ressources-title">À PROPOS DE<br />NOTRE ÉCOLE</h1>
                    <p className="ressources-subtitle">QUI SOMMES-NOUS ?</p>
                </div>
            </section>

            {/* SECTION 1: MISSION & EVOLUTION */}
            <section className="ressources-section section-mission">
                <div className="mission-container">
                    <div className="mission-block">
                        <p className="mission-text">
                            <strong>Meta DX School</strong> est un établissement d’enseignement supérieur technique privé, dédié à la formation des talents de demain à travers des parcours en alternance et des programmes certifiés. Forts d’une pédagogie innovante et d’un accompagnement sur-mesure, nous offrons aux étudiants des formations adaptées aux exigences du marché du travail.
                        </p>

                        <div className="mission-highlight">
                            <h3><Target size={32} /> Notre mission</h3>
                            <p className="mission-text" style={{ marginBottom: 0 }}>
                                Former les experts de demain en leur offrant des compétences pratiques et stratégiques, adaptées aux besoins des entreprises.
                            </p>
                        </div>

                        <h2 className="mission-title">L’évolution de Meta DX School</h2>
                        <p className="mission-text">
                            Meta DX School est née de la volonté de ses fondateurs, <strong>Farès Hamzaoui et Mahamat Khayal</strong>, de créer un centre de formation innovant et professionnalisant. Fondée sur l’expertise de plusieurs entreprises et professionnels du secteur, l’école a rapidement su se démarquer en proposant des formations en phase avec les réalités du terrain.
                        </p>
                        <p className="mission-text">
                            Aujourd’hui, Meta DX School est reconnue pour la qualité de ses enseignements, son engagement envers l’employabilité de ses étudiants et ses nombreuses certifications.
                        </p>

                        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Rocket size={40} color="#db2777" />
                            <p className="mission-text" style={{ margin: 0, fontStyle: 'italic' }}>
                                Une école en constante évolution, toujours à la recherche d’innovations pédagogiques pour préparer les étudiants aux métiers de demain.
                            </p>
                        </div>
                        {/* Fake Link/Button as requested "cliquez ici" */}
                        <a href="#" style={{ display: 'inline-block', marginTop: '1rem', color: '#4c1d95', fontWeight: 'bold', textDecoration: 'underline' }}>
                            Pour en savoir plus sur l’histoire de Meta DX School, cliquez ici
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 2: TEAM */}
            <section className="ressources-section section-team">
                <div className="mission-container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="mission-title" style={{ color: 'white' }}>DES EXPERTS À VOTRE SERVICE</h2>
                        <p className="mission-text" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto' }}>
                            Derrière Meta DX School, une équipe engagée œuvre chaque jour pour accompagner et former nos étudiants.
                        </p>
                    </div>

                    <div className="team-grid">
                        <div className="team-card">
                            <Users size={48} color="white" style={{ marginBottom: '1rem', opacity: 0.8 }} />
                            <h3 className="team-name">Sarah Lacheroy</h3>
                            <p className="team-role">Directrice du Centre</p>
                        </div>
                        <div className="team-card">
                            <Briefcase size={48} color="white" style={{ marginBottom: '1rem', opacity: 0.8 }} />
                            <h3 className="team-name">Mikalo Ranjalahy</h3>
                            <p className="team-role">Chargé de relation entreprises</p>
                        </div>
                        <div className="team-card">
                            <Target size={48} color="white" style={{ marginBottom: '1rem', opacity: 0.8 }} />
                            <h3 className="team-name">Laura Duchen</h3>
                            <p className="team-role">Chargée de relation candidats</p>
                        </div>
                        <div className="team-card">
                            <BookOpen size={48} color="white" style={{ marginBottom: '1rem', opacity: 0.8 }} />
                            <h3 className="team-name">Louise Esculier</h3>
                            <p className="team-role">Assistante pédagogique</p>
                        </div>
                        <div className="team-card">
                            <Heart size={48} color="white" style={{ marginBottom: '1rem', opacity: 0.8 }} />
                            <h3 className="team-name">Nina de Barros</h3>
                            <p className="team-role">Chargée de communication</p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <p className="mission-text" style={{ color: 'white' }}>
                            Chaque membre de notre équipe met son expertise et son énergie au service de la réussite des étudiants.
                        </p>
                        <a href="#" style={{ color: '#fbbf24', fontWeight: 'bold', textDecoration: 'underline' }}>
                            Pour en savoir plus sur notre équipe, cliquez ici
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 3: RESPONSIBILITIES */}
            <section className="ressources-section section-responsibilities">
                <div className="mission-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="mission-title">NOS MISSIONS & RESPONSABILITÉS</h2>
                    </div>

                    <div className="resp-grid">
                        <div className="resp-card">
                            <Rocket size={40} color="#4c1d95" style={{ marginBottom: '1rem' }} />
                            <h3 className="resp-title">FORMER LES EXPERTS DE DEMAIN</h3>
                            <p className="resp-text">
                                Chez Meta DX School, notre principale mission est de préparer nos étudiants aux métiers de demain grâce à des formations professionnalisantes, adaptées aux réalités du marché du travail. Nous mettons un point d’honneur à développer des compétences techniques et stratégiques essentielles pour leur réussite.
                            </p>
                        </div>

                        <div className="resp-card">
                            <Heart size={40} color="#db2777" style={{ marginBottom: '1rem' }} />
                            <h3 className="resp-title">ACCOMPAGNER CHACUN VERS LA RÉUSSITE</h3>
                            <p className="resp-text">
                                Nous croyons en un suivi individualisé, garantissant à chaque apprenant un encadrement personnalisé. Que ce soit dans le cadre de l’orientation, de la formation ou de l’insertion professionnelle, nous mettons tout en œuvre pour aider nos étudiants à atteindre leurs objectifs.
                            </p>
                        </div>

                        <div className="resp-card">
                            <BookOpen size={40} color="#4c1d95" style={{ marginBottom: '1rem' }} />
                            <h3 className="resp-title">RESPECTER UNE ÉTHIQUE PÉDAGOGIQUE</h3>
                            <p className="resp-text">
                                Nous intégrons une approche éducative éthique et responsable en sensibilisant nos étudiants aux enjeux sociétaux et environnementaux. Meta DX School forme des professionnels engagés, conscients de leur impact et prêts à relever les défis de demain.
                            </p>
                        </div>

                        <div className="resp-card">
                            <Briefcase size={40} color="#db2777" style={{ marginBottom: '1rem' }} />
                            <h3 className="resp-title">RENFORCER L’EMPLOYABILITÉ PAR L’ALTERNANCE</h3>
                            <p className="resp-text">
                                Nos formations sont conçues en étroite collaboration avec des entreprises pour offrir une expérience terrain concrète. L’apprentissage en alternance, les projets professionnels et les mises en situation réelles permettent aux étudiants d’être immédiatement opérationnels sur le marché du travail.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
