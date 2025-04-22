
import React from 'react';
import { useTheme } from './ThemeContext';

const HomePage = () => {
    const { theme, toggleTheme } = useTheme();

    const styles = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        minHeight: '100vh',
        padding: '2rem',
        transition: 'all 0.3s',
    };

    return (
        <div style={styles}>
            <h1>{theme === 'light' ? 'Svetlaya Tema' : 'Temnaya Tema'}</h1>
            <button onClick={toggleTheme}>
                Perekluchit' na {theme === 'light' ? 'Temnuyu' : 'Svetluyu'} temu
            </button>
        </div>
    );
};

export default HomePage;
