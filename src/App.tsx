import React, { useEffect, useState } from 'react';
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
import Settings from './pages/Settings/Settings';
import Account from './pages/Account/Account';
import NotificationProvider from './components/Notification/NotificationProvider';
import { useNotification } from "./components/Notification/NotificationProvider";

function App() {
  const [desktopDevice, setDesktopDevice] = useState(false);
  const dispatch: any = useNotification();

  useEffect(() => {
    window.addEventListener("resize", updateDeviceSize);
    updateDeviceSize();
    return () => {
      window.removeEventListener("resize", updateDeviceSize);
    }
  }, []);

  // TODO: add device detection in global state
  const updateDeviceSize = () => {
    if (window.innerWidth > 800) {
      setDesktopDevice(true);
    } else {
      setDesktopDevice(false);
    }
  }

  /* TODO add notification system  
  const handleNewNotification = () => {
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: 1,
        color: "red",
        message: "this is a test",
      }
    });
  }

  useEffect(() => {
    handleNewNotification();
  }, [])
  */

  return (
    <div>
      <AuthProvider>
        <NotificationProvider>
          <Routes>
            <Route element={<Layout />}>
              {/* Unprotected Routes */}
              <Route path="/" element={<LandingPage desktop={desktopDevice} />} />
              <Route path="/login" element={<LandingPage desktop={desktopDevice} />} />

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
              <Route
                path="/settings"
                element={
                  <RequireAuth>
                    <Settings />
                  </RequireAuth>
                }
              />
              <Route
                path="/account"
                element={
                  <RequireAuth>
                    <Account />
                  </RequireAuth>
                }
              />
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
        </NotificationProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
