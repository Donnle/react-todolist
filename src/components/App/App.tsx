import {useState} from "react"
import AddTodo from "../AddTodo"
import TodoList from "../TodoList"

import styles from './App.module.css'


export interface ITodo {
  id: string,
  label: string,
}

const App = () => {
  const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos')!) || []
  const [todos, setTodos] = useState<Array<ITodo>>(todosFromLocalStorage)

  const handleClearTodos = () => setTodos(_ => {
    localStorage.setItem('todos', '[]')
    return []
  })

  return (
    <div className={styles.wrapper}>
      <header>Todo List</header>
      <div className={styles.inputField}>
        <AddTodo setTodos={setTodos}/>
      </div>

      <TodoList todos={todos} setTodos={setTodos}/>
      <div className={styles.footer}>
        <span>You have {todos.length} pending tasks.</span>
        <button onClick={handleClearTodos}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
