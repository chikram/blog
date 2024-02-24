import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogsDetails = () => {
    const { id } = useParams()
    const { blogs, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blogs.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/')
        })
    }

    const navigate = useNavigate('')
    return (
        <div classNameName="container py-5">
            {error && <div classNameName=" text-center p-2 mb-1 bg-warning text-dark">{error}</div>}
            {isPending && <div className="text-center m-2">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>}
            {blogs && (<div className="card mx-auto m-5" style={{ width: "80%" }}>
                <img className="card-img-top" src={blogs.img} alt="Cardcap" />
                <div className="card-body">
                    <h4 className="card-title text-center">{blogs.title}</h4>
                    <p className="card-text">{blogs.body}</p>
                </div>
            </div>)}
            <div class="col-md-12 text-center">
                <button type="button" class="btn btn-danger" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    )
}
export default BlogsDetails;