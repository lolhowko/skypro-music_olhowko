import { Burger } from '../burger/burger'
import './navMenu.css'

export function NavMenu() {
    return (
        <nav className="main__nav nav">
          <div className="nav__logo logo">
            <img className="logo__image" src="img/logo.png" alt="logo" />
          </div>

          <Burger />

      </nav>
    )
}

export default NavMenu