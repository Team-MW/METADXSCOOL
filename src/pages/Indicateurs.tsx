import { Helmet } from 'react-helmet-async';
import { TrendingUp, CheckCircle, Percent } from 'lucide-react';
import '../styles/CFA.css'; // Re-use CFA styles

export default function Indicateurs() {
    return (
        <div>
            <Helmet>
                <title>Indicateurs de Résultats - Meta DX School</title>
                <meta name="description" content="Consultez nos taux de réussite, d'insertion professionnelle et de satisfaction." />
                <link rel="canonical" href="https://www.metadxs.com/cfa/indicateurs" />
            </Helmet>

            <section className="cfa-hero" style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="cfa-title">INDICATEURS DE<br />RÉSULTATS</h1>
                    <p className="cfa-subtitle">NOS CHIFFRES CLÉS & TAUX DE RÉUSSITE</p>
                </div>
            </section>

            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '6rem 2rem' }}>

                <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '900', color: '#065f46', marginBottom: '4rem' }}>
                    METADXS EN CHIFFRES (2024)
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>

                    {/* CARD 1 */}
                    <div className="hq-card" style={{ textAlign: 'center', padding: '3rem', background: '#ecfdf5', borderRadius: '20px', border: '1px solid #d1fae5' }}>
                        <Percent size={50} color="#10b981" style={{ margin: '0 auto 1.5rem' }} />
                        <div style={{ fontSize: '3.5rem', fontWeight: '900', color: '#059669', marginBottom: '0.5rem' }}>92%</div>
                        <p style={{ fontSize: '1.2rem', fontWeight: '700', color: '#064e3b' }}>TAUX DE RÉUSSITE</p>
                        <p style={{ color: '#065f46' }}>aux examens</p>
                    </div>

                    {/* CARD 2 */}
                    <div className="hq-card" style={{ textAlign: 'center', padding: '3rem', background: '#ecfdf5', borderRadius: '20px', border: '1px solid #d1fae5' }}>
                        <TrendingUp size={50} color="#10b981" style={{ margin: '0 auto 1.5rem' }} />
                        <div style={{ fontSize: '3.5rem', fontWeight: '900', color: '#059669', marginBottom: '0.5rem' }}>85%</div>
                        <p style={{ fontSize: '1.2rem', fontWeight: '700', color: '#064e3b' }}>INSERTION PRO</p>
                        <p style={{ color: '#065f46' }}>à 6 mois</p>
                    </div>

                    {/* CARD 3 */}
                    <div className="hq-card" style={{ textAlign: 'center', padding: '3rem', background: '#ecfdf5', borderRadius: '20px', border: '1px solid #d1fae5' }}>
                        <CheckCircle size={50} color="#10b981" style={{ margin: '0 auto 1.5rem' }} />
                        <div style={{ fontSize: '3.5rem', fontWeight: '900', color: '#059669', marginBottom: '0.5rem' }}>95%</div>
                        <p style={{ fontSize: '1.2rem', fontWeight: '700', color: '#064e3b' }}>SATISFACTION</p>
                        <p style={{ color: '#065f46' }}>apprenants/entreprises</p>
                    </div>

                </div>

                <div style={{ marginTop: '6rem', background: '#f8fafc', padding: '3rem', borderRadius: '20px' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem', color: '#334155' }}>Détails par formation</h3>
                    <p style={{ color: '#64748b' }}>Les indicateurs détaillés par titre professionnel sont disponibles sur demande ou lors de nos journées portes ouvertes.</p>
                </div>
            </div>
        </div>
    );
}
