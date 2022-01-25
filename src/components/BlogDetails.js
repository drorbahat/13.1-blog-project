import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card, CardContent, Typography } from '@mui/material/';

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
        <div className="blogDetails-root">
            <br/>
            <Card sx={{ maxWidth: 500 }} variant="outlined" className="blogDetails-root">
                <CardContent>
                    <Typography variant="h5" component="div">
                        {currentBlog.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Author: {currentBlog.author}
                    </Typography>
                    <Typography variant="body2">
                        {currentBlog.body}
                    </Typography>

                </CardContent>
            </Card>
        </div>
    )
}

export default BlogDetails