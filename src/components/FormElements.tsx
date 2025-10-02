import { Search, Mail, Lock, Eye, Calendar } from 'lucide-react';

export default function FormElements() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-neutral-900 mb-3">Elementos de Formulário</h2>
      <p className="text-neutral-700 mb-8 text-lg leading-relaxed">
        Inputs e controles de formulário com foco em usabilidade e clareza visual.
        Estados bem definidos para feedback instantâneo durante a interação.
      </p>

      <div className="space-y-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Text Inputs</h3>
          <div className="space-y-6 max-w-2xl">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Default Input
              </label>
              <input
                type="text"
                placeholder="Enter text..."
                className="w-full px-4 py-2.5 border-2 border-neutral-200 rounded-lg focus:border-[#978e81] focus:outline-none transition-colors duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Input with Icon
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full pl-11 pr-4 py-2.5 border-2 border-neutral-200 rounded-lg focus:border-[#978e81] focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Search Input
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full pl-11 pr-4 py-2.5 border-2 border-neutral-200 rounded-lg focus:border-[#978e81] focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Password Input
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full pl-11 pr-11 py-2.5 border-2 border-neutral-200 rounded-lg focus:border-[#978e81] focus:outline-none transition-colors duration-200"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600">
                  <Eye size={20} />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Disabled Input
              </label>
              <input
                type="text"
                placeholder="Disabled"
                disabled
                className="w-full px-4 py-2.5 border-2 border-neutral-200 rounded-lg bg-neutral-100 text-neutral-500 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Error State
              </label>
              <input
                type="text"
                placeholder="Invalid input"
                className="w-full px-4 py-2.5 border-2 border-[#ef4444] rounded-lg focus:border-[#dc2626] focus:outline-none transition-colors duration-200"
              />
              <p className="text-sm text-[#ef4444] mt-1.5">This field is required</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Success State
              </label>
              <input
                type="text"
                placeholder="Valid input"
                className="w-full px-4 py-2.5 border-2 border-[#10b981] rounded-lg focus:border-[#059669] focus:outline-none transition-colors duration-200"
              />
              <p className="text-sm text-[#10b981] mt-1.5">Looking good!</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Textarea</h3>
          <div className="max-w-2xl">
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Enter your message..."
              className="w-full px-4 py-2.5 border-2 border-neutral-200 rounded-lg focus:border-[#978e81] focus:outline-none transition-colors duration-200 resize-none"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Select & Options</h3>
          <div className="space-y-6 max-w-2xl">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Select Menu
              </label>
              <select className="w-full px-4 py-2.5 border-2 border-neutral-200 rounded-lg focus:border-[#978e81] focus:outline-none transition-colors duration-200 bg-white">
                <option>Select an option</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Date Input
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" size={20} />
                <input
                  type="date"
                  className="w-full pl-11 pr-4 py-2.5 border-2 border-neutral-200 rounded-lg focus:border-[#978e81] focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Checkboxes & Radio</h3>
          <div className="space-y-8 max-w-2xl">
            <div>
              <h4 className="text-sm font-semibold text-neutral-700 mb-4">Checkboxes</h4>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-2 border-neutral-300 rounded checked:bg-[#978e81] checked:border-[#978e81] focus:ring-2 focus:ring-[#f1ebe1] focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                  />
                  <span className="text-neutral-700 group-hover:text-neutral-900">Option 1</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 border-2 border-neutral-300 rounded checked:bg-[#978e81] checked:border-[#978e81] focus:ring-2 focus:ring-[#f1ebe1] focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                  />
                  <span className="text-neutral-700 group-hover:text-neutral-900">Option 2 (checked)</span>
                </label>
                <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
                  <input
                    type="checkbox"
                    disabled
                    className="w-5 h-5 border-2 border-neutral-300 rounded"
                  />
                  <span className="text-neutral-700">Option 3 (disabled)</span>
                </label>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-neutral-700 mb-4">Radio Buttons</h4>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="radio-group"
                    className="w-5 h-5 border-2 border-neutral-300 checked:bg-[#978e81] checked:border-[#978e81] focus:ring-2 focus:ring-[#f1ebe1] focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                  />
                  <span className="text-neutral-700 group-hover:text-neutral-900">Choice A</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="radio-group"
                    defaultChecked
                    className="w-5 h-5 border-2 border-neutral-300 checked:bg-[#978e81] checked:border-[#978e81] focus:ring-2 focus:ring-[#f1ebe1] focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                  />
                  <span className="text-neutral-700 group-hover:text-neutral-900">Choice B (selected)</span>
                </label>
                <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
                  <input
                    type="radio"
                    name="radio-group"
                    disabled
                    className="w-5 h-5 border-2 border-neutral-300"
                  />
                  <span className="text-neutral-700">Choice C (disabled)</span>
                </label>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-neutral-700 mb-4">Toggle Switch</h4>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-neutral-300 peer-focus:ring-2 peer-focus:ring-[#f1ebe1] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#978e81]"></div>
                <span className="ml-3 text-neutral-700">Enable notifications</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
