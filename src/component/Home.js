import { useState } from "react";
import BlogList from "./BlogList";
import NavBar from "./NavBar"
function Home() {
    const [blogs, setBlogs] = useState([
        { title: "My new website", author: "Ali", id: 1 },
        { title: "Welcome Party", author: "Ali", id: 2 },
        { title: "Web dev top tips", author: "Ali", id: 3 },
    ]);
    return (
        <>
            <div className="container mx-30">
                <NavBar />
            </div>

            <BlogList prob={blogs} title="All Blogs!" />
        </>
    )
}


export default Home;