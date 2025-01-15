import React from "react";
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { info: [] };
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products/categories', {method:'GET',
        mode: 'cors',
        headers:{
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin':'*'
        }})
          .then(response => response.json())
          .then(data => this.setState({ info : data }));
      }
    render() {
        return (
            <ul>
            {this.state.info.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>    
        );
    }
}
    
export default MyComponent;      