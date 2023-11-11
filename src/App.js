import { useEffect, useState } from 'react'
import { AppRoutes } from './routes'
import { useNavigate } from 'react-router-dom'

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

  return (
    <>
      <div className="App">
        <AppRoutes user={user} setUser={setUser} onAuthButtonClick={handleLogin} />
      </div>
    </>
  )
}

export default App
