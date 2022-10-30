import { useState } from "react"
import { OutlineButton } from "../../Atoms/Button/OutlineButton"
import { Input } from "../../Atoms/Input/Input"
import { Modal } from "../Modal/Modal"

export const CreateBugModal = () => {

  const [show, setShow] = useState(true)


  return (
    <Modal show={show} closeModal={() => setShow(false)}>
      <form>
        <Input/>
        <Input/>
        <Input/>
      </form>
      <OutlineButton>Fechar</OutlineButton>
    </Modal>
  )
}
