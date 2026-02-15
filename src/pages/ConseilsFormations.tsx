import { Helmet } from 'react-helmet-async';

export default function ConseilsFormations() {
    return (
        <div style={{ padding: '4rem', textAlign: 'center', minHeight: '60vh' }}>
            <Helmet>
                <title>Conseil, Audit Qualiopi & Formations Qualité - Meta DX Conseils Toulouse</title>
                <meta name="description" content="Expertise en ingénierie de formation, certifications Qualiopi et accompagnement des OF. Bénéficiez de conseils sur-mesure pour développer votre activité de formation à Toulouse." />

                {/* Facebook / Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.metadxs.com/conseils-formations" />
                <meta property="og:title" content="Conseil, Audit Qualiopi & Formations Qualité - Meta DX Conseils Toulouse" />
                <meta property="og:description" content="Expertise en ingénierie de formation, certifications Qualiopi et accompagnement des OF." />
                <meta property="og:image" content="https://www.metadxs.com/og-conseil.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.metadxs.com/conseils-formations" />
                <meta property="twitter:title" content="Conseil, Audit Qualiopi & Formations Qualité - Meta DX Conseils Toulouse" />
                <meta property="twitter:description" content="Expertise en ingénierie de formation, certifications Qualiopi et accompagnement des OF." />
                <meta property="twitter:image" content="https://www.metadxs.com/og-conseil.jpg" />

                <link rel="canonical" href="https://www.metadxs.com/conseils-formations" />
            </Helmet>
            <h1 style={{ fontSize: '2.5rem', color: '#4a1c5d' }}>Conseils & Formations</h1>
            <p>Contenu en construction...</p>
        </div>
    );
}
