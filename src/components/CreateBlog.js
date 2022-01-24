import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateBlog = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')

    const saveNewBlog = e => {
        e.preventDefault()
        const prepairedBody = { title, body, author }
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(prepairedBody)
        })
            .then(() => {
                setTitle('')
                setAuthor('')
                setBody('')
                navigate('/home')
            })
            .catch(e => console.error(e))
    }


    return (
        <div className="CreateBlog-root">
            <br />
            <h1>CreateBlog</h1>
            <div className="CreatBlog-main-container">
                <form className="CreatBlog-form">
                    <label className="createBlog-lable" htmlFor="blog-title">title:</label>
                    <br />
                    <input
                        type="text"
                        id="blog-title"
                        required
                        value={title}
                        onChange={e => { setTitle(e.target.value) }}
                    />
                    <br /> <br />
                    <label className="createBlog-lable" htmlFor="blog-author">author:</label>
                    <br />
                    <input
                        type="text"
                        id="blog-author"
                        required
                        value={author}
                        onChange={e => { setAuthor(e.target.value) }}
                    />
                    <br /><br />
                    <label className="createBlog-lable" htmlFor="blog-body">enter post body:</label>
                    <br />
                    <textarea
                        name="blog-body"
                        id="blog-body"
                        cols="30"
                        rows="10"
                        required
                        value={body}
                        onChange={e => { setBody(e.target.value) }}
                    ></textarea>
                    <br /> <br />
                    <button onClick={saveNewBlog} className="createBlog-submit-button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog