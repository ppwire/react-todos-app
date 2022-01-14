import Modal from './Modal';
const FormDelete = (props) => {

   const comfirmHandler = () => {
      props.onConfirm()
   }

   return (
      <Modal isOpen={props.isOpen} onClose={props.onClose} >

         <h1 className='mb-2 text-white'>DELETE</h1>
         <p className="mb-4 text-white">
            Are you sure you want to delete this?
         </p>
         <div >
            <button onClick={comfirmHandler} className="bg-white p-2 hover:-translate-y-2 transition">CONFIRM</button>
            &nbsp;
            <button onClick={props.onClose} className="bg-white p-2 hover:-translate-y-2 transition">CANCEL</button>
         </div>

      </Modal>
   )
}

export default FormDelete