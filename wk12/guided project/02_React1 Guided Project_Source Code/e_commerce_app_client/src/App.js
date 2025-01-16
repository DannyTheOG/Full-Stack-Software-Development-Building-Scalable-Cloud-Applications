import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import ProductListPage from "./pages/ProductsListPage";

const App = () => {
  const loggedInUser = JSON.parse( sessionStorage.getItem( "loggedInUser" ) );

  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          { loggedInUser && <ProductListPage /> }
          { !loggedInUser && <LoginPage /> }
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
