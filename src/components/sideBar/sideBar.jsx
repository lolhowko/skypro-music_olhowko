import { PlaylistItem } from "../playlist/playlist";
import './sideBar.css'


export function SideBar() {
    return(
        <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
          <p className="sidebar__personal-name">Sergey.Ivanov</p>
          <div className="sidebar__icon">
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout"></use>
            </svg>
          </div>
        </div>
        <div className="sidebar__block">
          <div className="sidebar__list">

            <PlaylistItem />

          </div>
        </div>
      </div>
    )
}

export default SideBar
