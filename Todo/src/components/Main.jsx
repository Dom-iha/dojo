import { useState } from "react"
import Tasks from "./Todo"

function Main(props) {

    const [formText, setFormText] = useState('')

    const [todo, setTodo] = useState (
        JSON.parse(localStorage.getItem('todo')) || [
            { text: "Complete online JavaScript course", id: "i1", isChecked: false },
            { text: "Jog around the park 3x", id: "i2", isChecked: false },
            { text: "10 minutes meditation", id: "i3", isChecked: false },
            { text: "Read for 1 hour", id: "i4", isChecked: false },
            { text: "Pick up groceries", id: "i5", isChecked: false },
        ]
    )
    // useEffect(() => {
    //     localStorage.setItem('todo', JSON.stringify(todo))
    // }, [todo])


    function addItem(event) {
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * 1000); 
        
        setTodo(todo.map((item) => {
            <Tasks key={randomNum} text={item.text} />
        }))
        
    }
    function clearCompleted() {
        console.log('cleared')
    }

    return (
        <main>
            <form className="create-todo" onSubmit={addItem}>
                <label className="add flex">
                    <button className="add-btn">
                        <span className="visually-hidden">Click to add task</span>
                    </button>
                </label>
                <label>
                    <input 
                        className="input-task"
                        type="text"
                        placeholder="Create a new todo..."
                        
                    />
                </label>
            </form>
            
            <section className="task-card">
                <Tasks />       
                <Tasks />       

                <div className="summary-tab">
                    <span>{} items left</span>
                    <button 
                        className="clear"
                        onClick={clearCompleted}>Clear Completed
                    </button>
                </div> 
            </section>

            <div className="filter-tab">
                <button className="all filter" 
                        onClick={props.filter}>All
                </button> 
                <button className="active filter" 
                        onClick={props.filter}>Active
                </button> 
                <button className="completed filter" 
                        onClick={props.filter}>Completed
                </button>
            </div>
        </main>
    )
}

export default Main