import { AppRoutes } from './routes'
import { UserProvider } from './context/userContext'
import { Provider } from 'react-redux'
import { store } from '../src/store/indexStore'

function App() {
  return (
    <UserProvider>
      <Provider store={store}>
        <div className="App">
          <AppRoutes />
        </div>
      </Provider>
    </UserProvider>
  )
}

export default App
