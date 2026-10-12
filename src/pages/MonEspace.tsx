import { Helmet } from 'react-helmet-async';
import { User, GraduationCap, Building2, ChevronRight, Globe, Accessibility } from 'lucide-react';
import logoSchool from '../assets/metadxschool.png';

const YPAREO_LOGIN =
    'https://identity.ypareo-neo.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Darya%26redirect_uri%3Dhttps%253A%252F%252Fmetadxs.ypareo-neo.com%252Fauth-callback%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520user%2520offline_access%26state%3Dad71f437cc65454bb835b29393244b33%26code_challenge%3DAj4mu8JAMwwJF8sC3VI3-pFCIIpYQhMUmxhHFd2MWNU%26code_challenge_method%3DS256';

export default function MonEspace() {
    return (
        <div className="espace-page">
            <Helmet>
                <title>Mon Espace Extranet | Meta DX School</title>
                <meta name="description" content="Accédez à votre espace extranet Meta DX School. Sélectionnez votre profil pour vous connecter." />
            </Helmet>

            <style>{`
                .espace-page {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem 1rem;
                    background:
                        radial-gradient(900px 420px at 50% -10%, rgba(106, 27, 154, 0.08), transparent 60%),
                        #f4f5f8;
                    font-family: var(--font-base, 'Inter', sans-serif);
                    color: #1e293b;
                }
                .espace-card {
                    width: 100%;
                    max-width: 560px;
                    background: #fff;
                    border-radius: 18px;
                    overflow: hidden;
                    box-shadow: 0 18px 50px rgba(74, 28, 93, 0.08);
                    border: 1px solid rgba(106, 27, 154, 0.08);
                }
                .espace-head {
                    padding: 2.75rem 2rem 1.75rem;
                    text-align: center;
                    background: linear-gradient(180deg, #fbf8fd 0%, #ffffff 100%);
                }
                .espace-logo-img {
                    height: 78px;
                    width: auto;
                    margin: 0 auto 1.75rem;
                    object-fit: contain;
                }
                .espace-title {
                    font-size: 1.45rem;
                    font-weight: 800;
                    letter-spacing: -0.02em;
                    color: #1a1230;
                    margin-bottom: 0.4rem;
                }
                .espace-subtitle {
                    font-size: 1rem;
                    color: #6b7280;
                    line-height: 1.45;
                }
                .profiles-list {
                    border-top: 1px solid #eef0f4;
                }
                .profile-card {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.15rem 1.5rem;
                    background: #fff;
                    text-decoration: none;
                    color: inherit;
                    border-bottom: 1px solid #eef0f4;
                    transition: background 0.2s ease;
                }
                .profile-card:hover {
                    background: #faf6fc;
                }
                .profile-icon {
                    width: 28px;
                    height: 28px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .profile-card.is-apprenant .profile-icon { color: #1aa36a; }
                .profile-card.is-formateur .profile-icon { color: #e08a2c; }
                .profile-card.is-client .profile-icon { color: #8b93a7; }
                .profile-content { flex: 1; min-width: 0; }
                .profile-name {
                    font-size: 1rem;
                    font-weight: 700;
                    color: #1f2430;
                    line-height: 1.3;
                }
                .profile-desc {
                    margin-top: 0.1rem;
                    font-size: 0.9rem;
                    color: #8b93a7;
                }
                .profile-arrow {
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    background: #f3f4f8;
                    color: #9aa3b5;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    transition: background 0.2s ease, color 0.2s ease;
                }
                .profile-card:hover .profile-arrow {
                    background: #6a1b9a;
                    color: #fff;
                }
                .espace-footer {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1.25rem;
                    padding: 1.35rem 1.5rem 1.6rem;
                    background: #f7f8fb;
                    color: #6b7280;
                    font-size: 0.95rem;
                }
                .lang-select {
                    display: flex;
                    align-items: center;
                    gap: 0.45rem;
                    font-weight: 500;
                }
                .access-icon {
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    background: #6a1b9a;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 10px rgba(106, 27, 154, 0.28);
                }
                @media (max-width: 640px) {
                    .espace-head { padding: 2rem 1.25rem 1.4rem; }
                    .espace-logo-img { height: 64px; }
                    .espace-title { font-size: 1.25rem; }
                    .profile-card { padding: 1rem 1.1rem; }
                    .espace-footer { font-size: 0.85rem; }
                }
            `}</style>

            <div className="espace-card">
                <div className="espace-head">
                    <img src={logoSchool} alt="Meta DX School" className="espace-logo-img" />
                    <h1 className="espace-title">Accès à l'Extranet</h1>
                    <p className="espace-subtitle">Sélectionnez votre profil pour accéder à votre espace</p>
                </div>

                <div className="profiles-list">
                    <a href={YPAREO_LOGIN} className="profile-card is-apprenant">
                        <div className="profile-icon">
                            <User size={26} strokeWidth={2} />
                        </div>
                        <div className="profile-content">
                            <div className="profile-name">Je suis apprenant</div>
                            <div className="profile-desc">Accédez à vos formations et documents</div>
                        </div>
                        <span className="profile-arrow">
                            <ChevronRight size={18} />
                        </span>
                    </a>

                    <a href={YPAREO_LOGIN} className="profile-card is-formateur">
                        <div className="profile-icon">
                            <GraduationCap size={26} strokeWidth={2} />
                        </div>
                        <div className="profile-content">
                            <div className="profile-name">Je suis formateur</div>
                            <div className="profile-desc">Gérez vos sessions et participants</div>
                        </div>
                        <span className="profile-arrow">
                            <ChevronRight size={18} />
                        </span>
                    </a>

                    <a
                        href="#entreprises"
                        className="profile-card is-client"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.reload();
                        }}
                    >
                        <div className="profile-icon">
                            <Building2 size={26} strokeWidth={2} />
                        </div>
                        <div className="profile-content">
                            <div className="profile-name">Je suis client ou sous-traitant</div>
                            <div className="profile-desc">Suivez les formations de vos équipes</div>
                        </div>
                        <span className="profile-arrow">
                            <ChevronRight size={18} />
                        </span>
                    </a>
                </div>

                <div className="espace-footer">
                    <div className="lang-select">
                        <Globe size={16} />
                        Langue sélectionnée 🇫🇷
                    </div>
                    <div className="access-icon" aria-hidden="true">
                        <Accessibility size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
}
