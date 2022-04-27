import {useState} from "react";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {addTodo} from "../../redux/actions";

interface Props {
  addTodo: (todoText: string) => void
}

const AddTodo = ({addTodo}: Props) => {
  const [todoText, setTodoText] = useState<string>('')
  const handleInputChange = (event: any) => setTodoText(event.target.value)

  const handleAdd = () => addTodo(todoText)
  return (
    <>
      <input type="text" placeholder="Enter new task" value={todoText} onChange={handleInputChange}/>
      <button onClick={handleAdd}>
        <FontAwesomeIcon icon={faPlus}/>
      </button>
    </>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (todoText: string) => dispatch(addTodo(todoText))
})
export default connect(null, mapDispatchToProps)(AddTodo)

// const mapStateToProps = (state: any, props: Props) => ({})
// const mapDispatchToProps = (dispatch: any, props: Props) => ({})
// export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
