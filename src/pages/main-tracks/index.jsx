import { AudioPlayer } from "../../components/audioPlayer/audioPlayer"
import  { NavMenu } from '../../components/navMenu/navMenu';
import { SideBar } from "../../components/sideBar/sideBar";
import { TrackList } from "../../components/tracklist/tracklist";
import { GlobalStyle } from "./global.styles";
import * as S from '../../app.styles';
import { getTracksAll } from "../../api.jsx";
import { useEffect, useState } from "react";

export const MainTracks = () => {

  const [tracks, setTracks] = useState();

  useEffect(() => {
    getTracksAll().then((tracks) => 
    console.log(tracks));
    setTracks(tracks)
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