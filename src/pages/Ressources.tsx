import { Helmet } from 'react-helmet-async';

export default function Ressources() {
    return (
        <div style={{ padding: '4rem', textAlign: 'center', minHeight: '60vh' }}>
            <Helmet>
                <title>Ressources & Actualités Formation - Le Blog Meta DX School</title>
                <meta name="description" content="Accédez aux dernières actualités sur la formation professionnelle, le financement (CPF, OPCO), la certification Qualiopi et les tendances du numérique." />
            </Helmet>
            <h1 style={{ fontSize: '2.5rem', color: '#4a1c5d' }}>Ressources</h1>
            <p>Contenu en construction...</p>
        </div>
    );
}
