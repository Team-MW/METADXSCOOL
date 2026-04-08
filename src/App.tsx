import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/utils/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CFA from './pages/CFA';
import ConseilsFormations from './pages/ConseilsFormations';
import FormaSecu from './pages/FormaSecu';
import Ressources from './pages/Ressources';
import Financements from './pages/Financements';
import Contact from './pages/Contact';
import Candidat from './pages/Candidat';
import Entreprises from './pages/Entreprises';
import Alternant from './pages/Alternant'; // Import new page
import Salarie from './pages/Salarie'; // IMPORT SALARIE
import DemandeurEmploi from './pages/DemandeurEmploi'; // IMPORT DEMANDEUR EMPLOI
import Independant from './pages/Independant'; // IMPORT INDEPENDANT
import FonctionPublique from './pages/FonctionPublique'; // IMPORT FONCTION PUBLIQUE
import Handicap from './pages/Handicap'; // IMPORT HANDICAP
import FormationDetail from './pages/FormationDetail'; // Generic formation page
import Indicateurs from './pages/Indicateurs'; // Stats page
import MentionsLegales from './pages/MentionsLegales';
import Evenements from './pages/Evenements'; // IMPORT EVENEMENTS
import Newsletters from './pages/Newsletters'; // IMPORT NEWSLETTERS
import NewsletterArticle from './pages/NewsletterArticle'; // IMPORT ARTICLE DETAILLE
import Logement from './pages/Logement'; // IMPORT LOGEMENT
import SecuriteBiensPersonnes from './pages/SecuriteBiensPersonnes'; // IMPORT SECURITE
import AlimentaireRestauration from './pages/AlimentaireRestauration'; // IMPORT ALIMENTAIRE
import HygeneHACCP from './pages/formation/HygeneHACCP'; // IMPORT FORMATION HACCP
import HygeneRestaurationCommerciale from './pages/formation/HygeneRestaurationCommerciale'; // IMPORT FORMATION RESTAURATION
import TP_CRCD from './pages/formation/TP_CRCD'; // IMPORT FORMATION TP-CRCD
import SecouristeSST from './pages/formation/SecouristeSST'; // IMPORT FORMATION SST INITIAL
import SecouristeSSTMAC from './pages/formation/SecouristeSSTMAC'; // IMPORT FORMATION SST MAC
import TP_MDEC from './pages/formation/TP_MDEC'; // IMPORT FORMATION TP-MDEC
import RHStrategie from './pages/RHStrategie'; // IMPORT RH STRATEGIE
import POEI from './pages/POEI'; // IMPORT POEI
import VAE from './pages/VAE'; // IMPORT VAE
import BilanCompetences from './pages/BilanCompetences'; // IMPORT BILAN COMPETENCES
import NumeriqueCatalogue from './pages/NumeriqueCatalogue'; // IMPORT CATALOGUE NUMERIQUE
import FormationIAVeille from './pages/formation/FormationIAVeille'; // IMPORT FORMATION IA
import FormationWordIA from './pages/formation/FormationWordIA'; // IMPORT FORMATION WORD IA
import FormationPowerPointIA from './pages/formation/FormationPowerPointIA'; // IMPORT FORMATION POWERPOINT IA
import FormationRGPD from './pages/formation/FormationRGPD'; // IMPORT FORMATION RGPD
import TP_NTC from './pages/formation/TP_NTC'; // IMPORT FORMATION NTC
import LHandicap from './pages/LHandicap'; // IMPORT ENGAGEMENT HANDICAP
import Egalite from './pages/Egalite'; // IMPORT EGALITE ET INCLUSION

import './index.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cfa" element={<CFA />} />
              <Route path="/conseils-formations" element={<ConseilsFormations />} />
              <Route path="/forma-secu" element={<FormaSecu />} />
              <Route path="/forma-secu/securite" element={<SecuriteBiensPersonnes />} />
              <Route path="/forma-secu/alimentaire" element={<AlimentaireRestauration />} />
              <Route path="/forma-secu/alimentaire/haccp" element={<HygeneHACCP />} />
              <Route path="/forma-secu/alimentaire/restauration-commerciale" element={<HygeneRestaurationCommerciale />} />
              <Route path="/cfa/formation/tp-crcd" element={<TP_CRCD />} />
              <Route path="/forma-secu/securite/sst-initial" element={<SecouristeSST />} />
              <Route path="/forma-secu/securite/sst-mac" element={<SecouristeSSTMAC />} />
              <Route path="/cfa/formation/tp-mdec" element={<TP_MDEC />} />
              <Route path="/cfa/formation/tp-ntc" element={<TP_NTC />} />
              <Route path="/conseils-formations/rh-strategie" element={<RHStrategie />} />
              <Route path="/conseils-formations/poei" element={<POEI />} />
              <Route path="/conseils-formations/vae" element={<VAE />} />
              <Route path="/conseils-formations/bilan-competences" element={<BilanCompetences />} />
              <Route path="/conseils-formations/catalogue/numerique" element={<NumeriqueCatalogue />} />
              <Route path="/conseils-formations/catalogue/numerique/ia-veille" element={<FormationIAVeille />} />
              <Route path="/conseils-formations/catalogue/numerique/word-ia" element={<FormationWordIA />} />
              <Route path="/conseils-formations/catalogue/numerique/powerpoint-ia" element={<FormationPowerPointIA />} />
              <Route path="/conseils-formations/catalogue/numerique/rgpd-cyber" element={<FormationRGPD />} />
              <Route path="/ressources" element={<Ressources />} />
              <Route path="/financements" element={<Financements />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact/candidat" element={<Candidat />} />
              <Route path="/contact/entreprises" element={<Entreprises />} />
              <Route path="/financements/alternant" element={<Alternant />} />
              <Route path="/financements/salarie" element={<Salarie />} />
              <Route path="/financements/demandeur-emploi" element={<DemandeurEmploi />} />
              <Route path="/financements/independant" element={<Independant />} />
              <Route path="/financements/fonction-publique" element={<FonctionPublique />} />
              <Route path="/financements/handicap" element={<Handicap />} />
              <Route path="/cfa/formation/:id" element={<FormationDetail />} />
              <Route path="/cfa/indicateurs" element={<Indicateurs />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/ressources/evenements" element={<Evenements />} />
              <Route path="/ressources/newsletters" element={<Newsletters />} />
              <Route path="/ressources/newsletters/:slug" element={<NewsletterArticle />} />
              <Route path="/ressources/logement" element={<Logement />} />
              <Route path="/ressources/handicap-engagement" element={<LHandicap />} />
              <Route path="/ressources/egalite-inclusion" element={<Egalite />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
