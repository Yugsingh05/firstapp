import React, { createContext, useContext, useState } from "react";


type themeType = 'light' | 'dark';

interface ThemeContextType {
    theme: themeType;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context; // <-- You were missing this as well!
};
type themeProviderProps = {
    children : React.ReactNode;
}

export const ThemeProvider : React.FC<themeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<themeType>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>;


}