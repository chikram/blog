import BlogList from "./BlogList";
import useFetch from "./useFetch";
function Home() {
    const { blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    return (
        <>
            <div className="py-2">
                {error && <div className=" text-center p-2 mb-1 bg-warning text-dark">{error}</div>}
                {isPending && <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>}
                {blogs && <BlogList prob={blogs} />}
            </div>

        </>

    )
}


export default Home;