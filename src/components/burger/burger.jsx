import { useState } from "react";
import * as S from './burger.styles'


export const Burger = () => {
    const [visible, setVisible] = useState(true);
  
    const toggleVisibility = () => setVisible(!visible);

  
    return (
      <div>
        <S.NavBurger className="burger" onClick={toggleVisibility}>
            <S.NavBurgerLine></S.NavBurgerLine>
            <S.NavBurgerLine></S.NavBurgerLine>
            <S.NavBurgerLine></S.NavBurgerLine>
        </S.NavBurger>
  
        {!visible && (
            <S.NavMenu className="menu">
            <S.MenuList c>
            <S.MenuItem>
                <S.MenuLink href="#">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
                <S.MenuLink href="/myplaylist">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
                <S.MenuLink href="../signin.html">Войти</S.MenuLink>
            </S.MenuItem>
            </S.MenuList>
            </S.NavMenu>
        )}
      </div>
    );
  };

export default Burger
