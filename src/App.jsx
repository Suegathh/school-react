import './app.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Register from '../src/pages/Register'
import Login from "./pages/Login"
import Home from "./pages/Home"
import Students from './pages/Students'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/students" element={<Students />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;