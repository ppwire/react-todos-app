import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from './views/Home'
function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  )
}

export default App
