import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, MessageCircle, ArrowRight, Newspaper } from 'lucide-react';
import { newsArticles } from '../data/newsData';

export default function Newsletters() {
    return (
        <>
            <Helmet>
                <title>Actualités & Newsletters | Meta DX School</title>
                <meta name="description" content="Découvrez les actualités du centre et nos dernières newsletters." />
            </Helmet>

            <style>{`
                .news-page {
                    background-color: #f8fafc;
                    color: #1f2937;
                    min-height: 100vh;
                    padding-bottom: 6rem;
                    font-family: var(--font-base, 'Inter', sans-serif);
                }

                .news-hero {
                    background: linear-gradient(135deg, #1c1e4c 0%, #4a2166 100%);
                    padding: 8rem 2rem 6rem;
                    text-align: center;
                    color: white;
                    position: relative;
                    overflow: hidden;
                }
                
                .news-hero::before {
                    content: '';
                    position: absolute;
                    top: -50%; left: -10%;
                    width: 500px; height: 500px;
                    background: radial-gradient(circle, rgba(239, 154, 55, 0.15) 0%, transparent 60%);
                    border-radius: 50%;
                }

                .news-hero h1 {
                    font-size: 3.5rem;
                    font-weight: 900;
                    margin-bottom: 1rem;
                    position: relative;
                    z-index: 2;
                }
                .news-hero p {
                    font-size: 1.25rem;
                    opacity: 0.9;
                    max-width: 600px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .news-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 2.5rem;
                    max-width: 1250px;
                    margin: -4rem auto 0;
                    padding: 0 2rem;
                    position: relative;
                    z-index: 10;
                }

                .news-card {
                    background: white;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.06);
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s;
                }
                .news-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.12);
                }

                /* Typography-led dynamic cover images */
                .news-card-cover {
                    height: 180px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    color: rgba(255,255,255,0.2);
                }
                
                .cover-icon {
                    position: absolute;
                    width: 120%;
                    height: 120%;
                    transform: rotate(-15deg);
                    opacity: 0.1;
                }

                /* Gradient Variations */
                .news-card:nth-child(4n+1) .news-card-cover { background: linear-gradient(135deg, #1c1e4c 0%, #4a2364 100%); }
                .news-card:nth-child(4n+2) .news-card-cover { background: linear-gradient(135deg, #ef9a37 0%, #e25865 100%); }
                .news-card:nth-child(4n+3) .news-card-cover { background: linear-gradient(135deg, #5bb4f8 0%, #2f69d4 100%); }
                .news-card:nth-child(4n+4) .news-card-cover { background: linear-gradient(135deg, #e43a9f 0%, #7623a8 100%); }

                .news-card-content {
                    padding: 2.5rem 2rem;
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                }

                .news-meta {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    font-size: 0.85rem;
                    color: #64748b;
                    margin-bottom: 1.5rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                }

                .news-title {
                    font-size: 1.4rem;
                    font-weight: 800;
                    color: #0f172a;
                    margin-bottom: 2rem;
                    line-height: 1.4;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .news-link {
                    margin-top: auto;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 800;
                    color: #ef9a37;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-size: 0.95rem;
                    transition: gap 0.2s, color 0.2s;
                }
                .news-card:nth-child(4n+1) .news-link { color: #4a2364; }
                .news-card:nth-child(4n+3) .news-link { color: #2f69d4; }
                
                .news-link:hover {
                    gap: 0.8rem;
                }
            `}</style>

            <div className="news-page">
                <header className="news-hero">
                    <h1>DÉCOUVREZ LES ACTUALITÉS DU CENTRE</h1>
                    <p>Restez informé(e) des dernières nouveautés, événements et articles de fond de Meta DX School.</p>
                </header>

                <div className="news-grid">
                    {newsArticles.map((item) => (
                        <article key={item.id} className="news-card">
                            <div className="news-card-cover">
                                <Newspaper className="cover-icon" />
                            </div>
                            <div className="news-card-content">
                                <div className="news-meta">
                                    <span className="meta-item">
                                        <Calendar size={16} />
                                        {item.date}
                                    </span>
                                    <span className="meta-item">
                                        <MessageCircle size={16} />
                                        {item.comments}
                                    </span>
                                </div>
                                <h2 className="news-title">{item.title}</h2>
                                <Link to={`/ressources/newsletters/${item.id}`} className="news-link">
                                    LIRE LA SUITE <ArrowRight size={18} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
}
