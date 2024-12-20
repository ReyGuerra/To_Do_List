import React from 'react'

export default function ToDoList() {
  let todos = [
      'Finish homework',
      'Apply to jobs', 
      'Finish site'
  ]
  return (
    <ul className='main'>
        {
          todos.map((todo, todoIndex) => {
            return (
              <li className='todoItem' key={todoIndex}>
                {todo}
                  <i class="fa-solid fa-pen-to-square"></i>
              </li>
            )
          })
        }
    </ul>
  )
}
