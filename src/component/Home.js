import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import NavBar from "./NavBar"
function Home() {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false)
                });
        }, 1000);

    }, [])


    return (
        <>
            <div className="container mx-30">
                <NavBar />
            </div>
            <div className="py-5">
                {isPending && <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>}
                {blogs && <BlogList prob={blogs} title="Ali Blogs!" />}
            </div>

        </>

    )
}


export default Home;