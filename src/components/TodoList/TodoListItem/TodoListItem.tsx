import {connect} from "react-redux"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import {removeTodo} from "../../../redux/actions";

interface Props {
  removeTodo?: () => void
  children: string
  id: string
}

const TodoListItem = ({children, removeTodo}: Props) => (
  <li> {children}
    <span onClick={removeTodo}>
      <FontAwesomeIcon icon={faTrash}/>
    </span>
  </li>
)


const mapDispatchToProps = (dispatch: any, props: Props) => ({
  removeTodo: () => dispatch(removeTodo(props))
})
export default connect(null, mapDispatchToProps)(TodoListItem)
