import List from './list-with-keys/list';
import ListWithKeys from './list-with-keys/list-with-keys';
import Sett from './sets/set';
import Objectt from './objects/object';
import StateManagedObject from './objects/state-managed-object';
import ArrayOfObject from './objects/array-of-objects';

function App() {
  return (
    <>
      <List /><hr />
      <ListWithKeys /><hr />
      <Sett /><hr />
      <Objectt /><hr />
      <StateManagedObject /><hr />
      <ArrayOfObject />
    </>
  );
}

export default App;
