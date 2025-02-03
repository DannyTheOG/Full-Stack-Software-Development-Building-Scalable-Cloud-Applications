import { useContext } from "react";
import ThemeContext from "./theme-context";
import LanguageContext from "./lang-context";

function ConsumerSwitch() {
  const { theme, switchTheme } = useContext( ThemeContext );
  const { language, switchLanguage } = useContext( LanguageContext )

  const isLightMode = theme === "light";
  const isEnglish = language === "en";
  
  const buttonLabel = isLightMode 
  ? isEnglish
    ? "switch to dark" 
    : "cambiar a oscuro"
  : isEnglish 
    ? "switch to light"
    : "cambiar a luz";

  const languageLabel = isEnglish 
  ? "switch to spanish" 
  : "switch to english";


  return(
    <>
      <button onClick={switchTheme}>
        {buttonLabel}
      </button>
      <button onClick={switchLanguage}>
        {languageLabel}
      </button>
    </>
  )
}


export default ConsumerSwitch;