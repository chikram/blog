import { useParams } from "react-router-dom";

const BlogsDetails = () => {
    const { id } = useParams()
    return (
        <div className="container py-3">
            <h2 className="text-center">Detail of the Blog- {id}</h2>
        </div>
    )
}
export default BlogsDetails;