import logoSchool from '../../assets/metadxschool.png';
import logoConseil from '../../assets/methadxconseil.png';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import '../../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleNavigation = (url: string) => {
        // Implement navigation logic here if needed
        console.log(`Navigating to: ${url}`);
    };

    return (
        <section className="footer">
            <div className="footer-container">

                {/* COLUMN 1 - INFORMATIONS */}
                <div className="footer-column footer-col-info">
                    <h3>INFORMATIONS</h3>
                    <div className="footer-info">
                        <p className="company-name">Meta Dx School</p>
                        <p>244 Route de Seysses</p>
                        <p>31100 Toulouse</p>
                        <p className="hours-label">Horaires</p>
                        <p>08H00 – 18H00</p>
                    </div>

                    <div className="footer-copyright-internal">
                        <p>© 2026 ÉDITÉ PAR METADXS</p>
                        <p>MÀJ LE 15/02/2026</p>
                    </div>
                </div>

                {/* COLUMN 2 - CERTIFICATION */}
                <div className="footer-column footer-col-cert">
                    <h3>CERTIFICATION</h3>
                    <ul className="footer-links">
                        <li><Link to="/mentions-legales">Mentions légales</Link></li>
                        <li>
                            <a href="#" className="certification-orange" onClick={() => handleNavigation('/certifications')}>
                                Cliquez ci dessous pour <br />consulter nos différentes <br />certifications
                            </a>
                        </li>
                        <li><a href="#" onClick={() => handleNavigation('/qualiopi')}>Certificat QUALIOPI</a></li>
                        <li><a href="#" onClick={() => handleNavigation('/region-occitanie')}>Certificat Région Occitanie</a></li>
                    </ul>
                </div>

                {/* COLUMN 3 - CONTACT CARDS */}
                <div className="footer-column contact-cards">
                    {/* PINK CARD - META DX SCHOOL */}
                    <div className="contact-card card-pink">
                        <div className="card-left-logo">
                            <img src={logoSchool} alt="META DX SCHOOL" className="footer-logo-image" />
                        </div>

                        <div className="card-center-info">
                            <h4>CONTACT</h4>
                            <a href="mailto:contact@metadxs.com" className="email-link">contact@metadxs.com</a>
                            <p className="phone">06 82 64 10 26</p>
                            <span className="info-text">Cliquez ci dessous pour <br />retrouver toutes les <br />informations de contact</span>
                            <a href="#" className="contact-bold-link">Contact</a>
                        </div>

                        <div className="card-right-socials">
                            <a href="#" className="social-bubble"><Instagram className="social-icon" /></a>
                            <a href="#" className="social-bubble"><Facebook className="social-icon" /></a>
                            <a href="#" className="social-bubble"><Linkedin className="social-icon" /></a>
                        </div>
                    </div>

                    {/* BLUE CARD - META DX CONSEILS & FORMATIONS */}
                    <div className="contact-card card-blue">
                        <div className="card-left-logo">
                            <img src={logoConseil} alt="METADXS CONSEILS & FORMATIONS" className="footer-logo-image" />
                        </div>

                        <div className="card-center-info">
                            <h4 className="title-white">CONTACT</h4>
                            <a href="mailto:julie.mouillat@metadxs.com" className="email-link">julie.mouillat@metadxs.com</a>
                            <p className="phone">07 59 60 60 40</p>
                            <span className="info-text">Cliquez ci dessous pour <br />retrouver toutes les <br />informations de contact</span>
                            <a href="#" className="contact-bold-link">Contact</a>
                        </div>

                        <div className="card-right-socials">
                            <a href="#" className="social-bubble"><Instagram className="social-icon" /></a>
                            <a href="#" className="social-bubble"><Facebook className="social-icon" /></a>
                            <a href="#" className="social-bubble"><Linkedin className="social-icon" /></a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Footer;
