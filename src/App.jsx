import { useEffect, useState } from 'react'
import { AppRoutes } from './routes'
import { trackArr } from './utilitis/trackArr'
import { getTracksAll } from './api'

function App() {

  const [user, setUser] = useState(false)

  const handleLogin = () => {
    localStorage.setItem('user', 'true')
    const curentLocalStorage = localStorage.getItem('user')
    console.log(curentLocalStorage)
    setUser(curentLocalStorage)
  }

  return (
    <>
      <div className="App">
        <AppRoutes
          user={user}
          onAuthButtonClick={handleLogin}
        />
      </div>
    </>
  )
}

export default App
