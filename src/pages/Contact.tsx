import { Helmet } from 'react-helmet-async';
import { PhoneCall, Users, FileText } from 'lucide-react';

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact & Inscriptions | Meta DX School</title>
                <meta name="description" content="Découvrez nos formations et prenez contact avec Meta DX School. Que vous soyez étudiant ou entreprise, nous avons une solution pour vous." />
                <link rel="canonical" href="https://www.metadxs.com/contact" />
            </Helmet>

            <style>
                {`
                .contact-layout {
                    background: linear-gradient(135deg, #4b2361 0%, #a6507c 100%);
                    min-height: 100vh;
                    padding: 4rem 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-family: var(--font-base, 'Inter', sans-serif);
                }
                
                .c-cards-container {
                    display: flex;
                    width: 100%;
                    max-width: 1300px;
                    margin-bottom: 2rem;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
                }
                
                @media (max-width: 1000px) {
                    .c-cards-container {
                        flex-direction: column;
                    }
                }
                
                .c-card {
                    flex: 1;
                    padding: 3rem 2.5rem;
                    color: white;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                }
                
                .c-card-left {
                    background: linear-gradient(rgba(106, 27, 154, 0.8), rgba(106, 27, 154, 0.8)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80') center/cover;
                }
                
                .c-card-right {
                    background: linear-gradient(rgba(28, 30, 76, 0.85), rgba(28, 30, 76, 0.85)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80') center/cover;
                }
                
                .c-card-title {
                    font-size: 1.8rem;
                    font-weight: 900;
                    margin-bottom: 0.5rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                
                .c-card-subtitle {
                    font-size: 0.95rem;
                    font-weight: 600;
                    margin-bottom: 0;
                    line-height: 1.4;
                    min-height: 2.8rem;
                }
                
                .c-divider {
                    width: 100%;
                    height: 2px;
                    background-color: white;
                    margin: 1.5rem 0;
                }
                
                .c-list-container {
                    flex-grow: 1;
                    display: flex;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                }
                
                .c-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    text-align: left;
                    display: inline-block;
                }
                
                .c-list li {
                    font-size: 0.95rem;
                    margin-bottom: 0.5rem;
                    font-weight: 600;
                    line-height: 1.3;
                    display: flex;
                    align-items: flex-start;
                    gap: 0.5rem;
                }
                
                .c-audience {
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin-bottom: 1rem;
                    letter-spacing: 0.05em;
                    min-height: 2rem;
                }
                
                .c-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 70%;
                    margin: 0 auto;
                    padding: 1rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    text-decoration: none;
                    border-radius: 4px;
                    font-size: 0.95rem;
                    transition: transform 0.2s, opacity 0.2s;
                    cursor: pointer;
                    border: none;
                }
                
                .c-btn:hover {
                    opacity: 0.9;
                    transform: scale(1.02);
                }
                
                .c-btn-purple {
                    background-color: #5b287d;
                    color: white;
                }
                
                .c-btn-orange {
                    background-color: #ee9e34;
                    color: white;
                    width: 90%;
                }
                
                .c-btn-dark {
                    background-color: #191b3b;
                    color: white;
                }
                
                /* Bottom Process Section */
                .c-bottom-container {
                    display: flex;
                    width: 100%;
                    max-width: 1300px;
                    background: transparent;
                    margin-top: 2rem;
                    gap: 2rem;
                }
                
                @media (max-width: 900px) {
                    .c-bottom-container {
                        flex-direction: column;
                    }
                }
                
                .c-process {
                    flex: 1;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 3rem;
                    padding: 1.5rem 2rem 1.5rem 0;
                }
                
                .c-process-item {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }
                
                /* Match image: 2nd item has icon on the right */
                .c-process-item:nth-child(2) {
                    flex-direction: row-reverse;
                    text-align: right;
                }
                
                .c-process-icon {
                    width: 65px;
                    height: 65px;
                    flex-shrink: 0;
                    color: white;
                }
                
                .c-process-text h3 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 0.35rem;
                    text-transform: uppercase;
                }
                
                .c-process-text p {
                    font-size: 0.95rem;
                    line-height: 1.4;
                    font-weight: 500;
                    margin: 0;
                }
                
                .c-map-container {
                    flex: 1;
                    min-height: 450px;
                    background: #e2e8f0;
                }
                
                .c-map-container iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                }

                `}
            </style>

            <div className="contact-layout">
                
                {/* Top Cards Container */}
                <div className="c-cards-container">
                    
                    {/* Left Card: Étudiants */}
                    <div className="c-card c-card-left">
                        <h2 className="c-card-title">META DX SCHOOL</h2>
                        <p className="c-card-subtitle">
                            Le Centre de Formation d'Apprentis dédié aux jeunes talents et aux futurs professionnels.
                        </p>
                        
                        <div className="c-divider"></div>
                        
                        <div className="c-list-container">
                            <ul className="c-list">
                                <li>📌 Formations en alternance reconnues</li>
                                <li>📌 Accompagnement pédagogique et humain</li>
                                <li>📌 Insertion professionnelle renforcée</li>
                            </ul>
                        </div>
                        
                        <div className="c-audience">
                            VOUS ÊTES ÉTUDIANT·E, EN RECONVERSION OU À LA RECHERCHE D'UNE ALTERNANCE ?
                        </div>
                        
                        <a href="/forma-secu" className="c-btn c-btn-purple">Nos formations longues</a>
                        
                        <div className="c-divider"></div>
                        
                        <a href="#" className="c-btn c-btn-orange">REMPLISSEZ LE QUESTIONNAIRE DE PREMIER CONTACT</a>
                    </div>
                    
                    {/* Right Card: Entreprises */}
                    <div className="c-card c-card-right">
                        <h2 className="c-card-title">METADXS CONSEILS & FORMATIONS</h2>
                        <p className="c-card-subtitle">
                            Notre organisme de formation accompagne les entreprises, les professionnels et les structures publiques dans leurs projets RH et de développement des compétences.
                        </p>
                        
                        <div className="c-divider"></div>
                        
                        <div className="c-list-container">
                            <ul className="c-list">
                                <li>📌 Formations courtes & sur-mesure</li>
                                <li>📌 Conseil RH, bilan de compétences, VAE</li>
                                <li>📌 Diagnostics, audit & ingénierie pédagogique</li>
                            </ul>
                        </div>
                        
                        <div className="c-audience">
                            VOUS ÊTES UNE ENTREPRISE, UN ORGANISME OU UN PROFESSIONNEL SOUHAITANT FAIRE ÉVOLUER VOS COMPÉTENCES OU VOS ÉQUIPES ?
                        </div>
                        
                        <a href="#" className="c-btn c-btn-dark">Nos formations courtes</a>
                        
                        <div className="c-divider"></div>
                        
                        <a href="mailto:contact@metadxs.com" className="c-btn c-btn-dark">CONTACTEZ-NOUS PAR MAIL</a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="c-bottom-container">
                    
                    {/* Process Explanations */}
                    <div className="c-process">
                        <div className="c-process-item">
                            <FileText className="c-process-icon" strokeWidth={1.5} />
                            <div className="c-process-text">
                                <h3>REMPLISSEZ LE QUESTIONNAIRE</h3>
                                <p>Partagez vos informations et votre projet via notre formulaire de premier contact.</p>
                            </div>
                        </div>

                        <div className="c-process-item">
                            <PhoneCall className="c-process-icon" strokeWidth={1.5} />
                            <div className="c-process-text">
                                <h3>ON VOUS RECONTACTE RAPIDEMENT</h3>
                                <p>Un membre de notre équipe vous appelle pour répondre à vos questions et vous proposer un rendez-vous (en présentiel ou visio)</p>
                            </div>
                        </div>

                        <div className="c-process-item">
                            <Users className="c-process-icon" strokeWidth={1.5} />
                            <div className="c-process-text">
                                <h3>VENEZ NOUS RENCONTRER</h3>
                                <p>Découvrez l'école, les formations, et passez un test pour valider votre admissibilité.</p>
                            </div>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="c-map-container">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.395055030588!2d1.411649615494443!3d43.577457779124484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb1ee32ebbd1%3A0x6bba7ec62f1cbfd!2s244%20Rte%20de%20Seysses%2C%2031100%20Toulouse!5e0!3m2!1sfr!2sfr!4v1680000000000!5m2!1sfr!2sfr" 
                            allowFullScreen={false} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Carte du campus Meta DX School"
                        ></iframe>
                    </div>

                </div>

            </div>
        </>
    );
}
