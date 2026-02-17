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
import FormationDetail from './pages/FormationDetail'; // Generic formation page
import Indicateurs from './pages/Indicateurs'; // Stats page
import MentionsLegales from './pages/MentionsLegales';

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
              <Route path="/ressources" element={<Ressources />} />
              <Route path="/financements" element={<Financements />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact/candidat" element={<Candidat />} />
              <Route path="/contact/entreprises" element={<Entreprises />} />
              <Route path="/financements/alternant" element={<Alternant />} />
              <Route path="/cfa/formation/:id" element={<FormationDetail />} />
              <Route path="/cfa/indicateurs" element={<Indicateurs />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
