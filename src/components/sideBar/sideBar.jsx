import { useContext } from "react";
import { PlaylistItem } from "../playlistItem/playlistItem";
import * as S from './sideBar.styles'
import { UserContext } from "../../context/userContext";


export function SideBar() {
  const { user, handleLogout } = useContext(UserContext)

    return(
        <S.MainSidebar>
        <S.SidebarPersonal>
          <S.SidebarPersonalName>{user}</S.SidebarPersonalName>
          <S.SidebarIcon  onClick={handleLogout}>
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
