import { Helmet } from 'react-helmet-async';

export default function Contact() {
    return (
        <div style={{ padding: '4rem', textAlign: 'center', minHeight: '60vh' }}>
            <Helmet>
                <title>Contactez Meta DX School & Conseils à Toulouse</title>
                <meta name="description" content="Une question sur nos formations ou nos services d'audit ? Contactez l'équipe Meta DX School. Nous sommes situés au 244 Route de Seysses, 31100 Toulouse." />

                {/* Facebook / Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.metadxs.com/contact" />
                <meta property="og:title" content="Contactez Meta DX School & Conseils à Toulouse" />
                <meta property="og:description" content="Une question sur nos formations ou nos services d'audit ? Contactez l'équipe Meta DX School." />
                <meta property="og:image" content="https://www.metadxs.com/og-contact.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.metadxs.com/contact" />
                <meta property="twitter:title" content="Contactez Meta DX School & Conseils à Toulouse" />
                <meta property="twitter:description" content="Une question sur nos formations ou nos services d'audit ? Contactez l'équipe Meta DX School." />
                <meta property="twitter:image" content="https://www.metadxs.com/og-contact.jpg" />

                <link rel="canonical" href="https://www.metadxs.com/contact" />
            </Helmet>
            <h1 style={{ fontSize: '2.5rem', color: '#4a1c5d' }}>Contact</h1>
            <p>Contenu en construction...</p>
        </div>
    );
}
