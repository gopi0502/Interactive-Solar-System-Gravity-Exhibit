# 🪐 Interactive Solar System & Gravity Exhibit

A museum-grade interactive web application combining a **3D Solar System Orrery**, an **N-Body Gravity & Orbital Mechanics Sandbox**, and a **Comparative Planetary Gravity Kiosk**.

Developed with Three.js, HTML5 Canvas, Tailwind CSS, and the Web Audio API. 100% self-contained with procedural planetary texture generation and algorithmic audio synthesis—no external image assets or internet connectivity required.

---

## 🌟 Exhibit Highlights & Interactive Modes

### 1. 🌌 3D Solar System Orrery & Celestial Explorer
- **High-Fidelity 3D Planetary Models**: The Sun, Mercury, Venus, Earth with rotating cloud layers, the Moon, Mars, Jupiter with the Great Red Spot, Saturn with textured rings, Uranus, Neptune, and Pluto.
- **Accurate Relative Orbital Mechanics**: Proportional orbital velocities ($v \propto \frac{1}{\sqrt{r}}$), orbital inclinations, axial tilts, and rotation rates.
- **Instanced Asteroid Belt**: 1,800 procedural asteroids orbiting between Mars and Jupiter.
- **Dynamic Camera Navigation**: Free 3D OrbitControls, smooth target-tracking that stays locked to a planet as it travels in its orbit, and one-click reset to ecliptic overview.
- **Scale Switcher**: Toggle between **Exhibit Enhanced View** (scaled up for clear observation) and **True Proportional View** (accurate astronomical ratios).
- **Time Dilation Controls**: Variable time warp slider (0.1x to 25x), play, pause, and reverse.
- **Guided Museum Tour**: 10-stop cinematic fly-through tour with educational narrations, auto-advance timers, and audio cues.

### 2. 🎯 N-Body Gravity & Orbital Mechanics Sandbox
- **Symplectic Velocity-Verlet Integrator**: Energy-conserving numerical integration of Newton's Law of Universal Gravitation:
  $$\vec{F}_{ij} = G \frac{m_i m_j}{(r_{ij}^2 + \epsilon^2)^{3/2}} \vec{r}_{ij}$$
  with Plummer softening parameter $\epsilon$ to eliminate infinite singularities during near misses.
- **Interactive Spacetime Curvature Fabric**: Dynamically distorted 2D/2.5D grid illustrating General Relativity: mass warps the spacetime metric downward proportional to gravitational potential $\Phi(x, y) = -\sum \frac{G m_i}{\sqrt{r_i^2 + \epsilon^2}}$.
- **Elastic Aim & Launch Vector Tool**: Click and drag from any point in space to aim a new celestial body or satellite. Displays real-time **predictive dotted orbital trajectory** calculated 140 steps forward.
- **Inelastic Collisions & Mergers**: When celestial bodies collide, they coalesce into a larger mass, conserving linear momentum ($m_1 \vec{v}_1 + m_2 \vec{v}_2 = m_{new} \vec{v}_{new}$), triggering shockwave particle sparks.
- **Educational Orbital Scenarios**:
  - **Apollo Lunar Free-Return Trajectory**: Earth-Moon gravity slingshot returning safely without propulsion.
  - **Voyager Gravity Assist**: Harvesting Jupiter's orbital energy to reach escape velocity.
  - **Euler-Chenciner Figure-8**: Legendary stable periodic solution to the 3-body problem.
  - **Tatooine Binary Star**: Circumbinary planetary orbit around two mutually orbiting stars.
  - **Lagrange Trojans (L4 & L5)**: Stable equilibrium points 60° ahead and behind an orbiting world.

### 3. ⚖️ Comparative Planetary Gravity Kiosk
- **Station A: Your Weight Across the Worlds**:
  - Enter your mass in **kg** or **lbs** to instantly calculate your weight across all 8 planets, the Sun, the Moon, and Pluto.
  - Color-coded comparison bars and tactile descriptions of physical sensations.
- **Station B: Planetary Jump Physics Chamber**:
  - Side-by-side animated astronaut jump simulator comparing two planets simultaneously.
  - Uses exact kinematic equations:
    $$\text{Max Height: } h = \frac{v_0^2}{2g} \qquad \text{Hang Time: } t = \frac{2v_0}{g}$$
- **Station C: Galileo & Apollo 15 Vacuum Drop Tower**:
  - Test the equivalence principle by dropping two items (e.g., geology hammer vs. falcon feather, bowling ball vs. apple).
  - Toggle between **Vacuum Chamber** (where both strike the floor at the exact same millisecond, replicating Commander David Scott's Apollo 15 lunar demonstration) and **Atmospheric Resistance** (where aerodynamic drag slows lighter items).

### 4. 📋 Planetary Inspector Drawer
- Comprehensive astrophysical fact sheet for every celestial body:
  - Surface gravity ($g$ and Earth multiples)
  - Mean radius & volume
  - Semi-major axis (AU and km)
  - Orbital period & mean orbital speed
  - Surface temperature extremes
  - Atmospheric composition breakdown with percentage visual bars
  - Escape velocity ($v_e = \sqrt{\frac{2GM}{R}}$)
  - Historical discoveries and key scientific facts

---

## 🚀 How to Run

### Method 1: Instant Launch (Zero Installation)
Simply double-click `start.bat` (or run `start.ps1` in PowerShell), or open `index.html` directly in any modern web browser (Chrome, Edge, Firefox, Brave, Safari).

### Method 2: Development Server (Vite)
If Node.js is available on your machine:
```bash
npm install
npm run dev
```

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| `1` | Switch to **3D Solar System Orrery** |
| `2` | Switch to **Gravity & Slingshot Sandbox** |
| `3` | Switch to **Comparative Gravity Kiosk** |
| `Space` | Pause / Resume current simulation |
| `M` | Toggle Ambient Space Drone & Sound FX |
| `Esc` | Close Planet Inspector / Exit Guided Tour / Reset Camera |

---

## 🪐 Astrodynamics & Physics Reference

- **Newton's Gravitational Force Law**:
  $$F = G \frac{m_1 m_2}{r^2}$$
- **Surface Gravitational Acceleration**:
  $$g = \frac{G M}{R^2}$$
- **Escape Velocity**:
  $$v_e = \sqrt{\frac{2GM}{R}}$$
- **Vis-Viva Equation (Orbital Velocity)**:
  $$v = \sqrt{GM \left(\frac{2}{r} - \frac{1}{a}\right)}$$

---

## 🎨 Asset Architecture

All planetary textures are procedurally generated in-memory on HTML5 `<canvas>` elements at startup using seeded multi-octave Fractional Brownian Motion (fBm) noise algorithms. Audio is generated via Web Audio API oscillators, biquad filters, and low-frequency noise modulators.
