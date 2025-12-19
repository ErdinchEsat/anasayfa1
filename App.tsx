import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import LiveDemo from './components/LiveDemo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-primary-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <LiveDemo />
      </main>
      <Footer />
    </div>
  );
}

export default App;