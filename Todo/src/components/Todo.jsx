import { useState } from 'react'
import cross from '../images/icon-cross.svg'


function Tasks(props) {
    
    function remove(){
        console.log('deleted')
    }
    function isChecked() {
        console.log('completed')
    }

    return (
        <ul className="task-list">
            <li className="task">
                <label className='wrap'>
                    <input type="checkbox" className="done" onChange={isChecked}/>
                    <p>{props.task}</p>
                    <button onClick={remove} className='delete'>
                        <img src={cross} className='cross'/>
                        <span className='visually-hidden'>Delete item</span>
                    </button>
                </label>
            </li>  
        </ul>
    )
} 

export default Tasks