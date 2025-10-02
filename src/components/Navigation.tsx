import { Home, Search, Bell, User, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-neutral-900 mb-3">Navegação</h2>
      <p className="text-neutral-700 mb-8 text-lg leading-relaxed">
        Componentes de navegação responsivos e acessíveis. Hierarquia clara e
        estados visuais bem definidos para orientação do usuário.
      </p>

      <div className="space-y-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Top Navigation</h3>
          <div className="bg-neutral-50 rounded-lg p-4">
            <nav className="bg-white rounded-lg shadow-md px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <div className="font-bold text-xl text-[#978e81]">Brand</div>
                  <div className="hidden md:flex items-center gap-6">
                    <a href="#" className="text-neutral-700 hover:text-[#978e81] font-medium transition-colors">
                      Home
                    </a>
                    <a href="#" className="text-neutral-700 hover:text-[#978e81] font-medium transition-colors">
                      Products
                    </a>
                    <a href="#" className="text-neutral-700 hover:text-[#978e81] font-medium transition-colors">
                      About
                    </a>
                    <a href="#" className="text-neutral-700 hover:text-[#978e81] font-medium transition-colors">
                      Contact
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="p-2 text-neutral-600 hover:text-[#978e81] hover:bg-neutral-100 rounded-lg transition-all">
                    <Search size={20} />
                  </button>
                  <button className="p-2 text-neutral-600 hover:text-[#978e81] hover:bg-neutral-100 rounded-lg transition-all relative">
                    <Bell size={20} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-[#ef4444] rounded-full"></span>
                  </button>
                  <button className="px-4 py-2 bg-[#978e81] text-white font-semibold rounded-lg hover:bg-[#785633] transition-colors">
                    Sign In
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Mobile Navigation</h3>
          <div className="bg-neutral-50 rounded-lg p-4">
            <nav className="bg-white rounded-lg shadow-md">
              <div className="px-6 py-4 flex items-center justify-between">
                <div className="font-bold text-xl text-[#978e81]">Brand</div>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-neutral-600 hover:text-[#978e81] hover:bg-neutral-100 rounded-lg transition-all"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
              {mobileMenuOpen && (
                <div className="px-6 pb-4 space-y-2 border-t border-neutral-200 pt-4">
                  <a href="#" className="block px-4 py-2.5 text-neutral-700 hover:bg-[#978e81]/10 hover:text-[#978e81] rounded-lg font-medium transition-all">
                    Home
                  </a>
                  <a href="#" className="block px-4 py-2.5 text-neutral-700 hover:bg-[#978e81]/10 hover:text-[#978e81] rounded-lg font-medium transition-all">
                    Products
                  </a>
                  <a href="#" className="block px-4 py-2.5 text-neutral-700 hover:bg-[#978e81]/10 hover:text-[#978e81] rounded-lg font-medium transition-all">
                    About
                  </a>
                  <a href="#" className="block px-4 py-2.5 text-neutral-700 hover:bg-[#978e81]/10 hover:text-[#978e81] rounded-lg font-medium transition-all">
                    Contact
                  </a>
                  <button className="w-full px-4 py-2.5 bg-[#978e81] text-white font-semibold rounded-lg hover:bg-[#785633] transition-colors mt-2">
                    Sign In
                  </button>
                </div>
              )}
            </nav>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Sidebar Navigation</h3>
          <div className="bg-neutral-50 rounded-lg p-4">
            <aside className="bg-white rounded-lg shadow-md w-64 p-6">
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-3 px-4 py-3 bg-[#978e81] text-white rounded-lg font-medium">
                  <Home size={20} />
                  Dashboard
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-lg font-medium transition-colors">
                  <Search size={20} />
                  Search
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-lg font-medium transition-colors">
                  <Bell size={20} />
                  Notifications
                  <span className="ml-auto px-2 py-0.5 bg-[#ef4444] text-white text-xs font-semibold rounded-full">3</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-lg font-medium transition-colors">
                  <User size={20} />
                  Profile
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-lg font-medium transition-colors">
                  Settings
                  <ChevronDown className="ml-auto" size={18} />
                </button>
              </div>
            </aside>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Tabs</h3>
          <div className="space-y-6">
            <div>
              <div className="flex gap-1 border-b border-neutral-200">
                <button className="px-6 py-3 font-semibold text-[#978e81] border-b-2 border-[#978e81] -mb-px">
                  Overview
                </button>
                <button className="px-6 py-3 font-semibold text-neutral-600 hover:text-neutral-900 transition-colors">
                  Analytics
                </button>
                <button className="px-6 py-3 font-semibold text-neutral-600 hover:text-neutral-900 transition-colors">
                  Reports
                </button>
                <button className="px-6 py-3 font-semibold text-neutral-600 hover:text-neutral-900 transition-colors">
                  Settings
                </button>
              </div>
            </div>

            <div>
              <div className="inline-flex gap-2 p-1 bg-neutral-100 rounded-lg">
                <button className="px-6 py-2 bg-white text-neutral-900 font-semibold rounded-md shadow-sm">
                  Daily
                </button>
                <button className="px-6 py-2 text-neutral-600 hover:text-neutral-900 font-semibold rounded-md transition-colors">
                  Weekly
                </button>
                <button className="px-6 py-2 text-neutral-600 hover:text-neutral-900 font-semibold rounded-md transition-colors">
                  Monthly
                </button>
              </div>
            </div>

            <div>
              <div className="inline-flex gap-2 p-1 bg-[#978e81]/10 rounded-lg">
                <button className="px-6 py-2 bg-[#978e81] text-white font-semibold rounded-md shadow-sm">
                  List View
                </button>
                <button className="px-6 py-2 text-[#978e81] hover:bg-[#978e81]/10 font-semibold rounded-md transition-colors">
                  Grid View
                </button>
                <button className="px-6 py-2 text-[#978e81] hover:bg-[#978e81]/10 font-semibold rounded-md transition-colors">
                  Card View
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Breadcrumbs</h3>
          <nav className="flex items-center gap-2 text-sm">
            <a href="#" className="text-[#978e81] hover:underline font-medium">Home</a>
            <span className="text-neutral-400">/</span>
            <a href="#" className="text-[#978e81] hover:underline font-medium">Products</a>
            <span className="text-neutral-400">/</span>
            <a href="#" className="text-[#978e81] hover:underline font-medium">Category</a>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-600 font-medium">Current Page</span>
          </nav>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Pagination</h3>
          <div className="flex items-center justify-center gap-2">
            <button className="px-4 py-2 border-2 border-neutral-200 text-neutral-600 font-semibold rounded-lg hover:border-[#978e81] hover:text-[#978e81] transition-all">
              Previous
            </button>
            <button className="px-4 py-2 bg-[#978e81] text-white font-semibold rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border-2 border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:border-[#978e81] hover:text-[#978e81] transition-all">
              2
            </button>
            <button className="px-4 py-2 border-2 border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:border-[#978e81] hover:text-[#978e81] transition-all">
              3
            </button>
            <button className="px-4 py-2 border-2 border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:border-[#978e81] hover:text-[#978e81] transition-all">
              4
            </button>
            <span className="px-2 text-neutral-400">...</span>
            <button className="px-4 py-2 border-2 border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:border-[#978e81] hover:text-[#978e81] transition-all">
              10
            </button>
            <button className="px-4 py-2 border-2 border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:border-[#978e81] hover:text-[#978e81] transition-all">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
