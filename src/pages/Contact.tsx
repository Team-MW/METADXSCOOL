import { Helmet } from 'react-helmet-async';

export default function Contact() {
    return (
        <div style={{ padding: '4rem', textAlign: 'center', minHeight: '60vh' }}>
            <Helmet>
                <title>Contactez Meta DX School & Conseils à Toulouse</title>
                <meta name="description" content="Une question sur nos formations ou nos services d'audit ? Contactez l'équipe Meta DX School. Nous sommes situés au 244 Route de Seysses, 31100 Toulouse." />
            </Helmet>
            <h1 style={{ fontSize: '2.5rem', color: '#4a1c5d' }}>Contact</h1>
            <p>Contenu en construction...</p>
        </div>
    );
}
