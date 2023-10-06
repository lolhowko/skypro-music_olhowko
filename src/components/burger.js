import { useState } from "react";
import './burger.css' 


export const Burger = () => {
    const [visible, setVisible] = useState(true);
  
    const toggleVisibility = () => setVisible(!visible);

  
    return (
      <div>
        <button className="nav__burger burger" onClick={toggleVisibility}>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
        </button>
  
        {!visible && (
            <div className="nav__menu menu">
            <ul className="menu__list">
            <li className="menu__item">
                <a href="#" className="menu__link">Главное</a>
            </li>
            <li className="menu__item">
                <a href="#" className="menu__link">Мой плейлист</a>
            </li>
            <li className="menu__item">
                <a href="../signin.html" className="menu__link">Войти</a>
            </li>
            </ul>
            </div>
        )}
      </div>
    );
  };

export default Burger
