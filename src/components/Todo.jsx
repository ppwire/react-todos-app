import FormDelete from "./FormDelete"
import { useState } from 'react'

const Todo = (props) => {
   const [isOpen, setIsOpen] = useState(false)

   const closeModal = () => {
      setIsOpen(false)
   }

   const onConfirm = () => {
      setIsOpen(false)
      props.onDelete()
   }

   const doneHandler = () => {
      props.onDone()
   }


   return (
      <>
         <div className="bg-slate-100 p-5 relative drop-shadow-md">
            <h1 className="mb-1 font-semibold">{props.title}</h1>
            <h2 className="mb-2">{props.description}</h2>
            {props.onDone &&
               <button className='text-center bg-slate-200 p-3 rounded-sm font-medium hover:bg-slate-400 mr-2' onClick={doneHandler}>Done</button>
            }
            {props.onDelete &&
               <button className='text-center bg-slate-200 p-3 rounded-sm font-medium hover:bg-slate-400' onClick={() => setIsOpen(true)}>Delete</button>
            }
         </div>
         <FormDelete isOpen={isOpen} onClose={closeModal} onConfirm={onConfirm}></FormDelete>
      </>

   )
}
export default Todo