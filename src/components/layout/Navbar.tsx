import logoSchool from '../../assets/metadxschool.png';
import logoConseil from '../../assets/methadxconseil.png';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import '../../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation();

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
                { label: 'FORMATIONS', path: '/conseils-formations/formations' },
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

    return (
        <header className="header">
            <div className="header-container">
                {/* LOGO SECTION */}
                <div className="logo-section">
                    {/* First Logo */}
                    <Link to="/" className="logo-group">
                        <img src={logoSchool} alt="META DX SCHOOL" className="logo-image-school" />
                    </Link>

                    <div className="logo-separator"></div>

                    {/* Second Logo */}
                    <Link to="/conseils-formations" className="logo-group">
                        <img src={logoConseil} alt="METADXS CONSEILS & FORMATIONS" className="logo-image-conseil" />
                    </Link>
                </div>

                {/* NAVIGATION */}
                <nav>
                    <ul className="nav-menu">
                        {navItems.map((item) => {
                            // Check if the current path matches the item path or any of its dropdown items
                            const isActive = location.pathname === item.path ||
                                (item.dropdownItems && item.dropdownItems.some(subItem => location.pathname === subItem.path));

                            return (
                                <li key={item.label} className="nav-item-container">
                                    <Link
                                        to={item.path}
                                        className={`nav-item ${isActive ? 'active' : ''}`}
                                        // Removed manual style override for isRed to let CSS handle active state priority
                                        style={item.isRed && !isActive ? { color: '#ef4444' } : {}}
                                    >
                                        {item.label}
                                        {item.hasDropdown && <ChevronDown className="nav-icon" />}
                                    </Link>

                                    {/* DROPDOWN MENU */}
                                    {item.dropdownItems && (
                                        <ul className="dropdown-menu">
                                            {item.dropdownItems.map((subItem) => (
                                                <li key={subItem.label}>
                                                    <Link to={subItem.path} className="dropdown-item">
                                                        {subItem.label}
                                                    </Link>
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
