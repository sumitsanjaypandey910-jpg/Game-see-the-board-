import React from 'react';
import { X, Search, Move, ZoomIn, CheckCircle } from 'lucide-react';

interface HelpModalProps {
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ onClose }) => {
  return (
    <div
      id="help-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md select-none animate-fade-in"
    >
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold">
              ?
            </div>
            <h2 className="text-xl font-black font-bubble text-slate-800">How to Play</h2>
          </div>
          <button
            id="close-help-btn"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 active:scale-90 cursor-pointer transition-transform"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Guides */}
        <div className="space-y-3.5 text-sm text-slate-600">
          <div className="flex items-start gap-3 p-2.5 rounded-2xl bg-sky-50/60 border border-sky-100">
            <div className="p-2 bg-sky-500 text-white rounded-xl shrink-0 shadow-sm">
              <Move className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 font-bubble text-base">Pan & Explore</h4>
              <p className="text-xs text-slate-500">
                Click & drag (or swipe) anywhere on the map to search the vibrant scenery.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2.5 rounded-2xl bg-indigo-50/60 border border-indigo-100">
            <div className="p-2 bg-indigo-500 text-white rounded-xl shrink-0 shadow-sm">
              <ZoomIn className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 font-bubble text-base">Zoom to Inspect</h4>
              <p className="text-xs text-slate-500">
                Use your mouse wheel, pinch on mobile, or tap the zoom buttons to view tiny hidden details.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2.5 rounded-2xl bg-amber-50/60 border border-amber-100">
            <div className="p-2 bg-amber-500 text-white rounded-xl shrink-0 shadow-sm">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 font-bubble text-base">Collect Items</h4>
              <p className="text-xs text-slate-500">
                Tap on an item hidden in the scene to collect it. Select cards in the bottom shelf to focus your search!
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2.5 rounded-2xl bg-rose-50/60 border border-rose-100">
            <div className="p-2 bg-rose-500 text-white rounded-xl shrink-0 shadow-sm">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 font-bubble text-base">Use Hints</h4>
              <p className="text-xs text-slate-500">
                Stuck? Tap the magnifying glass! The camera will zoom directly to an unfound item with an animated guide pointer.
              </p>
            </div>
          </div>
        </div>

        {/* Got it button */}
        <button
          id="got-it-btn"
          onClick={onClose}
          className="mt-5 w-full py-3 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-extrabold text-base rounded-xl shadow-md active:scale-98 transition-transform cursor-pointer"
        >
          Let's Hunt!
        </button>
      </div>
    </div>
  );
};
