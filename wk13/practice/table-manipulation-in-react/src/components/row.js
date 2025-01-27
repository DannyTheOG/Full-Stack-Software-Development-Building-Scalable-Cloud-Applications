
function Row( props ) {
  return(
    <>
      {
        props.data.map( ( item ) => {
          return(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          )
        } )
      }
    </>
  )
}


export default Row;