import { useState } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"


function App() {

  const[todos, setTodos] = useState([])

  const [todoValue, setTodoValue] = useState('')

  function handleAddTodos(newTodo){
    const newToDoList = [...todos, newTodo]
    setTodos(newToDoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  function handleEditTodo(index){

  }

  return (
    <>
      <>
        <ToDoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
        <ToDoList todoValue={todoValue} setTodoValue={setTodoValue}  handleDeleteTodo={handleDeleteTodo} todos={todos}/>

      </>
    </>
  )
}

export default App
