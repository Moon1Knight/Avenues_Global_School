import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoadingAnimation from './components/LoadingAnimation';

const Navbar = lazy(() => import('./components/Navbar'));
const HeroSection = lazy(() => import('./components/HeroSection'));
const EventsSection = lazy(() => import('./components/EventsSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const Footer = lazy(() => import('./components/Footer'));

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<LoadingAnimation />}>
            <div className="min-h-screen w-full bg-white relative overflow-y-auto scrollbar-hide flex justify-center"
              style={{
                backgroundImage: 'url("/src/assets/Books.svg")',
                backgroundRepeat: 'repeat',
                backgroundSize: '400px',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
              }}>
              <div className="max-w-full w-full">
                <Navbar />
                <main>
                  <HeroSection />
                  <EventsSection />
                  <AboutSection />
                  <TestimonialsSection />
                </main>
                <Footer />
              </div>
            </div>
          </Suspense>
        } />
      </Routes>
    </Router>
  );
};