import { Helmet } from 'react-helmet-async';
import { Clock, MapPin, Calendar, CheckCircle2, Mail } from 'lucide-react';

export default function Evenements() {
    return (
        <>
            <Helmet>
                <title>Évènements & Afterworks | Meta DX School</title>
                <meta name="description" content="Découvrez nos événements Afterwork et nos sessions gratuites de développement d'entreprise et de leadership." />
            </Helmet>

            <style>{`
                .events-page {
                    background-color: #201b44;
                    color: white;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    padding-bottom: 6rem;
                }
                
                .events-hero {
                    background: linear-gradient(135deg, #100d2b 0%, #201b44 100%);
                    padding: 8rem 2rem 4rem;
                    text-align: center;
                }
                
                .events-hero h1 {
                    font-size: 4rem;
                    font-weight: 900;
                    color: white;
                    margin-bottom: 1rem;
                    text-transform: uppercase;
                }

                .events-section {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 3rem 2rem;
                }

                /* Afterworks Section */
                .afterwork-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 4rem;
                    margin-bottom: 5rem;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
                }
                @media(max-width: 768px) {
                    .afterwork-card { padding: 2rem; }
                }
                
                .badge-nouveau {
                    background-color: #ef9a37;
                    color: white;
                    padding: 0.5rem 1.5rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    border-radius: 4px;
                    display: inline-block;
                    margin-bottom: 1.5rem;
                }
                
                .afterwork-title {
                    font-size: 3rem;
                    font-weight: 900;
                    color: #fff;
                    margin-bottom: 0.5rem;
                }
                .afterwork-topic {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #ef9a37;
                    margin-bottom: 1.5rem;
                }
                
                .afterwork-subtitle {
                    font-size: 1.15rem;
                    line-height: 1.6;
                    margin-bottom: 2.5rem;
                    opacity: 0.9;
                }

                .afterwork-details {
                    display: flex;
                    align-items: center;
                    gap: 3rem;
                    flex-wrap: wrap;
                    margin-bottom: 3rem;
                    background: rgba(0,0,0,0.2);
                    padding: 1.5rem 2rem;
                    border-radius: 12px;
                    border-left: 4px solid #ef9a37;
                }
                
                .detail-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-weight: 600;
                    font-size: 1.05rem;
                }
                .detail-item svg {
                    color: #ef9a37;
                }

                .check-list {
                    list-style: none;
                    padding: 0;
                    margin: 2rem 0;
                }
                .check-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    margin-bottom: 1.25rem;
                    font-size: 1.1rem;
                    line-height: 1.5;
                }
                .check-list li svg {
                    color: #ef9a37;
                    flex-shrink: 0;
                    margin-top: 3px;
                }

                .expert-box {
                    background: rgba(239, 154, 55, 0.08);
                    border-left: 4px solid #ef9a37;
                    padding: 2.5rem;
                    border-radius: 0 12px 12px 0;
                    margin: 3rem 0;
                }

                .expert-box h4 {
                    color: #ef9a37;
                    font-size: 1.4rem;
                    margin-bottom: 1rem;
                    font-weight: 800;
                }
                .expert-box p {
                    line-height: 1.7;
                    font-size: 1.05rem;
                    opacity: 0.95;
                }

                .register-box {
                    text-align: center;
                    margin-top: 3rem;
                }
                .large-register-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 1rem;
                    background: #ef9a37;
                    color: white;
                    font-size: 1.2rem;
                    font-weight: 800;
                    padding: 1.2rem 3rem;
                    border-radius: 8px;
                    text-transform: uppercase;
                    text-decoration: none;
                    transition: transform 0.2s, background 0.2s;
                }
                .large-register-btn:hover {
                    transform: translateY(-3px);
                    background: #f5a646;
                }

                /* Free Events Section */
                .free-events-header {
                    margin-bottom: 4rem;
                }
                .free-events-header h2 {
                    font-size: 3rem;
                    font-weight: 900;
                    margin-bottom: 2rem;
                    text-transform: uppercase;
                }

                .free-intro-box {
                    background: rgba(255, 255, 255, 0.05);
                    padding: 2rem;
                    border-radius: 12px;
                    margin-bottom: 3rem;
                }
                
                .free-intro-box p {
                    font-size: 1.1rem;
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                }
                .free-intro-box p:last-child {
                    margin-bottom: 0;
                }

                /* Event Card Matching the Image */
                .event-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 2.5rem;
                }

                .event-card {
                    background-color: #5bb4f8; /* The exact blue from the mockup */
                    border-radius: 12px;
                    padding: 3rem;
                    color: #1a1e4a;
                    position: relative;
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                .event-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
                }

                .event-card .badge-nouveau {
                    margin-bottom: 1.5rem;
                    font-size: 1rem;
                    padding: 0.5rem 1.5rem;
                    background: #f09e3a;
                }

                .event-card h3 {
                    font-size: 2.2rem;
                    font-weight: 900;
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                    color: #1a1e4a;
                    letter-spacing: -0.02em;
                }

                .event-card .event-desc {
                    font-size: 1.05rem;
                    margin-bottom: 2rem;
                    font-weight: 500;
                    color: #1a1e4a;
                    opacity: 0.9;
                }

                .event-objective {
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    font-size: 1.15rem;
                }

                .event-list {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 3rem 0;
                }

                .event-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.5rem;
                    margin-bottom: 0.5rem;
                    font-weight: 600;
                    font-size: 1.05rem;
                }
                .event-list li::before {
                    content: '–';
                    font-weight: 900;
                }

                .event-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 2rem;
                    border-top: 1px solid rgba(255,255,255,0.3);
                    padding-top: 2rem;
                }

                .event-footer-info {
                    display: flex;
                    align-items: center;
                    gap: 3rem;
                    flex-wrap: wrap;
                }

                .footer-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-weight: 700;
                    color: #ffffff;
                    font-size: 1.1rem;
                }

                .btn-register {
                    background-color: #1a1e4a;
                    color: white;
                    padding: 1rem 2.5rem;
                    border-radius: 4px;
                    font-weight: 800;
                    text-decoration: none;
                    transition: background 0.2s;
                }
                .btn-register:hover {
                    background-color: #0f1235;
                }
            `}</style>

            <div className="events-page">
                {/* Hero */}
                <div className="events-hero">
                    <h1>Évènements & Masterclass</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Rejoignez nos sessions pour échanger, vous inspirer et progresser.</p>
                </div>

                <div className="events-section">
                    
                    {/* SECTION AFTERWORKS */}
                    <div className="afterwork-card">
                        <span className="badge-nouveau">Nouveau</span>
                        <h2 className="afterwork-title">LES AFTERWORKS</h2>
                        <h3 className="afterwork-topic">Parlons de la qualité de vie et des conditions de travail</h3>
                        
                        <p className="afterwork-subtitle">
                            METADXS lance ses événements Afterwork : un format convivial et professionnel pour se rencontrer, échanger, s’inspirer autour de thématiques essentielles en entreprise.
                        </p>

                        <div className="afterwork-details">
                            <div className="detail-item">
                                <Clock size={24} /> 3 HEURES (17H30 - 20H30)
                            </div>
                            <div className="detail-item">
                                <Calendar size={24} /> LE JEUDI 20 NOVEMBRE
                            </div>
                            <div className="detail-item">
                                <MapPin size={24} /> SALLE DE CONFÉRENCE BÂTIMENT 3 RDC
                            </div>
                        </div>

                        <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.5rem', color: '#ef9a37' }}>
                            Public : Chefs d’entreprise, directeurs, responsables de service, tous secteurs confondus (de 20 à 50 participants)
                        </p>

                        <ul className="check-list">
                            <li><CheckCircle2 size={24} /> Networking avec d’autres professionnels RH, managers, dirigeants</li>
                            <li><CheckCircle2 size={24} /> Tips & bonnes pratiques sur la QVCT avec notre expert Yoann Darquest</li>
                            <li><CheckCircle2 size={24} /> Focus sur notre offre de formation Santé & Sécurité au Travail</li>
                            <li><CheckCircle2 size={24} /> Ambiance détendue et cocktail dinatoire pour favoriser les échanges</li>
                        </ul>

                        <div className="expert-box">
                            <h4>Un intervenant expert et passionné : Yoann Darquest</h4>
                            <p>
                                Conférencier formateur, chroniqueur radio sur le domaine santé au travail et développement personnel, créateur du podcast « Entreprise et Épanouissement », membre d’une association francophone de recherche et d’innovation en management et leadership. Sa mission : apporter une dynamique innovante dans le développement et la valorisation du capital humain, comme pilier de la politique RH afin de rendre l’expérience collaborateur plus engageante pour permettre aux individus de donner le meilleur d’eux mêmes au sein des organisations et s’épanouir.
                            </p>
                        </div>

                        <div className="register-box">
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Retrouvons nous autour d’un apéritif dinatoire !</h3>
                            <a href="mailto:contact@metadxs.com?subject=Inscription%20Afterwork%20Novembre" className="large-register-btn">
                                <Mail size={24} /> Inscrivez-vous par mail
                            </a>
                        </div>
                    </div>

                    {/* SECTION RENDEZ VOUS GRATUITS */}
                    <div className="free-events-header">
                        <h2>LES RENDEZ-VOUS GRATUITS DU MOIS</h2>
                        
                        <div className="free-intro-box">
                            <div className="afterwork-details" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderLeft: 'none', marginBottom: '2rem' }}>
                                <div className="detail-item">
                                    <Clock size={24} /> 1 HEURE
                                </div>
                                <div className="detail-item">
                                    <MapPin size={24} /> OUVERTURE DES PORTES À 8H30, INTERVENTION DE 9H À 10H (SALLE DE CONFÉRENCE)
                                </div>
                            </div>
                            
                            <p>Vous êtes freelance, créateur d’entreprise, dirigeant, directeur commercial, commercial ou indépendant ?</p>
                            <p>Rejoignez-nous pour un cycle de sessions dynamiques d’une heure, conçues pour vous apporter des clés concrètes, des échanges enrichissants et des leviers d’action immédiats.</p>
                            <p>Ouverts à tous les secteurs, ces ateliers ne nécessitent aucun prérequis, si ce n’est une curiosité pour le business développement et l’envie de progresser.</p>
                            <p>Venez vivre une expérience collaborative unique, partagez vos défis, et repartez avec des outils concrets pour faire la différence !</p>
                            <p style={{ fontWeight: 800, color: '#ef9a37', marginTop: '1.5rem', fontSize: '1.2rem' }}>Le petit déjeuner est offert !</p>
                        </div>
                    </div>

                    <div className="event-grid">
                        
                        {/* Event 1 */}
                        <div className="event-card">
                            <span className="badge-nouveau">Nouveau</span>
                            <h3>LE LEADERSHIP COMMERCIAL</h3>
                            <p className="event-desc">Devenez un leader commercial capable d’inspirer, de guider et de faire performer vos équipes.</p>
                            
                            <div className="event-objective">Objectif : Créer, intégrer, accompagner une équipe orientée performance.</div>
                            
                            <ul className="event-list">
                                <li>Structurer un parcours d’intégration stimulant pour vos commerciaux</li>
                                <li>Accompagner vos équipes vers leur montée en compétences</li>
                                <li>Instaurer une culture de la performance durable et motivante</li>
                            </ul>

                            <div className="event-footer">
                                <div className="event-footer-info">
                                    <div className="footer-item"><Clock size={20} /> 1 HEURE (DE 15 À 50 PARTICIPANTS)</div>
                                    <div className="footer-item"><MapPin size={20} /> 244 ROUTE DE SEYSSES, 31100 TOULOUSE</div>
                                    <div className="footer-item"><Calendar size={20} /> LE 18 SEPTEMBRE</div>
                                </div>
                                <a href="mailto:contact@metadxs.com" className="btn-register">Inscrivez-vous par mail</a>
                            </div>
                        </div>

                        {/* Event 2 */}
                        <div className="event-card">
                            <span className="badge-nouveau">Nouveau</span>
                            <h3>LES CLÉS DE LA PERFORMANCE</h3>
                            <p className="event-desc">Libérez le plein potentiel de vos équipes en activant les leviers essentiels de la performance professionnelle.</p>
                            
                            <div className="event-objective">Objectif : Activer ses leviers de performance.</div>
                            
                            <ul className="event-list">
                                <li>Développer son efficacité et son impact commercial</li>
                                <li>Renforcer votre leadership et votre image professionnelle</li>
                                <li>Identifier et activer vos leviers personnels de performance</li>
                            </ul>

                            <div className="event-footer">
                                <div className="event-footer-info">
                                    <div className="footer-item"><Clock size={20} /> 1 HEURE (DE 15 À 50 PARTICIPANTS)</div>
                                    <div className="footer-item"><MapPin size={20} /> 244 ROUTE DE SEYSSES, 31100 TOULOUSE</div>
                                    <div className="footer-item"><Calendar size={20} /> LE 9 OCTOBRE</div>
                                </div>
                                <a href="mailto:contact@metadxs.com" className="btn-register">Inscrivez-vous par mail</a>
                            </div>
                        </div>

                        {/* Event 3 */}
                        <div className="event-card">
                            <span className="badge-nouveau">Nouveau</span>
                            <h3>LA PERFORMANCE COLLECTIVE</h3>
                            <p className="event-desc">Boostez l’efficacité de vos équipes en alliant intelligence collective, performance individuelle et équilibre du groupe.</p>
                            
                            <div className="event-objective">Objectif : Unir les talents et amplifier la performance.</div>
                            
                            <ul className="event-list">
                                <li>Utiliser l’intelligence collective pour résoudre les défis complexes</li>
                                <li>Mettre la performance individuelle au service d’un objectif commun</li>
                                <li>Créer un équilibre harmonieux pour des résultats durables</li>
                            </ul>

                            <div className="event-footer">
                                <div className="event-footer-info">
                                    <div className="footer-item"><Clock size={20} /> 1 HEURE (DE 15 À 50 PARTICIPANTS)</div>
                                    <div className="footer-item"><MapPin size={20} /> 244 ROUTE DE SEYSSES, 31100 TOULOUSE</div>
                                    <div className="footer-item"><Calendar size={20} /> LE 6 NOVEMBRE</div>
                                </div>
                                <a href="mailto:contact@metadxs.com" className="btn-register">Inscrivez-vous par mail</a>
                            </div>
                        </div>

                        {/* Event 4 */}
                        <div className="event-card">
                            <span className="badge-nouveau">Nouveau</span>
                            <h3>L'EXPÉRIENCE CLIENT</h3>
                            <p className="event-desc">Transformez chaque interaction en une opportunité de fidélisation et de satisfaction client.</p>
                            
                            <div className="event-objective">Objectif : Placer le client au cœur de votre succès.</div>
                            
                            <ul className="event-list">
                                <li>Comprendre les enjeux et les leviers d’une stratégie d’expérience client</li>
                                <li>Instaurer une véritable culture client au sein de votre organisation</li>
                                <li>Gérer efficacement l’insatisfaction et en faire un levier de fidélisation</li>
                            </ul>

                            <div className="event-footer">
                                <div className="event-footer-info">
                                    <div className="footer-item"><Clock size={20} /> 1 HEURE (DE 15 À 50 PARTICIPANTS)</div>
                                    <div className="footer-item"><MapPin size={20} /> 244 ROUTE DE SEYSSES, 31100 TOULOUSE</div>
                                    <div className="footer-item"><Calendar size={20} /> LE 27 NOVEMBRE</div>
                                </div>
                                <a href="mailto:contact@metadxs.com" className="btn-register">Inscrivez-vous par mail</a>
                            </div>
                        </div>

                        {/* Event 5 */}
                        <div className="event-card">
                            <span className="badge-nouveau">Nouveau</span>
                            <h3>LE PERSONNAL BRANDING</h3>
                            <p className="event-desc">Révélez votre singularité et faites-la vivre.</p>
                            
                            <div className="event-objective">Objectif : Affirmer son identité professionnelle.</div>
                            
                            <ul className="event-list">
                                <li>Révéler et valoriser ses talents uniques pour se démarquer</li>
                                <li>Définir une stratégie de marketing de soi alignées avec ses objectifs</li>
                                <li>Construire une image authentique, cohérente et inspirante</li>
                            </ul>

                            <div className="event-footer">
                                <div className="event-footer-info">
                                    <div className="footer-item"><Clock size={20} /> 1 HEURE (DE 15 À 50 PARTICIPANTS)</div>
                                    <div className="footer-item"><MapPin size={20} /> 244 ROUTE DE SEYSSES, 31100 TOULOUSE</div>
                                    <div className="footer-item"><Calendar size={20} /> LE 11 DÉCEMBRE</div>
                                </div>
                                <a href="mailto:contact@metadxs.com" className="btn-register">Inscrivez-vous par mail</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
