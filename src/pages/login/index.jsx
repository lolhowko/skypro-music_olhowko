import { useNavigate } from 'react-router-dom'
import * as S from '../login/login.styles'
import { GlobalStyle } from '../main-tracks/global.styles'

export const Login = () => {
  const navigate = useNavigate()

  const handleOnButtonClick = () => {
    navigate('/', { replace: true })
  }

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
                <S.ModalBtnEnterA onClick={handleOnButtonClick}>
                  Войти
                </S.ModalBtnEnterA>
              </S.ModalBtnEnter>

              <S.ModalBtnSignerUp>
                <S.ModalBtnSignerUpA href="/register">
                  Зарегистрироваться
                </S.ModalBtnSignerUpA>
              </S.ModalBtnSignerUp>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.ContainerEnter>
      </S.Wrapper>
    </>
  )
}
