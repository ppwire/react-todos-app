import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from './views/Home'
import About from './views/About'
function App() {

  return (

    <div className="app">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>


  )
}

export default App
