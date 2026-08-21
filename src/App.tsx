import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MusicProvider } from './context/MusicContext';
import { ReducedMotionProvider } from './context/ReducedMotionContext';
import IntroScreen from './components/IntroScreen';
import HeroSection from './components/HeroSection';
import DateSection from './components/DateSection';
import LocationSection from './components/LocationSection';
import DressCodeSection from './components/DressCodeSection';
import GiftSection from './components/GiftSection';
import GallerySection from './components/GallerySection';
import EmotionalSection from './components/EmotionalSection';
import RsvpSection from './components/RsvpSection';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleEnter = () => {
    setShowContent(true);
    setShowIntro(false);
  };

  return (
    <ReducedMotionProvider>
      <MusicProvider>
        <div className="bg-atmosphere">
          <div className="bg-noise" />
          <div className="bg-ambient-light" />
          <div className="bg-depth" />
        </div>

        <div className="relative z-10 min-h-screen bg-background text-white">
          <AnimatePresence mode="wait">
            {showIntro && <IntroScreen key="intro" onEnter={handleEnter} />}
          </AnimatePresence>

          {showContent && (
            <>
              <main>
                <HeroSection />
                <DateSection />
                <LocationSection />
                <DressCodeSection />
                <GiftSection />
                <GallerySection />
                <EmotionalSection />
                <RsvpSection />
              </main>
              <MusicPlayer />
            </>
          )}
        </div>
      </MusicProvider>
    </ReducedMotionProvider>
  );
}

export default App;
