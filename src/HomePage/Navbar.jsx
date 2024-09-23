import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <header className="header">

        <Link to="/" className = "duck-logo">
            <img src="/static/images/rubber duck.png"></img>
            <h2>at Mt. SAC</h2>
        </Link>

        <nav className="navbar">
          <ul>
            <li><Link to="/about" className="navbar-clickies">about</Link></li>
            <li>events</li>
            <li>team</li>
            <li>projects</li>
            <li>join us</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar