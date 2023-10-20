import {Routes, Route} from "react-router-dom"
import { MainTracks } from "./pages/main-tracks"
import { Collections } from "./pages/collections"
import { NotFound } from "./pages/not-found"
import { Login } from "./pages/login"
import { MyPlaylist } from "./pages/my-playlist"
import { Register } from "./pages/register"

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<MainTracks />} />
            <Route path="/collections/:id" element={<Collections />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/myplaylist" element={<MyPlaylist />} />

            <Route path="*" element={<NotFound />} />

        </Routes>
    )
}