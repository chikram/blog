import "./index.css";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./component/Create";
import NavBar from "./component/NavBar";
import BlogsDetails from "./component/BlogsDetails";
function App() {

  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/Create" element={<Create />}></Route>
          <Route path="/blogs/:id" element={<BlogsDetails />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
