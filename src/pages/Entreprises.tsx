import { Helmet } from 'react-helmet-async';
import { Briefcase, CreditCard, BookOpen, Send, TrendingUp, CheckCircle, Clock, Calendar, Users, Heart, Target, Rocket, Smile } from 'lucide-react';
import '../styles/Entreprises.css';

// Import Partner Logos
import boumBurger from '../assets/BOUM-BURGER-SINCE-980x551-1.png';
import bigSmash from '../assets/BigSmash.jpg';
import dxEnergy from '../assets/DX.ENERGY.LOGO_Toulouse-980x980.jpg';
import nocibe from '../assets/Logo-Nocibe.png';
import carrefour from '../assets/Logo_carrefour.png';
import choixDeVie from '../assets/Logo_choixdevie.png';
import microDidact from '../assets/Microdidact_Logo_alt-980x538.png';
import sixt from '../assets/Sixt-Logo-980x551.png';
import subway from '../assets/Subway.png';
import didaxel from '../assets/didaxel.png';
import leelou from '../assets/logoLeelou.png';
import vival from '../assets/logo_vival.jpg';
import maisonDuMonde from '../assets/maison-du-monde.png';
import marcheDeMo from '../assets/march_de_mo_logo.jpg';
import pointFort from '../assets/pointfort.png';
import logoInline from '../assets/logo-inline.png';



export default function Entreprises() {
    return (
        <div>
            <Helmet>
                <title>Entreprises : Recrutez vos talents - Meta DX School</title>
                <meta name="description" content="Recrutez vos futurs talents avec Meta DX School. Accompagnement personnalisé, sourcing qualifié via GRIMP et gestion simplifiée de l'alternance." />
                <link rel="canonical" href="https://www.metadxs.com/contact/entreprises" />
            </Helmet>

            {/* HERO SECTION */}
            <section className="entreprises-hero">
                <div className="entreprises-hero-content">
                    <h1 className="entreprises-title">RECRUTEZ AVEC<br />META DX SCHOOL</h1>
                    <p className="entreprises-subtitle">ACCUEILLIR • FORMER • RECRUTER AUTREMENT</p>
                    <a href="#grimp-platform" className="entreprises-cta-hero">Trouver un alternant</a>
                </div>
            </section>

            {/* SECTION 1: CONSEIL & INFO */}
            <section className="section-conseil">
                <div className="conseil-container">
                    <h2 className="section-title-dark">META DX EST LÀ POUR VOUS</h2>
                    <p style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem', color: '#64748b' }}>Besoin de conseil ou d'information ? Nous simplifions vos démarches.</p>

                    <div className="conseil-grid">
                        {/* Card 1 */}
                        <div className="conseil-card">
                            <div className="card-icon-circle"><Briefcase size={28} /></div>
                            <h3 className="card-title">Vous hésitez encore ?</h3>
                            <p className="card-desc">Prenez le temps de comparer les différents types de contrats, leurs avantages et spécificités.</p>
                            <a href="https://www.service-public.fr/particuliers/vosdroits/F2918" target="_blank" rel="noopener noreferrer" className="card-link">
                                Comparatif officiel <TrendingUp size={16} />
                            </a>
                        </div>

                        {/* Card 2 */}
                        <div className="conseil-card">
                            <div className="card-icon-circle"><CreditCard size={28} /></div>
                            <h3 className="card-title">Combien cela va coûter ?</h3>
                            <p className="card-desc">Rémunération, exonérations, charges : simulez le coût réel d’un alternant selon votre situation.</p>
                            <a href="https://www.alternance.emploi.gouv.fr/simulateur-employer" target="_blank" rel="noopener noreferrer" className="card-link">
                                Simulateur coût <TrendingUp size={16} />
                            </a>
                        </div>

                        {/* Card 3 */}
                        <div className="conseil-card">
                            <div className="card-icon-circle"><BookOpen size={28} /></div>
                            <h3 className="card-title">Formation salarié ?</h3>
                            <p className="card-desc">Comprenez vos droits et obligations pour former vos équipes (OPCO, FAF, etc.).</p>
                            <a href="https://travail-emploi.gouv.fr/formation-professionnelle" target="_blank" rel="noopener noreferrer" className="card-link">
                                Infos formation pro <TrendingUp size={16} />
                            </a>
                        </div>

                        {/* Card 4 */}
                        <div className="conseil-card">
                            <div className="card-icon-circle"><Send size={28} /></div>
                            <h3 className="card-title">Vous avez une offre ?</h3>
                            <p className="card-desc">Notre équipe Relations Entreprises est là pour vous accompagner à chaque étape.</p>
                            <a href="mailto:contact@metadxs.com" className="card-link">
                                Nous contacter <TrendingUp size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: GRIMP PLATFORM */}
            <section id="grimp-platform" className="section-grimp">
                <div className="grimp-container">
                    <div className="grimp-content">
                        <h2>GRIMP : VOTRE INTERFACE<br />POUR RECRUTER FACILEMENT</h2>
                        <p className="grimp-desc">
                            GRIMP est notre plateforme partenaire dédiée à la gestion des candidatures en alternance.
                            En tant qu’entreprise, vous y avez un accès direct pour publier vos offres et sourcer les meilleurs profils.
                        </p>

                        <ul className="grimp-features">
                            <li className="grimp-feature-item"><CheckCircle size={20} color="#34d399" /> Publier vos offres</li>
                            <li className="grimp-feature-item"><CheckCircle size={20} color="#34d399" /> Consulter les profils</li>
                            <li className="grimp-feature-item"><CheckCircle size={20} color="#34d399" /> Suivi candidatures</li>
                            <li className="grimp-feature-item"><CheckCircle size={20} color="#34d399" /> Contact direct</li>
                        </ul>

                        <a href="https://app.grimp.io/signup/company" target="_blank" rel="noopener noreferrer" className="grimp-cta">
                            ACCÉDER À LA PLATEFORME <TrendingUp />
                        </a>
                    </div>

                    <div className="grimp-visual">
                        {/* Placeholder for GRIMP UI or Logo */}
                        <div style={{ fontSize: '4rem', fontWeight: '900', color: 'white', marginBottom: '1rem', letterSpacing: '5px' }}>GRIMP</div>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem' }}>Technologie de Recrutement Avancée</p>
                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.9rem' }}>🔥 Matching IA</span>
                            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.9rem' }}>🚀 Rapide</span>
                            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.9rem' }}>💼 Espace RH</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: FAQ / INFO PRATIQUE */}
            <section className="section-faq">
                <div className="faq-container">
                    <h2 className="section-title-dark">INFOS PRATIQUES</h2>

                    <div className="faq-grid">
                        <div className="faq-item">
                            <div className="faq-question"><CreditCard size={24} color="#3b82f6" /> Coût pour l'entreprise ?</div>
                            <div className="faq-answer">
                                <strong style={{ color: '#22c55e', fontSize: '1.2rem' }}>0 €</strong> pour l’entreprise.<br />
                                La formation est prise en charge à 100 % par les OPCO (selon le profil du candidat et le contrat). Aucune avance à prévoir.
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question"><Clock size={24} color="#3b82f6" /> Durée des contrats ?</div>
                            <div className="faq-answer">
                                <strong>Présentiel :</strong> 12 mois*<br />
                                <strong>E-learning :</strong> 14 mois<br />
                                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>*Durée indicative selon le titre visé.</span>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question"><Calendar size={24} color="#3b82f6" /> Démarrage ?</div>
                            <div className="faq-answer">
                                Les rentrées sont organisées <strong>tout au long de l’année</strong>. Contactez-nous pour caler un démarrage adapté à votre recrutement.
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question"><Users size={24} color="#3b82f6" /> Qui peut signer ?</div>
                            <div className="faq-answer">
                                <strong>- 30 ans :</strong> Contrat d’apprentissage<br />
                                <strong>30 ans et + :</strong> Contrat de professionnalisation<br />
                                On vous aide à choisir le bon contrat.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: PARTNERS */}
            <div className="section-partners" style={{ background: 'white', padding: '4rem 0 6rem 0', overflow: 'hidden' }}>
                <h2 className="partners-title">ILS NOUS ONT FAIT CONFIANCE</h2>
                <div style={{ maxWidth: '1200px', margin: '0 auto', opacity: 0.8, textAlign: 'center', marginBottom: '2rem' }}>
                    <p className="partners-subtitle" style={{ color: '#64748b', fontSize: '1.2rem' }}>Plus de 100 entreprises sont nos partenaires, découvrez-en une partie !</p>
                </div>

                <div className="partners-marquee">
                    {/* ROW 1 - LEFT */}
                    <div className="partners-track track-left">
                        {/* SET 1 */}
                        <div className="partner-logo-item"><img src={logoInline} alt="Tolosa Services" /></div>
                        <div className="partner-logo-item"><img src={vival} alt="Vival" /></div>
                        <div className="partner-logo-item"><img src={pointFort} alt="Point Fort" /></div>
                        <div className="partner-logo-item"><img src={boumBurger} alt="Boum Burger" /></div>
                        <div className="partner-logo-item"><img src={choixDeVie} alt="Choix de Vie" /></div>
                        <div className="partner-logo-item"><img src={microDidact} alt="Micro Didact" /></div>
                        {/* DUPLICATE */}
                        <div className="partner-logo-item"><img src={logoInline} alt="Tolosa Services" /></div>
                        <div className="partner-logo-item"><img src={vival} alt="Vival" /></div>
                        <div className="partner-logo-item"><img src={pointFort} alt="Point Fort" /></div>
                        <div className="partner-logo-item"><img src={boumBurger} alt="Boum Burger" /></div>
                        <div className="partner-logo-item"><img src={choixDeVie} alt="Choix de Vie" /></div>
                        <div className="partner-logo-item"><img src={microDidact} alt="Micro Didact" /></div>
                        {/* TRIPLICATE */}
                        <div className="partner-logo-item"><img src={logoInline} alt="Tolosa Services" /></div>
                        <div className="partner-logo-item"><img src={vival} alt="Vival" /></div>
                        <div className="partner-logo-item"><img src={pointFort} alt="Point Fort" /></div>
                        <div className="partner-logo-item"><img src={boumBurger} alt="Boum Burger" /></div>
                    </div>

                    {/* ROW 2 - RIGHT */}
                    <div className="partners-track track-right">
                        {/* SET 2 */}
                        <div className="partner-logo-item"><img src={didaxel} alt="Didaxell" /></div>
                        <div className="partner-logo-item"><img src={subway} alt="Subway" /></div>
                        <div className="partner-logo-item"><img src={bigSmash} alt="Big Smash" /></div>
                        <div className="partner-logo-item"><img src={nocibe} alt="Nocibé" /></div>
                        <div className="partner-logo-item"><img src={marcheDeMo} alt="Marché de Mo" /></div>
                        <div className="partner-logo-item"><img src={dxEnergy} alt="DX Energy" /></div>
                        {/* DUPLICATE */}
                        <div className="partner-logo-item"><img src={didaxel} alt="Didaxell" /></div>
                        <div className="partner-logo-item"><img src={subway} alt="Subway" /></div>
                        <div className="partner-logo-item"><img src={bigSmash} alt="Big Smash" /></div>
                        <div className="partner-logo-item"><img src={nocibe} alt="Nocibé" /></div>
                        <div className="partner-logo-item"><img src={marcheDeMo} alt="Marché de Mo" /></div>
                        <div className="partner-logo-item"><img src={dxEnergy} alt="DX Energy" /></div>
                        {/* TRIPLICATE */}
                        <div className="partner-logo-item"><img src={didaxel} alt="Didaxell" /></div>
                        <div className="partner-logo-item"><img src={subway} alt="Subway" /></div>
                        <div className="partner-logo-item"><img src={bigSmash} alt="Big Smash" /></div>
                        <div className="partner-logo-item"><img src={nocibe} alt="Nocibé" /></div>
                    </div>

                    {/* ROW 3 - LEFT */}
                    <div className="partners-track track-left">
                        {/* SET 3 */}
                        <div className="partner-logo-item"><img src={leelou} alt="Leelou & Bidule" /></div>
                        <div className="partner-logo-item"><img src={carrefour} alt="Carrefour" /></div>
                        <div className="partner-logo-item"><img src={sixt} alt="Sixt" /></div>
                        <div className="partner-logo-item"><img src={maisonDuMonde} alt="Maison du Monde" /></div>
                        <div className="partner-logo-item"><img src={logoInline} alt="Tolosa Services" /></div>
                        <div className="partner-logo-item"><img src={vival} alt="Vival" /></div>
                        {/* DUPLICATE */}
                        <div className="partner-logo-item"><img src={leelou} alt="Leelou & Bidule" /></div>
                        <div className="partner-logo-item"><img src={carrefour} alt="Carrefour" /></div>
                        <div className="partner-logo-item"><img src={sixt} alt="Sixt" /></div>
                        <div className="partner-logo-item"><img src={maisonDuMonde} alt="Maison du Monde" /></div>
                        <div className="partner-logo-item"><img src={logoInline} alt="Tolosa Services" /></div>
                        <div className="partner-logo-item"><img src={vival} alt="Vival" /></div>
                        {/* TRIPLICATE */}
                        <div className="partner-logo-item"><img src={leelou} alt="Leelou & Bidule" /></div>
                        <div className="partner-logo-item"><img src={carrefour} alt="Carrefour" /></div>
                        <div className="partner-logo-item"><img src={sixt} alt="Sixt" /></div>
                        <div className="partner-logo-item"><img src={maisonDuMonde} alt="Maison du Monde" /></div>
                    </div>
                </div>
            </div>

            {/* SECTION 5: VALUES */}
            <section className="section-values">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="partners-title" style={{ color: 'white', marginBottom: '1rem' }}>NOS VALEURS & ENGAGEMENTS</h2>
                    <div style={{ width: '60px', height: '4px', background: '#3b82f6', margin: '0 auto' }}></div>
                </div>

                <div className="values-grid">
                    <div className="value-card">
                        <Rocket size={40} color="#60a5fa" style={{ marginBottom: '1rem' }} />
                        <h3 className="value-title">Excellence & Innovation</h3>
                        <p className="value-text">Enseignement de qualité intégrant des outils pédagogiques innovants et des méthodes adaptées aux évolutions du marché.</p>
                    </div>

                    <div className="value-card">
                        <Heart size={40} color="#f472b6" style={{ marginBottom: '1rem' }} />
                        <h3 className="value-title">Accompagnement & Proximité</h3>
                        <p className="value-text">Un suivi personnalisé pour chaque apprenant, de l'orientation à l'insertion professionnelle.</p>
                    </div>

                    <div className="value-card">
                        <Smile size={40} color="#fbbf24" style={{ marginBottom: '1rem' }} />
                        <h3 className="value-title">Inclusion & Égalité</h3>
                        <p className="value-text">Accès à la formation pour tous. Environnement inclusif et bienveillant pour évoluer à son rythme.</p>
                    </div>

                    <div className="value-card">
                        <Target size={40} color="#34d399" style={{ marginBottom: '1rem' }} />
                        <h3 className="value-title">Engagement & Employabilité</h3>
                        <p className="value-text">Formations conçues avec des entreprises expertes pour garantir une adéquation parfaite avec le marché.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
