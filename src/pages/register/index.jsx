import * as S from '../register/register.styles'
import { GlobalStyle } from './register.styles'


export const Register = () => {
    return (
        <>
            <GlobalStyle />

        <S.Wrapper className="wrapper">
          <S.ContainerSignUp>
            <S.ModalBlock>
              <S.ModalFormLogin>
                <a href="../">
                  <S.ModalLogo>
                    <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
                  </S.ModalLogo>
                </a>
                <S.Login
                  type="text"
                  name="login"
                  placeholder="Почта"
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  placeholder="Пароль"
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  placeholder="Повторите пароль"
                />
                <S.ModalBtnSignUpEnt>
                  <S.ModalBtnSignUpEntA href="/">Зарегистрироваться</S.ModalBtnSignUpEntA>
                </S.ModalBtnSignUpEnt>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.ContainerSignUp>
        </S.Wrapper>
      </>
    )
}