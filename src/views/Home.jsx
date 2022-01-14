import Todo from '../components/Todo'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Home = () => {

   const todoList = [
      { title: 'Day 1', description: 'spend someshit' },
      { title: 'Day 2', description: 'spend someothershit' }
   ]

   let [todos, setTodos] = useState(todoList)

   return (
      <div className=" w-3/4">
         <div className="mb-4">
            <h1 className=" font-bold inline mr-2">React Todos</h1>
            <button className="p-2 bg-slate-200 font-bold hover:shadow-md transition ease-in-out duration-300 ">Add</button>
         </div>
         <div className="grid grid-cols-4 gap-3">
            {todos.map((el, i) => {
               return <Todo key={i} title={el.title} description={el.description}></Todo>
            })}
         </div>
         <Link to="/about" className="bottom-of-the-sea">About</Link>
      </div>)
}

export default Home