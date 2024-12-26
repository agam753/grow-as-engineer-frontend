import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

interface JwtPayload {
  exp: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  const login = (token: string) => {
    const decodedToken = jwtDecode<JwtPayload>(token);
    const expiryTime = decodedToken.exp * 1000;
    const currentTime = Date.now();

    localStorage.setItem("token", token);
    localStorage.setItem("tokenExpiry", expiryTime.toString());
    setToken(token);

    setTimeout(() => {
      logout();
    }, expiryTime - currentTime);
    router.replace("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
    setToken(null);
    router.replace("/dashboard/login");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedExpiryTime = localStorage.getItem("tokenExpiry");

    if (storedToken && storedExpiryTime) {
      const expiryTime = parseInt(storedExpiryTime, 0);
      const currentTime = Date.now();

      if (currentTime >= expiryTime) {
        logout();
      } else {
        setToken(storedToken);
        setTimeout(() => {
          logout();
        }, expiryTime - currentTime);
      }
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiry");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
