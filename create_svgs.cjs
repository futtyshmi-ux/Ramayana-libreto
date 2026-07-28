const fs = require('fs');
const path = require('path');

const scenesData = [
  {
    id: 1,
    file: 's1.svg',
    act: 'АКТ I',
    title: 'СВАЯМВАРА',
    subtitle: 'Поднятие Священного Лука Шивы',
    color1: '#0d2818',
    color2: '#05130b',
    accent: '#d9a441',
    svgContent: `
      <!-- Shiva's Bow Breaking -->
      <g transform="translate(600, 310)" text-anchor="middle">
        <!-- Celestial Aura -->
        <circle cx="0" cy="0" r="180" fill="url(#goldGlow)" />
        <circle cx="0" cy="0" r="220" stroke="#d9a441" stroke-width="1" stroke-dasharray="8 6" opacity="0.4" fill="none" />
        
        <!-- Sacred Bow Left Arc -->
        <path d="M -160 40 C -120 -100 -40 -160 -10 -180 C -5 -120 -40 -40 -100 50 Z" fill="url(#goldGrad)" />
        <!-- Sacred Bow Right Arc -->
        <path d="M 160 40 C 120 -100 40 -160 10 -180 C 5 -120 40 -40 100 50 Z" fill="url(#goldGrad)" />
        
        <!-- Lightning Crack at Center -->
        <path d="M 0 -210 L -15 -140 L 10 -80 L -10 -20 L 15 40 L 0 100" stroke="#ffffff" stroke-width="4" fill="none" filter="drop-shadow(0 0 10px #ffe29a)" />
        <path d="M 0 -210 L -15 -140 L 10 -80 L -10 -20 L 15 40 L 0 100" stroke="#ffe29a" stroke-width="10" opacity="0.5" fill="none" />

        <!-- Lotus Pedestal -->
        <path d="M -120 120 C -60 80 60 80 120 120 C 80 160 -80 160 -120 120 Z" fill="#1e3a29" stroke="#d9a441" stroke-width="2" />
        <!-- Rays -->
        <g stroke="#f0cf8e" stroke-width="1.5" opacity="0.6">
          <line x1="0" y1="0" x2="-250" y2="-150" />
          <line x1="0" y1="0" x2="250" y2="-150" />
          <line x1="0" y1="0" x2="-280" y2="0" />
          <line x1="0" y1="0" x2="280" y2="0" />
          <line x1="0" y1="0" x2="0" y2="-280" />
        </g>
      </g>
    `
  },
  {
    id: 2,
    file: 's2.svg',
    act: 'АКТ I',
    title: 'СВАДЬБА СИТЫ И РАМЫ',
    subtitle: 'Священный Огонь и Соединение Сердец',
    color1: '#211005',
    color2: '#0b0502',
    accent: '#f59e0b',
    svgContent: `
      <!-- Sacred Yajna Fire and Floral Mandap -->
      <g transform="translate(600, 310)">
        <circle cx="0" cy="0" r="200" fill="url(#fireGlow)" />
        
        <!-- Mandap Arches -->
        <path d="M -260 140 C -200 -180 200 -180 260 140" fill="none" stroke="#d9a441" stroke-width="3" />
        <path d="M -230 140 C -180 -150 180 -150 230 140" fill="none" stroke="#d9a441" stroke-width="1" stroke-dasharray="6 4" opacity="0.6" />

        <!-- Fire Kund Altar -->
        <polygon points="-100,120 100,120 130,160 -130,160" fill="#381304" stroke="#d9a441" stroke-width="2" />
        <polygon points="-80,120 80,120 100,140 -100,140" fill="#541c06" stroke="#f0cf8e" stroke-width="1" />

        <!-- Flames -->
        <path d="M 0 120 C -40 60 -20 0 0 -60 C 20 0 40 60 0 120 Z" fill="url(#flameGrad)" />
        <path d="M -20 120 C -50 70 -10 20 -15 -20 C 10 20 10 70 -20 120 Z" fill="#ffea79" opacity="0.8" />
        <path d="M 20 120 C -10 70 30 20 15 -20 C 50 20 30 70 20 120 Z" fill="#ff9900" opacity="0.8" />

        <!-- Wedding Garlands (Mala) Circles -->
        <circle cx="-110" cy="-30" r="50" fill="none" stroke="#f43f5e" stroke-width="4" stroke-dasharray="10 8" />
        <circle cx="110" cy="-30" r="50" fill="none" stroke="#f43f5e" stroke-width="4" stroke-dasharray="10 8" />
      </g>
    `
  },
  {
    id: 3,
    file: 's3.svg',
    act: 'АКТ II',
    title: 'ЗАГОВОР И ИЗГНАНИЕ',
    subtitle: 'Темные Чары Мантхары и Клятвы Кайкеи',
    color1: '#1a1024',
    color2: '#08040d',
    accent: '#a855f7',
    svgContent: `
      <!-- Palace Shadows and Crown in Sorrow -->
      <g transform="translate(600, 310)">
        <circle cx="0" cy="0" r="210" fill="url(#purpleGlow)" />
        
        <!-- Palace Pillars Silhouette -->
        <rect x="-280" y="-180" width="40" height="320" fill="#12091c" stroke="#582182" stroke-width="1" />
        <rect x="240" y="-180" width="40" height="320" fill="#12091c" stroke="#582182" stroke-width="1" />

        <!-- Royal Crown on Cushion -->
        <path d="M -100 130 Q 0 110 100 130 L 120 160 Q 0 170 -120 160 Z" fill="#3b0764" stroke="#d9a441" stroke-width="2" />
        
        <path d="M -80 110 L -100 30 L -50 70 L 0 10 L 50 70 L 100 30 L 80 110 Z" fill="url(#goldGrad)" stroke="#fef08a" stroke-width="2" />
        <circle cx="0" cy="10" r="8" fill="#e11d48" />
        <circle cx="-100" cy="30" r="6" fill="#38bdf8" />
        <circle cx="100" cy="30" r="6" fill="#38bdf8" />

        <!-- Crescent Moon of Sadness -->
        <path d="M 0 -180 A 70 70 0 0 0 -70 -110 A 90 90 0 0 1 20 -180 Z" fill="#e9d5ff" opacity="0.7" />
      </g>
    `
  },
  {
    id: 4,
    file: 's4.svg',
    act: 'АКТ II',
    title: 'ШУРПАНАКХА В ЛЕСУ ДАНДАКА',
    subtitle: 'Испытание в Глуши и Отпор Демонице',
    color1: '#071f17',
    color2: '#020b08',
    accent: '#10b981',
    svgContent: `
      <!-- Deep Jungle Radar and Sacred Hut -->
      <g transform="translate(600, 310)">
        <!-- Radar Map Circles as seen in user's screenshot -->
        <circle cx="0" cy="-20" r="220" stroke="#10b981" stroke-width="1" fill="none" opacity="0.25" />
        <circle cx="0" cy="-20" r="160" stroke="#d9a441" stroke-width="1.5" stroke-dasharray="6 6" fill="none" opacity="0.4" />
        <circle cx="0" cy="-20" r="100" stroke="#10b981" stroke-width="1" fill="none" opacity="0.3" />

        <!-- Mountain / Jungle Silhouettes -->
        <path d="M -350 160 C -250 20 -150 120 -50 60 C 50 0 180 140 350 160 Z" fill="#062e21" opacity="0.8" />
        <path d="M -300 160 C -180 60 -80 140 0 80 C 100 20 220 100 300 160 Z" fill="#0b4532" opacity="0.9" />

        <!-- Glowing Nodes -->
        <circle cx="-110" cy="-80" r="6" fill="#6ee7b7" filter="drop-shadow(0 0 8px #6ee7b7)" />
        <circle cx="0" cy="-20" r="9" fill="#fcd34d" filter="drop-shadow(0 0 10px #fcd34d)" />
        <circle cx="120" cy="-60" r="6" fill="#6ee7b7" filter="drop-shadow(0 0 8px #6ee7b7)" />

        <!-- Hermitage Hut Silhouette -->
        <polygon points="-60,160 0,90 60,160" fill="#041c14" stroke="#d9a441" stroke-width="2" />
        <rect x="-30" y="120" width="60" height="40" fill="#020d09" stroke="#10b981" stroke-width="1" />
      </g>
    `
  },
  {
    id: 5,
    file: 's5.svg',
    act: 'АКТ II',
    title: 'ЗОЛОТОЙ ОЛЕНЬ И ПОХИЩЕНИЕ',
    subtitle: 'Коварство Раваны и Потеря Ситы',
    color1: '#261a06',
    color2: '#0f0a02',
    accent: '#f39c12',
    svgContent: `
      <!-- Golden Deer & Lakshmana Rekha Line -->
      <g transform="translate(600, 310)">
        <circle cx="0" cy="0" r="210" fill="url(#goldGlow)" />

        <!-- Protective Lakshmana Rekha Line -->
        <path d="M -280 130 L 280 130" stroke="#fcd34d" stroke-width="4" filter="drop-shadow(0 0 12px #fcd34d)" />
        <path d="M -280 130 L 280 130" stroke="#ffffff" stroke-width="1.5" />

        <!-- Golden Deer Silhouette -->
        <g transform="translate(0, -10)">
          <!-- Body -->
          <path d="M -50 50 Q -30 20 0 30 Q 40 10 70 40 Q 80 80 50 90 Q -20 100 -50 50 Z" fill="url(#goldGrad)" stroke="#fff" stroke-width="1" />
          <!-- Neck & Head -->
          <path d="M 50 40 C 70 10 60 -30 80 -60 C 90 -40 100 -20 85 20 Z" fill="url(#goldGrad)" />
          <!-- Antlers with Magic Sparkles -->
          <path d="M 80 -60 C 70 -110 50 -130 30 -140 M 80 -80 C 60 -100 40 -110 20 -110" stroke="#fef08a" stroke-width="3" fill="none" />
          <path d="M 80 -60 C 100 -110 120 -130 140 -140 M 80 -80 C 100 -100 120 -110 140 -110" stroke="#fef08a" stroke-width="3" fill="none" />
          <!-- Magical Stars around antler -->
          <circle cx="30" cy="-140" r="5" fill="#ffffff" filter="drop-shadow(0 0 8px #fff)" />
          <circle cx="140" cy="-140" r="5" fill="#ffffff" filter="drop-shadow(0 0 8px #fff)" />
        </g>
      </g>
    `
  },
  {
    id: 6,
    file: 's6.svg',
    act: 'АКТ III',
    title: 'ВСТРЕЧА С СУГРИВОЙ И ХАНУМАНОМ',
    subtitle: 'Братство с Лесной Армией Ванаров',
    color1: '#1b1d0c',
    color2: '#0b0c04',
    accent: '#84cc16',
    svgContent: `
      <!-- Sacred Mountain Rishyamuka and Hanuman's Mace -->
      <g transform="translate(600, 310)">
        <circle cx="0" cy="0" r="200" fill="url(#limeGlow)" />

        <!-- Mountain Peaks -->
        <polygon points="-280,160 -100,-80 40,160" fill="#1c250a" stroke="#84cc16" stroke-width="1.5" />
        <polygon points="-60,160 120,-120 280,160" fill="#29380d" stroke="#d9a441" stroke-width="2" />

        <!-- Hanuman's Gada (Mace) of Power -->
        <g transform="translate(0, 10)">
          <!-- Handle -->
          <line x1="0" y1="120" x2="0" y2="-60" stroke="#d9a441" stroke-width="10" stroke-linecap="round" />
          <line x1="0" y1="120" x2="0" y2="-60" stroke="#fef08a" stroke-width="4" stroke-linecap="round" />
          <!-- Mace Head -->
          <circle cx="0" cy="-80" r="45" fill="url(#goldGrad)" stroke="#fef08a" stroke-width="3" filter="drop-shadow(0 0 15px #a3e635)" />
          <path d="M -45 -80 L 45 -80 M 0 -125 L 0 -35" stroke="#78350f" stroke-width="3" />
        </g>
      </g>
    `
  },
  {
    id: 7,
    file: 's7.svg',
    act: 'АКТ III',
    title: 'ПРЫЖОК ХАНУМАНА ЧЕРЕЗ ОКЕАН',
    subtitle: 'Преодоление Стихии и Небесный Полет',
    color1: '#0a192f',
    color2: '#030a16',
    accent: '#38bdf8',
    svgContent: `
      <!-- Leaping over Ocean Waves under Starry Sky -->
      <g transform="translate(600, 310)">
        <circle cx="0" cy="-20" r="210" fill="url(#blueGlow)" />

        <!-- Ocean Waves at Bottom -->
        <path d="M -300 120 C -200 80 -100 160 0 120 C 100 80 200 160 300 120 L 300 180 L -300 180 Z" fill="#032b45" />
        <path d="M -300 140 C -150 100 -50 170 50 130 C 150 90 250 170 350 140 L 350 180 L -300 180 Z" fill="#075985" opacity="0.8" />

        <!-- Trajectory Arc -->
        <path d="M -220 120 Q 0 -220 220 60" fill="none" stroke="#38bdf8" stroke-width="3" stroke-dasharray="8 6" filter="drop-shadow(0 0 10px #38bdf8)" />

        <!-- Hanuman Leaping Sun/Star symbol -->
        <circle cx="150" cy="-60" r="25" fill="#fcd34d" filter="drop-shadow(0 0 20px #fcd34d)" />
        <!-- Flying aura rays -->
        <path d="M -150 60 L 120 -50" stroke="#bae6fd" stroke-width="6" opacity="0.6" stroke-linecap="round" />
        <path d="M -180 80 L 90 -30" stroke="#bae6fd" stroke-width="3" opacity="0.4" stroke-linecap="round" />
      </g>
    `
  },
  {
    id: 8,
    file: 's8.svg',
    act: 'АКТ III',
    title: 'ХАНУМАН В САДУ АШОКА',
    subtitle: 'Кольцо Верности и Огненная Ланка',
    color1: '#2a080c',
    color2: '#120204',
    accent: '#f43f5e',
    svgContent: `
      <!-- Ring of Rama & Flame over Lanka Palaces -->
      <g transform="translate(600, 310)">
        <circle cx="0" cy="0" r="200" fill="url(#redGlow)" />

        <!-- Golden Ring of Rama -->
        <circle cx="0" cy="-30" r="80" fill="none" stroke="url(#goldGrad)" stroke-width="16" filter="drop-shadow(0 0 15px #f59e0b)" />
        <circle cx="0" cy="-30" r="80" fill="none" stroke="#fff" stroke-width="3" />
        <!-- Gem on Ring -->
        <polygon points="0,-125 -20,-105 0,-85 20,-105" fill="#ef4444" stroke="#fff" stroke-width="2" />

        <!-- Burning Palaces Silhouette Below -->
        <path d="M -220 160 L -180 80 L -140 160 L -100 60 L -60 160 L 0 40 L 60 160 L 100 80 L 140 160 L 180 90 L 220 160 Z" fill="#450a0a" stroke="#f43f5e" stroke-width="2" />
        <!-- Flames rising from Lanka -->
        <path d="M -100 160 Q -60 90 -80 50 Q -40 100 0 30 Q 40 100 80 50 Q 60 110 100 160 Z" fill="url(#flameGrad)" opacity="0.8" />
      </g>
    `
  },
  {
    id: 9,
    file: 's9.svg',
    act: 'АКТ IV',
    title: 'МОСТ РАМА СЕТУ',
    subtitle: 'Плавающие Камни с Именем Рамы',
    color1: '#071829',
    color2: '#020a12',
    accent: '#0284c7',
    svgContent: `
      <!-- Floating Stone Bridge over Oceans -->
      <g transform="translate(600, 310)">
        <circle cx="0" cy="0" r="210" fill="url(#blueGlow)" />

        <!-- Ocean Waves -->
        <rect x="-300" y="40" width="600" height="130" fill="#032b45" />

        <!-- Rama Setu Bridge Stones -->
        <g transform="translate(0, 20)">
          <ellipse cx="-200" cy="40" rx="45" ry="25" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
          <text x="-200" y="45" text-anchor="middle" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="#fcd34d">РАМА</text>

          <ellipse cx="-110" cy="30" rx="48" ry="26" fill="#334155" stroke="#38bdf8" stroke-width="2" />
          <text x="-110" y="35" text-anchor="middle" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="#fcd34d">РАМА</text>

          <ellipse cx="-15" cy="20" rx="52" ry="28" fill="#1e293b" stroke="#fcd34d" stroke-width="2.5" filter="drop-shadow(0 0 10px #fcd34d)" />
          <text x="-15" y="26" text-anchor="middle" font-family="Georgia, serif" font-size="18" font-weight="bold" fill="#ffffff">РАМА</text>

          <ellipse cx="80" cy="30" rx="48" ry="26" fill="#334155" stroke="#38bdf8" stroke-width="2" />
          <text x="80" y="35" text-anchor="middle" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="#fcd34d">РАМА</text>

          <ellipse cx="175" cy="40" rx="45" ry="25" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
          <text x="175" y="45" text-anchor="middle" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="#fcd34d">РАМА</text>
        </g>
      </g>
    `
  },
  {
    id: 10,
    file: 's10.svg',
    act: 'АКТ IV',
    title: 'ВЕЛИКАЯ БИТВА НА ЛАНКЕ',
    subtitle: 'Гора Сандживани и Подвиг Ханумана',
    color1: '#2b1704',
    color2: '#120901',
    accent: '#eab308',
    svgContent: `
      <!-- Hanuman Holding Sanjivani Mountain -->
      <g transform="translate(600, 310)">
        <circle cx="0" cy="-20" r="210" fill="url(#goldGlow)" />

        <!-- Sacred Mountain Dronagiri carried on Palm -->
        <g transform="translate(0, -50)">
          <!-- Mountain Mass -->
          <polygon points="-160,60 0,-100 160,60" fill="#2d3748" stroke="#f59e0b" stroke-width="3" />
          <polygon points="-100,60 0,-100 40,60" fill="#4a5568" />
          <!-- Glowing Sanjivani Herbs on Mountain -->
          <circle cx="-40" cy="-20" r="8" fill="#4ade80" filter="drop-shadow(0 0 10px #4ade80)" />
          <circle cx="20" cy="-40" r="10" fill="#4ade80" filter="drop-shadow(0 0 12px #4ade80)" />
          <circle cx="50" cy="10" r="7" fill="#4ade80" filter="drop-shadow(0 0 8px #4ade80)" />
          <circle cx="-70" cy="20" r="9" fill="#4ade80" filter="drop-shadow(0 0 10px #4ade80)" />
        </g>

        <!-- Giant Open Hand Palm holding Mountain -->
        <path d="M -120 70 C -80 130 80 130 120 70 L 80 150 L -80 150 Z" fill="#78350f" stroke="#d9a441" stroke-width="2" />
      </g>
    `
  },
  {
    id: 11,
    file: 's11.svg',
    act: 'АКТ IV',
    title: 'ПОБЕДА НАД РАВАНОЙ',
    subtitle: 'Божественная Стрела Брахмастра',
    color1: '#360c02',
    color2: '#140300',
    accent: '#ef4444',
    svgContent: `
      <!-- Divine Arrow Brahmastra Striking Darkness -->
      <g transform="translate(600, 310)">
        <circle cx="0" cy="0" r="220" fill="url(#redGlow)" />

        <!-- Cosmic Explosion Rays -->
        <g stroke="#fca5a5" stroke-width="2" opacity="0.8">
          <line x1="0" y1="0" x2="-260" y2="-180" />
          <line x1="0" y1="0" x2="260" y2="-180" />
          <line x1="0" y1="0" x2="-280" y2="120" />
          <line x1="0" y1="0" x2="280" y2="120" />
          <line x1="0" y1="0" x2="0" y2="-280" />
          <line x1="0" y1="0" x2="0" y2="280" />
        </g>

        <!-- Brahmastra Golden Arrow -->
        <line x1="-240" y1="120" x2="180" y2="-100" stroke="#fcd34d" stroke-width="8" filter="drop-shadow(0 0 15px #fcd34d)" />
        <line x1="-240" y1="120" x2="180" y2="-100" stroke="#ffffff" stroke-width="3" />
        <!-- Arrow Tip Burst -->
        <polygon points="180,-100 140,-130 220,-120 190,-60" fill="#ffffff" filter="drop-shadow(0 0 20px #ffffff)" />

        <!-- 10 Crowns of Ravana Falling in Background -->
        <g fill="#7f1d1d" opacity="0.5" stroke="#f87171" stroke-width="1">
          <polygon points="-180,-80 -160,-120 -140,-80" />
          <polygon points="-130,-110 -110,-150 -90,-110" />
          <polygon points="100,-110 120,-150 140,-110" />
          <polygon points="150,-80 170,-120 190,-80" />
        </g>
      </g>
    `
  },
  {
    id: 12,
    file: 's12.svg',
    act: 'АКТ V',
    title: 'ВОЗВРАЩЕНИЕ В АЙОДХЬЮ',
    subtitle: 'Небесная Колесница Пушпака и Священные Сандалии',
    color1: '#1e142e',
    color2: '#0a0612',
    accent: '#c084fc',
    svgContent: `
      <!-- Flying Flying Pushpaka Vimana Chariot & Paduka Slippers -->
      <g transform="translate(600, 310)">
        <circle cx="0" cy="-30" r="210" fill="url(#purpleGlow)" />

        <!-- Flying Chariot Pushpaka in Stars -->
        <g transform="translate(0, -60)">
          <!-- Chariot Dome -->
          <path d="M -120 40 Q 0 -80 120 40 Z" fill="url(#goldGrad)" stroke="#fff" stroke-width="2" />
          <path d="M -80 40 Q 0 -40 80 40 Z" fill="#581c87" />
          <!-- Wheels -->
          <circle cx="-80" cy="50" r="25" fill="none" stroke="#fcd34d" stroke-width="4" />
          <circle cx="80" cy="50" r="25" fill="none" stroke="#fcd34d" stroke-width="4" />
        </g>

        <!-- Sacred Golden Paduka (Sandals of Rama) on Pedestal -->
        <g transform="translate(0, 90)">
          <rect x="-90" y="10" width="180" height="20" fill="#3b0764" stroke="#d9a441" stroke-width="2" />
          <!-- Left Sandal -->
          <ellipse cx="-35" cy="0" rx="18" ry="32" fill="url(#goldGrad)" stroke="#fff" stroke-width="1.5" />
          <circle cx="-35" cy="-18" r="6" fill="#fcd34d" />
          <!-- Right Sandal -->
          <ellipse cx="35" cy="0" rx="18" ry="32" fill="url(#goldGrad)" stroke="#fff" stroke-width="1.5" />
          <circle cx="35" cy="-18" r="6" fill="#fcd34d" />
        </g>
      </g>
    `
  },
  {
    id: 13,
    file: 's13.svg',
    act: 'АКТ V',
    title: 'КОРОНАЦИЯ И ДИВАЛИ',
    subtitle: 'Праздник Тысяч Огней и Эра Рама-раджья',
    color1: '#2e1903',
    color2: '#120900',
    accent: '#f59e0b',
    svgContent: `
      <!-- Coronation Crown & Glowing Diya Lamps of Diwali -->
      <g transform="translate(600, 310)">
        <circle cx="0" cy="-20" r="220" fill="url(#goldGlow)" />

        <!-- Grand Coronation Crown -->
        <g transform="translate(0, -60)">
          <path d="M -110 60 L -130 -30 L -60 20 L 0 -70 L 60 20 L 130 -30 L 110 60 Z" fill="url(#goldGrad)" stroke="#ffffff" stroke-width="2.5" filter="drop-shadow(0 0 20px #f59e0b)" />
          <circle cx="0" cy="-70" r="10" fill="#ef4444" />
          <circle cx="-130" cy="-30" r="8" fill="#3b82f6" />
          <circle cx="130" cy="-30" r="8" fill="#3b82f6" />
        </g>

        <!-- Array of Diwali Diya Lamps Below -->
        <g transform="translate(0, 110)">
          <!-- Center Main Diya -->
          <path d="M -50 20 C -40 50 40 50 50 20 Z" fill="#78350f" stroke="#fcd34d" stroke-width="2" />
          <path d="M 0 20 C -15 -10 0 -40 0 -40 C 0 -40 15 -10 0 20 Z" fill="#ffaa00" filter="drop-shadow(0 0 15px #ffaa00)" />
          <path d="M 0 20 C -8 0 0 -25 0 -25 C 0 -25 8 0 0 20 Z" fill="#ffffff" />

          <!-- Left Diya -->
          <g transform="translate(-140, 10) scale(0.7)">
            <path d="M -50 20 C -40 50 40 50 50 20 Z" fill="#78350f" stroke="#fcd34d" stroke-width="2" />
            <path d="M 0 20 C -15 -10 0 -40 0 -40 C 0 -40 15 -10 0 20 Z" fill="#ffaa00" filter="drop-shadow(0 0 12px #ffaa00)" />
          </g>

          <!-- Right Diya -->
          <g transform="translate(140, 10) scale(0.7)">
            <path d="M -50 20 C -40 50 40 50 50 20 Z" fill="#78350f" stroke="#fcd34d" stroke-width="2" />
            <path d="M 0 20 C -15 -10 0 -40 0 -40 C 0 -40 15 -10 0 20 Z" fill="#ffaa00" filter="drop-shadow(0 0 12px #ffaa00)" />
          </g>
        </g>
      </g>
    `
  }
];

scenesData.forEach((scene) => {
  const fullSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${scene.color1}"/>
      <stop offset="100%" stop-color="${scene.color2}"/>
    </linearGradient>
    
    <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffd880" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="fireGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ff9900" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="purpleGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#c084fc" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="blueGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="limeGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#a3e635" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="redGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f87171" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8a6a2a"/>
      <stop offset="50%" stop-color="#f0cf8e"/>
      <stop offset="100%" stop-color="#d9a441"/>
    </linearGradient>

    <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#dc2626"/>
      <stop offset="50%" stop-color="#f97316"/>
      <stop offset="100%" stop-color="#fef08a"/>
    </linearGradient>

    <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${scene.accent}" stroke-width="0.5" stroke-opacity="0.1"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="675" fill="url(#bgGrad)"/>
  <rect width="1200" height="675" fill="url(#gridPattern)"/>

  <!-- Concentric Constellation Radar Rings (matching user's reference screenshot) -->
  <g stroke="${scene.accent}" stroke-width="1" fill="none" opacity="0.2">
    <circle cx="600" cy="310" r="270"/>
    <circle cx="600" cy="310" r="210" stroke-dasharray="6 6"/>
    <circle cx="600" cy="310" r="150"/>
  </g>

  <!-- Scene Specific Center Illustration -->
  ${scene.svgContent}

  <!-- Decorative Outer Frame -->
  <rect x="25" y="25" width="1150" height="625" fill="none" stroke="url(#goldGrad)" stroke-width="2" stroke-opacity="0.5"/>
  <rect x="35" y="35" width="1130" height="605" fill="none" stroke="url(#goldGrad)" stroke-width="1" stroke-opacity="0.25"/>

  <!-- Gold Corner Ornaments -->
  <path d="M 25 65 L 25 25 L 65 25" fill="none" stroke="url(#goldGrad)" stroke-width="4"/>
  <path d="M 1175 65 L 1175 25 L 1135 25" fill="none" stroke="url(#goldGrad)" stroke-width="4"/>
  <path d="M 25 610 L 25 650 L 65 650" fill="none" stroke="url(#goldGrad)" stroke-width="4"/>
  <path d="M 1175 610 L 1175 650 L 1135 650" fill="none" stroke="url(#goldGrad)" stroke-width="4"/>

  <!-- Header Badge Text -->
  <text x="600" y="560" text-anchor="middle" font-family="'Georgia', serif" font-size="18" fill="${scene.accent}" letter-spacing="5" opacity="0.95">${scene.act} · ${scene.title}</text>

  <!-- Main Title Text -->
  <text x="600" y="608" text-anchor="middle" font-family="'Georgia', serif" font-size="30" font-weight="bold" fill="#ffffff" letter-spacing="2">${scene.subtitle}</text>
</svg>`;

  fs.writeFileSync(path.join(__dirname, 'public', scene.file), fullSvg);
  console.log('Generated:', scene.file);
});
