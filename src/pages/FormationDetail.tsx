import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { BookOpen, CheckCircle, TrendingUp, Users } from 'lucide-react';
import '../styles/CFA.css'; // Re-use CFA styles for consistency

// Data for formations (this could be moved to a separate data file later)
const formationsData: any = {
    'tp-rpms': {
        title: "TP - Responsable de Petite et Moyenne Structure",
        level: "BAC +2",
        description: "Devenez un gestionnaire polyvalent capable de piloter l'activité, les ressources et le développement d'une structure (TPE/PME, association, filiale).",
        objectives: [
            "Piloter l'activité commerciale et la gestion financière",
            "Manager les équipes et les ressources humaines",
            "Gérer les projets et le développement de la structure",
            "Assurer la relation avec les partenaires externes"
        ],
        opportunities: ["Responsable de structure", "Adjoint de direction", "Manager opérationnel", "Chargé de développement"]
    },
    'tp-ntc': {
        title: "TP - Négociateur Technico-Commercial",
        level: "BAC +2",
        description: "Maîtrisez l'art de la négociation et de la vente technique. Apprenez à élaborer des solutions sur mesure et à développer un portefeuille client.",
        objectives: [
            "Élaborer une stratégie commerciale omnicanale",
            "Prospecter et négocier une offre technique",
            "Manager la relation client durablement",
            "Optimiser la performance commerciale"
        ],
        opportunities: ["Technico-commercial", "Chargé d'affaires", "Attaché commercial", "Responsable de compte"]
    },
    'tp-mum': {
        title: "TP - Manager d'Unité Marchande",
        level: "BAC +2",
        description: "Pilotez la performance de votre rayon ou magasin. Développez vos compétences en merchandising, gestion et management d'équipe.",
        objectives: [
            "Développer la dynamique commerciale de l'unité marchande",
            "Optimiser la performance économique et la rentabilité",
            "Manager l'équipe de l'unité marchande",
            "Gérer les approvisionnements et les stocks"
        ],
        opportunities: ["Chef de rayon", "Directeur de magasin", "Manager de département", "Responsable commerce"]
    },
    'tp-crcd': {
        title: "TP - Conseiller Relation Client à Distance",
        level: "BAC",
        description: "Devenez expert de la relation client omnicanale. Apprenez à conseiller, vendre et fidéliser une clientèle à distance via téléphone, chat ou mail.",
        objectives: [
            "Assurer des prestations de services et de conseil à distance",
            "Réaliser des actions commerciales à distance",
            "Gérer des dossiers clients complexes",
            "Assurer le suivi administratif de la relation client"
        ],
        opportunities: ["Téléconseiller", "Chargé de clientèle à distance", "Conseiller commercial sédentaire", "Superviseur relation client"]
    },
    'tp-amum': {
        title: "TP - Assistant Manager d'Unité Marchande",
        level: "BAC",
        description: "Seconder le manager dans le pilotage de l'activité commerciale. Participez à l'animation de l'équipe et à la gestion du point de vente.",
        objectives: [
            "Participer à la gestion courante de l'unité marchande",
            "Contribuer à l'animation commerciale",
            "Accompagner l'équipe dans l'activité quotidienne",
            "Gérer les flux de marchandises"
        ],
        opportunities: ["Assistant manager", "Chef d'équipe commerce", "Adjoint chef de rayon"]
    },
    'tp-amum-opt-rr': {
        title: "TP - Assistant Manager d'Unité Marchande OPT RR",
        level: "BAC",
        description: "Spécialisation Option Responsable de Rayon. Approfondissez vos compétences en gestion de centre de profit et animation d'équipe.",
        objectives: [
            "Piloter les indicateurs de gestion du rayon",
            "Optimiser l'implantation et le merchandising",
            "Manager et former une équipe de vente",
            "Négocier avec les fournisseurs"
        ],
        opportunities: ["Responsable de rayon", "Gestionnaire de stock", "Manager de proximité"]
    }
};

export default function FormationDetail() {
    const { id } = useParams();
    const formation = id && formationsData[id];

    if (!formation) {
        return (
            <div style={{ padding: '8rem 2rem', textAlign: 'center' }}>
                <Helmet>
                    <title>Formation non trouvée - Meta DX School</title>
                </Helmet>
                <h1>Formation non trouvée 😕</h1>
                <p>La formation demandée n'existe pas ou est en cours de création.</p>
                <a href="/cfa" style={{ color: '#db2777', fontWeight: 'bold' }}>Retour au CFA</a>
            </div>
        );
    }

    return (
        <div>
            <Helmet>
                <title>{formation.title} - Meta DX School</title>
                <meta name="description" content={`Découvrez la formation ${formation.title} (${formation.level}) chez Meta DX School.`} />
            </Helmet>

            {/* HERO */}
            <section className="cfa-hero" style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb)' }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <span style={{
                        background: '#fbbf24',
                        color: '#1e3a8a',
                        padding: '0.5rem 1rem',
                        borderRadius: '50px',
                        fontWeight: '800',
                        marginBottom: '1rem',
                        display: 'inline-block'
                    }}>
                        {formation.level}
                    </span>
                    <h1 className="cfa-title" style={{ fontSize: '2.5rem' }}>{formation.title}</h1>
                    <p className="cfa-subtitle">FORMATION CERTIFIANTE & PROFESSIONNALISANTE</p>
                </div>
            </section>

            {/* CONTENT */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '6rem 2rem' }}>

                {/* INTRO */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#4b5563' }}>
                        {formation.description}
                    </p>
                </div>

                {/* GRID OBJECTIFS & DEBOUCHES */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    {/* OBJECTIFS */}
                    <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <BookOpen color="#3b82f6" /> OBJECTIFS
                        </h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {formation.objectives.map((obj: string, i: number) => (
                                <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: '#334155' }}>
                                    <CheckCircle size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '4px' }} />
                                    {obj}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* DEBOUCHES */}
                    <div style={{ background: '#f0f9ff', padding: '2.5rem', borderRadius: '20px', border: '1px solid #bae6fd' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0369a1', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <TrendingUp color="#0ea5e9" /> DÉBOUCHÉS
                        </h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {formation.opportunities.map((opp: string, i: number) => (
                                <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: '#0f172a', fontWeight: '600' }}>
                                    <Users size={18} color="#0ea5e9" style={{ flexShrink: 0, marginTop: '4px' }} />
                                    {opp}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* CTA */}
                <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                    <a href="/contact/candidat" style={{
                        display: 'inline-block',
                        padding: '1rem 3rem',
                        background: '#db2777',
                        color: 'white',
                        fontWeight: '800',
                        borderRadius: '99px',
                        textDecoration: 'none',
                        boxShadow: '0 10px 20px rgba(219, 39, 119, 0.4)',
                        transition: 'transform 0.2s'
                    }}>
                        CANDIDATER MAINTENANT 🚀
                    </a>
                </div>

            </div>
        </div>
    );
}
