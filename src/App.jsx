import { useEffect, useState } from 'react'
import { AppRoutes } from './routes'
import { trackArr } from './utilitis/trackArr'
import { getTracksAll } from './api'

function App() {

  const [currentTrack, setCurrentTrack] = useState(null)
  const [user, setUser] = useState(false)
  const [tracks, setArrTracks] = useState(trackArr)

  useEffect(() => {
    getTracksAll().then((trackArr) => {
      console.log(trackArr)
      setArrTracks(trackArr)
    })
  }, [])

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
          tracks={tracks}
          setArrTracks={setArrTracks}
          currentTrack={currentTrack}
        />
      </div>
    </>
  )
}

export default App
