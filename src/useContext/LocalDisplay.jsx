import React from "react";
import { useLocale } from "./LocalPicture";

const LocaleDisplay = () => {
    const { locale, changeLocale } = useLocale();

    return (
        <div>
            <p>Tekushchaya lokalizatsiya: <strong>{locale}</strong></p>
            <button onClick={() => changeLocale('en')}>Angliyskiy</button>
            <button onClick={() => changeLocale('ru')}>Russkiy</button>
            <button onClick={() => changeLocale('es')}>Ispanskiy</button>
        </div>
    );
};

export default LocaleDisplay;