import Todo from '../components/Todo'
import FormSubmit from '../components/FormSubmit'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Home = () => {

   const todoList = [
      { title: 'Day 1', description: 'spend someshit' },
      { title: 'Day 2', description: 'spend someothershit' },
      { title: 'Day 1', description: 'spend someshit' },
      { title: 'Day 2', description: 'spend someothershit' },
      { title: 'Day 1', description: 'spend someshit' },
      { title: 'Day 2', description: 'spend someothershit' },

   ]

   let [todos, setTodos] = useState(todoList)
   const [isFormSubmitOpen, setIsFormSubmitOpen] = useState(false)

   const addTodo = (formData) => {
      setTodos([...todos, formData])
   }

   return (
      <div className=" w-3/4 ">
         <div className="mb-4">
            <h1 className=" font-bold inline mr-2">React Todos</h1>
            <button className="p-2 bg-slate-200 font-bold hover:shadow-md transition ease-in-out duration-300"
               onClick={() => setIsFormSubmitOpen(true)}>Add</button>
         </div>
         <div className="grid sm:grid-cols-2 gap-3 md:grid-cols-4 ">
            {todos.map((el, i) => {
               return <Todo key={i} title={el.title} description={el.description}></Todo>
            })}
         </div>
         <FormSubmit isOpen={isFormSubmitOpen} onClose={() => setIsFormSubmitOpen(false)} onUpdate={addTodo}></FormSubmit>
      </div>)
}

export default Home