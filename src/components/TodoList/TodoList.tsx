import {connect} from "react-redux"
import TodoListItem from "./TodoListItem"
import {todosSelector} from "../../redux/selectors";
import {ITodo} from "../App/App"

import styles from "../App/App.module.css"


interface Props {
  todos: Array<ITodo>,
}

const TodoList = ({todos}: Props) => (
  <ul className={styles.todoList}>
    {todos.map(({id, todoText}: ITodo) =>
      <TodoListItem key={id} id={id}>{todoText}</TodoListItem>
    )}
  </ul>
)


const mapStateToProps = (state: any) => ({
  todos: todosSelector(state)
})

export default connect(mapStateToProps)(TodoList)
