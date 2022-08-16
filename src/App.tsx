import React from 'react';
import './assets/App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home';
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

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/deck:deckID" element={<DeckDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
