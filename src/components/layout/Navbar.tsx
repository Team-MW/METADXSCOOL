import { useState } from 'react';
import logoSchool from '../../assets/metadxschool.png';
import logoConseil from '../../assets/methadxconseil.png';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, User, Send, Menu, X, ChevronRight } from 'lucide-react';
import '../../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Define types for better organization (implicit here)
    const navItems = [
        { label: 'ACCUEIL', path: '/', isRed: true },
        {
            label: 'CFA',
            path: '/cfa',
            hasDropdown: true,
            dropdownItems: [
                { label: 'FORMATIONS', path: '/cfa/formations' },
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
                            ]
                        },
                        { label: 'POEI', path: '/conseils-formations/poei' },
                        { label: 'VAE', path: '/conseils-formations/vae' },
                        { label: 'BILAN DE COMPÉTENCES', path: '/conseils-formations/bilan-competences' },
                    ]
                },
                { label: 'CONSEILS RH & STRAT', path: '/conseils-formations/rh-strat' },
            ]
        },
        { label: '4.A FORMA SECU', path: '/forma-secu', hasDropdown: true },
        {
            label: 'RESSOURCES',
            path: '/ressources',
            hasDropdown: true,
            dropdownItems: [
                { label: 'ÉVÈNEMENTS', path: '/ressources/evenements' },
                { label: 'NEWSLETTERS', path: '/ressources/newsletters' },
                { label: 'LA MOBILITÉ', path: '/ressources/mobilite' },
                { label: 'L’HANDICAP', path: '/ressources/handicap' },
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
                { label: 'TRAVAILLEUR EN SITUATION DE HANDICAP', path: '/financements/handicap' },
                { label: 'AIDE AU LOGEMENT', path: '/financements/aide-logement' },
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



    const renderSubItems = (items: any[]) => {
        return (
            <ul className="dropdown-submenu">
                {items.map((subItem) => (
                    <li key={subItem.label} className={subItem.hasSubmenu ? "dropdown-submenu-container" : ""}>
                        <Link to={subItem.path || '#'} className="dropdown-item">
                            {subItem.label}
                            {subItem.hasSubmenu && <ChevronRight size={16} />}
                        </Link>
                        {subItem.hasSubmenu && subItem.subItems && renderSubItems(subItem.subItems)}
                    </li>
                ))}
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
                    <a href="https://tally.so/r/waaXj2" target="_blank" rel="noopener noreferrer" className="highlight-link">
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
                            // Check isActive logic simplified for top level
                            const isActive = location.pathname === item.path;

                            return (
                                <li key={item.label} className="nav-item-container">
                                    <Link
                                        to={item.path}
                                        className={`nav-item ${isActive ? 'active' : ''}`}
                                        style={item.isRed && !isActive ? { color: '#ef4444' } : {}}
                                    >
                                        {item.label}
                                        {item.hasDropdown && <ChevronDown className="nav-icon" />}
                                    </Link>

                                    {/* DROPDOWN MENU */}
                                    {item.dropdownItems && (
                                        <ul className="dropdown-menu">
                                            {item.dropdownItems.map((subItem) => (
                                                <li key={subItem.label} className={subItem.hasSubmenu ? "dropdown-submenu-container" : ""}>
                                                    <Link to={subItem.path} className="dropdown-item">
                                                        {subItem.label}
                                                        {subItem.hasSubmenu && <ChevronRight size={16} />}
                                                    </Link>
                                                    {/* Recursive Call for Level 2 & 3 */}
                                                    {subItem.hasSubmenu && subItem.subItems && renderSubItems(subItem.subItems)}
                                                </li>
                                            ))}
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
