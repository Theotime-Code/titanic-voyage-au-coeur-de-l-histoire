:root {
  --bg: #100904;
  --bg-2: #071827;
  --cream: #ffedd7;
  --copper: #a86048;
  --gold: #c09060;
  --orange: #dc5000;
  --ice: #bfeaff;
  --deepsea: #103b54;
  --panel: rgba(255, 255, 255, 0.04);
  --line: rgba(255, 237, 215, 0.18);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(180deg, #f3efe6 0%, #f1f1ef 28%, #efeae2 100%);
  color: #120b07;
}

button,
a {
  font: inherit;
}

img {
  max-width: 100%;
  display: block;
}

#root {
  width: 100%;
}

.app-shell {
  min-height: 100vh;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem clamp(1rem, 2vw, 2rem);
  background: rgba(16, 9, 4, 0.45);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--line);
}

.brand,
.nav-link,
.sound-toggle {
  letter-spacing: 0.12em;
  font-size: 0.7rem;
  text-transform: uppercase;
}

.brand {
  color: var(--cream);
  font-weight: 800;
}

.nav {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-link {
  color: rgba(255, 237, 215, 0.76);
  text-decoration: none;
  transition: opacity 0.25s ease;
}

.nav-link:hover {
  opacity: 1;
}

.sound-toggle {
  border: 1px solid rgba(255, 237, 215, 0.3);
  background: transparent;
  color: var(--cream);
  padding: 0.7rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.sound-toggle:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 237, 215, 0.65);
}

.section {
  width: min(1200px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 5rem 0;
}

.hero-panel,
.cinematic-panel,
.cinematic-strip {
  position: relative;
}

.hero-panel::before,
.cinematic-panel::before,
.cinematic-strip::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 28px;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(7, 24, 39, 0.08), rgba(10, 14, 18, 0.02));
}

.hero-panel::before {
  background: radial-gradient(circle at top left, rgba(191, 234, 255, 0.18), transparent 34%);
}

.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  align-items: center;
  gap: 2rem;
  padding-top: 4rem;
}

.hero-copy {
  position: relative;
  z-index: 2;
}

.eyebrow {
  margin: 0 0 1rem;
  color: var(--copper);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 700;
}

.hero h1,
.section-heading h2 {
  margin: 0;
  font-weight: 900;
  letter-spacing: -0.06em;
  line-height: 0.95;
  color: #120d08;
}

.hero h1 {
  font-size: clamp(3.2rem, 6vw, 8rem);
  max-width: 600px;
}

.lead {
  max-width: 540px;
  font-size: clamp(1rem, 1.6vw, 1.45rem);
  color: rgba(18, 13, 8, 0.76);
  margin-top: 1rem;
  line-height: 1.6;
}

.scroll-indicator {
  margin-top: 2rem;
  font-size: 0.74rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--deepsea);
  animation: drift 2.8s ease-in-out infinite;
}

.hero-scene {
  position: relative;
  width: 100%;
  height: min(72vh, 760px);
  border-radius: 32px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 30%, rgba(191, 234, 255, 0.85), rgba(255, 255, 255, 0.1) 38%, transparent 60%);
  border: 1px solid rgba(16, 59, 84, 0.12);
  box-shadow: 0 30px 80px rgba(11, 17, 32, 0.12);
  animation: float 10s ease-in-out infinite;
}

.scene-frame {
  width: 100%;
  height: 100%;
}

.section-heading {
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.section-heading h2 {
  font-size: clamp(2.1rem, 4vw, 4.4rem);
  max-width: 900px;
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.fact-card {
  border: 1px solid rgba(17, 12, 9, 0.12);
  background: rgba(255, 255, 255, 0.36);
  border-radius: 20px;
  padding: 1.4rem 1rem;
  text-align: left;
  color: #120d08;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.fact-card:hover,
.fact-card.active {
  transform: translateY(-3px);
  border-color: rgba(168, 96, 72, 0.45);
  box-shadow: 0 20px 40px rgba(16, 9, 4, 0.06);
}

.fact-value {
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: -0.06em;
  color: var(--deepsea);
}

.fact-label {
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(18, 13, 8, 0.7);
}

.fact-card small {
  margin-top: 0.5rem;
  color: rgba(18, 13, 8, 0.68);
  line-height: 1.5;
}

.locations {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 1.2rem;
  position: relative;
  z-index: 1;
}

.location-card {
  background: rgba(255, 255, 255, 0.38);
  border: 1px solid rgba(17, 12, 9, 0.08);
  border-radius: 20px;
  padding: 1.3rem 1.2rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.location-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 30px rgba(17, 12, 9, 0.08);
}

.location-card h3 {
  margin: 0 0 0.7rem;
  font-size: 1.2rem;
}

.location-card p,
.narrative,
.dialogue-box p,
.quiz-feedback p,
.museum-card p,
.ending-box p {
  margin: 0;
  line-height: 1.7;
  color: rgba(18, 13, 8, 0.8);
}

.dialogue-box {
  position: relative;
  z-index: 1;
  max-width: 760px;
  background: rgba(17, 19, 27, 0.9);
  color: var(--cream);
  border-radius: 18px;
  padding: 1.25rem 1.4rem;
  border: 1px solid rgba(255, 237, 215, 0.12);
  box-shadow: 0 30px 60px rgba(6, 10, 19, 0.18);
}

.dialogue-role {
  display: inline-block;
  margin-bottom: 0.8rem;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
}

.timeline {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.timeline div {
  background: rgba(17, 19, 27, 0.88);
  color: var(--cream);
  padding: 1.2rem 1rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.timeline strong {
  font-size: 1.1rem;
}

.timeline span {
  color: rgba(255, 237, 215, 0.7);
}

.memory-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 1fr));
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.memory-grid div {
  padding: 1.2rem 1.15rem;
  background: rgba(255, 255, 255, 0.32);
  border: 1px solid rgba(17, 12, 9, 0.08);
  border-radius: 18px;
  font-weight: 600;
}

.museum-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.museum-card {
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(17, 12, 9, 0.08);
  border-radius: 22px;
  padding: 1.3rem 1.2rem;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.museum-card.highlight {
  background: linear-gradient(180deg, rgba(160, 104, 71, 0.1), rgba(255, 255, 255, 0.18));
}

.museum-card span {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  color: var(--copper);
  font-weight: 700;
  margin-bottom: 1rem;
}

.museum-card h3 {
  margin: 0 0 0.8rem;
  font-size: 1.4rem;
}

.quiz-card {
  background: rgba(17, 19, 27, 0.93);
  color: var(--cream);
  border-radius: 28px;
  padding: clamp(1.4rem, 3vw, 2.4rem);
  border: 1px solid rgba(255, 237, 215, 0.12);
  position: relative;
  z-index: 1;
}

.quiz-progress {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
  color: rgba(255, 237, 215, 0.8);
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: rgba(255, 237, 215, 0.11);
  border-radius: 999px;
  overflow: hidden;
}

.progress-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--gold), var(--orange));
}

.quiz-card h3 {
  margin: 0 0 1.2rem;
  font-size: clamp(1.4rem, 2vw, 2.4rem);
  line-height: 1.2;
}

.answer-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 0.85rem;
}

.answer-button {
  border: 1px solid rgba(255, 237, 215, 0.18);
  background: rgba(255, 237, 215, 0.03);
  color: var(--cream);
  border-radius: 14px;
  padding: 0.9rem 1rem;
  text-align: left;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.answer-button:hover {
  transform: translateY(-1px);
}

.answer-button.selected {
  border-color: rgba(192, 144, 96, 0.85);
  background: rgba(192, 144, 96, 0.14);
}

.quiz-feedback {
  margin-top: 1.4rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 237, 215, 0.15);
}

.quiz-feedback.correct {
  color: #d9f6d0;
}

.quiz-feedback.wrong {
  color: #ffd7c1;
}

.cta,
.ghost-button {
  margin-top: 1rem;
  border: 0;
  border-radius: 999px;
  padding: 0.9rem 1.25rem;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.cta {
  background: linear-gradient(135deg, var(--gold), var(--orange));
  color: #150d0a;
}

.ghost-button {
  background: transparent;
  border: 1px solid rgba(17, 12, 9, 0.16);
  color: #170d09;
  margin-left: 0.75rem;
}

.cta:hover,
.ghost-button:hover {
  transform: translateY(-1px);
}

.ending-box {
  background: linear-gradient(180deg, rgba(17, 19, 27, 0.95), rgba(12, 17, 24, 0.92));
  border: 1px solid rgba(255, 237, 215, 0.12);
  color: var(--cream);
  border-radius: 28px;
  padding: clamp(1.6rem, 4vw, 3rem);
  text-align: center;
}

.ending-box h2 {
  margin: 0 0 1rem;
  font-size: clamp(2rem, 4vw, 4.2rem);
  letter-spacing: -0.06em;
  line-height: 1;
  color: var(--cream);
}

.ending-box p {
  color: rgba(255, 237, 215, 0.82);
}

.ending-actions {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

@keyframes drift {
  0%, 100% { transform: translateY(0px); opacity: 0.8; }
  50% { transform: translateY(7px); opacity: 1; }
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    padding-top: 2rem;
  }

  .facts-grid,
  .locations,
  .timeline,
  .memory-grid,
  .museum-grid,
  .answer-list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .topbar {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav {
    width: 100%;
  }

  .facts-grid,
  .locations,
  .timeline,
  .memory-grid,
  .museum-grid,
  .answer-list {
    grid-template-columns: 1fr;
  }

  .hero-scene {
    height: 420px;
  }

  .ending-actions {
    flex-direction: column;
  }

  .ghost-button {
    margin-left: 0;
  }
}

