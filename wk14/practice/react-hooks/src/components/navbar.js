import "bootstrap/dist/css/bootstrap.css"
import { Navbar, Nav } from "react-bootstrap"

function NavigationBar() {

  return(
    <Navbar bg="primary" data-bs-theme="dark" expand="lg">
      <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/use-state">Use-State</Nav.Link>
          <Nav.Link href="/use-effect">Use-Effect</Nav.Link>
          <Nav.Link href="/use-ref">Use-Ref</Nav.Link>
          <Nav.Link href="/use-params/123">Use-Params</Nav.Link>
          <Nav.Link href="/use-navigate">Use-Navigate</Nav.Link>
      </Nav>
    </Navbar>
  )
}


export default NavigationBar;