// Napishite komponent dlya otobrajenye tekushiy lokaliy prilojenye .Ispolzyute kontekst dlya peredachi informatsi o tekushiy lokaliy komponenti gde eto neobxodimo 

import React, { children, createContext, useContext, useState } from "react";

const LocalContext = createContext();

export const LocalProvider = ({ children }) => {
    const [locale, setLocale] = useState("en");

    const changeLocale = (newLocale) => {
        setLocale(newLocale);
    };

    return (
        <LocalContext.Provider value={{ locale, changeLocale }}>
            {children}
        </LocalContext.Provider>
    );
};

export const useLocale = () => useContext(LocalContext);