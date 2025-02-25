import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div>
        <h1>Welcome to zindua School</h1>
        <br />
        <Link className="btn btn-outline-secondary" to={'/login'}>Login</Link>
        <Link className="btn btn-outline-Primary" to={'/register'}>Register</Link>
    </div>
  )
}

export default Home;