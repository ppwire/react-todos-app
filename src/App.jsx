import './App.css'
import { useState } from 'react'
import Modal from './components/Modal.jsx'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className="mt-4">
        <h1 className="text-center font-bold">Vite React Todos</h1>
        <div className="flex justify-center">
          <button className='text-center' onClick={() => setIsOpen(true)}>Open Something</button>
        </div>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}></Modal>
    </>
  )
}

export default App
