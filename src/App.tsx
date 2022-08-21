import React, { useEffect } from 'react';
import './assets/App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Layout from './pages/Layout/Layout';
import {
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import DeckDetails from './pages/DeckDetails/DeckDetails';
import Quiz from './pages/Quiz/Quiz';
import { QuizModality } from './pages/Quiz/QuizModality';
import { AuthProvider, useAuth } from './auth/AuthProvider';
import RequireAuth from './auth/RequireAuth';

function App() {

  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            {/* Unprotected Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LandingPage />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              } />
            <Route
              path="/deck:deckID"
              element={
                <RequireAuth>
                  <DeckDetails />
                </RequireAuth>
              } />
          </Route>
          <Route
            path="/deck:deckID/spaced_repetition"
            element={
              <RequireAuth>
                <Quiz quizModality={QuizModality.spacedRepetition} />
              </RequireAuth>
            } />
          <Route
            path="/deck:deckID/all_cards"
            element={
              <RequireAuth>
                <Quiz quizModality={QuizModality.allCards} />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
