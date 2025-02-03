import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import UseEffect from "./components/use-effect";
import UseRef from "./components/use-ref";
import UseState from "./components/use-state";
import Home from "./components/home";
import NavigationBar from "./components/navbar";
import UseParams from "./components/use-params";
import UseNavigate from "./components/use-navigate";
import Products from "./components/products";
import NotFound from "./components/404";


function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/use-state" 
            element={<UseState />} 
          />
          <Route 
            path="/use-effect" 
            element={<UseEffect />} 
          />
          <Route 
            path="/use-ref" 
            element={<UseRef />} 
          />
          <Route 
            path="/use-params/:id" 
            element={<UseParams />} 
          />
          <Route 
            path="/use-navigate" 
            element={<UseNavigate />} 
          />
          <Route 
            path="/products" 
            element={<Products />} 
          />
          <Route 
            path="*" 
            element={<NotFound />} 
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
