import React, { useState } from 'react';
import { SCENES, EVENT_DETAILS } from './data/scenes';
import { Scene, CategoryFilter, ViewMode } from './types';
import { getImageUrl } from './utils/imageUtils';
import { Header } from './components/Header';
import { SceneCard } from './components/SceneCard';
import { SceneModal } from './components/SceneModal';
import { Timeline } from './components/Timeline';
import { InvitationBanner } from './components/InvitationBanner';
import { ParticleBackground } from './components/ParticleBackground';
import { AudioPlayer } from './components/AudioPlayer';
import { Sparkles, Calendar, MapPin, ExternalLink, Heart, Shield, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [activeModalScene, setActiveModalScene] = useState<Scene | null>(null);
  const [activeTimelineSceneId, setActiveTimelineSceneId] = useState<number>(1);

  // Filter scenes
  const filteredScenes = SCENES.filter((scene) => {
    if (selectedCategory === 'all') return true;
    return scene.category === selectedCategory;
  });

  const handleOpenModal = (scene: Scene) => {
    setActiveModalScene(scene);
    setActiveTimelineSceneId(scene.id);
  };

  const handleNextModal = () => {
    if (!activeModalScene) return;
    const currentIndex = SCENES.findIndex((s) => s.id === activeModalScene.id);
    const nextIndex = (currentIndex + 1) % SCENES.length;
    setActiveModalScene(SCENES[nextIndex]);
    setActiveTimelineSceneId(SCENES[nextIndex].id);
  };

  const handlePrevModal = () => {
    if (!activeModalScene) return;
    const currentIndex = SCENES.findIndex((s) => s.id === activeModalScene.id);
    const prevIndex = (currentIndex - 1 + SCENES.length) % SCENES.length;
    setActiveModalScene(SCENES[prevIndex]);
    setActiveTimelineSceneId(SCENES[prevIndex].id);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      {/* Golden Sparkles Particle Effect */}
      <ParticleBackground />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pb-20">
        {/* Header Section */}
        <Header
          currentFilter={selectedCategory}
          onFilterChange={setSelectedCategory}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {/* Hero Sugriva & Event Feature Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/30 p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                Театральный Бульвар • Парк Горького
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-100">
                1 августа в Москве мы вас приглашаем!
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Приглашаем зрителей и ценителей культуры на Сцену Пушкинской набережной. Вас ждет полное живое погружение в истории Рамы, Ситы, царя обезьян Сугривы и преданного Ханумана!
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={EVENT_DETAILS.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="sugriva-banner-invite-button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all"
                >
                  <span>Забронировать в Афише</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Sugriva Image Spotlight */}
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="relative w-40 sm:w-48 aspect-square rounded-2xl overflow-hidden border border-amber-500/40 bg-slate-950 shadow-xl group">
                <img
                  src={getImageUrl(SCENES[5]?.image)}
                  alt="Царь Сугрива"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-center bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded-lg border border-amber-500/30">
                  <span className="text-[11px] font-bold text-amber-300">Царь Ванаров Сугрива</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View Switcher Output */}
        {viewMode === 'timeline' ? (
          <Timeline
            scenes={SCENES}
            activeSceneId={activeTimelineSceneId}
            onSelectScene={(scene) => {
              setActiveTimelineSceneId(scene.id);
              setActiveModalScene(scene);
            }}
          />
        ) : (
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-400 font-medium">
                Показано <span className="text-amber-300 font-bold">{filteredScenes.length}</span> из {SCENES.length} сцен
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredScenes.map((scene, index) => (
                <SceneCard
                  key={scene.id}
                  scene={scene}
                  index={index}
                  onClick={handleOpenModal}
                />
              ))}
            </div>
          </section>
        )}

        {/* Invitation Banner Section */}
        <InvitationBanner isFooter={true} />

        {/* Footer */}
        <footer className="pt-8 border-t border-slate-900 text-center space-y-4 text-xs text-slate-500">
          <p className="max-w-xl mx-auto leading-relaxed">
            Московский фестиваль «Театральный бульвар» • 1 августа • Сцена на Пушкинской набережной в Парке Горького
          </p>
          <div className="flex items-center justify-center gap-4 text-amber-400/80 font-medium">
            <a
              href={EVENT_DETAILS.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1"
            >
              <span>Официальная Афиша teatr.mos.ru</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </footer>
      </div>

      {/* Detail Modal */}
      <SceneModal
        scene={activeModalScene}
        onClose={() => setActiveModalScene(null)}
        onNext={handleNextModal}
        onPrev={handlePrevModal}
        totalScenes={SCENES.length}
      />

      {/* Floating Audio Player */}
      <AudioPlayer
        currentSceneTitle={activeModalScene?.title}
        currentSceneStory={activeModalScene?.fullStory}
      />
    </div>
  );
}
