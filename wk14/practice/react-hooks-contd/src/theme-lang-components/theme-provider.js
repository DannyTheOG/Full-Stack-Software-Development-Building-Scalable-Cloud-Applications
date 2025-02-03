import { useState } from "react";
import ThemeContext from "./theme-context"

function ThemeProvider( props ) {
  const [theme, setTheme] = useState( "light" );

  function switchTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme( newTheme ); 
  }

  const value = { theme, switchTheme };

  return(
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
} 


export default ThemeProvider;