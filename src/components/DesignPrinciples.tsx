import { Sparkles, Target, Layers, Zap } from 'lucide-react';

export default function DesignPrinciples() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-neutral-900 mb-3">Princípios de Design</h2>
      <p className="text-neutral-700 mb-12 text-lg">
        Fundamentos para marca de alto padrão.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gradient-to-br from-[#978e81] via-[#897a6d] to-[#785633] rounded-sm p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/20"></div>
          <div className="relative z-10">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-sm flex items-center justify-center mb-8">
            <Sparkles size={28} />
          </div>
          <h3 className="text-3xl font-light mb-6 tracking-wide">Minimalismo</h3>
          <p className="text-white/90 mb-8 font-light leading-relaxed">
            Simplicidade refinada e propósito claro.
          </p>
          <ul className="space-y-4 text-white/80 font-light">
            <li>• Espaçamento generoso</li>
            <li>• Elementos essenciais</li>
            <li>• Cores coesas</li>
          </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#5d3a20] via-[#4a3118] to-[#272721] rounded-sm p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/20"></div>
          <div className="relative z-10">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-sm flex items-center justify-center mb-8">
            <Target size={28} />
          </div>
          <h3 className="text-3xl font-light mb-6 tracking-wide">Alto Padrão</h3>
          <p className="text-white/90 mb-8 font-light leading-relaxed">
            Qualidade e consistência em cada detalhe.
          </p>
          <ul className="space-y-4 text-white/80 font-light">
            <li>• Hierarquia clara</li>
            <li>• Feedback instantâneo</li>
            <li>• Precisão técnica</li>
          </ul>
          </div>
        </div>

        <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-[#978e81] transition-colors duration-300 shadow-md hover:shadow-xl">
          <div className="w-14 h-14 bg-[#978e81]/10 rounded-xl flex items-center justify-center mb-6">
            <Layers className="text-[#978e81]" size={28} />
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-3">Hierarquia Clara</h3>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Organize informações de forma que o usuário sempre saiba onde está e o que fazer.
            Priorize conteúdo com intencionalidade.
          </p>
          <ul className="space-y-2 text-neutral-600 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Tamanhos de fonte progressivos e proporcionais</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Contraste estratégico para guiar atenção</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Agrupamento lógico de elementos relacionados</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-[#978e81] transition-colors duration-300 shadow-md hover:shadow-xl">
          <div className="w-14 h-14 bg-[#10b981]/10 rounded-xl flex items-center justify-center mb-6">
            <Zap className="text-[#10b981]" size={28} />
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-3">Performance</h3>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Interfaces devem responder instantaneamente. Otimize para velocidade sem
            comprometer a qualidade visual.
          </p>
          <ul className="space-y-2 text-neutral-600 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Animações com 60fps consistentes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Loading states informativos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Otimização de assets e recursos</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8">
        <h3 className="text-xl font-semibold text-neutral-900 mb-6">Diretrizes de Implementação</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-[#978e81] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#978e81] text-white rounded-full flex items-center justify-center text-xs font-bold">✓</span>
              Faça
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="text-[#10b981] mt-1">✓</span>
                <span>Use espaçamento consistente baseado no sistema de 4px</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10b981] mt-1">✓</span>
                <span>Aplique sombras para criar profundidade hierárquica</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10b981] mt-1">✓</span>
                <span>Mantenha contraste adequado para acessibilidade (WCAG AA)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10b981] mt-1">✓</span>
                <span>Use tokens de design para garantir consistência</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10b981] mt-1">✓</span>
                <span>Implemente estados hover, active e disabled claramente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10b981] mt-1">✓</span>
                <span>Teste em múltiplos dispositivos e tamanhos de tela</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#ef4444] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#ef4444] text-white rounded-full flex items-center justify-center text-xs font-bold">✕</span>
              Evite
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="text-[#ef4444] mt-1">✕</span>
                <span>Usar valores arbitrários de espaçamento ou tamanho</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ef4444] mt-1">✕</span>
                <span>Criar variações de cores fora do sistema estabelecido</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ef4444] mt-1">✕</span>
                <span>Sobrecarregar interfaces com elementos desnecessários</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ef4444] mt-1">✕</span>
                <span>Ignorar estados de loading e erro</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ef4444] mt-1">✕</span>
                <span>Usar animações excessivamente lentas ou rápidas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ef4444] mt-1">✕</span>
                <span>Comprometer legibilidade por estética</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#978e81] to-[#f1ebe1] rounded-2xl p-8 mt-8 text-white shadow-xl">
        <h3 className="text-2xl font-bold mb-4">Filosofia do Design System</h3>
        <p className="text-white/90 leading-relaxed text-lg mb-4">
          Este design system foi desenvolvido com foco em <strong>elegância profissional</strong> e
          <strong> autoridade técnica</strong>. Cada componente foi cuidadosamente projetado para transmitir
          confiança, competência e sofisticação.
        </p>
        <p className="text-white/90 leading-relaxed">
          O flat design limpo, combinado com microinterações sutis e uma paleta de cores
          estrategicamente escolhida, cria uma experiência que é simultaneamente moderna,
          acessível e profundamente respeitável.
        </p>
      </div>
    </section>
  );
}
