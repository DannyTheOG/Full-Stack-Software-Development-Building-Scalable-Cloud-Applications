function Row( props ) {
  return(
    <tr>
      <td>{props.city.name}</td>
      <td>{props.city.country}</td>
    </tr>
  )
}


export default Row;