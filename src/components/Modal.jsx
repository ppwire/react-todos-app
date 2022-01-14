import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"

const Modal = (props) => {

   return (
      <Transition
         show={props.isOpen}
         as={Fragment}
      >
         <Dialog onClose={props.onClose} className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-100"
                  enterFrom="opacity-0"
                  enterTo='opacity-100'
                  leave='ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
               >
                  <Dialog.Overlay className="fixed inset-0 bg-slate-200 bg-opacity-80" />
               </Transition.Child>

               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo='opacity-100'
                  leave='ease-in duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
               >
                  <div className="relative bg-gray-700 p-5">
                     {props.children}
                  </div>
               </Transition.Child>
            </div>
         </Dialog>
      </Transition>
   )
}


export default Modal