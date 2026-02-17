import { Helmet } from 'react-helmet-async';
import { ExternalLink, CheckCircle, Briefcase, GraduationCap, Building2, UserCheck, ShieldCheck, HeartHandshake } from 'lucide-react';
import '../styles/Financements.css';

export default function Financements() {
    return (
        <div className="financements-page">
            <Helmet>
                <title>Financer sa Formation - Guide Complet Meta DX School</title>
                <meta name="description" content="Découvrez toutes les options de financement pour votre formation avec Meta DX School : Alternance, CPF, Pôle Emploi, OPCO, FAF, etc." />
                <link rel="canonical" href="https://www.metadxs.com/financements" />
            </Helmet>

            {/* HERO SECTION */}
            <header className="fin-hero">
                <h1 className="fin-hero-title">Financements</h1>
                <p className="fin-hero-subtitle">
                    Financer sa formation : quelles sont vos options ?<br />
                    Des solutions existent pour presque tous les profils.
                </p>
            </header>

            {/* INTRO SECTION */}
            <section className="fin-intro">
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                        Vous souhaitez suivre une formation avec <strong>Meta DX School</strong>, mais vous vous posez des questions sur le financement ?<br /><br />
                        Bonne nouvelle : des dispositifs existent pour presque tous les profils — que vous soyez étudiant, demandeur d’emploi, salarié, indépendant ou en reconversion.
                    </p>

                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#4c1d95' }}>Sur cette page, nous vous aidons à :</h3>

                    <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', display: 'inline-block' }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <CheckCircle size={24} color="#10b981" style={{ marginRight: '1rem', minWidth: '24px' }} />
                            Comprendre les aides mobilisables selon votre situation
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <CheckCircle size={24} color="#10b981" style={{ marginRight: '1rem', minWidth: '24px' }} />
                            Identifier les bons interlocuteurs (France Travail, OPCO, FAF…)
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <CheckCircle size={24} color="#10b981" style={{ marginRight: '1rem', minWidth: '24px' }} />
                            Accéder aux sources officielles pour chaque dispositif
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <CheckCircle size={24} color="#10b981" style={{ marginRight: '1rem', minWidth: '24px' }} />
                            Vous orienter vers la solution la plus adaptée à votre projet
                        </li>
                    </ul>

                    <p style={{ marginTop: '3rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Retrouvez, ci-dessous, selon votre profil, les solutions de financements qui vous correspondent !
                    </p>
                </div>
            </section>

            {/* SECTION 1: ALTERNANTS */}
            <section className="fin-section section-alternant">
                <h2 className="fin-section-title">
                    <GraduationCap size={40} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '15px' }} />
                    Vous êtes alternant(e) ou futur alternant(e) ?
                </h2>

                <div style={{ maxWidth: '900px', margin: '0 auto 4rem', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                        Si vous suivez une formation en alternance (contrat d’apprentissage ou contrat de professionnalisation), <strong>vous n’avez rien à financer</strong> :
                        les coûts pédagogiques sont pris en charge par l’OPCO de votre entreprise.
                    </p>
                </div>

                <div className="fin-grid">
                    <div className="fin-card">
                        <h3>Contrat d’apprentissage</h3>
                        <p>– Jusqu’à 29 ans (avec exceptions)<br />– Formation initiale, statut d’élève/salarié</p>
                    </div>
                    <div className="fin-card">
                        <h3>Contrat de professionnalisation</h3>
                        <p>– Dès 16 ans, sans limite d’âge<br />– Formation continue, statut salarié</p>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a href="https://www.alternance.emploi.gouv.fr" target="_blank" rel="noopener noreferrer" className="fin-link" style={{ color: 'white', fontSize: '1.2rem' }}>
                        🔗 Voir les infos officielles – alternance.emploi.gouv.fr <ExternalLink size={16} />
                    </a>
                    <p style={{ marginTop: '2rem', maxWidth: '800px', margin: '2rem auto 0', background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '20px' }}>
                        🎯 Et si vous n’avez pas encore d’entreprise, pas de panique : nous vous aidons dans votre recherche d’alternance, grâce à notre plateforme GRIMP, retrouvez la procédure sur cette page.
                    </p>
                </div>

                <h3 style={{ textAlign: 'center', margin: '4rem 0 2rem', fontSize: '2rem', textTransform: 'uppercase' }}>Des sites qui peuvent vous être utiles</h3>

                <div className="fin-grid">
                    <div className="fin-card">
                        <h3>ANAF</h3>
                        <p>L’ANAF informe, défend et accompagne les apprentis. Guides pratiques, aides, et infos sur les droits.</p>
                        <a href="https://www.anaf.fr" target="_blank" rel="noopener noreferrer" className="fin-link">www.anaf.fr <ExternalLink size={14} /></a>
                    </div>
                    <div className="fin-card">
                        <h3>Alternance.emploi.gouv.fr</h3>
                        <p>Le site de référence : simulateur de rémunération, infos contrats, offres disponibles.</p>
                        <a href="https://www.alternance.emploi.gouv.fr" target="_blank" rel="noopener noreferrer" className="fin-link">Visiter le site <ExternalLink size={14} /></a>
                    </div>
                    <div className="fin-card">
                        <h3>Service-public.fr</h3>
                        <p>Pour tout comprendre sur le cadre légal, les aides disponibles et démarches administratives.</p>
                        <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer" className="fin-link">Visiter le site <ExternalLink size={14} /></a>
                    </div>
                    <div className="fin-card">
                        <h3>1jeune1solution.gouv.fr</h3>
                        <p>Portail complet pour les jeunes : recherche d’alternance, emploi, aides financières.</p>
                        <a href="https://www.1jeune1solution.gouv.fr" target="_blank" rel="noopener noreferrer" className="fin-link">Visiter le site <ExternalLink size={14} /></a>
                    </div>
                </div>
            </section>

            {/* SECTION 2: SALARIÉS - Light Section */}
            <section className="fin-section section-salarie">
                <h2 className="fin-section-title">
                    <Briefcase size={40} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '15px' }} />
                    Vous êtes salarié(e) ?
                </h2>
                <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: '#64748b' }}>
                    Que vous soyez en CDI, en CDD ou même en intérim
                </p>

                <div className="fin-grid">
                    <div className="fin-card">
                        <h3>Le Plan de Développement des Compétences (PDC)</h3>
                        <p>Financé par votre entreprise, en lien avec son OPCO. Permet de suivre une formation pendant votre temps de travail, avec maintien de salaire.</p>
                        <a href="https://www.travail-emploi.gouv.fr" target="_blank" rel="noopener noreferrer" className="fin-link" style={{ color: '#2563eb' }}>👉 En savoir plus</a>
                    </div>
                    <div className="fin-card">
                        <h3>Le dispositif Pro-A</h3>
                        <p>Pour changer de métier ou monter en compétences via l’alternance. Destiné aux salariés peu qualifiés ou souhaitant évoluer.</p>
                        <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer" className="fin-link" style={{ color: '#2563eb' }}>👉 En savoir plus</a>
                    </div>
                    <div className="fin-card">
                        <h3>Le Compte Personnel de Formation (CPF)</h3>
                        <p>Mobilisable à tout moment. Vous cumulez des droits chaque année pour financer tout ou partie de votre formation.</p>
                        <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer" className="fin-link" style={{ color: '#2563eb' }}>👉 Consulter vos droits</a>
                    </div>
                    <div className="fin-card">
                        <h3>L’AFEST</h3>
                        <p>Action de Formation en Situation de Travail. Formation directement sur votre lieu de travail, encadrée et accompagnée.</p>
                        <a href="https://www.anact.fr" target="_blank" rel="noopener noreferrer" className="fin-link" style={{ color: '#2563eb' }}>👉 Découvrir l’AFEST</a>
                    </div>
                    <div className="fin-card">
                        <h3>Le Projet de Transition Professionnelle (PTP)</h3>
                        <p>Pour changer de métier avec une formation longue et financée. Le PTP remplace l’ancien CIF, géré par Transitions Pro.</p>
                        <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer" className="fin-link" style={{ color: '#2563eb' }}>👉 Infos complètes</a>
                    </div>
                </div>
            </section>

            {/* SECTION 3: DEMANDEURS D'EMPLOI - Dark/Rose */}
            <section className="fin-section section-demandeur">
                <h2 className="fin-section-title">
                    <UserCheck size={40} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '15px' }} />
                    Vous êtes demandeur d’emploi ?
                </h2>
                <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', opacity: 0.9 }}>
                    En tant qu’inscrit auprès de France Travail
                </p>

                <div className="fin-grid">
                    <div className="fin-card">
                        <h3>L’Aide Individuelle à la Formation (AIF)</h3>
                        <p>Financement partiel ou total d’une formation en lien avec votre retour à l’emploi.</p>
                        <a href="https://www.francetravail.fr" target="_blank" rel="noopener noreferrer" className="fin-link">👉 En savoir plus sur l’AIF</a>
                    </div>
                    <div className="fin-card">
                        <h3>L’AFPR et la POE</h3>
                        <p>
                            Pour vous former à un poste précis avant d’être embauché.<br />
                            <strong>AFPR :</strong> CDD ou mission intérim<br />
                            <strong>POE :</strong> CDI ou alternance
                        </p>
                        <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer" className="fin-link">👉 Découvrir</a>
                    </div>
                    <div className="fin-card">
                        <h3>Formations conventionnées France Travail</h3>
                        <p>Financées directement par France Travail ou la Région (Prépa compétences, Prépa apprentissage...).</p>
                        <a href="https://www.francetravail.fr" target="_blank" rel="noopener noreferrer" className="fin-link">👉 Actions de formation</a>
                    </div>
                    <div className="fin-card">
                        <h3>Mobilisation du CPF + abondements</h3>
                        <p>Vous pouvez utiliser votre CPF et, si besoin, obtenir un financement complémentaire France Travail.</p>
                        <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer" className="fin-link">👉 Consulter votre CPF</a>
                    </div>
                    <div className="fin-card">
                        <h3>Aides à la mobilité / hébergement</h3>
                        <p>Soutien pour vos déplacements ou logements durant la formation.</p>
                        <a href="https://www.francetravail.fr" target="_blank" rel="noopener noreferrer" className="fin-link">👉 Aides complémentaires</a>
                    </div>
                </div>
            </section>

            {/* SECTION 4: INDÉPENDANTS - Teal */}
            <section className="fin-section section-independant">
                <h2 className="fin-section-title">
                    <Building2 size={40} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '15px' }} />
                    Vous êtes indépendant / TNS ?
                </h2>

                <div className="fin-grid" style={{ maxWidth: '800px' }}>
                    <div className="fin-card">
                        <h3>FAF (Fonds d’Assurance Formation)</h3>
                        <p>Chaque professionnel indépendant cotise à un FAF. Il existe plusieurs organismes selon votre secteur : Artisan, commerçant, profession libérale...</p>
                        <a href="https://entreprendre.service-public.fr" target="_blank" rel="noopener noreferrer" className="fin-link">👉 Infos sur les FAF</a>
                    </div>
                    <div className="fin-card">
                        <h3>Mobilisation du CPF</h3>
                        <p>Vous pouvez alimenter votre CPF en tant qu’indépendant (si vous avez déclaré votre activité depuis plus d’un an).</p>
                        <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer" className="fin-link">👉 Vérifier vos droits CPF</a>
                    </div>
                </div>
            </section>

            {/* SECTION 5: FONCTION PUBLIQUE - Light/Slate */}
            <section className="fin-section section-public">
                <h2 className="fin-section-title">
                    <ShieldCheck size={40} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '15px' }} />
                    Vous travaillez dans la fonction publique ?
                </h2>

                <div className="fin-grid">
                    <div className="fin-card">
                        <h3>Congé de Formation Professionnelle (CFP)</h3>
                        <p>Formation longue avec maintien partiel de rémunération (85% pendant un an max). Pour reconversion ou évolution.</p>
                        <a href="https://www.fonction-publique.gouv.fr" target="_blank" rel="noopener noreferrer" className="fin-link" style={{ color: '#0d9488' }}>👉 Modalités du CFP</a>
                    </div>
                    <div className="fin-card">
                        <h3>Le Compte Personnel de Formation (CPF)</h3>
                        <p>Agents publics disposent aussi d’un CPF. Mobilisable sur le temps de travail avec accord, ou en dehors.</p>
                        <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer" className="fin-link" style={{ color: '#0d9488' }}>👉 CPF fonction publique</a>
                    </div>
                    <div className="fin-card">
                        <h3>FIPHFP (si situation de handicap)</h3>
                        <p>Financements et accompagnements renforcés pour les agents publics en situation de handicap.</p>
                        <a href="https://www.fiphfp.fr" target="_blank" rel="noopener noreferrer" className="fin-link" style={{ color: '#0d9488' }}>👉 Site du FIPHFP</a>
                    </div>
                </div>
            </section>

            {/* SECTION 6: HANDICAP - Indigo - LAST SECTION */}
            <section className="fin-section section-handicap">
                <h2 className="fin-section-title">
                    <HeartHandshake size={40} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '15px' }} />
                    Vous êtes en situation de handicap ?
                </h2>
                <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', opacity: 0.9 }}>
                    Reconnaissance de la qualité de travailleur handicapé (RQTH)
                </p>

                <div className="fin-grid">
                    <div className="fin-card">
                        <h3>Aides de l’Agefiph (Privé)</h3>
                        <p>
                            – Aide au financement de la formation<br />
                            – Aide à la compensation (matériel, accompagnement)<br />
                            – Aides à la mobilité, tutorat...
                        </p>
                        <a href="https://www.agefiph.fr" target="_blank" rel="noopener noreferrer" className="fin-link">👉 Toutes les aides formation</a>
                    </div>
                    <div className="fin-card">
                        <h3>Aides du FIPHFP (Public)</h3>
                        <p>
                            – Formations qualifiantes<br />
                            – Aménagements du poste ou de la formation<br />
                            – Aides humaines ou techniques
                        </p>
                        <a href="https://www.fiphfp.fr" target="_blank" rel="noopener noreferrer" className="fin-link">👉 Découvrir le FIPHFP</a>
                    </div>
                    <div className="fin-card">
                        <h3>Dispositifs classiques cumulables</h3>
                        <p>
                            En complément, vous pouvez mobiliser :<br />
                            – Le CPF<br />
                            – L’AIF (France Travail)<br />
                            – Le Projet de transition pro, etc.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
