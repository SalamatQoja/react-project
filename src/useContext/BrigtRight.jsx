// Sozdayte kontekst dlya globalniy temi prilojenye naprimer svetlaya i temniy temi .Realizyute vozmojnost pereklyucheniye mejdu etimi temami v prilojenye c pomoshyu konteksta i useContext 


import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // 'light' ili 'dark'

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);