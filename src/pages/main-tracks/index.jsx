import { AudioPlayer } from "../../components/audioPlayer/audioPlayer"
import  { NavMenu } from '../../components/navMenu/navMenu';
import { SideBar } from "../../components/sideBar/sideBar";
import { TrackList } from "../../components/tracklist/tracklist";
import { GlobalStyle } from "./global.styles";
import * as S from '../../app.styles';
import { useEffect, useState } from "react";
import { getTracksAll } from "../../api";

export const MainTracks = () => {

  const [isLoading, setLoading] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const handleCurrentTrack = (track) => setCurrentTrack(track);
  
  console.log(currentTrack);

  const [ loadingTrackError, setLoadingTrackError] = useState(null);


  useEffect(() => {
  if (!isLoading) {
    const timer = setTimeout(() => {
      setLoading(true)
    }, 5000)

    return () => clearTimeout(timer);
  }
  }, [isLoading]);


  useEffect(() => {
    getTracksAll().then((track) => {
      console.log(track);
      setTracks(track);
    }). catch((error) => {
      setLoadingTrackError(error.message)
    })
  }, []);


    return (
      <>
      <GlobalStyle />

      <S.Wrapper>
        <S.Container>
          <S.Main>

              <NavMenu />
            
              <TrackList 
              isLoading={isLoading}
              tracks={tracks}
              handleCurrentTrack={handleCurrentTrack}
              // loadingTracksError={loadingTracksError}
              />

              <SideBar /> 
              <AudioPlayer />

          </S.Main>
            
          <footer className="footer"></footer>
        </S.Container>
      </S.Wrapper>
      </>
    )
}