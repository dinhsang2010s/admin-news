import { ReactNode, createContext, useState } from "react";

interface ThemeProps {
  children: ReactNode;
}
interface ThemeContext {
  theme: string;
}

const themeContext = {
  theme: "primary",
};

export const ThemeContext = createContext<ThemeContext>(themeContext);

export const ThemeContextProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState(themeContext.theme);
  const toggleTheme = (theme: string) => setTheme(theme);
  const themeContextDynamic = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={themeContextDynamic}>
      {children}
    </ThemeContext.Provider>
  );
};
