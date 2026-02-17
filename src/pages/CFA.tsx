import { Helmet } from 'react-helmet-async';
import { Rocket, Target, Award, Heart, CheckCircle, MapPin, Phone, Mail, Accessibility, Bus, ShieldCheck, BookOpen, Users } from 'lucide-react';
import '../styles/CFA.css';

// Importing assets
import fondateurImg from '../assets/fondateurMETADX.png';
import photo1 from '../assets/photo.jpg';
import photo2 from '../assets/poto2.jpg';

export default function CFA() {
    return (
        <div>
            <Helmet>
                <title>A Propos - Meta DX School</title>
                <meta name="description" content="Découvrez Meta DX School : histoire, fondateurs, pédagogie, équipe et campus. Une école engagée pour l'avenir professionnel de ses apprenants." />
                <link rel="canonical" href="https://www.metadxs.com/cfa" />
            </Helmet>

            {/* HERO */}
            <section className="cfa-hero">
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="cfa-title">A PROPOS DE<br />META DX SCHOOL</h1>
                    <p className="cfa-subtitle">L'ÉCOLE DE LA RÉUSSITE ET DE L'INNOVATION</p>
                </div>
            </section>

            {/* FOUNDERS */}
            <section className="section-founders">
                <div className="founders-container">
                    <div className="founders-text-col">
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#831843', marginBottom: '1.5rem', textTransform: 'uppercase' }}>NOS FONDATEURS</h2>
                        <div className="founders-text">
                            <p style={{ marginBottom: '1rem' }}>
                                Meta DX School est une école de création récente, née d’un regroupement d’entreprises et de collaborateurs qui lui confère une grande force et une incontestable légitimité dans le domaine de la formation post-Bac, sur les secteurs du management, du commerce, de l’énergie et des nouvelles technologies.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                C’est du monde de l’entreprise lui-même qu’a ainsi émergé, suite à la crise internationale du Covid, cette nécessité de repenser la formation professionnelle en ayant à cœur l’employabilité et l’opérabilité immédiate des compétences acquises.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                Les formations que propose Meta DX School sont nées d’une convergence entre les besoins clairement identifiés d’entrepreneurs impliqués au quotidien dans le management stratégique ; et l’expertise de pédagogues confirmés, soucieux de pouvoir proposer à leurs apprenants des enseignements mieux adaptés à leurs futurs besoins professionnels.
                            </p>
                            <p className="founders-names">
                                Sami LECARDEUR, Abderahman ABID, Farès HAMZAOUI & Mahamat KHAYAL<br />
                                <span style={{ fontSize: '0.9rem', color: '#6b7280', fontStyle: 'normal' }}>Co-fondateurs de Meta DX School</span>
                            </p>
                        </div>
                    </div>
                    <div className="founders-img-wrapper">
                        <img src={fondateurImg} alt="Fondateurs Meta DX School" className="founders-img" />
                    </div>
                </div>
            </section>

            {/* QUOTES */}
            <section className="section-quotes">
                <div className="quotes-grid">
                    <div className="quote-card">
                        <h3>Tout le monde peut apprendre</h3>
                        <p>« Quel que soit votre âge, votre situation ou votre besoin de formation, notre école possède toute l’expérience, les accréditations officielles et les technologies pour vous proposer une réponse personnalisée. »</p>
                    </div>
                    <div className="quote-card">
                        <h3>La garantie d'un réseau d'entreprises</h3>
                        <p>« Peu importe votre trajectoire ou vos contacts personnels, notre école met son propre réseau d’entreprises à votre disposition pour vous permettre de réaliser votre immersion professionnelle. »</p>
                    </div>
                </div>
            </section>

            {/* OFFICIAL RECOGNITIONS */}
            <section className="section-recognitions">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#1f2937', marginBottom: '1rem' }}>DES RECONNAISSANCES OFFICIELLES</h2>
                    <div style={{ width: '80px', height: '4px', background: '#db2777', margin: '0 auto' }}></div>
                </div>

                <div className="recog-grid">
                    <div className="recog-item">
                        <ShieldCheck size={40} className="recog-icon" />
                        <h3 className="recog-title">France Compétences</h3>
                        <p className="recog-text">Un établissement d’enseignement technique privé enregistré. La formation permet à vos salariés d’acquérir de nouvelles compétences, assurant une adaptation rapide aux évolutions technologiques et réglementaires.</p>
                    </div>

                    <div className="recog-item">
                        <Award size={40} className="recog-icon" />
                        <h3 className="recog-title">Crédits ECTS - Bac+2 à Bac+5</h3>
                        <p className="recog-text">Toutes nos formations sont reconnues nationalement et internationalement (ECTS). La validation d’un diplôme confère automatiquement des crédits utilisables à l’étranger.</p>
                    </div>

                    <div className="recog-item">
                        <BookOpen size={40} className="recog-icon" />
                        <h3 className="recog-title">Rectorat d’Académie</h3>
                        <p className="recog-text">Déclarée sous le n° 76 31 11 88 331 auprès du préfet et de la DREETS. Habilitée à enregistrer des candidats aux examens via CYCLADES, comme toute école publique.</p>
                    </div>

                    <div className="recog-item">
                        <CheckCircle size={40} className="recog-icon" />
                        <h3 className="recog-title">Qualité & Financement</h3>
                        <p className="recog-text">Démarche ISO 9001 et certification QUALIOPI. Formations éligibles aux financements tels que CPF, POE, PTP. Consultez notre rubrique Financements.</p>
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section className="section-team">
                <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem', color: '#fbcfe8' }}>NOTRE ÉQUIPE INTERNE</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto', color: '#d1d5db', fontSize: '1.2rem' }}>Une équipe dévouée pour votre réussite à chaque étape.</p>

                <div className="team-grid">
                    <div className="team-card">
                        <div className="team-role">Directrice du Centre</div>
                        <h3 className="team-name">Sarah Lacheroy</h3>
                        <p className="team-desc">Assure la gestion et le développement de Meta DX School pour offrir une formation de qualité.</p>
                    </div>

                    <div className="team-card">
                        <div className="team-role">Chargé de relation entreprises</div>
                        <h3 className="team-name">Mikalo Ranjalahy</h3>
                        <p className="team-desc">Le lien entre étudiants et partenaires, créant des opportunités d’alternance et d’emploi.</p>
                    </div>

                    <div className="team-card">
                        <div className="team-role">Chargée de relation candidats</div>
                        <h3 className="team-name">Laura Duchen</h3>
                        <p className="team-desc">Accompagne chaque candidat pour trouver la formation qui lui correspond le mieux.</p>
                    </div>

                    <div className="team-card">
                        <div className="team-role">Assistante pédagogique</div>
                        <h3 className="team-name">Louise Esculier</h3>
                        <p className="team-desc">Soutient les étudiants dans leur parcours éducatif, assurant ressources et encadrement.</p>
                    </div>

                    <div className="team-card">
                        <div className="team-role">Chargée de communication</div>
                        <h3 className="team-name">Nina De Barros</h3>
                        <p className="team-desc">Rayonnement de l'école, partage de l'actualité, des succès et des événements.</p>
                    </div>
                </div>
            </section>

            {/* VISUAL BREAK - PHOTOS */}
            <div className="section-visual">
                <div className="visual-grid">
                    <img src={photo1} alt="Vie étudiante Meta DX School" className="visual-img" />
                    <img src={photo2} alt="Campus Meta DX School" className="visual-img" />
                </div>
            </div>

            {/* VALUES & ENGAGEMENTS */}
            <section className="section-values" style={{ background: '#0f172a', color: 'white', padding: '6rem 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#fbcfe8', marginBottom: '1rem' }}>NOS VALEURS & ENGAGEMENTS</h2>
                    <div style={{ width: '80px', height: '4px', background: '#ec4899', margin: '0 auto' }}></div>
                </div>

                <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="value-card">
                        <Target size={40} color="#ec4899" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1rem', color: '#fbcfe8' }}>EXCELLENCE & INNOVATION</h3>
                        <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>Enseignement de qualité, outils innovants et méthodes adaptées au marché.</p>
                    </div>
                    <div className="value-card">
                        <Heart size={40} color="#ec4899" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1rem', color: '#fbcfe8' }}>ACCOMPAGNEMENT</h3>
                        <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>Suivi personnalisé de l'orientation à l'insertion professionnelle.</p>
                    </div>
                    <div className="value-card">
                        <Users size={40} color="#ec4899" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1rem', color: '#fbcfe8' }}>INCLUSION</h3>
                        <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>Accès pour tous, environnement inclusif et réussite à son rythme.</p>
                    </div>
                    <div className="value-card">
                        <Rocket size={40} color="#ec4899" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1rem', color: '#fbcfe8' }}>EMPLOYABILITÉ</h3>
                        <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>Formations conçues avec des entreprises pour une adéquation marché parfaite.</p>
                    </div>
                </div>
            </section>

            {/* CAMPUS INFO */}
            <section className="section-campus-info" id="campus">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#1e3a8a', marginBottom: '1rem' }}>LE CAMPUS</h2>
                    <div style={{ width: '60px', height: '4px', background: '#3b82f6', margin: '0 auto' }}></div>
                </div>

                <div className="campus-details">
                    <div className="campus-block">
                        <h3>NOUS TROUVER</h3>
                        <ul className="campus-list">
                            <li><MapPin color="#0369a1" /> 244 Route de Seysses, 31100 Toulouse</li>
                            <li><Phone color="#0369a1" /> 05 37 04 02 64</li>
                            <li><Mail color="#0369a1" /> contact@metadxs.com</li>
                        </ul>
                        <div style={{ marginTop: '2rem' }}>
                            <h4 style={{ fontWeight: '800', color: '#0369a1', marginBottom: '0.5rem' }}>Accès :</h4>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Metro-M.svg/512px-Metro-M.svg.png" width="20" alt="Métro" /> <strong>Métro A :</strong> 10 min à pied de l'arrêt Reynerie</p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Bus size={20} color="#0369a1" /> <strong>Bus L7 :</strong> Arrêt Bordelongue (depuis Mermoz)</p>
                        </div>
                    </div>

                    <div className="campus-block">
                        <h3>ÉQUIPEMENTS & SERVICES</h3>
                        <ul className="campus-list">
                            <li><CheckCircle size={18} color="#16a34a" /> 3 salles de classes et TP équipées</li>
                            <li><CheckCircle size={18} color="#16a34a" /> Salle réunion & Salle informatique</li>
                            <li><CheckCircle size={18} color="#16a34a" /> WIFI gratuit très haut débit</li>
                            <li><CheckCircle size={18} color="#16a34a" /> Espace détente & distributeurs</li>
                            <li><CheckCircle size={18} color="#16a34a" /> Cafétéria & Food trucks quotidiens</li>
                        </ul>
                        <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#e0e7ff', borderRadius: '12px', border: '1px solid #c7d2fe' }}>
                            <h4 style={{ fontWeight: '800', color: '#4338ca', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <Accessibility size={24} /> Accessibilité Handicap
                            </h4>
                            <p style={{ fontSize: '0.95rem', color: '#3730a3', lineHeight: '1.5' }}>
                                Formations ouvertes aux PMR. Parties communes et salles accessibles par ascenseur. Contactez-nous pour des protocoles d'accueil spécifiques.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
