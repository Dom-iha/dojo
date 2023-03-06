import { useState } from 'react'
import cross from '../images/icon-cross.svg'
import { Draggable } from 'react-beautiful-dnd'


function Tasks(props) {
    return (
        <Draggable draggableId={props.id} index={props.index}>
            {(provided) => (
                <li 
                    className="task" 
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}
                >
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
            )}
        </Draggable>
    )
} 

export default Tasks