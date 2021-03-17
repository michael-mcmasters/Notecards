import React, { createContext, useState } from "react";

export const COLORS = {
  lightMode: {
    background: "white",
    textPrime: "#222527",
    textSec: "#b7bfc6",
  },
  darkMode: {
    background: "#15202b",
    textPrime: "#d8dadc",
    textSec: "#8796a0",
  },
};

// When these are "called", they reference the <> provider tags below.
export const ColorThemeContext = createContext();
export const SetColorThemeContext = createContext();

// Contexts are essentially functional components. By passing children here,
// any children <> tags referencing this tag from the parent class can access these properties.
export function ColorThemeProvider({ children }) {
  const [colorTheme, setColorTheme] = useState(COLORS.darkMode);

  function handleSetColorTheme() {
    if (colorTheme === COLORS.lightMode) {
      setColorTheme(COLORS.darkMode);
    } else {
      setColorTheme(COLORS.lightMode);
    }
  }

  return (
    <ColorThemeContext.Provider value={colorTheme}>
      <SetColorThemeContext.Provider value={handleSetColorTheme}>
        {children}
      </SetColorThemeContext.Provider>
    </ColorThemeContext.Provider>
  );
}