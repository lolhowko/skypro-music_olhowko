import * as S from './track.styles'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useSelector } from 'react-redux'
import {
  allTracksSelector,
  currentTrackSelector,
  isPlayingSelector,
} from '../../store/selectors/indexSelectors'
import { BarControlsItem } from '../audioPlayer/barControls'
import { useState } from 'react'
import { useSetDislikeMutation, useSetLikeMutation } from '../../serviceQuery/tracks'
import { useEffect } from 'react'

export function Track({ isLoading, track, isFavorites = false }) {
  const currentTrack = useSelector(currentTrackSelector)
  const isPlaying = useSelector(isPlayingSelector)

  const tracks = useSelector(allTracksSelector)

  const [setLike] = useSetLikeMutation();
  const [setDislike] = useSetDislikeMutation();

//JSON.stringify чтобы не слетали лайки (добавила по рекомендации с ответач )

  const { id } = JSON.stringify((localStorage.getItem("auth")))

  const auth = JSON.stringify((localStorage.getItem("user")));

  const isUserLike = Boolean(track?.stared_user?.find((user) => user.id === id)
  );
  const [isLiked, setIsLiked] = useState(isUserLike);



  useEffect(() => {
    if (isFavorites) {
      setIsLiked(isFavorites);
    } else {
      setIsLiked(isUserLike);
    }
  }, [isUserLike, isFavorites]);


  const handleLike = async (id) => {
    setIsLiked(true);
    await setLike({ id }).unwrap();
  }

  const handleDislike = async (id) => {
    setIsLiked(false);
    await setDislike({ id }).unwrap();
  };

  const toggleLikeDislike = (id) =>
    isLiked ? handleDislike(id) : handleLike(id);

  return (
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
        </S.TrackTittleImage>
        <div className="track__title-text">
          {!isLoading ? (
            <S.TrackTittleLink>
              {track.name}
              {track.remix ? (
                <S.TrackTittleSpan>{track.remix}</S.TrackTittleSpan>
              ) : (
                ''
              )}
            </S.TrackTittleLink>
          ) : (
            <Skeleton count={1} width={350} />
          )}
        </div>
      </S.TrackTittle>
      <S.TrackAuthor>
        {!isLoading ? (
          <S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
        ) : (
          <Skeleton count={1} width={300} />
        )}
      </S.TrackAuthor>
      <S.TrackAlbum>
        {!isLoading ? (
          <S.TrackAlbumLink href="http://">{track.album}</S.TrackAlbumLink>
        ) : (
          <Skeleton count={1} width={245} />
        )}
      </S.TrackAlbum>

      {!isLoading ? (
        <div className="track__time">
          <BarControlsItem 
           alt="like"
           click={() => {
             toggleLikeDislike(track?.id);
           }}
           isActive={isLiked}
           />

          <S.TrackTimeSvg alt="time">
            <use xlinkHref="/musical_service/src/fonts and style/img/icon/sprite.svg#icon-like" />
          </S.TrackTimeSvg>
          <S.TrackTimeText>{track.duration_in_seconds}</S.TrackTimeText>
        </div>
      ) : (
        <Skeleton count={1} />
      )}
    </S.PlaylistTrack>
  )
}

export default Track
