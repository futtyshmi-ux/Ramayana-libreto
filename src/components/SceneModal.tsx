import React, { useEffect } from 'react';
import { Scene } from '../types';
import { getImageUrl } from '../utils/imageUtils';
import { X, ChevronLeft, ChevronRight, MapPin, Users, BookOpen, Quote, Sparkles, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SceneModalProps {
  scene: Scene | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  totalScenes: number;
}

export const SceneModal: React.FC<SceneModalProps> = ({
  scene,
  onClose,
  onNext,
  onPrev,
  totalScenes,
}) => {
  const [imgError, setImgError] = React.useState(false);

  useEffect(() => {
    setImgError(false);
  }, [scene?.id, scene?.image]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    if (scene) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [scene, onClose, onNext, onPrev]);

  if (!scene) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          id="scene-modal-dialog"
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden bg-slate-900 border border-amber-500/40 shadow-2xl shadow-amber-950/80 z-10"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold text-xs">
                Сцена {scene.id} из {totalScenes}
              </span>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                {scene.categoryLabel}
              </span>
            </div>

            <button
              onClick={onClose}
              id="close-scene-modal"
              className="p-2 rounded-full bg-slate-800 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 custom-scrollbar">
            {/* Main Visual */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 aspect-[16/9] bg-slate-950 shadow-inner">
              {!imgError && getImageUrl(scene.image) ? (
                <img
                  src={getImageUrl(scene.image)}
                  alt={scene.title}
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 text-amber-300 font-medium">
                  <Sparkles className="w-8 h-8 mr-2 animate-pulse" />
                  <span>{scene.title}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 space-y-1">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-100 drop-shadow-md">
                  {scene.title}
                </h2>
                <p className="text-sm sm:text-base font-semibold text-amber-400 drop-shadow">
                  {scene.subtitle}
                </p>
              </div>
            </div>

            {/* Meta Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-slate-950/60 border border-slate-800/80 p-3.5 rounded-2xl">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400">Локация</div>
                  <div className="text-sm font-semibold text-amber-200">{scene.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-950/60 border border-slate-800/80 p-3.5 rounded-2xl">
                <Users className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400">Персонажи</div>
                  <div className="text-sm font-semibold text-amber-200 flex flex-wrap gap-1.5 mt-0.5">
                    {scene.characters.map((char, idx) => (
                      <span key={idx} className="bg-amber-500/10 text-amber-300 text-xs px-2 py-0.5 rounded-md border border-amber-500/20">
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quote block if available */}
            {scene.quote && (
              <div className="relative bg-amber-950/20 border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-2xl space-y-1 italic text-amber-200/90 text-sm sm:text-base">
                <Quote className="w-6 h-6 text-amber-500/40 absolute right-3 top-3" />
                <p>{scene.quote}</p>
              </div>
            )}

            {/* Full Story Narrative */}
            <div className="space-y-3 bg-slate-950/40 border border-slate-800 p-5 sm:p-6 rounded-2xl">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Полное Сказание</span>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line font-light">
                {scene.fullStory}
              </p>
            </div>
          </div>

          {/* Modal Footer Controls (Prev / Next) */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/90 backdrop-blur-md">
            <button
              onClick={onPrev}
              id="prev-modal-scene"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-200 text-xs font-bold transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Пред. Сцена</span>
            </button>

            <span className="text-xs text-slate-400 font-medium">
              Сцена {scene.id} / {totalScenes}
            </span>

            <button
              onClick={onNext}
              id="next-modal-scene"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold transition-colors shadow-md shadow-amber-500/20"
            >
              <span>След. Сцена</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
