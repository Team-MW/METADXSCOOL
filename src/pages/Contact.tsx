import { Helmet } from 'react-helmet-async';
import { PhoneCall, Users, FileText, GraduationCap, Briefcase, CheckCircle, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import '../styles/Contact.css';

export default function Contact() {
    return (
        <div>
            <Helmet>
                <title>Contact & Inscriptions | Meta DX School</title>
                <meta name="description" content="Découvrez nos formations et prenez contact avec Meta DX School. Que vous soyez étudiant ou entreprise, nous avons une solution pour vous." />
                <link rel="canonical" href="https://www.metadxs.com/contact" />
            </Helmet>

            {/* HERO SECTION */}
            <section className="contact-hero">
                <h1>NOUS CONTACTER</h1>
                <p>VOTRE PROJET COMMENCE ICI</p>
            </section>

            <div className="contact-content-wrapper">
                {/* TWO POLES GRID */}
                <div className="contact-cards-grid">
                    {/* SCHOOL POLE */}
                    <div className="contact-card border-purple">
                        <div className="card-icon-wrapper bg-pink-light">
                            <GraduationCap size={48} />
                        </div>
                        <h2>META DX SCHOOL</h2>
                        <p className="contact-card-sub">
                            Le Centre de Formation d'Apprentis dédié aux jeunes talents et futurs professionnels.
                        </p>

                        <ul className="contact-list">
                            <li><CheckCircle className="list-icon-pink" size={20} /> Formations en alternance reconnues</li>
                            <li><CheckCircle className="list-icon-pink" size={20} /> Accompagnement pédagogique & humain</li>
                            <li><CheckCircle className="list-icon-pink" size={20} /> Insertion professionnelle renforcée</li>
                        </ul>

                        <div className="contact-audience">
                            ÉTUDIANT, EN RECONVERSION OU RECHERCHE D'ALTERNANCE ?
                        </div>

                        <a href="/cfa" className="contact-btn btn-primary-purple">
                            Nos formations longues <ArrowRight size={18} />
                        </a>
                        <a href="https://forms.gle/tdgAujbd9LaSD99GA" target="_blank" rel="noopener noreferrer" className="contact-btn btn-secondary" style={{ color: '#db2777' }}>
                            Questionnaire de contact
                        </a>
                    </div>

                    {/* CONSEIL POLE */}
                    <div className="contact-card blue border-blue">
                        <div className="card-icon-wrapper bg-blue-light">
                            <Briefcase size={48} />
                        </div>
                        <h2>CONSEILS & FORMATIONS</h2>
                        <p className="contact-card-sub">
                            Accompagnement stratégique pour les entreprises, professionnels et structures publiques.
                        </p>

                        <ul className="contact-list">
                            <li><CheckCircle className="list-icon-blue" size={20} /> Formations courtes & sur-mesure</li>
                            <li><CheckCircle className="list-icon-blue" size={20} /> Conseil RH, bilan de compétences, VAE</li>
                            <li><CheckCircle className="list-icon-blue" size={20} /> Diagnostics & ingénierie</li>
                        </ul>

                        <div className="contact-audience">
                            ENTREPRISE OU PROFESSIONNEL SOUHAITANT ÉVOLUER ?
                        </div>

                        <a href="/conseils-formations" className="contact-btn btn-primary-blue">
                            Nos formations courtes <ArrowRight size={18} />
                        </a>
                        <a href="mailto:contact@metadxs.com" className="contact-btn btn-secondary" style={{ color: '#0369a1' }}>
                            Contactez-nous par mail
                        </a>
                    </div>
                </div>

                {/* PROCESS SECTION */}
                <section className="contact-process-section">
                    <div className="section-title-wrap">
                        <h2>VOTRE PARCOURS D'INSCRIPTION</h2>
                        <div className="section-underline"></div>
                    </div>

                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-icon-box">
                                <FileText size={32} />
                            </div>
                            <h3>1. QUESTIONNAIRE</h3>
                            <p>Partagez votre projet via notre formulaire de contact.</p>
                        </div>

                        <div className="process-step">
                            <div className="step-icon-box">
                                <PhoneCall size={32} />
                            </div>
                            <h3>2. ÉCHANGE</h3>
                            <p>Notre équipe vous rappelle pour affiner vos besoins.</p>
                        </div>

                        <div className="process-step">
                            <div className="step-icon-box">
                                <Users size={32} />
                            </div>
                            <h3>3. RENCONTRE</h3>
                            <p>Découvrez le campus et validez votre admissibilité.</p>
                        </div>
                    </div>
                </section>

                {/* CAMPUS SECTION */}
                <section className="campus-full-section">
                    <div className="campus-card-container">
                        <div className="campus-info-side">
                            <div className="campus-tag">NOTRE CAMPUS</div>
                            <h2>VENIR NOUS VOIR À TOULOUSE</h2>
                            <p className="campus-intro">
                                Nos locaux sont situés au cœur de Toulouse, accessibles facilement en transports en commun.
                            </p>

                            <div className="campus-details-list">
                                <div className="c-detail-item">
                                    <div className="c-icon-circle"><MapPin size={20} /></div>
                                    <div>
                                        <strong>ADRESSE</strong>
                                        <p><a href="https://maps.google.com/?q=244+Route+de+Seysses,+Bâtiment+2,+31100+Toulouse" target="_blank" rel="noopener noreferrer" style={{color:'inherit', textDecoration:'underline'}}>244 Route de Seysses,<br />Bâtiment 2, 4e étage,<br />31100 Toulouse</a></p>
                                    </div>
                                </div>

                                <div className="c-detail-item">
                                    <div className="c-icon-circle"><Phone size={20} /></div>
                                    <div>
                                        <strong>TÉLÉPHONE</strong>
                                        <p>06 82 64 10 25  /  06 82 64 10 26</p>
                                    </div>
                                </div>

                                <div className="c-detail-item">
                                    <div className="c-icon-circle"><Mail size={20} /></div>
                                    <div>
                                        <strong>EMAIL</strong>
                                        <p>contact@metadxs.com</p>
                                    </div>
                                </div>

                                <div className="c-detail-item">
                                    <div className="c-icon-circle"><Clock size={20} /></div>
                                    <div>
                                        <strong>HORAIRES</strong>
                                        <p>Lundi au Vendredi : 08h00 – 18h00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="campus-map-side">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.395055030588!2d1.411649615494443!3d43.577457779124484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb1ee32ebbd1%3A0x6bba7ec62f1cbfd!2s244%20Rte%20de%20Seysses%2C%2031100%20Toulouse!5e0!3m2!1sfr!2sfr!4v1680000000000!5m2!1sfr!2sfr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Carte du campus Meta DX School"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
