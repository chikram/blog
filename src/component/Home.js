import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import NavBar from "./NavBar"
function Home() {
    const [blogs, setBlogs] = useState([
        { title: "My new website", author: "Ikram", id: 1 },
        { title: "Welcome Party", author: "Saeed", id: 2 },
        { title: "Web dev top tips", author: "Ikram", id: 3 },
    ]);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }
    useEffect(() => {
        alert("use effect run")

    }, [])
    /* as we pass dependency empty array. So only when page render useeffect will run*/

    return (
        <>
            <div className="container mx-30">
                <NavBar />
            </div>
            <BlogList prob={blogs} title="Ali Blogs!" handleDelete={handleDelete} />

        </>

    )
}


export default Home;