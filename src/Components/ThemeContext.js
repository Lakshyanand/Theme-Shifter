import React from "react";

const ThemeContext = React.createContext({
    currentMode: 'light',
    nextMode: 'dark'
});

export default ThemeContext;