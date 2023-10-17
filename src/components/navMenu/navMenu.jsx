import { Burger } from '../burger/burger' 
import * as S from './navMenu.styles'

export function NavMenu() {
    return (
        <S.MainNav className="main__nav nav">
          <S.NavLogo className="nav__logo logo">
            <S.LogoImage className="logo__image" src="img/logo.png" alt="logo" />
          </S.NavLogo>

          <Burger />

      </S.MainNav>
    )
}

export default NavMenu