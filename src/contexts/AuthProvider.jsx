/* eslint-disable react/prop-types */
import{ createContext, useState, useEffect } from "react";
import axios from "axios";
import { loginEndpoint } from "../services/apiEndpoints";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = async (credentials) => {
    try {
      setLoading(true);
      await axios
        .post(loginEndpoint, credentials)
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error("Login failed", error);
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    // You can add logic here to check if the user is already authenticated
    // For example, check local storage or make a request to your API.
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};