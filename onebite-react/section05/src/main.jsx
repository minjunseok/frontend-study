import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';




createRoot(document.getElementById('root')).render(


    <>
    <Header />
    <App />
    <Footer />
    </>

    
);
