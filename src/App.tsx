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
import TP_RPMS from './pages/formation/TP_RPMS'; // IMPORT FORMATION TP-RPMS
import SecouristeSST from './pages/formation/SecouristeSST'; // IMPORT FORMATION SST INITIAL
import SecouristeSSTMAC from './pages/formation/SecouristeSSTMAC'; // IMPORT FORMATION SST MAC
import TP_MDEC from './pages/formation/TP_MDEC'; // IMPORT FORMATION TP-MDEC
import TP_REM from './pages/formation/TP_REM'; // IMPORT FORMATION TP-REM
import B_RDA from './pages/formation/B_RDA'; // IMPORT FORMATION B-RDA
import RHStrategie from './pages/RHStrategie'; // IMPORT RH STRATEGIE
import POEI from './pages/POEI'; // IMPORT POEI
import VAE from './pages/VAE'; // IMPORT VAE
import BilanCompetences from './pages/BilanCompetences'; // IMPORT BILAN COMPETENCES
import NumeriqueCatalogue from './pages/NumeriqueCatalogue'; // IMPORT CATALOGUE NUMERIQUE
import FormationIAVeille from './pages/formation/FormationIAVeille'; // IMPORT FORMATION IA
import FormationWordIA from './pages/formation/FormationWordIA'; // IMPORT FORMATION WORD IA
import FormationPowerPointIA from './pages/formation/FormationPowerPointIA'; // IMPORT FORMATION POWERPOINT IA
import FormationExcelIA from './pages/formation/FormationExcelIA'; // IMPORT FORMATION EXCEL IA
import FormationRGPD from './pages/formation/FormationRGPD'; // IMPORT FORMATION RGPD
import TP_NTC from './pages/formation/TP_NTC'; // IMPORT FORMATION NTC
import LHandicap from './pages/LHandicap'; // IMPORT ENGAGEMENT HANDICAP
import Egalite from './pages/Egalite'; // IMPORT EGALITE ET INCLUSION
import BacCatalogue from './pages/BacCatalogue';
import Bac2Catalogue from './pages/Bac2Catalogue';
import Bac3Catalogue from './pages/Bac3Catalogue';
import Bac5Catalogue from './pages/Bac5Catalogue';
import FormationsOffre from './pages/FormationsOffre';
import Mobilite from './pages/Mobilite';
import CommunicationCatalogue from './pages/CommunicationCatalogue';
import FormationCommMultiActeurs from './pages/formation/FormationCommMultiActeurs';
import FormationLinkedin from './pages/formation/FormationLinkedin';
import FormationCommDigitale from './pages/formation/FormationCommDigitale';
import FormationCommImpact from './pages/formation/FormationCommImpact';
import FormationCommInterne from './pages/formation/FormationCommInterne';
import CommerceCatalogue from './pages/CommerceCatalogue';
import ManagementCatalogue from './pages/ManagementCatalogue';
import SanteSecuriteCatalogue from './pages/SanteSecuriteCatalogue';

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
              <Route path="/cfa/formation/tp-rpms" element={<TP_RPMS />} />
              <Route path="/cfa/formation/tp-rem" element={<TP_REM />} />
              <Route path="/cfa/formation/b-rda" element={<B_RDA />} />
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
              <Route path="/conseils-formations/catalogue/numerique/excel-ia" element={<FormationExcelIA />} />
              <Route path="/conseils-formations/catalogue/numerique/rgpd-cyber" element={<FormationRGPD />} />
              <Route path="/conseils-formations/formations" element={<FormationsOffre />} />
              <Route path="/conseils-formations/catalogue/communication" element={<CommunicationCatalogue />} />
              <Route path="/conseils-formations/catalogue/commerce" element={<CommerceCatalogue />} />
              <Route path="/conseils-formations/catalogue/management" element={<ManagementCatalogue />} />
              <Route path="/conseils-formations/catalogue/sante-securite" element={<SanteSecuriteCatalogue />} />
              <Route path="/conseils-formations/catalogue/communication/multi-acteurs" element={<FormationCommMultiActeurs />} />
              <Route path="/conseils-formations/catalogue/communication/linkedin" element={<FormationLinkedin />} />
              <Route path="/conseils-formations/catalogue/communication/digitale" element={<FormationCommDigitale />} />
              <Route path="/conseils-formations/catalogue/communication/impact" element={<FormationCommImpact />} />
              <Route path="/conseils-formations/catalogue/communication/interne" element={<FormationCommInterne />} />
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
              <Route path="/ressources/mobilite" element={<Mobilite />} />
              <Route path="/ressources/logement" element={<Logement />} />
              <Route path="/ressources/handicap-engagement" element={<LHandicap />} />
              <Route path="/ressources/egalite-inclusion" element={<Egalite />} />
              <Route path="/cfa/formations/bac" element={<BacCatalogue />} />
              <Route path="/cfa/formations/bac-2" element={<Bac2Catalogue />} />
              <Route path="/cfa/formations/bac-3" element={<Bac3Catalogue />} />
              <Route path="/cfa/formations/bac-5" element={<Bac5Catalogue />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
