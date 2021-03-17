import React, { createContext, useState } from "react";

export const COLORS = {
  lightMode: {
    icon: "white",
    btnBG: "#287271",
    btnText: "white",
    secBtnBG: "white",
    secBtnText: "#287271"
  },
  darkMode: {
    icon: "red",
    btnBG: "orange",
    btnText: "yellow"
  },
};

export const ColorThemeContext = createContext();
export const SetColorThemeContext = createContext();

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