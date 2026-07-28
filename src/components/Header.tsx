import React from 'react';
import { CategoryFilter, ViewMode } from '../types';
import { EVENT_DETAILS } from '../data/scenes';
import { Sparkles, LayoutGrid, GitCommit, Calendar, MapPin, ExternalLink, Flame } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  currentFilter: CategoryFilter;
  onFilterChange: (filter: CategoryFilter) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentFilter,
  onFilterChange,
  viewMode,
  onViewModeChange,
}) => {
  const categories: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'Все 13 Сцен' },
    { id: 'origins', label: 'Начало Пути' },
    { id: 'exile', label: 'Изгнание' },
    { id: 'search', label: 'Поиски Ситы' },
    { id: 'war', label: 'Битва за Ланку' },
    { id: 'triumph', label: 'Торжество' },
  ];

  return (
    <header className="relative pt-8 pb-6 border-b border-slate-800/80 space-y-8">
      {/* Top Festival Notice Ribbon */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-gradient-to-r from-amber-950/70 via-slate-900 to-amber-950/70 border border-amber-500/30 px-4 py-2.5 rounded-2xl shadow-lg">
        <div className="flex items-center gap-2.5 text-xs text-amber-200">
          <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="font-extrabold uppercase tracking-wide text-amber-300">
            {EVENT_DETAILS.date} • {EVENT_DETAILS.venue} ({EVENT_DETAILS.location})
          </span>
        </div>

        <a
          href={EVENT_DETAILS.link}
          target="_blank"
          rel="noopener noreferrer"
          id="header-invitation-link"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-amber-500/20"
        >
          <span>Приглашение на Спектакль</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Title Banner */}
      <div className="text-center space-y-4 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-widest uppercase"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          Интерактивное Древнее Сказание
        </motion.div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-300 to-amber-600 drop-shadow-lg">
          РАМАЯНА
        </h1>

        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
          13 ключевых фрагментов великого этно-эпоса о преданности, дхарме и вечной победе света над тьмой. 
          Погрузитесь в иллюстрации и сюжет перед спектаклем на Пушкинской набережной!
        </p>
      </div>

      {/* Controls Bar: Filters & View Switcher */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/60">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onFilterChange(cat.id)}
              id={`filter-category-${cat.id}`}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                currentFilter === cat.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20 font-bold'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-amber-500/40 hover:text-amber-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl shrink-0">
          <button
            onClick={() => onViewModeChange('grid')}
            id="view-mode-grid"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              viewMode === 'grid'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Сетка</span>
          </button>

          <button
            onClick={() => onViewModeChange('timeline')}
            id="view-mode-timeline"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              viewMode === 'timeline'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <GitCommit className="w-3.5 h-3.5" />
            <span>Хронология</span>
          </button>
        </div>
      </div>
    </header>
  );
};
