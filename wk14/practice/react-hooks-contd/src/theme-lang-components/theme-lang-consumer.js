import { useContext } from "react";
import ThemeContext from "./theme-context";
import LanguageContext from "./lang-context";

function ThemeConsumer() {
  const { theme } = useContext( ThemeContext );
  const { language } = useContext( LanguageContext );

  // console.log( useContext( ThemeContext ) )

  const isLightMode = theme === "light";
  const isEnglish = language === "en";

  const styles = {
    backgroundColor: isLightMode ? "white" : "black",
    color: isLightMode ? "black" : "white",
    margin: "0.5rem",
  }

  return(
    <form style={styles}>
      <div>
        { isEnglish ? "Name: " : "Nombre: " }
        <input />
      </div>
      <div>
        { isEnglish ? "Email: " : "Correo: " } 
        <input />
      </div>
      <button>{ isEnglish ? "SUBMIT" : "ENVIAR" }</button>
    </form>
  )
}


export default ThemeConsumer;