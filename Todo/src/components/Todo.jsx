import { useState } from 'react'
import cross from '../images/icon-cross.svg'


function Tasks(props) {
    
    return (
        
        <li className="task">
            <label className='wrap'>
                <input 
                    id={props.id}
                    type="checkbox" 
                    className="done" 
                    checked={props.completed}
                    onChange={() => props.toggleStatus(props.id)}
                />
                <p className='text'>{props.task}</p>
                <button onClick={() => props.deleteItem(props.id)} className='delete'>
                    <img src={cross} className='cross'/>
                    <span className='visually-hidden'>Delete item</span>
                </button>
            </label>
        </li>  
    )
} 

export default Tasks