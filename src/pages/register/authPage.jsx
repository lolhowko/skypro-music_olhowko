import { Link } from 'react-router-dom'
import * as S from './authPage.styles'
import { useEffect, useState } from 'react'
import { getToken, loginUserApi, registrationUserApi } from '../../api'
import { useUserContext } from '../../context/userContext'

export default function AuthPage({ setUser }) {
  const [error, setError] = useState(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const [offButton, setOffButton] = useState(false)

  const [isLoginMode, setIsLoginMode] = useState(false)

  const handleLogin = async () => {
    // alert(`Выполняется вход: ${email} ${password}`)
    // setError('Неизвестная ошибка входа')

    try {
      const response = await loginUserApi(email, password)
      console.log(response)

      console.log(email)
      console.log(response.username)

      setUser(response.username)
      localStorage.setItem('user', JSON.stringify(response.username))

      setOffButton(true)
      window.location.href = '/'
    } catch (currentError) {
      setError(currentError.message)
    } finally {
      setOffButton(false)
    }
  }

  // const handleLogin = () => {
  //   if (email === '' && password === '' && repeatPassword === '') {
  //     setError('Введите все значения')
  //   } else {
  //     setIsLoginMode(true)
  //     loginUserApi(email, password)
  //     getToken(email, password)
  //       .then((response) => {
  //         setUser("user", response.access);
  //         setIsLogin(true);
  //         setRegUser(email);
  //         console.log(regUser);
  //       })
  //       .then(() => {
  //         setIsLoginMode(false)
  //       })

  //     // alert(`Выполняется регистрация: ${email} ${password}`);
  //     // setError("Неизвестная ошибка регистрации");
  //   }
  // }

  const handleRegister = async () => {
    // alert(`Выполняется регистрация: ${email} ${password}`)
    // setError('Неизвестная ошибка регистрации')

    if (password !== repeatPassword) {
      setError('Пароли не совпадают')
    } else {
      try {
        const response = await registrationUserApi(email, password)
        console.log(response)
        setOffButton(true)
        setUser(response.username)
        localStorage.setItem('user', response.username)
        window.location.href = '/'
      } catch (currentError) {
        setError(currentError.message)
        console.log(error)
      } finally {
        setOffButton(false)
      }
    }
  }

  const handleIsLoginMode = () => {
    setIsLoginMode(true)
  }

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password, repeatPassword])

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/Auth">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister} disabled={offButton}>
                {offButton ? 'Загружаем информацию...' : 'Зарегистрироваться'}
              </S.PrimaryButton>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleLogin} disabled={offButton}>
                {offButton ? 'Загружаем информацию...' : 'Войти'}
              </S.PrimaryButton>
              <Link to="/auth">
                <S.ButtonTwo onClick={handleIsLoginMode}>
                  Зарегистрироваться
                </S.ButtonTwo>
              </Link>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
