import NavBar from "./component/NavBar";
import { useState } from "react";
function App() {
  const [blogs, setBlogs] = useState([
    { title: "My new website", author: "Ali", id: 1 },
    { title: "Welcome Party", author: "Ali", id: 2 },
    { title: "Web dev top tips", author: "Ali", id: 3 }
  ]);
  return (
    <>
      <NavBar />
      <div className="container ">

        {blogs.map((blog) => (
          <div className="row" key={blog.id}>
            <div className="col-lg-6 col-sm-10 col-10 mx-auto">
              <h2 className="text-danger">{blog.title}</h2>
              <p>{blog.title}</p>
            </div>
          </div>

        ))}
      </div>
    </>
  );
}

export default App;
