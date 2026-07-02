import { useState, useEffect } from 'react';
import logoSchool from '../../assets/metadxschool.png';
import logoConseil from '../../assets/methadxconseil.png';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, User, Send, Menu, X, ChevronRight } from 'lucide-react';
import '../../styles/Navbar.css';

interface NavItem {
    label: string;
    path?: string;
    hasDropdown?: boolean;
    dropdownItems?: NavItem[];
    hasSubmenu?: boolean;
    subItems?: NavItem[];
}

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            setExpandedItems({});
        }
    };
    
    const closeMenu = () => {
        setIsMenuOpen(false);
        setExpandedItems({});
    };

    const toggleExpand = (itemKey: string, e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setExpandedItems(prev => ({
            ...prev,
            [itemKey]: !prev[itemKey]
        }));
    };

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    // Close mobile menu if location changes
    useEffect(() => {
        closeMenu();
    }, [location.pathname]);

    // Define types for better organization (implicit here)
    const navItems = [
        { label: 'ACCUEIL', path: '/', isRed: true },
        {
            label: 'CFA',
            path: '/cfa',
            hasDropdown: true,
            dropdownItems: [
                {
                    label: 'FORMATIONS',
                    path: '#',
                    hasSubmenu: true,
                    subItems: [
                        {
                            label: 'BAC',
                            path: '/cfa/formations/bac',
                            hasSubmenu: true,
                            subItems: [
                                { label: 'TP-CRCD', path: '/cfa/formation/tp-crcd' },
                                {
                                    label: 'TP-AMUM',
                                    path: '/cfa/formation/tp-amum',
                                    hasSubmenu: true,
                                    subItems: [
                                        { label: 'TP-AMUM OPT RR', path: '/cfa/formation/tp-amum-opt-rr' }
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'BAC +2',
                            path: '/cfa/formations/bac-2',
                            hasSubmenu: true,
                            subItems: [
                                { label: 'TP-RPMS', path: '/cfa/formation/tp-rpms' },
                                { label: 'TP-NTC', path: '/cfa/formation/tp-ntc' },
                                { label: 'TP-MUM', path: '/cfa/formation/tp-mum' }
                            ]
                        },
                        {
                            label: 'BAC +3',
                            path: '/cfa/formations/bac-3',
                            hasSubmenu: true,
                            subItems: [
                                { label: 'TP-REM', path: '/cfa/formation/tp-rem' },
                                { label: 'B-RDA', path: '/cfa/formation/b-rda' }
                            ]
                        },
                        {
                            label: 'BAC +5',
                            path: '/cfa/formations/bac-5',
                            hasSubmenu: true,
                            subItems: [
                                { label: 'TP-MDEC', path: '/cfa/formation/tp-mdec' }
                            ]
                        }
                    ]
                },
                { label: 'INDICATEURS DE RÉSULTATS', path: '/cfa/indicateurs' },
            ]
        },
        {
            label: 'CONSEILS & FORMATIONS',
            path: '/conseils-formations',
            hasDropdown: true,
            dropdownItems: [
                {
                    label: 'FORMATIONS',
                    path: '/conseils-formations/formations',
                    hasSubmenu: true,
                    subItems: [
                        {
                            label: 'CATALOGUE',
                            path: '#', // No direct link usually for parent category
                            hasSubmenu: true,
                            subItems: [
                                { label: 'NUMÉRIQUE / INFORMATIQUE / BUREAUTIQUE', path: '/conseils-formations/catalogue/numerique' },
                                { label: 'COMMUNICATION / MARKETING', path: '/conseils-formations/catalogue/communication' },
                                { label: 'COMMERCE / VENTE / RELATION CLIENT', path: '/conseils-formations/catalogue/commerce' },
                                { label: 'MANAGEMENT-LEADERSHIP', path: '/conseils-formations/catalogue/management' },
                                { label: 'SANTÉ ET SÉCURITÉ AU TRAVAIL', path: '/conseils-formations/catalogue/sante-securite' },
                                { label: 'ALIMENTAIRE / RESTAURATION', path: '/forma-secu/alimentaire' },
                            ]
                        },
                        { label: 'POEI', path: '/conseils-formations/poei' },
                        { label: 'VAE', path: '/conseils-formations/vae' },
                        { label: 'BILAN DE COMPÉTENCES', path: '/conseils-formations/bilan-competences' },
                    ]
                },
                { label: 'CONSEILS RH & STRAT', path: '/conseils-formations/rh-strategie' },
            ]
        },
        {
            label: '4.A FORMA SECU',
            path: '/forma-secu',
            hasDropdown: true,
            dropdownItems: [
                {
                    label: 'CATALOGUE DE FORMATION',
                    path: '#',
                    hasSubmenu: true,
                    subItems: [
                        { label: 'SÉCURITÉ DES BIENS ET DES PERSONNES', path: '/forma-secu/securite' }
                    ]
                }
            ]
        },
        {
            label: 'RESSOURCES',
            path: '/ressources',
            hasDropdown: true,
            dropdownItems: [
                { label: 'ÉVÈNEMENTS', path: '/ressources/evenements' },
                { label: 'NEWSLETTERS', path: '/ressources/newsletters' },
                { label: 'LA MOBILITÉ', path: '/ressources/mobilite' },
                { label: 'HANDICAP', path: '/ressources/handicap-engagement' },
                { label: 'FINANCEMENTS HANDICAP', path: '/ressources/financements-handicap' },
                { label: 'L’ÉGALITÉ ET L’INCLUSION', path: '/ressources/egalite-inclusion' },
            ]
        },
        {
            label: 'FINANCEMENTS',
            path: '/financements',
            hasDropdown: true,
            dropdownItems: [
                { label: 'ALTERNANT / FUTUR ALTERNANT', path: '/financements/alternant' },
                { label: 'SALARIÉ', path: '/financements/salarie' },
                { label: 'DEMANDEUR D’EMPLOI', path: '/financements/demandeur-emploi' },
                { label: 'INDÉPENDANT / DIRIGEANT / TRAVAILLEUR NON SALARIÉ', path: '/financements/independant' },
                { label: 'TRAVAILLEUR DE LA FONCTION PUBLIQUE', path: '/financements/fonction-publique' },
                { label: 'AIDE AU LOGEMENT', path: '/ressources/logement' },
            ]
        },
        {
            label: 'CONTACT',
            path: '/contact',
            hasDropdown: true,
            dropdownItems: [
                { label: 'CANDIDAT : PROCESS DE CANDIDATURE', path: '/contact/candidat' },
                { label: 'ENTREPRISES : RECRUTEZ AVEC META', path: '/contact/entreprises' },
            ]
        },
    ];

    const renderSubItems = (items: NavItem[], parentKey: string, depth: number = 1) => {
        return (
            <ul className={`dropdown-submenu ${expandedItems[parentKey] ? 'mobile-expanded' : ''}`}>
                {items.map((subItem) => {
                    const itemKey = `${parentKey} > ${subItem.label}`;
                    const hasSub = subItem.hasSubmenu && subItem.subItems && subItem.subItems.length > 0;
                    const isExpanded = !!expandedItems[itemKey];

                    return (
                        <li key={subItem.label} className={`${hasSub ? "dropdown-submenu-container" : ""} ${isExpanded ? 'expanded' : ''}`}>
                            <div className={`menu-item-row depth-${depth}`}>
                                <Link 
                                    to={subItem.path || '#'} 
                                    className="dropdown-item"
                                    onClick={(e) => {
                                        if (!subItem.path || subItem.path === '#') {
                                            toggleExpand(itemKey, e);
                                        } else {
                                            closeMenu();
                                        }
                                    }}
                                >
                                    {subItem.label}
                                    {hasSub && <ChevronRight size={16} className="desktop-only-chevron" />}
                                </Link>
                                {hasSub && (
                                    <button 
                                        type="button" 
                                        className="submenu-toggle-btn"
                                        onClick={(e) => toggleExpand(itemKey, e)}
                                        aria-label="Toggle submenu"
                                    >
                                        <ChevronRight size={16} className={`submenu-chevron ${isExpanded ? 'rotate-90' : ''}`} />
                                    </button>
                                )}
                            </div>
                            {hasSub && subItem.subItems && renderSubItems(subItem.subItems, itemKey, depth + 1)}
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <header className="header">
            {/* TOP BAR */}
            <div className="top-bar">
                <div className="top-bar-content">
                    <a href="https://metadxs.ymag.cloud/" target="_blank" rel="noopener noreferrer">
                        <User size={16} />
                        MON ESPACE
                    </a>
                    <span className="top-bar-separator"></span>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiUevsr0igGJRS0HNFzuPYQQc-VyR32_MPLrM3VjTp_shPSQ/viewform" target="_blank" rel="noopener noreferrer" className="highlight-link">
                        <Send size={16} />
                        CANDIDATER
                    </a>
                </div>
            </div>

            <div className="header-container">
                {/* LOGO SECTION */}
                <div className="logo-section">
                    {/* First Logo */}
                    <Link to="/" className="logo-group" onClick={closeMenu}>
                        <img src={logoSchool} alt="META DX SCHOOL" className="logo-image-school" />
                    </Link>

                    <div className="logo-separator"></div>

                    {/* Second Logo */}
                    <Link to="/conseils-formations" className="logo-group" onClick={closeMenu}>
                        <img src={logoConseil} alt="METADXS CONSEILS & FORMATIONS" className="logo-image-conseil" />
                    </Link>
                </div>

                {/* MOBILE MENU TOGGLE */}
                <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* NAVIGATION */}
                <nav className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-menu">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            const itemKey = item.label;
                            const hasDrop = item.hasDropdown && item.dropdownItems && item.dropdownItems.length > 0;
                            const isExpanded = !!expandedItems[itemKey];

                            return (
                                <li key={item.label} className={`nav-item-container ${isExpanded ? 'expanded' : ''}`}>
                                    <div className="menu-item-row depth-0">
                                        <Link
                                            to={item.path || '#'}
                                            className={`nav-item ${isActive ? 'active' : ''}`}
                                            style={item.isRed && !isActive ? { color: '#ef4444' } : {}}
                                            onClick={(e) => {
                                                if (!item.path || item.path === '#') {
                                                    toggleExpand(itemKey, e);
                                                } else {
                                                    closeMenu();
                                                }
                                            }}
                                        >
                                            {item.label}
                                            {hasDrop && <ChevronDown className="nav-icon desktop-only-chevron" />}
                                        </Link>

                                        {hasDrop && (
                                            <button
                                                type="button"
                                                className="submenu-toggle-btn"
                                                onClick={(e) => toggleExpand(itemKey, e)}
                                                aria-label="Toggle dropdown"
                                            >
                                                <ChevronDown size={16} className={`submenu-chevron ${isExpanded ? 'rotate-180' : ''}`} />
                                            </button>
                                        )}
                                    </div>

                                    {/* DROPDOWN MENU */}
                                    {hasDrop && item.dropdownItems && (
                                        <ul className={`dropdown-menu ${isExpanded ? 'mobile-expanded' : ''}`}>
                                            {item.dropdownItems.map((subItem) => {
                                                const subKey = `${itemKey} > ${subItem.label}`;
                                                const hasSub = subItem.hasSubmenu && subItem.subItems && subItem.subItems.length > 0;
                                                const isSubExpanded = !!expandedItems[subKey];

                                                return (
                                                    <li key={subItem.label} className={`${hasSub ? "dropdown-submenu-container" : ""} ${isSubExpanded ? 'expanded' : ''}`}>
                                                        <div className="menu-item-row depth-1">
                                                            <Link 
                                                                to={subItem.path || '#'} 
                                                                className="dropdown-item"
                                                                onClick={(e) => {
                                                                    if (!subItem.path || subItem.path === '#') {
                                                                        toggleExpand(subKey, e);
                                                                    } else {
                                                                        closeMenu();
                                                                    }
                                                                }}
                                                            >
                                                                {subItem.label}
                                                                {hasSub && <ChevronRight size={16} className="desktop-only-chevron" />}
                                                            </Link>
                                                            {hasSub && (
                                                                <button
                                                                    type="button"
                                                                    className="submenu-toggle-btn"
                                                                    onClick={(e) => toggleExpand(subKey, e)}
                                                                    aria-label="Toggle submenu"
                                                                >
                                                                    <ChevronRight size={16} className={`submenu-chevron ${isSubExpanded ? 'rotate-90' : ''}`} />
                                                                </button>
                                                            )}
                                                        </div>
                                                        {/* Recursive Call for Level 2 & 3 */}
                                                        {hasSub && subItem.subItems && renderSubItems(subItem.subItems, subKey, 2)}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
