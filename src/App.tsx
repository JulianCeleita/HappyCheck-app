import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages";
import { LayoutContainer } from "./styled-components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </div>
  );
}

export default App;
