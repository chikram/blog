import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Ikram')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-type": "application.json" },
            body: JSON.stringify(blog),
        }).then(() => {
            alert("blog added")
            navigate('/')
        })

    }
    return (
        <>
            <div classNameName="container py-3">
                <h1 className="text-danger py-2 text-center">Add a New Blog</h1>
                <form className="py-2">
                    <div className="mb-2">
                        <label for="text1" className="form-label">
                            Blog Title
                        </label>
                        <input type="text" className="form-control" id="text1" required value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="floatingTextarea">Blog Body</label>
                        <textarea
                            className="form-control"
                            placeholder="Write something"
                            id="floatingTextarea"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                    </div>
                    <div className=" dropdown my-3">
                        <label for="dropdownMenuButton1">Blog Author</label> <br />
                        <select className="drp" value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        >
                            <option value="Ikram">Ikram</option>
                            <option value="Saeed">Saeed</option>
                        </select>
                    </div>
                    <div class="col-md-12 text-center">
                        <button type="button" class="btn btn-danger" onClick={handleSubmit}>
                            Add Blog
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Create;
