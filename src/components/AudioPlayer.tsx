import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Radio } from 'lucide-react';

export const AudioPlayer: React.FC<{
  currentSceneTitle?: string;
  currentSceneStory?: string;
}> = ({ currentSceneTitle, currentSceneStory }) => {
  const [isPlayingAmbient, setIsPlayingAmbient] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleAmbient = () => {
    if (isPlayingAmbient) {
      stopAmbient();
    } else {
      startAmbient();
    }
  };

  const startAmbient = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Tanpura/Sitar Pentatonic D-Drone frequencies (D3, A3, D4, F#4)
      const freqs = [146.83, 220.0, 293.66, 369.99];
      oscillatorsRef.current = [];

      freqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Subtle LFO modulation for warm organic shimmer
        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.2 + i * 0.1, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(0.02, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(oscGain.gain);
        lfo.start();

        oscGain.gain.setValueAtTime(0.03, ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();

        oscillatorsRef.current.push(osc);
      });

      setIsPlayingAmbient(true);
    } catch (e) {
      console.warn("Audio Context init error:", e);
    }
  };

  const stopAmbient = () => {
    oscillatorsRef.current.forEach(osc => {
      try {
        osc.stop();
      } catch {
        // ignore
      }
    });
    oscillatorsRef.current = [];
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlayingAmbient(false);
  };

  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else if (currentSceneStory) {
      window.speechSynthesis.cancel();
      const textToRead = `${currentSceneTitle || ''}. ${currentSceneStory}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'ru-RU';
      utterance.rate = 0.92;
      utterance.pitch = 1.0;

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  useEffect(() => {
    return () => {
      stopAmbient();
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-amber-500/30 p-2 rounded-full shadow-2xl shadow-amber-950/50">
      <button
        onClick={toggleAmbient}
        id="toggle-ambient-audio"
        title={isPlayingAmbient ? "Выключить атмосферный дрон" : "Включить атмосферное звучание"}
        className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
          isPlayingAmbient
            ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
            : 'bg-slate-800 text-amber-300 hover:bg-slate-700 hover:text-amber-200'
        }`}
      >
        {isPlayingAmbient ? (
          <>
            <Radio className="w-4 h-4 animate-pulse" />
            <span className="hidden sm:inline">Звуки Рамаяны</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Атмосфера</span>
          </>
        )}
      </button>

      {currentSceneStory && 'speechSynthesis' in window && (
        <button
          onClick={toggleSpeech}
          id="toggle-speech-narration"
          title={isSpeaking ? "Остановить чтение" : "Прослушать сказание (Голосовой гид)"}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
            isSpeaking
              ? 'bg-rose-600 text-white animate-pulse'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-amber-300'
          }`}
        >
          <Volume2 className={`w-4 h-4 ${isSpeaking ? 'animate-bounce' : ''}`} />
          <span className="hidden sm:inline">{isSpeaking ? 'Читает...' : 'Голос'}</span>
        </button>
      )}
    </div>
  );
};
