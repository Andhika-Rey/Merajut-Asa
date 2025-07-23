import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Beranda from './pages/Beranda';
import JelajahKampanye from './pages/JelajahKampanye';
import DetailKampanye from './pages/DetailKampanye';
import ProgramUnggulan from './pages/ProgramUnggulan';
import KatalisatorJabar from './pages/programs/KatalisatorJabar';
import AkademiDigital from './pages/programs/AkademiDigital';
import ProgramMentorship from './pages/programs/ProgramMentorship';
import ProfilPengguna from './pages/ProfilPengguna';
import TentangKami from './pages/TentangKami';
import AlurDonasi from './pages/AlurDonasi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header isLoggedIn={isLoggedIn} user={user} setIsLoggedIn={setIsLoggedIn} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/jelajah" element={<JelajahKampanye />} />
            <Route path="/kampanye/:id" element={<DetailKampanye />} />
            <Route path="/program" element={<ProgramUnggulan />} />
            <Route path="/program/katalisator-jabar" element={<KatalisatorJabar />} />
            <Route path="/program/akademi-digital" element={<AkademiDigital />} />
            <Route path="/program/mentorship" element={<ProgramMentorship />} />
            <Route path="/profil" element={<ProfilPengguna />} />
            <Route path="/tentang" element={<TentangKami />} />
            <Route path="/donasi/:id?" element={<AlurDonasi />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;