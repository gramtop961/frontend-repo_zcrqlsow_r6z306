import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Budgeting from './components/Budgeting';
import Insights from './components/Insights';
import Security from './components/Security';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Budgeting />
        <Insights />
        <Security />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
