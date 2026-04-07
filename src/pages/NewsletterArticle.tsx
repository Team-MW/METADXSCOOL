import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, MessageCircle, ArrowLeft, Newspaper } from 'lucide-react';
import { newsArticles } from '../data/newsData';

export default function NewsletterArticle() {
    const { slug } = useParams();
    
    // Find the specific article
    const article = newsArticles.find(item => item.id === slug);

    if (!article) {
        return (
            <div style={{ padding: '8rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
                <h2>Article introuvable</h2>
                <Link to="/ressources/newsletters" style={{ color: '#ef9a37', fontWeight: 'bold' }}>Retour aux actualités</Link>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{article.title} | Meta DX School</title>
                <meta name="description" content={article.title} />
            </Helmet>

            <style>{`
                .article-page {
                    background-color: #f8fafc;
                    color: #1f2937;
                    min-height: 100vh;
                    padding-bottom: 6rem;
                    font-family: var(--font-base, 'Inter', sans-serif);
                }

                .article-hero {
                    background: linear-gradient(135deg, #1c1e4c 0%, #4a2166 100%);
                    padding: 8rem 2rem 4rem;
                    color: white;
                    position: relative;
                    overflow: hidden;
                }

                .article-hero-inner {
                    max-width: 900px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .article-hero-meta {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    font-size: 0.95rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-bottom: 2rem;
                    opacity: 0.9;
                }
                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .article-hero h1 {
                    font-size: 3rem;
                    font-weight: 900;
                    line-height: 1.2;
                    margin-bottom: 2rem;
                }

                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: white;
                    text-decoration: none;
                    background: rgba(255,255,255,0.1);
                    padding: 0.5rem 1.2rem;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 0.9rem;
                    transition: background 0.2s;
                }
                .back-link:hover {
                    background: rgba(255,255,255,0.2);
                }

                .article-content-wrapper {
                    max-width: 900px;
                    margin: -2rem auto 0;
                    padding: 0 1rem;
                    position: relative;
                    z-index: 10;
                }

                .article-content {
                    background: white;
                    border-radius: 16px;
                    padding: 4rem;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.08);
                }
                @media(max-width: 768px) {
                    .article-content { padding: 2rem; }
                    .article-hero h1 { font-size: 2rem; }
                }

                .article-body {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: #374151;
                }

                .article-body h3 {
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: #111827;
                    margin: 3rem 0 1rem;
                    position: relative;
                    display: inline-block;
                }
                
                .article-body h3::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 40px;
                    height: 3px;
                    background: #ef9a37;
                    border-radius: 2px;
                }

                .article-body h3:first-child {
                    margin-top: 0;
                }

                .article-body p {
                    margin-bottom: 1.5rem;
                }

                .article-body ul {
                    margin: 1.5rem 0 2.5rem 2rem;
                    padding: 0;
                }

                .article-body li {
                    margin-bottom: 0.5rem;
                    position: relative;
                }

                .intro-text {
                    font-size: 1.25rem;
                    line-height: 1.7;
                    color: #1e293b;
                }

                .coming-soon-box {
                    background: #f1f5f9;
                    border-radius: 12px;
                    padding: 4rem;
                    text-align: center;
                    border: 2px dashed #cbd5e1;
                }
                .coming-soon-box h3 { color: #64748b; margin-top: 1rem; }
                .coming-soon-box svg { color: #94a3b8; }
            `}</style>

            <div className="article-page">
                <header className="article-hero">
                    <div className="article-hero-inner">
                        <Link to="/ressources/newsletters" className="back-link">
                            <ArrowLeft size={16} /> REVENIR AUX ACTUALITÉS
                        </Link>
                        
                        <div style={{ marginTop: '2rem' }}>
                            <div className="article-hero-meta">
                                <span className="meta-item"><Calendar size={18} /> {article.date}</span>
                                <span className="meta-item"><MessageCircle size={18} /> {article.comments}</span>
                            </div>
                            <h1>{article.title}</h1>
                        </div>
                    </div>
                </header>

                <div className="article-content-wrapper">
                    <main className="article-content">
                        {article.content ? (
                            article.content
                        ) : (
                            <div className="coming-soon-box article-body">
                                <Newspaper size={64} style={{ margin: '0 auto' }} />
                                <h3 style={{ margin: '2rem 0 0' }}>En cours de rédaction...</h3>
                                <p style={{ marginTop: '1rem', color: '#64748b' }}>
                                    Le contenu complet de cette actualité sera publié très prochainement.
                                </p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </>
    );
}
