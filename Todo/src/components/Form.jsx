import { useState } from "react";

function Form(props) {
    
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
    };

    const handleSubmit= (e) => {
        e.preventDefault();
        if(!value){return}
        // pass input value to <Main />
        props.addItem(value)
        setValue('')
        console.log(`New-task: ${value}`)
    };
    
    return (
        <form className="create-todo" onSubmit={handleSubmit}>
            <label className="add flex">
                <button className="add-btn">
                    <span className="visually-hidden">Click to add task</span>
                </button>
            </label>
            <label>
                <input 
                    autoFocus
                    type="text"
                    name="taskInput"
                    className="input-task"
                    autoComplete="off"
                    value={value}
                    onChange={handleChange}
                    placeholder="Create a new todo..."
                />
            </label>
        </form>
    )
}

export default Form