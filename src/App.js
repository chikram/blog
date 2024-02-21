import "./index.css";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./component/Create";
function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/Create" element={<Create />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
