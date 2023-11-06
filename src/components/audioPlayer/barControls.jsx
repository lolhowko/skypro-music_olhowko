import { useState } from 'react'
import * as S from './barControls.styles'

export function BarControlsItem(props) {
  const [isActive, setIsActive] = useState(false)

  return (
    <S.playerBtn
      $style={props.alt}
      onClick={() => {
        setIsActive(!isActive)
        props.click()
      }}
    >
      <S.playerBtnSvg
        $style={props.alt}
        alt={props.alt}
        $active={props.repeatTrack}
      >
        <use xlinkHref={`img/icon/sprite.svg#icon-${props.alt}`} />
      </S.playerBtnSvg>
    </S.playerBtn>
  )
}

export default function BarControls({isPlaying, toggleTrackRepeat, repeatTrack, handleStartStop}) {
  return (
    <S.BarControls>
      <BarControlsItem
        alt="prev"
        click={() => {
          alert('Еще не реализовано')
        }}
      />
      <BarControlsItem alt={isPlaying ? 'pause' : 'play'} click={handleStartStop} />
      <BarControlsItem
        alt="next"
        click={() => {
          alert('Еще не реализовано')
        }}
      />
      <BarControlsItem
        alt="repeat"
        click={toggleTrackRepeat}
        repeatTrack={repeatTrack}
      />
      <BarControlsItem
        alt="shuffle"
        click={() => {
          alert('Еще не реализовано')
        }}
      />
    </S.BarControls>
  )
}
