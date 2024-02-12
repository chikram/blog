import "./index.css";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
function App() {

  return (
    <>
      <div className="container mx-30">
        <NavBar />
      </div>
      <Home />
    </>
  );
}

export default App;
