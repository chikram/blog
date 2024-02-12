import NavBar from "./component/NavBar";
import { useState } from "react";
function App() {
  const [name, setName] = useState("ikram");

  const handleOnClick = () => {
    setName("Ali");
  }
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <p>{name}</p>
          <button type="button" class="btn btn-danger" onClick={handleOnClick}>Click Me</button>
        </div>
      </div>
    </>
  );
}

export default App;
