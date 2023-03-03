import { useEffect, useState } from "react"
import {nanoid} from "nanoid"
import Tasks from "./Todo"
import Filter from "./Filter"
import Form from "./Form"

function Main() {   

     // useEffect(() => {
    //     localStorage.setItem('todo', JSON.stringify(todo))
    // }, [todo])

    const [todo, setTodo] = useState (
        JSON.parse(localStorage.getItem('todo')) || [
            { text: "Complete online JavaScript course", id: `task-${nanoid()}`, completed: false },
            { text: "Jog around the park 3x", id: `task-${nanoid()}`, completed: false },
            { text: "10 minutes meditation", id: `task-${nanoid()}`, completed: false },
            { text: "Read for 1 hour", id: `task-${nanoid()}`, completed: false },
            { text: "Pick up groceries", id: `task-${nanoid()}`, completed: false },
            { text: "Complete Todo App on Frontend Mentor", id: `task-${nanoid()}`, completed: false },
        ]
    )
        
    const [status, setStatus] = useState(false)     
    
    function toggleStatus(id) {
        // const updatedTasks = todo.map((task) => {
        //     // if this task has the same ID as the edited task
        //     if (id === task.id) {
        //       // use object spread to make a new object
        //       // whose `completed` prop has been inverted
        //       return {...prevTodo, completed: !task.completed}
        //     }
        //     return todo;
        // });
        // setTodo(updatedTasks); 
        console.log(todo[0])
    }

    // Callback prop to get input data from <Form />
    function addItem(value) {
        setTodo((prevTodo) => {
            return [
                {text: value, id: `task-${nanoid()}`, completed: false},
                ...prevTodo
            ];
        })
    }

    const items = todo.map((task) => (
        <Tasks key={task.id} task={task.text} isCompleted={toggleStatus}/>
    ));

    return (
        <main>
            <Form addItem={addItem}/>
            <section className="task-card">

                {items}
    
                <Filter itemsLeft={todo.length}/>
            </section>
        </main>
    )
}

export default Main