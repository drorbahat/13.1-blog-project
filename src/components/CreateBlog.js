import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


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
                    <br />
                    <TextField
                        label="title"
                        variant="outlined"
                        type="text"
                        id="blog-title"
                        required
                        value={title}
                        onChange={e => { setTitle(e.target.value) }}
                    />
                    <br /> <br />
                    <TextField
                        label="author"
                        variant="outlined"
                        type="text"
                        id="blog-author"
                        required
                        value={author}
                        onChange={e => { setAuthor(e.target.value) }}
                    />
                    <br />
                    <br />
                    <TextField
                        label="enter post body"
                        variant="outlined"
                        multiline={true}
                        name="blog-body"
                        id="blog-body"
                        cols="30"
                        rows="10"
                        required
                        value={body}
                        onChange={e => { setBody(e.target.value) }}
                    ></TextField>
                    <br /> <br />
                    <Button variant="contained" onClick={saveNewBlog} className="createBlog-submit-button" type="submit">Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog