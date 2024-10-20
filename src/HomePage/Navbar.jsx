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
            <li className = "nav-li"><Link to="/events" className="navbar-clickies">events</Link></li>
            <li className = "nav-li"><Link to="/team" className="navbar-clickies">team</Link></li>
            <li className = "nav-li"><Link to="/projects" className="navbar-clickies">projects</Link></li>
            {/* <li className = "nav-li"><Link to="/partners" className="navbar-clickies">club partners</Link></li> */}
            <li className = "nav-li"><Link to="/join-us" className="navbar-clickies join-us-button">join us</Link></li>
          </ul>
        </nav>
        </header>

        <div className="spacer"></div>
    </>
  )
}

export default Navbar