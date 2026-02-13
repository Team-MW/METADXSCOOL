import logoSchool from '../../assets/metadxschool.png';
import logoConseil from '../../assets/methadxconseil.png';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import '../../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation();

    const navItems = [
        { label: 'ACCUEIL', path: '/', isRed: true },
        { label: 'CFA', path: '/cfa', hasDropdown: true },
        { label: 'CONSEILS & FORMATIONS', path: '/conseils-formations', hasDropdown: true },
        { label: '4.A FORMA SECU', path: '/forma-secu', hasDropdown: true },
        { label: 'RESSOURCES', path: '/ressources', hasDropdown: true },
        { label: 'FINANCEMENTS', path: '/financements', hasDropdown: true },
        { label: 'CONTACT', path: '/contact', hasDropdown: true },
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
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={item.label}>
                                    <Link
                                        to={item.path}
                                        className={`nav-item ${isActive ? 'active' : ''}`}
                                        style={item.isRed ? { color: '#ef4444' } : {}}
                                    >
                                        {item.label}
                                        {item.hasDropdown && <ChevronDown className="nav-icon" />}
                                    </Link>
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
