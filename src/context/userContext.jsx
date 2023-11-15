
import { useContext } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router'

export const UserContext = createContext(null)

export const useUserContext = () => {
    return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/Auth')
  }

  return (
    <UserContext.Provider value={{ handleLogout }}>
      {children}
    </UserContext.Provider>
  )
}
