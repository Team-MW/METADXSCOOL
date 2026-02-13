import logoSchool from '../../assets/metadxschool.png';
import logoConseil from '../../assets/methadxconseil.png';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import '../../styles/Footer.css';

const Footer = () => {
    const handleNavigation = (url: string) => {
        // Implement navigation logic here if needed
        console.log(`Navigating to: ${url}`);
    };

    return (
        <section className="footer">
            <div className="footer-container">

                {/* COLUMN 1 - INFORMATIONS */}
                <div className="footer-column">
                    <h3>INFORMATIONS</h3>
                    <div className="footer-info">
                        <p><strong>Meta Dx School</strong></p>
                        <p>244 Route de Seysses</p>
                        <p>31100 Toulouse</p>
                        <p><strong>Horaires</strong></p>
                        <p>08H00 – 18H00</p>
                    </div>
                </div>

                {/* COLUMN 2 - CERTIFICATION */}
                <div className="footer-column">
                    <h3>CERTIFICATION</h3>
                    <ul className="footer-links">
                        <li><a href="#" onClick={() => handleNavigation('/mentions-legales')}>Mentions légales</a></li>
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
                        <div className="contact-card-content">
                            <div className="footer-logo-group">
                                <img src={logoSchool} alt="META DX SCHOOL" className="footer-logo-image" />
                            </div>
                            <div className="contact-details">
                                <h4 style={{ display: 'none' }}>META DX <span style={{ color: '#be185d' }}>SCHOOL</span></h4> {/* Hidden as image has text */}
                                <h4>CONTACT</h4>
                                <p>contact@metadxs.com</p>
                                <p>06 82 64 10 26</p>
                                <a className="contact-cta">Cliquez ci dessous pour <br />retrouver toutes les <br />informations de contact</a>
                                <p><strong>Contact</strong></p>
                            </div>
                        </div>
                        <div className="social-icons">
                            <Instagram className="social-icon" />
                            <Facebook className="social-icon" />
                            <Linkedin className="social-icon" />
                        </div>
                    </div>

                    {/* BLUE CARD - META DX CONSEILS & FORMATIONS */}
                    <div className="contact-card card-blue">
                        <div className="contact-card-content">
                            <div className="footer-logo-group">
                                <img src={logoConseil} alt="METADXS CONSEILS & FORMATIONS" className="footer-logo-image" />
                            </div>
                            <div className="contact-details">
                                <h4 style={{ display: 'none' }}>METADXS</h4>
                                <h4 style={{ display: 'none' }}>CONSEILS & FORMATIONS</h4>
                                <h4 style={{ color: '#1e3a8a', marginTop: '0.5rem' }}>CONTACT</h4>
                                <p>julie.mouillat@metadxs.com</p>
                                <p>07 59 60 60 40</p>
                                <a className="contact-cta">Cliquez ci dessous pour <br />retrouver toutes les <br />informations de contact</a>
                                <p><strong>Contact</strong></p>
                            </div>
                        </div>
                        <div className="social-icons">
                            <Instagram className="social-icon" style={{ color: '#1e3a8a' }} />
                            <Facebook className="social-icon" style={{ color: '#1e3a8a' }} />
                            <Linkedin className="social-icon" style={{ color: '#1e3a8a' }} />
                        </div>
                    </div>
                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="footer-copyright" style={{ maxWidth: '1300px', margin: '0 auto', borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
                <p>© 2023 ÉDITÉ PAR METADXS <br />MÀJ LE 23/09/2025</p>
            </div>
        </section>
    );
};

export default Footer;
