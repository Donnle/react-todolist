import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

interface Props {

}

const TodoListItem = (props: Props) => {
  return (
    <li> Prepare for a FE job
      <span>
        <FontAwesomeIcon icon={faTrash}/>
      </span>
    </li>
  )
}

export default TodoListItem
