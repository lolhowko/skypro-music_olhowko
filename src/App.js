import { AppRoutes } from './routes'
import { UserProvider } from './context/userContext'
import { Provider } from 'react-redux'
import store from "./store/indexStore";

function App() {

  return (
    <Provider store={store}>
        <UserProvider>
      <div className="App">
        <AppRoutes />
      </div>
    </UserProvider>
    </Provider>

  )
}

export default App
