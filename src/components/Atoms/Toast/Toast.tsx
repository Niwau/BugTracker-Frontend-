import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"

export const Toast = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      style={{ fontSize:'1.3rem'}}
    />
  )
}
