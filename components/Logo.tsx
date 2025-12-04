import React from 'react';

export type LogoConcept = 'A' | 'B' | 'C';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'vertical';
  light?: boolean;
  concept?: LogoConcept;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'full', light = true, concept = 'A' }) => {
  const color = light ? "white" : "black";
  
  // CONCEPT A: "The Plan" - Original Floorplan Grid
  const SymbolA = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M4 4 H60 V4" stroke={color} strokeWidth="2" />
      <path d="M4 60 H24" stroke={color} strokeWidth="2" />
      <path d="M60 4 V32" stroke={color} strokeWidth="2" />
      <path d="M4 4 V60" stroke={color} strokeWidth="2" />
      <path d="M16 16 H48" stroke={color} strokeWidth="4" />
      <path d="M16 16 V48" stroke={color} strokeWidth="4" />
      <path d="M16 32 H36" stroke={color} strokeWidth="4" />
      <rect x="42" y="38" width="10" height="10" fill={color} />
    </svg>
  );

  // CONCEPT B: "The Elevation" - Verticality and Skyline
  const SymbolB = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Three vertical pillars of varying widths */}
      <rect x="8" y="12" width="12" height="48" fill={color} />
      <rect x="26" y="4" width="12" height="56" fill="none" stroke={color} strokeWidth="3" />
      <rect x="44" y="20" width="12" height="40" fill={color} />
      {/* Connecting lintel */}
      <path d="M8 12 H56" stroke={color} strokeWidth="2" />
    </svg>
  );

  // CONCEPT C: "The Monolith" - Minimalist Corner / Negative Space
  const SymbolC = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Solid block with geometric cutout */}
      <path d="M4 4H60V60H4V4Z" fill={color} fillOpacity="0.1" />
      <path d="M4 4 L24 24" stroke={color} strokeWidth="2" />
      <path d="M60 60 L40 40" stroke={color} strokeWidth="2" />
      <path d="M60 4 L4 60" stroke={color} strokeWidth="1" opacity="0.5" />
      {/* Strong F abstraction */}
      <path d="M20 20 H44" stroke={color} strokeWidth="6" strokeLinecap="square" />
      <path d="M20 20 V44" stroke={color} strokeWidth="6" strokeLinecap="square" />
      <path d="M20 32 H38" stroke={color} strokeWidth="6" strokeLinecap="square" />
    </svg>
  );

  const renderSymbol = () => {
    switch (concept) {
      case 'B': return <SymbolB />;
      case 'C': return <SymbolC />;
      default: return <SymbolA />;
    }
  };

  if (variant === 'icon') {
    return (
      <div className={`${className}`}>
        {renderSymbol()}
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <div className="w-16 h-16">
          {renderSymbol()}
        </div>
        <div className={`text-center tracking-[0.2em] font-bold ${light ? 'text-white' : 'text-black'}`}>
          <div className="text-2xl leading-none">FR MOBILLER</div>
          <div className={`text-[0.6rem] mt-1 font-medium text-gray-400 uppercase tracking-[0.4em]`}>
            IMÓVEIS
          </div>
        </div>
      </div>
    );
  }

  // Full Horizontal (Default)
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-full aspect-square">
        {renderSymbol()}
      </div>
      <div className={`flex flex-col justify-center ${light ? 'text-white' : 'text-black'}`}>
        <h1 className="text-2xl font-bold tracking-[0.15em] leading-none">FR MOBILLER</h1>
        <span className="text-[0.65rem] font-medium text-gray-500 uppercase tracking-[0.35em] mt-1 ml-0.5">
          IMÓVEIS
        </span>
      </div>
    </div>
  );
};

export default Logo;