import { Download, FileText, Eye, BarChart3 } from 'lucide-react';
import { brochures, type BrochureKey } from '../../data/brochures';

interface BrochureDownloadProps {
    /** Clé de la formation dans src/data/brochures.ts (ex: "mem") */
    formation: BrochureKey;
}

/** Document officiel des statistiques / résultats aux examens */
const STATS_PDF = '/Affiche_resultats_examens_METADX_2024-2026.pdf';
const STATS_FILE_NAME = 'Affiche_resultats_examens_METADX_2024-2026.pdf';

/**
 * Bloc "Chiffres clés" + fiche brochure téléchargeable, réutilisable sur chaque page formation.
 * - Carré "Chiffres clés" : indicateurs de la formation + lien CONSULTER vers le document stats.
 * - Carré brochure : télécharger / consulter le PDF programme.
 */
export default function BrochureDownload({ formation }: BrochureDownloadProps) {
    const { href, label, color, figures } = brochures[formation];
    const fileName = href.split('/').pop();

    return (
        <section
            className="brochure-resource"
            aria-label={`Chiffres clés et fiche téléchargeable ${label}`}
            style={{ ['--bd-color' as string]: color }}
        >
            <style>{`
                .brochure-resource { margin-top: 1.5rem; }
                .brochure-resource-heading {
                    color: #1c1e4c; font-size: 1.1rem; line-height: 1.3;
                    font-weight: 900; margin: 0 0 1rem;
                }
                .brochure-cards {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
                .brochure-card {
                    position: relative;
                    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
                    border: 2px solid var(--bd-color);
                    border-radius: 20px;
                    padding: 1.5rem;
                    overflow: hidden;
                    box-shadow: 0 10px 25px -10px color-mix(in srgb, var(--bd-color) 45%, transparent);
                }
                .brochure-card.is-stats {
                    border-color: #10b981;
                    box-shadow: 0 10px 25px -10px rgba(16, 185, 129, 0.35);
                }
                .brochure-card-head {
                    display: flex; align-items: center; gap: 1rem;
                    margin-bottom: 1.1rem; position: relative;
                }
                .brochure-card-icon {
                    width: 52px; height: 52px; flex-shrink: 0;
                    border-radius: 14px;
                    display: flex; align-items: center; justify-content: center;
                    background: var(--bd-color); color: #fff;
                }
                .brochure-card.is-stats .brochure-card-icon {
                    background: #10b981;
                }
                .brochure-card-kicker {
                    display: inline-block;
                    font-size: 0.7rem;
                    font-weight: 800;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: #64748b;
                    margin-bottom: 0.2rem;
                }
                .brochure-card.is-stats .brochure-card-kicker { color: #059669; }
                .brochure-card-title {
                    font-weight: 900; font-size: 0.95rem; color: #1c1e4c; margin: 0;
                }
                .brochure-card-sub {
                    font-size: 0.75rem; color: #64748b; font-weight: 700;
                }
                .brochure-figures {
                    display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                    gap: 0.6rem; margin-bottom: 1rem;
                }
                .brochure-figure {
                    min-width: 0; padding: 0.8rem; background: #f8fafc;
                    border: 1px solid #e2e8f0; border-radius: 8px;
                }
                .brochure-figure-value { display: block; color: var(--bd-color); font-size: 1.05rem; font-weight: 900; }
                .brochure-card.is-stats .brochure-figure-value { color: #059669; }
                .brochure-figure-label { display: block; margin-top: 0.2rem; color: #475569; font-size: 0.72rem; line-height: 1.35; }
                .brochure-dl-actions { display: flex; gap: 0.6rem; position: relative; flex-wrap: wrap; }
                .brochure-dl-btn {
                    flex: 1;
                    min-width: 130px;
                    display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem;
                    padding: 0.75rem 0.8rem;
                    border-radius: 12px;
                    font-weight: 800; font-size: 0.8rem;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                .brochure-dl-btn.primary {
                    background: var(--bd-color); color: #fff;
                    border: 2px solid var(--bd-color);
                }
                .brochure-card.is-stats .brochure-dl-btn.primary {
                    background: #10b981; border-color: #10b981;
                }
                .brochure-dl-btn.primary:hover { filter: brightness(1.1); transform: scale(1.03); }
                .brochure-dl-btn.ghost {
                    background: transparent; color: var(--bd-color);
                    border: 2px solid var(--bd-color);
                }
                .brochure-card.is-stats .brochure-dl-btn.ghost {
                    color: #059669; border-color: #10b981;
                }
                .brochure-dl-btn.ghost:hover {
                    background: color-mix(in srgb, var(--bd-color) 10%, transparent);
                }
                .brochure-card.is-stats .brochure-dl-btn.ghost:hover {
                    background: rgba(16, 185, 129, 0.08);
                }
            `}</style>

            <h2 className="brochure-resource-heading">Chiffres clés et fiche téléchargeable</h2>

            <div className="brochure-cards">
                <div className="brochure-card is-stats">
                    <div className="brochure-card-head">
                        <div className="brochure-card-icon">
                            <BarChart3 size={26} />
                        </div>
                        <div>
                            <span className="brochure-card-kicker">Statistiques</span>
                            <h3 className="brochure-card-title">CHIFFRES CLÉS</h3>
                            <span className="brochure-card-sub">Indicateurs {label} · document consultable</span>
                        </div>
                    </div>

                    {figures.length > 0 && (
                        <div className="brochure-figures">
                            {figures.map((figure) => (
                                <div className="brochure-figure" key={`${figure.value}-${figure.label}`}>
                                    <strong className="brochure-figure-value">{figure.value}</strong>
                                    <span className="brochure-figure-label">{figure.label}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="brochure-dl-actions">
                        <a
                            href={STATS_PDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="brochure-dl-btn primary"
                            aria-label={`Consulter le document chiffres clés ${label}`}
                        >
                            <Eye size={16} /> CONSULTER LE DOCUMENT
                        </a>
                        <a
                            href={STATS_PDF}
                            download={STATS_FILE_NAME}
                            className="brochure-dl-btn ghost"
                            aria-label={`Télécharger le document chiffres clés ${label}`}
                        >
                            <Download size={16} /> TÉLÉCHARGER
                        </a>
                    </div>
                </div>

                <div className="brochure-card">
                    <div className="brochure-card-head">
                        <div className="brochure-card-icon">
                            <FileText size={26} />
                        </div>
                        <div>
                            <span className="brochure-card-kicker">Programme</span>
                            <h3 className="brochure-card-title">BROCHURE {label.toUpperCase()}</h3>
                            <span className="brochure-card-sub">Programme complet · Tarifs · PDF</span>
                        </div>
                    </div>

                    <div className="brochure-dl-actions">
                        <a
                            href={href}
                            download={fileName}
                            className="brochure-dl-btn primary"
                            aria-label={`Télécharger la brochure ${label}`}
                        >
                            <Download size={16} /> TÉLÉCHARGER
                        </a>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="brochure-dl-btn ghost"
                            aria-label={`Consulter la brochure ${label}`}
                        >
                            <Eye size={16} /> CONSULTER
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
