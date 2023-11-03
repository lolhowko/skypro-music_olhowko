import { useEffect, useState } from 'react'
import * as S from './audioPlayer.styles'

export function VolumeBlock({ volume, setVolume }) {
  const [offVolume, setOffVolume] = useState(false)

  const handleVolume = (e) => {
    setVolume(e.target.value)
  }

  const handleOffVolume = () => {
    setOffVolume(!offVolume)

    if (offVolume) {
      setVolume(0)
    } else {
      setOffVolume(volume)
    }
  }

  return (
    <S.BarVolumeBlock className="volume">
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg alt="volume" onClick={handleOffVolume}>
            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
          </S.VolumeSvg>
        </S.VolumeImage>
        <S.VolumeProgress className="_btn">
          <S.VolumeProgressLine
            className=" _btn"
            type="range"
            name="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolume}
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  )
}

export default VolumeBlock
