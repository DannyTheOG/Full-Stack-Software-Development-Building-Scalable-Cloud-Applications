import List from './list-with-keys/list';
import ListWithKeys from './list-with-keys/list-with-keys';
import Sett from './sets/set';
import Objectt from './objects/object';
import StateManagedObject from './objects/state-managed-object';
import ArrayOfObject from './objects/array-of-objects';
import Table from './tables/table';
import Dropdown from './dropdown/dropdown';
import Radio from './radios/radio';

function App() {
  return (
    <>
      <List /><hr />
      <ListWithKeys /><hr />
      <Sett /><hr />
      <Objectt /><hr />
      <StateManagedObject /><hr />
      <ArrayOfObject /><hr />
      <Dropdown /><hr />
      <Radio /><hr />
      <Table /><hr />
    </>
  );
}

export default App;
