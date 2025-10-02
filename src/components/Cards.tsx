import { Heart, Share2, Bookmark, MoreVertical, TrendingUp, Users, Award } from 'lucide-react';

export default function Cards() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-neutral-900 mb-3">Cards & Containers</h2>
      <p className="text-neutral-700 mb-8 text-lg leading-relaxed">
        Componentes modulares para organização de conteúdo. Hierarquia visual clara
        com uso estratégico de sombras, espaçamento e bordas.
      </p>

      <div className="space-y-8">
        <div className="bg-white rounded shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Basic Cards</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-[#978e81] transition-colors duration-200">
              <h4 className="font-semibold text-neutral-900 text-lg mb-2">Simple Card</h4>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Card básico com borda e hover state. Ideal para conteúdo informativo.
              </p>
            </div>

            <div className="bg-white shadow-md rounded p-6 hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-neutral-900 text-lg mb-2">Elevated Card</h4>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Card com sombra elevada para maior destaque visual no layout.
              </p>
            </div>

            <div className="bg-[#272721] rounded p-6 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg mb-2">Accent Card</h4>
              <p className="text-white/90 text-sm leading-relaxed">
                Card com gradiente da cor primária para elementos de destaque.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Content Cards</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-[#f1ebe1]"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#978e81]/10 text-[#978e81] text-xs font-semibold rounded-sm">
                    Category
                  </span>
                  <span className="text-neutral-400 text-xs">5 min read</span>
                </div>
                <h4 className="font-semibold text-neutral-900 text-xl mb-2">
                  Card Title Goes Here
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  Brief description of the content. Keep it concise and informative to maintain user attention.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 text-neutral-600 hover:text-[#978e81] transition-colors">
                      <Heart size={18} />
                      <span className="text-sm">124</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-neutral-600 hover:text-[#978e81] transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                  <button className="text-neutral-600 hover:text-[#978e81] transition-colors">
                    <Bookmark size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-[#272721]"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-[#5d3a20]/10 text-[#5d3a20] text-xs font-semibold rounded-sm">
                    Featured
                  </span>
                  <button className="text-neutral-400 hover:text-neutral-600">
                    <MoreVertical size={18} />
                  </button>
                </div>
                <h4 className="font-semibold text-neutral-900 text-xl mb-2">
                  Premium Content Card
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  Special card variant for premium or featured content with accent color.
                </p>
                <button className="w-full px-4 py-2.5 bg-[#5d3a20] text-white font-semibold rounded hover:bg-[#272721] transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Stat Cards</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-neutral-200 rounded p-6 hover:border-[#978e81] transition-colors duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-[#978e81]/10 rounded">
                  <TrendingUp className="text-[#978e81]" size={24} />
                </div>
                <span className="text-xs text-[#10b981] font-semibold">+12.5%</span>
              </div>
              <p className="text-neutral-600 text-sm mb-1">Total Revenue</p>
              <p className="text-2xl font-bold text-neutral-900">$45,231</p>
            </div>

            <div className="bg-white border-2 border-neutral-200 rounded p-6 hover:border-[#978e81] transition-colors duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-[#5d3a20]/10 rounded">
                  <Users className="text-[#5d3a20]" size={24} />
                </div>
                <span className="text-xs text-[#10b981] font-semibold">+8.2%</span>
              </div>
              <p className="text-neutral-600 text-sm mb-1">Active Users</p>
              <p className="text-2xl font-bold text-neutral-900">12,543</p>
            </div>

            <div className="bg-white border-2 border-neutral-200 rounded p-6 hover:border-[#978e81] transition-colors duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-[#10b981]/10 rounded">
                  <Award className="text-[#10b981]" size={24} />
                </div>
                <span className="text-xs text-[#10b981] font-semibold">+15.3%</span>
              </div>
              <p className="text-neutral-600 text-sm mb-1">Achievements</p>
              <p className="text-2xl font-bold text-neutral-900">847</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Profile Cards</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-neutral-200 rounded overflow-hidden hover:border-[#978e81] transition-colors duration-200">
              <div className="h-24 bg-[#978e81]"></div>
              <div className="px-6 pb-6">
                <div className="flex items-end justify-between mb-4">
                  <div className="w-20 h-20 bg-neutral-300 rounded -mt-10 border-4 border-white"></div>
                  <button className="px-4 py-2 border-2 border-[#978e81] text-[#978e81] font-semibold rounded hover:bg-[#978e81] hover:text-white transition-all duration-200 text-sm">
                    Follow
                  </button>
                </div>
                <h4 className="font-semibold text-neutral-900 text-lg">John Doe</h4>
                <p className="text-neutral-600 text-sm mb-4">Product Designer</p>
                <div className="flex gap-6 text-sm">
                  <div>
                    <p className="font-semibold text-neutral-900">1.2K</p>
                    <p className="text-neutral-600 text-xs">Followers</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">342</p>
                    <p className="text-neutral-600 text-xs">Following</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">89</p>
                    <p className="text-neutral-600 text-xs">Posts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#272721] rounded p-6 text-white shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-white/20 rounded"></div>
                <button className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded hover:bg-white/20 transition-all duration-200 text-sm">
                  Connect
                </button>
              </div>
              <h4 className="font-semibold text-xl mb-1">Jane Smith</h4>
              <p className="text-white/80 text-sm mb-4">Senior Developer</p>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                Building beautiful web experiences with modern technologies.
              </p>
              <div className="flex gap-4 pt-4 border-t border-white/20">
                <div>
                  <p className="font-semibold text-lg">5.4K</p>
                  <p className="text-white/70 text-xs">Followers</p>
                </div>
                <div>
                  <p className="font-semibold text-lg">892</p>
                  <p className="text-white/70 text-xs">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
