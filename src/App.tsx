import { useRef } from 'react';
import Header from './components/Header';
import DesignPrinciples from './components/DesignPrinciples';
import ColorPalette from './components/ColorPalette';
import Typography from './components/Typography';
import Spacing from './components/Spacing';
import Buttons from './components/Buttons';
import FormElements from './components/FormElements';
import Cards from './components/Cards';
import Navigation from './components/Navigation';
import Alerts from './components/Alerts';
import Modals from './components/Modals';

function App() {
  const principlesRef = useRef<HTMLDivElement>(null);
  const colorsRef = useRef<HTMLDivElement>(null);
  const typographyRef = useRef<HTMLDivElement>(null);
  const spacingRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const formsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  const alertsRef = useRef<HTMLDivElement>(null);
  const modalsRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      principles: principlesRef,
      colors: colorsRef,
      typography: typographyRef,
      spacing: spacingRef,
      buttons: buttonsRef,
      forms: formsRef,
      cards: cardsRef,
      navigation: navigationRef,
      alerts: alertsRef,
      modals: modalsRef
    };

    refs[section]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header onNavigate={handleNavigate} />

      <main>
        <div className="relative bg-[#272721] overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 opacity-15">
            <img
              src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&q=90"
              alt=""
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="relative w-full py-32 px-12 md:px-24">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-thin mb-12 tracking-tight leading-none text-white">
                Design System
              </h1>
              <p className="text-lg opacity-90 mb-16 max-w-2xl leading-relaxed font-extralight text-white">
                Sistema minimalista desenvolvido para marcas que valorizam elegância,
                sofisticação e alto padrão estético.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="px-8 py-5 bg-[#f1ebe1]/10 border border-[#f1ebe1]/20">
                  <p className="text-xs opacity-70 uppercase tracking-widest font-light text-white">Marca</p>
                  <p className="font-normal text-lg mt-2 text-white">@nicollyliiz</p>
                </div>
                <div className="px-8 py-5 bg-[#f1ebe1]/10 border border-[#f1ebe1]/20">
                  <p className="text-xs opacity-70 uppercase tracking-widest font-light text-white">Filosofia</p>
                  <p className="font-normal text-lg mt-2 text-white">Flat Design Elegante</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={principlesRef} className="px-12 md:px-24 py-32 max-w-7xl mx-auto">
          <DesignPrinciples />
        </div>

        <div ref={colorsRef} className="px-12 md:px-24 py-32 max-w-7xl mx-auto">
          <ColorPalette />
        </div>

        <div ref={typographyRef} className="px-12 md:px-24 py-32 max-w-7xl mx-auto">
          <Typography />
        </div>

        <div ref={spacingRef} className="px-12 md:px-24 py-32 max-w-7xl mx-auto">
          <Spacing />
        </div>

        <div ref={buttonsRef} className="px-12 md:px-24 py-32 max-w-7xl mx-auto">
          <Buttons />
        </div>

        <div ref={formsRef} className="px-12 md:px-24 py-32 max-w-7xl mx-auto">
          <FormElements />
        </div>

        <div ref={cardsRef} className="px-12 md:px-24 py-32 max-w-7xl mx-auto">
          <Cards />
        </div>

        <div ref={navigationRef} className="px-12 md:px-24 py-32 max-w-7xl mx-auto">
          <Navigation />
        </div>

        <div ref={alertsRef} className="px-12 md:px-24 py-32 max-w-7xl mx-auto">
          <Alerts />
        </div>

        <div ref={modalsRef} className="px-12 md:px-24 py-32 max-w-7xl mx-auto">
          <Modals />
        </div>

        <footer className="bg-[#f1ebe1] py-32 px-12 md:px-24">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-4xl font-thin text-neutral-900 mb-8 tracking-wide">Design System @nicollyliiz</h3>
            <p className="text-neutral-600 mb-16 max-w-4xl mx-auto text-xl leading-relaxed font-extralight">
              Sistema de design minimalista desenvolvido para elevar a sofisticação e elegância de interfaces digitais.
            </p>
            <div className="text-neutral-400 text-sm font-extralight tracking-widest uppercase">
              ELEGÂNCIA • MINIMALISMO • ALTO PADRÃO
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
