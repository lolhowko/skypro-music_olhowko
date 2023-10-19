import {Routes, Route} from "react-router-dom"
import { MainTracks } from "./pages/main-tracks"
import { Collections } from "./pages/collections"

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<MainTracks />} />
            <Route path="/collections" element={<Collections />} />

        </Routes>
    )
}