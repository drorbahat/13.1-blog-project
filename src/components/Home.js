import { useState } from "react"

const Home = () => {
    const handleRequestAllTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => {
                setTodoList(data)
            })
            .catch(e => {
                console.log(e)
            })
    }

    const [todoList, setTodoList] = useState([])

    return (
        <div className="Home-root">
            <br />
            <h1>todo lost</h1>
            <button
                onClick={handleRequestAllTodos}>show list</button>
            <ul>
                {
                    todoList.map(element => {
                        return <li style={{ 
                            textDecoration: element.completed ? 'line-through' : '',
                            color: element.id % 2 === 0 ? 'red' : ''
                        }}
                            key={`todo-item-${element.id}`}>{element.title}</li>
                    })
                }
            </ul>
        </div >
    )
}

export default Home