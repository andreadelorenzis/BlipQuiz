import React, { useState } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../config/firebaseConfig';
import { register } from '../auth/authAPI';

interface AuthContextType {
  user: any;
  studySettings: any;
  signinWithEmailAndPass: Function;
  signupWithEmailAndPass: Function;
  checkAuth: () => Boolean;
  signout: (callback: VoidFunction) => void;
  isAuthenticated: Boolean;
  token: String;
}

const AuthContext = React.createContext<AuthContextType>(null!);

function useAuth() {
  return React.useContext(AuthContext);
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false || window.localStorage.getItem('isAuthenticated') === 'true');
  const [user, setUser] = React.useState<any>(null);
  const [token, setToken] = useState('');
  const [studySettings, setStudySettings] = React.useState<any>(null);

  // Register user with email and password
  const signupWithEmailAndPass = async (email: string, password: string, callback: VoidFunction) => {
    // Validation code
    if (email.trim() === '') {
      alert('Please, add an email.');
      return;
    }
    if (password.trim() === '') {
      alert('Please, add a password');
      return;
    }

    try {
      // Create new account in Firebase
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const user = response.user;
      const token = await user.getIdToken();

      // Create new account in backend
      const data = await register(email, token);
      setIsAuthenticated(true);
      setUser(user);
      callback();
    } catch (err: any) {
      // If user was created in firebase, and then an error occured, delete user
      if (user) {
        user.delete();
      }

      if (err.code === 'auth/email-already-in-use') {
        alert('Email already taken!');
      } else {
        alert('Something went wrong, Please try again later');
      }
    }
  }

  // Login user with email and password
  const signinWithEmailAndPass = (email: string, password: string, callback: VoidFunction) => {
    // Validation code
    if (email.trim() === '' || password.trim() === '') {
      console.log('Email or password required');
      return;
    }

    // Login in firebase
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        user.getIdToken().then((token) => {
          setToken(token);
        });
        window.localStorage.setItem('isAuthenticated', 'true');
        setIsAuthenticated(true);
        callback();
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  // Logout user
  const signout = (callback: VoidFunction) => {
    signOut(auth).then(() => {
      // Sign-out successful
      setIsAuthenticated(false);
      setUser(null);
      setToken('');
      window.localStorage.setItem('isAuthenticated', 'false');
      window.localStorage.removeItem('user');
      callback();
    }).catch((error) => {
      console.log(error);
    });
  };

  // Check if user is still authenticated
  const checkAuth = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setIsAuthenticated(true);
        const uid = user.uid;
        user.getIdToken().then((token) => {
          setToken(token);
        });
      } else {
        // User is signed out
        window.localStorage.setItem('isAuthenticated', 'false');
        setIsAuthenticated(false);
      }
    });
    return isAuthenticated;
  }

  let value = { user, studySettings, signupWithEmailAndPass, signinWithEmailAndPass, checkAuth, signout, isAuthenticated, token };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };
