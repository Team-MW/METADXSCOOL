import { Helmet } from 'react-helmet-async';
import { Percent, Users, UserCheck, Award, Download, Eye, Info, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/CFA.css'; // Re-use CFA styles

// Source officielle : Affiche_resultats_examens_METADX_2024-2026.pdf
// Procès-fre d verbaux d'examen du centre METADXS (17 sessions de septembre 2024 au 22 octobre 2026)
const AFFICHE_PDF = '/Affiche_resultats_examens_METADX_2024-2026.pdf';

const parAnnee = [
    { annee: '2024', taux: 75, presentes: 20, inscrits: 23, enCours: false },
    { annee: '2025', taux: 76, presentes: 41, inscrits: 60, enCours: false },
    { annee: '2026', taux: 56, presentes: 16, inscrits: 41, enCours: true },
];

const parFormation = [
    { nom: 'Responsable-coordonnateur services au domicile', taux: 88, presentes: 8 },
    { nom: 'Conseiller relation client à distance', taux: 77, presentes: 13, lien: '/cfa/formation/tp-crcd' },
    { nom: 'Assistant de vie aux familles', taux: 74, presentes: 23 },
    { nom: 'Négociateur technico-commercial', taux: 71, presentes: 28, lien: '/cfa/formation/tp-ntc' },
];

const brochuresList = [
    { titre: 'TP AMUM', niveau: 'BAC', nom: "Assistant Manager d'Unité Marchande", href: '/brochures/Brochure_AMUM_Meta_DX_School.pdf', lien: '/cfa/formation/tp-amum', color: '#2563eb' },
    { titre: 'TP MDEC Option IA', niveau: 'BAC +3', nom: 'Manager du Développement Commercial', href: '/brochures/Brochure_MDEC_Option_IA_Meta_DX_School.pdf', lien: '/cfa/formation/tp-mdec', color: '#7c3aed' },
    { titre: 'TP MEM', niveau: 'BAC +2', nom: "Manager d'Établissement Marchand", href: '/brochures/Brochure_MEM_Meta_DX_School.pdf', lien: '/cfa/formation/tp-mem', color: '#3b82f6' },
    { titre: 'TP NTC', niveau: 'BAC +2', nom: 'Négociateur Technico-Commercial', href: '/brochures/Brochure_NTC_Meta_DX_School.pdf', lien: '/cfa/formation/tp-ntc', color: '#ef9a37' },
    { titre: 'Bachelor RDA', niveau: 'BAC +3', nom: 'Responsable du Développement Commercial', href: '/brochures/Brochure_RDA_Meta_DX_School.pdf', lien: '/cfa/formation/b-rda', color: '#ef9a37' },
    { titre: 'TP REM', niveau: 'BAC +3', nom: "Responsable d'Établissement Marchand", href: '/brochures/Brochure_REM_Meta_DX_School.pdf', lien: '/cfa/formation/tp-rem', color: '#7c3aed' },
    { titre: 'TP RPMS', niveau: 'BAC +2', nom: 'Responsable de Petite et Moyenne Structure', href: '/brochures/Brochure_RPMS_Meta_DX_School.pdf', lien: '/cfa/formation/tp-rpms', color: '#10b981' },
    { titre: 'TP CRCD', niveau: 'BAC', nom: 'Conseiller Relation Client à Distance', href: '/brochure_crcd.pdf', lien: '/cfa/formation/tp-crcd', color: '#0284c7' },
];

const cardStyle: React.CSSProperties = {
    textAlign: 'center', padding: '2.5rem 2rem', background: '#ecfdf5',
    borderRadius: '20px', border: '1px solid #d1fae5',
};
const bigNumber: React.CSSProperties = {
    fontSize: '3.2rem', fontWeight: 900, color: '#059669', marginBottom: '0.5rem', lineHeight: 1,
};

export default function Indicateurs() {
    return (
        <div>
            <Helmet>
                <title>Indicateurs de Résultats & Brochures - Meta DX School</title>
                <meta name="description" content="Résultats officiels aux examens des titres professionnels Meta DX School 2024-2026 : 71 % de taux d'obtention, 124 candidats inscrits, 77 présentés, 55 titres obtenus. Téléchargez l'affiche et les brochures." />
                <link rel="canonical" href="https://www.metadxs.com/cfa/indicateurs" />
            </Helmet>

            <section className="cfa-hero" style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="cfa-title">INDICATEURS DE<br />RÉSULTATS</h1>
                    <p className="cfa-subtitle">NOS RÉSULTATS AUX EXAMENS · 2024-2026 & BROCHURES</p>
                </div>
            </section>

            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '6rem 2rem' }}>

                <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 900, color: '#065f46', marginBottom: '0.8rem' }}>
                    NOS RÉSULTATS AUX EXAMENS
                </h2>
                <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '4rem' }}>
                    Titres professionnels préparés au centre METADXS, septembre 2024 - octobre 2026
                </p>

                {/* CHIFFRES CLÉS OFFICIELS */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
                    <div className="hq-card" style={{ ...cardStyle, background: 'linear-gradient(135deg, #059669, #10b981)', border: 'none', color: 'white' }}>
                        <Percent size={44} style={{ margin: '0 auto 1.2rem' }} />
                        <div style={{ ...bigNumber, color: 'white' }}>71 %</div>
                        <p style={{ fontSize: '1.05rem', fontWeight: 800 }}>TAUX D'OBTENTION DU TITRE</p>
                        <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>des candidats présentés à l'examen ont obtenu leur titre professionnel</p>
                    </div>

                    <div className="hq-card" style={cardStyle}>
                        <Users size={44} color="#10b981" style={{ margin: '0 auto 1.2rem' }} />
                        <div style={bigNumber}>124</div>
                        <p style={{ fontSize: '1.05rem', fontWeight: 800, color: '#064e3b' }}>CANDIDATS INSCRITS</p>
                        <p style={{ color: '#065f46', fontSize: '0.9rem' }}>sur 17 sessions d'examen</p>
                    </div>

                    <div className="hq-card" style={cardStyle}>
                        <UserCheck size={44} color="#10b981" style={{ margin: '0 auto 1.2rem' }} />
                        <div style={bigNumber}>77</div>
                        <p style={{ fontSize: '1.05rem', fontWeight: 800, color: '#064e3b' }}>CANDIDATS PRÉSENTÉS</p>
                        <p style={{ color: '#065f46', fontSize: '0.9rem' }}>soit 62 % des inscrits</p>
                    </div>

                    <div className="hq-card" style={cardStyle}>
                        <Award size={44} color="#10b981" style={{ margin: '0 auto 1.2rem' }} />
                        <div style={bigNumber}>55</div>
                        <p style={{ fontSize: '1.05rem', fontWeight: 800, color: '#064e3b' }}>TITRES OBTENUS</p>
                        <p style={{ color: '#065f46', fontSize: '0.9rem' }}>+ 15 validations partielles (blocs de compétences)</p>
                    </div>
                </div>

                {/* PAR ANNÉE / PAR FORMATION */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
                    <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#065f46', marginBottom: '0.3rem' }}>Par année</h3>
                        <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '2rem' }}>Taux d'obtention sur les candidats présentés</p>
                        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', gap: '1rem', height: '220px' }}>
                            {parAnnee.map((a) => (
                                <div key={a.annee} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                                    <span style={{ fontWeight: 900, color: '#059669', marginBottom: '0.4rem' }}>{a.taux} %</span>
                                    <div style={{ width: '70%', maxWidth: '70px', height: `${a.taux * 1.8}px`, background: a.enCours ? 'repeating-linear-gradient(45deg, #6ee7b7, #6ee7b7 8px, #a7f3d0 8px, #a7f3d0 16px)' : 'linear-gradient(180deg, #10b981, #059669)', borderRadius: '10px 10px 0 0' }} />
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem', borderTop: '2px solid #cbd5e1', paddingTop: '0.8rem' }}>
                            {parAnnee.map((a) => (
                                <div key={a.annee} style={{ flex: 1, textAlign: 'center' }}>
                                    <div style={{ fontWeight: 900, color: '#1e293b' }}>{a.annee}</div>
                                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{a.presentes} présentés<br />sur {a.inscrits} inscrits</div>
                                    {a.enCours && <div style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 700, marginTop: '0.2rem' }}>année en cours</div>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#065f46', marginBottom: '0.3rem' }}>Par formation</h3>
                        <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '2rem' }}>Taux d'obtention du titre, 2024-2026</p>
                        {parFormation.map((f) => (
                            <div key={f.nom} style={{ marginBottom: '1.4rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                                    {f.lien ? (
                                        <Link to={f.lien} style={{ fontWeight: 700, color: '#059669', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                            {f.nom} <ArrowRight size={14} />
                                        </Link>
                                    ) : (
                                        <span style={{ fontWeight: 700, color: '#1e293b' }}>{f.nom}</span>
                                    )}
                                    <span style={{ color: '#64748b', whiteSpace: 'nowrap' }}>{f.presentes} présentés</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <div style={{ flex: 1, height: '12px', background: '#e2e8f0', borderRadius: '99px', overflow: 'hidden' }}>
                                        <div style={{ width: `${f.taux}%`, height: '100%', background: 'linear-gradient(90deg, #10b981, #059669)', borderRadius: '99px' }} />
                                    </div>
                                    <span style={{ fontWeight: 900, color: '#059669', minWidth: '48px', textAlign: 'right' }}>{f.taux} %</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* MÉTHODOLOGIE */}
                <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', background: '#f0fdf4', border: '1px dashed #10b981', borderRadius: '16px', padding: '1.5rem 2rem', color: '#334155', fontSize: '0.88rem', lineHeight: 1.6 }}>
                    <Info size={22} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                        <p><strong>Comment lire ces chiffres.</strong> Taux d'obtention = titres professionnels obtenus ÷ candidats présentés à l'examen. Taux de présentation = candidats présents ÷ candidats inscrits. Un candidat qui repasse l'examen est compté à chaque passage. Les formations comptant moins de 5 candidats présentés ne sont pas affichées.</p>
                        <p style={{ marginTop: '0.6rem', color: '#64748b' }}>Source : procès-verbaux d'examen du centre METADXS, 17 sessions de septembre 2024 au 22 octobre 2026.</p>
                    </div>
                </div>

                {/* AFFICHE OFFICIELLE DES RÉSULTATS */}
                <div style={{ marginTop: '4rem', background: '#f8fafc', padding: '3rem', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#1e293b' }}>
                        Affiche officielle des résultats 2024-2026
                    </h3>
                    <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
                        Retrouvez l'affiche certifiée de nos résultats aux examens des titres professionnels, téléchargeable au format PDF ou consultable directement.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                        <a href={AFFICHE_PDF} download="Affiche_resultats_examens_METADX_2024-2026.pdf" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#10b981', color: 'white', padding: '1rem 2rem', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold' }}>
                            <Download size={18} /> Télécharger l'affiche (PDF)
                        </a>
                        <a href={AFFICHE_PDF} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: '#059669', border: '2px solid #10b981', padding: '1rem 2rem', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold' }}>
                            <Eye size={18} /> Consulter en plein écran
                        </a>
                    </div>
                    <object data={`${AFFICHE_PDF}#view=FitH`} type="application/pdf" width="100%" style={{ height: '75vh', minHeight: '500px', borderRadius: '12px', border: '1px solid #e2e8f0', background: 'white' }}>
                        <p style={{ padding: '2rem', color: '#64748b' }}>
                            Votre navigateur ne peut pas afficher directement le PDF. <a href={AFFICHE_PDF} target="_blank" rel="noopener noreferrer" style={{ color: '#059669', fontWeight: 700 }}>Cliquez ici pour ouvrir l'affiche</a>.
                        </p>
                    </object>
                </div>

                {/* SECTION TÉLÉCHARGEMENT DES BROCHURES DE FORMATIONS */}
                <div style={{ marginTop: '5rem', background: '#ffffff', padding: '3.5rem 3rem', borderRadius: '24px', border: '2px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
                    <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#eff6ff', color: '#2563eb', padding: '0.4rem 1rem', borderRadius: '50px', fontWeight: 800, fontSize: '0.85rem', marginBottom: '1rem' }}>
                            <BookOpen size={16} /> BROCHURES & PROGRAMMES
                        </div>
                        <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#1e293b', marginBottom: '0.8rem' }}>
                            Télécharger les brochures de nos formations
                        </h3>
                        <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>
                            Retrouvez les fiches programmes détaillées de chacune de nos filières en alternance (objectifs, blocs de compétences RNCP, prérequis, débouchés).
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {brochuresList.map((b) => (
                            <div key={b.titre} style={{ background: '#f8fafc', borderRadius: '16px', padding: '1.6rem', border: `1.5px solid ${b.color}25`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.2s ease' }}>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                                        <span style={{ background: b.color, color: 'white', fontSize: '0.75rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '6px' }}>
                                            {b.niveau}
                                        </span>
                                        <Link to={b.lien} style={{ fontSize: '0.78rem', color: '#64748b', textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                                            Voir la page <ArrowRight size={12} />
                                        </Link>
                                    </div>
                                    <h4 style={{ fontSize: '1.05rem', fontWeight: 900, color: '#1e293b', margin: '0 0 0.3rem' }}>{b.titre}</h4>
                                    <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '0 0 1.2rem', minHeight: '2.4em' }}>{b.nom}</p>
                                </div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <a
                                        href={b.href}
                                        download
                                        style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', background: b.color, color: 'white', padding: '0.65rem 0.8rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 800, fontSize: '0.78rem' }}
                                    >
                                        <Download size={14} /> TÉLÉCHARGER
                                    </a>
                                    <a
                                        href={b.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', background: 'white', color: b.color, border: `1.5px solid ${b.color}`, padding: '0.65rem 0.8rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 800, fontSize: '0.78rem' }}
                                    >
                                        <Eye size={14} /> CONSULTER
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
