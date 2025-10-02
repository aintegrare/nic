import { typographyTokens } from '../constants/tokens';

export default function Typography() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-neutral-900 mb-3">Tipografia</h2>
      <p className="text-neutral-700 mb-8 text-lg leading-relaxed">
        Sistema tipográfico baseado em escala harmônica com proporções equilibradas.
        Hierarquia clara e legibilidade otimizada para transmitir profissionalismo e facilitar
        a leitura em todos os contextos de uso.
      </p>

      <div className="bg-white rounded-xl shadow-md p-8 mb-8">
        <h3 className="text-xl font-semibold text-neutral-900 mb-6">Família de Fontes</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-neutral-600 mb-2">Primary Font Family</p>
            <p className="text-2xl font-normal">Inter - Regular, Medium, Semibold, Bold</p>
          </div>
          <div className="pt-4 border-t border-neutral-200">
            <p className="text-sm text-neutral-600 mb-2">Fallback Stack</p>
            <code className="text-sm bg-neutral-100 px-3 py-2 rounded font-mono text-neutral-700 inline-block">
              -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
            </code>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {typographyTokens.map((token) => {
          const style = {
            fontSize: token.fontSize,
            lineHeight: token.lineHeight,
            fontWeight: token.fontWeight,
            letterSpacing: token.letterSpacing || 'normal'
          };

          return (
            <div
              key={token.name}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <h4 className="font-semibold text-neutral-900 mb-3">{token.name}</h4>
                  <div className="space-y-2 text-sm text-neutral-600">
                    <div className="flex justify-between">
                      <span>Size:</span>
                      <code className="bg-neutral-100 px-2 py-0.5 rounded font-mono text-xs">
                        {token.fontSize}
                      </code>
                    </div>
                    <div className="flex justify-between">
                      <span>Weight:</span>
                      <code className="bg-neutral-100 px-2 py-0.5 rounded font-mono text-xs">
                        {token.fontWeight}
                      </code>
                    </div>
                    <div className="flex justify-between">
                      <span>Line Height:</span>
                      <code className="bg-neutral-100 px-2 py-0.5 rounded font-mono text-xs">
                        {token.lineHeight}
                      </code>
                    </div>
                    {token.letterSpacing && (
                      <div className="flex justify-between">
                        <span>Spacing:</span>
                        <code className="bg-neutral-100 px-2 py-0.5 rounded font-mono text-xs">
                          {token.letterSpacing}
                        </code>
                      </div>
                    )}
                  </div>
                </div>
                <div className="md:col-span-2 flex items-center">
                  <p style={style} className="text-neutral-900">
                    The quick brown fox jumps over the lazy dog
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
