import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CFA from './pages/CFA';
import ConseilsFormations from './pages/ConseilsFormations';
import FormaSecu from './pages/FormaSecu';
import Ressources from './pages/Ressources';
import Financements from './pages/Financements';
import Contact from './pages/Contact';

import './index.css';

function App() {
  return (
    <Router>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
