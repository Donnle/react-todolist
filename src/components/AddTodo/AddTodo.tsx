import {useState} from "react";
import {v4 as uuid} from "uuid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

interface Props {
  setTodos: (param: any) => void
}

const AddTodo = ({setTodos}: Props) => {
  const [newTodoText, setNewTodoText] = useState<string>('')

  const handleInputChange = (event: any) => setNewTodoText(event.target.value)
  const handleAdd = () => setTodos((todos: any) => {
    const addedTodo = [...todos, {id: uuid(), label: newTodoText}]

    localStorage.setItem('todos', JSON.stringify(addedTodo))
    return addedTodo
  })

  return (
    <>
      <input type="text" placeholder="Enter new task" value={newTodoText} onChange={handleInputChange}/>
      <button onClick={handleAdd}>
        <FontAwesomeIcon icon={faPlus}/>
      </button>
    </>
  )
}

export default AddTodo
