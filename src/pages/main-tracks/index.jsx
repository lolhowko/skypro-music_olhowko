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

  const [tracksError, setTracksError] = useState(null)


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
      setTracks(track);
    }). catch((error) => {
      setLoadingTrackError(error.message)
    })
  }, []);


  useEffect(() => {
    async function getTracks (){
   try {
     setloading (true);//состояние загрузки началось
     setTracksError(null);
     await getTracksAll().then((tracks) => {
     console.log(tracks);//проверка что получаем из апи
     setTracks(tracks);
   })//получение из апи треков
   } catch(error) {
     setTracksError(error.message)//если ошибка
   } finally{
     setloading(false)//состояние загрузки закончилось после получения данных из апи
   }
   
     }
     getTracks();
   }, [])


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
              tracksError={tracksError}
              />

              <SideBar isLoading={isLoading}/> 

              {currentTrack && 
              <AudioPlayer isLoading={isLoading} currentTrack={currentTrack}/>}

          </S.Main>
            
          <footer className="footer"></footer>
        </S.Container>
      </S.Wrapper>
      </>
    )
}