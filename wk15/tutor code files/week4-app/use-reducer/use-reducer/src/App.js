import "./App.css";
import FavoriteColor from "./components/FavoriteColor";
import Footer from "./components/Footer";

function App() {
  const colors = ["red", "blue", "green", "yellow", "purple"];
  return (
    <div className="App">
      <FavoriteColor colors={colors} />
      <Footer />
    </div>
  );
}

export default App;
