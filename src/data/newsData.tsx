import React from 'react';

export interface NewsArticleType {
    id: string;
    title: string;
    date: string;
    comments: string;
    content?: React.ReactNode;
}

export const newsArticles: NewsArticleType[] = [
    { 
        id: "newsletter-ete-2025", 
        title: "NEWSLETTER ÉTÉ 2025 – META DX SCHOOL", 
        date: "juillet 28, 2025", 
        comments: "Aucun commentaire",
        content: (
            <div className="article-body">
                <p className="intro-text">
                    <strong>🌞 Newsletter Été 2025 – META DX SCHOOL</strong><br /><br />
                    Bonjour à toutes et à tous,<br />
                    L’été est là, et avec lui quelques infos importantes à ne pas manquer ! Que vous soyez déjà en contrat ou en attente du début des cours, voici tout ce qu’il faut savoir 👇
                </p>

                <h3>🏫 Fermeture estivale de l’école</h3>
                <p>
                    L’établissement sera fermé du 4 août au 15 août inclus pour la pause estivale. Pendant cette période, les locaux seront inaccessibles et les équipes en congés.<br />
                    <strong>📌 Réouverture administrative prévue : lundi 19 août</strong>
                </p>

                <h3>📞 Qui contacter en cas de besoin ?</h3>
                <p>Une permanence est assurée en cas d’urgence (ex. rupture de contrat) :</p>
                <ul>
                    <li><strong>Sarah LACHEROY</strong> – Directrice du CFA : sarah.lacheroy@metadxs.com</li>
                    <li><strong>Responsable pédagogique</strong> : pedagogie.metadxs@gmail.com</li>
                    <li><strong>Louise ESCULIER</strong> – Assistante pédagogique : pedagogie.metadxs@gmail.com</li>
                </ul>

                <h3>🎓 Informations pour la rentrée</h3>
                <p>
                    <strong>Déjà en contrat ?</strong> Vous recevrez votre planning et vos accès dès la réouverture.<br />
                    <strong>Pas encore démarré·e ?</strong> Pas d'inquiétude, les formations démarreront à partir de septembre. Vous serez contacté·e pour finaliser votre inscription.
                </p>

                <h3>🆕 À la rentrée...</h3>
                <ul>
                    <li>Accueil des nouveaux alternants</li>
                    <li>Réunions d’intégration</li>
                    <li>Kit de rentrée : plateforme, emploi du temps, livret…</li>
                    <li>Accompagnement personnalisé tout au long du parcours</li>
                </ul>

                <h3>🔁 Retour sur nos JPO</h3>
                <p>
                    Merci à toutes et tous pour votre présence à nos journées portes ouvertes ! Nous avons eu le plaisir de vous faire découvrir nos formations, notre équipe pédagogique et nos ateliers, notamment l’expérience immersive en réalité virtuelle 🎮
                </p>

                <h3>🌐 Visiter notre site</h3>
                <p>
                    📲 Suivez-nous pour rester informé·e :<br />
                    <em>Instagram | LinkedIn | Facebook | TikTok</em><br /><br />
                    <strong style={{ color: '#ef9a37', fontSize: '1.2rem' }}>META DX SCHOOL – Votre avenir, notre mission 🚀</strong>
                </p>
            </div>
        )
    },
    { 
        id: "jpo-salon-etudiant", 
        title: "JPO ET SALON DE L’ÉTUDIANT !", 
        date: "février 24, 2025", 
        comments: "Aucun commentaire",
        content: (
            <div className="article-body">
                <p className="intro-text">
                    <strong>📢 JOURNÉES PORTES OUVERTES : VENEZ NOUS RENCONTRER !</strong><br /><br />
                    Vous cherchez une formation en alternance, un bilan de compétences ou une validation des acquis ? Nos Journées Portes Ouvertes sont faites pour vous !
                </p>

                <div style={{ textAlign: 'center', margin: '3rem 0' }}>
                    <img 
                        src="/salon-etudiantjpo.jpg" 
                        alt="Flyer JPO et Salon de l'Étudiant" 
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
                    />
                </div>

                <h3>📅 Dates des JPO :</h3>
                <ul>
                    <li>📍 Samedi 15 mars – 10h à 13h</li>
                    <li>📍 Samedi 19 avril – 10h à 13h</li>
                </ul>

                <h3>💡 Pourquoi venir ?</h3>
                <ul>
                    <li>✔️ Découverte de nos formations Bac+2 à Bac+5</li>
                    <li>✔️ Rencontre avec nos enseignants et étudiants</li>
                    <li>✔️ Conseils personnalisés pour votre projet professionnel</li>
                    <li>✔️ Présentation des opportunités d’alternance et des débouchés</li>
                </ul>
                <p style={{ fontWeight: 600, color: '#1c1e4c', marginTop: '1rem' }}>
                    🎯 Ne manquez pas cette occasion unique de poser vos questions et de visiter notre campus !
                </p>

                <br/><hr style={{ border: 'none', borderTop: '2px dashed #cbd5e1' }}/><br/>

                <h3>🎤 RETROUVEZ-NOUS AU SALON DE L’ÉTUDIANT !</h3>
                <p><strong>📍 Un rendez-vous incontournable pour votre avenir !</strong></p>
                <p>Nous serons présents au Salon de l’Étudiant pour vous présenter nos cursus et répondre à toutes vos interrogations sur l’alternance, les débouchés et les financements.</p>

                <h3>🔎 Pourquoi venir sur notre stand ?</h3>
                <ul>
                    <li>✅ Échangez avec nos experts et conseillers pédagogiques</li>
                    <li>✅ Découvrez nos formations certifiées RNCP</li>
                    <li>✅ Obtenez des conseils pour booster votre candidature en alternance</li>
                </ul>

                <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ef9a37', marginTop: '2rem' }}>
                    🚀 Venez nous rencontrer et construisez votre avenir avec Meta DX School !
                </p>
                <p>
                    <strong>📩 Besoin de plus d’infos ?</strong> <a href="mailto:contact@metadxs.com" style={{ color: '#2f69d4', fontWeight: 'bold' }}>Contactez-nous dès maintenant !</a>
                </p>
            </div>
        )
    },
    { 
        id: "un-grand-merci", 
        title: "UN GRAND MERCI !", 
        date: "février 5, 2025", 
        comments: "Aucun commentaire",
        content: (
            <div className="article-body">
                <p className="intro-text">
                    <strong>🎉 MERCI POUR VOTRE PRÉSENCE AU GALA META DX SCHOOL 2024 !</strong><br /><br />
                    C’est avec une immense gratitude que toute l’équipe de Meta DX School vous remercie chaleureusement pour votre présence lors de notre Gala 2024 ! ✨
                </p>

                <p>
                    Cette soirée a été un véritable succès grâce à vous : étudiants, formateurs, entreprises partenaires et amis de l’école. Votre participation a contribué à faire de cet événement un moment mémorable, riche en rencontres, en partages et en émotions.
                </p>

                <h3>💜 Un grand merci à tous ceux qui ont contribué à cette belle soirée :</h3>
                <ul>
                    <li>✔️ Nos étudiants et diplômés, qui sont au cœur de notre mission.</li>
                    <li>✔️ Nos intervenants et partenaires pour leur engagement et leur soutien.</li>
                    <li>✔️ Notre équipe pédagogique et administrative pour leur travail et leur passion.</li>
                </ul>

                <h3>📢 On se retrouve très bientôt !</h3>
                <p>
                    Ce gala marque une nouvelle étape dans l’histoire de Meta DX School, et nous avons hâte de partager encore de nombreux moments avec vous tout au long de l’année.<br /><br />
                    Encore MERCI pour votre présence et votre énergie ! 💫
                </p>
                <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ef9a37', marginTop: '2rem' }}>
                    À très vite,<br />
                    L’équipe Meta DX School
                </p>
            </div>
        )
    },
    { 
        id: "opportunites-rpms", 
        title: "LES OPPORTUNITÉS RPMS", 
        date: "janvier 22, 2025", 
        comments: "Aucun commentaire",
        content: (
            <div className="article-body">
                <p className="intro-text">
                    La formation RPMS (Responsable de Petite ou Moyenne Structure) ouvre des portes vers des métiers variés et passionnants dans la gestion et le pilotage d’entreprise. Accessible à tous, elle prépare les apprenants à devenir des leaders polyvalents, capables de relever les défis du marché actuel.
                </p>

                <h3>Quels débouchés après la formation RPMS ?</h3>
                <p>Une fois certifié(e), de nombreuses opportunités s’offrent à vous, parmi lesquelles :</p>
                <ul>
                    <li><strong>Responsable de petite ou moyenne structure :</strong> Dirigez et gérez une entreprise ou une association.</li>
                    <li><strong>Manager de service :</strong> Supervisez une équipe ou un département.</li>
                    <li><strong>Entrepreneur :</strong> Lancez votre propre projet et développez votre activité.</li>
                </ul>
                <p>Ces métiers concernent des secteurs variés, allant du commerce au secteur associatif, et garantissent une forte employabilité.</p>

                <h3>Pourquoi nous ?</h3>
                <p>Chez META DX SCHOOL, la formation RPMS s’appuie sur :</p>
                <ul>
                    <li>✔️ Des contenus concrets et adaptés au marché,</li>
                    <li>✔️ Un accompagnement personnalisé,</li>
                    <li>✔️ Un réseau professionnel solide.</li>
                </ul>

                <p style={{ marginTop: '2rem' }}>
                    Préparez-vous dès aujourd’hui à relever les défis du management et du pilotage d’entreprise. Inscrivez-vous et bâtissez votre avenir professionnel !
                </p>

                <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                    <a href="/cfa/formation/tp-rpms" style={{ display: 'inline-block', background: '#1c1e4c', color: 'white', fontWeight: 'bold', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', transition: 'background 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                        Découvrez notre formation RPMS
                    </a>
                </div>
            </div>
        )
    },
    { 
        id: "cest-la-rentree", 
        title: "C’EST LA RENTRÉE", 
        date: "août 19, 2024", 
        comments: "Aucun commentaire",
        content: (
            <div className="article-body">
                <p className="intro-text" style={{ fontSize: '1.4rem', fontWeight: 800, textAlign: 'center', margin: '2rem 0', color: '#1c1e4c' }}>
                    🎉 C’est la rentrée chez Meta DX School ! 🎉
                </p>

                <p style={{ textAlign: 'center', fontSize: '1.15rem' }}>
                    L’équipe est de retour, plus motivée que jamais pour vous accompagner dans cette nouvelle année pleine d’opportunités ! 🚀
                </p>
                <p style={{ marginTop: '2rem' }}>
                    Nous sommes disponibles pour répondre à toutes vos questions et vous guider dans votre parcours de formation. Venez nous rencontrer lors de nos informations collectives :
                </p>

                <div style={{ background: '#f1f5f9', borderLeft: '4px solid #ef9a37', padding: '2rem', borderRadius: '0 12px 12px 0', margin: '2.5rem 0' }}>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        <li style={{ marginBottom: '1rem', fontSize: '1.15rem' }}>📅 <strong>Mardi</strong> à 15h00</li>
                        <li style={{ marginBottom: '1rem', fontSize: '1.15rem' }}>📅 <strong>Jeudi</strong> à 15h00</li>
                        <li style={{ fontSize: '1.15rem' }}>📅 <strong>Samedi</strong> à 11h00 et 14h00</li>
                    </ul>
                </div>

                <h3>💥 Le grand jeu de la rentrée</h3>
                <p>
                    Et ce samedi, ne manquez pas notre grand jeu de la rentrée : <strong>Qui sera le meilleur prospecteur ? 🕵️‍♂️</strong><br /><br />
                    Une compétition excitante avec à la clé des cadeaux d’une valeur totale de <strong>300 €</strong> à gagner ! 🎁
                </p>

                <hr style={{ margin: '3rem 0', border: 'none', borderTop: '2px dotted #cbd5e1' }} />

                <h3>👋 Bienvenue à Eliore !</h3>
                <p>
                    On vous attend nombreux pour cette rentrée sous le signe de l’excellence et de la convivialité, et nous souhaitons la bienvenue à <strong>Eliore</strong>, notre nouvelle assistante pédagogique qui nous rejoint pour cette année pleine de belles surprises !
                </p>

                <p style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ef9a37', marginTop: '3rem', textAlign: 'center' }}>
                    À très bientôt chez Meta DX School ! 🙌
                </p>
            </div>
        )
    },
    { id: "job-dating-boum-burger", title: "JOB DATING – BOUM BURGER", date: "juillet 26, 2024", comments: "Aucun commentaire" },
    { 
        id: "on-vous-rappellera", 
        title: "« ON VOUS RAPPELLERA »", 
        date: "mai 22, 2024", 
        comments: "Aucun commentaire",
        content: (
            <div className="article-body">
                <p className="intro-text">
                    Nous vous invitons à un spectacle théâtral hilarant qui tourne en dérision le recrutement d’alternants, suivi d’une table ronde et d’un job dating exclusif.
                </p>

                <div style={{ background: '#f8fafc', borderLeft: '4px solid #ef9a37', padding: '1.5rem', borderRadius: '0 12px 12px 0', margin: '2rem 0' }}>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem', fontSize: '1.15rem' }}>📅 <strong>Quand ?</strong> Lundi 27 mai à 18h00</li>
                        <li style={{ fontSize: '1.15rem' }}>📍 <strong>Où ?</strong> Cabaret Le 9</li>
                    </ul>
                </div>

                <p>
                    C’est une opportunité unique de rencontrer des candidats talentueux et d’échanger avec d’autres professionnels. Inscrivez-vous maintenant en scannant le QR code ou en cliquant sur le lien !
                </p>

                <div style={{ margin: '3rem 0', textAlign: 'center' }}>
                    <a href="https://tally.so/r/waaXj2" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#1c1e4c', color: 'white', fontWeight: 'bold', padding: '1rem 2.5rem', borderRadius: '50px', textDecoration: 'none', transition: 'transform 0.2s', fontSize: '1.1rem', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                        🎟️ S'inscrire à l'événement
                    </a>
                    <p style={{ marginTop: '1.5rem', fontWeight: 800, color: '#ef9a37', fontSize: '1.2rem' }}>🕛 J-7 ! Ne tardez pas !</p>
                </div>

                <p style={{ color: '#2f69d4', fontWeight: 700, fontSize: '0.95rem', wordSpacing: '5px' }}>
                    #Recrutement #JobDating #Networking #Théâtre #Opportunités #CabaretLe9 #Alternants
                </p>
            </div>
        )
    },
    { 
        id: "negociateur-technico-commercial", 
        title: "NÉGOCIATEUR TECHNICO-COMMERCIAL", 
        date: "février 29, 2024", 
        comments: "Aucun commentaire",
        content: (
            <div className="article-body">
                <p className="intro-text" style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#1c1e4c', fontWeight: 500 }}>
                    Vous aspirez à une carrière qui allie compétences techniques pointues et talents commerciaux aiguisés ? La formation de Négociateur Technico-Commercial (NTC) au CFA Meta DX School est conçue pour vous propulser vers l’excellence dans le monde passionnant de la négociation technique. Dans cet article, découvrez les objectifs captivants de notre programme NTC qui font de cette formation une opportunité incontournable pour les passionnés de technologie et de commerce.
                </p>

                <h3>Maîtriser les compétences techniques de pointe</h3>
                <p>
                    La première mission de notre formation NTC est de vous armer de compétences techniques de haut niveau. Vous acquerrez une expertise approfondie dans les technologies émergentes, comprenant les dernières avancées dans votre secteur d’activité. De la compréhension des produits et solutions technologiques à la maîtrise des spécificités techniques, notre programme vous prépare à être un expert recherché dans votre domaine.
                </p>

                <h3>Développer des compétences commerciales stratégiques</h3>
                <p>
                    La négociation technico-commerciale demande bien plus qu’une simple connaissance technique. Notre formation met l’accent sur le développement de compétences commerciales stratégiques. Vous apprendrez à identifier les besoins des clients, à construire des relations solides et à adapter vos arguments de vente en fonction des spécificités techniques. La négociation devient un art que vous maîtriserez pour atteindre vos objectifs professionnels.
                </p>

                <h3>S’adapter aux évolutions du marché</h3>
                <p>
                    Le secteur technico-commercial évolue constamment, et notre formation NTC est conçue pour vous rendre adaptable aux changements du marché. Vous serez formé à anticiper les tendances, à comprendre les évolutions technologiques et à ajuster vos stratégies de négociation en conséquence. Être un Négociateur Technico-Commercial au CFA Meta DX School signifie être prêt à relever les défis de demain avec confiance.
                </p>

                <h3>Expérience pratique en situation réelle</h3>
                <p>
                    Nous croyons en l’apprentissage par l’action. Notre programme NTC intègre des simulations de négociation, des études de cas réelles, et des stages en entreprise pour vous immerger dans des situations professionnelles concrètes. Vous aurez l’occasion de mettre en pratique vos connaissances acquises en classe et de développer vos compétences dans un environnement professionnel authentique.
                </p>

                <h3>Accompagnement personnalisé et réseau professionnel</h3>
                <p>
                    Au CFA Meta DX School, nous accordons une importance particulière à votre réussite individuelle. Notre équipe pédagogique dédiée vous accompagnera tout au long de votre parcours, vous fournissant des conseils personnalisés et des opportunités de networking. Vous aurez accès à un réseau professionnel étendu, facilitant votre intégration dans le monde professionnel dès la fin de la formation.
                </p>

                <hr style={{ margin: '3rem 0', border: 'none', borderTop: '2px dashed #cbd5e1' }} />

                <h3>Comment rejoindre notre programme NTC</h3>
                <p>
                    Si vous êtes passionné par la technologie, habile dans l’art de la négociation, et désireux de transformer votre intérêt en une carrière dynamique, la formation de Négociateur Technico-Commercial au CFA Meta DX School est la voie à suivre. Rejoignez-nous et faites de votre passion un atout majeur sur le marché du travail.
                </p>
                <p>
                    Pour plus d’informations sur le programme NTC et sur la procédure d’inscription, n’hésitez pas à visiter notre site web ou à nous contacter directement. Ensemble, construisons votre avenir professionnel dans le monde passionnant de la négociation technico-commerciale.
                </p>
                
                <div style={{ background: '#f8fafc', borderLeft: '4px solid #ef9a37', padding: '1.5rem', marginTop: '2rem' }}>
                    <p style={{ margin: 0, fontStyle: 'italic', color: '#475569' }}>
                        <strong>En conclusion :</strong> Bien que le chemin de l’alternance puisse être semé de défis, de nombreuses aides sont à votre disposition pour faciliter votre parcours. N’hésitez pas à vous informer auprès des organismes compétents et de votre entreprise pour maximiser les avantages financiers auxquels vous avez droit. L’alternance est une expérience enrichissante, et ces aides visent à vous accompagner vers la réussite.
                    </p>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                    <a href="/cfa/formation/tp-ntc" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#1c1e4c', color: 'white', fontWeight: 'bold', padding: '1rem 2.5rem', borderRadius: '50px', textDecoration: 'none', transition: 'transform 0.2s', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                        Découvrir la formation NTC
                    </a>
                </div>
            </div>
        )
    },
    { id: "aides-apprentis", title: "LES AIDES AUX APPRENTIS", date: "février 29, 2024", comments: "Aucun commentaire" },
    { id: "assistante-vie-familles", title: "ASSISTAN(E) DE VIE AUX FAMILLES", date: "février 29, 2024", comments: "Aucun commentaire" }
];
