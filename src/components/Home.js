import { useEffect, useState } from "react"
import BlogItem from "./BlogItem"


const Home = () => {
    const [blogs, setBlogs] = useState([])

    const loadData = () => {
        fetch("http://localhost:8000/blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }

    useEffect(() => {
        console.log("useEffect -> Home")
        loadData()
    }, [])

    return (
        <div className="Home-root">
            <h1>home</h1>
            <h2>here are some comments from Hanoch Daum's facebook page, have fun :) </h2>
            <div className="blogsContainer">
                {
                    blogs.map(blog => {
                        return <BlogItem key={`blog-item-component-${blog.id}`} blog={blog} />
                    })
                }
            </div>
        </div>
    )
}

export default Home