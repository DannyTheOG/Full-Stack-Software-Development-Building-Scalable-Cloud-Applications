import AndOperatorExample from "./components/and-operator-example";
import IfExample from "./components/if-example";
import SwitchExample from "./components/switch-example";
import TernaryExample from "./components/ternary-example";


function App() {
  return (
    <>
      <div className="if-example">
        <IfExample isLoggedIn = {true} />
      </div>

      <div className="ternary-example">
        <TernaryExample isLoggedIn = {false} />
      </div>

      <div className="and-operator-example">
        <AndOperatorExample />
      </div>

      <div className="switch-example">
        <SwitchExample status = {'loading'} />
        <SwitchExample status = {'success'} />
      </div>

    </>
  );
}

export default App;
