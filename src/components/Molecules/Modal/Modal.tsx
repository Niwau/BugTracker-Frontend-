import { createPortal } from 'react-dom'
import * as S from './Modal.styles'

interface Modal {
  children: React.ReactNode
  show?: boolean
  closeModal: () => void
}

export const Modal = ({ children, show, closeModal } : Modal) => {

  if (!show) return null;

  return (
    createPortal(
      <S.Overlay onClick={closeModal}>
        <S.Modal>
          { children }
        </S.Modal>
      </S.Overlay>
    ,document.getElementById('root')!)
  )
}
