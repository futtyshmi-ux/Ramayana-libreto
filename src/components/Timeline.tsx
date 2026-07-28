import React from 'react';
import { Scene } from '../types';
import { getImageUrl } from '../utils/imageUtils';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface TimelineProps {
  scenes: Scene[];
  activeSceneId: number;
  onSelectScene: (scene: Scene) => void;
}

export const Timeline: React.FC<TimelineProps> = ({ scenes, activeSceneId, onSelectScene }) => {
  return (
    <div className="w-full py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-amber-200 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>Хронология Легенды (13 Действий)</span>
          </h3>
          <p className="text-xs text-slate-400">
            Нажмите на любой этап для перехода к сюжету
          </p>
        </div>

        <div className="text-xs text-amber-400 font-semibold bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
          Пройдено: {activeSceneId} из {scenes.length}
        </div>
      </div>

      {/* Horizontal Scrollable Timeline Steps */}
      <div className="relative overflow-x-auto pb-4 custom-scrollbar">
        <div className="flex items-center min-w-max gap-3 px-1">
          {scenes.map((scene) => {
            const isActive = scene.id === activeSceneId;
            const isPassed = scene.id < activeSceneId;

            return (
              <React.Fragment key={scene.id}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSelectScene(scene)}
                  id={`timeline-step-${scene.id}`}
                  className={`relative flex flex-col items-center p-3 rounded-2xl border transition-all text-left w-44 shrink-0 ${
                    isActive
                      ? 'bg-amber-500/20 border-amber-400 shadow-lg shadow-amber-500/20 text-amber-100 ring-2 ring-amber-400/50'
                      : isPassed
                      ? 'bg-slate-900/90 border-amber-500/40 text-slate-300 hover:border-amber-400'
                      : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-amber-400 text-slate-950'
                        : isPassed
                        ? 'bg-amber-950 text-amber-300 border border-amber-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      #{scene.id}
                    </span>

                    {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                  </div>

                  <div className="w-full aspect-[16/9] rounded-lg overflow-hidden mb-2 bg-slate-950 flex items-center justify-center">
                    <img
                      src={getImageUrl(scene.image)}
                      alt={scene.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-full">
                    <div className="text-xs font-bold truncate text-amber-100">
                      {scene.title}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">
                      {scene.location}
                    </div>
                  </div>
                </motion.button>

                {scene.id < scenes.length && (
                  <ArrowRight className="w-4 h-4 text-slate-700 shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
