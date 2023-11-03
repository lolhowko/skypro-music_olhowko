import { getDurationAudio } from '../../utilitis/getDuration'
import * as S from './audioPlayer.styles'

export function BarPlayerProgress({ duration, timeProgress, audioRef }) {
  return (
    <>
      <S.BarPlayerProgressTime>
        {getDurationAudio(timeProgress)} /{getDurationAudio(duration)}
      </S.BarPlayerProgressTime>
      <S.BarPlayeerProgress
        type="range"
        onChange={(e) => {
          audioRef.current.currentTime = e.target.value
        }}
        min={0}
        max={duration}
        value={timeProgress}
        step={0.1}
      />
    </>
  )
}

export default BarPlayerProgress
