import { Helmet } from 'react-helmet-async';

export default function FormaSecu() {
    return (
        <div style={{ padding: '4rem', textAlign: 'center', minHeight: '60vh' }}>
            <Helmet>
                <title>Formations Sécurité & Prévention - SST, Incendie, Habilitations | Meta DX School</title>
                <meta name="description" content="Formez vos équipes à la sécurité avec Forma'Secu par Meta DX. Sauveteur Secouriste du Travail (SST), sécurité incendie, gestes et postures, habilitations électriques." />
            </Helmet>
            <h1 style={{ fontSize: '2.5rem', color: '#4a1c5d' }}>Forma'Sécu</h1>
            <p>Contenu en construction...</p>
        </div>
    );
}
