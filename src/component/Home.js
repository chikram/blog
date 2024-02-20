import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import NavBar from "./NavBar"
function Home() {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fatch the data from that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);

    }, [])


    return (
        <>
            <div className="container mx-30">
                <NavBar />
            </div>
            <div className="py-5">
                {error && <div className=" text-center p-2 mb-1 bg-warning text-dark">{error}</div>}
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