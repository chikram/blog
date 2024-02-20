import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import NavBar from "./NavBar"
function Home() {
    const [blogs, setBlogs] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
            });

    }, [])


    return (
        <>
            <div className="container mx-30">
                <NavBar />
            </div>
            {blogs && <BlogList prob={blogs} title="Ali Blogs!" />}

        </>

    )
}


export default Home;