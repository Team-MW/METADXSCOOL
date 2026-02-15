import { Helmet } from 'react-helmet-async';

export default function Financements() {
    return (
        <div style={{ padding: '4rem', textAlign: 'center', minHeight: '60vh' }}>
            <Helmet>
                <title>Financer sa Formation - CPF, OPCO, France Travail | Guide Meta DX</title>
                <meta name="description" content="Tout savoir sur les dispositifs de financement de formation : CPF, OPCO, Pôle Emploi (France Travail), Transition Pro. Nous vous aidons à monter votre dossier." />

                {/* Facebook / Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.metadxs.com/financements" />
                <meta property="og:title" content="Financer sa Formation - CPF, OPCO, France Travail | Guide Meta DX" />
                <meta property="og:description" content="Tout savoir sur les dispositifs de financement de formation : CPF, OPCO, Pôle Emploi (France Travail), Transition Pro." />
                <meta property="og:image" content="https://www.metadxs.com/og-financements.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.metadxs.com/financements" />
                <meta property="twitter:title" content="Financer sa Formation - CPF, OPCO, France Travail | Guide Meta DX" />
                <meta property="twitter:description" content="Tout savoir sur les dispositifs de financement de formation : CPF, OPCO, Pôle Emploi (France Travail), Transition Pro." />
                <meta property="twitter:image" content="https://www.metadxs.com/og-financements.jpg" />

                <link rel="canonical" href="https://www.metadxs.com/financements" />
            </Helmet>
            <h1 style={{ fontSize: '2.5rem', color: '#4a1c5d' }}>Financements</h1>
            <p>Contenu en construction...</p>
        </div>
    );
}
