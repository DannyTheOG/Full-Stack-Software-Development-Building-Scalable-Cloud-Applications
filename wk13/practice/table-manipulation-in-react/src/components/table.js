import Row from "./row";
import "../styles/style.css";

function Table( props ) {
  return(
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
        </tr>
      </thead>
      <tbody>
        <Row data={props.people} />
      </tbody>
    </table>
  );
}


export default Table;