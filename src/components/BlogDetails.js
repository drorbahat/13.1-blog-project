import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const BlogDetails = () => {

    const { id } = useParams()

    const [currentBlog, setCurrentBlog] = useState([])

    const loadData = () => {
        fetch(`http://localhost:8000/blogs/${id}`)
            .then(res => res.json())
            .then(data => {
                setCurrentBlog(data)
            })
    }
    useEffect(() => {
        console.log("useEffect -> Home")
        loadData()
    }, [])

    return (
        <div>
            <h1>{currentBlog.title}</h1>
            <h3>Author: {currentBlog.author}</h3>
            <p>{currentBlog.body}</p>
        </div>
    )
}

export default BlogDetails