import { createContext, useContext, useState } from "react";

interface ThemeContextProps {
  toggleTheme: () => void;
  theme: string;
}

interface ThemeProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

function ThemeProvider({ children }: ThemeProps) {
  const [theme, setTheme] = useState(() => {
    return typeof window !== "undefined" ? localStorage.getItem("selected-theme") ?? "light" : "light";
  });

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("dark-theme", newTheme === "dark");
    localStorage.setItem("selected-theme", newTheme);
  }

  return <ThemeContext.Provider value={{ toggleTheme, theme }}>{children}</ThemeContext.Provider>;
}

function useTheme(): ThemeContextProps {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Missing ThemeProvider");
  }

  return context;
}

export { ThemeProvider, useTheme };
