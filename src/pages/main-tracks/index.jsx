import { AudioPlayer } from "../../components/audioPlayer/audioPlayer"
import  { NavMenu } from '../../components/navMenu/navMenu';
import { SideBar } from "../../components/sideBar/sideBar";
import { TrackList } from "../../components/tracklist/tracklist";
import { GlobalStyle } from "./global.styles";
import * as S from '../../app.styles';
import { useEffect, useState } from "react";

export const MainTracks = () => {

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    // Заводим таймер
    const timerId = setInterval(() => setLoading(!loading), 5000);		
    // Данная функция вызывается при удалении компонента из DOM
    return () => {
        // Наводим порядок после удаления компонента
        clearInterval(timerId);
    };
}, []);

    return (
        <>
        <GlobalStyle />

        <S.Wrapper>
          <S.Container>
            <S.Main>

            <NavMenu />
            
            <TrackList />
            <SideBar /> 
            <AudioPlayer />

            </S.Main>
            
            <footer className="footer"></footer>
          </S.Container>
        </S.Wrapper>
        </>
    )
}