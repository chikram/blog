import { useState } from "react";
import BlogList from "./BlogList";
import NavBar from "./NavBar"
function Home() {
    const [blogs, setBlogs] = useState([
        { title: "My new website", author: "Ikram", id: 1 },
        { title: "Welcome Party", author: "Saeed", id: 2 },
        { title: "Web dev top tips", author: "Ikram", id: 3 },
    ]);
    return (
        <>
            <div className="container mx-30">
                <NavBar />
            </div>
            <BlogList prob={blogs} title="All Blogs!" />
            <BlogList prob={blogs.filter((blog) => blog.author === 'Ikram')} title="Ikram Blogs!" />
        </>
    )
}


export default Home;