import { Helmet } from 'react-helmet-async';

export default function FormaSecu() {
    return (
        <div style={{ padding: '4rem', textAlign: 'center', minHeight: '60vh' }}>
            <Helmet>
                <title>Formations Sécurité & Prévention - SST, Incendie, Habilitations | Meta DX School</title>
                <meta name="description" content="Formez vos équipes à la sécurité avec Forma'Secu par Meta DX. Sauveteur Secouriste du Travail (SST), sécurité incendie, gestes et postures, habilitations électriques." />

                {/* Facebook / Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.metadxs.com/forma-secu" />
                <meta property="og:title" content="Formations Sécurité & Prévention - SST, Incendie, Habilitations | Meta DX School" />
                <meta property="og:description" content="Formez vos équipes à la sécurité avec Forma'Secu par Meta DX. Sauveteur Secouriste du Travail (SST), sécurité incendie, gestes et postures." />
                <meta property="og:image" content="https://www.metadxs.com/og-forma-secu.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.metadxs.com/forma-secu" />
                <meta property="twitter:title" content="Formations Sécurité & Prévention - SST, Incendie, Habilitations | Meta DX School" />
                <meta property="twitter:description" content="Formez vos équipes à la sécurité avec Forma'Secu par Meta DX. Sauveteur Secouriste du Travail (SST), sécurité incendie, gestes et postures." />
                <meta property="twitter:image" content="https://www.metadxs.com/og-forma-secu.jpg" />

                <link rel="canonical" href="https://www.metadxs.com/forma-secu" />
            </Helmet>
            <h1 style={{ fontSize: '2.5rem', color: '#4a1c5d' }}>Forma'Sécu</h1>
            <p>Contenu en construction...</p>
        </div>
    );
}
