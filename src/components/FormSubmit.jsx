import Modal from './Modal';
import './FormSubmit.module.css';
const FormSubmit = (props) => {
   const submitTest = (event) => {
      event.preventDefault();
      const form = new FormData(event.target)
      const formData = Object.fromEntries(form)
      props.onUpdate(formData)
      props.onClose()
   }
   return (
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
         <form className="flex flex-col" onSubmit={submitTest}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
            <label htmlFor="description">Description</label>
            <textarea type="text" id="description" name="description" className="mb-2" />
            <button className="bg-white p-2 ">Add</button>
         </form>
      </Modal>
   )
}
export default FormSubmit