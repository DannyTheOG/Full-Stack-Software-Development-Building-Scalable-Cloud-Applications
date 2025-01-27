import Row from "./row";

  function Table() {
    const cities = [
      {
        name: "Accra",
        country: "Ghana"
      },
      {
        name: "Monrovia",
        country: "Liberia"
      },
      {
        name: "Freetown",
        country: "Sierra Leone"
      }
    ];


    return(
      <>
        <h2>Table</h2>
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {
              cities.map( ( city ) => {
                return <Row key={city.name} city={city}/>
              } )
            }
          </tbody>
        </table>
      </>
    )
  }


  export default Table;