import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <header className="header">

        <Link to="/" className = "duck-logo">
            <img src="/static/images/rubber duck.png" className = "nav-img"></img>
            <h2>at Mt. SAC</h2>
        </Link>

        <nav className="navbar">
          <ul className = "nav-ul">
            <li className = "nav-li"><Link to="/about" className="navbar-clickies">about</Link></li>
            <li className = "nav-li">events</li>
            <li className = "nav-li"><Link to="/team" className="navbar-clickies">team</Link></li>
            <li className = "nav-li">open source</li>
            <li className = "nav-li">join us</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar