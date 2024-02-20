//prob and title both are probs 
function BlogList({ prob }) {
    return (
        <>
            <div className="containe my-3">
                {prob.map((blog) => (
                    <div className="row " key={blog.id}>
                        <div className="col-lg-4 col-sm-6 col-10 mx-auto thumbnail border border-buttom-1 border-top-0 border-start-0 border-end-0 py-3">
                            <h2 className="text-danger text-center">{blog.title}</h2>
                            <p className="text-center">{blog.title}</p>
                            <img className="rounded mx-auto d-block" src={blog.img} alt="" width={500} height={400} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}

export default BlogList;