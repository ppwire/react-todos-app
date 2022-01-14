import './App.css'
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from './views/Home'
import About from './views/About'
function App() {

  const renderFooter = () => {
    const location = useLocation()
    switch (location.pathname) {
      case '/':

        break;
      case '/about':

      default:
        break;
    }

    if (location.pathname === '/') {
      return <Link to="/about" className="bottom-of-the-sea">About</Link>
    } else {
      return <Link to="/" className="bottom-of-the-sea">Home</Link>
    }

  }

  return (
    <div className="app">
      <section className="flex flex-warp justify-center mt-10">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </section>
      <footer className="mx-auto p-4 bottom-0  flex inset-x-1/2">
        {renderFooter()}
      </footer>
    </div>
  )
}

export default App
