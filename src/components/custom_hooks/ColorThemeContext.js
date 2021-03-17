import React, { createContext, useState } from "react";

export const COLORS = {
  lightMode: {
    icon: "white",
    btnBG: "#287271",
    btnText: "white"
  },
  darkMode: {
  },
};

// When these are "called", they reference the <> provider tags below.
export const ColorThemeContext = createContext();
export const SetColorThemeContext = createContext();

// Contexts are essentially functional components. By passing children here,
// any children <> tags referencing this tag from the parent class can access these properties.
export function ColorThemeProvider({ children }) {
  const [colorTheme, setColorTheme] = useState(COLORS.lightMode);

  function handleToggleColorTheme() {
    if (colorTheme === COLORS.lightMode) {
      setColorTheme(COLORS.darkMode);
    } else {
      setColorTheme(COLORS.lightMode);
    }
  }

  return (
    <ColorThemeContext.Provider value={colorTheme}>
      <SetColorThemeContext.Provider value={handleToggleColorTheme}>
        {children}
      </SetColorThemeContext.Provider>
    </ColorThemeContext.Provider>
  );
}