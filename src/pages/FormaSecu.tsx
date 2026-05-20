
import { Helmet } from 'react-helmet-async';
import { Users, Award, MapPin, Mail, Phone, Bus, Coffee, Navigation, CheckCircle, GraduationCap, Building2, Briefcase, HeartHandshake, Lightbulb, Heart } from 'lucide-react';

export default function FormaSecu() {
    return (
        <>
            <Helmet>
                <title>Forma'Sécu | À propos de Meta DX School</title>
                <meta name="description" content="Découvrez les fondateurs de Meta DX School, notre pédagogie, nos reconnaissances officielles et notre campus." />
            </Helmet>

            <style>
                {`
                .fs-page-container {
                    background-color: #fafbfc;
                    color: var(--text-dark);
                    font-family: var(--font-base);
                    line-height: 1.6;
                }
                .fs-hero {
                    background: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), linear-gradient(135deg, #7b1fa2 0%, #db2777 100%);
                    color: white;
                    padding: 7rem 2rem 6rem;
                    text-align: center;
                    border-bottom-left-radius: 60px;
                    border-bottom-right-radius: 60px;
                    box-shadow: 0 15px 35px rgba(123, 31, 162, 0.2);
                }
                .fs-hero h1 {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                    font-weight: 800;
                    letter-spacing: -0.02em;
                }
                .fs-hero p {
                    font-size: 1.25rem;
                    opacity: 0.9;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .fs-section {
                    padding: 5rem 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .fs-section-title {
                    text-align: center;
                    font-size: 2.2rem;
                    color: var(--secondary-color);
                    margin-bottom: 3rem;
                    font-weight: 700;
                    position: relative;
                }
                .fs-section-title::after {
                    content: '';
                    display: block;
                    width: 60px;
                    height: 4px;
                    background-color: var(--accent-color);
                    margin: 1rem auto 0;
                    border-radius: 2px;
                }
                /* Grid Layouts */
                .fs-grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
                .fs-grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
                .fs-grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
                
                /* Cards */
                .fs-card {
                    background: white;
                    border-radius: 12px;
                    padding: 2rem;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .fs-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 30px rgba(0,0,0,0.08);
                }
                .fs-card-icon {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 60px;
                    height: 60px;
                    background-color: rgba(106, 27, 154, 0.1);
                    color: var(--primary-color);
                    border-radius: 50%;
                    margin-bottom: 1.5rem;
                }
                .fs-card h3 {
                    font-size: 1.25rem;
                    color: var(--secondary-color);
                    margin-bottom: 1rem;
                    font-weight: 600;
                }
                .fs-card-text {
                    color: #4b5563;
                    font-size: 0.95rem;
                }
                
                /* Testimonial / Quote style */
                .fs-quote-box {
                    background: white;
                    border-left: 4px solid var(--accent-color);
                    padding: 2rem;
                    border-radius: 0 12px 12px 0;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
                    font-style: italic;
                    font-size: 1.1rem;
                    color: #374151;
                    margin-bottom: 2rem;
                }
                .fs-quote-title {
                    font-weight: 700;
                    color: var(--secondary-color);
                    font-style: normal;
                    margin-bottom: 0.5rem;
                    font-size: 1.15rem;
                }
                
                /* Special formatting for founders */
                .fs-founders-text {
                    font-size: 1.1rem;
                    color: #4b5563;
                    margin-bottom: 1.5rem;
                }
                .fs-founders-names {
                    font-weight: 600;
                    color: var(--primary-color);
                    font-size: 1.1rem;
                }
                .fs-founders-role {
                    font-size: 0.9rem;
                    color: #6b7280;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                
                /* Team */
                .fs-team-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    padding: 1.5rem;
                    background: white;
                    border-radius: 12px;
                    border: 1px solid #e5e7eb;
                }
                .fs-team-emoji {
                    font-size: 2rem;
                    line-height: 1;
                }
                .fs-team-content h4 {
                    font-size: 1.1rem;
                    color: var(--primary-color);
                    margin-bottom: 0.25rem;
                }
                .fs-team-content span {
                    display: block;
                    font-size: 0.85rem;
                    color: #6b7280;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    text-transform: uppercase;
                }
                .fs-team-content p {
                    font-size: 0.9rem;
                    color: #4b5563;
                }
                
                /* Campus List */
                .fs-campus-list { list-style: none; padding: 0; }
                .fs-campus-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }
                .fs-campus-icon {
                    color: var(--accent-color);
                    flex-shrink: 0;
                    margin-top: 0.2rem;
                }
                
                /* Trombinoscope / Equipe */
                .trombi-section {
                    padding: 5rem 2rem;
                    max-width: 1450px;
                    margin: 0 auto;
                }
                .trombi-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 3.5rem 2.5rem; /* Espace large pour laisser l'avatar déborder */
                }
                @media (max-width: 1250px) { .trombi-grid { grid-template-columns: repeat(4, 1fr); } }
                @media (max-width: 1000px) { .trombi-grid { grid-template-columns: repeat(3, 1fr); gap: 4rem 2.5rem;} }
                @media (max-width: 750px) { .trombi-grid { grid-template-columns: repeat(2, 1fr); } }
                @media (max-width: 500px) { .trombi-grid { grid-template-columns: 1fr; } }
                
                .card-trombi {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    position: relative;
                }
                .card-trombi-top {
                    flex-grow: 1;
                    background-color: #ffffff;
                    border: 4px solid #1c1e4c;
                    border-bottom: none; /* Disparition de la bordure basse pour jonction flat */
                    border-radius: 35px 35px 0 0; /* Arrondis très prononcés en haut */
                    padding: 1.5rem 1rem 2rem;
                    color: #1c1e4c;
                }
                .card-trombi-title {
                    font-weight: 800;
                    font-size: 0.75rem;
                    text-align: center;
                    text-transform: uppercase;
                    margin-bottom: 1.25rem;
                    line-height: 1.35;
                    white-space: pre-line;
                    min-height: 2.2rem;
                }
                .card-trombi-subtitle {
                    font-weight: 700;
                    font-size: 0.65rem;
                    text-align: center;
                    margin-top: -1rem;
                    margin-bottom: 1rem;
                    color: #4b5563;
                    white-space: pre-line;
                }
                .card-trombi-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .card-trombi-list li {
                    font-size: 0.75rem;
                    line-height: 1.35;
                    font-weight: 600;
                    margin-bottom: 0.4rem;
                }
                .card-trombi-bottom {
                    background-color: #1c1e4c;
                    color: white;
                    padding: 1.25rem 1.25rem;
                    border-radius: 0 0 12px 12px; /* Coin carré/légerement arrondi en bas */
                    border: 4px solid #1c1e4c;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    min-height: 120px;
                }
                .card-trombi-name {
                    font-size: 1rem;
                    font-weight: 800;
                    line-height: 1.15;
                    margin-bottom: 0.25rem;
                    width: calc(100% - 30px);
                }
                .card-trombi-name .firstname {
                    text-transform: capitalize;
                }
                .card-trombi-name .lastname {
                    text-transform: uppercase;
                }
                .card-trombi-contact {
                    font-size: 0.7rem;
                    line-height: 1.4;
                    width: calc(100% - 30px);
                    color: rgba(255, 255, 255, 0.9);
                }
                .card-trombi-photo {
                    position: absolute;
                    right: -25px; /* Débordement à droite */
                    top: 0px; 
                    transform: translateY(-50%); /* Centrage parfait sur la ligne blanche/bleue */
                    width: 75px;
                    height: 75px;
                    border-radius: 50%;
                    background-color: #1c1e4c;
                    border: 4px solid white;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
                    z-index: 5;
                }
                .card-trombi-photo img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                `}
            </style>

            <div className="fs-page-container">
                {/* Hero */}
                <section className="fs-hero">
                    <h1>Forma'Sécu</h1>
                    <p>Découvrez l'histoire, les équipes et les engagements de Meta DX School.</p>
                </section>

                {/* Nos Fondateurs */}
                <section className="fs-section">
                    <div className="fs-grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 className="fs-section-title" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>Nos Fondateurs</h2>
                            <p className="fs-founders-text">
                                Meta DX School est une école de création récente, née d’un regroupement d’entreprises et de collaborateurs qui lui confère une grande force et une incontestable légitimité dans le domaine de la formation post-Bac, sur les secteurs du management, du commerce, de l’énergie et des nouvelles technologies.
                            </p>
                            <p className="fs-founders-text">
                                C’est du monde de l’entreprise lui-même qu’a ainsi émergé, suite à la crise internationale du Covid, cette nécessité de repenser la formation professionnelle en ayant à cœur l’employabilité et l’opérabilité immédiate des compétences acquises.
                            </p>
                            <p className="fs-founders-text">
                                Les formations que propose Meta DX School sont nées d’une convergence entre les besoins clairement identifiés d’entrepreneurs impliqués au quotidien dans le management stratégique ; et l’expertise de pédagogues confirmés, soucieux de pouvoir proposer à leurs apprenants des enseignements mieux adaptés à leurs futurs besoins professionnels.
                            </p>
                            <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f3f4f6', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                                <div className="fs-founders-names">Sami LECARDEUR, Abderahman ABID, Farès HAMZAOUI & Mahamat KHAYAL</div>
                                <div className="fs-founders-role">Co-fondateurs de Meta DX School</div>
                            </div>
                        </div>
                        <div>
                            <div className="fs-quote-box">
                                <div className="fs-quote-title">TOUT LE MONDE PEUT APPRENDRE</div>
                                « Quel que soit votre âge, votre situation ou votre besoin de formation, notre école possède toute l’expérience, les accréditations officielles et les technologies pour vous proposer une réponse personnalisée. »
                            </div>
                            <div className="fs-quote-box" style={{ marginBottom: 0 }}>
                                <div className="fs-quote-title">LA GARANTIE D'UN RÉSEAU D'ENTREPRISES</div>
                                « Peu importe votre trajectoire ou vos contacts personnels, notre école met son propre réseau d’entreprises à votre disposition pour vous permettre de réaliser votre immersion professionnelle. »
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reconnaissances Officielles */}
                <section style={{ backgroundColor: 'white', padding: '5rem 2rem' }}>
                    <div className="fs-section" style={{ padding: 0 }}>
                        <h2 className="fs-section-title">Des Reconnaissances Officielles</h2>
                        <div className="fs-grid-4">
                            <div className="fs-card">
                                <div className="fs-card-icon"><Award size={28} /></div>
                                <h3>Enregistré à France Compétences</h3>
                                <p className="fs-card-text">
                                    Établissement d’enseignement technique privé. La formation permet d’acquérir ou d’approfondir des compétences, assurant une adaptation rapide aux évolutions technologiques et à l'autonomie des collaborateurs.
                                </p>
                            </div>
                            <div className="fs-card">
                                <div className="fs-card-icon"><GraduationCap size={28} /></div>
                                <h3>Certifié du Bac+2 au Bac+5</h3>
                                <p className="fs-card-text">
                                    Nos formations sont reconnues au niveau national et international (crédits ECTS). La validation d’un diplôme vous confère des crédits utilisables à l’étranger pour la poursuite d'études.
                                </p>
                            </div>
                            <div className="fs-card">
                                <div className="fs-card-icon"><Building2 size={28} /></div>
                                <h3>Déclaré au Rectorat d’Académie</h3>
                                <p className="fs-card-text">
                                    Déclarée sous le n° 76 31 11 88 331 auprès du préfet et délivrée par la DREETS. Habilitée à enregistrer les candidats aux examens de l’académie de Toulouse (plateforme CYCLADES).
                                </p>
                            </div>
                            <div className="fs-card">
                                <div className="fs-card-icon"><CheckCircle size={28} /></div>
                                <h3>Pédagogie et Qualité</h3>
                                <p className="fs-card-text">
                                    Enseignements ISO 9001 et conformes aux exigences de la certification QUALIOPI. Nos formations sont éligibles aux financements publics : CPF, POE, PTP.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Notre équipe interne (Trombinoscope) */}
                <section className="trombi-section">
                    <h2 className="fs-section-title">Notre Équipe Interne</h2>
                    <div className="trombi-grid">
                        {[
                            {
                                title: "FONDATEUR",
                                tasks: ["- Conception et mise à jour de l'offre de formation", "- Recrutement, suivi et formation des intervenants", "- Veille technique et réglementaire"],
                                firstname: "Farès", lastname: "HAMZAOUI",
                                phone: "05.54.54.86.55", email: "direction@metadxs.com",
                                imgUrl: "https://ui-avatars.com/api/?name=Farès+Hamzaoui&background=1c1e4c&color=fff&size=150&font-size=0.33"
                            },
                            {
                                title: "DIRECTEUR\nCOMMERCIAL & FONDATEUR",
                                tasks: ["- Suivi de la relation commerciale", "- Gestion des aspects contractuels et financiers"],
                                firstname: "Mahamat", lastname: "KHAYAL",
                                phone: "05.54.54.86.55", email: "direction@metadxs.com",
                                imgUrl: "https://ui-avatars.com/api/?name=Mahamat+Khayal&background=1c1e4c&color=fff&size=150&font-size=0.33"
                            },
                            {
                                title: "DIRECTRICE CFA / OF CBC / VAE - RÉFÉRENTE HANDICAP ET ÉGALITÉ INSERTION PROFESSIONNELLE MOBILITÉ NATIONALE ET INTERNATIONALE",
                                tasks: ["- Mise en place et suivi de notre politique RSE", "- Garante de nos certifications qualité"],
                                firstname: "Sarah", lastname: "LACHEROY",
                                phone: "06.82.64.10.25", email: "sarah.lacheroy@metadxs.com",
                                imgUrl: "https://ui-avatars.com/api/?name=Sarah+Lacheroy&background=1c1e4c&color=fff&size=150&font-size=0.33"
                            },
                            {
                                title: "RESPONSABLE PÉDAGOGIQUE\nET DÉVELOPPEMENT",
                                tasks: ["- Pilotage du projet", "- Accompagnement pédagogique"],
                                firstname: "Julie", lastname: "MOUILLAT",
                                phone: "07.59.60.60.40", email: "julie.mouillat@metadxs.com",
                                imgUrl: "https://ui-avatars.com/api/?name=Julie+Mouillat&background=1c1e4c&color=fff&size=150&font-size=0.33"
                            },
                            {
                                title: "RESPONSABLE DES RESSOURCES HUMAINES ET RÉFÉRENT HANDICAP",
                                tasks: ["- Recrutement, intégration et suivi des salariés", "- Accueil des stagiaires en situation de handicap"],
                                firstname: "Sami", lastname: "LECARDEUR",
                                phone: "05.54.54.86.55", email: "contact@metadxs.com",
                                imgUrl: "https://ui-avatars.com/api/?name=Sami+Lecardeur&background=1c1e4c&color=fff&size=150&font-size=0.33"
                            },
                            {
                                title: "CHARGÉE DES\nRELATIONS CANDIDATS",
                                tasks: ["- Recrutement des stagiaires", "- Animation des Bootcamps (ateliers TRE)", "- Présélection des profils pour les entreprises"],
                                firstname: "Laura", lastname: "DUCHEN",
                                phone: "05.54.54.89.95", email: "contact@metadxs.com",
                                imgUrl: "https://ui-avatars.com/api/?name=Laura+Duchen&background=1c1e4c&color=fff&size=150&font-size=0.33"
                            },
                            {
                                title: "COORDINATRICE ADMINISTRATIVE CHARGÉE DU SUIVI ACTION SOCIALE",
                                subtitle: "ASSISTANTE PÉDAGOGIQUE\nET TECHNIQUE",
                                tasks: ["- Suivi des aspects administratifs et logistiques des formations", "- Facturation des prestations réalisées"],
                                firstname: "Louise", lastname: "ESCULIER",
                                phone: "06.09.81.86.26", email: "contact@metadxs.com",
                                imgUrl: "https://ui-avatars.com/api/?name=Louise+Esculier&background=1c1e4c&color=fff&size=150&font-size=0.33"
                            },
                            {
                                title: "CHARGÉE DES\nRELATIONS ENTREPRISES",
                                tasks: ["- Audits des besoins des entreprises", "- Mises en relation et placement des stagiaires", "- Validation des contrats"],
                                firstname: "Mikalo", lastname: "RANJAHALY",
                                phone: "06.82.64.10.26", email: "contact@metadxs.com",
                                imgUrl: "https://ui-avatars.com/api/?name=Mikalo+Ranjahaly&background=1c1e4c&color=fff&size=150&font-size=0.33"
                            },
                            {
                                title: "CHARGÉE DE\nCOMMUNICATION",
                                tasks: ["- Interne (livrets d'accueil, catalogue, etc.)", "- Externe (site, réseaux sociaux, événements, etc.)"],
                                firstname: "Nina", lastname: "DE BARROS",
                                phone: "05.54.54.86.55", email: "contact@metadxs.com",
                                imgUrl: "https://ui-avatars.com/api/?name=Nina+De+Barros&background=1c1e4c&color=fff&size=150&font-size=0.33"
                            },
                            {
                                title: "DÉLÉGUÉ À LA PROTECTION\nDES DONNÉES (DPO)",
                                tasks: ["- Garant du respect des obligations liées au RGPD"],
                                firstname: "Abderahman", lastname: "ABID",
                                phone: "05.54.54.86.55", email: "contact@metadxs.com",
                                imgUrl: "https://ui-avatars.com/api/?name=Abderahman+Abid&background=1c1e4c&color=fff&size=150&font-size=0.33"
                            }
                        ].map((member, index) => (
                            <div className="card-trombi" key={index}>
                                <div className="card-trombi-top">
                                    <div className="card-trombi-title">{member.title}</div>
                                    {member.subtitle && <div className="card-trombi-subtitle">{member.subtitle}</div>}
                                    <ul className="card-trombi-list">
                                        {member.tasks.map((task, i) => <li key={i}>{task}</li>)}
                                    </ul>
                                </div>
                                <div className="card-trombi-bottom">
                                    <div className="card-trombi-photo">
                                        <img src={member.imgUrl} alt={member.firstname + ' ' + member.lastname} />
                                    </div>
                                    <div className="card-trombi-name">
                                        <span className="firstname">{member.firstname}</span> <br />
                                        <span className="lastname">{member.lastname}</span>
                                    </div>
                                    <div className="card-trombi-contact">
                                        {member.phone}<br />
                                        {member.email}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Valeurs & Engagements */}
                <section style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '5rem 2rem' }}>
                    <div className="fs-section" style={{ padding: 0 }}>
                        <h2 className="fs-section-title" style={{ color: 'white' }}>Nos Valeurs & Engagements</h2>
                        <div className="fs-grid-4">
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ display: 'inline-flex', backgroundColor: 'rgba(255,255,255,0.1)', padding: '1.25rem', borderRadius: '50%', marginBottom: '1rem' }}>
                                    <Lightbulb size={32} color="white" />
                                </div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: '600' }}>Excellence & Innovation</h4>
                                <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>Enseignement de qualité avec des outils innovants et méthodes adaptées au marché.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ display: 'inline-flex', backgroundColor: 'rgba(255,255,255,0.1)', padding: '1.25rem', borderRadius: '50%', marginBottom: '1rem' }}>
                                    <HeartHandshake size={32} color="white" />
                                </div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: '600' }}>Accompagnement & Proximité</h4>
                                <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>Accompagnement personnalisé avec une équipe à l'écoute pour assurer votre réussite.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ display: 'inline-flex', backgroundColor: 'rgba(255,255,255,0.1)', padding: '1.25rem', borderRadius: '50%', marginBottom: '1rem' }}>
                                    <Users size={32} color="white" />
                                </div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: '600' }}>Inclusion & Égalité</h4>
                                <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>Un environnement inclusif et bienveillant où chacun peut évoluer à son propre rythme.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ display: 'inline-flex', backgroundColor: 'rgba(255,255,255,0.1)', padding: '1.25rem', borderRadius: '50%', marginBottom: '1rem' }}>
                                    <Briefcase size={32} color="white" />
                                </div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: '600' }}>Employabilité</h4>
                                <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>Formations conçues avec des experts garantissant une adéquation avec le marché.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Le Campus */}
                <section className="fs-section">
                    <h2 className="fs-section-title">Le Campus</h2>
                    <div className="fs-grid-2">
                        <div className="fs-card" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                            <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <MapPin size={24} style={{ color: 'var(--primary-color)' }} />
                                Nous Trouver
                            </h3>
                            <ul className="fs-campus-list">
                                <li>
                                    <MapPin className="fs-campus-icon" size={20} />
                                    <span>244 Route de Seysses, 31100 Toulouse</span>
                                </li>
                                <li>
                                    <Phone className="fs-campus-icon" size={20} />
                                    <span>05 37 04 02 64</span>
                                </li>
                                <li>
                                    <Mail className="fs-campus-icon" size={20} />
                                    <span>contact@metadxs.com</span>
                                </li>
                            </ul>

                            <h4 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--secondary-color)', fontSize: '1.1rem' }}>Comment s’y rendre ?</h4>
                            <ul className="fs-campus-list">
                                <li>
                                    <Navigation className="fs-campus-icon" size={20} />
                                    <span><strong>En métro :</strong> 10 minutes à pieds de l’arrêt Reynerie (Ligne A)</span>
                                </li>
                                <li>
                                    <Bus className="fs-campus-icon" size={20} />
                                    <span><strong>En bus :</strong> Ligne 7 depuis Mermoz, Arrêt Bordelongue</span>
                                </li>
                            </ul>
                        </div>

                        <div className="fs-card" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                            <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Building2 size={24} style={{ color: 'var(--primary-color)' }} />
                                Nos Équipements
                            </h3>
                            <ul className="fs-campus-list">
                                <li>
                                    <CheckCircle className="fs-campus-icon" size={20} />
                                    <span>3 salles de classes et de TP</span>
                                </li>
                                <li>
                                    <CheckCircle className="fs-campus-icon" size={20} />
                                    <span>1 salle de réunion & 1 salle informatique</span>
                                </li>
                                <li>
                                    <Coffee className="fs-campus-icon" size={20} />
                                    <span>WIFI gratuit, distributeurs, cafétéria (assortiment de sandwichs et salades) & food trucks chaque midi.</span>
                                </li>
                            </ul>

                            <h4 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--secondary-color)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                                <Heart className="fs-campus-icon" size={20} style={{ margin: 0 }} />
                                Accessibilité Handicap
                            </h4>
                            <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                Nos formations sont natuellement ouvertes aux personnes à mobilité réduite. Les parties communes et salles de cours/TP sont accessibles par ascenseur. N’hésitez pas à nous contacter pour envisager des protocoles spécifiques adaptés à votre situation.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
