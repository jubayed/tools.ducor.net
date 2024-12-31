import { createContext } from "react";

interface ThemeContextState {
    theme: 'light' | 'dark';

}
export const ThemeContext = createContext<ThemeContextState|undefined>(undefined);