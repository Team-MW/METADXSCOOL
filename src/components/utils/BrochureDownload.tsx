import { Download, FileText, Eye } from 'lucide-react';

interface BrochureDownloadProps {
    /** Chemin public du PDF (ex: /brochures/Brochure_MEM_Meta_DX_School.pdf) */
    href: string;
    /** Nom court de la formation (ex: "TP MEM") */
    label: string;
    /** Couleur d'accent de la page */
    color?: string;
}

/**
 * Carte de téléchargement de brochure PDF, réutilisable dans toutes les pages formation.
 * Propose un bouton "Télécharger" (attribut download) et un lien "Consulter" (nouvel onglet).
 */
export default function BrochureDownload({ href, label, color = '#3b82f6' }: BrochureDownloadProps) {
    const fileName = href.split('/').pop();

    return (
        <div className="brochure-dl" style={{ ['--bd-color' as string]: color }}>
            <style>{`
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

            <div className="brochure-dl-head">
                <div className="brochure-dl-icon">
                    <FileText size={26} />
                </div>
                <div>
                    <h4 className="brochure-dl-title">BROCHURE {label.toUpperCase()}</h4>
                    <span className="brochure-dl-sub">Programme complet · PDF</span>
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
    );
}
