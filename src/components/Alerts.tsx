import { CheckCircle, AlertTriangle, Info, XCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function Alerts() {
  const [showDismissable, setShowDismissable] = useState(true);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-neutral-900 mb-3">Alertas & Notificações</h2>
      <p className="text-neutral-700 mb-8 text-lg leading-relaxed">
        Componentes de feedback para comunicar status, erros e informações importantes.
        Cores e ícones semânticos para reconhecimento instantâneo.
      </p>

      <div className="space-y-8">
        <div className="bg-white rounded shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Alert Banners</h3>
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-start gap-3 p-4 bg-[#10b981]/10 border-l-4 border-[#10b981] rounded">
              <CheckCircle className="text-[#10b981] flex-shrink-0 mt-0.5" size={20} />
              <div className="flex-1">
                <h4 className="font-semibold text-[#059669] mb-1">Success!</h4>
                <p className="text-sm text-[#047857] leading-relaxed">
                  Your changes have been saved successfully. All updates are now live.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[#978e81]/10 border-l-4 border-[#978e81] rounded">
              <Info className="text-[#978e81] flex-shrink-0 mt-0.5" size={20} />
              <div className="flex-1">
                <h4 className="font-semibold text-[#785633] mb-1">Information</h4>
                <p className="text-sm text-[#785633] leading-relaxed">
                  New features are available. Check out the latest updates in your dashboard.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[#f59e0b]/10 border-l-4 border-[#f59e0b] rounded">
              <AlertTriangle className="text-[#f59e0b] flex-shrink-0 mt-0.5" size={20} />
              <div className="flex-1">
                <h4 className="font-semibold text-[#d97706] mb-1">Warning</h4>
                <p className="text-sm text-[#d97706] leading-relaxed">
                  Your subscription will expire in 3 days. Please update your payment method.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[#ef4444]/10 border-l-4 border-[#ef4444] rounded">
              <XCircle className="text-[#ef4444] flex-shrink-0 mt-0.5" size={20} />
              <div className="flex-1">
                <h4 className="font-semibold text-[#dc2626] mb-1">Error</h4>
                <p className="text-sm text-[#dc2626] leading-relaxed">
                  Unable to process your request. Please try again or contact support.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Dismissable Alerts</h3>
          <div className="space-y-4 max-w-3xl">
            {showDismissable && (
              <div className="flex items-start gap-3 p-4 bg-[#978e81]/10 border border-[#978e81]/20 rounded">
                <Info className="text-[#978e81] flex-shrink-0 mt-0.5" size={20} />
                <div className="flex-1">
                  <p className="text-sm text-[#785633] leading-relaxed">
                    This is a dismissable alert. Click the X button to close it.
                  </p>
                </div>
                <button
                  onClick={() => setShowDismissable(false)}
                  className="text-[#978e81] hover:text-[#785633] flex-shrink-0"
                >
                  <X size={18} />
                </button>
              </div>
            )}
            {!showDismissable && (
              <button
                onClick={() => setShowDismissable(true)}
                className="px-4 py-2 text-sm text-[#978e81] hover:text-[#785633] font-semibold"
              >
                Show dismissable alert
              </button>
            )}
          </div>
        </div>

        <div className="bg-white rounded shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Toast Notifications</h3>
          <div className="space-y-4 max-w-md">
            <div className="bg-white rounded shadow-xl border border-neutral-200 p-4 flex items-start gap-3">
              <CheckCircle className="text-[#10b981] flex-shrink-0" size={20} />
              <div className="flex-1">
                <h4 className="font-semibold text-neutral-900 text-sm mb-0.5">Upload complete</h4>
                <p className="text-xs text-neutral-600">Your file has been uploaded successfully.</p>
              </div>
              <button className="text-neutral-400 hover:text-neutral-600 flex-shrink-0">
                <X size={16} />
              </button>
            </div>

            <div className="bg-white rounded shadow-xl border border-neutral-200 p-4 flex items-start gap-3">
              <AlertTriangle className="text-[#f59e0b] flex-shrink-0" size={20} />
              <div className="flex-1">
                <h4 className="font-semibold text-neutral-900 text-sm mb-0.5">Attention needed</h4>
                <p className="text-xs text-neutral-600">Please review the pending actions.</p>
              </div>
              <button className="text-neutral-400 hover:text-neutral-600 flex-shrink-0">
                <X size={16} />
              </button>
            </div>

            <div className="bg-[#272721] rounded shadow-xl p-4 flex items-start gap-3 text-white">
              <Info className="flex-shrink-0" size={20} />
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-0.5">New update available</h4>
                <p className="text-xs text-white/90">Version 2.0 is ready to install.</p>
              </div>
              <button className="text-white/80 hover:text-white flex-shrink-0">
                <X size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Inline Messages</h3>
          <div className="space-y-6 max-w-3xl">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-2.5 border-2 border-[#10b981] rounded focus:outline-none"
              />
              <div className="flex items-center gap-2 mt-2">
                <CheckCircle className="text-[#10b981]" size={16} />
                <p className="text-sm text-[#10b981]">Email is valid and available</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2.5 border-2 border-[#ef4444] rounded focus:outline-none"
              />
              <div className="flex items-center gap-2 mt-2">
                <XCircle className="text-[#ef4444]" size={16} />
                <p className="text-sm text-[#ef4444]">Password must be at least 8 characters</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">Username</label>
              <input
                type="text"
                placeholder="Choose a username"
                className="w-full px-4 py-2.5 border-2 border-[#f59e0b] rounded focus:outline-none"
              />
              <div className="flex items-center gap-2 mt-2">
                <AlertTriangle className="text-[#f59e0b]" size={16} />
                <p className="text-sm text-[#f59e0b]">This username is already taken</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow-md p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Badge Notifications</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="px-3 py-1 bg-[#978e81] text-white text-xs font-semibold rounded-sm">
              New
            </span>
            <span className="px-3 py-1 bg-[#10b981] text-white text-xs font-semibold rounded-sm">
              Active
            </span>
            <span className="px-3 py-1 bg-[#f59e0b] text-white text-xs font-semibold rounded-sm">
              Pending
            </span>
            <span className="px-3 py-1 bg-[#ef4444] text-white text-xs font-semibold rounded-sm">
              Urgent
            </span>
            <span className="px-3 py-1 bg-[#5d3a20] text-white text-xs font-semibold rounded-sm">
              Premium
            </span>
            <span className="px-3 py-1 bg-neutral-200 text-neutral-700 text-xs font-semibold rounded-sm">
              Inactive
            </span>
            <span className="px-3 py-1 bg-[#978e81]/10 text-[#978e81] text-xs font-semibold rounded-sm">
              Draft
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ef4444] text-white text-xs font-semibold rounded-sm">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              Live
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
