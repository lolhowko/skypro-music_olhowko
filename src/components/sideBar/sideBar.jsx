import { useContext } from 'react'
import { PlaylistItem } from '../playlistItem/playlistItem'
import * as S from './sideBar.styles'
import { useUserContext } from '../../context/userContext'

export function SideBar() {
  const { handleLogout } = useUserContext()
  const user = localStorage.getItem('user')

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user}</S.SidebarPersonalName> 
        <S.SidebarIcon onClick={handleLogout}>
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
