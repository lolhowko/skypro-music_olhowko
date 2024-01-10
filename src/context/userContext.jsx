
import { useContext } from 'react'
import { createContext } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAuth } from '../store/slices/AuthorizationSlice'

export const UserContext = createContext(null)

export const useUserContext = () => {
    return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('auth')
    navigate('/Auth')
  }

  return (
    <UserContext.Provider value={{ handleLogout }}>
      {children}
    </UserContext.Provider>
  )
}
