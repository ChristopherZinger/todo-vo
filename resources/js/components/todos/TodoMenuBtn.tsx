import react from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { DropdownContent, Dropdown } from "../../atoms/dropdown/Dropdown";

export const TodoMenuBtn = () =>
  <Dropdown>
    <span><FontAwesomeIcon icon={faEllipsisV} color="gray" style={{ marginLeft: "100%", transform: "translateX(-100%)" }} /></span>
    <DropdownContent>
      <p>Edit</p>
      <p>Remove</p>
    </DropdownContent>
  </Dropdown>


