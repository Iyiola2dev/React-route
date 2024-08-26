import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";
import { useLocation } from "react-router-dom";

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Get the user local staorage if it exist
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  //Use useEffect to update localStorage whenever the theme changes
  useEffect(()=>{
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
    console.log(darkMode);
    console.log(localStorage.getItem("darkMode"));
  })
  const location = useLocation();
  const { pathname } = location;

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, pathname }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
