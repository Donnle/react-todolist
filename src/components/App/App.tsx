import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faPlus} from "@fortawesome/free-solid-svg-icons";

import styles from './App.module.css';


const App = () => {

  return (
    <div className={styles.wrapper}>
      <header>Todo List</header>
      <div className={styles.inputField}>
        <input type="text" placeholder="Enter new task"/>
        <button>
          <FontAwesomeIcon icon={faPlus}/>
        </button>
      </div>

      <ul className={styles.todoList}>

        <li> Prepare for a FE job
          <span>
            <FontAwesomeIcon icon={faTrash}/>
          </span>
        </li>

        <li> Create a new porfolio site
          <span>
            <FontAwesomeIcon icon={faTrash}/>
          </span>
        </li>

      </ul>
      <div className={styles.footer}>
        <span>You have 5 pending tasks.</span>
        <button>Clear All</button>
      </div>
    </div>
  );
}

export default App;
