import React, { useState, useEffect } from 'react';
import { Scene } from '../types';
import { getImageUrl } from '../utils/imageUtils';
import { Sparkles, MapPin, Users, BookOpen, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface SceneCardProps {
  scene: Scene;
  onClick: (scene: Scene) => void;
  index: number;
}

export const SceneCard: React.FC<SceneCardProps> = ({ scene, onClick, index }) => {
  const [imgError, setImgError] = useState(false);
  const imgSrc = getImageUrl(scene.image);

  useEffect(() => {
    setImgError(false);
  }, [scene.id, scene.image]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={() => onClick(scene)}
      id={`s${scene.id}`}
      className="group cursor-pointer relative flex flex-col h-full rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-800 hover:border-amber-500/60 shadow-xl transition-all duration-300"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
        {!imgError && imgSrc ? (
          <img
            src={imgSrc}
            alt={scene.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-amber-950/40 to-slate-900 text-amber-300">
            <Sparkles className="w-10 h-10 mb-2 opacity-60" />
            <span className="text-sm font-semibold">{scene.title}</span>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent opacity-90" />

        {/* Scene Number Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 font-extrabold text-xs shadow-lg">
          <span className="text-amber-500">Сцена</span> #{scene.id}
        </div>

        {/* Category Pill */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-200 font-medium text-[11px]">
          {scene.categoryLabel}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex flex-col flex-1 p-5 space-y-3 justify-between">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors line-clamp-1">
            {scene.title}
          </h3>
          <p className="text-xs font-medium text-amber-400/90 line-clamp-1">
            {scene.subtitle}
          </p>
          <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 pt-1">
            {scene.description}
          </p>
        </div>

        {/* Footer Meta */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1 text-slate-400 truncate max-w-[65%]">
            <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="truncate">{scene.location}</span>
          </div>

          <div className="inline-flex items-center gap-1 text-amber-300 font-semibold group-hover:translate-x-1 transition-transform">
            <span>Сказание</span>
            <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
