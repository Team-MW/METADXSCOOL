import { Helmet } from 'react-helmet-async';
import { User, GraduationCap, Building2, ChevronRight, Globe, Accessibility } from 'lucide-react';
import logoSchool from '../assets/metadxschool.png';

export default function MonEspace() {
    return (
        <div className="espace-page">
            <Helmet>
                <title>Mon Espace Extranet | Meta DX School</title>
                <meta name="description" content="Accédez à votre espace extranet Meta DX School. Sélectionnez votre profil pour vous connecter." />
            </Helmet>

            <style>{`
                .espace-page {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: #1e293b;
                    position: relative;
                }
                .espace-container {
                    width: 100%;
                    max-width: 600px;
                    background: white;
                    border-radius: 20px;
                    padding: 2.5rem 3rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.04);
                    text-align: center;
                    border: 1px solid #f1f5f9;
                    margin: 1rem;
                }
                .espace-logo-placeholder {
                    margin-bottom: 1.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .espace-logo-img {
                    max-height: 50px;
                    object-fit: contain;
                }
                .espace-title {
                    font-size: 1.6rem;
                    font-weight: 800;
                    margin-bottom: 0.25rem;
                    color: #0f172a;
                }
                .espace-subtitle {
                    font-size: 1rem;
                    color: #64748b;
                    margin-bottom: 1.5rem;
                }
                .profile-card {
                    display: flex;
                    align-items: center;
                    background: white;
                    border: 2px solid #f1f5f9;
                    border-radius: 12px;
                    padding: 1rem 1.25rem;
                    margin-bottom: 0.75rem;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    text-decoration: none;
                    color: inherit;
                    text-align: left;
                }
                .profile-card:hover {
                    border-color: #e43a9f;
                    box-shadow: 0 5px 15px rgba(228, 58, 159, 0.08);
                    transform: translateY(-2px);
                }
                .profile-icon {
                    width: 44px;
                    height: 44px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 1.25rem;
                    flex-shrink: 0;
                }
                /* Apprenant */
                .profile-card:nth-child(1) .profile-icon { 
                    color: #10b981; 
                    background: #ecfdf5; 
                }
                .profile-card:nth-child(1):hover .profile-icon {
                    background: #10b981;
                    color: white;
                }
                /* Formateur */
                .profile-card:nth-child(2) .profile-icon { 
                    color: #f59e0b; 
                    background: #fffbeb; 
                }
                .profile-card:nth-child(2):hover .profile-icon {
                    background: #f59e0b;
                    color: white;
                }
                /* Client */
                .profile-card:nth-child(3) .profile-icon { 
                    color: #64748b; 
                    background: #f1f5f9; 
                }
                .profile-card:nth-child(3):hover .profile-icon {
                    background: #64748b;
                    color: white;
                }
                
                .profile-content {
                    flex: 1;
                }
                .profile-name {
                    font-size: 1.05rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 0.15rem;
                }
                .profile-desc {
                    font-size: 0.85rem;
                    color: #64748b;
                }
                .profile-arrow {
                    color: #cbd5e1;
                    transition: transform 0.3s ease, color 0.3s ease;
                }
                .profile-card:hover .profile-arrow {
                    transform: translateX(4px);
                    color: #e43a9f;
                }
                .espace-footer {
                    margin-top: 1.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1.5rem;
                    color: #64748b;
                    font-size: 0.85rem;
                }
                .lang-select {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 500;
                }
                .access-icon {
                    background: #3b82f6;
                    color: white;
                    border-radius: 50%;
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 3px 8px rgba(59, 130, 246, 0.3);
                }
                @media (max-width: 768px) {
                    .espace-container { padding: 2rem 1.25rem; }
                    .profile-card { padding: 1rem; flex-direction: column; text-align: center; }
                    .profile-icon { margin-right: 0; margin-bottom: 0.75rem; }
                    .profile-arrow { display: none; }
                }
            `}</style>

            <div className="espace-container">
                <div className="espace-logo-placeholder">
                    <img src={logoSchool} alt="Meta DX School" className="espace-logo-img" />
                </div>
                
                <h2 className="espace-title">Accès à l'Extranet</h2>
                <p className="espace-subtitle">Sélectionnez votre profil pour accéder à votre espace</p>

                <div className="profiles-list">
                    {/* Apprenant */}
                    <a href="https://identity.ypareo-neo.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Darya%26redirect_uri%3Dhttps%253A%252F%252Fmetadxs.ypareo-neo.com%252Fauth-callback%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520user%2520offline_access%26state%3Dad71f437cc65454bb835b29393244b33%26code_challenge%3DAj4mu8JAMwwJF8sC3VI3-pFCIIpYQhMUmxhHFd2MWNU%26code_challenge_method%3DS256" target="_blank" rel="noopener noreferrer" className="profile-card">
                        <div className="profile-icon">
                            <User size={22} strokeWidth={2.5} />
                        </div>
                        <div className="profile-content">
                            <div className="profile-name">Je suis apprenant</div>
                            <div className="profile-desc">Accédez à vos formations et documents</div>
                        </div>
                        <ChevronRight className="profile-arrow" size={20} />
                    </a>

                    {/* Formateur */}
                    <a href="https://identity.ypareo-neo.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Darya%26redirect_uri%3Dhttps%253A%252F%252Fmetadxs.ypareo-neo.com%252Fauth-callback%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520user%2520offline_access%26state%3Dad71f437cc65454bb835b29393244b33%26code_challenge%3DAj4mu8JAMwwJF8sC3VI3-pFCIIpYQhMUmxhHFd2MWNU%26code_challenge_method%3DS256" target="_blank" rel="noopener noreferrer" className="profile-card">
                        <div className="profile-icon">
                            <GraduationCap size={22} strokeWidth={2.5} />
                        </div>
                        <div className="profile-content">
                            <div className="profile-name">Je suis formateur</div>
                            <div className="profile-desc">Gérez vos sessions et participants</div>
                        </div>
                        <ChevronRight className="profile-arrow" size={20} />
                    </a>

                    {/* Client ou sous-traitant */}
                    <a href="#" className="profile-card" onClick={(e) => { e.preventDefault(); window.location.reload(); }}>
                        <div className="profile-icon">
                            <Building2 size={22} strokeWidth={2.5} />
                        </div>
                        <div className="profile-content">
                            <div className="profile-name">Je suis client ou sous-traitant</div>
                            <div className="profile-desc">Suivez les formations de vos équipes</div>
                        </div>
                        <ChevronRight className="profile-arrow" size={20} />
                    </a>
                </div>

                <div className="espace-footer">
                    <div className="lang-select">
                        <Globe size={16} />
                        Langue sélectionnée 🇫🇷
                    </div>
                    <div className="access-icon">
                        <Accessibility size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
}
