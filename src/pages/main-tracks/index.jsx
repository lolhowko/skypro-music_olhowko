import { AudioPlayer } from '../../components/audioPlayer/audioPlayer'
import { NavMenu } from '../../components/navMenu/navMenu'
import { SideBar } from '../../components/sideBar/sideBar'
import { TrackList } from '../../components/tracklist/tracklist'
import { GlobalStyle } from './global.styles'
import * as S from '../../app.styles'
import { useEffect, useState } from 'react'
import { getTracksAll } from '../../api'
import { useDispatch, useSelector } from 'react-redux'
import {
  allTracksSelector,
  currentTrackSelector,
  shuffleAllTracksSelector,
  shuffleSelector,
} from '../../store/selectors/indexSelectors'
import { setAllTracks, setCurrentTrack } from '../../store/slices/slices'

export const MainTracks = () => {
  const dispatch = useDispatch()

  const tracks = useSelector(allTracksSelector)
  // const [tracks, setTracks] = useState([]);

  const currentTrack = useSelector(currentTrackSelector)
  // const [currentTrack, setCurrentTrack] = useState(null);
  // const handleCurrentTrack = (track) => setCurrentTrack(track);

  const shuffle = useSelector(shuffleSelector)
  const shuffleAllTracks = useSelector(shuffleAllTracksSelector)
  const arrayTracksAll = shuffle ? shuffleAllTracks : tracks

  const [isLoading, setLoading] = useState(false)
  const [tracksError, setTracksError] = useState(null)

  const handleCurrentTrack = (track) => {
    const indexCurrentTrack = arrayTracksAll.indexOf(track)
    dispatch(setCurrentTrack({ track, indexCurrentTrack }))
  }

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setLoading(true)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [isLoading])

  useEffect(() => {
    getTracksAll()
      .then((track) => {
        // setTracks(track);
        dispatch(setAllTracks(track))
      })
      .catch((error) => {
        setTracksError(error.message)
        console.log(error.message)
      })
  }, [])

  useEffect(() => {
    async function getTracks() {
      try {
        setLoading(true) //состояние загрузки началось
        setTracksError(null)
        await getTracksAll().then((tracks) => {
          // setTracks(tracks)
          dispatch(setAllTracks(tracks))
        }) //получение из апи треков
      } catch (error) {
        setTracksError(error.message) //если ошибка
        console.log(error.message)

      } finally {
        setLoading(false) //состояние загрузки закончилось после получения данных из апи
      }
    }
    getTracks()
  }, [])


  return (
    <>
      {/* <GlobalStyle /> */}

      {/* <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu /> */}

            <TrackList
              isLoading={isLoading}
              handleCurrentTrack={handleCurrentTrack}
              tracksError={tracksError}
            />

            {/* <SideBar isLoading={isLoading} />

            {currentTrack && (
              <AudioPlayer isLoading={isLoading} currentTrack={currentTrack} />
            )}
          </S.Main>

          <footer className="footer"></footer>
        </S.Container>
      </S.Wrapper> */}
    </>
  )
}
