import AddTodo from "../AddTodo";
import TodoList from "../TodoList";

import styles from './App.module.css';


const App = () => {
  return (
    <div className={styles.wrapper}>
      <header>Todo List</header>
      <div className={styles.inputField}>
        <AddTodo/>
      </div>

      <TodoList/>
      <div className={styles.footer}>
        <span>You have 5 pending tasks.</span>
        <button>Clear All</button>
      </div>
    </div>
  );
}

export default App;
