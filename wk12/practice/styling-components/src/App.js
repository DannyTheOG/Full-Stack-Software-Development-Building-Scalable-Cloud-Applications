import BootstrapReactLibrary from "./components/css-framework/bootstrap-react-library/css-framework";
import BootstrapUsingNPM from "./components/css-framework/bootstrap-using-npm/css-framework";
import CssInJs from "./components/css-in-javascript/css-in-js";
import CssModulesStyling from "./components/css-modules/css-modules-styling";
import ExternalStyling from "./components/external-stylesheet/external-styling";
import InlineStyling from "./components/inline-styling";

function App() {
  return (
    <div>
      <InlineStyling />
      <ExternalStyling />
      <CssModulesStyling />
      <CssInJs />
      <BootstrapUsingNPM />
      <BootstrapReactLibrary />
    </div>
  );
}

export default App;
