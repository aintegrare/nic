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

      <main className="max-w-7xl mx-auto px-12 py-20">
        <div className="mb-32">
          <div className="relative bg-[#978e81] overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&q=90"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative p-24 text-white">
              <div className="max-w-5xl">
                <h1 className="text-7xl font-thin mb-16 tracking-tight leading-none">
                  Design System
                </h1>
                <p className="text-xl opacity-90 mb-20 max-w-3xl leading-relaxed font-extralight">
                  Sistema minimalista desenvolvido para marcas que valorizam elegância,
                  sofisticação e alto padrão estético.
                </p>
                <div className="flex gap-16">
                  <div className="px-8 py-6 bg-black/10 border border-white/20 backdrop-blur-sm">
                    <p className="text-sm opacity-70 uppercase tracking-widest font-light">Marca</p>
                    <p className="font-normal text-lg mt-2">@nicollyliiz</p>
                  </div>
                  <div className="px-8 py-6 bg-black/10 border border-white/20 backdrop-blur-sm">
                    <p className="text-sm opacity-70 uppercase tracking-widest font-light">Filosofia</p>
                    <p className="font-normal text-lg mt-2">Flat Design Elegante</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={principlesRef} className="mb-32">
          <DesignPrinciples />
        </div>

        <div ref={colorsRef} className="mb-32">
          <ColorPalette />
        </div>

        <div ref={typographyRef} className="mb-32">
          <Typography />
        </div>

        <div ref={spacingRef} className="mb-32">
          <Spacing />
        </div>

        <div ref={buttonsRef} className="mb-32">
          <Buttons />
        </div>

        <div ref={formsRef} className="mb-32">
          <FormElements />
        </div>

        <div ref={cardsRef} className="mb-32">
          <Cards />
        </div>

        <div ref={navigationRef} className="mb-32">
          <Navigation />
        </div>

        <div ref={alertsRef} className="mb-32">
          <Alerts />
        </div>

        <div ref={modalsRef} className="mb-32">
          <Modals />
        </div>

        <footer className="mt-48 pt-32 border-t border-neutral-200">
          <div className="text-center">
            <div className="inline-flex items-center gap-6 mb-12">
              <div className="w-20 h-20 bg-[#978e81] flex items-center justify-center">
                <span className="text-white font-thin text-3xl">N</span>
              </div>
            </div>
            <h3 className="text-3xl font-thin text-neutral-900 mb-8 tracking-wide">Design System @nicollyliiz</h3>
            <p className="text-neutral-500 mb-16 max-w-3xl mx-auto text-xl leading-relaxed font-extralight">
              Sistema de design minimalista desenvolvido para elevar a sofisticação e elegância de interfaces digitais.
            </p>
            <div className="text-neutral-300 text-sm font-extralight tracking-widest uppercase">
              ELEGÂNCIA • MINIMALISMO • ALTO PADRÃO
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
