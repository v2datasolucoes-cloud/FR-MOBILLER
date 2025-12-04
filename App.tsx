import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Logo, { LogoConcept } from './components/Logo';
import BrandSystem from './components/BrandSystem';
import MockupShowcase from './components/MockupShowcase';
import Studio from './components/Studio';
import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts';

const App: React.FC = () => {
  const [section, setSection] = useState('Brand');
  const [animateHero, setAnimateHero] = useState(false);
  const [activeConcept, setActiveConcept] = useState<LogoConcept>('A');

  useEffect(() => {
    setAnimateHero(true);
  }, []);

  const dummyData = [
    { name: 'T1', val: 40 },
    { name: 'T2', val: 65 },
    { name: 'T3', val: 50 },
    { name: 'T4', val: 85 },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navigation currentSection={section} onNavigate={setSection} activeConcept={activeConcept} />

      {/* Main Content Area */}
      <main className="pt-20">
        
        {/* HERO SECTION (Visible when on 'Brand' or initial load) */}
        {section === 'Brand' && (
          <div className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
             
             {/* Background Image: High-end architectural detail */}
             <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=2560&q=80" 
                  alt="Fundo Arquitetura Moderna" 
                  className="w-full h-full object-cover grayscale opacity-20 contrast-125"
                />
                {/* Overlay gradient to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
             </div>

             {/* Abstract Background Lines */}
             <div className="absolute inset-0 flex justify-center z-0">
                <div className="w-px h-full bg-white/5 mx-24"></div>
                <div className="w-px h-full bg-white/5 mx-24 hidden md:block"></div>
                <div className="w-px h-full bg-white/5 mx-24 hidden lg:block"></div>
             </div>
             
             {/* Content */}
             <div className={`relative z-10 text-center flex flex-col items-center transition-all duration-1000 transform ${animateHero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="mb-12 scale-150 drop-shadow-2xl">
                   <Logo variant="icon" className="w-32 h-32" concept={activeConcept} />
                </div>
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-sm">
                  FR MOBILLER
                </h1>
                <p className="text-sm md:text-base uppercase tracking-[0.5em] text-gray-300 font-light mt-4 drop-shadow-md">
                  A Arquitetura do Capital
                </p>
                
                <div className="mt-16 flex gap-8">
                   <button onClick={() => setSection('Mockups')} className="px-8 py-3 border border-white/20 backdrop-blur-sm hover:bg-white hover:text-black transition-all text-xs uppercase tracking-widest">
                     Ver Projetos
                   </button>
                   <button onClick={() => setSection('Studio')} className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-all text-xs uppercase tracking-widest font-bold">
                     Estúdio IA
                   </button>
                </div>
             </div>

             {/* Small Data Viz at bottom right */}
             <div className="absolute bottom-12 right-12 w-48 h-24 hidden md:block opacity-60">
                <p className="text-[10px] uppercase text-gray-400 mb-2 text-right">Índice de Mercado</p>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dummyData}>
                    <Bar dataKey="val" fill="#444" />
                  </BarChart>
                </ResponsiveContainer>
             </div>
          </div>
        )}

        {section === 'Identity' && (
            <div className="animate-fadeIn">
                {/* Identity Selector / Showcase */}
                <div className="py-24 px-6 text-center border-b border-gray-900 bg-neutral-900/20">
                   <h2 className="text-3xl font-light mb-4 uppercase tracking-widest">Conceitos de Identidade</h2>
                   <p className="text-gray-500 text-sm font-mono mb-16">Selecione uma variação para aplicar globalmente.</p>
                   
                   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
                        {/* Concept A */}
                        <div 
                            onClick={() => setActiveConcept('A')}
                            className={`group cursor-pointer p-8 border transition-all duration-500 ${activeConcept === 'A' ? 'border-white bg-white/5' : 'border-white/10 hover:border-white/30'}`}
                        >
                            <div className="h-32 mb-8 flex items-center justify-center">
                                <Logo variant="icon" className="w-24 h-24" concept="A" />
                            </div>
                            <h3 className={`text-lg font-bold mb-2 ${activeConcept === 'A' ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>Conceito A: A Planta</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                Abstração redutiva de plantas baixas e sistemas de grade. Representa estrutura e organização.
                            </p>
                        </div>

                        {/* Concept B */}
                        <div 
                            onClick={() => setActiveConcept('B')}
                            className={`group cursor-pointer p-8 border transition-all duration-500 ${activeConcept === 'B' ? 'border-white bg-white/5' : 'border-white/10 hover:border-white/30'}`}
                        >
                            <div className="h-32 mb-8 flex items-center justify-center">
                                <Logo variant="icon" className="w-24 h-24" concept="B" />
                            </div>
                            <h3 className={`text-lg font-bold mb-2 ${activeConcept === 'B' ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>Conceito B: A Elevação</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                Inspirado na verticalidade e nos skylines urbanos. Enfatiza altura, crescimento e estabilidade.
                            </p>
                        </div>

                        {/* Concept C */}
                        <div 
                            onClick={() => setActiveConcept('C')}
                            className={`group cursor-pointer p-8 border transition-all duration-500 ${activeConcept === 'C' ? 'border-white bg-white/5' : 'border-white/10 hover:border-white/30'}`}
                        >
                            <div className="h-32 mb-8 flex items-center justify-center">
                                <Logo variant="icon" className="w-24 h-24" concept="C" />
                            </div>
                            <h3 className={`text-lg font-bold mb-2 ${activeConcept === 'C' ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>Conceito C: O Monólito</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                Detalhamento minimalista de canto e espaço negativo. Ousado, brutalista e enquadrando o essencial.
                            </p>
                        </div>
                   </div>
                </div>

                {/* Extended Brand System Explanation */}
                <div className="py-24 px-6 text-center border-b border-gray-900">
                    <h3 className="text-xl font-light mb-8">Construção da Identidade Selecionada</h3>
                    <div className="flex justify-center mb-8">
                       <Logo variant="icon" className="w-48 h-48 opacity-50" concept={activeConcept} />
                    </div>
                     <p className="max-w-xl mx-auto text-gray-400 text-lg font-light leading-relaxed">
                     {activeConcept === 'A' && "Construído sobre uma grade rigorosa de 4x4. Os acentos quadrados denotam espaço ocupado."}
                     {activeConcept === 'B' && "Três volumes verticais distintos conectados por uma base unificada. Representa os três pilares do setor imobiliário: Terra, Estrutura, Visão."}
                     {activeConcept === 'C' && "O símbolo depende do espaço negativo para definir os limites. Sugere que o luxo é definido pelo que está ausente, não apenas pelo que está presente."}
                   </p>
                </div>

                <BrandSystem />
            </div>
        )}

        {section === 'Mockups' && (
            <div className="animate-fadeIn">
                <MockupShowcase activeConcept={activeConcept} />
            </div>
        )}

        {section === 'Studio' && (
            <div className="animate-fadeIn">
                <Studio activeConcept={activeConcept} />
            </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12 px-6">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
            <div className="mb-4 md:mb-0">
              &copy; 2025 FR MOBILLER. Todos os direitos reservados.
            </div>
            <div className="flex gap-8 uppercase tracking-widest">
               <span>Privacidade</span>
               <span>Legal</span>
               <span>Contato</span>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;