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
                <div className="welcome-badge">🎓 Certifié Qualiopi · Toulouse</div>
                <h2 className="welcome-title">BIENVENUE CHEZ <span className="welcome-title-accent">METADXS</span></h2>
                <p className="welcome-text">
                    Le groupe METADXS est acteur de la formation engagé en faveur de l'inclusion,
                    de la montée en compétences et de l'innovation pédagogique.
                    <br /><br />
                    Nous vous accompagnons à chaque étape de votre parcours, que vous soyez en reconversion,
                    en recherche d'alternance, ou une entreprise souhaitant former ses équipes.
                    <strong style={{color:'#fde68a', display:'block', marginTop:'0.75rem'}}>Deux entités, un même objectif : rendre la formation accessible, humaine et impactante.</strong>
                </p>

                {/* TABS SECTION */}
                <div className="tabs-container">
                    <div className="tabs-header">
                        <button
                            className={`tab-button ${activeTab === 'alternance' ? 'active' : ''}`}
                            onClick={() => setActiveTab('alternance')}
                        >
                            <span className="tab-icon">🎓</span>
                            <span>FORMATIONS EN<br />ALTERNANCE</span>
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'organisme' ? 'active' : ''}`}
                            onClick={() => setActiveTab('organisme')}
                        >
                            <span className="tab-icon">🏛️</span>
                            <span>ORGANISME<br />DE FORMATION</span>
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'vae' ? 'active' : ''}`}
                            onClick={() => setActiveTab('vae')}
                        >
                            <span className="tab-icon">📋</span>
                            <span>VALIDATION DES ACQUIS<br />DE L'EXPÉRIENCE (VAE)</span>
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'bilan' ? 'active' : ''}`}
                            onClick={() => setActiveTab('bilan')}
                        >
                            <span className="tab-icon">🔍</span>
                            <span>BILAN DE<br />COMPÉTENCES</span>
                        </button>
                    </div>

                    <div className="tab-content">
                        <div className="tab-content-inner">
                            <div className="tab-content-icon">
                                {activeTab === 'alternance' && '🎓'}
                                {activeTab === 'organisme' && '🏛️'}
                                {activeTab === 'vae' && '📋'}
                                {activeTab === 'bilan' && '🔍'}
                            </div>
                            <div>
                                <h3 className="tab-content-title">{TAB_CONTENT[activeTab].title}</h3>
                                <p className="tab-description">{TAB_CONTENT[activeTab].text}</p>
                            </div>
                        </div>
                        <a href="/contact" className="tab-cta-link">Nous contacter →</a>
                    </div>
                </div>

                <p className="welcome-contact-note">
                    💬 Des questions ? Nous sommes là pour vous accompagner dans votre projet professionnel.
                </p>



            </section>

            {/* TIKTOK SECTION */}
            <section className="tiktok-section">
                <div style={{ marginBottom: '3rem' }}>
                    <h2 className="tiktok-title">
                        Suivez-nous sur <span style={{ color: '#ff0050' }}>TikTok</span>
                    </h2>
                    <p className="tiktok-subtitle">
                        Découvrez l'envers du décor et la vie au campus !
                    </p>
                </div>
                <div className="tiktok-grid">
                    <iframe 
                        src="https://www.tiktok.com/embed/v2/7628553605062200598" 
                        className="tiktok-iframe" 
                        allow="fullscreen" 
                        title="TikTok Video 1">
                    </iframe>
                    <iframe 
                        src="https://www.tiktok.com/embed/v2/7652428311473311008" 
                        className="tiktok-iframe" 
                        allow="fullscreen" 
                        title="TikTok Video 2">
                    </iframe>
                    <iframe 
                        src="https://www.tiktok.com/embed/v2/7630524248733371670" 
                        className="tiktok-iframe" 
                        allow="fullscreen" 
                        title="TikTok Video 3">
                    </iframe>
                </div>
            </section>

            {/* PARTNERS SECTION */}
            <div className="partners-section">
                <div className="partners-header">
                    <div className="partners-title">
                        <span className="partners-star">⭐</span>
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


            {/* GOOGLE REVIEWS SECTION */}
            <section className="reviews-section">
                <div className="reviews-container">
                    <div className="reviews-header">
                        <div className="reviews-google-badge">
                            <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            <span>Avis Google</span>
                        </div>
                        <h2 className="reviews-title">Ce que disent nos apprenants</h2>
                        <div className="reviews-rating-global">
                            <div className="reviews-stars-global">
                                {'★★★★★'.split('').map((s, i) => <span key={i} className="star-gold">{s}</span>)}
                            </div>
                            <span className="reviews-score">5,0</span>
                            <span className="reviews-count">· 10 avis</span>
                        </div>
                    </div>

                    <div className="reviews-track-wrapper">
                        <div className="reviews-track">
                            {/* REVIEW 1 */}
                            <div className="review-card">
                                <div className="review-card-header">
                                    <div className="reviewer-avatar" style={{background: 'linear-gradient(135deg, #6366f1, #8b5cf6)'}}>F</div>
                                    <div className="reviewer-info">
                                        <span className="reviewer-name">Fat Mah</span>
                                        <span className="reviewer-meta">2 avis</span>
                                    </div>
                                </div>
                                <div className="review-stars">{'★★★★★'.split('').map((s,i) => <span key={i} className="star-gold">{s}</span>)}</div>
                                <span className="review-date">il y a 6 mois</span>
                                <p className="review-text">J'ai réalisé une immersion professionnelle de deux semaines au sein de META DX School et j'ai été particulièrement impressionné par la qualité de l'accompagnement. Merci à Sami, Laura, Océan j et Océan A. L'équipe fait preuve d'un réel professionnalisme : accueil chaleureux, disponibilité, écoute et pédagogie. Une école jeune, dynamique et ambitieuse, qui place l'humain au cœur de son fonctionnement. Je recommande vivement META DX School pour leur esprit start-up, leur engagement et leur sérieux.</p>
                            </div>
                            {/* REVIEW 2 */}
                            <div className="review-card">
                                <div className="review-card-header">
                                    <div className="reviewer-avatar" style={{background: 'linear-gradient(135deg, #10b981, #059669)'}}>G</div>
                                    <div className="reviewer-info">
                                        <span className="reviewer-name">Galley Calista</span>
                                        <span className="reviewer-meta">2 avis</span>
                                    </div>
                                </div>
                                <div className="review-stars">{'★★★★★'.split('').map((s,i) => <span key={i} className="star-gold">{s}</span>)}</div>
                                <span className="review-date">il y a 6 mois</span>
                                <p className="review-text">Agréablement surprise par cette école, que ce soit l'équipe, le programme et le fonctionnement. Même les formateurs et les fondateurs sont au top. Merci !</p>
                            </div>
                            {/* REVIEW 3 */}
                            <div className="review-card">
                                <div className="review-card-header">
                                    <div className="reviewer-avatar" style={{background: 'linear-gradient(135deg, #f59e0b, #d97706)'}}>S</div>
                                    <div className="reviewer-info">
                                        <span className="reviewer-name">Steeven Tellus</span>
                                        <span className="reviewer-meta">2 avis</span>
                                    </div>
                                </div>
                                <div className="review-stars">{'★★★★★'.split('').map((s,i) => <span key={i} className="star-gold">{s}</span>)}</div>
                                <span className="review-date">il y a 3 ans</span>
                                <p className="review-text">Au top ! J'ai commencé mon bachelor depuis maintenant quelques mois et je trouve les cours sont dynamiques et très complets. Les formateurs sont à l'écoute des élèves. Les équipes administratives sont également très réactives et impliquées dans le cursus de leurs étudiants ce qui nous permet de ne pas nous sentir livrés à nous mêmes. Je valide ✅</p>
                            </div>
                            {/* REVIEW 4 */}
                            <div className="review-card">
                                <div className="review-card-header">
                                    <div className="reviewer-avatar" style={{background: 'linear-gradient(135deg, #ec4899, #db2777)'}}>L</div>
                                    <div className="reviewer-info">
                                        <span className="reviewer-name">lina abid</span>
                                        <span className="reviewer-meta">1 avis</span>
                                    </div>
                                </div>
                                <div className="review-stars">{'★★★★★'.split('').map((s,i) => <span key={i} className="star-gold">{s}</span>)}</div>
                                <span className="review-date">il y a 8 mois</span>
                                <p className="review-text">Très bonne école, les formateurs sont compétents et à l'écoute, et les locaux sont très modernes, propices au travail. Je recommande !</p>
                            </div>
                            {/* REVIEW 5 */}
                            <div className="review-card">
                                <div className="review-card-header">
                                    <div className="reviewer-avatar" style={{background: 'linear-gradient(135deg, #3b82f6, #2563eb)'}}>H</div>
                                    <div className="reviewer-info">
                                        <span className="reviewer-name">Hadjer Abid</span>
                                        <span className="reviewer-meta">1 avis</span>
                                    </div>
                                </div>
                                <div className="review-stars">{'★★★★★'.split('').map((s,i) => <span key={i} className="star-gold">{s}</span>)}</div>
                                <span className="review-date">il y a 8 mois</span>
                                <p className="review-text">Super ! Accompagnement au top ! Je recommande !</p>
                            </div>
                            {/* REVIEW 6 */}
                            <div className="review-card">
                                <div className="review-card-header">
                                    <div className="reviewer-avatar" style={{background: 'linear-gradient(135deg, #14b8a6, #0d9488)'}}>M</div>
                                    <div className="reviewer-info">
                                        <span className="reviewer-name">mohamed ammich</span>
                                        <span className="reviewer-meta">14 avis</span>
                                    </div>
                                </div>
                                <div className="review-stars">{'★★★★★'.split('').map((s,i) => <span key={i} className="star-gold">{s}</span>)}</div>
                                <span className="review-date">il y a 8 mois</span>
                                <p className="review-text">Que du positif à dire sur cette structure ! Équipe sérieuse, dynamique et professionnelle, je recommande !<br/><em style={{fontSize:'0.85rem', opacity:0.7}}>Visité en octobre 2025</em></p>
                            </div>
                            {/* REVIEW 7 */}
                            <div className="review-card">
                                <div className="review-card-header">
                                    <div className="reviewer-avatar" style={{background: 'linear-gradient(135deg, #6366f1, #4f46e5)'}}>C</div>
                                    <div className="reviewer-info">
                                        <span className="reviewer-name">Contact Marche de Mo'</span>
                                        <span className="reviewer-meta">1 avis</span>
                                    </div>
                                </div>
                                <div className="review-stars">{'★★★★★'.split('').map((s,i) => <span key={i} className="star-gold">{s}</span>)}</div>
                                <span className="review-date">il y a 8 mois</span>
                                <p className="review-text">Ecole partenaire, présentant une qualité d'accompagnement excellente. Nous avons grâce à leur outil et service une qualité de suivi exemplaire.<br/><em style={{fontSize:'0.85rem', opacity:0.7}}>Visité en octobre 2025</em></p>
                            </div>
                            {/* REVIEW 8 */}
                            <div className="review-card">
                                <div className="review-card-header">
                                    <div className="reviewer-avatar" style={{background: 'linear-gradient(135deg, #f97316, #ea580c)'}}>H</div>
                                    <div className="reviewer-info">
                                        <span className="reviewer-name">Hichem Oufrid</span>
                                        <span className="reviewer-meta">Local Guide · 62 avis</span>
                                    </div>
                                </div>
                                <div className="review-stars">{'★★★★★'.split('').map((s,i) => <span key={i} className="star-gold">{s}</span>)}</div>
                                <span className="review-date">il y a 8 mois</span>
                                <p className="review-text">Une école humaine et d'un très bon niveau, proposant un accompagnement attentif et professionnel à chaque étape. Leur équipe se montre toujours disponible et réactive. Une expérience que nous recommandons sans hésitation tant pour la rigueur que pour la qualité humaine de l'accompagnement.</p>
                            </div>
                            {/* REVIEW 9 */}
                            <div className="review-card">
                                <div className="review-card-header">
                                    <div className="reviewer-avatar" style={{background: 'linear-gradient(135deg, #84cc16, #65a30d)', fontSize:'0.75rem', fontWeight:'900'}}>EX</div>
                                    <div className="reviewer-info">
                                        <span className="reviewer-name">EnergyXpert</span>
                                        <span className="reviewer-meta">1 avis</span>
                                    </div>
                                </div>
                                <div className="review-stars">{'★★★★★'.split('').map((s,i) => <span key={i} className="star-gold">{s}</span>)}</div>
                                <span className="review-date">il y a 8 mois</span>
                                <p className="review-text">Meta DX School a changé ma vie professionnelle. J'ai pu me reconvertir en toute confiance grâce à l'accompagnement personnalisé dès le dossier d'inscription jusqu'à l'insertion. Le réseau de partenaires est fort, ce qui m'a permis de trouver une alternance très valorisante. Les infrastructures sont modernes, le matériel à la pointe, les locaux agréables. Une très belle école pour les ambitieux du digital.</p>
                            </div>
                            {/* REVIEW 10 */}
                            <div className="review-card">
                                <div className="review-card-header">
                                    <div className="reviewer-avatar" style={{background: 'linear-gradient(135deg, #a855f7, #9333ea)'}}>C</div>
                                    <div className="reviewer-info">
                                        <span className="reviewer-name">Clara Philippe</span>
                                        <span className="reviewer-meta">1 avis</span>
                                    </div>
                                </div>
                                <div className="review-stars">{'★★★★★'.split('').map((s,i) => <span key={i} className="star-gold">{s}</span>)}</div>
                                <span className="review-date">il y a 6 mois</span>
                                <p className="review-text">Une école en plein développement, esprit start-up. Vraiment pas déçue.</p>
                            </div>
                        </div>
                    </div>

                    <div className="reviews-cta-wrapper">
                        <a
                            href="https://www.google.com/search?q=Meta+DX+School+Toulouse+avis"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reviews-cta-btn"
                        >
                            Voir tous les avis sur Google
                        </a>
                    </div>
                </div>
            </section>

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
                                    <a href="https://maps.google.com/?q=244+Route+de+Seysses,+Bâtiment+2,+31100+Toulouse" target="_blank" rel="noopener noreferrer" style={{color:'inherit', textDecoration:'underline'}}><span>244 Route de Seysses, Bâtiment 2, 4e étage, 31100 Toulouse</span></a>
                                </div>
                                <div className="contact-item-row">
                                    <Phone className="contact-icon" size={20} />
                                    <span><a href="tel:+33682641025" style={{color:'inherit', textDecoration:'underline'}}>06 82 64 10 25</a> / <a href="tel:+33682641026" style={{color:'inherit', textDecoration:'underline'}}>06 82 64 10 26</a></span>
                                </div>
                                <div className="contact-item-row">
                                    <Mail className="contact-icon" size={20} />
                                    <a href="mailto:contact@metadxs.com" style={{color:'inherit', textDecoration:'underline'}}><span>contact@metadxs.com</span></a>
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
