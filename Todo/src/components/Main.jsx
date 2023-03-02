import { useEffect, useState } from "react"
import Tasks from "./Todo"
import Filter from "./Filter"
import Form from "./Form"

function Main() {   
    const example =  [
        { text: "Complete online JavaScript course", id: "i1", isChecked: false },
        { text: "Jog around the park 3x", id: "i2", isChecked: false },
        { text: "10 minutes meditation", id: "i3", isChecked: false },
        { text: "Read for 1 hour", id: "i4", isChecked: false },
        { text: "Pick up groceries", id: "i5", isChecked: false },
        { text: "Complete Todo App on Frontend Mentor", id: "i6", isChecked: false },
    ]
        
    const [todo, setTodo] = useState (
        JSON.parse(localStorage.getItem('todo')) || [
            { text: "Complete online JavaScript course", id: "i1", isChecked: false },
            { text: "Jog around the park 3x", id: "i2", isChecked: false },
            { text: "10 minutes meditation", id: "i3", isChecked: false },
            { text: "Read for 1 hour", id: "i4", isChecked: false },
            { text: "Pick up groceries", id: "i5", isChecked: false },
            { text: "Complete Todo App on Frontend Mentor", id: "i6", isChecked: false },
        ]
    )
        // useEffect(() => {
            //     localStorage.setItem('todo', JSON.stringify(todo))
            // }, [todo])

    const taskList = example.map((item, index) => (
        <Tasks task={item.text} key={index} />  
    ))

    function addItem(event) {
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * 1000); 
        
        setTodo(todo.map((item, index) => {
            <Tasks key={index} task={item.text} />
        }))

        console.log('added item')
    }



    return (
        <main>
            <Form onSubmit={addItem}/>
            <section className="task-card">
    
                {taskList}
                     
                <Filter />
            </section>
        </main>
    )
}

export default Main