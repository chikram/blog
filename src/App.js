import './index.css';
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
      <div className="containe my-3">

        {blogs.map((blog) => (
          <div className="row " key={blog.id}>
            <div className="col-lg-4 col-sm-6 col-10 mx-auto thumbnail border border-buttom-1 border-top-0 border-start-0 border-end-0" >
              <h2 className="text-danger text-center">{blog.title}</h2>
              <p className='text-center'>{blog.title}</p>
            </div>
          </div>

        ))}
      </div>
    </>
  );
}

export default App;
