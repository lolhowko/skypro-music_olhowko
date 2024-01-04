import { useDispatch, useSelector } from 'react-redux'
import { FilterBlock } from '../filterBlock/filterBlock'
import { SearchBlock } from '../searchBlock/searchBlock'
import { Track } from '../track/track'
import * as S from './tracklist.styles'
import {
  allTracksSelector,
  currentPageSelector,
  currentPlaylistSelector,
  favouritesTracksSelector,
  shuffleAllTracksSelector,
  shuffleSelector,
} from '../../store/selectors/indexSelectors'
import {
  setCurrentPlaylist,
  setCurrentTrack,
  toggleShuffleTrack,
} from '../../store/slices/slices'

export function TrackList({
  isLoading,
  error,
  tracks,
  isFavorites,
}) {
  const dispatch = useDispatch()
  const shuffle = useSelector(shuffleSelector)
  const allTracks = useSelector(allTracksSelector)

  const favouritesTracks = useSelector(favouritesTracksSelector)
  const currentPlaylist = useSelector(currentPlaylistSelector)

  const shuffleAllTracks = useSelector(shuffleAllTracksSelector)
  const currentPage = useSelector(currentPageSelector)
  const arrayTracksAll = shuffle ? shuffleAllTracks : currentPlaylist

  const handleCurrentTrack = (track) => {
    if (currentPage === 'Main') {
      dispatch(setCurrentPlaylist(allTracks))
    }
    if (currentPage === 'Favorites') {
      dispatch(setCurrentPlaylist(favouritesTracks))
    }

    if (shuffle) {
      dispatch(toggleShuffleTrack({ shuffle }))
    }

    const indexCurrentTrack = arrayTracksAll.indexOf(track)
    dispatch(setCurrentTrack({ track, indexCurrentTrack }))
    console.log(track)
  }

  return (
    <S.MainCenterblock className="centerblock">
      <SearchBlock />

      <S.CenterblockH2>Треки</S.CenterblockH2>

      <FilterBlock />

      <S.CenterblockContent>
        <S.ContentTittle>
          <S.Col01>Трек</S.Col01>
          <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
          <S.Col03>АЛЬБОМ</S.Col03>
          <S.Col04>
            <S.ContentTittleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.ContentTittleSvg>
          </S.Col04>
        </S.ContentTittle>

        {error ? (
          <div>Не удалось загрузить плейлист, попробуйте позже</div>
        ) : (
          <S.ContentPlaylist className="playlist">
            {isLoading &&
              new Array(20)
                .fill()
                .map(() => <Track key={Math.random()} isLoading={isLoading} />)}

            {tracks &&
              tracks.map((track) => (
                <S.PlaylistItem
                    key={track.id}
                    onClick={() => handleCurrentTrack(track)}
                  >
                    <Track
                      key={track.id}
                      onClick={() => handleCurrentTrack(track)}
                      isLoading={isLoading}
                      track={track}
                      tracks={tracks}
                      isFavorites={isFavorites}
                    />
                  </S.PlaylistItem>
              ))}
          </S.ContentPlaylist>
        )}

      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}

export default TrackList
