import TodoListItem from "./TodoListItem"
import {ITodo} from "../App/App"

import styles from "../App/App.module.css"


interface Props {
  todos: Array<ITodo>,
  setTodos: (arg: any) => void
}

const TodoList = ({todos, setTodos}: Props) => {
  return (
    <ul className={styles.todoList}>
      {todos.map(({id, label}: ITodo) =>
        <TodoListItem key={id} id={id} setTodos={setTodos}>{label}</TodoListItem>
      )}
    </ul>
  )
}

export default TodoList
