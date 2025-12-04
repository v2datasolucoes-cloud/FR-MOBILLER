import React from 'react';

const BrandSystem: React.FC = () => {
  return (
    <div className="w-full bg-neutral-900 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Typography */}
        <div className="space-y-8">
          <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-8 border-b border-gray-800 pb-2">Tipografia</h3>
          
          <div className="space-y-2">
            <p className="text-sm text-gray-400 font-mono">Título — Manrope Bold</p>
            <div className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[0.9]">
              Construindo o<br/>Futuro do<br/>Viver.
            </div>
          </div>

          <div className="space-y-2 mt-12">
             <p className="text-sm text-gray-400 font-mono">Texto — Manrope Regular</p>
             <p className="text-gray-300 leading-relaxed text-lg max-w-md font-light">
               Nossa arquitetura é definida pela ausência do desnecessário. Criamos espaços que respiram, utilizando a geometria para emoldurar luz e sombra em suas formas mais puras.
             </p>
          </div>
          
          <div className="flex gap-4 text-white text-2xl font-bold mt-8 tracking-widest opacity-50">
            <span>Aa</span>
            <span>Bb</span>
            <span>Cc</span>
            <span>123</span>
          </div>
        </div>

        {/* Color Palette */}
        <div className="space-y-8">
          <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-8 border-b border-gray-800 pb-2">Sistema Cromático</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/3] bg-black border border-gray-800 flex flex-col justify-end p-4 group hover:border-white transition-colors">
              <span className="font-mono text-xs text-gray-500">Preto Puro</span>
              <span className="font-mono text-xs text-gray-300">#000000</span>
            </div>
            <div className="aspect-[4/3] bg-white flex flex-col justify-end p-4 group">
              <span className="font-mono text-xs text-gray-500">Branco Puro</span>
              <span className="font-mono text-xs text-black">#FFFFFF</span>
            </div>
            <div className="aspect-[4/3] bg-neutral-800 flex flex-col justify-end p-4 group">
              <span className="font-mono text-xs text-gray-500">Carbono</span>
              <span className="font-mono text-xs text-gray-300">#262626</span>
            </div>
            <div className="aspect-[4/3] bg-neutral-400 flex flex-col justify-end p-4 group">
              <span className="font-mono text-xs text-gray-800">Concreto</span>
              <span className="font-mono text-xs text-black">#A3A3A3</span>
            </div>
          </div>

          <div className="mt-8 p-6 border border-white/5 bg-black/50">
            <h4 className="text-white text-sm uppercase tracking-widest mb-2">Regra de Uso</h4>
            <p className="text-gray-400 text-sm">
              Use cores apenas para denotar estrutura. A fotografia deve ser estritamente em preto e branco de alto contraste. 
              Cores de destaque não são permitidas dentro do sistema de identidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSystem;