import { useState } from "react";
import LanguageContext from "./lang-context";

function LanguageProvider( props ) {
  const [language, setLanguage] = useState( "en" );
  
  const isEnglish = language === "en";

  function switchLanguage() {
    const newLanguage = isEnglish ? "sp" : "en";
    setLanguage( newLanguage );
  }

  const values = { language, switchLanguage }


  return(
    <LanguageContext.Provider value={values}>
      {props.children}
    </LanguageContext.Provider>
  )
}


export default LanguageProvider;