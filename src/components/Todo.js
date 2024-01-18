import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({task, toggleComplete, deleteTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>

    <div>
    <FontAwesomeIcon icon={faPenSquare} />
    <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(task.id)} // Use deleteTodo here
        />
    </div>
    </div>
  )
}
