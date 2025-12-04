import React, { useState } from 'react';
import { generateBrandCopy, generateConceptImage } from '../services/geminiService';
import Logo, { LogoConcept } from './Logo';

interface StudioProps {
    activeConcept: LogoConcept;
}

const Studio: React.FC<StudioProps> = ({ activeConcept }) => {
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsLoading(true);
    setGeneratedContent(null);
    setGeneratedImage(null);

    // Run parallel generation
    const [copy, img] = await Promise.all([
        generateBrandCopy(prompt),
        generateConceptImage(prompt)
    ]);

    setGeneratedContent(copy);
    setGeneratedImage(img);
    setIsLoading(false);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white py-24 px-6 relative">
       {/* Background Grid */}
       <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
            style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
       </div>

       <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-light tracking-widest uppercase mb-4">Estúdio de Conceito</h2>
            <p className="text-gray-500 font-mono text-sm">Desenvolvido com Gemini AI. Gere conceitos arquitetônicos alinhados com a identidade FR Mobiller.</p>
          </div>

          <div className="bg-neutral-900/50 border border-white/10 p-1">
            <div className="flex flex-col md:flex-row">
              <input 
                type="text" 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Descreva uma estrutura (ex: 'Uma vila monolítica de concreto à beira-mar')"
                className="flex-1 bg-transparent text-white p-4 outline-none placeholder-gray-600 font-light"
              />
              <button 
                onClick={handleGenerate}
                disabled={isLoading}
                className="bg-white text-black uppercase font-bold tracking-widest px-8 py-4 hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Processando...' : 'Gerar'}
              </button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
             {/* Result Image */}
             <div className="aspect-square bg-neutral-900 border border-gray-800 flex items-center justify-center relative overflow-hidden group">
                {!generatedImage && !isLoading && (
                  <div className="text-center p-8">
                     <Logo variant="icon" className="w-12 h-12 mx-auto opacity-20 mb-4" concept={activeConcept} />
                     <p className="text-gray-600 text-xs font-mono uppercase">Saída Visual</p>
                  </div>
                )}
                
                {isLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-20">
                        <div className="w-12 h-12 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <p className="mt-4 text-xs font-mono animate-pulse">Renderizando geometria...</p>
                    </div>
                )}

                {generatedImage && (
                  <>
                    <img src={generatedImage} alt="Conceito Gerado" className="w-full h-full object-cover grayscale contrast-125" />
                    <div className="absolute bottom-4 right-4 bg-black px-2 py-1 text-[10px] uppercase border border-white/20">Gerado por IA</div>
                  </>
                )}
             </div>

             {/* Result Text */}
             <div className="flex flex-col justify-center space-y-6">
                <div className="border-l border-white/20 pl-6">
                  <h4 className="text-xs uppercase text-gray-500 mb-4 tracking-widest">Voz da Marca</h4>
                  {isLoading ? (
                      <div className="space-y-2">
                          <div className="h-2 w-full bg-gray-800 animate-pulse"></div>
                          <div className="h-2 w-2/3 bg-gray-800 animate-pulse"></div>
                      </div>
                  ) : (
                    <p className="text-xl md:text-2xl font-light leading-relaxed">
                        {generatedContent || "Insira um comando para definir a narrativa."}
                    </p>
                  )}
                </div>
                
                {generatedContent && (
                    <div className="pt-8 opacity-50">
                        <Logo variant="full" className="h-6" concept={activeConcept} />
                    </div>
                )}
             </div>
          </div>
       </div>
    </div>
  );
};

export default Studio;