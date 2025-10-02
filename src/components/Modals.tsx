import { X, AlertCircle, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function Modals() {
  const [showBasicModal, setShowBasicModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-neutral-900 mb-3">Modais & Diálogos</h2>
      <p className="text-neutral-700 mb-8 text-lg leading-relaxed">
        Overlays para capturar atenção do usuário e exigir ação ou fornecer informações.
        Hierarquia visual clara com foco no conteúdo principal.
      </p>

      <div className="space-y-8">
        <div className="bg-white rounded shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Modal Examples</h3>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setShowBasicModal(true)}
              className="px-5 py-2.5 bg-[#978e81] text-white font-semibold rounded-lg hover:bg-[#785633] transition-colors duration-200"
            >
              Basic Modal
            </button>
            <button
              onClick={() => setShowConfirmModal(true)}
              className="px-5 py-2.5 bg-[#ef4444] text-white font-semibold rounded-lg hover:bg-[#dc2626] transition-colors duration-200"
            >
              Confirm Dialog
            </button>
            <button
              onClick={() => setShowFormModal(true)}
              className="px-5 py-2.5 bg-[#5d3a20] text-white font-semibold rounded-lg hover:bg-[#272721] transition-colors duration-200"
            >
              Form Modal
            </button>
          </div>
        </div>

        {showBasicModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-in fade-in zoom-in duration-200">
              <div className="flex items-center justify-between p-6 border-b border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900">Modal Title</h3>
                <button
                  onClick={() => setShowBasicModal(false)}
                  className="text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                <p className="text-neutral-600 leading-relaxed mb-4">
                  This is a basic modal dialog. It can contain any content you need to display
                  to the user, such as information, forms, or confirmations.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  The modal uses a backdrop blur effect and smooth animations for a premium feel.
                </p>
              </div>
              <div className="flex gap-3 p-6 border-t border-neutral-200">
                <button
                  onClick={() => setShowBasicModal(false)}
                  className="flex-1 px-4 py-2.5 border-2 border-neutral-200 text-neutral-700 font-semibold rounded hover:border-neutral-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowBasicModal(false)}
                  className="flex-1 px-4 py-2.5 bg-[#978e81] text-white font-semibold rounded hover:bg-[#785633] transition-colors"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}

        {showConfirmModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded shadow-2xl max-w-md w-full animate-in fade-in zoom-in duration-200">
              <div className="p-6">
                <div className="w-12 h-12 bg-[#ef4444]/10 rounded flex items-center justify-center mb-4">
                  <AlertCircle className="text-[#ef4444]" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Confirm Action</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Are you sure you want to proceed with this action? This operation cannot be undone.
                </p>
              </div>
              <div className="flex gap-3 p-6 border-t border-neutral-200">
                <button
                  onClick={() => setShowConfirmModal(false)}
                  className="flex-1 px-4 py-2.5 border-2 border-neutral-200 text-neutral-700 font-semibold rounded hover:border-neutral-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowConfirmModal(false)}
                  className="flex-1 px-4 py-2.5 bg-[#ef4444] text-white font-semibold rounded hover:bg-[#dc2626] transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {showFormModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded shadow-2xl max-w-lg w-full animate-in fade-in zoom-in duration-200">
              <div className="flex items-center justify-between p-6 border-b border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900">Create New Item</h3>
                <button
                  onClick={() => setShowFormModal(false)}
                  className="text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter title"
                    className="w-full px-4 py-2.5 border-2 border-neutral-200 rounded focus:border-[#978e81] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter description"
                    className="w-full px-4 py-2.5 border-2 border-neutral-200 rounded focus:border-[#978e81] focus:outline-none transition-colors resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Category
                  </label>
                  <select className="w-full px-4 py-2.5 border-2 border-neutral-200 rounded focus:border-[#978e81] focus:outline-none transition-colors bg-white">
                    <option>Select category</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 p-6 border-t border-neutral-200">
                <button
                  onClick={() => setShowFormModal(false)}
                  className="flex-1 px-4 py-2.5 border-2 border-neutral-200 text-neutral-700 font-semibold rounded hover:border-neutral-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowFormModal(false)}
                  className="flex-1 px-4 py-2.5 bg-[#272721] text-white font-semibold rounded hover:bg-black transition-colors"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Static Modal Previews</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-100 rounded p-4">
              <div className="bg-white rounded shadow-lg p-6 max-w-sm mx-auto">
                <div className="w-10 h-10 bg-[#10b981]/10 rounded flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Success</h4>
                <p className="text-sm text-neutral-600 mb-4">Your action was completed successfully.</p>
                <button className="w-full px-4 py-2 bg-[#10b981] text-white font-semibold rounded text-sm">
                  Continue
                </button>
              </div>
            </div>

            <div className="bg-neutral-100 rounded p-4">
              <div className="bg-white rounded shadow-lg p-6 max-w-sm mx-auto">
                <div className="w-10 h-10 bg-[#ef4444]/10 rounded flex items-center justify-center mb-3">
                  <Trash2 className="text-[#ef4444]" size={20} />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Delete Item?</h4>
                <p className="text-sm text-neutral-600 mb-4">This action cannot be undone.</p>
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 border-2 border-neutral-200 text-neutral-700 font-semibold rounded text-sm">
                    Cancel
                  </button>
                  <button className="flex-1 px-4 py-2 bg-[#ef4444] text-white font-semibold rounded text-sm">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
