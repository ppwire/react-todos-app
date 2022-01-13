import Modal from "./Modal"
import { useState } from 'react'

const Todo = (props) => {
   const [isOpen, setIsOpen] = useState(false)

   const closeModal = () => {
      setIsOpen(false)
   }

   return (
      <>
         <div className="bg-slate-100 p-5 relative">
            <h1 className="mb-1 font-semibold">{props.title}</h1>
            <h2 className="mb-2">{props.description}</h2>
            <button className='text-center bg-slate-200 p-3 rounded-sm font-medium' onClick={() => setIsOpen(true)}>Delete</button>
         </div>
         <Modal isOpen={isOpen} closeModal={closeModal}></Modal>
      </>

   )
}
export default Todo