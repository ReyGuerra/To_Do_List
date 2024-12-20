import { useState } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"


function App() {

  const[todos, setTodos] = useState([
    'Finish homework',
    'Apply to jobs', 
    'Finish site'
  ])

  function handleAddTodos(newTodo){
    const newToDoList = [...todos, newTodo]
    setTodos(newToDoList)
  }
  return (
    <>
      <>
        <ToDoInput handleAddTodos={handleAddTodos}/>
        <ToDoList todos={todos}/>

      </>
    </>
  )
}

export default App
