import { createPortal } from 'react-dom'
import * as S from './Modal.styles'

export interface ModalProps {
  children: React.ReactNode
  isVisible: boolean
  toggleModal: () => void
}

export const Modal = ({ children, isVisible, toggleModal } : ModalProps) => {

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
