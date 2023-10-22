import {Routes, Route} from "react-router-dom"
import { MainTracks } from "./pages/main-tracks"
import { Category } from "./pages/category"
import { NotFound } from "./pages/not-found"
import { Login } from "./pages/login"
import { Favorites } from "./pages/favorites"
import { Register } from "./pages/register"

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<MainTracks />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/favorites" element={<Favorites />} />

            <Route path="*" element={<NotFound />} />

        </Routes>
    )
}