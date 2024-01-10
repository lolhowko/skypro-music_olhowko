import { useState } from 'react'
import * as S from './barControls.styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  allTracksSelector,
  currentTrackSelector,
  indexCurrentTrackSelector,
  isPlayingSelector,
  shuffleAllTracksSelector,
  shuffleSelector,
} from '../../store/selectors/indexSelectors'
import { setNextTrack, setPrevTrack, toggleShuffleTrack } from '../../store/slices/slices'

export function BarControlsItem(props) {
  const [isActive, setIsActive] = useState(false)

  return (
    <S.playerBtn
      $style={props.alt}
      onClick={(event) => {
        setIsActive(!isActive)
        props.click()
        event.stopPropagation();
      }}
    >
      <S.playerBtnSvg
        $style={props.alt}
        alt={props.alt}
        $active={props.isActive}
      >
        <use xlinkHref={`img/icon/sprite.svg#icon-${props.alt}`} />
      </S.playerBtnSvg>
    </S.playerBtn>
  )
}

export default function BarControls({
  toggleTrackRepeat,
  repeatTrack,
  handleStartStop,
}) {
  const dispatch = useDispatch()
  const tracks = useSelector(allTracksSelector)
  const currentTrack = useSelector(currentTrackSelector)

  const isPlaying = useSelector(isPlayingSelector)

  const shuffle = useSelector(shuffleSelector)
  const shuffleAllTracks = useSelector(shuffleAllTracksSelector)
  const indexCurrentTrack = useSelector(indexCurrentTrackSelector)

  const arrayTracksAll = shuffle ? shuffleAllTracks : tracks

  const toggleCurrentTrack = (alt) => {
    if (alt === 'next' && indexCurrentTrack < arrayTracksAll.length - 1) {
      const indexNextTrack = arrayTracksAll.indexOf(currentTrack) + 1
      return dispatch(
        setNextTrack({
          nextTrack: arrayTracksAll[indexNextTrack],
          indexNextTrack,
        })
      )
    }
    if (alt === 'prev' && indexCurrentTrack > 0) {
      const indexPrevTrack = arrayTracksAll.indexOf(currentTrack) - 1
      return dispatch(
        setPrevTrack({
          prevTrack: arrayTracksAll[indexPrevTrack],
          indexPrevTrack,
        })
      )
    }
  }

  return (
    <S.BarControls>
      <BarControlsItem
        alt="prev"
        click={() => {
          toggleCurrentTrack('prev')
        }}
      />
      <BarControlsItem
        alt={isPlaying ? 'pause' : 'play'}
        click={handleStartStop}
      />
      <BarControlsItem
        alt="next"
        click={() => {
          toggleCurrentTrack('next')
        }}
      />
      <BarControlsItem
        alt="repeat"
        click={toggleTrackRepeat}
        repeatTrack={repeatTrack}
        isActive={repeatTrack}
      />
      <BarControlsItem
        alt="shuffle"
        click={() => {
          dispatch(toggleShuffleTrack(!shuffle))
        }}
        isActive={shuffle}
      />
    </S.BarControls>
  )
}
