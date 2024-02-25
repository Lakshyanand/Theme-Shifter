import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Toggle = () => {

    const context = useContext(ThemeContext);

    const changeHandler = (event) => {
        context.updateMode(event.target.value);
        console.log(event.target.value);
    };

    return(
        <div style={{padding:'10px 0'}}>
            <input type="checkbox" id="toggle" value={context.nextMode} onChange={changeHandler} />Enable Dark Theme
        </div>
    );
};

export default Toggle;