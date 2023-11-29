import * as S from './track.styles'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useSelector } from 'react-redux';
import {
  allTracksSelector,
  currentTrackSelector,
  isPlayingSelector,
} from "../../store/selectors/indexSelectors"


export function Track({ isLoading, handleCurrentTrack }) {
  const currentTrack = useSelector(currentTrackSelector);
  const isPlaying = useSelector(isPlayingSelector);

  const tracks = useSelector(allTracksSelector)


  const fullPlayList = tracks.map((track) =>
    <S.PlaylistItem key={track.id} onClick={() => handleCurrentTrack(track)}>
      <S.PlaylistTrack className="track">
        <S.TrackTittle>
          <S.TrackTittleImage>
          {currentTrack && currentTrack.id === track.id ? (
              <S.PointPlaying $playing={isPlaying} />
            ) : (
              <S.TrackTittleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </S.TrackTittleSvg>
            )}

          {/* {isLoading ? (          
              <S.TrackTittleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </S.TrackTittleSvg>
        ) : (
          <Skeleton count={1} width={51} height={51}/>
        )} */}

          </S.TrackTittleImage>
          <div className="track__title-text">

          {isLoading ? (    
            <S.TrackTittleLink>
              {track.name} 
              {track.remix ? (<S.TrackTittleSpan>{track.remix}</S.TrackTittleSpan>) : ("")}
            </S.TrackTittleLink>
          ) :
          (
            <Skeleton count={1} width={350}/>
              )
          }
          </div>
        </S.TrackTittle>
        <S.TrackAuthor>
        {isLoading ? (    
            <S.TrackAuthorLink>
            {track.author}
            </S.TrackAuthorLink>      
      ) : (
        <Skeleton count={1} width={300}/>
          )}

        </S.TrackAuthor>
        <S.TrackAlbum>
        {isLoading ?  (    
              <S.TrackAlbumLink href="http://">
              {track.album}
              </S.TrackAlbumLink>     
        ) : (
          <Skeleton count={1} width={245}/>
          )}
        </S.TrackAlbum>

        {isLoading ? (    
                <div className="track__time">   
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="/musical_service/src/fonts and style/img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeText>{track.duration_in_seconds}</S.TrackTimeText>
              </div>   
          ) :
          (
            <Skeleton count={1}/>
          )}
      </S.PlaylistTrack>
    </S.PlaylistItem>
)

    return(fullPlayList)
}

export default Track
