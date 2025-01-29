import { createContext, useContext, useState, useEffect } from "react";

// Create the context
const AuthContext = createContext(null);

// AuthProvider component (wrap this around your App)
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Simulate checking if the user is logged in (fetch from localStorage or API)
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Login function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Store in localStorage
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Clear localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
