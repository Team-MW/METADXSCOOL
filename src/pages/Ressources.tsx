import { Helmet } from 'react-helmet-async';

export default function Ressources() {
    return (
        <div style={{ padding: '4rem', textAlign: 'center', minHeight: '60vh' }}>
            <Helmet>
                <title>Ressources & Actualités Formation - Le Blog Meta DX School</title>
                <meta name="description" content="Accédez aux dernières actualités sur la formation professionnelle, le financement (CPF, OPCO), la certification Qualiopi et les tendances du numérique." />

                {/* Facebook / Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.metadxs.com/ressources" />
                <meta property="og:title" content="Ressources & Actualités Formation - Le Blog Meta DX School" />
                <meta property="og:description" content="Accédez aux dernières actualités sur la formation professionnelle, le financement (CPF, OPCO), la certification Qualiopi." />
                <meta property="og:image" content="https://www.metadxs.com/og-ressources.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.metadxs.com/ressources" />
                <meta property="twitter:title" content="Ressources & Actualités Formation - Le Blog Meta DX School" />
                <meta property="twitter:description" content="Accédez aux dernières actualités sur la formation professionnelle, le financement (CPF, OPCO), la certification Qualiopi." />
                <meta property="twitter:image" content="https://www.metadxs.com/og-ressources.jpg" />

                <link rel="canonical" href="https://www.metadxs.com/ressources" />
            </Helmet>
            <h1 style={{ fontSize: '2.5rem', color: '#4a1c5d' }}>Ressources</h1>
            <p>Contenu en construction...</p>
        </div>
    );
}
