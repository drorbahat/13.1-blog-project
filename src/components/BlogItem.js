import { Link } from "react-router-dom"



const BlogItem = ({ blog }) => {

    const handleDeleteBlog = () => {
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(window.location.reload(false))
    }

    return (
        <div className="BlogItem-root" id={`blog-item-${blog.id}`}>
            <div>
                <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </Link>
            </div>
            <button onClick={handleDeleteBlog} className="delete-button">delete</button>
        </div>
    )
}

export default BlogItem