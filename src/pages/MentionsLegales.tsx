import { Helmet } from 'react-helmet-async';
import { Users, FileText, Database, ShieldCheck, Mail } from 'lucide-react';
import '../styles/MentionsLegales.css'; // You'll create this minimal CSS

export default function MentionsLegales() {
    return (
        <div className="mentions-container">
            <Helmet>
                <title>Mentions Légales - Meta DX School</title>
                <meta name="description" content="Mentions légales, politique de confidentialité et conditions d'utilisation du site Meta DX School." />
                <link rel="canonical" href="https://www.metadxs.com/mentions-legales" />
            </Helmet>

            <header className="mentions-hero">
                <h1 className="mentions-title">MENTIONS LÉGALES</h1>
                <p className="mentions-subtitle">Transparence & Conformité</p>
            </header>

            {/* EDITEUR DU SITE */}
            <section className="mentions-section">
                <div className="section-header">
                    <Users size={32} className="section-icon" />
                    <h2 className="section-heading">ÉDITEUR DU SITE</h2>
                </div>

                <div className="content-row">
                    <span className="label">Raison sociale :</span>
                    <span className="value">META DX SCHOOL (SARL unipersonnelle)</span>
                </div>
                <div className="content-row">
                    <span className="label">Siège social :</span>
                    <span className="value"><a href="https://maps.google.com/?q=244+Route+de+Seysses,+Bâtiment+2,+31100+Toulouse" target="_blank" rel="noopener noreferrer" style={{color:'inherit'}}>244 Route de Seysses, Bâtiment 2, 4e étage, 31100 Toulouse</a></span>
                </div>
                <div className="content-row">
                    <span className="label">SIRET :</span>
                    <span className="value">982 770 048 00010</span>
                </div>
                <div className="content-row">
                    <span className="label">TVA Intracommunautaire :</span>
                    <span className="value">FR46982770048</span>
                </div>
                <div className="content-row">
                    <span className="label">Capital social :</span>
                    <span className="value">1000,00 €</span>
                </div>
                <div className="content-row">
                    <span className="label">Code NAF/APE :</span>
                    <span className="value">Enseignement supérieur (8542Z)</span>
                </div>
                <div className="content-row">
                    <span className="label">Directeur de la publication :</span>
                    <span className="value">Monsieur Farid EL AMINE</span>
                </div>
                <div className="content-row">
                    <span className="label">Contact :</span>
                    <a href="mailto:contact@metadxs.com" className="link">contact@metadxs.com</a>
                </div>
            </section>

            {/* HEBERGEMENT */}
            <section className="mentions-section">
                <div className="section-header">
                    <Database size={32} className="section-icon" />
                    <h2 className="section-heading">HÉBERGEMENT DU SITE</h2>
                </div>
                <div className="content-row">
                    <span className="label">Hébergeur :</span>
                    <span className="value">Vercel Inc.</span>
                </div>
                <div className="content-row">
                    <span className="label">Adresse :</span>
                    <span className="value">340 S Lemon Ave #4133 Walnut, CA 91789, USA</span>
                </div>
                <div className="content-row">
                    <span className="label">Site web :</span>
                    <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="link">https://vercel.com</a>
                </div>
            </section>

            {/* PROPRIETE INTELLECTUELLE */}
            <section className="mentions-section">
                <div className="section-header">
                    <FileText size={32} className="section-icon" />
                    <h2 className="section-heading">PROPRIÉTÉ INTELLECTUELLE</h2>
                </div>
                <div className="text-block">
                    <p>
                        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                        Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>
                    <p>
                        La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                    </p>
                </div>
            </section>

            {/* PROTECTION DONNEES */}
            <section className="mentions-section">
                <div className="section-header">
                    <ShieldCheck size={32} className="section-icon" />
                    <h2 className="section-heading">PROTECTION DES DONNÉES PERSONNELLES (RGPD)</h2>
                </div>
                <div className="text-block">
                    <p>
                        Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données personnelles.
                    </p>
                    <p>
                        Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez contacter notre délégué à la protection des données (DPO) :
                    </p>
                    <div className="content-row" style={{ marginTop: '1rem' }}>
                        <Mail size={18} style={{ marginRight: '10px' }} />
                        <a href="mailto:dpo@metadxs.com" className="link">contact@metadxs.com</a>
                    </div>
                </div>
            </section>

        </div>
    );
}
