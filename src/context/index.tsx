import { ThemeProvider } from "./Theme";

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
