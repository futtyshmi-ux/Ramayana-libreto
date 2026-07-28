import React from 'react';
import { EVENT_DETAILS } from '../data/scenes';
import { Calendar, MapPin, ExternalLink, Sparkles, Flame, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export const InvitationBanner: React.FC<{ isFooter?: boolean }> = ({ isFooter = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      id="invitation-banner-section"
      className={`relative overflow-hidden rounded-3xl border border-amber-500/40 bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/80 p-8 sm:p-10 shadow-2xl shadow-amber-950/60 ${
        isFooter ? 'my-12' : 'my-8'
      }`}
    >
      {/* Background glow effects */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
      
      {/* Top Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
          Московский Фестиваль «Театральный Бульвар»
        </div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-semibold">
          <Flame className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
          Вход Свободный
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Main Info Column */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 drop-shadow-md">
            {EVENT_DETAILS.invitationText}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            {EVENT_DETAILS.description}
          </p>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-start gap-3 bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl">
              <Calendar className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-slate-400 font-medium">Дата и Время</div>
                <div className="text-sm font-bold text-amber-200">
                  {EVENT_DETAILS.date} • {EVENT_DETAILS.time}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-slate-400 font-medium">Площадка</div>
                <div className="text-sm font-bold text-amber-200">{EVENT_DETAILS.venue}</div>
                <div className="text-xs text-slate-400">{EVENT_DETAILS.location}</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Column */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
          <div className="w-full max-w-sm bg-gradient-to-b from-slate-900/90 to-slate-950 border border-amber-500/30 p-6 rounded-2xl text-center space-y-5 shadow-xl">
            <div className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
              Афиша Спектакля
            </div>
            <div className="text-2xl font-black text-amber-100">
              Спектакль «Рамаяна»
            </div>
            <p className="text-xs text-slate-400">
              Узнайте подробности программы, состав актеров и расписание на официальном портале правительства Москвы
            </p>

            <a
              href={EVENT_DETAILS.link}
              target="_blank"
              rel="noopener noreferrer"
              id="official-event-link-button"
              className="group relative inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Перейти к Афише</span>
              <ExternalLink className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <div className="text-[11px] text-amber-300/70 italic flex items-center justify-center gap-1">
              <Clock className="w-3 h-3 text-amber-400" />
              Москва, Парк Горького • Театральный бульвар
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
