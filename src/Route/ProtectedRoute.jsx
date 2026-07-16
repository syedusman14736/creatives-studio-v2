import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        if (!token) {
            setIsLoading(false);
            return;
        }

        const validateToken = async () => {
            try {
                await axios.get(
                    `${apiUrl}/validate/token`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setIsAuthenticated(true);
            } catch (error) {
                localStorage.removeItem("token");
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };

        validateToken();
    }, [token]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!token || !isAuthenticated) {
        return <Navigate to="/auth/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
