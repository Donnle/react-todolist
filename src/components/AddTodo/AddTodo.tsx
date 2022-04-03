import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

interface Props {

}

const AddTodo = (props: Props) => {
  return (
    <>
      <input type="text" placeholder="Enter new task"/>
      <button>
        <FontAwesomeIcon icon={faPlus}/>
      </button>
    </>
  )
}

export default AddTodo
