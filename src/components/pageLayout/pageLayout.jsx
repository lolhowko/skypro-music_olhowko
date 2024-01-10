import { AudioPlayer } from '../../components/audioPlayer/audioPlayer'
import { NavMenu } from '../../components/navMenu/navMenu'
import { SideBar } from '../../components/sideBar/sideBar'
import { GlobalStyle } from './global.styles'
import * as S from '../../app.styles'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { currentTrackSelector } from '../../store/selectors/indexSelectors'
import { useState } from 'react'

export const Layout = () => {
    const [isLoading, setLoading] = useState(false)
    const currentTrack = useSelector(currentTrackSelector)

    return (
        <>
          <GlobalStyle />
    
          <S.Wrapper>
            <S.Container>
              <S.Main>
                <NavMenu />
    
                <Outlet/> 
    
                <SideBar isLoading={isLoading} />
    
                {currentTrack && (
                  <AudioPlayer isLoading={isLoading} currentTrack={currentTrack} />
                )}
              </S.Main>
    
              <footer className="footer"></footer>
            </S.Container>
          </S.Wrapper>
        </>
      )
}

export default Layout;
