import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [generatedTheme, setGeneratedTheme] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const applyTheme = (theme) => {
    setGeneratedTheme(theme);
    // Apply CSS variables to root
    const root = document.documentElement;
    if (theme?.colors) {
      Object.entries(theme.colors).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key}`, value);
      });
    }
  };

  const resetTheme = () => {
    setGeneratedTheme(null);
    // Reset all custom properties by removing them
    const root = document.documentElement;
    ['primary', 'secondary', 'accent', 'background', 'surface'].forEach(key => {
      root.style.removeProperty(`--color-${key}`);
    });
  };

  return (
    <ThemeContext.Provider value={{ generatedTheme, applyTheme, resetTheme, isGenerating, setIsGenerating }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
