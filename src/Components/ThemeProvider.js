import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({children}) => {

    // const context = useContext(ThemeContext);

    const [selectedMode, setSelectedMode] = useState('light');

    const updateSelectedMode = (value) => {
        setSelectedMode(value);
    }

    console.log(selectedMode);
    const context = {
        currentMode: selectedMode,
        nextMode: selectedMode === 'light' ? 'dark' : 'light',
        updateMode: updateSelectedMode
    }

    return(
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;