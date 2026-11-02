import { Download, FileText, Eye } from 'lucide-react';
import { brochures, type BrochureKey } from '../../data/brochures';

interface BrochureDownloadProps {
    /** Clé de la formation dans src/data/brochures.ts (ex: "mem") */
    formation: BrochureKey;
}

/**
 * Bloc "Chiffres clés et fiche téléchargeable", réutilisable dans toutes les pages formation.
 * Le PDF, la couleur et les chiffres (dont le tarif) viennent de src/data/brochures.ts.
 * Propose un bouton "Télécharger" (attribut download) et un lien "Consulter" (nouvel onglet).
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
                .brochure-figures {
                    display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                    gap: 0.6rem; margin-bottom: 1rem;
                }
                .brochure-figure {
                    min-width: 0; padding: 0.8rem; background: #f8fafc;
                    border: 1px solid #e2e8f0; border-radius: 8px;
                }
                .brochure-figure-value { display: block; color: var(--bd-color); font-size: 1.1rem; font-weight: 900; }
                .brochure-figure-label { display: block; margin-top: 0.2rem; color: #475569; font-size: 0.72rem; line-height: 1.35; }
                .brochure-dl {
                    position: relative;
                    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
                    border: 2px solid var(--bd-color);
                    border-radius: 20px;
                    padding: 1.5rem;
                    overflow: hidden;
                    box-shadow: 0 10px 25px -10px color-mix(in srgb, var(--bd-color) 45%, transparent);
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                }
                .brochure-dl:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 18px 35px -12px color-mix(in srgb, var(--bd-color) 60%, transparent);
                }
                .brochure-dl::before {
                    content: '';
                    position: absolute;
                    top: -40px; right: -40px;
                    width: 120px; height: 120px;
                    border-radius: 50%;
                    background: color-mix(in srgb, var(--bd-color) 12%, transparent);
                }
                .brochure-dl-head {
                    display: flex; align-items: center; gap: 1rem;
                    margin-bottom: 1.2rem; position: relative;
                }
                .brochure-dl-icon {
                    width: 52px; height: 52px; flex-shrink: 0;
                    border-radius: 14px;
                    display: flex; align-items: center; justify-content: center;
                    background: var(--bd-color); color: #fff;
                }
                .brochure-dl-title {
                    font-weight: 900; font-size: 0.95rem; color: #1c1e4c; margin: 0;
                }
                .brochure-dl-sub {
                    font-size: 0.75rem; color: #64748b; font-weight: 700;
                }
                .brochure-dl-actions { display: flex; gap: 0.6rem; position: relative; }
                .brochure-dl-btn {
                    flex: 1;
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
                .brochure-dl-btn.primary:hover { filter: brightness(1.1); transform: scale(1.03); }
                .brochure-dl-btn.ghost {
                    background: transparent; color: var(--bd-color);
                    border: 2px solid var(--bd-color);
                }
                .brochure-dl-btn.ghost:hover {
                    background: color-mix(in srgb, var(--bd-color) 10%, transparent);
                }
            `}</style>

            <h2 className="brochure-resource-heading">Chiffres clés et la fiche téléchargeable</h2>
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

            <div className="brochure-dl">
                <div className="brochure-dl-head">
                    <div className="brochure-dl-icon">
                        <FileText size={26} />
                    </div>
                    <div>
                        <h3 className="brochure-dl-title">BROCHURE {label.toUpperCase()}</h3>
                        <span className="brochure-dl-sub">Programme complet · Tarifs · PDF</span>
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
        </section>
    );
}
