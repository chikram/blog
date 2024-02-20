import BlogList from "./BlogList";
import NavBar from "./NavBar"
import useFetch from "./useFetch";
function Home() {
    const { blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
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