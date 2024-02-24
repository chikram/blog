import { Link } from "react-router-dom";

//prob and title both are probs 
function BlogList({ prob }) {
    return (
        <>
            <div className="container">
                {prob.map((blog) => (
                    <div className="row " key={blog.id}>
                        <div className="col-xs-12 col-md-4 col-sm-8 mx-auto py-3">
                            <Link className="nav-link text-dark" aria-current="page" to={`/blogs/${blog.id}`}>
                                <h2 className="text-danger text-center">{blog.title}</h2>
                                <p className="text-center">{blog.body}</p>
                                <img className="rounded mx-auto d-block" src={blog.img} alt="" width={350} height={400} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )

}

export default BlogList;