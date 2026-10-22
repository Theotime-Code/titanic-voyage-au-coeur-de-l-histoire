import { useMemo, useState } from 'react';
import TitanicScene from './components/TitanicScene';

type Quiz = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

const navItems = ['TITANIC', 'LE VOYAGE', 'À BORD', 'LE NAUFRAGE', 'QUIZ'];

const facts = [
  { value: '269 MÈTRES', label: 'sa longueur', detail: 'Presque trois terrains de football mis bout à bout.' },
  { value: '4 CHEMINÉES', label: 'au-dessus du pont', detail: 'Trois d’entre elles servaient vraiment à évacuer la fumée.' },
  { value: '≈ 2 200', label: 'personnes à bord', detail: 'Passagers et membres de l’équipage ensemble.' },
  { value: '1912', label: 'première traversée', detail: 'L’année du départ historique vers New York.' },
];

const quizData: Quiz[] = [
  {
    question: 'En quelle année le Titanic a-t-il fait sa traversée inaugurale ?',
    options: ['1905', '1912', '1898', '1920'],
    answer: '1912',
    explanation: 'Le Titanic a commencé son voyage inaugural en 1912, en avril.'
  },
  {
    question: 'Que le Titanic a-t-il heurté ?',
    options: ['Un bateau', 'Un iceberg', 'Un récif', 'Une tempête'],
    answer: 'Un iceberg',
    explanation: 'Le navire a rencontré un iceberg au large de l’Atlantique Nord.'
  },
  {
    question: 'Pourquoi les canots de sauvetage étaient-ils importants ?',
    options: ['Pour jouer', 'Pour sauver des personnes', 'Pour aller plus vite', 'Pour rendre le bateau plus lourd'],
    answer: 'Pour sauver des personnes',
    explanation: 'Ils étaient essentiels pour évacuer les passagers dans une situation de détresse.'
  },
];

export default function App() {
  const [soundOn, setSoundOn] = useState(false);
  const [selectedFact, setSelectedFact] = useState<number | null>(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const currentQuiz = quizData[currentQuestion];
  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  const handleAnswer = (option: string) => {
    setSelectedAnswer(option);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      return;
    }
    setCurrentQuestion(0);
    setSelectedAnswer(null);
  };

  const isCorrect = selectedAnswer === currentQuiz.answer;

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">TITANIC</div>
        <nav className="nav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a href="#" key={item} className="nav-link">
              {item}
            </a>
          ))}
        </nav>
        <button className="sound-toggle" onClick={() => setSoundOn((prev) => !prev)} aria-label="Activer ou désactiver le son">
          {soundOn ? 'SON ON' : 'SON OFF'}
        </button>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">RMS TITANIC · PREMIÈRE TRAVERSÉE</p>
            <h1>LE GÉANT DES MERS</h1>
            <p className="lead">Un voyage extraordinaire. Une histoire vraie. Un souvenir qui ne s'efface pas.</p>
            <div className="scroll-indicator">DÉFILE POUR EMBARQUER ↓</div>
          </div>
          <div className="hero-scene">
            <div className="scene-frame">
              <TitanicScene />
            </div>
          </div>
        </section>

        <section className="story section">
          <div className="section-heading">
            <p className="eyebrow">CHAPITRE 1</p>
            <h2>UN HÔTEL AU MILIEU DE L’OCÉAN</h2>
          </div>

          <div className="facts-grid">
            {facts.map((fact, index) => (
              <button
                key={fact.value}
                className={`fact-card ${selectedFact === index ? 'active' : ''}`}
                onClick={() => setSelectedFact(index)}
                type="button"
              >
                <span className="fact-value">{fact.value}</span>
                <span className="fact-label">{fact.label}</span>
                {selectedFact === index && <small>{fact.detail}</small>}
              </button>
            ))}
          </div>
        </section>

        <section className="section deck-layout">
          <div className="section-heading">
            <p className="eyebrow">CHAPITRE 2</p>
            <h2>À BORD DU TITANIC</h2>
          </div>

          <div className="locations">
            <article className="location-card">
              <h3>Grandes escaliers</h3>
              <p>Un hall majestueux où les voyageurs de première classe descendaient avec élégance.</p>
            </article>
            <article className="location-card">
              <h3>Salle à manger</h3>
              <p>De grands repas et des contrastes forts entre les riches cabines et les espaces plus simples.</p>
            </article>
            <article className="location-card">
              <h3>Cabines</h3>
              <p>Des chambres très différentes selon le confort et le rang social des passagers.</p>
            </article>
            <article className="location-card">
              <h3>Gymnase</h3>
              <p>Un espace lumineux pour se détendre, très avancé pour l’époque.</p>
            </article>
            <article className="location-card">
              <h3>Machines</h3>
              <p>Le cœur du navire : une puissance à vapeur qui fait avancer le paquebot.</p>
            </article>
            <article className="location-card">
              <h3>Pont ouvert</h3>
              <p>Le grand ciel, les canots, les garde-corps et l’horizon de l’Atlantique.</p>
            </article>
          </div>
        </section>

        <section className="section captain-block">
          <div className="section-heading">
            <p className="eyebrow">LE CAPITAINE</p>
            <h2>CAPITAINE EDWARD SMITH</h2>
          </div>

          <div className="dialogue-box">
            <span className="dialogue-role">CAPITAINE SMITH</span>
            <p>
              « Bienvenue à bord ! Le Titanic s’apprête à traverser l’Atlantique. Notre destination est New York. »
            </p>
          </div>
        </section>

        <section className="section timeline-block">
          <div className="section-heading">
            <p className="eyebrow">DU DÉPART À L’ICEBERG</p>
            <h2>10 AVRIL 1912 · LE VOYAGE COMMENCE</h2>
          </div>

          <div className="timeline">
            <div><strong>Southampton</strong><span>Départ</span></div>
            <div><strong>Cherbourg</strong><span>Escale</span></div>
            <div><strong>Queenstown</strong><span>Arrivée</span></div>
            <div><strong>Atlantique</strong><span>Mer ouverte</span></div>
          </div>
        </section>

        <section className="section collision-block">
          <div className="section-heading">
            <p className="eyebrow">23 H 40 · 14 AVRIL 1912</p>
            <h2>L’ICEBERG</h2>
          </div>
          <p className="narrative">
            Le Titanic a heurté un iceberg. La coque a été endommagée et l’eau a commencé à entrer dans le navire.
            La situation est très grave.
          </p>
        </section>

        <section className="section sinking-block">
          <div className="section-heading">
            <p className="eyebrow">15 AVRIL 1912 · 2 H 20</p>
            <h2>LE TITANIC DISPARAÎT SOUS L’OCÉAN</h2>
          </div>
          <p className="narrative">
            Environ 1 500 personnes ont perdu la vie. Environ 700 ont survécu. Nous nous souvenons de toutes les personnes touchées par cette tragédie.
          </p>
        </section>

        <section className="section final-section">
          <div className="section-heading">
            <p className="eyebrow">LEÇON ET MÉMOIRE</p>
            <h2>UNE HISTOIRE QUI A CHANGÉ LA SÉCURITÉ EN MER</h2>
          </div>
          <div className="memory-grid">
            <div>Des canots plus nombreux</div>
            <div>Des avertissements plus sérieux</div>
            <div>Des procédures d’urgence</div>
            <div>Des règles internationales</div>
          </div>
        </section>

        <section className="quiz section">
          <div className="section-heading">
            <p className="eyebrow">TEST</p>
            <h2>TESTE TES CONNAISSANCES</h2>
          </div>

          <div className="quiz-card">
            <div className="quiz-progress">
              <span>{currentQuestion + 1}/{quizData.length}</span>
              <div className="progress-bar"><span style={{ width: `${progress}%` }} /></div>
            </div>

            <h3>{currentQuiz.question}</h3>

            <div className="answer-list">
              {currentQuiz.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleAnswer(option)}
                  className={`answer-button ${selectedAnswer === option ? 'selected' : ''}`}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              ))}
            </div>

            {selectedAnswer !== null && (
              <div className={`quiz-feedback ${isCorrect ? 'correct' : 'wrong'}`}>
                <strong>{isCorrect ? 'Bonne réponse !' : 'Pas tout à fait...'}</strong>
                <p>{currentQuiz.explanation}</p>
                <button type="button" className="cta" onClick={nextQuestion}>
                  {currentQuestion < quizData.length - 1 ? 'Question suivante' : 'Recommencer'}
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
