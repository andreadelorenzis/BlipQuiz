import React from 'react'
import data from "../data/MockData.json";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useAuth } from './AuthProvider';

function RequireAuth({ children }: { children: JSX.Element }) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children;
}

export default RequireAuth
