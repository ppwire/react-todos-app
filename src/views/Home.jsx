import Todo from '../components/Todo'
import FormSubmit from '../components/FormSubmit'
import { useState } from 'react'
import './Home.css'

const Home = () => {

   const todoList = [
      { title: 'Day 1', description: 'spend someshit' },
      { title: 'Day 2', description: 'spend someothershit' },
   ]

   let [todos, setTodos] = useState(todoList)
   let [doneList, setDoneList] = useState([])
   const [isFormSubmitOpen, setIsFormSubmitOpen] = useState(false)

   const addTodo = (formData) => {
      setTodos([...todos, formData])
   }

   const removeTodo = (key) => {
      let tempArray = [...todos]
      tempArray.splice(key, 1)
      setTodos([...tempArray])
   }

   const addDone = (key) => {
      let tempObj = { ...todos[key] }
      removeTodo(key)
      setDoneList([...doneList, tempObj])
   }

   const RenderDoneList = () => {

   }

   return (
      <div className=" w-3/4 ">
         <div className="mb-4">
            <h1 className=" font-bold inline mr-2">React Todos</h1>
            <button className="p-2 bg-slate-200 font-bold hover:shadow-md transition ease-in-out duration-300"
               onClick={() => setIsFormSubmitOpen(true)}>Add</button>
         </div>
         <div className="todo-container">
            {todos.map((el, i) => {
               return <Todo key={i} title={el.title} description={el.description} onDelete={() => removeTodo(i)}
                  onDone={() => addDone(i)}
               ></Todo>
            })}
         </div>
         {doneList.length != 0 &&
            <div>
               <h2 className="font-semibold">Done</h2>
               <div className="todo-container">
                  {doneList.map((el, i) => {
                     return (
                        <Todo key={i} title={el.title} description={el.description}
                        ></Todo>
                     )
                  })}
               </div>
            </div>
         }
         <FormSubmit isOpen={isFormSubmitOpen} onClose={() => setIsFormSubmitOpen(false)} onUpdate={addTodo}></FormSubmit>
      </div >)
}

export default Home