import React from 'react'
import data from "../data/MockData.json";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useAuth } from '../context/AuthProvider';
import { onAuthStateChanged } from "firebase/auth";

function RequireAuth({ children }: { children: JSX.Element }) {
    let location = useLocation();
    const auth = useAuth();

    if (!auth.isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children;
}

export default RequireAuth
