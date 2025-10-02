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
          <div className="bg-gradient-to-br from-[#978e81] via-[#897a6d] to-[#785633] p-20 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2240%22%20height=%2240%22%20viewBox=%220%200%2040%2040%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22white%22%20fill-opacity=%220.02%22%20fill-rule=%22evenodd%22%3E%3Cpath%20d=%22M20%2020c0%204.4-3.6%208-8%208s-8-3.6-8-8%203.6-8%208-8%208%203.6%208%208zm0-20c0%204.4-3.6%208-8%208s-8-3.6-8-8%203.6-8%208-8%208%203.6%208%208z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            <div className="relative z-10 max-w-5xl">
              <h1 className="text-6xl font-light mb-12 tracking-tight leading-tight">
                Design System
              </h1>
              <p className="text-xl opacity-95 mb-16 max-w-3xl leading-relaxed font-light">
                Sistema minimalista desenvolvido para marcas que valorizam elegância, 
                sofisticação e alto padrão estético.
              </p>
              <div className="flex gap-12">
                <div className="px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm">
                  <p className="text-sm opacity-70 uppercase tracking-wide">Marca</p>
                  <p className="font-medium text-lg">@nicollyliiz</p>
                </div>
                <div className="px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm">
                  <p className="text-sm opacity-70 uppercase tracking-wide">Filosofia</p>
                  <p className="font-medium text-lg">Minimalismo Elegante</p>
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

        <footer className="mt-40 pt-24 border-t border-neutral-200/60">
          <div className="text-center">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#978e81] to-[#785633] flex items-center justify-center shadow-lg">
                <span className="text-white font-light text-2xl">N</span>
              </div>
            </div>
            <h3 className="text-2xl font-light text-neutral-900 mb-6 tracking-wide">Design System @nicollyliiz</h3>
            <p className="text-neutral-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Sistema de design minimalista desenvolvido para elevar a sofisticação e elegância de interfaces digitais.
            </p>
            <div className="text-neutral-400 text-sm font-light tracking-wider">
              ELEGÂNCIA • MINIMALISMO • ALTO PADRÃO
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
