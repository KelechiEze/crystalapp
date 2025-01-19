import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/global.css';

// Import components for different pages
import Header from './components/Header';
import Hero from './components/Hero';
import NextSection from './components/NextSection';
import BenefitsSection from './components/BenefitsSection';
import Section from './components/Section';
import Speakers from './components/Speakers';
import Newsletter from './components/Newsletter';
import WellbeingFooter from './components/WellbeingFooter';

// Import pages
import AboutSection from './components/AboutSection';
import Tutorials from './components/Tutorials';
import Pricing from './components/Pricing';
import ContactPage from './components/ContactPage';
import RegisterPage from './components/RegisterPage';
import VerificationPage from "./components/VerificationPage";
import CategoryPage from "./components/CategoryPage";
import AccountDetailsPage from "./components/accountDetailsPage";

const HomePage = () => (
  <div>
    <Header />
    <Hero />
    <NextSection />
    <BenefitsSection />
    <Section />
    <Speakers />
    <Newsletter />
    <WellbeingFooter />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />

        {/* About Page Route */}
        <Route path="/About" element={<AboutSection />} />
        <Route path="/Tutorials" element={<Tutorials />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/accountDetails" element={<AccountDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
