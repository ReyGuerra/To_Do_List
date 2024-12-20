import React from 'react'

export default function ToDoCard(props) {
    const {children, handleDeleteTodo, index} = props
  return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'>

            <button onClick={() => { /*Edit Button*/
                handleEditTodo(index)
            }}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>

            <button onClick={() => { /*Trash Button */
                handleDeleteTodo(index)
            }}>
                <i className="fa-solid fa-trash"></i>
            </button>

        </div>
    </li>
  )
}
