import { Star, MapPin, Phone, Mail, Train, Bus } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

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
import logoInline from '../assets/logo-inline.png';

// Import Background Images
import schoolBg from '../assets/school-card-bg.jpg';
import conseilBg from '../assets/conseil-card-bg.jpg';

// Define the content for each tab
const TAB_CONTENT = {
    alternance: {
        title: "FORMATIONS EN ALTERNANCE",
        text: "Nos formations en alternance, du niveau bac à bac+5, sont conçues pour offrir une expérience d'apprentissage équilibrée entre la théorie et la pratique. Elles permettent aux apprenants de se former tout en étant immersés dans le monde professionnel. Grâce à des partenariats solides avec des entreprises locales et nationales, nous garantissons des opportunités d'insertion professionnelle rapides et efficaces."
    },
    organisme: {
        title: "ORGANISME DE FORMATION",
        text: "Notre organisme propose des parcours sur mesure pour développer vos compétences. Que vous soyez salariés ou demandeurs d'emploi, nous mettons à votre disposition des programmes adaptés aux besoins du marché."
    },
    vae: {
        title: "VALIDATION DES ACQUIS DE L'EXPÉRIENCE (VAE)",
        text: "Faites reconnaître votre expérience professionnelle et obtenez un diplôme grâce à la VAE. Nous vous accompagnons tout au long du processus, de la constitution du dossier à la préparation de l'oral."
    },
    bilan: {
        title: "BILAN DE COMPÉTENCES",
        text: "Faites le point sur votre carrière et définissez un nouveau projet professionnel grâce à notre bilan de compétences. Un accompagnement personnalisé pour valoriser vos atouts et réussites."
    }
};

function Home() {
    const [activeTab, setActiveTab] = useState<'alternance' | 'organisme' | 'vae' | 'bilan'>('alternance');

    return (
        <div>
            <Helmet>
                <title>Meta DX School & Conseils | CFA & Organisme de Formation à Toulouse</title>
                <meta name="description" content="Meta DX School : Votre CFA et organisme de formation à Toulouse. Alternance du BAC au BAC+5, formations IA, numérique, communication et management. Accompagnement VAE et Bilan de compétences." />
                <meta name="keywords" content="CFA Toulouse, formation alternance Toulouse, formation IA, communication digitale, management, VAE, bilan de compétences, Meta DX School" />

                {/* Facebook / Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.metadxs.com/" />
                <meta property="og:title" content="Meta DX School & Conseils - Expert Formation & Audit à Toulouse" />
                <meta property="og:description" content="Découvrez Meta DX School : votre partenaire expert en formations IT, cybersécurité et conseil Qualiopi à Toulouse." />
                <meta property="og:image" content="https://www.metadxs.com/og-image.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.metadxs.com/" />
                <meta property="twitter:title" content="Meta DX School & Conseils - Expert Formation & Audit à Toulouse" />
                <meta property="twitter:description" content="Découvrez Meta DX School : votre partenaire expert en formations IT, cybersécurité et conseil Qualiopi à Toulouse." />
                <meta property="twitter:image" content="https://www.metadxs.com/og-image.jpg" />

                <link rel="canonical" href="https://www.metadxs.com/" />
            </Helmet>
            {/* CLASH HERO SECTION */}
            <section className="hero-split-wrapper">
                {/* LEFT - SCHOOL */}
                <Link to="/cfa" className="split-panel panel-school">
                    <div className="panel-content">
                        <h1 className="panel-title">META DX<br />SCHOOL</h1>
                        <p className="panel-subtitle">L'ÉCOLE DES FUTURS TALENTS</p>
                        <span className="panel-cta">DÉCOUVRIR LE CFA</span>
                    </div>
                    <div className="panel-overlay"></div>
                </Link>



                {/* RIGHT - CONSEIL */}
                <Link to="/conseils-formations" className="split-panel panel-conseil">
                    <div className="panel-content">
                        <h1 className="panel-title">METADXS<br />CONSEILS</h1>
                        <p className="panel-subtitle">L'EXPERTISE RH & FORMATION</p>
                        <span className="panel-cta">DÉCOUVRIR L'ORGANISME</span>
                    </div>
                    <div className="panel-overlay"></div>
                </Link>
            </section>

            {/* WELCOME SECTION */}
            <section className="welcome-section">
                <h2 className="welcome-title">BIENVENUE CHEZ METADXS</h2>
                <p className="welcome-text">
                    Le groupe METADXS est acteur de la formation engagé en faveur de l'inclusion, de la montée en compétences et de l'innovation pédagogique.
                    <br /><br />
                    Nous vous accompagnons à chaque étape de votre parcours, que vous soyez en reconversion, en recherche d'alternance, ou une entreprise souhaitant former ses équipes.
                    Deux entités, un même objectif : rendre la formation accessible, humaine et impactante.
                </p>

                {/* TABS SECTION (replacing old Services Grid) */}
                <div className="tabs-container">
                    <div className="tabs-header">
                        <button
                            className={`tab-button ${activeTab === 'alternance' ? 'active' : ''}`}
                            onClick={() => setActiveTab('alternance')}
                        >
                            FORMATIONS EN<br />ALTERNANCE
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'organisme' ? 'active' : ''}`}
                            onClick={() => setActiveTab('organisme')}
                        >
                            ORGANISME<br />DE FORMATION
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'vae' ? 'active' : ''}`}
                            onClick={() => setActiveTab('vae')}
                        >
                            VALIDATION DES ACQUIS<br />DE L'EXPÉRIENCE (VAE)
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'bilan' ? 'active' : ''}`}
                            onClick={() => setActiveTab('bilan')}
                        >
                            BILAN DE<br />COMPÉTENCES
                        </button>
                    </div>

                    <div className="tab-content">
                        <p className="tab-description">
                            {TAB_CONTENT[activeTab].text}
                        </p>
                    </div>
                </div>

                <p style={{ marginTop: '2rem', fontSize: '1.1rem' }}>
                    Si vous avez des questions ou des interrogations, n'hésitez pas à nous contacter, nous sommes là pour vous aider et vous accompagner dans votre projet professionnel.
                </p>

                {/* POLES SECTION */}
                <div className="poles-section">
                    <h2 className="poles-title">DÉCOUVREZ NOS DEUX PÔLES D'EXPERTISE POUR RÉPONDRE À VOS BESOINS :</h2>

                    <div className="poles-grid">
                        {/* POLE 1: META DX SCHOOL */}
                        <div className="pole-card bg-school" style={{ backgroundImage: `linear-gradient(rgba(76, 29, 149, 0.85), rgba(236, 72, 153, 0.8)), url(${schoolBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="pole-card-content">
                                <h3>META DX SCHOOL</h3>
                                <p className="pole-description">Le Centre de Formation d’Apprentis dédié aux jeunes talents et aux futurs professionnels.</p>

                                <ul className="pole-list">
                                    <li>📌 Formations en alternance reconnues</li>
                                    <li>📌 Accompagnement pédagogique et humain</li>
                                    <li>📌 Insertion professionnelle renforcée</li>
                                </ul>

                                <p className="pole-question">Vous êtes étudiant·e, en reconversion ou à la recherche d’une alternance ?</p>

                                <div className="pole-actions">
                                    <Link to="/cfa" className="pole-btn pole-btn-primary">
                                        Nos formations longues
                                    </Link>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="pole-btn pole-btn-secondary">
                                        remplissez le questionnaire de premier contact ici
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* POLE 2: METADXS CONSEILS & FORMATIONS */}
                        <div className="pole-card bg-conseil" style={{ backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(59, 130, 246, 0.8)), url(${conseilBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="pole-card-content">
                                <h3>METADXS CONSEILS & FORMATIONS</h3>
                                <p className="pole-description">Notre organisme de formation accompagne les entreprises, les professionnels et les structures publiques dans leurs projets RH et de développement des compétences.</p>

                                <ul className="pole-list">
                                    <li>📌 Formations courtes & sur-mesure</li>
                                    <li>📌 Conseil RH, bilan de compétences, VAE</li>
                                    <li>📌 Diagnostics, audit & ingénierie pédagogique</li>
                                </ul>

                                <p className="pole-question">Vous êtes une entreprise, un organisme ou un professionnel souhaitant faire évoluer vos compétences ou vos équipes ?</p>

                                <div className="pole-actions">
                                    <Link to="/conseils-formations" className="pole-btn pole-btn-primary">
                                        Nos formations courtes
                                    </Link>
                                    <Link to="/contact" className="pole-btn pole-btn-secondary">
                                        contactez-nous par mail
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* PARTNERS SECTION */}
            <div className="partners-section">
                <div className="partners-header">
                    <div className="partners-title">
                        <Star className="partners-star" fill="#f59e0b" />
                        <span>ILS NOUS FONT CONFIANCE</span>
                    </div>
                    <p className="partners-subtitle">Plus de 100 entreprises sont nos partenaires, découvrez-en une partie !</p>
                </div>

                <div className="partners-marquee">
                    {/* ROW 1 - LEFT */}
                    <div className="partners-track track-left">
                        {/* SET 1 */}
                        <div className="partner-logo-item"><img src={logoInline} alt="Tolosa Services" /></div>
                        <div className="partner-logo-item"><img src={vival} alt="Vival" /></div>
                        <div className="partner-logo-item"><img src={boumBurger} alt="Boum Burger" /></div>
                        <div className="partner-logo-item"><img src={choixDeVie} alt="Choix de Vie" /></div>
                        <div className="partner-logo-item"><img src={microDidact} alt="Micro Didact" /></div>
                        {/* DUPLICATE */}
                        <div className="partner-logo-item"><img src={logoInline} alt="Tolosa Services" /></div>
                        <div className="partner-logo-item"><img src={vival} alt="Vival" /></div>
                        <div className="partner-logo-item"><img src={boumBurger} alt="Boum Burger" /></div>
                        <div className="partner-logo-item"><img src={choixDeVie} alt="Choix de Vie" /></div>
                        <div className="partner-logo-item"><img src={microDidact} alt="Micro Didact" /></div>
                        {/* TRIPLICATE for safety on wide screens */}
                        <div className="partner-logo-item"><img src={logoInline} alt="Tolosa Services" /></div>
                        <div className="partner-logo-item"><img src={vival} alt="Vival" /></div>
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
                        <div className="partner-logo-item"><img src={logoInline} alt="Tolosa Services" /></div> {/* Recycle */}
                        <div className="partner-logo-item"><img src={vival} alt="Vival" /></div> {/* Recycle */}
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

            {/* CAMPUS SECTION */}
            <section className="campus-section">
                <div className="campus-container">
                    <div className="campus-header">
                        <Star className="campus-star-icon" size={40} fill="#fbbf24" color="#fbbf24" />
                        <h2>LE CAMPUS</h2>
                    </div>

                    <div className="campus-grid">
                        <div className="campus-info">
                            <div className="campus-block">
                                <h3>Nos coordonnées</h3>
                                <div className="contact-item-row">
                                    <MapPin className="contact-icon" size={20} />
                                    <span>244 Route de Seysses, Bâtiment 2, 4e étage, 31100 Toulouse</span>
                                </div>
                                <div className="contact-item-row">
                                    <Phone className="contact-icon" size={20} />
                                    <span>06 82 64 10 25 / 06 82 64 10 26</span>
                                </div>
                                <div className="contact-item-row">
                                    <Mail className="contact-icon" size={20} />
                                    <span>contact@metadxs.com</span>
                                </div>
                            </div>

                            <div className="campus-block">
                                <h3>Comment s'y rendre ?</h3>
                                <div className="transport-badge">
                                    <div className="transport-icon-wrapper">
                                        <Train size={18} />
                                    </div>
                                    <div className="transport-details">
                                        <strong>En métro :</strong> 10 minutes à pied de l'arrêt Reynerie (Ligne A)
                                    </div>
                                </div>
                                <div className="transport-badge">
                                    <div className="transport-icon-wrapper">
                                        <Bus size={18} />
                                    </div>
                                    <div className="transport-details">
                                        <strong>En bus :</strong> Ligne 7 depuis Mermoz, Arrêt Bordelongue
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="campus-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.576272260273!2d1.406716076696451!3d43.57366697110603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6f3e09062b%3A0x6b1df368297f0c1!2s244%20Rte%20de%20Seysses%2C%2031100%20Toulouse!5e0!3m2!1sfr!2sfr!4v1707500000000!5m2!1sfr!2sfr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="campus-details full-width">
                            <div className="campus-details-col">
                                <h3>Nos équipements :</h3>
                                <p>
                                    Au sein de l'école vous trouverez 3 salles de classes et de TP, ainsi qu'une salle de réunion et une salle informatique. Nos apprenants ont également accès au WIFI gratuit, ainsi qu'à des distributeurs de boissons chaudes et de friandises. Pour se restaurer, une cafétéria propose un assortiment de sandwichs et salades fraîches, tandis que des food trucks sont présents chaque midi devant l'entrée de l'école.
                                </p>
                            </div>
                            <div className="campus-details-col">
                                <h3>Accessibilité handicap :</h3>
                                <p>
                                    Nos formations sont naturellement ouvertes aux personnes à mobilité réduite. Les parties communes et salles de cours-TP sont notamment accessibles par ascenseur. N'hésitez pas à nous contacter afin d'envisager des protocoles d'accueil spécifiques adaptés à votre situation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div >
    );
}

export default Home;
