import { useEffect, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './audioPlayer.styles'
import BarControls, { BarControlsItem } from './barControls'
import { VolumeBlock } from './volumeBlock'
import BarPlayerProgress from './BarPlayerProgress'
import { useDispatch, useSelector } from 'react-redux'
import {
  allTracksSelector,
  indexCurrentTrackSelector,
  isPlayingSelector,
  shuffleAllTracksSelector,
  shuffleSelector,
} from '../../store/selectors/indexSelectors'
import { setIsPlaying, setNextTrack } from '../../store/slices/slices'
import { useSetDislikeMutation, useSetLikeMutation } from '../../serviceQuery/tracks'

export function AudioPlayer({ isLoading, currentTrack }) {
  const dispatch = useDispatch()
  const tracks = useSelector(allTracksSelector)

  const isPlaying = useSelector(isPlayingSelector)

  const shuffle = useSelector(shuffleSelector)
  const shuffleAllTracks = useSelector(shuffleAllTracksSelector)
  const indexCurrentTrack = useSelector(indexCurrentTrackSelector)

  const arrayTracksAll = shuffle ? shuffleAllTracks : tracks

  const [timeProgress, setTimeProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  const [repeatTrack, setRepeatTrack] = useState(false)

  const audioRef = useRef(null)


  const handleStartStop = () => {
    if (isPlaying) {
      audioRef.current.pause()
      dispatch(setIsPlaying(false))
    } else {
      audioRef.current.play()
      dispatch(setIsPlaying(true))
    }
  }

  useEffect(() => {
    handleStartStop()
    audioRef.current.onended = () => {
      if (indexCurrentTrack < arrayTracksAll.length - 1) {
        dispatch(
          setNextTrack({
            nextTrack: arrayTracksAll[arrayTracksAll.indexOf(currentTrack) + 1],
            indexNextTrack: arrayTracksAll.indexOf(currentTrack) + 1,
          })
        )
      }
      dispatch(setIsPlaying(false))
    }
  }, [currentTrack])

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }
  const onTimeUpdate = () => {
    setTimeProgress(audioRef.current.currentTime)
  }

  const toggleTrackRepeat = () => {
    audioRef.current.loop = !repeatTrack
    setRepeatTrack(!repeatTrack)
  }


  const [setLike] = useSetLikeMutation();
  const [setDislike] = useSetDislikeMutation();
  const { id } = JSON.stringify((localStorage.getItem("auth")))
  const auth = JSON.parse(localStorage.getItem("user"));
  const isUserLike = Boolean(
    currentTrack?.stared_user?.find((user) => user.id === id)
  );
  // console.log(id);
  const [isLiked, setIsLiked] = useState(isUserLike);
  useEffect(() => {
    if (currentTrack?.stared_user) {
      setIsLiked(isUserLike);
    } else {
      setIsLiked(true);
    }
  }, [isUserLike, currentTrack?.stared_user]);

  const handleLike = async (id) => {
    setIsLiked(true);
    await setLike({ id }).unwrap();
  };

  const handleDislike = async (id) => {
    setIsLiked(false);
    await setDislike({ id }).unwrap();
  };

  const toggleLikeDislike = (id) =>
    isLiked ? handleDislike(id) : handleLike(id);

  return (
    <S.Bar>
      <S.AudioComponent
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        src={currentTrack.track_file}
      ></S.AudioComponent>

      <S.BarContent>
        <BarPlayerProgress
          duration={duration}
          timeProgress={timeProgress}
          audioRef={audioRef}
        />

        <S.BarPlayerBlock>
          <S.BarPlayer>
            <BarControls
              handleStartStop={handleStartStop}
              repeatTrack={repeatTrack}
              toggleTrackRepeat={toggleTrackRepeat}
              isPlaying={isPlaying}
              audioRef={audioRef}
            />

            <S.PlayerTrackPlay>
              <S.PlayerContain>
                <S.TrackPlayImage>
                  {!isLoading ? (
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackPlaySvg>
                  ) : (
                    <Skeleton count={1} width={51} height={51} />
                  )}
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                  {!isLoading ? (
                    <S.TrackPlayAuthorLink href="http://">
                      {currentTrack.name}.
                    </S.TrackPlayAuthorLink>
                  ) : (
                    <Skeleton count={1} />
                  )}
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  {!isLoading ? (
                    <S.TrackPlayAlbumLink href="http://">
                      {currentTrack.author}
                    </S.TrackPlayAlbumLink>
                  ) : (
                    <Skeleton count={1} />
                  )}
                </S.TrackPlayAlbum>
              </S.PlayerContain>

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike className="_btn-icon">
                  <BarControlsItem
                  alt="like"
                  click={() => {
                    toggleLikeDislike(currentTrack?.id);
                  }}
                  isActive={isLiked}/>
                  {/* <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg> */}
                </S.TrackPlayLike>
                <S.TrackPlayDisike className="_btn-icon">
                  {/* <S.TrackPlayDisikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDisikeSvg> */}
                </S.TrackPlayDisike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>

          <VolumeBlock audioRef={audioRef} />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}

export default AudioPlayer
