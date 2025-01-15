import MountingPhase from "./components/01-mounting-phase/mounting-phase";
import UpdatingPhase from "./components/02-updating-phase/updating-phase";
import UnmountingPhase1 from "./components/03-unmounting-phase/class-component/unmounting-phase";
import UnmountingPhase2 from "./components/03-unmounting-phase/functional-component/unmounting-phase";

function App() {
    return (
        <>
            <MountingPhase />
            <hr />
            <UnmountingPhase1 />
            <UnmountingPhase2 />
            <hr />
            <UpdatingPhase value = {2} />
            <UpdatingPhase value = {3} />
        </>
    );
}

export default App;
