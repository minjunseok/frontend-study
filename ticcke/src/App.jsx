
import './App.css'
import Argreement from './pages/Argreement';
import FindInfo from './pages/FindInfo';
import Login from './pages/Login';
import Join from './pages/Join';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import Home from './pages/Home';
import Certification from './pages/Certification';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';






function App() {





  return (
  <Router>
     <Navbar />
      <Routes>
      <Route path="/certification" element={<Certification />} />
      <Route path="/" element={<Home />} />
      <Route path="/login"  element={<Login />} />
      <Route path="/join"  element={<Join /> } />
      <Route path="/agreement"  element={<Argreement />} />
      <Route path="/findinfo"  element={<FindInfo />} />
      <Route path="*" element={<Notfound />} />
      </Routes>
    <Footer />
  </Router>
 

  );
};

export default App
