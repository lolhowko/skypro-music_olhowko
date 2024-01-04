import { useContext } from 'react'
import { PlaylistItem } from '../playlistItem/playlistItem'
import * as S from './sideBar.styles'
import { useUserContext } from '../../context/userContext'

export function SideBar() {
  const { handleLogout } = useUserContext()
  const {username} = JSON.parse(localStorage.getItem('auth'))

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{username}</S.SidebarPersonalName> 
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
