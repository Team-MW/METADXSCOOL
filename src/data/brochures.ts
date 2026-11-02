// Brochures PDF des formations (fichiers dans /public) et chiffres clés affichés
// dans le bloc "Chiffres clés et fiche téléchargeable" de chaque page formation.
// Pour mettre à jour une brochure : remplacer le PDF dans /public et ajuster l'entrée ici.

export interface BrochureFigure {
    value: string;
    label: string;
}

export interface Brochure {
    /** Chemin public du PDF */
    href: string;
    /** Nom court de la formation */
    label: string;
    /** Couleur d'accent de la page */
    color: string;
    figures: BrochureFigure[];
}

export const brochures = {
    amum: {
        href: '/brochures/Brochure_AMUM_Meta_DX_School.pdf',
        label: 'TP AMUM',
        color: '#2563eb',
        figures: [
            { value: 'Niveau 4', label: 'Baccalauréat' },
            { value: '12 mois', label: 'Durée du parcours' },
            { value: '6 733 €', label: 'Tarif moyen · pris en charge OPCO' },
        ],
    },
    crcd: {
        // Nouvelle brochure client (29/10/2026). Déposer le PDF dans public/brochures/
        // si le fichier n'est pas encore présent : Brochure_CRCD_Meta_DX_School_291026.pdf
        href: '/brochures/Brochure_CRCD_Meta_DX_School_291026.pdf',
        label: 'TP CRCD',
        color: '#3b82f6',
        figures: [
            { value: 'Niveau 4', label: 'Baccalauréat' },
            { value: '15 mois', label: '470 h en centre' },
            { value: '15 max', label: 'Participants par groupe' },
            { value: '2 / an', label: "Sessions d'examen" },
            { value: 'RNCP 35304', label: 'Certification' },
            { value: '77 %', label: "Taux d'obtention du titre · 2024-2026" },
            { value: '7 650 €', label: 'Tarif moyen · pris en charge OPCO' },
        ],
    },
    mdec: {
        href: '/brochures/Brochure_MDEC_Option_IA_Meta_DX_School.pdf',
        label: 'TP MDEC Option IA',
        color: '#7c3aed',
        figures: [
            { value: 'Niveau 7', label: 'Bac+5' },
            { value: '24 mois', label: '1 200 h de formation' },
            { value: 'RNCP 39354', label: 'Certification' },
            { value: '19/07/2027', label: "Échéance d'enregistrement RNCP" },
            { value: '7 000 € / an', label: 'Pris en charge OPCO · 750 € reste à charge employeur' },
        ],
    },
    mem: {
        href: '/brochures/Brochure_MEM_Meta_DX_School.pdf',
        label: 'TP MEM',
        color: '#3b82f6',
        figures: [
            { value: 'Niveau 5', label: 'Bac+2' },
            { value: '15 mois', label: '470 h en centre' },
            { value: '15 max', label: 'Participants par groupe' },
            { value: '2 / an', label: "Sessions d'examen" },
            { value: 'RNCP 41853', label: 'Code TP 00136' },
            { value: '7 500 €', label: 'Tarif moyen · pris en charge OPCO' },
        ],
    },
    ntc: {
        href: '/brochures/Brochure_NTC_Meta_DX_School.pdf',
        label: 'TP NTC',
        color: '#ef9a37',
        figures: [
            { value: 'Niveau 5', label: 'Bac+2' },
            { value: '15 mois', label: '470 h en centre' },
            { value: '15 max', label: 'Participants par groupe' },
            { value: '2 / an', label: "Sessions d'examen" },
            { value: 'RNCP 39063', label: 'Certification' },
            { value: '71 %', label: "Taux d'obtention du titre · 2024-2026" },
            { value: '8 302 €', label: 'Tarif moyen · pris en charge OPCO' },
        ],
    },
    rda: {
        href: '/brochures/Brochure_RDA_Meta_DX_School.pdf',
        label: 'Bachelor RDA',
        color: '#ef9a37',
        figures: [
            { value: 'Niveau 6', label: 'Bac+3' },
            { value: '12 mois', label: '600 h en centre' },
            { value: '15 max', label: 'Participants par groupe' },
            { value: 'RNCP 38602', label: 'Certification' },
            { value: '7 827 €', label: 'Tarif moyen · pris en charge OPCO' },
        ],
    },
    rem: {
        href: '/brochures/Brochure_REM_Meta_DX_School.pdf',
        label: 'TP REM',
        color: '#7c3aed',
        figures: [
            { value: 'Niveau 6', label: 'Bac+3' },
            { value: '15 mois', label: '470 h en centre' },
            { value: '20 max', label: 'Participants par groupe' },
            { value: '2 / an', label: "Sessions d'examen" },
            { value: 'RNCP 38666', label: 'Certification' },
            { value: '7 500 €', label: 'Tarif moyen · pris en charge OPCO' },
        ],
    },
    rpms: {
        href: '/brochures/Brochure_RPMS_Meta_DX_School.pdf',
        label: 'TP RPMS',
        color: '#10b981',
        figures: [
            { value: 'Niveau 5', label: 'Bac+2' },
            { value: '15 mois', label: '470 h de formation' },
            { value: '15 max', label: 'Participants par classe' },
            { value: '2 / an', label: "Sessions d'examen" },
            { value: 'RNCP 37682', label: 'Certification' },
            { value: '6 930 €', label: 'Tarif moyen · pris en charge OPCO' },
        ],
    },
} satisfies Record<string, Brochure>;

export type BrochureKey = keyof typeof brochures;
