import {Routes, Route} from "react-router-dom"
import { MainTracks } from "./pages/main-tracks"
import { Category } from "./pages/category"
import { NotFound } from "./pages/not-found"
import { Login } from "./pages/login"
import { Favorites } from "./pages/favorites"
import { Register } from "./pages/register"
import { ProtectedRoute } from "./components/protected-route"
import { useState } from "react"

export const AppRoutes = () => {

    const [user, setUser] = useState(null);

    const handleLogin = () => {
      
      localStorage.setItem('user', 'true')
  
      setUser({ login: "token" });
    }
    const handleLogout = () => {
      
      setUser(null);
    }

    return(
        <Routes>

             <Route path="/" element={<Login user={user}
          onAuthButtonClick={user ? handleLogout : handleLogin}/>} />
        <Route path="/register" element={<Register />} />
        

            
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}

            {/* <Route element={
                <ProtectedRoute isAllowed={Boolean(user)}>
                    <Route path="/main" element={<MainTracks />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/favorites" element={<Favorites />} />
                </ProtectedRoute>
            }
            /> */}

          <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
            <Route path="/main" element={<MainTracks />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>

            <Route path="*" element={<NotFound />} />

        </Routes>
    )
}