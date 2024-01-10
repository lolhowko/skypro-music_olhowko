import { useContext, useState } from 'react'
import * as S from './burger.styles'
import { useUserContext } from '../../context/userContext'
import { Link } from 'react-router-dom'

export const Burger = () => {
  const [visible, setVisible] = useState(true)

  const toggleVisibility = () => setVisible(!visible)

  const { handleLogout } = useUserContext()

  return (
    <div>
      <S.NavBurger className="burger" onClick={toggleVisibility}>
        <S.NavBurgerLine></S.NavBurgerLine>
        <S.NavBurgerLine></S.NavBurgerLine>
        <S.NavBurgerLine></S.NavBurgerLine>
      </S.NavBurger>

      {!visible && (
        <S.NavMenu className="menu">
          <S.MenuList>
            <Link to="/">
              <S.MenuItem>
                <S.MenuLink href="/">Главное</S.MenuLink>
              </S.MenuItem>
            </Link>
            <Link to="/favorites">
              <S.MenuItem>
                <S.MenuLink href="/favorites">Мой плейлист</S.MenuLink>
              </S.MenuItem>
            </Link>
            <Link>
              <S.MenuItem onClick={handleLogout}>
                <S.MenuLink href="../Auth">Выйти</S.MenuLink>
              </S.MenuItem>
            </Link>
          </S.MenuList>
        </S.NavMenu>
      )}
    </div>
  )
}

export default Burger
