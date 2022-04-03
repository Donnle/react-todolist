import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import {ITodo} from "../../App/App"

interface Props {
  children: string,
  setTodos: (arg: any) => void,
  id: string,
}

const TodoListItem = ({children, setTodos, id}: Props) => {
  const handleRemoveItem = () => setTodos((todos: any) => todos.filter((todo: ITodo) => todo.id !== id))

  return (
    <li> {children}
      <span onClick={handleRemoveItem}>
        <FontAwesomeIcon icon={faTrash}/>
      </span>
    </li>
  )
}

export default TodoListItem
