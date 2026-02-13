import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

// Define the content for each tab
const TAB_CONTENT = {
    alternance: {
        title: "FORMATIONS EN ALTERNANCE",
        text: "Nos formations en alternance, du niveau bac à bac+5, sont conçues pour offrir une expérience d'apprentissage équilibrée entre la théorie et la pratique. Elles permettent aux apprenants de se former tout en étant immergés dans le monde professionnel. Grâce à des partenariats solides avec des entreprises locales et nationales, nous garantissons des opportunités d'insertion professionnelle rapides et efficaces."
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
            {/* HERO SECTION */}
            <section className="hero-section">
                <button className="carousel-arrow carousel-prev">
                    <ChevronLeft size={64} />
                </button>

                <div className="hero-content">
                    <h1 className="hero-title">ASSISTANT(E) DE VIE AUX FAMILLES</h1>
                    <p className="hero-subtitle">découvrez les débouchés et poursuites d'études</p>
                    <button className="cta-button">EN SAVOIR +</button>
                </div>

                <button className="carousel-arrow carousel-next">
                    <ChevronRight size={64} />
                </button>
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
                        <Link to="/cfa" className="pole-card bg-school" style={{ textDecoration: 'none' }}>
                            <div className="pole-card-content">
                                <h3>META DX SCHOOL</h3>
                                <p>Le Centre de Formation d'Apprentis dédié aux jeunes talents et aux futurs professionnels.</p>
                            </div>
                        </Link>

                        {/* POLE 2: METADXS CONSEILS & FORMATIONS */}
                        <Link to="/conseils-formations" className="pole-card bg-conseil" style={{ textDecoration: 'none' }}>
                            <div className="pole-card-content">
                                <h3>METADXS CONSEILS & FORMATIONS</h3>
                                <p>Notre organisme de formation accompagne les entreprises, les professionnels et les structures publiques dans leurs projets RH et de développement des compétences.</p>
                            </div>
                        </Link>
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

                <div className="partners-grid">
                    {/* Placeholder Logos */}
                    <div className="partner-logo-item" style={{ color: '#E40046' }}>TOLOSA SERVICES</div>
                    <div className="partner-logo-item" style={{ color: '#4A7729', fontFamily: 'serif', fontSize: '1.5rem', fontStyle: 'italic' }}>Vival</div>
                    <div className="partner-logo-item" style={{ color: '#6A1B9A' }}>Acope</div>
                    <div className="partner-logo-item" style={{ color: '#D32F2F', fontWeight: '900' }}>Boum<br />BURGER</div>

                    <div className="partner-logo-item" style={{ color: '#D81B60' }}>Choix<br />de vie</div>
                    <div className="partner-logo-item" style={{ color: '#00BCD4' }}>MICRO<br />DIDACT</div>
                    <div className="partner-logo-item" style={{ backgroundColor: 'black', color: 'white' }}>DIDAXELL</div>
                    <div className="partner-logo-item" style={{ color: '#43A047', fontSize: '1.5rem', fontWeight: '900' }}>SUBWAY</div>
                    <div className="partner-logo-item" style={{ backgroundColor: '#D32F2F', color: 'white', fontWeight: '900' }}>BIG<br />SMASH</div>

                    <div className="partner-logo-item" style={{ color: '#E91E63' }}>NOCIBÉ</div>
                    <div className="partner-logo-item" style={{ color: '#2E7D32' }}>MARCHÉ DE<br />mo'</div>
                    <div className="partner-logo-item" style={{ color: '#1B5E20' }}>DX ENERGY<br />TOULOUSE</div>
                    <div className="partner-logo-item" style={{ color: '#555' }}>Leelou<br />& Bidule</div>
                </div>
            </div>


        </div>
    );
}

export default Home;
