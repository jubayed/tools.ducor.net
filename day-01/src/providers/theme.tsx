import { useEffect, useState } from "react";
import { ThemeContext } from "../context";

interface ThemeProviderProps {
    children: React.ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [css, setCss] = useState<Map<string, Record<string, string|number>>>(new Map());
    const [lines, setLines] = useState("");

    useEffect(() => {

        setLines("");

    }, [css, setCss]);

    return (
        <ThemeContext.Provider value={undefined}>
            <style>
                {lines}
            </style>
            {children}
        </ThemeContext.Provider>
    );
}