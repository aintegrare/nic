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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-neutral-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-12 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#978e81] to-[#785633] rounded-sm flex items-center justify-center shadow-lg">
              <Palette className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-light text-[#978e81] tracking-wide">Design System</h1>
              <p className="text-xs text-neutral-500 font-light tracking-wider">@nicollyliiz</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavigation(section.id)}
                className="px-5 py-3 text-sm font-light text-neutral-600 hover:text-[#978e81] hover:bg-[#978e81]/5 rounded-sm transition-all duration-300 tracking-wide"
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
