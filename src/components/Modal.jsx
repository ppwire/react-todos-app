import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"

const Modal = (props) => {
   return (
      <Transition
         show={props.isOpen}
         as={Fragment}
      >
         <Dialog onClose={props.closeModal} className="fixed z-10 inset-0 overflow-y-auto">
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
                  <Dialog.Overlay className="fixed inset-0 " />
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
                  <div className="relative bg-gray-400 p-5">
                     <Dialog.Title className="mb-2">Deactivate account</Dialog.Title>
                     <Dialog.Description>
                        This will permanently deactivate your account
                     </Dialog.Description>

                     <p className="mb-4">
                        Are you sure you want to deactivate your account? All of your data will
                        be permanently removed. This action cannot be undone.
                     </p>
                     <div >
                        <button onClick={props.closeModal}>Deactivate</button>
                        &nbsp;
                        <button onClick={props.closeModal}>Cancel</button>
                     </div>
                  </div>
               </Transition.Child>
            </div>
         </Dialog>
      </Transition>
   )
}


export default Modal