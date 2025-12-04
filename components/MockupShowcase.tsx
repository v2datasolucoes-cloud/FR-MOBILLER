import React from 'react';
import Logo, { LogoConcept } from './Logo';

interface MockupShowcaseProps {
  activeConcept: LogoConcept;
}

const MockupShowcase: React.FC<MockupShowcaseProps> = ({ activeConcept }) => {
  return (
    <div className="w-full bg-black py-24 px-6 border-t border-gray-900">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/20 pb-6">
          <h2 className="text-4xl font-light text-white tracking-tight">Aplicações</h2>
          <span className="text-gray-500 font-mono text-sm mt-4 md:mt-0">Identidade em contexto</span>
        </div>

        {/* 1. Large Building Banner */}
        <div className="w-full aspect-[21/9] relative bg-neutral-900 overflow-hidden flex group">
          {/* Mockup Background Image: Glass Facade / Skyscraper */}
          <div className="absolute inset-0 z-0 opacity-50 grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105">
             <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" 
                className="w-full h-full object-cover" 
                alt="Fachada de Arranha-céu de Vidro" 
             />
          </div>
          
          {/* The Banner Overlay */}
          <div className="relative z-10 flex w-full h-full">
            <div className="w-1/2 h-full hidden md:block"></div> {/* Space for building view */}
            <div className="w-full md:w-1/2 h-full bg-white text-black p-12 md:p-24 flex flex-col justify-between shadow-2xl transform translate-y-0 transition-transform duration-700">
               <div>
                 <p className="text-lg md:text-2xl font-light leading-snug tracking-wide">
                   Estrutura sólida.<br/>
                   Visão moderna.<br/>
                   Construindo o futuro<br/>
                   dos negócios.
                 </p>
               </div>
               <div className="flex justify-between items-end border-t border-black pt-8">
                 <span className="font-mono text-sm">2025</span>
                 <Logo variant="full" light={false} className="h-10" concept={activeConcept} />
               </div>
            </div>
          </div>
        </div>

        {/* 2. Grid: Business Card & Instagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Business Card - High End Marble Texture Background */}
            <div className="bg-neutral-900 p-12 flex flex-col items-center justify-center space-y-8 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-20">
                    <img 
                        src="https://images.unsplash.com/photo-1596496356905-2e672729606d?auto=format&fit=crop&w=1000&q=80" 
                        className="w-full h-full object-cover grayscale" 
                        alt="Textura de Mármore" 
                    />
                </div>
                <div className="absolute top-4 left-4 text-xs text-gray-400 uppercase tracking-widest z-10">Papelaria</div>
                
                {/* Front */}
                <div className="w-80 h-48 bg-black border border-white/10 shadow-2xl flex items-center justify-center transform group-hover:-translate-y-4 transition-transform duration-500 relative z-10">
                    <Logo variant="icon" className="w-16 h-16" concept={activeConcept} />
                </div>
                {/* Back */}
                <div className="w-80 h-48 bg-white text-black shadow-2xl p-6 flex flex-col justify-between transform group-hover:-translate-y-4 transition-transform duration-500 delay-75 relative z-10">
                   <div className="flex justify-between items-start">
                     <Logo variant="full" light={false} className="h-6" concept={activeConcept} />
                   </div>
                   <div className="text-xs font-mono space-y-1">
                     <p>Thomas Wright</p>
                     <p>Arquiteto Sênior</p>
                     <p className="pt-2 text-gray-500">+55 11 95555 0192</p>
                     <p className="text-gray-500">tw@frmobiller.com</p>
                   </div>
                </div>
            </div>

            {/* Instagram - Luxury Interior */}
            <div className="bg-neutral-900 p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-4 left-4 text-xs text-gray-600 uppercase tracking-widest">Redes Sociais</div>
                <div className="w-80 h-80 bg-black border border-gray-800 relative flex flex-col shadow-2xl">
                  {/* Insta Content */}
                  <div className="flex-1 relative overflow-hidden grayscale">
                    <img 
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80" 
                        className="w-full h-full object-cover opacity-80" 
                        alt="Interior de Luxo Sala de Estar" 
                    />
                    <div className="absolute top-4 right-4">
                        <Logo variant="icon" className="w-8 h-8 drop-shadow-md" concept={activeConcept} />
                    </div>
                  </div>
                  <div className="h-20 bg-black text-white p-4 flex flex-col justify-center border-t border-gray-800">
                    <p className="text-xs font-light tracking-wide">A definição do silêncio.</p>
                    <p className="text-[10px] text-gray-500 mt-1 uppercase">#arquitetura #frmobiller #cobertura</p>
                  </div>
                </div>
            </div>
        </div>
        
        {/* 3. Signage / Fence - Construction Site */}
        <div className="w-full h-96 relative bg-gray-800 overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80" 
                className="w-full h-full object-cover grayscale opacity-40 contrast-150" 
                alt="Estrutura de Construção" 
             />
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-black/90 backdrop-blur-sm border border-white/20 p-8 md:p-16 text-center max-w-2xl mx-4">
                    <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-[0.2em] mb-4">Em Breve</h3>
                    <div className="w-16 h-1 bg-white mx-auto mb-8"></div>
                    <Logo variant="vertical" className="w-full" concept={activeConcept} />
                    <p className="mt-8 text-gray-400 font-mono text-sm">Residências disponíveis Outono 2025</p>
                 </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default MockupShowcase;