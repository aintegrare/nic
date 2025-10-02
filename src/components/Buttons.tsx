import { ArrowRight, Download, Plus, Trash2 } from 'lucide-react';

export default function Buttons() {
  return (
    <section className="mb-16">
      <h2 className="text-4xl font-light text-neutral-900 mb-6 tracking-tight">Botões</h2>
      <p className="text-neutral-600 mb-12 text-lg font-light leading-relaxed max-w-3xl">
        Componentes de ação elegantes com hierarquia visual clara e estados refinados.
      </p>

      <div className="space-y-12">
        <div className="relative bg-white border border-neutral-200 p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
            <img
              src="https://images.unsplash.com/photo-1505433292045-cc8f3daf8a5d?w=800&q=90"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="relative text-2xl font-extralight text-neutral-900 mb-12 tracking-wide">Primary Buttons</h3>
          <div className="relative flex flex-wrap gap-8 items-center mb-12">
            <button className="px-10 py-5 bg-[#978e81] text-white font-extralight hover:bg-[#785633] transition-colors duration-200 tracking-wide">
              Large Button
            </button>
            <button className="px-8 py-4 bg-[#978e81] text-white font-extralight hover:bg-[#785633] transition-colors duration-200 tracking-wide">
              Default Button
            </button>
            <button className="px-6 py-3 bg-[#978e81] text-white font-extralight hover:bg-[#785633] transition-colors duration-200 text-sm tracking-wide">
              Small Button
            </button>
          </div>
          <div className="relative flex flex-wrap gap-8 items-center">
            <button className="px-8 py-4 bg-[#978e81] text-white font-extralight hover:bg-[#785633] transition-colors duration-200 flex items-center gap-3 tracking-wide">
              <Plus size={18} />
              With Icon
            </button>
            <button className="px-8 py-4 bg-[#978e81] text-white font-extralight hover:bg-[#785633] transition-colors duration-200 flex items-center gap-3 tracking-wide">
              Continue
              <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-neutral-200 text-neutral-400 font-extralight cursor-not-allowed" disabled>
              Disabled
            </button>
          </div>
        </div>

        <div className="bg-white rounded shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Secondary Buttons</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-5 py-2.5 bg-[#f1ebe1] text-[#785633] font-semibold rounded-lg hover:bg-[#978e81] hover:text-white transition-all duration-200 shadow-sm hover:shadow-md">
              Secondary
            </button>
            <button className="px-5 py-2.5 border-2 border-[#978e81] text-[#978e81] font-semibold rounded-lg hover:bg-[#978e81] hover:text-white transition-all duration-200">
              Outline
            </button>
            <button className="px-5 py-2.5 text-[#978e81] font-semibold rounded-lg hover:bg-[#f5f5f5] transition-all duration-200">
              Ghost
            </button>
            <button className="px-5 py-2.5 text-[#978e81] font-semibold hover:text-[#785633] transition-all duration-200 underline-offset-4 hover:underline">
              Link Button
            </button>
          </div>
        </div>

        <div className="bg-white rounded shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Accent & Semantic Buttons</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-5 py-2.5 bg-[#5d3a20] text-white font-semibold rounded-lg hover:bg-[#272721] transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2">
              <Download size={18} />
              Accent Button
            </button>
            <button className="px-5 py-2.5 bg-[#10b981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-all duration-200 shadow-sm hover:shadow-md">
              Success
            </button>
            <button className="px-5 py-2.5 bg-[#ef4444] text-white font-semibold rounded-lg hover:bg-[#dc2626] transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2">
              <Trash2 size={18} />
              Danger
            </button>
            <button className="px-5 py-2.5 bg-[#f59e0b] text-white font-semibold rounded-lg hover:bg-[#d97706] transition-all duration-200 shadow-sm hover:shadow-md">
              Warning
            </button>
          </div>
        </div>

        <div className="bg-white rounded shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Icon Buttons</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="p-3 bg-[#978e81] text-white rounded-lg hover:bg-[#785633] transition-all duration-200 shadow-sm hover:shadow-md">
              <Plus size={20} />
            </button>
            <button className="p-3 border-2 border-[#978e81] text-[#978e81] rounded-lg hover:bg-[#978e81] hover:text-white transition-all duration-200">
              <Download size={20} />
            </button>
            <button className="p-3 text-[#978e81] rounded-lg hover:bg-[#f5f5f5] transition-all duration-200">
              <ArrowRight size={20} />
            </button>
            <button className="p-2.5 bg-[#978e81] text-white rounded-full hover:bg-[#785633] transition-all duration-200 shadow-md hover:shadow-lg">
              <Plus size={18} />
            </button>
            <button className="p-3.5 bg-[#5d3a20] text-white rounded-full hover:bg-[#272721] transition-all duration-200 shadow-lg hover:shadow-xl">
              <ArrowRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
