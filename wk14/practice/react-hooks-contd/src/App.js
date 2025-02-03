import MyProvider from "./components/provider";
import MyConsumer from "./components/consumer";
import ThemeProvider from "./theme-lang-components/theme-provider";
import LanguageProvider from "./theme-lang-components/lang-provider";
import ThemeConsumer from "./theme-lang-components/theme-lang-consumer";
import ConsumerSwitch from "./theme-lang-components/consumer-switch";

function App() {
  return (
    <>
      <MyProvider>
        <MyConsumer />
      </MyProvider><hr />
      <ThemeProvider>
        <LanguageProvider>
          <ConsumerSwitch />
          <ThemeConsumer />
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
