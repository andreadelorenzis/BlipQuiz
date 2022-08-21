import React from 'react'
import { fakeAuthProvider } from "../data/auth";

interface AuthContextType {
  user: any;
  signin: (email: string, password: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

function useAuth() {
  return React.useContext(AuthContext);
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any>(null);

  const signin = (email: string, password: string, callback: VoidFunction) => {
    if (email.trim() === '' || password.trim() === '') {
      console.log('Email or password required');
      return;
    }

    return fakeAuthProvider.signin(() => {
      setUser({
        email: email,
        password: password
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

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, useAuth };
