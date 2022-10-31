import { createPortal } from 'react-dom'
import * as S from './Modal.styles'

interface Modal {
  children: React.ReactNode
  isVisible: boolean
  toggleModal: () => void
}

export const Modal = ({ children, isVisible, toggleModal } : Modal) => {

  if (!isVisible) return null;

  return (
    createPortal(
      <S.Overlay onClick={() => toggleModal()} >
        <S.Modal onClick={e => e.stopPropagation()}>
          { children }
        </S.Modal>
      </S.Overlay>
    ,document.getElementById('root')!)
  )
}
