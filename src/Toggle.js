import React from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import { ThemeContext } from './ThemeContext';

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === 'dark' ? (
                <FaSun
                    onClick={() => {window.location.reload(); setTheme(theme === 'dark' ? 'light' : 'dark')}}
                    className="text-gray-500 dark:text-gray-400 text-xl cursor-pointer"
                />
            ) : (
                <FaMoon
                    onClick={() => {window.location.reload(); setTheme(theme === 'dark' ? 'light' : 'dark')}}
                    
                    className="text-gray-500 dark:text-gray-400 text-xl cursor-pointer"
                />
                )}
        </div>
    );
};

export default Toggle;