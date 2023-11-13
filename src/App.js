import { useEffect, useState } from 'react'
import { AppRoutes } from './routes'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/userContext'

function App() {
  const navigate = useNavigate()

  const [user, setUser] = useState(localStorage.getItem('user') || null)

  const handleLogin = (e) => {
    e.preventDefault()

    localStorage.setItem('user', 'true')
    const curentLocalStorage = localStorage.getItem('user')
    console.log(curentLocalStorage)
    setUser(curentLocalStorage)

    navigate('/', { replace: true })
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/Auth";
  };

  return (
    <UserContext.Provider value={{user, handleLogout}}>
      <div className="App">
        <AppRoutes user={user} setUser={setUser} onAuthButtonClick={handleLogin} />
      </div>
    </UserContext.Provider>
  )
}

export default App
