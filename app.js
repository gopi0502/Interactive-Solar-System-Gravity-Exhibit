/**
 * Solar System & Gravity Exhibit - Unified High-Performance Application Bundle
 * Designed for 100% offline reliability, zero CORS restrictions on file://,
 * fast procedural textures, realistic Three.js orbits, and N-body physics.
 */

// ==========================================
// 1. ASTRODYNAMICAL & PHYSICAL CONSTANTS
// ==========================================
const CELESTIAL_BODIES = [
  {
    id: 'sun',
    name: 'The Sun',
    subtitle: 'Yellow Dwarf Star (G2V)',
    type: 'Star',
    radiusKm: 696340,
    relativeRadius: 109.2,
    exhibitRadius: 15.0,
    colorHex: '#ffaa00',
    accentColor: '#ffe066',
    emissive: true,
    massKg: 1.989e30,
    massEarths: 333000,
    surfaceGravity: 274.0,
    gravityRelative: 27.9,
    orbitalDistanceAU: 0,
    orbitalDistanceMillionKm: 0,
    exhibitOrbitDistance: 0,
    orbitalPeriodDays: 0,
    orbitalSpeedKmS: 0,
    eccentricity: 0,
    inclinationDeg: 0,
    axialTiltDeg: 7.25,
    rotationPeriodHours: 609.6,
    meanTempC: 5500,
    escapeVelocityKmS: 617.5,
    moonsCount: 8,
    atmosphere: [
      { gas: 'Hydrogen (H₂)', percent: 73.46 },
      { gas: 'Helium (He)', percent: 24.85 },
      { gas: 'Oxygen (O)', percent: 0.77 },
      { gas: 'Carbon (C)', percent: 0.29 }
    ],
    overview: 'The Sun holds 99.86% of all mass in the Solar System. Its immense gravitational field anchors every planet, asteroid, and comet in orbit, generating heat and light via nuclear fusion at its core.',
    funFacts: [
      'Over 1.3 million Earths could fit inside the Sun.',
      'Photons born in the core take over 100,000 years to reach the surface, but only 8 minutes and 20 seconds to reach Earth.',
      'The solar wind creates the protective magnetic bubble called the heliosphere.'
    ]
  },
  {
    id: 'mercury',
    name: 'Mercury',
    subtitle: 'Swift Iron Planet',
    type: 'Terrestrial Planet',
    radiusKm: 2439.7,
    relativeRadius: 0.383,
    exhibitRadius: 2.2,
    colorHex: '#9ca3af',
    accentColor: '#cbd5e1',
    massKg: 3.3011e23,
    massEarths: 0.0553,
    surfaceGravity: 3.7,
    gravityRelative: 0.38,
    orbitalDistanceAU: 0.387,
    orbitalDistanceMillionKm: 57.9,
    exhibitOrbitDistance: 24,
    orbitalPeriodDays: 87.97,
    orbitalSpeedKmS: 47.36,
    eccentricity: 0.2056,
    inclinationDeg: 7.0,
    axialTiltDeg: 0.034,
    rotationPeriodHours: 1407.6,
    meanTempC: 167,
    escapeVelocityKmS: 4.25,
    moonsCount: 0,
    atmosphere: [
      { gas: 'Oxygen (O₂)', percent: 42.0 },
      { gas: 'Sodium (Na)', percent: 29.0 },
      { gas: 'Hydrogen (H₂)', percent: 22.0 }
    ],
    overview: 'Mercury is the smallest planet and closest to the Sun. It experiences extreme temperature swings and has an oversized metallic iron core occupying ~85% of its radius.',
    funFacts: [
      'Mercury rotates three times on its axis for every two orbits around the Sun (3:2 spin-orbit resonance).',
      'Water ice hides inside permanently shadowed polar craters.',
      'Mercury has an ultrathin exosphere constantly replenished by solar wind bombardment.'
    ]
  },
  {
    id: 'venus',
    name: 'Venus',
    subtitle: 'Earth’s Greenhouse Twin',
    type: 'Terrestrial Planet',
    radiusKm: 6051.8,
    relativeRadius: 0.949,
    exhibitRadius: 3.6,
    colorHex: '#eab308',
    accentColor: '#fde047',
    massKg: 4.8675e24,
    massEarths: 0.815,
    surfaceGravity: 8.87,
    gravityRelative: 0.91,
    orbitalDistanceAU: 0.723,
    orbitalDistanceMillionKm: 108.2,
    exhibitOrbitDistance: 36,
    orbitalPeriodDays: 224.7,
    orbitalSpeedKmS: 35.02,
    eccentricity: 0.0067,
    inclinationDeg: 3.39,
    axialTiltDeg: 177.36,
    rotationPeriodHours: -5832.5,
    meanTempC: 464,
    escapeVelocityKmS: 10.36,
    moonsCount: 0,
    atmosphere: [
      { gas: 'Carbon Dioxide (CO₂)', percent: 96.5 },
      { gas: 'Nitrogen (N₂)', percent: 3.5 }
    ],
    overview: 'Venus is the hottest world in the solar system, shrouded in dense sulfuric acid clouds with a crushing surface atmospheric pressure 92 times that of Earth.',
    funFacts: [
      'Venus spins in retrograde (clockwise), so the Sun rises in the west and sets in the east.',
      'A day on Venus (243 Earth days) is longer than its year (225 Earth days).',
      'The runaway greenhouse effect traps heat so intensely that Venus can melt lead.'
    ]
  },
  {
    id: 'earth',
    name: 'Earth',
    subtitle: 'The Blue Oasis of Life',
    type: 'Terrestrial Planet',
    radiusKm: 6371.0,
    relativeRadius: 1.0,
    exhibitRadius: 3.8,
    colorHex: '#38bdf8',
    accentColor: '#60a5fa',
    massKg: 5.972e24,
    massEarths: 1.0,
    surfaceGravity: 9.807,
    gravityRelative: 1.0,
    orbitalDistanceAU: 1.0,
    orbitalDistanceMillionKm: 149.6,
    exhibitOrbitDistance: 48,
    orbitalPeriodDays: 365.25,
    orbitalSpeedKmS: 29.78,
    eccentricity: 0.0167,
    inclinationDeg: 0.0,
    axialTiltDeg: 23.44,
    rotationPeriodHours: 23.934,
    meanTempC: 15,
    escapeVelocityKmS: 11.19,
    moonsCount: 1,
    atmosphere: [
      { gas: 'Nitrogen (N₂)', percent: 78.08 },
      { gas: 'Oxygen (O₂)', percent: 20.95 },
      { gas: 'Argon (Ar)', percent: 0.93 },
      { gas: 'Carbon Dioxide', percent: 0.04 }
    ],
    overview: 'The only known planet harboring life, liquid surface oceans, and a protective magnetic geodynamo shielding us from lethal cosmic radiation.',
    funFacts: [
      'Earth’s magnetic field is powered by swirling molten iron-nickel currents in its outer core.',
      'Earth is the densest major planet in our solar system (5.51 g/cm³).',
      'The Moon stabilizes Earth’s 23.4° axial tilt, which prevents catastrophic climate swings.'
    ]
  },
  {
    id: 'moon',
    name: 'The Moon (Luna)',
    subtitle: 'Earth’s Natural Satellite',
    type: 'Natural Satellite',
    radiusKm: 1737.4,
    relativeRadius: 0.273,
    exhibitRadius: 1.2,
    colorHex: '#e2e8f0',
    accentColor: '#ffffff',
    massKg: 7.342e22,
    massEarths: 0.0123,
    surfaceGravity: 1.62,
    gravityRelative: 0.166,
    orbitalDistanceAU: 0.00257,
    orbitalDistanceMillionKm: 0.384,
    exhibitOrbitDistance: 6.5,
    orbitalPeriodDays: 27.32,
    orbitalSpeedKmS: 1.022,
    eccentricity: 0.0549,
    inclinationDeg: 5.14,
    axialTiltDeg: 1.54,
    rotationPeriodHours: 655.7,
    meanTempC: -20,
    escapeVelocityKmS: 2.38,
    moonsCount: 0,
    atmosphere: [
      { gas: 'Helium (He)', percent: 29.0 },
      { gas: 'Neon (Ne)', percent: 29.0 },
      { gas: 'Hydrogen (H₂)', percent: 22.0 }
    ],
    overview: 'Earth’s only natural satellite, formed ~4.5 billion years ago from the debris of a giant collision between proto-Earth and a Mars-sized body dubbed Theia.',
    funFacts: [
      'The Moon is tidally locked to Earth, meaning the same face always points toward us.',
      'Lunar gravity is only 1/6th of Earth’s, allowing an astronaut to jump 6 times higher with 6x longer hang-time.',
      'Without weather or atmosphere, astronaut footprints in lunar dust will persist for millions of years.'
    ]
  },
  {
    id: 'mars',
    name: 'Mars',
    subtitle: 'The Dusty Red Frontier',
    type: 'Terrestrial Planet',
    radiusKm: 3389.5,
    relativeRadius: 0.532,
    exhibitRadius: 2.7,
    colorHex: '#ef4444',
    accentColor: '#f87171',
    massKg: 6.4171e23,
    massEarths: 0.107,
    surfaceGravity: 3.72,
    gravityRelative: 0.38,
    orbitalDistanceAU: 1.524,
    orbitalDistanceMillionKm: 227.9,
    exhibitOrbitDistance: 62,
    orbitalPeriodDays: 686.98,
    orbitalSpeedKmS: 24.077,
    eccentricity: 0.0934,
    inclinationDeg: 1.85,
    axialTiltDeg: 25.19,
    rotationPeriodHours: 24.623,
    meanTempC: -63,
    escapeVelocityKmS: 5.03,
    moonsCount: 2,
    atmosphere: [
      { gas: 'Carbon Dioxide (CO₂)', percent: 95.32 },
      { gas: 'Nitrogen (N₂)', percent: 2.6 },
      { gas: 'Argon (Ar)', percent: 1.9 }
    ],
    overview: 'Mars is a cold desert world with rich iron oxide surface dust, featuring Olympus Mons (the solar system’s largest volcano) and the Valles Marineris canyon system.',
    funFacts: [
      'Olympus Mons stands 21.9 km tall—nearly three times the height of Mount Everest.',
      'Mars has water ice caps at both poles and ancient dried river valley networks.',
      'A Martian day ("sol") is 24 hours, 39 minutes and 35 seconds, remarkably close to Earth.'
    ]
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    subtitle: 'King of Gas Giants',
    type: 'Gas Giant',
    radiusKm: 69911,
    relativeRadius: 10.97,
    exhibitRadius: 7.8,
    colorHex: '#f59e0b',
    accentColor: '#fbbf24',
    massKg: 1.8982e27,
    massEarths: 317.8,
    surfaceGravity: 24.79,
    gravityRelative: 2.53,
    orbitalDistanceAU: 5.204,
    orbitalDistanceMillionKm: 778.5,
    exhibitOrbitDistance: 84,
    orbitalPeriodDays: 4332.6,
    orbitalSpeedKmS: 13.07,
    eccentricity: 0.0489,
    inclinationDeg: 1.304,
    axialTiltDeg: 3.13,
    rotationPeriodHours: 9.925,
    meanTempC: -110,
    escapeVelocityKmS: 59.5,
    moonsCount: 95,
    atmosphere: [
      { gas: 'Hydrogen (H₂)', percent: 89.8 },
      { gas: 'Helium (He)', percent: 10.2 }
    ],
    overview: 'More massive than all other planets combined, Jupiter acts as a gravitational shield sweeping up comets. Its Great Red Spot is a persistent anticyclonic storm larger than Earth.',
    funFacts: [
      'Jupiter rotates in under 10 hours, creating intense coriolis forces that stretch clouds into banded jet streams.',
      'Under Jupiter’s interior pressures, hydrogen becomes a liquid metallic conductor.',
      'Its moon Europa conceals a global liquid ocean containing more water than all of Earth.'
    ]
  },
  {
    id: 'saturn',
    name: 'Saturn',
    subtitle: 'Crown Jewel of Rings',
    type: 'Gas Giant',
    radiusKm: 58232,
    relativeRadius: 9.14,
    exhibitRadius: 6.8,
    hasRings: true,
    ringInnerRadius: 8.2,
    ringOuterRadius: 15.0,
    colorHex: '#e2d398',
    accentColor: '#fef08a',
    massKg: 5.6834e26,
    massEarths: 95.2,
    surfaceGravity: 10.44,
    gravityRelative: 1.06,
    orbitalDistanceAU: 9.582,
    orbitalDistanceMillionKm: 1433.5,
    exhibitOrbitDistance: 108,
    orbitalPeriodDays: 10759.2,
    orbitalSpeedKmS: 9.68,
    eccentricity: 0.0565,
    inclinationDeg: 2.485,
    axialTiltDeg: 26.73,
    rotationPeriodHours: 10.656,
    meanTempC: -140,
    escapeVelocityKmS: 35.5,
    moonsCount: 146,
    atmosphere: [
      { gas: 'Hydrogen (H₂)', percent: 96.3 },
      { gas: 'Helium (He)', percent: 3.25 }
    ],
    overview: 'Saturn is known for its spectacular rings composed of billions of chunks of pure water ice ranging from dust motes to mountain-sized icebergs.',
    funFacts: [
      'Saturn has an average density of only 0.687 g/cm³—less than water! It would float in a giant bathtub.',
      'The main rings span 282,000 km across, yet average only about 10 meters in thickness.',
      'At Saturn’s north pole lies an enigmatic six-sided swirling jet stream called the Saturn Hexagon.'
    ]
  },
  {
    id: 'uranus',
    name: 'Uranus',
    subtitle: 'The Sideways Ice Giant',
    type: 'Ice Giant',
    radiusKm: 25362,
    relativeRadius: 3.98,
    exhibitRadius: 4.8,
    colorHex: '#38bdf8',
    accentColor: '#a5f3fc',
    massKg: 8.681e25,
    massEarths: 14.54,
    surfaceGravity: 8.69,
    gravityRelative: 0.89,
    orbitalDistanceAU: 19.22,
    orbitalDistanceMillionKm: 2872.5,
    exhibitOrbitDistance: 132,
    orbitalPeriodDays: 30685.4,
    orbitalSpeedKmS: 6.80,
    eccentricity: 0.0463,
    inclinationDeg: 0.772,
    axialTiltDeg: 97.77,
    rotationPeriodHours: -17.24,
    meanTempC: -195,
    escapeVelocityKmS: 21.3,
    moonsCount: 28,
    atmosphere: [
      { gas: 'Hydrogen (H₂)', percent: 82.5 },
      { gas: 'Helium (He)', percent: 15.2 },
      { gas: 'Methane (CH₄)', percent: 2.3 }
    ],
    overview: 'Uranus rotates almost entirely on its side (98° tilt), rolling around the Sun like a ball. Methane in its upper atmosphere gives it a calm cyan-aquamarine hue.',
    funFacts: [
      'Because of its 98° axial tilt, each pole experiences 42 years of sunlight followed by 42 years of darkness.',
      'Uranus holds the record for the coldest recorded atmospheric temperature at -224°C.',
      'All 28 known moons of Uranus are named after characters by William Shakespeare and Alexander Pope.'
    ]
  },
  {
    id: 'neptune',
    name: 'Neptune',
    subtitle: 'Supersonic Storm Giant',
    type: 'Ice Giant',
    radiusKm: 24622,
    relativeRadius: 3.86,
    exhibitRadius: 4.6,
    colorHex: '#2563eb',
    accentColor: '#60a5fa',
    massKg: 1.024e26,
    massEarths: 17.15,
    surfaceGravity: 11.15,
    gravityRelative: 1.14,
    orbitalDistanceAU: 30.05,
    orbitalDistanceMillionKm: 4495.1,
    exhibitOrbitDistance: 156,
    orbitalPeriodDays: 60189.0,
    orbitalSpeedKmS: 5.43,
    eccentricity: 0.0095,
    inclinationDeg: 1.769,
    axialTiltDeg: 28.32,
    rotationPeriodHours: 16.11,
    meanTempC: -201,
    escapeVelocityKmS: 23.5,
    moonsCount: 16,
    atmosphere: [
      { gas: 'Hydrogen (H₂)', percent: 80.0 },
      { gas: 'Helium (He)', percent: 19.0 },
      { gas: 'Methane (CH₄)', percent: 1.5 }
    ],
    overview: 'The most distant major planet in our solar system, Neptune whips up the fastest planetary winds in the solar system, topping an astonishing 2,100 km/h.',
    funFacts: [
      'Neptune was located through mathematical prediction rather than direct observation.',
      'Its largest moon Triton orbits backward and features liquid nitrogen cryovolcanoes.',
      'Neptune radiates 2.6 times more internal heat than it receives from the distant Sun.'
    ]
  },
  {
    id: 'pluto',
    name: 'Pluto',
    subtitle: 'Heart of the Kuiper Belt',
    type: 'Dwarf Planet',
    radiusKm: 1188.3,
    relativeRadius: 0.186,
    exhibitRadius: 1.4,
    colorHex: '#c084fc',
    accentColor: '#e9d5ff',
    massKg: 1.303e22,
    massEarths: 0.00218,
    surfaceGravity: 0.62,
    gravityRelative: 0.063,
    orbitalDistanceAU: 39.48,
    orbitalDistanceMillionKm: 5906.4,
    exhibitOrbitDistance: 178,
    orbitalPeriodDays: 90560.0,
    orbitalSpeedKmS: 4.67,
    eccentricity: 0.2488,
    inclinationDeg: 17.16,
    axialTiltDeg: 122.53,
    rotationPeriodHours: -153.3,
    meanTempC: -229,
    escapeVelocityKmS: 1.21,
    moonsCount: 5,
    atmosphere: [
      { gas: 'Nitrogen (N₂)', percent: 99.0 },
      { gas: 'Methane (CH₄)', percent: 0.5 }
    ],
    overview: 'A frozen world of towering water-ice mountains and vast nitrogen-ice glaciers, featuring Tombaugh Regio, the famous heart-shaped plain discovered by NASA’s New Horizons.',
    funFacts: [
      'Pluto and Charon orbit a common center of mass that lies in open space outside Pluto.',
      'For 20 years of its 248-year orbit, Pluto was closer to the Sun than Neptune.',
      'Pluto’s surface features glaciers of frozen nitrogen, methane, and carbon monoxide.'
    ]
  }
];

const GRAVITY_PRESETS = [
  {
    id: 'slingshot',
    name: 'Planetary Gravity Assist (Voyager Slingshot)',
    description: 'A deep-space probe approaches Jupiter from behind its orbital path, harvesting orbital energy from the gas giant to slingshot outward at hyperbolic escape velocity.',
    bodies: [
      { id: 'sun', name: 'Sun', mass: 2500, x: -140, y: 0, vx: 0, vy: -0.1, radius: 14, color: '#f59e0b', fixed: true },
      { id: 'jupiter', name: 'Jupiter', mass: 120, x: 130, y: 0, vx: 0, vy: 3.0, radius: 8, color: '#fbbf24', fixed: false },
      { id: 'probe', name: 'Voyager Probe', mass: 0.0001, x: -70, y: -130, vx: 2.2, vy: 2.6, radius: 2.5, color: '#38bdf8', isProbe: true }
    ],
    G: 1.0,
    softening: 12,
    timeStep: 0.07
  },
  {
    id: 'free_return',
    name: 'Apollo Lunar Free-Return Trajectory',
    description: 'Earth-Moon gravitational figure-8 trajectory: launch a spacecraft around the Moon and let lunar gravity swing it safely back home without engine burns.',
    bodies: [
      { id: 'earth', name: 'Earth', mass: 1000, x: -60, y: 0, vx: 0, vy: -0.15, radius: 10, color: '#38bdf8', fixed: false },
      { id: 'moon', name: 'Moon', mass: 18, x: 260, y: 0, vx: 0, vy: 1.95, radius: 4, color: '#e2e8f0', fixed: false },
      { id: 'craft', name: 'Apollo Craft', mass: 0.001, x: -44, y: 0, vx: 0.0, vy: 4.45, radius: 2.2, color: '#22c55e', isProbe: true }
    ],
    G: 1.0,
    softening: 10,
    timeStep: 0.08
  },
  {
    id: 'three_body_figure8',
    name: 'Euler-Chenciner Figure-8 Choreography',
    description: 'A legendary periodic solution to the chaotic 3-body problem: three equal masses endlessly chasing each other along a single planar figure-8 path.',
    bodies: [
      { id: 'body1', name: 'Star Alpha', mass: 300, x: -100, y: 0, vx: 0.93240737, vy: 0.86473146, radius: 6, color: '#f43f5e' },
      { id: 'body2', name: 'Star Beta', mass: 300, x: 100, y: 0, vx: 0.93240737, vy: 0.86473146, radius: 6, color: '#06b6d4' },
      { id: 'body3', name: 'Star Gamma', mass: 300, x: 0, y: 0, vx: -1.86481474, vy: -1.72946292, radius: 6, color: '#eab308' }
    ],
    G: 1.0,
    softening: 6,
    timeStep: 0.05
  },
  {
    id: 'binary_circumbinary',
    name: 'Tatooine Binary Star & Circumbinary Planet',
    description: 'Two stars orbit their common center of mass while an outer exoplanet orbits both in a stable circumbinary orbit.',
    bodies: [
      { id: 'starA', name: 'Star A (Gold)', mass: 650, x: -35, y: 0, vx: 0, vy: -2.3, radius: 8, color: '#fbbf24' },
      { id: 'starB', name: 'Star B (Cyan)', mass: 550, x: 40, y: 0, vx: 0, vy: 2.7, radius: 7, color: '#38bdf8' },
      { id: 'planet', name: 'Tatooine IV', mass: 2, x: 0, y: 210, vx: 2.4, vy: 0, radius: 3.5, color: '#34d399' }
    ],
    G: 1.0,
    softening: 8,
    timeStep: 0.06
  },
  {
    id: 'lagrange_points',
    name: 'Sun-Earth Lagrange Trojans (L4 & L5)',
    description: 'Stable gravitational balance points hosting trojan asteroids 60 degrees ahead and behind Earth in its orbit.',
    bodies: [
      { id: 'sun', name: 'Sun', mass: 2000, x: 0, y: 0, vx: 0, vy: 0, radius: 14, color: '#f59e0b', fixed: true },
      { id: 'earth', name: 'Earth', mass: 60, x: 160, y: 0, vx: 0, vy: 3.535, radius: 6, color: '#38bdf8' },
      { id: 'l4', name: 'Trojan Asteroid (L4)', mass: 0.01, x: 80, y: 138.5, vx: -3.06, vy: 1.76, radius: 2.5, color: '#a855f7' },
      { id: 'l5', name: 'Trojan Asteroid (L5)', mass: 0.01, x: 80, y: -138.5, vx: 3.06, vy: 1.76, radius: 2.5, color: '#ec4899' }
    ],
    G: 1.0,
    softening: 10,
    timeStep: 0.06
  }
];

const DROP_EXPERIMENT_ITEMS = [
  { id: 'bowling_ball', name: 'Bowling Ball', massKg: 7.26, emoji: '🎳', desc: 'Heavy solid ball' },
  { id: 'hammer', name: 'Geology Hammer', massKg: 1.32, emoji: '🔨', desc: 'Apollo 15 astronaut hammer' },
  { id: 'basketball', name: 'Basketball', massKg: 0.62, emoji: '🏀', desc: 'Air-filled regulation ball' },
  { id: 'feather', name: 'Falcon Feather', massKg: 0.005, emoji: '🪶', desc: 'Apollo 15 falcon feather' },
  { id: 'apple', name: 'Newton’s Apple', massKg: 0.18, emoji: '🍎', desc: 'The historic seed of gravity' }
];

const TOUR_STOPS = [
  { bodyId: 'sun', title: 'Stop 1: The Solar Heart', badge: 'Nuclear Fusion Reactor', narration: 'The Sun contains 99.86% of all matter in the Solar System. Deep in its core, 600 million tons of hydrogen fuse into helium every second, generating radiant energy and the gravitational grip that guides everything in orbit.' },
  { bodyId: 'mercury', title: 'Stop 2: Mercury, The Swift Core', badge: 'Extreme Temperature Swings', narration: 'Skimming 58 million km from the Sun, Mercury endures days of 430°C and nights of -180°C. An oversized metallic iron core occupies ~85% of its radius, with permanent ice hidden in deep polar craters.' },
  { bodyId: 'venus', title: 'Stop 3: Venus, Runaway Greenhouse', badge: 'Crushing Atmosphere', narration: 'Venus is nearly identical to Earth in size, but shrouded in sulfuric acid clouds with 92 times Earth’s surface pressure. An extreme runaway greenhouse effect makes it the hottest planet at 464°C.' },
  { bodyId: 'earth', title: 'Stop 4: Earth, The Living Sanctuary', badge: 'Liquid Oceans & Magnetosphere', narration: 'Our home world is a fragile oasis: the only known harbor of life in the cosmos. Liquid oceans blanket 71% of its surface, shielded from cosmic radiation by a geodynamo magnetic field.' },
  { bodyId: 'mars', title: 'Stop 5: Mars, The Red Frontier', badge: 'Ancient Rivers & Giant Volcanoes', narration: 'Mars is a cold rust-colored desert world hosting Olympus Mons (three times Mount Everest) and Valles Marineris. Ancient river deltas reveal that Mars was once warm and wet.' },
  { bodyId: 'jupiter', title: 'Stop 6: Jupiter, King of the Giants', badge: 'Gravitational Shield', narration: 'Jupiter is more massive than all other planets combined. Its rapid 10-hour rotation churns jet streams and the Great Red Spot. Its gravitational muscle deflects incoming comets.' },
  { bodyId: 'saturn', title: 'Stop 7: Saturn, The Ringed Majesty', badge: 'Billion-Ice Particle Halo', narration: 'Saturn is encircled by iconic rings spanning 282,000 km across yet averaging only 10 meters thick. Composed of billions of water ice chunks, Saturn itself is light enough to float in water.' },
  { bodyId: 'uranus', title: 'Stop 8: Uranus, The Sideways World', badge: 'Tilted Ice Giant', narration: 'Tilted at an astonishing 98 degrees, Uranus rolls along its orbit like a ball. Its pale cyan tint comes from atmospheric methane, and it records the coldest temperatures in the solar system at -224°C.' },
  { bodyId: 'neptune', title: 'Stop 9: Neptune, Supersonic Tempest', badge: 'Fastest Winds in the Solar System', narration: 'Neptune orbits 4.5 billion km from the Sun in frigid darkness, driving the most violent planetary winds known—topping 2,100 km/h.' },
  { bodyId: 'pluto', title: 'Stop 10: Pluto, Jewel of the Kuiper Belt', badge: 'Frozen Nitrogen Glaciers', narration: 'In 2015, NASA’s New Horizons revealed dynamic water-ice mountains and the smooth nitrogen glacier of Tombaugh Regio—the celestial heart.' }
];

// ==========================================
// 2. WEB AUDIO SYNTHESIZER
// ==========================================
class CosmicSoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.ambientGain = null;
    this.sfxGain = null;
    this.ambientNodes = [];
    this.isAmbientPlaying = false;
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();
      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.value = 0.35;
      this.sfxGain.connect(this.ctx.destination);

      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.value = 0.1;
      this.ambientGain.connect(this.ctx.destination);
    } catch (_) {}
  }

  ensureContext() {
    if (!this.ctx) this.init();
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }

  toggleSound(enableState) {
    this.enabled = enableState !== undefined ? enableState : !this.enabled;
    if (!this.enabled) {
      this.stopAmbient();
    } else {
      this.ensureContext();
      this.startAmbient();
    }
    return this.enabled;
  }

  startAmbient() {
    if (!this.enabled || !this.ctx || this.isAmbientPlaying) return;
    this.stopAmbient();
    try {
      const t = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(55, t);
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(82.4, t);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(200, t);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(this.ambientGain);

      osc1.start(t);
      osc2.start(t);
      this.ambientNodes = [osc1, osc2];
      this.isAmbientPlaying = true;
    } catch (_) {}
  }

  stopAmbient() {
    this.ambientNodes.forEach(n => { try { n.stop(); n.disconnect(); } catch (_) {} });
    this.ambientNodes = [];
    this.isAmbientPlaying = false;
  }

  playClick() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.frequency.setValueAtTime(800, t);
    osc.frequency.exponentialRampToValueAtTime(300, t + 0.04);
    gain.gain.setValueAtTime(0.12, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.04);
  }

  playPlanetSelect(idx = 3) {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const freqs = [196, 220, 246.94, 261.63, 293.66, 329.63, 392, 440, 493.88, 523.25, 587.33];
    const baseFreq = freqs[idx % freqs.length] || 330;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, t);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, t + 0.3);
    gain.gain.setValueAtTime(0.18, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.5);
  }

  playLaunch() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(550, t + 0.25);
    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.3);
  }

  playImpact(strength = 1.0) {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(110 * strength, t);
    osc.frequency.exponentialRampToValueAtTime(30, t + 0.22);
    gain.gain.setValueAtTime(Math.min(0.3 * strength, 0.4), t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.22);
  }

  playJump() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.frequency.setValueAtTime(220, t);
    osc.frequency.exponentialRampToValueAtTime(460, t + 0.18);
    gain.gain.setValueAtTime(0.18, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.22);
  }
}
const sound = new CosmicSoundEngine();

// ==========================================
// 3. FAST PROCEDURAL TEXTURE GENERATION
// ==========================================
const FastTextures = {
  createSun() {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 256;
    const ctx = c.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0, '#ff9900');
    grad.addColorStop(0.5, '#ffdd33');
    grad.addColorStop(1, '#ff6600');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 256);
    // Solar flares
    for (let i = 0; i < 30; i++) {
      const rx = Math.random() * 512, ry = Math.random() * 256, r = 10 + Math.random() * 30;
      const g = ctx.createRadialGradient(rx, ry, 0, rx, ry, r);
      g.addColorStop(0, 'rgba(255,255,255,0.7)');
      g.addColorStop(1, 'rgba(255,140,0,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(rx, ry, r, 0, Math.PI * 2); ctx.fill();
    }
    return c;
  },

  createMercury() {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 128;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#8b8e96';
    ctx.fillRect(0, 0, 256, 128);
    ctx.fillStyle = 'rgba(50,50,50,0.3)';
    ctx.strokeStyle = 'rgba(200,200,200,0.3)';
    for (let i = 0; i < 40; i++) {
      const cx = Math.random() * 256, cy = Math.random() * 128, cr = 2 + Math.random() * 8;
      ctx.beginPath(); ctx.arc(cx, cy, cr, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }
    return c;
  },

  createVenus() {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 128;
    const ctx = c.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 128);
    grad.addColorStop(0, '#fde047');
    grad.addColorStop(0.5, '#eab308');
    grad.addColorStop(1, '#ca8a04');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 128);
    // Atmospheric swirl bands
    ctx.fillStyle = 'rgba(255, 255, 200, 0.2)';
    for (let y = 10; y < 128; y += 12) {
      ctx.fillRect(0, y, 256, 4);
    }
    return c;
  },

  createEarth() {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 256;
    const ctx = c.getContext('2d');
    // Oceans
    const grad = ctx.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0, '#1e3a8a');
    grad.addColorStop(0.5, '#0284c7');
    grad.addColorStop(1, '#1e3a8a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 256);
    // Stylized Continents (Africa, Europe, Americas, Asia)
    ctx.fillStyle = '#15803d';
    // Africa / Eurasia
    ctx.beginPath(); ctx.ellipse(260, 120, 50, 70, 0.2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(340, 90, 70, 45, 0, 0, Math.PI * 2); ctx.fill();
    // Americas
    ctx.beginPath(); ctx.ellipse(120, 85, 45, 40, -0.3, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(150, 175, 35, 60, 0.4, 0, Math.PI * 2); ctx.fill();
    // Australia
    ctx.beginPath(); ctx.ellipse(390, 180, 25, 20, 0, 0, Math.PI * 2); ctx.fill();
    // Polar caps
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, 512, 18);
    ctx.fillRect(0, 238, 512, 18);
    return c;
  },

  createEarthClouds() {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 256;
    const ctx = c.getContext('2d');
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    for (let i = 0; i < 24; i++) {
      const cx = Math.random() * 512, cy = 30 + Math.random() * 196;
      ctx.beginPath(); ctx.ellipse(cx, cy, 35 + Math.random() * 45, 8 + Math.random() * 12, Math.random() * 0.4, 0, Math.PI * 2); ctx.fill();
    }
    return c;
  },

  createMoon() {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 128;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(0, 0, 256, 128);
    // Dark Maria
    ctx.fillStyle = 'rgba(71, 85, 105, 0.5)';
    ctx.beginPath(); ctx.arc(80, 50, 30, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(160, 65, 25, 0, Math.PI * 2); ctx.fill();
    // Craters
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    for (let i = 0; i < 30; i++) {
      ctx.beginPath(); ctx.arc(Math.random() * 256, Math.random() * 128, 2 + Math.random() * 5, 0, Math.PI * 2); ctx.stroke();
    }
    return c;
  },

  createMars() {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 128;
    const ctx = c.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 128);
    grad.addColorStop(0, '#b91c1c');
    grad.addColorStop(0.5, '#ea580c');
    grad.addColorStop(1, '#9a3412');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 128);
    // Dark Syrtis Major
    ctx.fillStyle = 'rgba(67, 20, 7, 0.5)';
    ctx.beginPath(); ctx.ellipse(130, 60, 45, 25, 0.2, 0, Math.PI * 2); ctx.fill();
    // Polar caps
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, 256, 10);
    ctx.fillRect(0, 120, 256, 8);
    return c;
  },

  createJupiter() {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 256;
    const ctx = c.getContext('2d');
    // Horizontal gas bands
    for (let y = 0; y < 256; y += 16) {
      const isBelt = (y / 16) % 2 === 0;
      ctx.fillStyle = isBelt ? '#ca8a04' : '#fed7aa';
      ctx.fillRect(0, y, 512, 16);
    }
    // Great Red Spot
    ctx.fillStyle = '#dc2626';
    ctx.beginPath(); ctx.ellipse(320, 160, 32, 18, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fca5a5';
    ctx.beginPath(); ctx.ellipse(320, 160, 16, 8, 0, 0, Math.PI * 2); ctx.fill();
    return c;
  },

  createSaturn() {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 128;
    const ctx = c.getContext('2d');
    for (let y = 0; y < 128; y += 8) {
      ctx.fillStyle = (y / 8) % 2 === 0 ? '#fef08a' : '#eab308';
      ctx.fillRect(0, y, 256, 8);
    }
    return c;
  },

  createSaturnRings() {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 32;
    const ctx = c.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 256, 0);
    grad.addColorStop(0, 'rgba(217, 191, 143, 0.2)');
    grad.addColorStop(0.4, 'rgba(234, 212, 170, 0.9)');
    grad.addColorStop(0.68, 'rgba(0, 0, 0, 0.05)'); // Cassini Division
    grad.addColorStop(0.74, 'rgba(217, 191, 143, 0.85)');
    grad.addColorStop(1, 'rgba(217, 191, 143, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 32);
    return c;
  },

  createUranus() {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 128;
    const ctx = c.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 128);
    grad.addColorStop(0, '#7dd3fc');
    grad.addColorStop(0.5, '#38bdf8');
    grad.addColorStop(1, '#67e8f9');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 128);
    return c;
  },

  createNeptune() {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 128;
    const ctx = c.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 128);
    grad.addColorStop(0, '#1d4ed8');
    grad.addColorStop(0.5, '#2563eb');
    grad.addColorStop(1, '#1e40af');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 128);
    // Cirrus streaks
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.beginPath(); ctx.ellipse(140, 45, 40, 3, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(180, 80, 50, 4, 0, 0, Math.PI * 2); ctx.fill();
    return c;
  },

  createPluto() {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 128;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#c084fc';
    ctx.fillRect(0, 0, 256, 128);
    // Heart shape Tombaugh Regio
    ctx.fillStyle = '#f3e8ff';
    ctx.beginPath(); ctx.arc(120, 60, 18, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(140, 60, 18, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(102, 63); ctx.lineTo(130, 90); ctx.lineTo(158, 63); ctx.fill();
    return c;
  }
};

// ==========================================
// 4. THREE.JS 3D ORRERY ENGINE
// ==========================================
class OrreryEngine {
  constructor(containerElement, onSelectPlanetCallback) {
    this.container = containerElement;
    this.onSelectPlanet = onSelectPlanetCallback;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;

    this.bodies = new Map();
    this.asteroidBelt = null;
    this.starfield = null;
    this.sunCorona = null;

    this.timeScale = 1.0;
    this.isPaused = false;
    this.scaleMode = 'exhibit';
    this.showOrbits = true;

    this.targetBody = null;
    this.cameraTransition = null;
    this.defaultCameraPos = { x: 0, y: 160, z: 230 };

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.animationFrameId = null;
    this.clock = new THREE.Clock();

    this.init();
  }

  init() {
    const width = Math.max(300, this.container.clientWidth || window.innerWidth);
    const height = Math.max(300, this.container.clientHeight || (window.innerHeight - 64));

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x030712, 0.0012);

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 4000);
    this.camera.position.set(this.defaultCameraPos.x, this.defaultCameraPos.y, this.defaultCameraPos.z);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.container.appendChild(this.renderer.domElement);

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxDistance = 1200;
    this.controls.minDistance = 4;
    this.controls.target.set(0, 0, 0);

    const ambientLight = new THREE.AmbientLight(0x475569, 0.45);
    this.scene.add(ambientLight);

    const sunLight = new THREE.PointLight(0xfff7ed, 2.8, 1800, 0.35);
    sunLight.position.set(0, 0, 0);
    this.scene.add(sunLight);

    this.buildStarfield();
    this.buildCelestialBodies();
    this.buildAsteroidBelt();

    window.addEventListener('resize', this.onWindowResize.bind(this));
    this.renderer.domElement.addEventListener('pointerdown', this.onPointerDown.bind(this));

    this.animate();
  }

  buildStarfield() {
    const starCount = 3000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const palette = [new THREE.Color(0xffffff), new THREE.Color(0x93c5fd), new THREE.Color(0xfef08a)];

    for (let i = 0; i < starCount; i++) {
      const r = 1000 + Math.random() * 800;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({ size: 1.8, vertexColors: true, transparent: true, opacity: 0.85 });
    this.starfield = new THREE.Points(geometry, material);
    this.scene.add(this.starfield);
  }

  buildCelestialBodies() {
    CELESTIAL_BODIES.forEach((data, index) => {
      if (data.id === 'sun') {
        this.buildSun(data);
      } else if (data.id !== 'moon') {
        this.buildPlanet(data, index);
      }
    });

    const earthObj = this.bodies.get('earth');
    const moonData = CELESTIAL_BODIES.find(b => b.id === 'moon');
    if (earthObj && moonData) {
      this.buildMoon(earthObj, moonData);
    }
  }

  buildSun(data) {
    const sunTexture = new THREE.CanvasTexture(FastTextures.createSun());
    const geometry = new THREE.SphereGeometry(data.exhibitRadius, 48, 24);
    const material = new THREE.MeshBasicMaterial({ map: sunTexture, toneMapped: false });
    const sunMesh = new THREE.Mesh(geometry, material);
    sunMesh.userData = { id: data.id, name: data.name, data };
    this.scene.add(sunMesh);

    // Glowing corona
    const c = document.createElement('canvas');
    c.width = 128; c.height = 128;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(64, 64, 20, 64, 64, 64);
    g.addColorStop(0, 'rgba(255, 200, 50, 0.85)');
    g.addColorStop(0.5, 'rgba(255, 100, 20, 0.3)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);

    const coronaTexture = new THREE.CanvasTexture(c);
    const coronaMat = new THREE.SpriteMaterial({ map: coronaTexture, blending: THREE.AdditiveBlending, color: 0xffaa33, transparent: true });
    this.sunCorona = new THREE.Sprite(coronaMat);
    this.sunCorona.scale.set(data.exhibitRadius * 3.6, data.exhibitRadius * 3.6, 1);
    this.scene.add(this.sunCorona);

    this.bodies.set(data.id, { mesh: sunMesh, data, currentAngle: 0 });
  }

  buildPlanet(data, index) {
    const texture = new THREE.CanvasTexture(this.getPlanetTexture(data.id));
    const geometry = new THREE.SphereGeometry(data.exhibitRadius, 36, 18);
    const material = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.75 });
    const planetMesh = new THREE.Mesh(geometry, material);
    planetMesh.userData = { id: data.id, name: data.name, data };
    planetMesh.rotation.z = THREE.MathUtils.degToRad(data.axialTiltDeg || 0);

    if (data.id === 'earth') {
      const cloudsTex = new THREE.CanvasTexture(FastTextures.createEarthClouds());
      const cloudsMat = new THREE.MeshStandardMaterial({ map: cloudsTex, transparent: true, opacity: 0.75 });
      const cloudsMesh = new THREE.Mesh(new THREE.SphereGeometry(data.exhibitRadius * 1.025, 36, 18), cloudsMat);
      planetMesh.add(cloudsMesh);
      planetMesh.userData.cloudsMesh = cloudsMesh;
    }

    if (data.hasRings) {
      const ringTex = new THREE.CanvasTexture(FastTextures.createSaturnRings());
      ringTex.rotation = Math.PI / 2;
      const ringGeom = new THREE.RingGeometry(data.ringInnerRadius, data.ringOuterRadius, 48);
      ringGeom.rotateX(Math.PI / 2);
      const ringMat = new THREE.MeshStandardMaterial({ map: ringTex, side: THREE.DoubleSide, transparent: true, opacity: 0.9 });
      planetMesh.add(new THREE.Mesh(ringGeom, ringMat));
    }

    const orbitGroup = new THREE.Group();
    orbitGroup.rotation.x = THREE.MathUtils.degToRad(data.inclinationDeg || 0);
    this.scene.add(orbitGroup);

    const dist = data.exhibitOrbitDistance;
    const initialAngle = (index * 0.85) % (Math.PI * 2);
    planetMesh.position.set(Math.cos(initialAngle) * dist, 0, Math.sin(initialAngle) * dist);
    orbitGroup.add(planetMesh);

    const orbitLine = this.createOrbitLine(dist, data.colorHex, data.inclinationDeg);
    this.scene.add(orbitLine);

    this.bodies.set(data.id, { mesh: planetMesh, orbitGroup, data, currentAngle: initialAngle, orbitLine });
  }

  buildMoon(earthObj, moonData) {
    const texture = new THREE.CanvasTexture(FastTextures.createMoon());
    const moonMesh = new THREE.Mesh(new THREE.SphereGeometry(moonData.exhibitRadius, 24, 12), new THREE.MeshStandardMaterial({ map: texture, roughness: 0.85 }));
    moonMesh.userData = { id: moonData.id, name: moonData.name, data: moonData };

    const moonPivot = new THREE.Group();
    earthObj.mesh.add(moonPivot);
    moonMesh.position.set(moonData.exhibitOrbitDistance, 0, 0);
    moonPivot.add(moonMesh);

    this.bodies.set(moonData.id, { mesh: moonMesh, orbitGroup: moonPivot, data: moonData, currentAngle: 0 });
  }

  buildAsteroidBelt() {
    const asteroidCount = 1400;
    const geometry = new THREE.DodecahedronGeometry(0.35, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x78716c, roughness: 0.95 });
    const instanced = new THREE.InstancedMesh(geometry, material, asteroidCount);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < asteroidCount; i++) {
      const radius = 71 + Math.random() * 10;
      const angle = Math.random() * Math.PI * 2;
      dummy.position.set(Math.cos(angle) * radius, (Math.random() - 0.5) * 3.5, Math.sin(angle) * radius);
      const s = 0.4 + Math.random() * 0.8;
      dummy.scale.set(s, s, s);
      dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      dummy.updateMatrix();
      instanced.setMatrixAt(i, dummy.matrix);
    }
    instanced.instanceMatrix.needsUpdate = true;
    this.asteroidBelt = instanced;
    this.scene.add(this.asteroidBelt);
  }

  createOrbitLine(distance, hexColor, inclination = 0) {
    const points = [];
    for (let i = 0; i <= 96; i++) {
      const theta = (i / 96) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(theta) * distance, 0, Math.sin(theta) * distance));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: new THREE.Color(hexColor), transparent: true, opacity: 0.22 });
    const line = new THREE.LineLoop(geometry, material);
    line.rotation.x = THREE.MathUtils.degToRad(inclination);
    return line;
  }

  getPlanetTexture(id) {
    switch (id) {
      case 'mercury': return FastTextures.createMercury();
      case 'venus': return FastTextures.createVenus();
      case 'earth': return FastTextures.createEarth();
      case 'mars': return FastTextures.createMars();
      case 'jupiter': return FastTextures.createJupiter();
      case 'saturn': return FastTextures.createSaturn();
      case 'uranus': return FastTextures.createUranus();
      case 'neptune': return FastTextures.createNeptune();
      case 'pluto': return FastTextures.createPluto();
      default: return FastTextures.createMercury();
    }
  }

  onPointerDown(event) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);

    const meshes = [];
    this.bodies.forEach(b => meshes.push(b.mesh));
    const intersects = this.raycaster.intersectObjects(meshes, false);
    if (intersects.length > 0) {
      const hit = intersects[0].object;
      const id = hit.userData.id;
      if (id) {
        sound.playPlanetSelect(this.getPlanetIndex(id));
        this.focusPlanet(id);
      }
    }
  }

  getPlanetIndex(id) {
    return CELESTIAL_BODIES.findIndex(b => b.id === id);
  }

  focusPlanet(planetId) {
    const bodyObj = this.bodies.get(planetId);
    if (!bodyObj) return;

    this.targetBody = bodyObj;
    const worldPos = new THREE.Vector3();
    bodyObj.mesh.getWorldPosition(worldPos);

    const distOffset = Math.max(bodyObj.data.exhibitRadius * 3.4, 7);
    this.cameraTransition = {
      startCamPos: this.camera.position.clone(),
      endCamPos: new THREE.Vector3(worldPos.x + distOffset * 0.7, worldPos.y + distOffset * 0.4, worldPos.z + distOffset * 0.9),
      startTarget: this.controls.target.clone(),
      endTarget: worldPos.clone(),
      progress: 0,
      duration: 1.1
    };

    if (this.onSelectPlanet) {
      this.onSelectPlanet(bodyObj.data);
    }
  }

  resetCamera() {
    this.targetBody = null;
    this.cameraTransition = {
      startCamPos: this.camera.position.clone(),
      endCamPos: new THREE.Vector3(this.defaultCameraPos.x, this.defaultCameraPos.y, this.defaultCameraPos.z),
      startTarget: this.controls.target.clone(),
      endTarget: new THREE.Vector3(0, 0, 0),
      progress: 0,
      duration: 1.0
    };
  }

  setTimeScale(scale) { this.timeScale = scale; }
  togglePause() { this.isPaused = !this.isPaused; return this.isPaused; }

  toggleOrbits(show) {
    this.showOrbits = show !== undefined ? show : !this.showOrbits;
    this.bodies.forEach(b => { if (b.orbitLine) b.orbitLine.visible = this.showOrbits; });
    return this.showOrbits;
  }

  setScaleMode(mode) {
    this.scaleMode = mode;
    this.bodies.forEach(body => {
      if (body.data.id === 'sun') {
        const s = mode === 'true' ? 1.8 : 1.0;
        body.mesh.scale.set(s, s, s);
      } else if (body.data.id !== 'moon') {
        const factor = mode === 'true' ? (body.data.relativeRadius / body.data.exhibitRadius) * 2.5 : 1.0;
        body.mesh.scale.set(factor, factor, factor);
      }
    });
  }

  onWindowResize() {
    const width = Math.max(300, this.container.clientWidth || window.innerWidth);
    const height = Math.max(300, this.container.clientHeight || (window.innerHeight - 64));
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    const delta = this.clock.getDelta();
    const effectiveDelta = this.isPaused ? 0 : delta * this.timeScale;

    if (this.starfield) this.starfield.rotation.y += 0.00008;
    if (this.asteroidBelt && !this.isPaused) this.asteroidBelt.rotation.y += effectiveDelta * 0.035;

    this.bodies.forEach((body, id) => {
      if (body.data.rotationPeriodHours && !this.isPaused) {
        const spin = (24 / Math.abs(body.data.rotationPeriodHours)) * effectiveDelta * 0.6;
        body.mesh.rotation.y += spin * (body.data.rotationPeriodHours < 0 ? -1 : 1);
      }
      if (id === 'earth' && body.mesh.userData.cloudsMesh && !this.isPaused) {
        body.mesh.userData.cloudsMesh.rotation.y += effectiveDelta * 0.12;
      }

      if (id === 'sun') {
        const t = this.clock.getElapsedTime();
        const pulse = 1 + Math.sin(t * 1.5) * 0.02;
        if (this.sunCorona) this.sunCorona.scale.set(body.data.exhibitRadius * 3.6 * pulse, body.data.exhibitRadius * 3.6 * pulse, 1);
      } else if (id === 'moon') {
        if (!this.isPaused) {
          body.currentAngle += (365.25 / body.data.orbitalPeriodDays) * effectiveDelta * 0.05;
          body.mesh.position.set(Math.cos(body.currentAngle) * body.data.exhibitOrbitDistance, 0, Math.sin(body.currentAngle) * body.data.exhibitOrbitDistance);
        }
      } else {
        if (!this.isPaused) {
          body.currentAngle += (365.25 / body.data.orbitalPeriodDays) * effectiveDelta * 0.05;
          body.mesh.position.set(Math.cos(body.currentAngle) * body.data.exhibitOrbitDistance, 0, Math.sin(body.currentAngle) * body.data.exhibitOrbitDistance);
        }
      }
    });

    if (this.cameraTransition) {
      this.cameraTransition.progress += delta / this.cameraTransition.duration;
      const t = Math.min(1.0, this.cameraTransition.progress);
      const ease = t * t * (3 - 2 * t);
      this.camera.position.lerpVectors(this.cameraTransition.startCamPos, this.cameraTransition.endCamPos, ease);
      this.controls.target.lerpVectors(this.cameraTransition.startTarget, this.cameraTransition.endTarget, ease);
      if (t >= 1.0) this.cameraTransition = null;
    } else if (this.targetBody) {
      const targetWorldPos = new THREE.Vector3();
      this.targetBody.mesh.getWorldPosition(targetWorldPos);
      const offset = this.camera.position.clone().sub(this.controls.target);
      this.controls.target.copy(targetWorldPos);
      this.camera.position.copy(targetWorldPos).add(offset);
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}

// ==========================================
// 5. GUIDED MUSEUM TOUR CONTROLLER
// ==========================================
class ExhibitTourController {
  constructor(orreryEngine, uiCallbacks) {
    this.orrery = orreryEngine;
    this.callbacks = uiCallbacks;
    this.currentIndex = 0;
    this.isActive = false;
    this.isAutoAdvancing = true;
    this.stepDurationSeconds = 14;
    this.remainingSeconds = 14;
    this.timerInterval = null;
  }

  startTour(startIndex = 0) {
    this.isActive = true;
    this.currentIndex = startIndex;
    this.isAutoAdvancing = true;
    this.goToStep(this.currentIndex);
  }

  goToStep(index) {
    if (index < 0) index = 0;
    if (index >= TOUR_STOPS.length) {
      this.endTour();
      return;
    }
    this.currentIndex = index;
    const stop = TOUR_STOPS[this.currentIndex];
    this.orrery.focusPlanet(stop.bodyId);
    sound.playPlanetSelect(this.currentIndex);
    this.remainingSeconds = this.stepDurationSeconds;
    this.resetTimer();
    if (this.callbacks.onStepChange) {
      this.callbacks.onStepChange(stop, this.currentIndex, TOUR_STOPS.length, this.remainingSeconds);
    }
  }

  next() { this.goToStep(this.currentIndex + 1); }
  prev() { this.goToStep(this.currentIndex - 1); }

  toggleAutoAdvance() {
    this.isAutoAdvancing = !this.isAutoAdvancing;
    if (!this.isAutoAdvancing) clearInterval(this.timerInterval);
    else this.resetTimer();
    return this.isAutoAdvancing;
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    if (!this.isActive || !this.isAutoAdvancing) return;
    this.timerInterval = setInterval(() => {
      this.remainingSeconds -= 1;
      if (this.callbacks.onTick) this.callbacks.onTick(this.remainingSeconds, this.stepDurationSeconds);
      if (this.remainingSeconds <= 0) this.next();
    }, 1000);
  }

  endTour() {
    this.isActive = false;
    clearInterval(this.timerInterval);
    if (this.callbacks.onTourEnd) this.callbacks.onTourEnd();
    this.orrery.resetCamera();
  }
}

// ==========================================
// 6. N-BODY GRAVITATIONAL PHYSICS ENGINE
// ==========================================
class NBodyPhysicsEngine {
  constructor(options = {}) {
    this.G = options.G || 1.0;
    this.softening = options.softening || 8.0;
    this.timeStep = options.timeStep || 0.06;
    this.enableCollisions = options.enableCollisions !== false;
    this.bodies = [];
    this.maxTrailLength = options.maxTrailLength || 100;
    this.collisionsQueue = [];
  }

  setBodies(bodyDefs) {
    this.bodies = bodyDefs.map(b => ({
      id: b.id || 'b_' + Math.random().toString(36).substring(2, 6),
      name: b.name || 'Body',
      mass: b.mass || 10,
      x: b.x || 0,
      y: b.y || 0,
      vx: b.vx || 0,
      vy: b.vy || 0,
      ax: 0,
      ay: 0,
      radius: b.radius || Math.max(3, Math.cbrt(b.mass || 10) * 1.5),
      color: b.color || '#38bdf8',
      fixed: !!b.fixed,
      isProbe: !!b.isProbe,
      trail: [],
      trailCounter: 0
    }));
    this.computeAccelerations();
  }

  addBody(body) {
    const newBody = {
      id: 'b_' + Math.random().toString(36).substring(2, 6),
      name: body.name || 'New Body',
      mass: body.mass || 10,
      x: body.x || 0,
      y: body.y || 0,
      vx: body.vx || 0,
      vy: body.vy || 0,
      ax: 0,
      ay: 0,
      radius: body.radius || Math.max(3, Math.cbrt(body.mass || 10) * 1.5),
      color: body.color || '#38bdf8',
      fixed: !!body.fixed,
      isProbe: !!body.isProbe,
      trail: [],
      trailCounter: 0
    };
    this.bodies.push(newBody);
    this.computeAccelerations();
    return newBody;
  }

  computeAccelerations() {
    const count = this.bodies.length;
    for (let i = 0; i < count; i++) {
      this.bodies[i].ax = 0;
      this.bodies[i].ay = 0;
    }
    const eps2 = this.softening * this.softening;

    for (let i = 0; i < count; i++) {
      const b1 = this.bodies[i];
      if (b1.fixed) continue;
      for (let j = i + 1; j < count; j++) {
        const b2 = this.bodies[j];
        const dx = b2.x - b1.x;
        const dy = b2.y - b1.y;
        const distSq = dx * dx + dy * dy;
        const invDist3 = 1.0 / Math.pow(distSq + eps2, 1.5);

        const f1 = this.G * b2.mass * invDist3;
        b1.ax += dx * f1;
        b1.ay += dy * f1;

        if (!b2.fixed) {
          const f2 = this.G * b1.mass * invDist3;
          b2.ax -= dx * f2;
          b2.ay -= dy * f2;
        }
      }
    }
  }

  step(subSteps = 2) {
    const dt = this.timeStep / subSteps;
    this.collisionsQueue = [];

    for (let s = 0; s < subSteps; s++) {
      const count = this.bodies.length;
      for (let i = 0; i < count; i++) {
        const b = this.bodies[i];
        if (!b.fixed) {
          b.x += b.vx * dt + 0.5 * b.ax * dt * dt;
          b.y += b.vy * dt + 0.5 * b.ay * dt * dt;
        }
      }
      const prevA = this.bodies.map(b => ({ ax: b.ax, ay: b.ay }));
      this.computeAccelerations();

      for (let i = 0; i < count; i++) {
        const b = this.bodies[i];
        if (!b.fixed) {
          b.vx += 0.5 * (prevA[i].ax + b.ax) * dt;
          b.vy += 0.5 * (prevA[i].ay + b.ay) * dt;
        }
      }

      if (this.enableCollisions) this.resolveCollisions();
    }

    for (let i = 0; i < this.bodies.length; i++) {
      const b = this.bodies[i];
      b.trailCounter++;
      if (b.trailCounter % 2 === 0) {
        b.trail.push({ x: b.x, y: b.y });
        if (b.trail.length > this.maxTrailLength) b.trail.shift();
      }
    }
    return this.collisionsQueue;
  }

  resolveCollisions() {
    for (let i = 0; i < this.bodies.length; i++) {
      for (let j = i + 1; j < this.bodies.length; j++) {
        const b1 = this.bodies[i], b2 = this.bodies[j];
        if (!b1 || !b2) continue;
        const dx = b2.x - b1.x, dy = b2.y - b1.y;
        if (Math.hypot(dx, dy) < (b1.radius + b2.radius) * 0.8) {
          const primary = b1.mass >= b2.mass ? b1 : b2;
          const secondary = b1.mass >= b2.mass ? b2 : b1;
          const sIdx = b1.mass >= b2.mass ? j : i;
          const totalMass = primary.mass + secondary.mass;
          if (!primary.fixed) {
            primary.vx = (primary.mass * primary.vx + secondary.mass * secondary.vx) / totalMass;
            primary.vy = (primary.mass * primary.vy + secondary.mass * secondary.vy) / totalMass;
          }
          primary.mass = totalMass;
          primary.radius = Math.max(primary.radius * 1.08, Math.cbrt(totalMass) * 1.5);
          this.collisionsQueue.push({ x: (primary.x + secondary.x) * 0.5, y: (primary.y + secondary.y) * 0.5, primaryColor: primary.color, secondaryColor: secondary.color, energy: totalMass });
          this.bodies.splice(sIdx, 1);
          return;
        }
      }
    }
  }

  predictTrajectory(startX, startY, vx, vy, testMass = 0.001, steps = 120, dt = 0.08) {
    const pts = [{ x: startX, y: startY }];
    let curX = startX, curY = startY, curVx = vx, curVy = vy;
    const eps2 = this.softening * this.softening;

    for (let s = 0; s < steps; s++) {
      let ax = 0, ay = 0;
      for (let i = 0; i < this.bodies.length; i++) {
        const b = this.bodies[i];
        const dx = b.x - curX, dy = b.y - curY;
        const invDist3 = 1.0 / Math.pow(dx * dx + dy * dy + eps2, 1.5);
        ax += dx * this.G * b.mass * invDist3;
        ay += dy * this.G * b.mass * invDist3;
      }
      curVx += ax * dt; curVy += ay * dt;
      curX += curVx * dt; curY += curVy * dt;
      pts.push({ x: curX, y: curY });
    }
    return pts;
  }

  getGravitationalPotential(x, y) {
    let pot = 0;
    const eps2 = this.softening * this.softening;
    for (let i = 0; i < this.bodies.length; i++) {
      const b = this.bodies[i];
      const dx = b.x - x, dy = b.y - y;
      pot -= (this.G * b.mass) / Math.sqrt(dx * dx + dy * dy + eps2);
    }
    return pot;
  }
}

// ==========================================
// 7. GRAVITY SANDBOX VISUALIZER
// ==========================================
class GravitySandbox {
  constructor(canvasElement, controlsContainer) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.controlsContainer = controlsContainer;

    this.physics = new NBodyPhysicsEngine();
    this.currentPresetId = 'slingshot';

    this.camera = { x: 0, y: 0, zoom: 1.0, isPanning: false, lastMouseX: 0, lastMouseY: 0 };
    this.launchState = { isAiming: false, startX: 0, startY: 0, currentX: 0, currentY: 0, selectedSpawnType: 'probe' };

    this.showSpacetimeGrid = true;
    this.showVelocityVectors = true;
    this.showTrails = true;
    this.isPaused = false;
    this.particles = [];

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', this.resize.bind(this));
    this.bindEvents();
    this.loadPreset(this.currentPresetId);
    this.animate();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = Math.max(300, rect.width) * (window.devicePixelRatio || 1);
    this.canvas.height = Math.max(300, rect.height) * (window.devicePixelRatio || 1);
    this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    this.displayWidth = rect.width;
    this.displayHeight = rect.height;
  }

  bindEvents() {
    this.canvas.addEventListener('mousedown', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left, my = e.clientY - rect.top;
      if (e.button === 2 || e.shiftKey) {
        this.camera.isPanning = true;
        this.camera.lastMouseX = mx; this.camera.lastMouseY = my;
      } else if (e.button === 0) {
        const w = this.screenToWorld(mx, my);
        this.launchState.isAiming = true;
        this.launchState.startX = w.x; this.launchState.startY = w.y;
        this.launchState.currentX = w.x; this.launchState.currentY = w.y;
      }
    });

    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left, my = e.clientY - rect.top;
      if (this.camera.isPanning) {
        this.camera.x += (mx - this.camera.lastMouseX) / this.camera.zoom;
        this.camera.y += (my - this.camera.lastMouseY) / this.camera.zoom;
        this.camera.lastMouseX = mx; this.camera.lastMouseY = my;
      } else if (this.launchState.isAiming) {
        const w = this.screenToWorld(mx, my);
        this.launchState.currentX = w.x; this.launchState.currentY = w.y;
      }
    });

    window.addEventListener('mouseup', () => {
      if (this.camera.isPanning) this.camera.isPanning = false;
      if (this.launchState.isAiming) {
        this.launchState.isAiming = false;
        this.executeLaunch();
      }
    });

    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.12 : 0.89;
      this.camera.zoom = Math.min(3.5, Math.max(0.25, this.camera.zoom * factor));
    }, { passive: false });

    this.canvas.addEventListener('contextmenu', e => e.preventDefault());
  }

  screenToWorld(sx, sy) {
    const cx = this.displayWidth / 2, cy = this.displayHeight / 2;
    return { x: (sx - cx) / this.camera.zoom - this.camera.x, y: (sy - cy) / this.camera.zoom - this.camera.y };
  }

  worldToScreen(wx, wy) {
    const cx = this.displayWidth / 2, cy = this.displayHeight / 2;
    return { x: (wx + this.camera.x) * this.camera.zoom + cx, y: (wy + this.camera.y) * this.camera.zoom + cy };
  }

  loadPreset(presetId) {
    const preset = GRAVITY_PRESETS.find(p => p.id === presetId) || GRAVITY_PRESETS[0];
    this.currentPresetId = presetId;
    this.physics.G = preset.G || 1.0;
    this.physics.softening = preset.softening || 8.0;
    this.physics.timeStep = preset.timeStep || 0.06;
    this.physics.setBodies(preset.bodies);
    this.particles = [];
    this.camera.x = 0; this.camera.y = 0; this.camera.zoom = 1.0;
    sound.playClick();
  }

  setSpawnType(type) { this.launchState.selectedSpawnType = type; }

  executeLaunch() {
    const dx = this.launchState.currentX - this.launchState.startX;
    const dy = this.launchState.currentY - this.launchState.startY;
    const cfg = this.getSpawnConfig(this.launchState.selectedSpawnType);
    this.physics.addBody({
      name: cfg.name, mass: cfg.mass,
      x: this.launchState.startX, y: this.launchState.startY,
      vx: -dx * 0.035, vy: -dy * 0.035,
      radius: cfg.radius, color: cfg.color, isProbe: cfg.isProbe
    });
    sound.playLaunch();
  }

  getSpawnConfig(type) {
    switch (type) {
      case 'probe': return { name: 'Probe', mass: 0.001, radius: 2.5, color: '#38bdf8', isProbe: true };
      case 'moon': return { name: 'Moon', mass: 12, radius: 4.2, color: '#e2e8f0' };
      case 'planet': return { name: 'Rocky Planet', mass: 65, radius: 6.5, color: '#34d399' };
      case 'giant': return { name: 'Gas Giant', mass: 280, radius: 10.0, color: '#f59e0b' };
      case 'star': return { name: 'Star', mass: 1400, radius: 14.0, color: '#f43f5e' };
      default: return { name: 'Probe', mass: 0.001, radius: 2.5, color: '#38bdf8', isProbe: true };
    }
  }

  drawSpacetimeGrid() {
    if (!this.showSpacetimeGrid) return;
    const size = 36, step = 45;
    const startX = -size * step * 0.5, startY = -size * step * 0.5;
    this.ctx.lineWidth = 1;

    for (let gy = 0; gy <= size; gy++) {
      const wy = startY + gy * step;
      this.ctx.beginPath();
      for (let gx = 0; gx <= size; gx++) {
        const wx = startX + gx * step;
        const pot = this.physics.getGravitationalPotential(wx, wy);
        const sp = this.worldToScreen(wx, wy + pot * 1.8);
        if (gx === 0) this.ctx.moveTo(sp.x, sp.y);
        else this.ctx.lineTo(sp.x, sp.y);
      }
      this.ctx.strokeStyle = 'rgba(56, 189, 248, 0.07)';
      this.ctx.stroke();
    }

    for (let gx = 0; gx <= size; gx++) {
      const wx = startX + gx * step;
      this.ctx.beginPath();
      for (let gy = 0; gy <= size; gy++) {
        const wy = startY + gy * step;
        const pot = this.physics.getGravitationalPotential(wx, wy);
        const sp = this.worldToScreen(wx, wy + pot * 1.8);
        if (gy === 0) this.ctx.moveTo(sp.x, sp.y);
        else this.ctx.lineTo(sp.x, sp.y);
      }
      this.ctx.strokeStyle = 'rgba(56, 189, 248, 0.07)';
      this.ctx.stroke();
    }
  }

  drawTrails() {
    if (!this.showTrails) return;
    for (let i = 0; i < this.physics.bodies.length; i++) {
      const b = this.physics.bodies[i];
      if (!b.trail || b.trail.length < 2) continue;
      this.ctx.beginPath();
      for (let t = 0; t < b.trail.length; t++) {
        const sp = this.worldToScreen(b.trail[t].x, b.trail[t].y);
        if (t === 0) this.ctx.moveTo(sp.x, sp.y);
        else this.ctx.lineTo(sp.x, sp.y);
      }
      this.ctx.strokeStyle = b.color;
      this.ctx.globalAlpha = 0.35;
      this.ctx.lineWidth = b.isProbe ? 1.5 : 2.0;
      this.ctx.stroke();
      this.ctx.globalAlpha = 1.0;
    }
  }

  drawBodies() {
    for (let i = 0; i < this.physics.bodies.length; i++) {
      const b = this.physics.bodies[i];
      const sp = this.worldToScreen(b.x, b.y);
      const r = Math.max(2, b.radius * this.camera.zoom);

      const grad = this.ctx.createRadialGradient(sp.x, sp.y, r * 0.3, sp.x, sp.y, r * 2.5);
      grad.addColorStop(0, b.color); grad.addColorStop(1, 'rgba(0,0,0,0)');
      this.ctx.fillStyle = grad;
      this.ctx.beginPath(); this.ctx.arc(sp.x, sp.y, r * 2.5, 0, Math.PI * 2); this.ctx.fill();

      this.ctx.fillStyle = b.color;
      this.ctx.beginPath(); this.ctx.arc(sp.x, sp.y, r, 0, Math.PI * 2); this.ctx.fill();

      if (this.showVelocityVectors && !b.fixed) {
        const speed = Math.hypot(b.vx, b.vy);
        if (speed > 0.05) {
          const len = Math.min(65, speed * 18 * this.camera.zoom);
          const angle = Math.atan2(b.vy, b.vx);
          this.ctx.strokeStyle = '#38bdf8';
          this.ctx.lineWidth = 1.5;
          this.ctx.beginPath();
          this.ctx.moveTo(sp.x, sp.y);
          this.ctx.lineTo(sp.x + Math.cos(angle) * len, sp.y + Math.sin(angle) * len);
          this.ctx.stroke();
        }
      }

      if (this.camera.zoom > 0.5) {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.font = '11px sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(b.name, sp.x, sp.y + r + 14);
      }
    }
  }

  drawAimingTrajectory() {
    if (!this.launchState.isAiming) return;
    const sPos = this.worldToScreen(this.launchState.startX, this.launchState.startY);
    const cPos = this.worldToScreen(this.launchState.currentX, this.launchState.currentY);

    this.ctx.strokeStyle = '#f43f5e';
    this.ctx.lineWidth = 2.0;
    this.ctx.setLineDash([4, 4]);
    this.ctx.beginPath(); this.ctx.moveTo(sPos.x, sPos.y); this.ctx.lineTo(cPos.x, cPos.y); this.ctx.stroke();
    this.ctx.setLineDash([]);

    const dx = this.launchState.currentX - this.launchState.startX;
    const dy = this.launchState.currentY - this.launchState.startY;
    const cfg = this.getSpawnConfig(this.launchState.selectedSpawnType);
    const traj = this.physics.predictTrajectory(this.launchState.startX, this.launchState.startY, -dx * 0.035, -dy * 0.035, cfg.mass, 120, 0.08);

    this.ctx.beginPath();
    for (let i = 0; i < traj.length; i++) {
      const p = this.worldToScreen(traj[i].x, traj[i].y);
      if (i === 0) this.ctx.moveTo(p.x, p.y);
      else this.ctx.lineTo(p.x, p.y);
    }
    this.ctx.strokeStyle = '#22c55e';
    this.ctx.lineWidth = 2.0;
    this.ctx.setLineDash([5, 5]);
    this.ctx.stroke();
    this.ctx.setLineDash([]);
  }

  drawParticles() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx; p.y += p.vy; p.life -= 0.025;
      if (p.life <= 0) { this.particles.splice(i, 1); continue; }
      const sp = this.worldToScreen(p.x, p.y);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.life;
      this.ctx.beginPath(); this.ctx.arc(sp.x, sp.y, p.size * this.camera.zoom, 0, Math.PI * 2); this.ctx.fill();
      this.ctx.globalAlpha = 1.0;
    }
  }

  animate() {
    this.animationId = requestAnimationFrame(this.animate.bind(this));
    if (!this.isPaused) {
      const cols = this.physics.step(2);
      if (cols && cols.length > 0) {
        cols.forEach(col => {
          sound.playImpact(1.0);
          for (let i = 0; i < 20; i++) {
            const angle = Math.random() * Math.PI * 2, spd = 1.5 + Math.random() * 4;
            this.particles.push({ x: col.x, y: col.y, vx: Math.cos(angle) * spd, vy: Math.sin(angle) * spd, size: 2 + Math.random() * 2, life: 1.0, color: col.primaryColor });
          }
        });
      }
    }

    this.ctx.fillStyle = '#030712';
    this.ctx.fillRect(0, 0, this.displayWidth, this.displayHeight);

    this.drawSpacetimeGrid();
    this.drawTrails();
    this.drawBodies();
    this.drawAimingTrajectory();
    this.drawParticles();
  }
}

// ==========================================
// 8. COMPARATIVE GRAVITY KIOSK
// ==========================================
class GravityKiosk {
  constructor(containerElement) {
    this.container = containerElement;
    this.userWeight = 70;
    this.weightUnit = 'kg';
    this.jumpWorldA = 'earth';
    this.jumpWorldB = 'moon';
    this.takeoffVelocity = 3.2;
    this.isJumping = false;
    this.jumpAnimTime = 0;

    this.dropWorld = 'earth';
    this.dropItem1 = 'hammer';
    this.dropItem2 = 'feather';
    this.dropInVacuum = true;
    this.isDropping = false;
    this.dropAnimTime = 0;
    this.dropHeightMeters = 3.0;

    this.render();
    this.bindEvents();
    this.startLoop();
  }

  render() {
    this.container.innerHTML = `
      <div class="h-full overflow-y-auto px-4 py-6 md:px-8 max-w-7xl mx-auto space-y-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-5 gap-4">
          <div>
            <h2 class="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-300 flex items-center gap-3">
              <span>⚖️</span> Comparative Planetary Gravity Lab
            </h2>
            <p class="text-slate-400 text-sm mt-1">Explore how mass and planetary radius warp surface gravity, shaping weight, athletics, and free fall.</p>
          </div>
          <div class="flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-xl p-1.5 self-start">
            <span class="text-xs text-slate-400 font-medium px-2">Gravity Formula:</span>
            <code class="text-xs bg-slate-950 px-2 py-1 rounded text-cyan-400 font-mono">g = G · M / R²</code>
          </div>
        </div>

        <!-- Station A: Weight -->
        <section class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 md:p-6 backdrop-blur-md shadow-xl">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 class="text-lg font-bold text-slate-100 flex items-center gap-2"><span>🏋️</span> Station A: Your Weight Across the Solar System</h3>
              <p class="text-xs text-slate-400 mt-0.5">Mass remains constant; weight is the gravitational force exerted on your mass (W = m · g).</p>
            </div>
            <div class="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 self-start">
              <label for="user-weight-input" class="text-xs text-slate-400 font-medium">Enter Weight:</label>
              <input type="number" id="user-weight-input" min="5" max="500" value="${this.userWeight}" class="w-16 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-sm font-semibold text-white focus:outline-none focus:border-cyan-400 text-center" />
              <div class="flex bg-slate-900 rounded p-0.5 border border-slate-700 text-xs">
                <button id="btn-unit-kg" class="px-2 py-0.5 rounded font-medium ${this.weightUnit === 'kg' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'}">kg</button>
                <button id="btn-unit-lbs" class="px-2 py-0.5 rounded font-medium ${this.weightUnit === 'lbs' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'}">lbs</button>
              </div>
            </div>
          </div>
          <div id="weight-cards-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"></div>
        </section>

        <!-- Station B: Jump -->
        <section class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 md:p-6 backdrop-blur-md shadow-xl">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
            <div>
              <h3 class="text-lg font-bold text-slate-100 flex items-center gap-2"><span>🚀</span> Station B: Planetary Jump Physics Chamber</h3>
              <p class="text-xs text-slate-400 mt-0.5">Compare jump heights and hang times side-by-side with identical takeoff impulse (v₀ = ${this.takeoffVelocity} m/s).</p>
            </div>
            <button id="btn-trigger-jump" class="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-lg active:scale-95 transition-all">
              <span>🦘</span> Perform Jump Test
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="flex items-center gap-3 bg-slate-950/70 p-3 rounded-xl border border-slate-800">
              <label for="select-world-a" class="text-xs text-sky-400 font-bold uppercase tracking-wider">World A:</label>
              <select id="select-world-a" class="bg-slate-900 text-sm text-slate-200 border border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none flex-1">
                ${CELESTIAL_BODIES.filter(b => b.id !== 'sun').map(b => `<option value="${b.id}" ${b.id === this.jumpWorldA ? 'selected' : ''}>${b.name} (${b.surfaceGravity} m/s²)</option>`).join('')}
              </select>
            </div>
            <div class="flex items-center gap-3 bg-slate-950/70 p-3 rounded-xl border border-slate-800">
              <label for="select-world-b" class="text-xs text-purple-400 font-bold uppercase tracking-wider">World B:</label>
              <select id="select-world-b" class="bg-slate-900 text-sm text-slate-200 border border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none flex-1">
                ${CELESTIAL_BODIES.filter(b => b.id !== 'sun').map(b => `<option value="${b.id}" ${b.id === this.jumpWorldB ? 'selected' : ''}>${b.name} (${b.surfaceGravity} m/s²)</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="relative w-full h-72 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden shadow-inner">
            <canvas id="jump-canvas" class="w-full h-full block"></canvas>
            <div class="absolute top-3 left-3 bg-slate-900/90 border border-slate-800 px-3 py-2 rounded-lg text-xs font-mono text-sky-400 pointer-events-none" id="telemetry-world-a">Earth: h = 0.52m | hang = 0.65s</div>
            <div class="absolute top-3 right-3 bg-slate-900/90 border border-slate-800 px-3 py-2 rounded-lg text-xs font-mono text-purple-400 pointer-events-none text-right" id="telemetry-world-b">Moon: h = 3.16m | hang = 3.95s</div>
          </div>
        </section>

        <!-- Station C: Drop -->
        <section class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 md:p-6 backdrop-blur-md shadow-xl">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
            <div>
              <h3 class="text-lg font-bold text-slate-100 flex items-center gap-2"><span>🪶</span> Station C: The Galileo & Apollo 15 Vacuum Drop Tower</h3>
              <p class="text-xs text-slate-400 mt-0.5">In a vacuum, gravitational acceleration is independent of an object’s mass.</p>
            </div>
            <div class="flex items-center gap-3">
              <label class="flex items-center gap-2 cursor-pointer bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-xs">
                <input type="checkbox" id="check-vacuum-toggle" ${this.dropInVacuum ? 'checked' : ''} class="rounded text-cyan-500 focus:ring-0">
                <span class="text-slate-300 font-medium">Vacuum Chamber Active</span>
              </label>
              <button id="btn-release-drop" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-md active:scale-95 transition-all">
                <span>⏱️</span> Release Objects
              </button>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div class="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
              <label for="select-drop-world" class="text-xs text-slate-400 block mb-1">Target Planet:</label>
              <select id="select-drop-world" class="w-full bg-slate-900 text-xs text-slate-200 border border-slate-700 rounded px-2 py-1.5 focus:outline-none">
                ${CELESTIAL_BODIES.filter(b => b.id !== 'sun').map(b => `<option value="${b.id}" ${b.id === this.dropWorld ? 'selected' : ''}>${b.name} (${b.surfaceGravity} m/s²)</option>`).join('')}
              </select>
            </div>
            <div class="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
              <label for="select-item-1" class="text-xs text-slate-400 block mb-1">Object 1:</label>
              <select id="select-item-1" class="w-full bg-slate-900 text-xs text-slate-200 border border-slate-700 rounded px-2 py-1.5 focus:outline-none">
                ${DROP_EXPERIMENT_ITEMS.map(i => `<option value="${i.id}" ${i.id === this.dropItem1 ? 'selected' : ''}>${i.emoji} ${i.name} (${i.massKg} kg)</option>`).join('')}
              </select>
            </div>
            <div class="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
              <label for="select-item-2" class="text-xs text-slate-400 block mb-1">Object 2:</label>
              <select id="select-item-2" class="w-full bg-slate-900 text-xs text-slate-200 border border-slate-700 rounded px-2 py-1.5 focus:outline-none">
                ${DROP_EXPERIMENT_ITEMS.map(i => `<option value="${i.id}" ${i.id === this.dropItem2 ? 'selected' : ''}>${i.emoji} ${i.name} (${i.massKg} kg)</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="relative w-full h-64 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden shadow-inner">
            <canvas id="drop-canvas" class="w-full h-full block"></canvas>
            <div id="drop-status-banner" class="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-slate-800 px-4 py-1.5 rounded-full text-xs font-medium text-slate-300">
              Ready to drop from 3.0 meters height.
            </div>
          </div>
        </section>
      </div>
    `;

    this.renderWeightCards();
    this.jumpCanvas = this.container.querySelector('#jump-canvas');
    this.jumpCtx = this.jumpCanvas.getContext('2d');
    this.dropCanvas = this.container.querySelector('#drop-canvas');
    this.dropCtx = this.dropCanvas.getContext('2d');
    this.resizeCanvases();
  }

  resizeCanvases() {
    [this.jumpCanvas, this.dropCanvas].forEach(c => {
      if (!c) return;
      const rect = c.getBoundingClientRect();
      c.width = Math.max(300, rect.width) * (window.devicePixelRatio || 1);
      c.height = Math.max(200, rect.height) * (window.devicePixelRatio || 1);
      const ctx = c.getContext('2d');
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      c.displayWidth = rect.width;
      c.displayHeight = rect.height;
    });
  }

  renderWeightCards() {
    const grid = this.container.querySelector('#weight-cards-grid');
    if (!grid) return;
    const unitFactor = this.weightUnit === 'lbs' ? 2.20462 : 1.0;
    const baseWeight = this.userWeight * (this.weightUnit === 'lbs' ? 1 / 2.20462 : 1);

    grid.innerHTML = CELESTIAL_BODIES.map(body => {
      const calcW = (baseWeight * body.gravityRelative) * unitFactor;
      const isEarth = body.id === 'earth', isSun = body.id === 'sun';
      return `
        <div class="bg-slate-950/80 border ${isEarth ? 'border-cyan-500/70 shadow-lg shadow-cyan-500/10' : 'border-slate-800/80'} rounded-xl p-3 flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-300">${body.name}</span>
            <span class="text-[10px] font-mono text-cyan-400 bg-slate-900 px-1.5 py-0.5 rounded">${body.gravityRelative}g</span>
          </div>
          <div class="my-2.5">
            <div class="text-lg font-extrabold ${isSun ? 'text-amber-400' : isEarth ? 'text-cyan-400' : 'text-slate-100'}">
              ${calcW.toFixed(1)} <span class="text-xs font-normal text-slate-400">${this.weightUnit}</span>
            </div>
            <div class="text-[10px] text-slate-500">${body.surfaceGravity.toFixed(2)} m/s²</div>
          </div>
          <div class="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
            <div class="h-full rounded-full ${isEarth ? 'bg-cyan-400' : 'bg-gradient-to-r from-blue-500 to-indigo-500'}" style="width: ${Math.min(100, (body.gravityRelative / 2.6) * 100)}%"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  bindEvents() {
    const weightInput = this.container.querySelector('#user-weight-input');
    if (weightInput) {
      weightInput.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        if (!isNaN(val) && val > 0) { this.userWeight = val; this.renderWeightCards(); }
      });
    }

    const btnKg = this.container.querySelector('#btn-unit-kg'), btnLbs = this.container.querySelector('#btn-unit-lbs');
    if (btnKg && btnLbs) {
      btnKg.addEventListener('click', () => {
        if (this.weightUnit !== 'kg') {
          this.weightUnit = 'kg'; this.userWeight = Math.round(this.userWeight / 2.20462);
          weightInput.value = this.userWeight;
          btnKg.className = 'px-2 py-0.5 rounded font-medium bg-cyan-500 text-slate-950 font-bold';
          btnLbs.className = 'px-2 py-0.5 rounded font-medium text-slate-400';
          this.renderWeightCards(); sound.playClick();
        }
      });
      btnLbs.addEventListener('click', () => {
        if (this.weightUnit !== 'lbs') {
          this.weightUnit = 'lbs'; this.userWeight = Math.round(this.userWeight * 2.20462);
          weightInput.value = this.userWeight;
          btnLbs.className = 'px-2 py-0.5 rounded font-medium bg-cyan-500 text-slate-950 font-bold';
          btnKg.className = 'px-2 py-0.5 rounded font-medium text-slate-400';
          this.renderWeightCards(); sound.playClick();
        }
      });
    }

    const selA = this.container.querySelector('#select-world-a'), selB = this.container.querySelector('#select-world-b');
    if (selA) selA.addEventListener('change', e => { this.jumpWorldA = e.target.value; this.updateJumpTelemetry(); sound.playClick(); });
    if (selB) selB.addEventListener('change', e => { this.jumpWorldB = e.target.value; this.updateJumpTelemetry(); sound.playClick(); });

    const btnJump = this.container.querySelector('#btn-trigger-jump');
    if (btnJump) btnJump.addEventListener('click', () => { this.isJumping = true; this.jumpAnimTime = 0; sound.playJump(); });

    const selDropWorld = this.container.querySelector('#select-drop-world');
    const selItem1 = this.container.querySelector('#select-item-1'), selItem2 = this.container.querySelector('#select-item-2');
    const chkVac = this.container.querySelector('#check-vacuum-toggle'), btnDrop = this.container.querySelector('#btn-release-drop');

    if (selDropWorld) selDropWorld.addEventListener('change', e => { this.dropWorld = e.target.value; sound.playClick(); });
    if (selItem1) selItem1.addEventListener('change', e => { this.dropItem1 = e.target.value; sound.playClick(); });
    if (selItem2) selItem2.addEventListener('change', e => { this.dropItem2 = e.target.value; sound.playClick(); });
    if (chkVac) chkVac.addEventListener('change', e => { this.dropInVacuum = e.target.checked; sound.playClick(); });
    if (btnDrop) btnDrop.addEventListener('click', () => {
      this.isDropping = true; this.dropAnimTime = 0; sound.playLaunch();
      const b = this.container.querySelector('#drop-status-banner');
      if (b) b.innerText = 'Objects falling under gravity...';
    });
  }

  updateJumpTelemetry() {
    const dataA = CELESTIAL_BODIES.find(b => b.id === this.jumpWorldA) || CELESTIAL_BODIES[3];
    const dataB = CELESTIAL_BODIES.find(b => b.id === this.jumpWorldB) || CELESTIAL_BODIES[4];
    const hA = (this.takeoffVelocity * this.takeoffVelocity) / (2 * dataA.surfaceGravity);
    const tA = (2 * this.takeoffVelocity) / dataA.surfaceGravity;
    const hB = (this.takeoffVelocity * this.takeoffVelocity) / (2 * dataB.surfaceGravity);
    const tB = (2 * this.takeoffVelocity) / dataB.surfaceGravity;

    const telA = this.container.querySelector('#telemetry-world-a');
    const telB = this.container.querySelector('#telemetry-world-b');
    if (telA) telA.innerText = `${dataA.name}: max height = ${hA.toFixed(2)}m | hang-time = ${tA.toFixed(2)}s`;
    if (telB) telB.innerText = `${dataB.name}: max height = ${hB.toFixed(2)}m | hang-time = ${tB.toFixed(2)}s`;
  }

  startLoop() {
    const loop = () => {
      requestAnimationFrame(loop);
      this.drawJumpSimulation();
      this.drawDropSimulation();
    };
    loop();
  }

  drawJumpSimulation() {
    if (!this.jumpCanvas || !this.jumpCtx) return;
    const w = this.jumpCanvas.displayWidth || this.jumpCanvas.width;
    const h = this.jumpCanvas.displayHeight || this.jumpCanvas.height;
    const ctx = this.jumpCtx;
    ctx.clearRect(0, 0, w, h);

    const dataA = CELESTIAL_BODIES.find(b => b.id === this.jumpWorldA) || CELESTIAL_BODIES[3];
    const dataB = CELESTIAL_BODIES.find(b => b.id === this.jumpWorldB) || CELESTIAL_BODIES[4];
    const gA = dataA.surfaceGravity, gB = dataB.surfaceGravity;

    if (this.isJumping) this.jumpAnimTime += 0.025;
    const totalTimeA = (2 * this.takeoffVelocity) / gA;
    const totalTimeB = (2 * this.takeoffVelocity) / gB;

    let altA = 0, altB = 0;
    if (this.jumpAnimTime <= totalTimeA) altA = Math.max(0, this.takeoffVelocity * this.jumpAnimTime - 0.5 * gA * this.jumpAnimTime * this.jumpAnimTime);
    if (this.jumpAnimTime <= totalTimeB) altB = Math.max(0, this.takeoffVelocity * this.jumpAnimTime - 0.5 * gB * this.jumpAnimTime * this.jumpAnimTime);

    if (this.isJumping && this.jumpAnimTime > Math.max(totalTimeA, totalTimeB)) {
      this.isJumping = false; sound.playImpact(0.8);
    }

    const groundY = h - 45;
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, groundY); ctx.lineTo(w, groundY); ctx.stroke();

    ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(w / 2, 20); ctx.lineTo(w / 2, groundY); ctx.stroke();
    ctx.setLineDash([]);

    const pxPerMeter = 42;
    this.drawAstronaut(ctx, w * 0.25, groundY - altA * pxPerMeter, dataA.colorHex, `${dataA.name} (${altA.toFixed(2)}m)`);
    this.drawAstronaut(ctx, w * 0.75, groundY - altB * pxPerMeter, dataB.colorHex, `${dataB.name} (${altB.toFixed(2)}m)`);
  }

  drawAstronaut(ctx, x, y, color, label) {
    const groundY = (this.jumpCanvas.displayHeight || this.jumpCanvas.height) - 45;
    const shadowScale = Math.max(0.3, 1.0 - (groundY - y) / 150);

    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.beginPath(); ctx.ellipse(x, groundY + 5, 14 * shadowScale, 5 * shadowScale, 0, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = '#f1f5f9';
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x - 9, y - 26, 18, 22, 5);
    else ctx.rect(x - 9, y - 26, 18, 22);
    ctx.fill();

    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath(); ctx.arc(x, y - 32, 10, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = '#f59e0b';
    ctx.beginPath(); ctx.arc(x, y - 32, 6, -0.4, Math.PI + 0.4); ctx.fill();

    ctx.fillStyle = color;
    ctx.beginPath(); ctx.arc(x, y - 20, 3, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = '#cbd5e1'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(label, x, y - 48);
  }

  drawDropSimulation() {
    if (!this.dropCanvas || !this.dropCtx) return;
    const w = this.dropCanvas.displayWidth || this.dropCanvas.width;
    const h = this.dropCanvas.displayHeight || this.dropCanvas.height;
    const ctx = this.dropCtx;
    ctx.clearRect(0, 0, w, h);

    const world = CELESTIAL_BODIES.find(b => b.id === this.dropWorld) || CELESTIAL_BODIES[3];
    const g = world.surfaceGravity;
    const item1 = DROP_EXPERIMENT_ITEMS.find(i => i.id === this.dropItem1) || DROP_EXPERIMENT_ITEMS[1];
    const item2 = DROP_EXPERIMENT_ITEMS.find(i => i.id === this.dropItem2) || DROP_EXPERIMENT_ITEMS[3];

    if (this.isDropping) this.dropAnimTime += 0.02;

    const groundY = h - 35, startY = 45, totalDistPx = groundY - startY;
    const totalFallTimeVac = Math.sqrt((2 * this.dropHeightMeters) / g);
    let fallY1 = startY, fallY2 = startY;

    if (this.dropInVacuum) {
      const prog = Math.min(1.0, (0.5 * g * this.dropAnimTime * this.dropAnimTime) / this.dropHeightMeters);
      fallY1 = startY + prog * totalDistPx;
      fallY2 = startY + prog * totalDistPx;
      if (this.isDropping && this.dropAnimTime >= totalFallTimeVac) {
        this.isDropping = false; sound.playImpact(1.0);
        const b = this.container.querySelector('#drop-status-banner');
        if (b) b.innerHTML = `<span class="text-emerald-400 font-bold">Simultaneous Impact!</span> Both fell in ${totalFallTimeVac.toFixed(2)}s in vacuum.`;
      }
    } else {
      const d1 = item1.id === 'feather' ? 0.65 : 0.04;
      const d2 = item2.id === 'feather' ? 0.65 : 0.04;
      const prog1 = Math.min(1.0, (0.5 * (g / (1 + d1 * 3)) * this.dropAnimTime * this.dropAnimTime) / this.dropHeightMeters);
      const prog2 = Math.min(1.0, (0.5 * (g / (1 + d2 * 3)) * this.dropAnimTime * this.dropAnimTime) / this.dropHeightMeters);
      fallY1 = startY + prog1 * totalDistPx;
      fallY2 = startY + prog2 * totalDistPx;
      if (this.isDropping && (prog1 >= 1.0 && prog2 >= 1.0)) {
        this.isDropping = false; sound.playImpact(0.7);
        const b = this.container.querySelector('#drop-status-banner');
        if (b) b.innerHTML = `<span class="text-amber-400 font-bold">Atmospheric Drag Impact!</span> Aerodynamic drag slowed the lighter item.`;
      }
    }

    ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)'; ctx.lineWidth = 1.5;
    ctx.strokeRect(w * 0.15, 20, w * 0.7, groundY - 15);
    ctx.fillStyle = '#1e293b'; ctx.fillRect(w * 0.15, groundY, w * 0.7, 8);

    ctx.font = '28px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(item1.emoji, w * 0.35, fallY1);
    ctx.fillText(item2.emoji, w * 0.65, fallY2);

    ctx.fillStyle = '#94a3b8'; ctx.font = '10px sans-serif';
    ctx.fillText(`${item1.name} (${item1.massKg}kg)`, w * 0.35, fallY1 + 24);
    ctx.fillText(`${item2.name} (${item2.massKg}kg)`, w * 0.65, fallY2 + 24);
  }
}

// ==========================================
// 9. PLANET INSPECTOR DRAWER
// ==========================================
class PlanetInspector {
  constructor(containerElement, onActionCallback) {
    this.container = containerElement;
    this.onAction = onActionCallback;
    this.currentBody = null;
    this.isOpen = false;
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div id="inspector-backdrop" class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 hidden transition-opacity"></div>
      <aside id="inspector-drawer" class="fixed top-0 right-0 bottom-0 w-full sm:w-[460px] bg-slate-950/95 border-l border-slate-800/80 shadow-2xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col backdrop-blur-xl">
        <div class="p-5 border-b border-slate-800 flex items-start justify-between gap-3">
          <div class="flex items-center gap-3">
            <div id="inspector-badge-color" class="w-4 h-4 rounded-full shadow-lg"></div>
            <div>
              <h3 id="inspector-title" class="text-xl font-extrabold text-white">Planet Name</h3>
              <p id="inspector-subtitle" class="text-xs text-slate-400">Subtitle</p>
            </div>
          </div>
          <button id="btn-close-inspector" class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div class="flex-1 overflow-y-auto p-5 space-y-6 text-sm text-slate-300">
          <div class="grid grid-cols-2 gap-2.5">
            <div class="bg-slate-900/80 border border-slate-800/70 rounded-xl p-3">
              <span class="text-[10px] text-slate-400 uppercase tracking-wider block">Surface Gravity</span>
              <span id="inspect-gravity" class="text-lg font-bold text-cyan-400">9.81 m/s²</span>
              <span id="inspect-gravity-rel" class="text-[11px] text-slate-500 block">1.00g</span>
            </div>
            <div class="bg-slate-900/80 border border-slate-800/70 rounded-xl p-3">
              <span class="text-[10px] text-slate-400 uppercase tracking-wider block">Mean Radius</span>
              <span id="inspect-radius" class="text-lg font-bold text-slate-100">6,371 km</span>
              <span id="inspect-radius-rel" class="text-[11px] text-slate-500 block">1.00 Earths</span>
            </div>
            <div class="bg-slate-900/80 border border-slate-800/70 rounded-xl p-3">
              <span class="text-[10px] text-slate-400 uppercase tracking-wider block">Orbital Distance</span>
              <span id="inspect-dist-au" class="text-lg font-bold text-slate-100">1.00 AU</span>
              <span id="inspect-dist-km" class="text-[11px] text-slate-500 block">149.6M km</span>
            </div>
            <div class="bg-slate-900/80 border border-slate-800/70 rounded-xl p-3">
              <span class="text-[10px] text-slate-400 uppercase tracking-wider block">Orbital Period</span>
              <span id="inspect-period" class="text-lg font-bold text-slate-100">365.25 days</span>
              <span id="inspect-speed" class="text-[11px] text-slate-500 block">29.78 km/s</span>
            </div>
            <div class="bg-slate-900/80 border border-slate-800/70 rounded-xl p-3">
              <span class="text-[10px] text-slate-400 uppercase tracking-wider block">Mean Temperature</span>
              <span id="inspect-temp" class="text-lg font-bold text-amber-400">15 °C</span>
              <span class="text-[11px] text-slate-500 block">Equilibrium</span>
            </div>
            <div class="bg-slate-900/80 border border-slate-800/70 rounded-xl p-3">
              <span class="text-[10px] text-slate-400 uppercase tracking-wider block">Escape Velocity</span>
              <span id="inspect-escape" class="text-lg font-bold text-slate-100">11.19 km/s</span>
              <span id="inspect-moons" class="text-[11px] text-slate-500 block">1 Moon</span>
            </div>
          </div>
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Scientific Overview</h4>
            <p id="inspect-overview" class="text-sm leading-relaxed text-slate-300 bg-slate-900/50 p-3.5 rounded-xl border border-slate-800/60"></p>
          </div>
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Atmosphere Composition</h4>
            <div id="inspect-atmosphere-list" class="space-y-2"></div>
          </div>
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Did You Know?</h4>
            <ul id="inspect-facts-list" class="space-y-2"></ul>
          </div>
        </div>
        <div class="p-4 border-t border-slate-800 bg-slate-950 flex items-center gap-3">
          <button id="btn-inspect-focus" class="flex-1 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2">
            <span>🎯</span> Lock Orbit Focus
          </button>
          <button id="btn-inspect-jump" class="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider active:scale-95 transition-all flex items-center justify-center gap-2">
            <span>🚀</span> Test Jump Physics
          </button>
        </div>
      </aside>
    `;

    const closeHandler = () => this.close();
    this.container.querySelector('#inspector-backdrop').addEventListener('click', closeHandler);
    this.container.querySelector('#btn-close-inspector').addEventListener('click', closeHandler);

    this.container.querySelector('#btn-inspect-focus').addEventListener('click', () => {
      if (this.currentBody && this.onAction.onFocus) {
        this.onAction.onFocus(this.currentBody.id);
        this.close();
      }
    });
    this.container.querySelector('#btn-inspect-jump').addEventListener('click', () => {
      if (this.currentBody && this.onAction.onJumpTest) {
        this.onAction.onJumpTest(this.currentBody.id);
        this.close();
      }
    });
  }

  open(bodyData) {
    this.currentBody = bodyData;
    this.isOpen = true;
    this.container.querySelector('#inspector-title').innerText = bodyData.name;
    this.container.querySelector('#inspector-subtitle').innerText = `${bodyData.type} • ${bodyData.subtitle}`;
    const badgeColor = this.container.querySelector('#inspector-badge-color');
    badgeColor.style.backgroundColor = bodyData.colorHex;
    badgeColor.style.boxShadow = `0 0 12px ${bodyData.colorHex}`;

    this.container.querySelector('#inspect-gravity').innerText = `${bodyData.surfaceGravity.toFixed(2)} m/s²`;
    this.container.querySelector('#inspect-gravity-rel').innerText = `${bodyData.gravityRelative.toFixed(2)}x Earth gravity`;
    this.container.querySelector('#inspect-radius').innerText = `${bodyData.radiusKm.toLocaleString()} km`;
    this.container.querySelector('#inspect-radius-rel').innerText = `${bodyData.relativeRadius.toFixed(2)}x Earth`;
    this.container.querySelector('#inspect-dist-au').innerText = `${bodyData.orbitalDistanceAU.toFixed(2)} AU`;
    this.container.querySelector('#inspect-dist-km').innerText = bodyData.orbitalDistanceMillionKm ? `${bodyData.orbitalDistanceMillionKm.toLocaleString()}M km` : 'Origin';
    this.container.querySelector('#inspect-period').innerText = bodyData.orbitalPeriodDays ? `${bodyData.orbitalPeriodDays.toLocaleString()} days` : 'N/A';
    this.container.querySelector('#inspect-speed').innerText = `${bodyData.orbitalSpeedKmS} km/s orbital speed`;
    this.container.querySelector('#inspect-temp').innerText = `${bodyData.meanTempC} °C`;
    this.container.querySelector('#inspect-escape').innerText = `${bodyData.escapeVelocityKmS} km/s`;
    this.container.querySelector('#inspect-moons').innerText = `${bodyData.moonsCount} confirmed moon${bodyData.moonsCount === 1 ? '' : 's'}`;
    this.container.querySelector('#inspect-overview').innerText = bodyData.overview;

    const atmoList = this.container.querySelector('#inspect-atmosphere-list');
    if (bodyData.atmosphere && bodyData.atmosphere.length > 0) {
      atmoList.innerHTML = bodyData.atmosphere.map(gas => `
        <div>
          <div class="flex justify-between text-xs mb-1">
            <span class="text-slate-300 font-medium">${gas.gas}</span>
            <span class="text-cyan-400 font-mono">${gas.percent}%</span>
          </div>
          <div class="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
            <div class="h-full bg-cyan-500 rounded-full" style="width: ${gas.percent}%"></div>
          </div>
        </div>
      `).join('');
    } else {
      atmoList.innerHTML = `<span class="text-xs text-slate-500 italic">No significant atmosphere.</span>`;
    }

    const factsList = this.container.querySelector('#inspect-facts-list');
    factsList.innerHTML = bodyData.funFacts.map(fact => `
      <li class="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/50">
        <span class="text-cyan-400 text-sm leading-none mt-0.5">✦</span>
        <span>${fact}</span>
      </li>
    `).join('');

    this.container.querySelector('#inspector-backdrop').classList.remove('hidden');
    this.container.querySelector('#inspector-drawer').classList.remove('translate-x-full');
  }

  close() {
    this.isOpen = false;
    this.container.querySelector('#inspector-backdrop').classList.add('hidden');
    this.container.querySelector('#inspector-drawer').classList.add('translate-x-full');
    sound.playClick();
  }
}

// ==========================================
// 10. MASTER APPLICATION CONTROLLER
// ==========================================
class SolarSystemExhibitApp {
  constructor() {
    this.currentMode = 'orrery';
    this.orrery = null;
    this.sandbox = null;
    this.kiosk = null;
    this.inspector = null;
    this.tour = null;
    this.init();
  }

  init() {
    this.setupInspector();
    this.setupOrrery();
    this.setupNavigation();
    this.setupAudioControls();
    this.setupKeyboardShortcuts();
    this.setupTourUI();
    this.setupSandboxControls();
  }

  setupInspector() {
    const inspectorContainer = document.getElementById('inspector-mount');
    this.inspector = new PlanetInspector(inspectorContainer, {
      onFocus: (planetId) => {
        if (this.currentMode !== 'orrery') this.switchMode('orrery');
        this.orrery.focusPlanet(planetId);
      },
      onJumpTest: (planetId) => {
        this.switchMode('kiosk');
        if (this.kiosk) {
          this.kiosk.jumpWorldB = planetId;
          const selB = document.getElementById('select-world-b');
          if (selB) selB.value = planetId;
          this.kiosk.updateJumpTelemetry();
        }
      }
    });
  }

  setupOrrery() {
    const orreryContainer = document.getElementById('orrery-viewport');
    this.orrery = new OrreryEngine(orreryContainer, (bodyData) => {
      this.inspector.open(bodyData);
    });

    const quickBar = document.getElementById('orrery-quick-bar');
    if (quickBar) {
      quickBar.innerHTML = CELESTIAL_BODIES.map((body) => `
        <button data-id="${body.id}" class="btn-planet-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-xs text-slate-300 border border-slate-800 hover:border-slate-700 transition-all flex-shrink-0 active:scale-95">
          <span class="w-2.5 h-2.5 rounded-full shadow" style="background-color: ${body.colorHex}"></span>
          <span class="font-medium">${body.name}</span>
        </button>
      `).join('');

      quickBar.querySelectorAll('.btn-planet-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          this.orrery.focusPlanet(id);
          const data = CELESTIAL_BODIES.find(b => b.id === id);
          if (data) this.inspector.open(data);
          sound.playPlanetSelect(this.orrery.getPlanetIndex(id));
        });
      });
    }

    const btnPlayPause = document.getElementById('btn-orrery-pause');
    const timeSlider = document.getElementById('orrery-time-slider');
    const timeValueLabel = document.getElementById('orrery-time-value');
    const btnResetCam = document.getElementById('btn-reset-cam');
    const chkOrbits = document.getElementById('chk-orbits-toggle');
    const selectScale = document.getElementById('select-scale-mode');
    const btnStartTour = document.getElementById('btn-start-tour');

    if (btnPlayPause) {
      btnPlayPause.addEventListener('click', () => {
        const isPaused = this.orrery.togglePause();
        btnPlayPause.innerHTML = isPaused ? '<span>▶️ Play</span>' : '<span>⏸️ Pause</span>';
        sound.playClick();
      });
    }

    if (timeSlider) {
      timeSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        this.orrery.setTimeScale(val);
        if (timeValueLabel) timeValueLabel.innerText = `${val.toFixed(1)}x`;
      });
    }

    if (btnResetCam) btnResetCam.addEventListener('click', () => { this.orrery.resetCamera(); sound.playClick(); });
    if (chkOrbits) chkOrbits.addEventListener('change', e => { this.orrery.toggleOrbits(e.target.checked); sound.playClick(); });
    if (selectScale) selectScale.addEventListener('change', e => { this.orrery.setScaleMode(e.target.value); sound.playClick(); });
    if (btnStartTour) btnStartTour.addEventListener('click', () => { this.tour.startTour(); });
  }

  setupTourUI() {
    const tourBanner = document.getElementById('tour-hud-banner');
    const tourStepBadge = document.getElementById('tour-step-badge');
    const tourTitle = document.getElementById('tour-title');
    const tourNarration = document.getElementById('tour-narration');
    const tourProgressBar = document.getElementById('tour-progress-bar');
    const btnTourNext = document.getElementById('btn-tour-next');
    const btnTourPrev = document.getElementById('btn-tour-prev');
    const btnTourAuto = document.getElementById('btn-tour-auto');
    const btnTourClose = document.getElementById('btn-tour-close');

    this.tour = new ExhibitTourController(this.orrery, {
      onStepChange: (stop, currentIdx, totalSteps) => {
        if (tourBanner) tourBanner.classList.remove('hidden');
        if (tourStepBadge) tourStepBadge.innerText = `Step ${currentIdx + 1} of ${totalSteps} • ${stop.badge}`;
        if (tourTitle) tourTitle.innerText = stop.title;
        if (tourNarration) tourNarration.innerText = stop.narration;
        if (tourProgressBar) tourProgressBar.style.width = '100%';
      },
      onTick: (remainingSec, duration) => {
        if (tourProgressBar) tourProgressBar.style.width = `${(remainingSec / duration) * 100}%`;
      },
      onTourEnd: () => {
        if (tourBanner) tourBanner.classList.add('hidden');
      }
    });

    if (btnTourNext) btnTourNext.addEventListener('click', () => this.tour.next());
    if (btnTourPrev) btnTourPrev.addEventListener('click', () => this.tour.prev());
    if (btnTourAuto) {
      btnTourAuto.addEventListener('click', () => {
        const auto = this.tour.toggleAutoAdvance();
        btnTourAuto.innerText = auto ? 'Auto: ON' : 'Auto: OFF';
      });
    }
    if (btnTourClose) btnTourClose.addEventListener('click', () => this.tour.endTour());
  }

  setupNavigation() {
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-mode');
        this.switchMode(mode);
        sound.playClick();
      });
    });
  }

  switchMode(mode) {
    if (this.currentMode === mode) return;
    this.currentMode = mode;

    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      const btnMode = btn.getAttribute('data-mode');
      if (btnMode === mode) {
        btn.className = 'nav-tab-btn px-3.5 py-1.5 rounded-xl bg-cyan-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-1.5';
      } else {
        btn.className = 'nav-tab-btn px-3.5 py-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5';
      }
    });

    const viewOrrery = document.getElementById('view-orrery');
    const viewSandbox = document.getElementById('view-sandbox');
    const viewKiosk = document.getElementById('view-kiosk');

    if (viewOrrery) viewOrrery.classList.toggle('hidden', mode !== 'orrery');
    if (viewSandbox) viewSandbox.classList.toggle('hidden', mode !== 'sandbox');
    if (viewKiosk) viewKiosk.classList.toggle('hidden', mode !== 'kiosk');

    if (mode === 'sandbox' && !this.sandbox) {
      const sandboxCanvas = document.getElementById('sandbox-canvas');
      const sandboxControls = document.getElementById('sandbox-controls');
      this.sandbox = new GravitySandbox(sandboxCanvas, sandboxControls);
    } else if (mode === 'sandbox' && this.sandbox) {
      this.sandbox.resize();
    }

    if (mode === 'kiosk' && !this.kiosk) {
      const kioskContainer = document.getElementById('kiosk-container');
      this.kiosk = new GravityKiosk(kioskContainer);
    }

    if (mode === 'orrery' && this.orrery) {
      this.orrery.onWindowResize();
    }
  }

  setupSandboxControls() {
    const presetSelect = document.getElementById('select-gravity-preset');
    if (presetSelect) {
      presetSelect.innerHTML = GRAVITY_PRESETS.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
      presetSelect.addEventListener('change', (e) => {
        if (this.sandbox) {
          this.sandbox.loadPreset(e.target.value);
          const descEl = document.getElementById('preset-description');
          const p = GRAVITY_PRESETS.find(x => x.id === e.target.value);
          if (descEl && p) descEl.innerText = p.description;
        }
      });
    }

    const spawnButtons = document.querySelectorAll('.btn-spawn-type');
    spawnButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        spawnButtons.forEach(b => b.classList.remove('bg-cyan-500', 'text-slate-950', 'font-bold'));
        btn.classList.add('bg-cyan-500', 'text-slate-950', 'font-bold');
        if (this.sandbox) this.sandbox.setSpawnType(btn.getAttribute('data-type'));
        sound.playClick();
      });
    });

    const btnSandPause = document.getElementById('btn-sandbox-pause');
    const btnSandReset = document.getElementById('btn-sandbox-reset');
    const chkSpacetime = document.getElementById('chk-spacetime-toggle');
    const chkVectors = document.getElementById('chk-vectors-toggle');
    const chkTrails = document.getElementById('chk-trails-toggle');
    const sliderG = document.getElementById('slider-gravity-g');
    const labelG = document.getElementById('label-gravity-g');

    if (btnSandPause) {
      btnSandPause.addEventListener('click', () => {
        if (this.sandbox) {
          this.sandbox.isPaused = !this.sandbox.isPaused;
          btnSandPause.innerHTML = this.sandbox.isPaused ? '<span>▶️ Play</span>' : '<span>⏸️ Pause</span>';
          sound.playClick();
        }
      });
    }

    if (btnSandReset) {
      btnSandReset.addEventListener('click', () => {
        if (this.sandbox) this.sandbox.loadPreset(this.sandbox.currentPresetId);
      });
    }

    if (chkSpacetime) chkSpacetime.addEventListener('change', e => { if (this.sandbox) this.sandbox.showSpacetimeGrid = e.target.checked; sound.playClick(); });
    if (chkVectors) chkVectors.addEventListener('change', e => { if (this.sandbox) this.sandbox.showVelocityVectors = e.target.checked; sound.playClick(); });
    if (chkTrails) chkTrails.addEventListener('change', e => { if (this.sandbox) this.sandbox.showTrails = e.target.checked; sound.playClick(); });

    if (sliderG) {
      sliderG.addEventListener('input', e => {
        const val = parseFloat(e.target.value);
        if (this.sandbox) this.sandbox.physics.G = val;
        if (labelG) labelG.innerText = `G = ${val.toFixed(2)}`;
      });
    }
  }

  setupAudioControls() {
    const btnMute = document.getElementById('btn-toggle-sound');
    if (btnMute) {
      btnMute.addEventListener('click', () => {
        const isEnabled = sound.toggleSound();
        btnMute.innerHTML = isEnabled ? `
          <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
          <span class="text-xs text-slate-300">Audio: ON</span>
        ` : `
          <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg>
          <span class="text-xs text-slate-500">Audio: OFF</span>
        `;
      });
    }
  }

  setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      switch (e.key) {
        case '1': this.switchMode('orrery'); break;
        case '2': this.switchMode('sandbox'); break;
        case '3': this.switchMode('kiosk'); break;
        case ' ':
          e.preventDefault();
          if (this.currentMode === 'orrery' && this.orrery) {
            const btn = document.getElementById('btn-orrery-pause');
            const paused = this.orrery.togglePause();
            if (btn) btn.innerHTML = paused ? '<span>▶️ Play</span>' : '<span>⏸️ Pause</span>';
          } else if (this.currentMode === 'sandbox' && this.sandbox) {
            const btn = document.getElementById('btn-sandbox-pause');
            this.sandbox.isPaused = !this.sandbox.isPaused;
            if (btn) btn.innerHTML = this.sandbox.isPaused ? '<span>▶️ Play</span>' : '<span>⏸️ Pause</span>';
          }
          sound.playClick();
          break;
        case 'Escape':
          if (this.inspector && this.inspector.isOpen) this.inspector.close();
          else if (this.tour && this.tour.isActive) this.tour.endTour();
          else if (this.orrery) this.orrery.resetCamera();
          break;
      }
    });
  }
}

// Resilient auto-boot
function startExhibitApp() {
  if (typeof THREE === 'undefined' || typeof THREE.OrbitControls === 'undefined') {
    setTimeout(startExhibitApp, 60);
    return;
  }
  window.exhibitApp = new SolarSystemExhibitApp();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startExhibitApp);
} else {
  startExhibitApp();
}
