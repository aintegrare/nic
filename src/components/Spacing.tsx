import { spacingTokens } from '../constants/tokens';

export default function Spacing() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-neutral-900 mb-3">Espaçamento</h2>
      <p className="text-neutral-700 mb-8 text-lg leading-relaxed">
        Sistema de espaçamento baseado em múltiplos de 4px para garantir consistência visual
        e alinhamento preciso em todos os elementos da interface.
      </p>

      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="space-y-6">
          {spacingTokens.map((token) => (
            <div key={token.name} className="flex items-center gap-6">
              <div className="w-20 text-right">
                <code className="text-sm font-semibold text-neutral-900">{token.name}</code>
              </div>
              <div className="flex-1 flex items-center gap-4">
                <div
                  className="bg-[#978e81] rounded"
                  style={{ width: token.value, height: '2rem' }}
                />
                <div className="flex gap-4 text-sm text-neutral-600">
                  <code className="bg-neutral-100 px-3 py-1 rounded font-mono">
                    {token.value}
                  </code>
                  <span className="text-neutral-400">|</span>
                  <code className="bg-neutral-100 px-3 py-1 rounded font-mono">
                    {token.pixels}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
