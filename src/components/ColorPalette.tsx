import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { colorTokens } from '../constants/tokens';

export default function ColorPalette() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedColor(value);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-neutral-900 mb-3">Paleta de Cores</h2>
      <p className="text-neutral-700 mb-8 text-lg leading-relaxed">
        Sistema cromático desenvolvido para transmitir elegância, confiança e autoridade técnica.
        A paleta principal em azul estabelece credibilidade profissional, complementada por acentos
        dourados que adicionam sofisticação premium.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colorTokens.map((color) => (
          <div
            key={color.name}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div
              className="h-32 relative group cursor-pointer"
              style={{ backgroundColor: color.value }}
              onClick={() => copyToClipboard(color.value)}
            >
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                {copiedColor === color.value ? (
                  <Check className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                ) : (
                  <Copy className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                )}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-neutral-900 text-lg mb-2">{color.name}</h3>
              <code className="text-sm bg-neutral-100 px-3 py-1 rounded font-mono text-neutral-700 inline-block mb-3">
                {color.value}
              </code>
              <p className="text-sm text-neutral-600 leading-relaxed">{color.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
