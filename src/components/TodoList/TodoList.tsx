import TodoListItem from "./TodoListItem";

import styles from "../App/App.module.css";


interface Props {

}

const TodoList = (props: Props) => {
  return (
    <ul className={styles.todoList}>
      <TodoListItem/>
      <TodoListItem/>
    </ul>
  )
}

export default TodoList
