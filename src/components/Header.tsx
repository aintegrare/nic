import { Palette, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'principles', label: 'Princípios' },
    { id: 'colors', label: 'Cores' },
    { id: 'typography', label: 'Tipografia' },
    { id: 'spacing', label: 'Espaçamento' },
    { id: 'buttons', label: 'Botões' },
    { id: 'forms', label: 'Formulários' },
    { id: 'cards', label: 'Cards' },
    { id: 'navigation', label: 'Navegação' },
    { id: 'alerts', label: 'Alertas' },
    { id: 'modals', label: 'Modais' }
  ];

  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-12 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[#978e81] flex items-center justify-center">
              <Palette className="text-white" size={26} />
            </div>
            <div>
              <h1 className="text-xl font-extralight text-[#978e81] tracking-wide">Design System</h1>
              <p className="text-xs text-neutral-400 font-light tracking-widest uppercase">@nicollyliiz</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavigation(section.id)}
                className="px-6 py-4 text-sm font-extralight text-neutral-500 hover:text-[#978e81] hover:bg-[#978e81]/5 transition-all duration-200 tracking-wide"
              >
                {section.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-600 hover:text-[#978e81] hover:bg-neutral-100 rounded-lg transition-all"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-1 border-t border-neutral-200 pt-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavigation(section.id)}
                className="w-full text-left px-4 py-2.5 text-sm font-medium text-neutral-700 hover:text-[#978e81] hover:bg-[#978e81]/5 rounded-lg transition-all duration-200"
              >
                {section.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
