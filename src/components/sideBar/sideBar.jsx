import { PlaylistItem } from "../playlistItem/playlistItem";
import * as S from './sideBar.styles'


export function SideBar() {
    return(
        <S.MainSidebar className="sidebar">
        <S.SidebarPersonal>
          <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
          <S.SidebarIcon>
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout"></use>
            </svg>
          </S.SidebarIcon>
        </S.SidebarPersonal>
        <S.SidebarBlock>
          <S.SidebarList>

            <PlaylistItem />

          </S.SidebarList>
        </S.SidebarBlock>
      </S.MainSidebar>
    )
}

export default SideBar
