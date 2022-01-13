import Todo from '../components/Todo'
const Home = () => {
   return (
      <div className=" w-3/4">
         <h1 className=" font-bold mb-4">React Todos</h1>
         <div className="grid grid-cols-4 gap-3">
            <Todo title="Day 1" description="Do some shit"></Todo>
            <Todo title="Day 2" description="Do some shit 2"></Todo>
         </div>

      </div>)
}

export default Home