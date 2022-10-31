import React from 'react'
import { fakeAuthProvider } from "../auth/auth";
import data from "../data/MockData.json";

interface AuthContextType {
  user: any;
  studySettings: any;
  signin: (email: string, password: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

function useAuth() {
  return React.useContext(AuthContext);
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any>(null);
  const [studySettings, setStudySettings] = React.useState<any>(null);

  const signin = (email: string, password: string, callback: VoidFunction) => {
    if (email.trim() === '' || password.trim() === '') {
      console.log('Email or password required');
      return;
    }

    return fakeAuthProvider.signin(() => {
      setUser({
        ...data.user
      });
      setStudySettings({
        ...data.user.studySettings
      });
      callback();
    });
  }

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, studySettings, signin, signout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };
