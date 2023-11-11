import { useEffect, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './audioPlayer.styles'
import BarControls from './barControls'
import { VolumeBlock } from './volumeBlock'
import BarPlayerProgress from './BarPlayerProgress'

export function AudioPlayer({ isLoading, currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const [timeProgress, setTimeProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  const [repeatTrack, setRepeatTrack] = useState(false)


  const audioRef = useRef(null)

  const handleStartStop = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    if (isPlaying && currentTrack) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, currentTrack, audioRef])

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

  return (
    <S.Bar>
      <S.AudioComponent
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
      >
        <source src={currentTrack.track_file} />
      </S.AudioComponent>

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
                  {isLoading ? (
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackPlaySvg>
                  ) : (
                    <Skeleton count={1} width={51} height={51} />
                  )}
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                  {isLoading ? (
                    <S.TrackPlayAuthorLink href="http://">
                      {currentTrack.name}.
                    </S.TrackPlayAuthorLink>
                  ) : (
                    <Skeleton count={1} />
                  )}
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  {isLoading ? (
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
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDisike className="_btn-icon">
                  <S.TrackPlayDisikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDisikeSvg>
                </S.TrackPlayDisike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>

          <VolumeBlock
            audioRef={audioRef}
          />

          {/* <S.BarVolumeBlock className="volume">
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress className="_btn">
                <S.VolumeProgressLine
                  className=" _btn"
                  type="range"
                  name="range"
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock> */}
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}

export default AudioPlayer
