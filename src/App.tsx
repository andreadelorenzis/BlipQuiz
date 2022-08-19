import React from 'react';
import './assets/App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Layout from './pages/Layout/Layout';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import DeckDetails from './pages/DeckDetails/DeckDetails';
import Quiz from './pages/Quiz/Quiz';
import { QuizModality } from './pages/Quiz/QuizModality';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/deck:deckID" element={<DeckDetails />} />
        </Route>
        <Route path="/deck:deckID/spaced_repetition" element={<Quiz quizModality={QuizModality.spacedRepetition} />} />
        <Route path="/deck:deckID/all_cards" element={<Quiz quizModality={QuizModality.allCards} />} />
      </Routes>
    </div>
  );
}

export default App;
