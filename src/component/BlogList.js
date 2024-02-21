//prob and title both are probs 
function BlogList({ prob }) {
    return (
        <>
            <div className="containe my-3">
                {prob.map((blog) => (
                    <div className="row " key={blog.id}>
                        <div className="col-xs-12 col-md-4 col-sm-8 mx-auto py-3">
                            <h2 className="text-danger text-center">{blog.title}</h2>
                            <p className="text-center">{blog.title}</p>
                            <img className="rounded mx-auto d-block" src={blog.img} alt="" width={350} height={400} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}

export default BlogList;