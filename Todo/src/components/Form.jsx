import { useState } from "react";

function Form(props) {
    
    // const [todo, setTodo] = useState (
    //     JSON.parse(localStorage.getItem('todo')) || [
    //         { text: "Complete online JavaScript course", id: "i1", isChecked: false },
    //         { text: "Jog around the park 3x", id: "i2", isChecked: false },
    //         { text: "10 minutes meditation", id: "i3", isChecked: false },
    //         { text: "Read for 1 hour", id: "i4", isChecked: false },
    //         { text: "Pick up groceries", id: "i5", isChecked: false },
    //     ]
    //     )
    //     // useEffect(() => {
    //     //     localStorage.setItem('todo', JSON.stringify(todo))
    //     // }, [todo])
            
    //     function addItem(event) {
    //         event.preventDefault()
    //         const randomNum = Math.floor(Math.random() * 1000); 
            
    //         // setTodo(todo.map((item) => {
    //         //     <Tasks key={randomNum} text={todo.text} />
    //         // }))
    
    //         console.log(todo)
    //     }

    return (
        <form className="create-todo" onSubmit={props.onSubmit}>
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
    )
}

export default Form