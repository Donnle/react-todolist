import {connect} from "react-redux";
import AddTodo from "../AddTodo"
import TodoList from "../TodoList"
import {countTodosSelector} from "../../redux/selectors";
import {removeAllTodos} from "../../redux/actions";

import styles from './App.module.css'


export interface ITodo {
  id: string
  todoText: string
}

interface Props {
  countTodos: string
  removeAllTodos: () => void
}

const App = ({countTodos, removeAllTodos}: Props) => (
  <div className={styles.wrapper}>
    <header>Todo List</header>
    <div className={styles.inputField}>
      <AddTodo/>
    </div>

    <TodoList/>
    <div className={styles.footer}>
      <span>You have {countTodos} pending tasks.</span>
      <button onClick={removeAllTodos}>Clear All</button>
    </div>
  </div>
)

const mapStateToProps = (state: any) => ({
  countTodos: countTodosSelector(state)
})
const mapDispatchToProps = (dispatch: any) => ({
  removeAllTodos: () => dispatch(removeAllTodos())
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
