import { Helmet } from 'react-helmet-async';

export default function CFA() {
    return (
        <div style={{ padding: '4rem', textAlign: 'center', minHeight: '60vh' }}>
            <Helmet>
                <title>CFA Numérique Toulouse - Apprentissage & Alternance IT | Meta DX School</title>
                <meta name="description" content="Rejoignez le CFA Meta DX School à Toulouse. Formations en alternance dans le numérique, développement web et cybersécurité. Apprenez un métier d'avenir tout en étant rémunéré." />

                {/* Facebook / Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.metadxs.com/cfa" />
                <meta property="og:title" content="CFA Numérique Toulouse - Apprentissage & Alternance IT | Meta DX School" />
                <meta property="og:description" content="Rejoignez le CFA Meta DX School à Toulouse. Formations en alternance dans le numérique." />
                <meta property="og:image" content="https://www.metadxs.com/og-cfa.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.metadxs.com/cfa" />
                <meta property="twitter:title" content="CFA Numérique Toulouse - Apprentissage & Alternance IT | Meta DX School" />
                <meta property="twitter:description" content="Rejoignez le CFA Meta DX School à Toulouse. Formations en alternance dans le numérique." />
                <meta property="twitter:image" content="https://www.metadxs.com/og-cfa.jpg" />

                <link rel="canonical" href="https://www.metadxs.com/cfa" />
            </Helmet>
            <h1 style={{ fontSize: '2.5rem', color: '#4a1c5d' }}>CFA</h1>
            <p>Contenu en construction...</p>
        </div>
    );
}
