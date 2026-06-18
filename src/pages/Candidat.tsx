import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Train, GraduationCap, Accessibility, ArrowRight } from 'lucide-react';
import '../styles/Candidat.css';

export default function Candidat() {
    return (
        <div>
            <Helmet>
                <title>Process de Candidature - Meta DX School</title>
                <meta name="description" content="Découvrez les étapes pour candidater à Meta DX School. Que vous ayez déjà une entreprise ou non, nous vous accompagnons dans votre parcours d'alternance." />
                <link rel="canonical" href="https://www.metadxs.com/contact/candidat" />
            </Helmet>

            {/* HERO SECTION */}
            <section className="candidat-hero">
                <div className="candidat-hero-content">
                    <h1 className="candidat-title">PROCESS DE<br />CANDIDATURE</h1>
                    <p className="candidat-subtitle">CANDIDATER À META DX SCHOOL : COMMENT ÇA MARCHE ?</p>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="section-intro">
                <div className="intro-container">
                    <p className="intro-text">
                        Que vous ayez ou non trouvé une entreprise, voici les étapes pour devenir élève chez nous.
                        <br /><br />
                        <span className="intro-highlight">Vous n’avez pas encore d’entreprise pour votre alternance ?</span> Passez par la phase 1 et 2.
                        <br />
                        <span className="intro-highlight">Vous avez déjà une entreprise ?</span> Passez directement à la phase 2.
                    </p>
                </div>
            </section>

            {/* PHASES SECTION */}
            <section className="section-phases">
                <div className="phases-container">
                    {/* PHASE 1 */}
                    <div className="phase-card">
                        <span className="phase-number">01</span>
                        <h3 className="phase-title">PHASE 1</h3>
                        <p className="phase-desc">Premier contact et/ou renseignements</p>
                        <a href="https://tally.so/r/waaXj2" target="_blank" rel="noopener noreferrer" className="phase-cta">
                            Remplissez le questionnaire <ArrowRight size={16} style={{ display: 'inline', marginLeft: '5px' }} />
                        </a>
                    </div>

                    {/* PHASE 2 */}
                    <div className="phase-card">
                        <span className="phase-number">02</span>
                        <h3 className="phase-title">PHASE 2</h3>
                        <p className="phase-desc">Vous avez fini la phase 1 et/ou vous avez déjà votre entreprise</p>
                        <a href="https://metadxs.ymag.cloud/" target="_blank" rel="noopener noreferrer" className="phase-cta">
                            Créez votre espace Yparéo <ArrowRight size={16} style={{ display: 'inline', marginLeft: '5px' }} />
                        </a>
                    </div>
                </div>
            </section>

            {/* CAMPUS SECTION */}
            <section className="section-campus">
                <div className="campus-container">
                    <h2 className="campus-title">LE CAMPUS</h2>

                    <div className="campus-grid">
                        {/* Column 1: Coordonnées & Accès */}
                        <div>
                            <div className="campus-info-block">
                                <h3 className="info-title"><MapPin size={24} /> Nos coordonnées</h3>
                                <ul className="info-list">
                                    <li><a href="https://maps.google.com/?q=244+Route+de+Seysses,+Bâtiment+2,+31100+Toulouse" target="_blank" rel="noopener noreferrer">244 Route de Seysses, Bâtiment 2, 4e étage, 31100 Toulouse</a></li>
                                    <li><Phone size={18} className="mt-1" /> 06 82 64 10 25 / 06 82 64 10 26</li>
                                    <li><Mail size={18} className="mt-1" /> contact@metadxs.com</li>
                                </ul>
                            </div>

                            <div className="campus-info-block">
                                <h3 className="info-title"><Train size={24} /> Comment s’y rendre ?</h3>
                                <ul className="info-list">
                                    <li><strong>En métro :</strong> 10 minutes à pieds de l’arrêt Reynerie (Ligne A)</li>
                                    <li><strong>En bus :</strong> Ligne 7 depuis Mermoz, Arrêt Bordelongue</li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Equipements & Handicap */}
                        <div>
                            <div className="campus-info-block">
                                <h3 className="info-title"><GraduationCap size={24} /> Nos équipements</h3>
                                <p className="info-text">
                                    Au sein de l’école vous trouverez 3 salles de classes et de TP, ainsi qu’une salle de réunion et une salle informatique.
                                    Nos apprenants ont également accès au WIFI gratuit, ainsi qu’à des distributeurs de boissons chaudes et de friandises.
                                    <br /><br />
                                    Pour se restaurer, une cafétéria propose un assortiment de sandwichs et salades fraiches, tandis que des food trucks sont présents chaque midi devant l’entrée de l’école.
                                </p>
                            </div>

                            <div className="campus-info-block">
                                <h3 className="info-title"><Accessibility size={24} /> Accessibilité</h3>
                                <p className="info-text">
                                    Nos formations sont naturellement ouvertes aux personnes à mobilité réduite. Les parties communes et salles de cours-TP sont notamment accessibles par ascenseur.
                                    N’hésitez pas à nous contacter afin d’envisager des protocoles d’accueil spécifiques adaptés à votre situation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
