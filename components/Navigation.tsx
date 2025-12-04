import React from 'react';
import Logo, { LogoConcept } from './Logo';

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  activeConcept: LogoConcept;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate, activeConcept }) => {
  // Navigation Links Translated
  const navItems = [
    { id: 'Brand', label: 'Marca' },
    { id: 'Identity', label: 'Identidade' },
    { id: 'Mockups', label: 'Aplicações' },
    { id: 'Studio', label: 'Estúdio' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="h-10 cursor-pointer" onClick={() => onNavigate('Brand')}>
          <Logo variant="full" className="h-10" concept={activeConcept} />
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                currentSection === item.id 
                  ? 'text-white font-bold' 
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="md:hidden">
            <button className="text-white text-xs uppercase tracking-widest">Menu</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;