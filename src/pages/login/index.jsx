import { NavLink, useNavigate } from 'react-router-dom'
import * as S from '../login/login.styles'
import { GlobalStyle } from '../main-tracks/global.styles'

export const Login = ({ onAuthButtonClick }) => {
  const navigate = useNavigate()

  // const handleOnButtonClick = () => {
  //   navigate('/', { replace: true })
  // }

  return (
    <>
      <GlobalStyle />

      <S.Wrapper>
        <S.ContainerEnter>
          <S.ModalBlock>
            <S.ModalFormLogin action="#">
              <a href="../">
                <S.ModalLogo>
                  <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
                </S.ModalLogo>
              </a>
              <S.Login type="text" name="login" placeholder="Почта" />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.ModalBtnEnter>
                <S.ModalBtnEnterA onClick={() => {onAuthButtonClick()
                navigate('/', {replace: false})}}>
                  Войти
                </S.ModalBtnEnterA>
              </S.ModalBtnEnter>

              <NavLink to="/register">
                <S.ModalBtnSignerUp onClick={() => navigate('/register', {replace: false})}>
                  Зарегистрироваться
                </S.ModalBtnSignerUp>
              </NavLink>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.ContainerEnter>
      </S.Wrapper>
    </>
  )
}
