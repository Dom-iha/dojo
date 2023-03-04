import { useEffect, useState } from "react"
import {nanoid} from "nanoid"
import Tasks from "./Todo"
import Filter from "./Filter"
import Form from "./Form"


const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function Main() {   

    const [todo, setTodo] = useState (
        JSON.parse(localStorage.getItem('todo')) || [
            { text: "Complete online JavaScript course", id: `task-${nanoid()}`, completed: true },
            { text: "Jog around the park 3x", id: `task-${nanoid()}`, completed: false },
            { text: "10 minutes meditation", id: `task-${nanoid()}`, completed: false },
            { text: "Read for 1 hour", id: `task-${nanoid()}`, completed: false },
            { text: "Pick up groceries", id: `task-${nanoid()}`, completed: false },
            { text: "Complete Todo App on Frontend Mentor", id: `task-${nanoid()}`, completed: false },
        ]
    )
             
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo])

    // Callback prop to get input data from <Form />
    function addItem(value) {
        setTodo((prevTodo) => {
            return [
                {text: value, id: `task-${nanoid()}`, completed: false },
                ...prevTodo
            ];
        })
    }


    function toggleStatus(id) {
        const updatedTodo =  todo.map((task) => {
            if (id === task.id) {
                return {...task, completed: !task.completed}
            }
            return task;
        });
        setTodo(updatedTodo);
    }

    // filter and exclude item whose id matches the id parameter recieved from <Task />
    function deleteItem(id) {
        console.log(id)
        const remainingItems = todo.filter((task) => id !== task.id)
        setTodo(remainingItems);
    }
    
    const [filter, setFilter] = useState('All');

    const items = todo.map((task) => (
        <Tasks
            key={task.id} 
            id={task.id}  
            task={task.text} 
            completed={task.completed} 
            toggleStatus={toggleStatus}
            deleteItem={deleteItem}
        />
    ));

    const filterTab = FILTER_NAMES.map((name) => (
        <Filter key={name} name={name} itemsLeft={todo.length}/>
    ));

    return (
        <main>
            <Form addItem={addItem}/>
            <section className="task-card">

                {items}
    
                <Filter itemsLeft={todo.length} />
            </section>
        </main>
    )
}

export default Main