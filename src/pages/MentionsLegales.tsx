import '../styles/Home.css'; // Reusing global styles
import { Helmet } from 'react-helmet-async';

const MentionsLegales = () => {
    return (
        <div style={{ padding: '4rem 1rem', maxWidth: '1000px', margin: '0 auto', fontFamily: 'var(--font-base)', lineHeight: '1.6', color: '#374151' }}>
            <Helmet>
                <title>Mentions Légales & CGU - Meta DX School & Conseils Toulouse</title>
                <meta name="description" content="Consultez les mentions légales, la politique de confidentialité et les conditions générales d'utilisation du site Meta DX School. Informations légales sur notre organisme de formation SASU." />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#4a1c5d', marginBottom: '2rem', textAlign: 'center', textTransform: 'uppercase' }}>
                Mentions Légales
            </h1>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#3b0764', marginBottom: '1rem' }}>Éditeur du site</h2>
                <p>
                    Le présent site est édité par <strong>METADXS</strong>, société SASU (Société par Actions Simplifiée Unipersonnelle) au capital de 5 000,00 euros.<br />
                    Immatriculée au Registre du Commerce et des Sociétés de Toulouse sous le numéro <strong>920 944 774 R.C.S. Toulouse</strong>.<br />
                    <strong>Siège social :</strong> 244 route de Seysses, 31100 Toulouse.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    <strong>Directeur de la publication :</strong> Farès Hamzaoui<br />
                    <strong>Téléphone :</strong> 05 37 04 02 64<br />
                    <strong>E-mail :</strong> <a href="mailto:contact@metadxs.com" style={{ color: '#be185d', textDecoration: 'none' }}>contact@metadxs.com</a>
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#3b0764', marginBottom: '1rem' }}>Hébergement</h2>
                <p>
                    <strong>Hébergeur du site :</strong> WordPress
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#3b0764', marginBottom: '1rem' }}>Conditions d'utilisation</h2>
                <p>
                    Le site est soumis à la loi française. Toute utilisation du site est régie par les présentes mentions légales. En accédant à ce site, vous acceptez, sans limitation ni réserves, les présentes conditions d’utilisation.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#3b0764', marginBottom: '1rem' }}>Droits d’auteur et propriété intellectuelle</h2>
                <p>
                    Tous les éléments constituant ce site (textes, images, vidéos, graphismes, logos, icônes, etc.) sont la propriété exclusive de METADXS ou de tiers ayant autorisé METADXS à les utiliser.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle, du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit, est interdite, sauf autorisation expresse et préalable de METADXS.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    Toute exploitation non autorisée du site ou de son contenu engage la responsabilité de l’utilisateur et constitue une contrefaçon sanctionnée par les articles L. 335-2 et suivants du Code de la propriété intellectuelle.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#3b0764', marginBottom: '1rem' }}>Protection des données personnelles</h2>
                <p>
                    Les informations recueillies sur ce site font l’objet d’un traitement informatique destiné à la prise de contact. Les destinataires des données est l’équipe d’admission et d’administration.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée, vous disposez d’un droit d’accès, de rectification et de suppression des données qui vous concernent. Vous pouvez exercer ces droits en vous adressant à : <a href="mailto:contact@metadxs.com" style={{ color: '#be185d', textDecoration: 'none' }}>contact@metadxs.com</a>.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#3b0764', marginBottom: '1rem' }}>Liens hypertextes</h2>
                <p>
                    Les liens hypertextes mis en place dans le cadre du présent site internet en direction d’autres ressources présentes sur le réseau Internet, et notamment vers nos partenaires, ont fait l’objet d’une autorisation préalable, expresse et écrite.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#3b0764', marginBottom: '1rem' }}>Limitation de responsabilité</h2>
                <p>
                    METADXS s’efforce d’assurer au mieux de ses possibilités, l’exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    METADXS décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site, ainsi que pour tous dommages résultant d’une intrusion frauduleuse d’un tiers ayant entraîné une modification des informations mises à la disposition sur le site.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#3b0764', marginBottom: '1rem' }}>Loi applicable et compétence juridictionnelle</h2>
                <p>
                    Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
                </p>
            </section>
        </div>
    );
};

export default MentionsLegales;
